<template>
  <div class="diploid-by-generation center-align">
    
    <table class="striped centered">
      <thead>
        <tr>
          <th colspan="3">Geração {{Number(generation)+1}}</th>
        </tr>
        <tr>
            <th>A1A1</th>
            <th>Ambos</th>
            <th>A2A2</th>
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
          :colors="[a1Color || '#cfd8dc', bothColor || '#90a4ae', a2Color || '#607d8b']"
          :donut="true" />
      </div>
    </div>

    <input type="range" min="0" :max="population.diploidData.length - 1" v-model="generation"/>
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
        ['A1A1', population.diploidData.length > 0 ? population.diploidData[generation].a1a1 : '-'],
        ['Ambos', population.diploidData.length > 0 ? population.diploidData[generation].both : '-'],
        ['A2A2', population.diploidData.length > 0 ? population.diploidData[generation].a2a2 : '-'],
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
</style>
