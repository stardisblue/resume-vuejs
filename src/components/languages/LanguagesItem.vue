<template>
  <div class="languages-item">
    <div class="language">{{language}}</div>
    <div class="value">{{value}}</div>
    <div class="label">{{label}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/classes/Item';

export interface LanguagesItemObject {
  language: string;
  value: number;
  label: string;
}

@Component
export default class LanguagesItem extends Vue implements LanguagesItemObject {
  @Prop() public language!: string;
  @Prop() public value!: number;
  @Prop() public label!: string;
}
</script>

<style>
</style>
