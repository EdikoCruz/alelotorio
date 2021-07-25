<template>
  <div class="alleles-histogram">
    <div class="row">
      <div class="switch col s6">
        <label>
          <input type="checkbox" v-model="showA1">
          <span class="lever"></span>
          Mostrar A1
        </label>
      </div>

      <div class="switch col s6">
        <label>
          <input type="checkbox" v-model="showA2">
          <span class="lever"></span>
          Mostrar A2
        </label>
      </div>
    </div>

    <line-chart
      :data="data"      
      :messages="{empty: 'Sem dados'}"
      :legend="false"
      height="200px"
      xtitle="Geração"
      ytitle="Alelo %" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      showA1: true,
      showA2: true,
    };
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
