<template>
  <div class="home container">
    <div class="row vertical-margin">
      <form class="center-align col s8" @submit.prevent>
        <div class="input-field">
          <input
            id="population-name"
            type="text"
            placeholder=""
            class="validate"
            v-model="populationName">
          <label for="population-name">Nome da população</label>
        </div>
        <div class="input-field">
          <p class="range-field left-align">
            <label for="population-size">Tamanho da população</label>
            <input
              id="population-size"
              type="range"
              v-model="populationSize"
              :min="populationSizeMin"
              :max="populationSizeMax"/>
          </p>
        </div>
      </form>

      <div class="col s4">
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <p>Nome: {{populationName}}</p>
              <p>Tamanho: {{populationSize}}</p>
              <p>A1A1: {{a1a1}}</p>
              <p>A1A2: {{a1a2}}</p>
              <p>A2A2: {{a2a2}}</p>
            </div>
            <div class="card-action center-align">
              <button class="waves-effect waves-light btn" @click="addPopulation">Adicionar population</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="row center-align">
      <table>
        <thead>
          <tr>
              <th>Nome</th>
              <th>Tamanho</th>
              <th>a1a1</th>
              <th>a1a2</th>
              <th>a2a2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for=" (p, i) in populations" :key='i'>
            <td>{{p.populationName}}</td>
            <td>{{p.populationSize}}</td>
            <td>{{p.a1a1}}</td>
            <td>{{p.a1a2}}</td>
            <td>{{p.a2a2}}</td>
          </tr>
        </tbody>
      </table>
      <button class="waves-effect waves-light btn vertical-margin" @click="generateGeneticDrift">Gerar deriva genética</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      busy: false,
      populationName: '',
      populationSize: '1',
      populationSizeMin: 1,
      populationSizeMax: 1000,
      populations: [
        {
          populationName: 'População pequena',
          populationSize: 30,
          a1a1: 10,
          a1a2: 10,
          a2a2: 10,
        },
        {
          populationName: 'População grande',
          populationSize: 300,
          a1a1: 100,
          a1a2: 100,
          a2a2: 100,
        },
      ],
    };
  },

  methods: {
    clearPopulation(): void {
      (this as any).populationName = '';
      (this as any).populationSize = '1';
    },
    addPopulation(): void {
      if ((this as any).populationIsValid) {
        (this as any).populations.push((this as any).population);
        (this as any).clearPopulation();
      }
    },
    generateGeneticDrift(): void {
      (this as any).busy = true;
      (this as any).populations.forEach((p: any) => {
        const offspring: any[] = [{
          a1a1: p.a1a1,
          a1a2: p.a1a2,
          a2a2: p.a2a2,
        }];
        let generation = 0;
        while (generation <= 100 ||
                offspring[generation].a1a1 !== p.populationSize ||
                offspring[generation].a2a2 !== p.populationSize) {
          offspring.push({
            a1a1: p.a1a1,
            a1a2: p.a1a2,
            a2a2: p.a2a2,
          });
          generation += 1;
        }
        p.push(offspring);
      });
      (this as any).busy = false;
    },
  },

  computed: {
    a1a1(): number {
      let total = Math.floor(Number((this as any).populationSize) / 3); // 1/3
      if (Number((this as any).populationSize % 3 === 2)) {
        total = total + 1;
      }
      return total;
    },
    a1a2(): number {
      let total = Math.floor(Number((this as any).populationSize) / 3); // 1/3
      if (Number((this as any).populationSize % 3 === 1)) {
        total = total + 1;
      }
      return total;
    },
    a2a2(): number {
      let total = Math.floor(Number((this as any).populationSize) / 3); // 1/3
      if (Number((this as any).populationSize % 3 === 2)) {
        total = total + 1;
      }
      return total;
    },
    population(): any {
      return {
        populationName: (this as any).populationName,
        populationSize: Number((this as any).populationSize),
        a1a1: (this as any).a1a1,
        a1a2: (this as any).a1a2,
        a2a2: (this as any).a2a2,
      };
    },
    populationIsValid(): boolean {
      let isValid = true;
      isValid = isValid && (this as any).populationName.length > 0;
      isValid = isValid && Number((this as any).populationSize) >= Number((this as any).populationSizeMin);
      isValid = isValid && Number((this as any).populationSize) <= Number((this as any).populationSizeMax);
      return isValid;
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