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

    <div class="divider"></div>

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

    <div class="divider"></div>
    <div class="row vertical-margin">
      <ul class="col s12 tabs">
        <li class="tab col s6">
          <a :class="[ tabs.lean ? '' : 'active']" @click="tabs.lean = false">Completo</a>
        </li>
        <li class="tab col s6">
          <a :class="[ tabs.lean ? 'active' : '']" @click="tabs.lean = true">Enxuto</a>
        </li>
      </ul>

      <div class="col s12">
        <div class="col s12 l2">
          <pie-chart
            :data="allelesData"
            :colors="['#cfd8dc',config.colors.a1, config.colors.a2]"
            :donut="true" />
        </div>
        <alleles-histogram
          class="col s12 l5"
          :populations="populations"
          :attribute="tabs.lean ? 'histogramDataCleaned' : 'histogramData'"
          :full="!tabs.lean"
          :a1-color="config.colors.a1"
          :a2-color="config.colors.a2" />
        <alleles-table
          class="col s12 l5"
          :populations="populations" />
      </div>
    </div>

    <div class="divider"></div>

    <!-- DIPLOIDS -->
    <div class="row vertical-margin">
      <diploid-by-generation
        class="col s12 l4"
        v-for="(population, i) in populations"
        :key="i"
        :population="population"
        :a1-color="config.colors.a1"
        :both-color="config.colors.both"
        :a2-color="config.colors.a2" />
    </div>

    <div class="divider"></div>

    <div class="row vertical-margin">
      <div v-for="(population, i) in populations" :key="i">
        <alleles-histogram
          class="col s12 l6"
          :population="population"
          :a1-color="config.colors.a1"
          :a2-color="config.colors.a2" />
        <diploid-by-generation
          class="col s12 l6"
          :population="population"
          :a1-color="config.colors.a1"
          :both-color="config.colors.both"
          :a2-color="config.colors.a2" />
      </div>
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
      tabs: {
        lean: false,
      },
      config: {
        maxNumberOfGenerations: 5000,
        histogramMultiplicity: 10,
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
        allele: '-',
        generation: '',
        // charts data
        histogramData: {a1: {}, a2: {}},
        histogramDataCleaned: {a1: {}, a2: {}},
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
      const histogramMultiplicity: number = that.config.histogramMultiplicity;

      populations.forEach((population: any) => {
        let a1 = population.size;
        let a2 = population.size;
        const total = population.size * 2;
        const size = population.size;
        const diploidData = [{a1a1: total / 4, a2a2: total / 4, both: total / 2}];
        const histogramDataA1: any = {name: `${population.name} A1`, data: {1: 50}};
        const histogramDataA2: any = {name: `${population.name} A2`, data: {1: 50}};

        let generation = 2;
        while (generation <= maxNumberOfGenerations && a1 !== total && a2 !== total) {
          let a1Counter = 0;
          let a2Counter = 0;
          const diploid = {a1a1: 0, a2a2: 0, both: 0};

          for (let index = 0; index < size; index++) {
            const d2 = Math.ceil(Math.random() * total) <= a1 ? 'a1' : 'a2';
            const d1 = Math.ceil(Math.random() * total) <= a2 ? 'a2' : 'a1';

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
        if (generation === maxNumberOfGenerations) {
          population.allele = '-';
        } else {
          population.allele = a1 === total ? 'A1' : 'A2';
        }
        // const histogramDataA1: any = {name: `${population.name} A1`, data: {0: 50}};
        const histogramDataA1Cleaned: any = {...histogramDataA1};
        const histogramDataA2Cleaned: any = {...histogramDataA2};
        histogramDataA1Cleaned.data = {0: 50};
        histogramDataA2Cleaned.data = {0: 50};

        let i = histogramMultiplicity;
        while (i < generation) {
          histogramDataA1Cleaned.data[i] = histogramDataA1.data[i];
          histogramDataA2Cleaned.data[i] = histogramDataA2.data[i];
          i += histogramMultiplicity;
        }
        histogramDataA1Cleaned.data[
          Math.floor(generation / histogramMultiplicity) * histogramMultiplicity
        ] = histogramDataA1.data[generation - 1];
        histogramDataA2Cleaned.data[
          Math.floor(generation / histogramMultiplicity) * histogramMultiplicity
        ] = histogramDataA2.data[generation - 1];
        population.histogramDataCleaned = {a1: histogramDataA1Cleaned, a2: histogramDataA2Cleaned};
        population.histogramData = {a1: histogramDataA1, a2: histogramDataA2};
        population.diploidData = diploidData;
      });
    },
  },

  computed: {
    allelesData(): any[] {
      const that: any = this;
      // data bind
      const populations: any = that.populations;
      const r = [['-', 0], ['a1', 0], ['a2', 0]];

      populations.forEach((p: any) => {
        if (p.allele === 'A1') {
          r[1][1] = Number(r[1][1]) + 1;
        } else if (p.allele === 'A2') {
          r[2][1] = Number(r[2][1]) + 1;
        } else {
          r[0][1] = Number(r[0][1]) + 1;
        }
      });

      return r;
    },
  },

  mounted() {
    const that: any = this;

    that.createPopulationForm(); // to add attributes

    that.population.name = 'Aquário';
    that.population.size = 20;
    that.addPopulation();

    that.population.name = 'Pet shop';
    that.population.size = 80;
    that.addPopulation();

    that.population.name = 'Distribuidor';
    that.population.size = 200;
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