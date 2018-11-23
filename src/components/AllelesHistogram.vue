<template>
  <div class="alleles-histogram">
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
  computed: {
    data(): any[] {
      const that: any = this;
      // data bind
      const populations: any = that.populations || [that.population];
      const a1Color: string = that.a1Color || '#cfd8dc';
      const a2Color: string = that.a2Color || '#607d8b';
      const partialName: string = that.partialName;
      const attribute: string = that.attribute || 'histogramData';


      return populations.reduce((product: any[], p: any) => {
        product.push({...p[attribute].a1, color: a1Color, name: partialName ? 'A1' : p[attribute].a1.name});
        product.push({...p[attribute].a2, color: a2Color, name: partialName ? 'A2' : p[attribute].a2.name});
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
  @Prop() private partialName!: boolean;
}
</script>

<style scoped lang="scss">
</style>
