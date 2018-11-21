<template>
  <div class="alleles-histogram">
    <line-chart
      :data="data"
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
    data(): any[] {
      const that: any = this;
      // data bind
      const populations: any = that.populations;
      const population: any = that.population;
      const a1Color: string = that.a1Color || '#cfd8dc';
      const a2Color: string = that.a2Color || '#607d8b';
      const partial: string = that.partial;
      const attribute: string = that.attribute || 'histogramData';

      if (populations) {
        return populations.reduce((product: any[], p: any) => {
          if (partial) {
            if (p.allele === 'A1') {
              product.push({...p[attribute].a1, color: a1Color});
            } else {
              product.push({...p[attribute].a2, color: a2Color});
            }
          } else {
            product.push({...p[attribute].a1, color: a1Color});
            product.push({...p[attribute].a2, color: a2Color});
          }
          return product;
        }, []);
      }
      if (partial) {
        if (population.allele === 'A1') {
          return [{...population[attribute].a1, color: a1Color}];
        } else {
          return [{...population[attribute].a2, color: a2Color}];
        }
      }
      return [
        {...population[attribute].a1, color: a1Color},
        {...population[attribute].a2, color: a2Color}
      ];
    },
  },
})
export default class AllelesHistogram extends Vue {
  @Prop() private populations!: any[];
  @Prop() private population!: any;
  @Prop() private a1Color!: string;
  @Prop() private a2Color!: string;
  @Prop() private attribute!: string;
  @Prop() private partial!: boolean;
}
</script>

<style scoped lang="scss">
</style>
