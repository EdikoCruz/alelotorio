<template>
  <div class="home container">
    <AddPopulation @add="addPopulation"/>

    <div class="divider"></div>

    <PopulationsTable
      :populations="populations"
      @remove="removePopulation"
      @start="generateOffspring"
    />

    <div class="divider"></div>

    <div class="row vertical-padding">
      <ul class="col s12 tabs teal lighten-5">
        <li class="tab">
          <a
            :class="[ tabs.show === -1 ? 'active' : '']"
            @click="tabs.show = -1">Todos</a>
        </li>
        <li class="tab" v-for="(p, i) in populations" :key="i">
          <a
            :class="[ tabs.show === i ? 'active' : '']"
            @click="tabs.show = i">{{p.name}}</a>
        </li>
      </ul>

      <div style="color: #242424; padding: 5px; text-align: center; width: 100%; font-size: 1.5rem">
        Frequências alélicas ao longo das gerações
      </div>
      <alleles-histogram
        class="col s12 vertical-margin"
        :populations="tabs.show === -1 ? populations : null"
        :population="tabs.show === -1 ? null : populations[tabs.show]"
      />

      <div class="col s12" v-if="tabs.show === -1">
        <alleles-table
        class="col s12 l8"
        :a1-color="config.colors.alleles.a1"
        :a2-color="config.colors.alleles.a2"
        :populations="populations" />
        <alleles-donut
          class="col s12 l4"
          :populations="populations"
          :a1-color="config.colors.alleles.a1"
          :a2-color="config.colors.alleles.a2" />
      </div>

      <diploid-by-generation v-for="(population, i) in populations" :key="i" v-if="tabs.show === i"
        class="col s12"
        :population="population"
        :a1-color="config.colors.diploids.a1a1"
        :both-color="config.colors.diploids.both"
        :a2-color="config.colors.diploids.a2a2"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import AddPopulation from '@/components/form/AddPopulation.vue';
import PopulationsTable from '@/components/populations/PopulationsTable.vue';

import AllelesDonut from '@/components/AllelesDonut.vue';
import AllelesHistogram from '@/components/AllelesHistogram.vue';
import AllelesTable from '@/components/AllelesTable.vue';
import DiploidByGeneration from '@/components/DiploidByGeneration.vue';


@Component({
  components: {
    AddPopulation,
    PopulationsTable,
    AllelesDonut,
    AllelesHistogram,
    AllelesTable,
    DiploidByGeneration,
  },

  data() {
    return {
      tabs: {
        show: -1,
      },
      config: {
        maxNumberOfGenerations: 5000,
        histogramMultiplicity: 10,
        minSize: 4,
        maxSize: 1000,
        step: 1,
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
          // alleles: {
          //   a1: '#6b6b6b',
          //   a2: '#484848',
          //   both: '#242424',
          // },
          // diploids: {
          //   a1a1: '#6b6b6b',
          //   a2a2: '#484848',
          //   both: '#242424',
          // },
        },
      },
      population: {},
      populations: [],
    };
  },

  methods: {
    addPopulation(population: string): void {
      const that: any = this;
      const emptyPopulation: any = {
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

      that.populations.push(Object.assign({}, emptyPopulation, population));
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
        let a1 = population.amountA1;
        let a2 = population.amountA2;

        const total = population.size * 2;
        const size = population.size;
        const diploidData = [{
          a1a1: population.amountA1A1,
          a2a2: population.amountA2A2,
          both: population.amountBoth,
        }];
        const histogramDataA1: any = {data: {1: (a1 / (a1 + a2))}};
        const histogramDataA2: any = {data: {1: (a2 / (a1 + a2))}};

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
          histogramDataA1.data[generation] = (a1 / total);
          histogramDataA2.data[generation] = (a2 / total);
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
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.vertical-margin{
  margin: 30px 0;
}

.tabs .tab a {
  font-weight: bold;
}
.tabs .tab a.active {
  font-weight: bolder;
}
.chartjs-render-monitor {
  margin: auto;
}
</style>