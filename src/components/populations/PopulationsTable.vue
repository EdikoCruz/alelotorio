<template>
<div class="row vertical-margin">
  <div class="col s12">
    <table class="striped centered vertical-margin">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tamanho</th>
          <th></th>
          <th>A1</th>
          <th>A2</th>
          <th></th>
          <th>A1A1</th>
          <th>A1A2</th>
          <th>A2A2</th>
          <th></th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, i) in populations" :key="i">
          <td>{{p.name}}</td>
          <td>{{p.size}}</td>
          <td></td>
          <td :style="{color: p.colorA1}">{{p.amountA1}}</td>
          <td :style="{color: p.colorA2}">{{p.amountA2}}</td>
          <td></td>
          <td :style="{color: p.colorA1A1}">{{p.amountA1A1}}</td>
          <td :style="{color: p.colorBoth}">{{p.amountBoth}}</td>
          <td :style="{color: p.colorA2A2}">{{p.amountA2A2}}</td>
          <td></td>
          <td>
            <button class="waves-effect waves-light btn" @click="onRemove(i)">
              <i class="material-icons center">delete</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="center-align col s12">
    <button class="waves-effect waves-light btn-large" @click="onStart">Iniciar simulação</button>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import population from '@/interfaces/population.ts';

@Component({
  methods: {
    onRemove(index) {
      const that: any = this;
      that.$emit('remove', index);
    },
    onStart() {
      const that: any = this;
      that.$emit('start', true);
    },
  },
})
export default class PopulationsTable extends Vue {
  @Prop() private populations!: population[];
}
</script>

<style scoped lang="scss">
</style>
