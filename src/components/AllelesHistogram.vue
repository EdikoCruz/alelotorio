<template>
  <div class="alleles-histogram">
    <div class="row">
      <div class="switch col s4">
        <label>
          <input type="checkbox" v-model="showA1">
          <span class="lever"></span>
          Mostrar A1
        </label>
      </div>

      <div class="switch col s4">
        <label>
          <input type="checkbox" v-model="showA2">
          <span class="lever"></span>
          Mostrar A2
        </label>
      </div>

      <div class="switch col s4">
        <label>
          <input type="checkbox" v-model="showLines" @change="changePointRadius">
          <span class="lever"></span>
          Mostrar linha
        </label>
      </div>
    </div>


    <line-chart
      :data="data"
      :library="{showLines, forceRender}"
      :curve="false"
      :messages="{empty: 'Sem dados'}"
      :legend="false"
      height="200px"
      xtitle="Geração"
      ytitle="Frequência alélica" />
  </div>
</template>

<script lang="ts">
// :library="{showLines: true}"
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      forceRender: 0,
      showLines: false,
      showA1: true,
      showA2: true,
    };
  },
  methods: {
    changePointRadius(event: any): void {
      const that: any = this;

      // @ts-ignore
      Chart.defaults.global.elements.point.radius = event.target.checked ? 0 : 1;

      that.forceRender = (that.forceRender + 1) % 5;
    },
  },
  computed: {
    data(): any[] {
      const that: any = this;
      // data bind
      const populations: any = that.populations || [that.population];

      return populations.reduce((product: any[], p: any) => {
        if (that.showA1) {
          product.push({
            ...p.histogramData.a1,
            color: p.colorA1,
            name: `${p.name} A1`,
          });
        }
        if (that.showA2) {
          product.push({
            ...p.histogramData.a2,
            color: p.colorA2,
            name: `${p.name} A2`,
          });
        }
        return product;
      }, []);

    },
  },
})
export default class AllelesHistogram extends Vue {
  @Prop() private populations!: any[];
  @Prop() private population!: any;
}
</script>

<style scoped lang="scss">
</style>
