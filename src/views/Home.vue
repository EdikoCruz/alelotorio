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
            <button class="waves-effect waves-light btn" @click="generateHistogram">Gerar Gráficos</button>
          </td>
        </tr>
      </tfoot>
    </table>

     <!-- HISTOGRAM -->
    <line-chart
      :data="histogramData"
      :colors="histogramColors"
      :messages="{empty: 'Sem dados'}"
      legend="bottom"
      xtitle="Geração"
      ytitle="Porcentagem do alelo"
      height="500px" />
    <table class="striped centered vertical-margin">
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
          <td>{{p.allele || 'Sem dados'}}</td>
          <td>{{p.generation || 'Sem dados'}}</td>
        </tr>
      </tbody>
    </table>

    <!-- POPULATION DIPLOID -->
    <div class="row">
      <table class="striped centered vertical-margin">
        <thead>
          <tr>
              <th></th>
              <th>A1A1</th>
              <th>A2A2</th>
              <th>Both</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Geração</td>
            <td>{{diploidData.length > 0 ? (diploidData[0].length >0 ? diploidData[0][t].a1a1 : 0) : 'Sem dados'}}</td>
            <td>{{diploidData.length > 0 ? (diploidData[0].length >0 ? diploidData[0][t].a2a2 : 0) : 'Sem dados'}}</td>
            <td>{{diploidData.length > 0 ? (diploidData[0].length >0 ? diploidData[0][t].both : 0) : 'Sem dados'}}</td>
          </tr>
        </tbody>
      </table>
      <pie-chart :data="[
          ['A1a1', diploidData.length > 0 ? (diploidData[0].length >0 ? diploidData[0][t].a1a1 : 0) : 'Sem dados'],
          ['Both', diploidData.length > 0 ? (diploidData[0].length >0 ? diploidData[0][t].both : 0) : 'Sem dados'],
          ['A2A2', diploidData.length > 0 ? (diploidData[0].length >0 ? diploidData[0][t].a2a2 : 0) : 'Sem dados']
        ]"
        :donut="true"
        :colors="['#F012BE','#B10DC9','#0074D9']"></pie-chart>
      <p class="range-field">
        <input type="range" min="0" :max="diploidData.length > 0 ? diploidData[0].length-1 : 0" v-model="t"/>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { constants } from 'http2';
import { finished } from 'stream';

@Component({
  data() {
    return {
      t: 0,
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
        // if fixed
        allele: '',
        generation: '',
        // data
        histogramData: {a1: {}, a2: {}},
        diploidData: [],
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
        const diploidData = population.diploidData;
        const histogramDataA1: any = {name: `${population.name} A1`, data: {0: 50}};
        const histogramDataA2: any = {name: `${population.name} A2`, data: {0: 50}};

        let generation = 1;
        let afterFinished = 0;
        while (afterFinished < 2) {
          let a1Counter = 0;
          let a2Counter = 0;
          const pool = [...Array(a1).fill('a1'), ...Array(a2).fill('a2')];

          for (let index = 0; index < total; index++) {
            const randomIndex = Math.floor(Math.random() * total);
            if (pool[randomIndex] === 'a1') {
              a1Counter += 1;
            } else {
              a2Counter += 1;
            }
            // shuffle
            [pool[randomIndex], pool[index]] = [pool[index], pool[randomIndex]];
          }
          const diploid = {a1a1: 0, a2a2: 0, both: 0};
          for (let index = 0; index < total / 2; index++) {
            if (pool[index] === 'a1' && pool[total - 1 - index] === 'a1') {
              diploid.a1a1 += 1;
            } else if (pool[index] === 'a2' && pool[total - 1 - index] === 'a2') {
              diploid.a2a2 += 1;
            } else {
              diploid.both += 1;
            }
          }
          diploidData.push(diploid);

          a1 = a1Counter;
          a2 = a2Counter;
          histogramDataA1.data[generation] = (a1 / total) * 100;
          histogramDataA2.data[generation] = (a2 / total) * 100;
          generation += 1;
          if (!(generation < maxNumberOfGenerations && a1 !== total && a2 !== total)) {
            afterFinished += 1;
          }
        }

        population.generation = Math.min(generation, maxNumberOfGenerations);
        population.allele = a1 === total ? 'A1' : 'A2';
        population.histogramData = {a1: histogramDataA1, a2: histogramDataA2};
      });
    },
  },

  computed: {
    histogramColors(): string[] {
      // to avoid tslinter check, it do not validate data attributes
      const that: any = this;
      // data bind
      const populations: any = that.populations;

      return populations.reduce((product: any, population: any) => {
        product.push('#F012BE');
        product.push('#0074D9');
        return product;
      }, []);
    },
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
    diploidData(): any {
      // to avoid tslinter check, it do not validate data attributes
      const that: any = this;
      // data bind
      const populations: any = that.populations;
      if (populations.length > 0) {
        return populations.reduce((product: any, population: any) => {
          product.push(population.diploidData);
          return product;
        }, []);
      }
      return [];
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