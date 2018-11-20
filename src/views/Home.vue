<template>
  <div class="home container">
    
    <!-- POPULATION FORM -->
    <form class="col s12" @submit.prevent>
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
    <table class="striped">
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
            <button class="waves-effect waves-light btn" @click="generateHistogram">Gerar histogram</button>
          </td>
        </tr>
      </tfoot>
    </table>

     <!-- HISTOGRAM -->
    <table class="striped vertical-margin">
      <thead>
        <tr>
            <th>Nome</th>
            <th>Alelo fixado</th>
            <th>Geração em que o alelo foi fixado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in populations" :key="i">
          <td>{{p.name}}</td>
          <td>{{p.allele}}</td>
          <td>{{p.generation}}</td>
        </tr>
      </tbody>
    </table>
    <line-chart :data="histogramData" xtitle="Geração" ytitle="Porcentagem do alelo" height="500px"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { constants } from 'http2';

@Component({
  data() {
    return {
      config: {
        maxNumberOfGenerations: 9999,
        minSize: 4,
        maxSize: 1000,
        step: 4,
      },
      population: {},
      populations: [],
    };
  },

  methods: {
    clearPopulation(): void {
      // to avoid tslinter check, it do not validate data attributes
      const that: any = this;
      that.population = {
        name: '',
        size: '',
        allele: '',
        generation: '',
        histogramData: {a1: {}, a2: {}},
      };
    },
    addPopulation(): void {
      // M is global
      // @ts-ignore
      const toast = M.toast;
      // to avoid tslinter check, it do not validate data attributes
      const that: any = this;
      // data bind
      const population: any = that.population;
      const populations: any = that.populations;
      const minSize = that.config.minSize;
      const maxSize = that.config.maxSize;
      const step = that.config.step;
      // population validation
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
        that.clearPopulation();
      }
    },
    removePopulation(index): void {
      // to avoid tslinter check, it do not validate data attributes
      const that: any = this;
      that.populations.splice(index, 1);
    },
    generateHistogram(): void {
      // to avoid tslinter check, it do not validate data attributes
      const that: any = this;
      // data bind
      const populations: any = that.populations;
      const maxNumberOfGenerations: number = that.config.maxNumberOfGenerations;

      populations.forEach((population: any) => {
        let a1 = population.size;
        let a2 = population.size;
        const total = population.size * 2;
        const histogramDataA1: any = {name: `${population.name} A1`, data: {0: 50}};
        const histogramDataA2: any = {name: `${population.name} A2`, data: {0: 50}};

        let generation = 1;
        while (generation < maxNumberOfGenerations && a1 !== total && a2 !== total) {
          let a1Counter = 0;
          let a2Counter = 0;
          const a1Percentage = a1 / total;

          for (let index = 0; index < total; index++) {
            if (Math.random() < a1Percentage) {
              a1Counter += 1;
            } else {
              a2Counter += 1;
            }
          }
          a1 = a1Counter;
          a2 = a2Counter;
          histogramDataA1.data[generation] = (a1 / total) * 100;
          histogramDataA2.data[generation] = (a2 / total) * 100;
          generation += 1;
        }

        population.generation = Math.min(generation, maxNumberOfGenerations);
        population.allele = a1 == total ? 'A1' : 'A2';
        population.histogramData = {a1: histogramDataA1, a2: histogramDataA2};
      });
    },
  },

  computed: {
    histogramData(): any[] {
      // to avoid tslinter check, it do not validate data attributes
      const that: any = this;
      // data bind
      const populations: any = that.populations;

      return populations.reduce((product: any, population: any) => {
        product.push(population.histogramData.a1);
        product.push(population.histogramData.a2);

        return product;
      }, []);
    },
  },

  mounted() {
    // to avoid tslinter check, it do not validate data attributes
    const that: any = this;

    that.clearPopulation();

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