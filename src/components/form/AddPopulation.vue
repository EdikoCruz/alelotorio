<template>
    <form class="col s12 vertical-margin" @submit="onSubmit">
      <div class="row">
        <div class="input-field col s12 l6">
          <label for="population-name">Nome da população</label>
          <input id="population-name" type="text" v-model="name" />
        </div>

        <div class="input-field col s12 l6">
          <input id="population-size" @change="(event) => onSizeChange(Number(event.target.value))" type="text" v-model="size">
          <label for="population-size">Tamanho da população</label>
        </div>
      </div>


      <!--
      <div class="switch col s12 l6" style="text-align: right">
        <label>
          Mostar como diploides
          <input type="checkbox" @change="updateLabels" v-model="showAsAlleles">
          <span class="lever"></span>
          Mostar como alelos
        </label>
      </div>
      -->

      
      <div class="row" v-if="showAsAlleles">
        <div class="input-field col s12 l6">
          <input id="population-amountA1" @change="onChangeFrequencyA1" type="text" v-model="frequencyA1">
          <label for="population-amountA1">Frequência de A1</label>
        </div>
        <div class="input-field col s12 l6">
          <input id="population-amountA2" @change="onChangeFrequencyA2" type="text" v-model="frequencyA2">
          <label for="population-amountA2">Frequência de A2</label>
        </div>
      </div>

      <!--
      <div class="row" v-if="showAsAlleles">
        <div class="input-field col s12 l6">
          <input id="population-amountA1" @change="onAmountA1Change" type="number" v-model="amountA1" min="0">
          <label for="population-amountA1">Frequência de A1</label>
        </div>
        <div class="input-field col s12 l6">
          <input id="population-amountA2" @change="onAmountA2Change" type="number" v-model="amountA2" min="0">
          <label for="population-amountA2">Frequência de A2</label>
        </div>
      </div>
      -->

      <div class="row" v-if="!showAsAlleles">
        <div class="input-field col s12 l4">
          <input id="population-amountA1A1" @change="onamountA1A1Change" type="number" v-model="amountA1A1" min="0">
          <label for="population-amountA1A1">Quantidade de A1A1</label>
        </div>
        <div class="input-field col s12 l4">
          <input id="population-amountBoth" @change="onAmountBothChange" type="number" v-model="amountBoth" min="0">
          <label for="population-amountBoth">Quantidade de A1A2</label>
        </div>
        <div class="input-field col s12 l4">
          <input id="population-amountA2A2" @change="onAmountA2A2Change" type="number" v-model="amountA2A2" min="0">
          <label for="population-amountA2A2">Quantidade de A2A2</label>
        </div>
      </div>

      <div class="row">
        <div class="col s12" style="text-align: right">
          <label for="population-main-color" style="padding-right: 15px">Cor da população</label>
          <input @change="onColorChange" id="population-main-color" type="color" v-model="mainColor" min="0">
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
import _ from 'lodash';
import { colors, shadeColor } from './colors';

const shade = 25;

