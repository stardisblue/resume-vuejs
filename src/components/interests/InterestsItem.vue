<template>
  <div class="iterests-item">
    <div v-if="type" class="type" >{{type}}</div>
    <div class="icon">{{icon}}</div>
    <div class="name">{{name}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface InterestsItemObject {
  type?: string
  icon: string
  name: string
}

@Component
export default class InterestsItem extends Vue implements InterestsItemObject {
  @Prop() public type?: string
  @Prop() public icon!: string
  @Prop() public name!: string
}
</script>

<style>
</style>
