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
      const a1Color: string = that.a1Color || '#cfd8dc';
      const a2Color: string = that.a2Color || '#607d8b';
      const populations: any = that.populations;

      if (populations) {
        return populations.reduce((product: any, p: any) => {
          product.push(a1Color);
          product.push(a2Color);
          return product;
        }, []);
      }
      return [a1Color, a2Color];
    },
    data(): any[] {
      const that: any = this;
      // data bind
      const populations: any = that.populations;
      const population: any = that.population;
      const attribute: string = that.attribute || 'histogramData';

      if (populations) {
        return populations.reduce((product: any[], p: any) => {
          product.push(p[attribute].a1);
          product.push(p[attribute].a2);
          return product;
        }, []);
      }
      return [population[attribute].a1, population[attribute].a2];
    },
  },
})
export default class AllelesHistogram extends Vue {
  @Prop() private populations!: any[];
  @Prop() private population!: any;
  @Prop() private a1Color!: string;
  @Prop() private a2Color!: string;
  @Prop() private attribute!: string;
}
</script>

<style scoped lang="scss">
</style>