@Component({
  data() {
    return {
      index: 1,
      colorRow: 0,
      colorColumn: 7,
      mainColor: colors[0][7],
      rowSkip: 13,
      showAsAlleles: true,
      isAlleleAmountPristine: true,
      isDiploidAmountPristine: true,
      name: 'População 1',
      size: 0,
      amountA1: 0,
      amountA2: 0,
      amountA1A1: 0,
      amountA2A2: 0,
      amountBoth: 0,
      colorA1: shadeColor(colors[0][7], shade),
      colorA2: shadeColor(colors[0][7], -shade),
      colorA1A1: shadeColor(colors[0][7], shade),
      colorA2A2: shadeColor(colors[0][7], -shade),
      colorBoth: colors[0][7],
      frequencyA1: '0,50',
      frequencyA2: '0,50',
    };
  },
  mounted() {
    const that: any = this;
    that.updateLabels();
  },
  methods: {
    resetValues() {
      const that: any = this;
      const newIndex = that.index + 1;
      const newColorRow = (that.colorRow + that.rowSkip) % colors.length;
      const newMainColor = colors[newColorRow][that.colorColumn];
      Object.assign(that, {
        index: newIndex,
        colorRow: newColorRow,
        mainColor: newMainColor,
        name: `População ${newIndex}`,
        isAlleleAmountPristine: true,
        isDiploidAmountPristine: true,
        size: 0,
        amountA1: 0,
        amountA2: 0,
        amountA1A1: 0,
        amountA2A2: 0,
        amountBoth: 0,
        colorA1: shadeColor(newMainColor, shade),
        colorA2: shadeColor(newMainColor, -shade),
        colorA1A1: shadeColor(newMainColor, shade),
        colorA2A2: shadeColor(newMainColor, -shade),
        colorBoth: newMainColor,
        frequencyA1: '0,50',
        frequencyA2: '0,50',
      });

      Vue.nextTick(() => that.updateLabels());
    },
    updateLabels() {
      // @ts-ignore
      setTimeout(M.updateTextFields, 100);
    },
    getPercentageAmountA1() {
      const that: any = this;
      // const amountA1 = Number(that.amountA1);
      // const amountA2 = Number(that.amountA2);
      // const computedsize = amountA1 + amountA2;
      // if (that.isAlleleAmountPristine || computedsize === 0) {
      //   return 0.5;
      // }
      // return amountA1 / computedsize;
      return that.frequencyA1;
    },
    getPercentageAmountA1A1() {
      const that: any = this;
      // const amountA1A1 = Number(that.amountA1A1);
      // const amountA2A2 = Number(that.amountA2A2);
      // const amountBoth = Number(that.amountBoth);
      // const computedsize = amountA1A1 + amountA2A2 + amountBoth;
      // if (that.isDiploidAmountPristine || computedsize === 0) {
      //   return 0.25;
      // }
      // return amountA1A1 / computedsize;
      return that.frequencyA2;
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
    onColorChange(event) {
      const that: any = this;
      const value = event.target.value;

      that.colorA1 =  shadeColor(value, shade);
      that.colorA2 =  shadeColor(value, -shade);
      that.colorA1A1 =  shadeColor(value, shade);
      that.colorA2A2 =  shadeColor(value, -shade);
      that.colorBoth =  value;
    },
    onSizeChange(value) {
      const that: any = this;
      value = isNaN(value) || value < 0 ? 0 : value;
      const percentageAmountA1 = that.getPercentageAmountA1();
      const percentageAmountA1A1 = that.getPercentageAmountA1A1();
      const percentageAmountA2A2 = that.getPercentageAmountA2A2();

      const amountA1 = Math.ceil((value * 2) * percentageAmountA1) ;
      const amountA2 = (value * 2) - amountA1;

      const amountBoth = Math.min(amountA1, amountA2);
      const amountA1A1 = amountA1 - Math.floor(amountBoth / 2);
      const amountA2A2 = amountA2 - Math.floor(amountBoth / 2);

      // if (!that.showAsAlleles) {
      //   amountA1A1 = Math.floor(value * percentageAmountA1A1);
      //   amountA2A2 = Math.floor(value * percentageAmountA2A2);
      //   amountBoth = value - amountA1A1 - amountA2A2;

      //   amountA1 = amountBoth + (amountA1A1 * 2);
      //   amountA2 = amountBoth + (amountA2A2 * 2);
      // }

      Object.assign(that, {
        size: value,
        amountA1,
        amountA2,
        amountA1A1,
        amountA2A2,
        amountBoth,
      });

      that.updateLabels();
    },
    onChangeFrequencyA1(event) {
      const that: any = this;
      let value = Number(event.target.value.replace(',', '.'));
      value = isNaN(value) ? 0.5 : value;
      value = value > 1 ? 1 : value;
      value = value < 0 ? 0 : value;

      let frequencyA1 = parseFloat(String(value)).toPrecision(2);
      // @ts-ignore
      let frequencyA2 = parseFloat(String(1 - frequencyA1)).toPrecision(2);

      frequencyA1 = String(frequencyA1).replace('.', ',');
      frequencyA2 = String(frequencyA2).replace('.', ',');

      Object.assign(that, {
        frequencyA2,
        frequencyA1,
      });

      Vue.nextTick(() => that.onSizeChange(that.size));
    },
    onChangeFrequencyA2(event) {
      Vue.nextTick(() => that.onSizeChange(that.size));

      const that: any = this;
      let value = Number(event.target.value.replace(',', '.'));
      value = isNaN(value) ? 0.5 : value;
      value = value > 1 ? 1 : value;
      value = value < 0 ? 0 : value;

      let frequencyA2 = parseFloat(String(value)).toPrecision(2);
      // @ts-ignore
      let frequencyA1 = parseFloat(String(1 - frequencyA2)).toPrecision(2);

      frequencyA1 = String(frequencyA1).replace('.', ',');
      frequencyA2 = String(frequencyA2).replace('.', ',');

      Object.assign(that, {
        frequencyA2,
        frequencyA1,
      });

      Vue.nextTick(() => that.onSizeChange(that.size));
    },
    onAmountA1Change(event) {
      // @ts-ignore
      const that: any = this;
      const value = Number(event.target.value);

      that.isAlleleAmountPristine = false;

      const amountA1 = value;
      let size = value + Number(that.amountA2);
      let amountA2 = that.amountA2;
      if (size % 2 === 1) {
        amountA2 = amountA2 + 1;
        size = size + 1;
      }

      Object.assign(that, {
        size,
        amountA1,
        amountA2,
      });

      Vue.nextTick(() => that.onSizeChange(Math.floor(size / 2)));
    },
    onAmountA2Change(event) {
      // @ts-ignore
      const that: any = this;
      const value = Number(event.target.value);

      that.isAlleleAmountPristine = false;

      const amountA2 = value;
      let size = value + Number(that.amountA1);
      let amountA1 = that.amountA1;
      if (size % 2 === 1) {
        amountA1 = amountA1 + 1;
        size = size + 1;
      }

      Object.assign(that, {
        size,
        amountA1,
        amountA2,
      });

      Vue.nextTick(() => that.onSizeChange(Math.floor(size / 2)));
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
        Toast({html: 'O tamanho da população tem que ser maior que 0'});
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
