<template>
    <form class="col s12 vertical-margin" @submit="onSubmit">
      <div class="row">
        <div class="input-field col s12 l6">
          <label for="population-name">Nome da população</label>
          <input id="population-name" type="text" v-model="name" />
        </div>

        <div class="input-field col s12 l6">
          <input id="population-size" @input="(event) => onSizeChange(Number(event.target.value))" type="number" v-model="size" min="0">
          <label for="population-size">Tamanho total da population</label>
        </div>
      </div>

      <div class="row">
        <div class="switch col s12 l6">
          <label>
            <input type="checkbox" @change="updateLabels" v-model="showOptions">
            <span class="lever"></span>
            Mostrar opções avançadas
          </label>
        </div>
        <div class="switch col s12 l6" v-if="showOptions">
          <label>
            Mostar diploides
            <input type="checkbox" @change="updateLabels" v-model="showAsAlleles">
            <span class="lever"></span>
            Mostar alelos
          </label>
        </div>
      </div>

      <div class="row" v-if="showOptions && showAsAlleles">
        <div class="input-field col s10 l5">
          <input id="population-amountA1" @input="onAmountA1Change" type="number" v-model="amountA1" min="0">
          <label for="population-amountA1">Quantidade de A1</label>
        </div>
        <div class="input-field col s2 l1">
          <input id="population-colorA1" type="color" v-model="colorA1" min="0">
        </div>

        <div class="input-field col s10 l5">
          <input id="population-amountA2" @input="onAmountA2Change" type="number" v-model="amountA2" min="0">
          <label for="population-amountA2">Quantidade de A2</label>
        </div>
        <div class="input-field col s2 l1">
          <input id="population-colorA2" type="color" v-model="colorA2" min="0">
        </div>
      </div>

      <div class="row" v-if="showOptions && !showAsAlleles">
        <div class="input-field col s10 l3">
          <input id="population-amountA1A1" @input="onamountA1A1Change" type="number" v-model="amountA1A1" min="0">
          <label for="population-amountA1A1">Quantidade de A1A1</label>
        </div>
        <div class="input-field col s2 l1">
          <input id="population-colorA1A1" type="color" v-model="colorA1A1" min="0">
        </div>

        <div class="input-field col s10 l3">
          <input id="population-amountBoth" @input="onAmountBothChange" type="number" v-model="amountBoth" min="0">
          <label for="population-amountBoth">Quantidade de A1A2 e A2A1</label>
        </div>
        <div class="input-field col s2 l1">
          <input id="population-colorBoth" type="color" v-model="colorBoth" min="0">
        </div>

        <div class="input-field col s10 l3">
          <input id="population-amountA2A2" @input="onAmountA2A2Change" type="number" v-model="amountA2A2" min="0">
          <label for="population-amountA2A2">Quantidade de A2A2</label>
        </div>
        <div class="input-field col s2 l1">
          <input id="population-colorA2A2" type="color" v-model="colorA2A2" min="0">
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 center-align">
          <button class="waves-effect waves-light btn">Adicionar</button>
        </div>
      </div>
    </form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import population from '@/interfaces/population.ts';

