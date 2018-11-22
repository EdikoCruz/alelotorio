<template>
  <div class="alleles-donut">
    <pie-chart
      :data="data"
      :colors="[a1Color, a2Color]"
      :donut="true" />
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
      const a1Color: string = that.a1Color || '#cfd8dc';
      const a2Color: string = that.a2Color || '#607d8b';

      return populations.reduce((p: any[], c: any) => {
        if (c.allele === 'A1') {
          p[0][1] +=  1;
        } else if (c.allele === 'A2') {
          p[1][1] += 1;
        }
        return p;
      }, [['A1', 0], ['A2', 0]]);
    },
  },
})
export default class AllelesDonut extends Vue {
  @Prop() private populations!: any[];
  @Prop() private a1Color!: string;
  @Prop() private a2Color!: string;
}
</script>

<style scoped lang="scss">
</style>
