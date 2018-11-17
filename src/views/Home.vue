<template>
  <div class="home">
    <form action="#" class="form-population container center-align">
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
        <input 
          id="population-size"
          type="number"
          placeholder=""
          class="validate"
          v-model="populationSize"
          :min="populationSizeMin"
          :max="populationSizeMax">
        <label for="population-size">Tamanho da população</label>
      </div>
      <button class="waves-effect waves-light btn" @click="addPopulation">Adicionar population</button>
    </form>

    {{ population }}
    {{ populations }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      populationName: '',
      populationSize: '',
      populationSizeMin: 1,
      populationSizeMax: 10000,
      populations: [],
    };
  },

  methods: {
    clearPopulation(): void {
      (this as any).populationName = '';
      (this as any).populationSize = '';
    },
    addPopulation(): void {
      if ((this as any).populationIsValid) {
        (this as any).populations.push((this as any).population);
        (this as any).clearPopulation();  
      }
    },
  },

  computed: {
    population(): any {
      return {
        populationName: (this as any).populationName,
        populationSize: Number((this as any).populationSize),
      };
    },
    populationIsValid(): Boolean {
      let isValid = true
      isValid = isValid && (this as any).populationName.length > 0
      isValid = isValid && Number((this as any).populationSize) >= Number((this as any).populationSizeMin)
      isValid = isValid && Number((this as any).populationSize) <= Number((this as any).populationSizeMax)
      return isValid;
    },
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.form-population{
  padding-top: 30px;
}
</style>