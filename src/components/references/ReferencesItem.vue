<template>
    <div class="reference-item">
      <div class="name">{{name}}</div>
      <div class="reference">{{reference}}</div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export interface ReferencesItemObject {
  name: string;
  reference: string;
}

@Component
export default class ReferencesItem extends Vue implements ReferencesItemObject {
  @Prop() public name!: string;
  @Prop() public reference!: string;
}
</script>

<style>
</style>
