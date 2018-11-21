<template>
  <div class="home container">
    
    <!-- POPULATION FORM -->
    <form class="col s12 vertical-margin" @submit.prevent>
      <div class="row">
        <div class="input-field col s12 l5">
          <input id="population-name" type="text" v-model="population.name">
          <label for="population-name">Nome</label>
        </div>
        <div class="input-field col s12 l5">
          <input id="population-size" type="number" v-model="population.size" :min="config.minSize" :max="config.maxSize" :step="config.step">
          <label for="population-size">Tamanho</label>
        </div>
        <div class="input-field col s12 l2 center-align">
          <button class="waves-effect waves-light btn" @click="addPopulation">Adicionar</button>
        </div>
      </div>
    </form>

    <!-- POPULATIONS -->
    <table class="striped centered vertical-margin">
      <thead>
        <tr>
            <th>Nome</th>
            <th>Tamanho</th>
            <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in populations" :key="i">
          <td>{{p.name}}</td>
          <td>{{p.size}}</td>
          <td>
            <button class="waves-effect waves-light btn" @click="removePopulation(i)">
              <i class="material-icons center">delete</i>
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="center-align" colspan="3">
            <button class="waves-effect waves-light btn" @click="generateOffspring">Gerar Gráficos</button>
          </td>
        </tr>
      </tfoot>
    </table>

    <!-- ALLELES -->
    <div class="row vertical-margin">
      <alleles-histogram
        class="col s12 l6"
        :populations="populations"
        :a1-color="config.colors.a1"
        :a2-color="config.colors.a2" />
      <alleles-table
        class="col s12 l6"
        :populations="populations" />
    </div>

    <!-- DIPLOIDS -->
    <div class="row vertical-margin">
      <diploid-by-generation
        class="col s12 l4"
        v-for="(p, i) in populations"
        :key="i"
        :population="p"
        :a1-color="config.colors.a1"
        :both-color="config.colors.both"
        :a2-color="config.colors.a2" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AllelesHistogram from '@/components/AllelesHistogram.vue';
import AllelesTable from '@/components/AllelesTable.vue';
import DiploidByGeneration from '@/components/DiploidByGeneration.vue';

@Component({
  components: {
    AllelesHistogram,
    AllelesTable,
    DiploidByGeneration,
  },

  data() {
    return {
      t: 0,
      config: {
        maxNumberOfGenerations: 9999,
        minSize: 4,
        maxSize: 1000,
        step: 4,
        colors: {
          a1: '#f48fb1',
          a2: '#9fa8da',
          both: '#ce93d8',
        },
      },
      population: {},
      populations: [],
    };
  },

  methods: {
    createPopulationForm(): void {
      const that: any = this; // tslinter's data attributes bug
      that.population = {
        // population attributes
        name: '',
        size: '',
        // if allele is fixed
        allele: '',
        generation: '',
        // charts data
        histogramData: {a1: {}, a2: {}},
        diploidData: [],
      };
    },
    addPopulation(): void {
      // M is global
      // @ts-ignore
      const toast = M.toast;

      const that: any = this;
      // data bind
      const population: any = that.population;
      const populations: any = that.populations;
      const minSize = that.config.minSize;
      const maxSize = that.config.maxSize;
      const step = that.config.step;
      // population attributes
      const size = Number(population.size);
      const name = population.name;

      if (! name) {
        toast({html: 'O nome não pode estar em branco'});
      } else if (size % step !== 0) {
        toast({html: `O tamanho precisa ser múltiplo de ${step}`});
      } else if (size < minSize) {
        toast({html: `O tamanho não pode ser menor ${minSize}`});
      } else if (size > maxSize) {
        toast({html: `O tamanho não pode ser maior ${maxSize}`});
      } else {
        populations.push(population);
        that.createPopulationForm();
      }
    },
    removePopulation(index): void {
      const that: any = this;
      that.populations.splice(index, 1);
    },
    generateOffspring(): void {
      const that: any = this;
      // data bind
      const populations: any = that.populations;
      const maxNumberOfGenerations: number = that.config.maxNumberOfGenerations;

      populations.forEach((population: any) => {
        let a1 = population.size;
        let a2 = population.size;
        const total = population.size * 2;
        const size = population.size;
        const diploidData = [{a1a1: total / 4, a2a2: total / 4, both: total / 2}];
        const histogramDataA1: any = {name: `${population.name} A1`, data: {0: 50}};
        const histogramDataA2: any = {name: `${population.name} A2`, data: {0: 50}};

        let generation = 1;
        while (generation < maxNumberOfGenerations && a1 !== total && a2 !== total) {
          let a1Counter = 0;
          let a2Counter = 0;
          const diploid = {a1a1: 0, a2a2: 0, both: 0};

          for (let index = 0; index < size; index++) {
            const d1 = Math.ceil(Math.random() * total) <= a1 ? 'a1' : 'a2';
            const d2 = Math.ceil(Math.random() * total) <= a1 ? 'a1' : 'a2';

            if (d1 === 'a1' && d2 === 'a1') {
              diploid.a1a1 += 1;
              a1Counter += 2;
            } else if (d1 === 'a2' && d2 === 'a2') {
              diploid.a2a2 += 1;
              a2Counter += 2;
            } else {
              diploid.both += 1;
              a1Counter += 1;
              a2Counter += 1;
            }
          }

          diploidData.push(diploid);
          a1 = a1Counter;
          a2 = a2Counter;
          histogramDataA1.data[generation] = (a1 / total) * 100;
          histogramDataA2.data[generation] = (a2 / total) * 100;
          generation += 1;
        }

        population.generation = Math.min(generation, maxNumberOfGenerations);
        population.allele = a1 === total ? 'A1' : 'A2';
        population.histogramData = {a1: histogramDataA1, a2: histogramDataA2};
        population.diploidData = diploidData;
      });
    },
  },

  computed: {},

  mounted() {
    const that: any = this;

    that.createPopulationForm(); // to add attributes

    that.population.name = 'População Pequena';
    that.population.size = 40;
    that.addPopulation();

    that.population.name = 'População Grande';
    that.population.size = 400;
    that.addPopulation();

    that.population.name = 'População Enorme';
    that.population.size = 1000;
    that.addPopulation();
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.vertical-margin{
  margin: 30px 0;
}
</style>