@Component({
  data() {
    return {
      showOptions: false,
      showAsAlleles: true,
      isAlleleAmountPristine: true,
      isDiploidAmountPristine: true,
      name: '',
      size: 0,
      amountA1: 0,
      amountA2: 0,
      amountA1A1: 0,
      amountA2A2: 0,
      amountBoth: 0,
      colorA1: '#f48fb1',
      colorA2: '#9fa8da',
      colorA1A1: '#ffe082',
      colorA2A2: '#bf360c',
      colorBoth: '#ff9100',
    };
  },
  methods: {
    resetValues() {
      const that: any = this;
      Object.assign(that, {
        isAlleleAmountPristine: true,
        isDiploidAmountPristine: true,
        name: '',
        size: 0,
        amountA1: 0,
        amountA2: 0,
        amountA1A1: 0,
        amountA2A2: 0,
        amountBoth: 0,
        colorA1: '#f48fb1',
        colorA2: '#9fa8da',
        colorA1A1: '#ffe082',
        colorA2A2: '#bf360c',
        colorBoth: '#ff9100',
      });

      Vue.nextTick(() => that.updateLabels());
    },
    updateLabels() {
      // @ts-ignore
      setTimeout(M.updateTextFields, 100);
    },
    getPercentageAmountA1() {
      const that: any = this;
      const amountA1 = Number(that.amountA1);
      const amountA2 = Number(that.amountA2);
      const computedsize = amountA1 + amountA2;
      if (that.isAlleleAmountPristine || computedsize === 0) {
        return 0.5;
      }
      return amountA1 / computedsize;
    },
    getPercentageAmountA1A1() {
      const that: any = this;
      const amountA1A1 = Number(that.amountA1A1);
      const amountA2A2 = Number(that.amountA2A2);
      const amountBoth = Number(that.amountBoth);
      const computedsize = amountA1A1 + amountA2A2 + amountBoth;
      if (that.isDiploidAmountPristine || computedsize === 0) {
        return 0.25;
      }
      return amountA1A1 / computedsize;
    },
    getPercentageAmountA2A2() {
      const that: any = this;
      const amountA1A1 = Number(that.amountA1A1);
      const amountA2A2 = Number(that.amountA2A2);
      const amountBoth = Number(that.amountBoth);
      const computedsize = amountA1A1 + amountA2A2 + amountBoth;
      if (that.isDiploidAmountPristine || computedsize === 0) {
        return 0.25;
      }
      return amountA2A2 / computedsize;
    },
    onSizeChange(value) {
      const that: any = this;
      const percentageAmountA1 = that.getPercentageAmountA1();
      const percentageAmountA1A1 = that.getPercentageAmountA1A1();
      const percentageAmountA2A2 = that.getPercentageAmountA2A2();

      that.amountA1 = Math.floor(value * percentageAmountA1);
      that.amountA2 = value - that.amountA1;

      that.amountA1A1 = Math.floor(value * percentageAmountA1A1);
      that.amountA2A2 = Math.floor(value * percentageAmountA2A2);
      that.amountBoth = value - that.amountA1A1 - that.amountA2A2;

      that.updateLabels();
    },
    onAmountA1Change(event) {
      const that: any = this;
      const value = Number(event.target.value);

      that.isAlleleAmountPristine = false;
      that.amountA1 = value;
      that.size = value + Number(that.amountA2);

      Vue.nextTick(() => that.onSizeChange(that.size));
    },
    onAmountA2Change(event) {
      const that: any = this;
      const value = Number(event.target.value);

      that.isAlleleAmountPristine = false;
      that.amountA2 = value;
      that.size = value + Number(that.amountA1);

      Vue.nextTick(() => that.onSizeChange(that.size));
    },
    onamountA1A1Change(event) {
      const that: any = this;
      const value = Number(event.target.value);

      that.isDiploidAmountPristine = false;
      that.amountA1A1 = value;
      that.size = value + Number(that.amountA2A2) + Number(that.amountBoth);

      Vue.nextTick(() => that.onSizeChange(that.size));
    },
    onAmountA2A2Change(event) {
      const that: any = this;
      const value = Number(event.target.value);

      that.isDiploidAmountPristine = false;
      that.amountA2A2 = value;
      that.size = value + Number(that.amountA1A1) + Number(that.amountBoth);

      Vue.nextTick(() => that.onSizeChange(that.size));
    },
    onAmountBothChange(event) {
      const that: any = this;
      const value = Number(event.target.value);

      that.isDiploidAmountPristine = false;
      that.amountBoth = value;
      that.size = value + Number(that.amountA1A1) + Number(that.amountA2A2);

      Vue.nextTick(() => that.onSizeChange(that.size));
    },
    onSubmit(event) {
      event.preventDefault();
      const that: any = this;

      // @ts-ignore
      const Toast = M.toast;
      const {
        name,
        size,
        amountA1,
        amountA2,
        amountA1A1,
        amountA2A2,
        amountBoth,
        colorA1,
        colorA2,
        colorA1A1,
        colorA2A2,
        colorBoth,
      }: any = that;
      let hasError = false;

      if (!name) {
        Toast({html: 'O nome da população não pode estar em branco'});
        hasError = true;
      }

      if (size <= 0) {
        Toast({html: 'O tamanho total da população tem que ser maior que 0'});
        hasError = true;
      }

      if (hasError) {
        return;
      }

      const currentPopulation: population = {
        name,
        size,
        amountA1,
        amountA2,
        amountA1A1,
        amountA2A2,
        amountBoth,
        colorA1,
        colorA2,
        colorA1A1,
        colorA2A2,
        colorBoth,
      };
      this.$emit('add', currentPopulation);

      Vue.nextTick(() => that.resetValues());
    },
  },
})
export default class AddPopulation extends Vue {}
</script>

<style scoped lang="scss">
.vertical-margin{
  margin: 30px 0;
}
</style>
