<template>
  <div class="alleles-histogram">
    <line-chart
      :data="data"
      :colors="colors"
      :messages="{empty: 'Sem dados'}"
      legend="bottom"
      xtitle="Geração"
      ytitle="Porcentagem do alelo" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    colors(): string[] {
      const that: any = this;
      const a1Color = that.a1Color || '#cfd8dc';
      const a2Color = that.a2Color || '#607d8b';
      const populations: any = that.populations;

      return populations.reduce((product: any, population: any) => {
        product.push(a1Color);
        product.push(a2Color);
        return product;
      }, []);
    },
    data(): any[] {
      const that: any = this;
      // data bind
      const populations: any = that.populations;

      return populations.reduce((product: any[], population: any) => {
        product.push(population.histogramData.a1);
        product.push(population.histogramData.a2);
        return product;
      }, []);
    },
  },
})
export default class AllelesHistogram extends Vue {
  @Prop() private populations!: any[];
  @Prop() private a1Color!: string;
  @Prop() private a2Color!: string;
}
</script>

<style scoped lang="scss">
</style>
