<template>
  <div class="home container">
    <div class="row vertical-margin">
      <div class="col s12 l6">
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <p class="center-align title"><b>{{population.name}}</b></p>
              <p class="center-align"><b>Tamanho: </b>{{population.size}}</p>
              <p class="center-align"><b>Repetições: </b>{{repetitions}}</p>
              <p class="center-align"><b>Máximo de gerações: </b>{{config.maxNumberOfGenerations}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col s12 l6">
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <p class="center-align">TAMANHO</p>
              <input
                type="range"
                :min="config.minSize"
                :max="config.maxSize"
                :step="config.step"
                v-model="population.size"/>
              <p class="center-align">REPETIÇÕES</p>
              <input
                type="range"
                :min="config.minNumberOfRepetions"
                :max="config.maxNumberOfRepetions"
                :step="config.stepNumberOfRepetions"
                v-model="repetitions"/>
              <p class="center-align">MÁXIMO DE GERAÇÕES</p>
              <input
                type="range"
                :min="100"
                :max="5000"
                :step="50"
                v-model="config.maxNumberOfGenerations"/>
            </div>
          </div>
        </div>
      </div>

      <div class="col s12 center-align vertical-align">
        <button
          class="waves-effect waves-light btn"
          @click="beforeGenerate" >
          Iniciar simulação
        </button>
      </div>

      <div class="col s12 center-align vertical-margin" v-show="loading">
        <div class="preloader-wrapper big active">
          <div class="spinner-layer spinner-green-only">
            <div class="circle-clipper left">
              <div class="circle"></div>
            </div><div class="gap-patch">
              <div class="circle"></div>
            </div><div class="circle-clipper right">
              <div class="circle"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="col s12 l8 vertical-margin" v-show="!loading">
        <column-chart
          ytitle="Fixações"
          xtitle="Geração"
          :data="generationsData" />
        <h6 class="center-align"><b>Agrupar por: {{factor}}</b></h6>
        <input
          type="range"
          :min="Math.ceil((population.lastRun || population.size) / 8)"
          :max="Math.ceil((population.lastRun || population.size) / 2)"
          :step="1"
          v-model="factor"/>
      </div>
      <div class="col s12 l4 vertical-margin" v-show="!loading">
        <pie-chart
          :data="allelesData"
          :colors="[config.colors.alleles.a2, config.colors.alleles.both, config.colors.alleles.a1]"
          :donut="true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},

  data() {
    return {
      loading: false,
      repetitions: 300,
      factor: 50,
      config: {
        maxNumberOfGenerations: 2550,
        maxNumberOfRepetions: 500,
        minNumberOfRepetions: 100,
        stepNumberOfRepetions: 50,
        minSize: 20,
        maxSize: 500,
        step: 20,
        colors: {
          alleles: {
            a1: '#f48fb1',
            a2: '#9fa8da',
            both: '#ce93d8',
          },
          diploids: {
            a1a1: '#ffe082',
            a2a2: '#bf360c',
            both: '#ff9100',
          },
        },
      },
      population: {
        name: 'Aquários',
        size: 250,
        lastRun: false,
        alleles: {
          a1: 0,
          a2: 0,
          a: 0,
        },
        generations: {},
      },
    };
  },

  methods: {
    beforeGenerate(): void {
      // @ts-ignore
      this.loading = true;
      // @ts-ignore
      setTimeout(() => this.generateOffspring(), 100);
    },
    generateOffspring(): void {
      const that: any = this;
      // data bind
      const population: any = that.population;
      const maxNumberOfGenerations: number = that.config.maxNumberOfGenerations;
      const repetitions: number = that.repetitions;
      const histogramMultiplicity: number = that.config.histogramMultiplicity;
      const total = population.size * 2;
      const size = population.size;
      const alleles = {a1: 0, a2: 0, a: 0};
      const generations: any = {};

      for (let i = 0; i < repetitions; i++) {
        let a1 = population.size;
        let a2 = population.size;

        let generation = 2;
        while (generation <= maxNumberOfGenerations && a1 !== total && a2 !== total) {
          let a1Counter = 0;
          let a2Counter = 0;

          for (let _ = 0; _ < size; _++) {
            const d2 = Math.ceil(Math.random() * total) <= a1 ? 'a1' : 'a2';
            const d1 = Math.ceil(Math.random() * total) <= a2 ? 'a2' : 'a1';

            if (d1 === 'a1' && d2 === 'a1') {
              a1Counter += 2;
            } else if (d1 === 'a2' && d2 === 'a2') {
              a2Counter += 2;
            } else {
              a1Counter += 1;
              a2Counter += 1;
            }
          }
          a1 = a1Counter;
          a2 = a2Counter;
          generation += 1;
        }

        if (a1 === total) {
          alleles.a1 += 1;
        } else if (a2 === total) {
          alleles.a2 += 1;
        } else {
          alleles.a += 1;
        }

        generations[generation] = generations[generation] || 0;
        generations[generation] += 1;
      }

      population.alleles = alleles;
      population.lastRun = size;
      population.generations = generations;
      // @ts-ignore
      this.loading = false;
    },
    getFactor(): number {
      const that: any = this;
      const population: any = that.population;
      const size: number = population.size;
      return Math.floor(size / 4);
    },
  },

  computed: {
    allelesData(): any {
      const that: any = this;
      // data bind
      const population: any = that.population;
      return [
        ['A2', population.alleles.a2],
        ['Não fixado', population.alleles.a],
        ['A1', population.alleles.a1],
      ];
    },
    generationsData(): any[] {
      const that: any = this;
      // data bind
      const population: any = that.population;
      const factor: any = that.factor;

      const g: any = {};

      Object.keys(population.generations).forEach((c: any) => {
        const leanG = Math.floor(Number(c) / factor);
        const v = population.generations[c];
        g[leanG] = g[leanG] || 0;
        g[leanG] += v;
      });

      return Object.keys(g).reduce((p: any, c: any) => {
        p.push([c * factor, g[c]]);
        return p;
      }, []);
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.title {
  font-size: 1.5em;
  padding: 10px 0;
}
.vertical-margin{
  margin: 30px 0;
}
.tabs .tab a {
  font-weight: bold;
}
.tabs .tab a.active {
  font-weight: bolder;
}
</style>