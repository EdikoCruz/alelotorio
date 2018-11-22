<template>
  <div class="alleles-histogram">
    <line-chart
      :data="data"      
      :messages="{empty: 'Sem dados'}"
      height="200px"
      legend="bottom"
      xtitle="Geração"
      ytitle="Alelo na população" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    data(): any[] {
      const that: any = this;
      // data bind
      const populations: any = that.populations || [that.population];
      const a1Color: string = that.a1Color || '#cfd8dc';
      const a2Color: string = that.a2Color || '#607d8b';
      const partial: string = that.partial;
      const attribute: string = that.attribute || 'histogramData';


      return populations.reduce((product: any[], p: any) => {
        if (partial && p.allele !== '-') {
          if (p.allele === 'A1') { product.push({...p[attribute].a1, color: a1Color}); }
          if (p.allele === 'A2') { product.push({...p[attribute].a2, color: a2Color}); }
        } else {
          product.push({...p[attribute].a1, color: a1Color});
          product.push({...p[attribute].a2, color: a2Color});
        }
        return product;
      }, []);

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
