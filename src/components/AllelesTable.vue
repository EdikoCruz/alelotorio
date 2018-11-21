<template>
  <div class="alleles-table">
    <table class="striped centered">
      <thead>
        <tr>
            <th>Nome</th>
            <th>Alelo fixado</th>
            <th>Geração em que o alelo foi fixado</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in populations" :key="i">
          <td>{{p.name}}</td>
          <td>{{p.allele || '-'}}</td>
          <td>{{p.generation || '-'}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AllelesTable extends Vue {
  @Prop() private populations!: any[];
}
</script>

<style scoped lang="scss">
</style>
