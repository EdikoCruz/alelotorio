<template>
  <div class="alleles-donut">
    <pie-chart
      height="200px"
      :legend="false"
      :data="data"
      :colors="[a2Color, a1Color]"
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

      return populations.reduce((p: any[], c: any) => {
        if (c.allele === 'A2') {
          p[0][1] +=  1;
        } else if (c.allele === 'A1') {
          p[1][1] += 1;
        }
        return p;
      }, [['A2', 0], ['A1', 0]]);
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
