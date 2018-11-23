<template>
  <div class="diploid-by-generation center-align">
    
    <table class="striped centered vertical-margin">
      <thead>
        <tr>
            <th>A1A1</th>
            <th>A1A2 ou A2A1</th>
            <th>A2A2</th>
        </tr>
        <tr>
            <th><i class="fas fa-fish fa-2x a1a1"></i></th>
            <th><i class="fas fa-fish fa-2x both"></i></th>
            <th><i class="fas fa-fish fa-2x a2a2"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{population.diploidData.length > 0 ? population.diploidData[generation].a1a1 : '-'}}</td>
          <td>{{population.diploidData.length > 0 ? population.diploidData[generation].both : '-'}}</td>
          <td>{{population.diploidData.length > 0 ? population.diploidData[generation].a2a2 : '-'}}</td>
        </tr>
      </tbody>
    </table>
    <div class="row">
      <div class="col s6 offset-s3">
        <pie-chart
          :data="data"
          :legend="false"
          :colors="[a2Color || '#607d8b',bothColor || '#90a4ae', a1Color || '#cfd8dc']"
          :donut="true" />
      </div>
    </div>
    <div class="col s12 blue-grey lighten-5">
      <h6><b>Geração {{Number(generation)+1}}</b></h6>
      <input type="range" min="0" :max="population.diploidData.length - 1" v-model="generation"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  data() {
    return {
      generation: 0,
    };
  },

  computed: {
    data(): any[] {
      const that: any = this;
      const population = that.population;
      const generation = that.generation;

      return [
        ['A2A2', population.diploidData.length > 0 ? population.diploidData[generation].a2a2 : '-'],
        ['A1A2 ou A2A1', population.diploidData.length > 0 ? population.diploidData[generation].both : '-'],
        ['A1A1', population.diploidData.length > 0 ? population.diploidData[generation].a1a1 : '-'],
      ];
    },
  },
})
export default class DiploidByGeneration extends Vue {
  @Prop() private population!: any;
  @Prop() private a1Color!: string;
  @Prop() private a2Color!: string;
  @Prop() private bothColor!: string;
}
</script>

<style scoped lang="scss">
.a1a1 {
  color: #ffe082;
}
.a2a2 {
  color: #bf360c;
}
.both {
  color: #ff9100;
}
</style>
