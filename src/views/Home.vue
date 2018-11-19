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
          <input id="population-size" type="number" v-model="population.size">
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in populations" v-bind:key="i">
          <td>{{p.name}}</td>
          <td>{{p.size}}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="center-align" colspan="2">
            <button class="waves-effect waves-light btn" @click="generateHistogram">Gerar histogram</button>
          </td>
        </tr>
      </tfoot>
    </table>

    <div v-for="(p, i) in populations" v-bind:key="i">
      <br/>
      {{p.name}}:{{p.histogram.length}}
      <br/>
      {{p.histogram[p.histogram.length-1]}}
    </div>

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
          size: 20,
          a1: 20,
          a2: 20,
          histogram: [],
        },
        {
          name: 'População Média',
          size: 200,
          a1: 200,
          a2: 200,
          histogram: [],
        },
        {
          name: 'População Grande',
          size: 400,
          a1: 400,
          a2: 400,
          histogram: [],
        },
        {
          name: 'População Enorme',
          size: 800,
          a1: 800,
          a2: 800,
          histogram: [],
        },
      ],
    };
  },

  methods: {
    addPopulation(): void {
      const p: any = (this as any).population;
      (this as any).populations.push({
        name: p.name,
        size: Number(p.size),
        a1: Number(p.size),
        a2: Number(p.size),
        histogram: [],
      });
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
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.vertical-margin{
  margin: 30px 0;
}
</style>