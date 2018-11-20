<template>
  <div class="home container">
    
    <!-- POPULATION FORM -->
    <form class="col s12" @submit.prevent>
      <div class="row">
        <div class="input-field col s5">
          <input id="population-name" type="text" v-model="population.name">
          <label for="population-name">Nome</label>
        </div>
        <div class="input-field col s5">
          <input id="population-size" type="number" v-model="population.size" min="1" max="10000">
          <label for="population-size">Tamanho</label>
        </div>
        <div class="input-field col s2">
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

    <line-chart :data="histogramData" xtitle="Geração" ytitle="Porcentagem do alelo" height="500px"/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      maxNumberOfGenerations: 9999,
      population: {
        name: '',
        size: '',
      },
      populations: [
        {
          name: 'População Pequena',
          size: 50,
          a1: 50,
          a2: 50,
          histogram: [],
        },
        {
          name: 'População Média',
          size: 100,
          a1: 100,
          a2: 100,
          histogram: [],
        },
        {
          name: 'População Grande',
          size: 200,
          a1: 200,
          a2: 200,
          histogram: [],
        },
      ],
    };
  },

  methods: {
    addPopulation(): void {
      const p: any = (this as any).population;
      // eval to access global =/
      if (p.name === '') {
        // @ts-ignore
        (M as any).toast({html: 'O nome não pode estar em branco'});
      } else if (Number(p.size) < 1 || Number(p.size) > 10000) {
        // @ts-ignore
        (M as any).toast({html: 'O tamanho não pode ser menor que 1 ou maior que 10000'});
      } else {
        (this as any).populations.push({
          name: p.name,
          size: Number(p.size),
          a1: Number(p.size),
          a2: Number(p.size),
          histogram: [],
        });
        (this as any).population = {name: '', size: ''};
      }
    },
    removePopulation(index): void {
      (this as any).populations.splice(index, 1);
    },
    generateHistogram(): void {
      (this as any).populations.forEach((p: any) => {
        const h = [{a1: p.a1, a2: p.a2}];
        const total = p.size * 2;

        let g = 0;
        while (g < (this as any).maxNumberOfGenerations && h[g].a1 !== total && h[g].a2 !== total) {
          let a1 = 0;
          let a2 = 0;
          const a1Percentage = h[g].a1 / total;

          for (let index = 0; index < total; index++) {
            if (Math.random() < a1Percentage) {
              a1 += 1;
            } else {
              a2 += 1;
            }
          }

          h.push({a1, a2});
          g += 1;
        }

        p.histogram = h;
      });
    },
  },

  computed: {
    histogramData(): any[] {
      return (this as any).populations.reduce((p: any, c: any) => {
        const population = c;
        p.push({
          name: c.name + ' A1',
          data: c.histogram.reduce((p: any, c: any, i: number) => {
            p[i] = (c.a1 / (population.size * 2)) * 100;
            return p;
          }, {}),
        });
        p.push({
          name: c.name + ' A2',
          data: c.histogram.reduce((p: any, c: any, i: number) => {
            p[i] = (c.a2 / (population.size * 2)) * 100;
            return p;
          }, {}),
        });
        return p;
      }, []);
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.vertical-margin{
  margin: 30px 0;
}
</style>