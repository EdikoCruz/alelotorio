<template>
  <div class="home container">
    {{population.alleles}}
    <button class="waves-effect waves-light btn" @click="generateOffspring">Gerar Gráficos</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},

  data() {
    return {
      config: {
        maxNumberOfGenerations: 10000,
        minSize: 4,
        maxSize: 500,
        step: 4,
        repetitions: 10000,
        colors: {
          a1: '#f48fb1',
          a2: '#9fa8da',
          both: '#ce93d8',
        },
      },
      population: {
        name: 'População Teste',
        size: 200,
        alleles:{
          a1: 0,
          a2: 0,
          a: 0,
        },
      },
    };
  },

  methods: {
    generateOffspring(): void {
      const that: any = this;
      // data bind
      const population: any = that.population;
      const maxNumberOfGenerations: number = that.config.maxNumberOfGenerations;
      const repetitions: number = that.config.repetitions;
      const histogramMultiplicity: number = that.config.histogramMultiplicity;
      const total = population.size * 2;
      const size = population.size;
      const alleles = {a1: 0, a2: 0, a: 0};

      for (let _ = 0; _ < repetitions; _++) {
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
          population.alleles.a1 += 1;
        }
        if (a2 === total) {
          population.alleles.a2 += 1;
        }
        if (generation > maxNumberOfGenerations) { // bug with else =/
          population.alleles.a += 1;
        }

        population.alleles = alleles;
      }

      // population.generation = Math.min(generation, maxNumberOfGenerations);
    },
  },

  computed: {},
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
</style>