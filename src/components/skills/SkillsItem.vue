<template>
  <div class="skills-item">
    <div class="name">{{name}}</div>
    <div class="summary">{{summary}}</div>
    <div v-if="value" class="value">
      <div class="rating">{{value.rating}}</div>
      <div class="label">{{value.label}}</div>
    </div>
    <ul v-if="keywords" class="keywords" v-for="keyword in keywords" :key="keyword">
      <li>{{keyword}}</li>
    </ul>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export interface SkillsItemObject {
  name: string;
  summary: string;
  value?: {
    rating: number;
    label: string;
  };
  keywords?: string[];
}

@Component
export default class SkillsItem extends Vue implements SkillsItemObject {
  @Prop() public name!: string;
  @Prop() public summary!: string;
  @Prop()
  public value?: {
    rating: number;
    label: string;
  };
  @Prop() public keywords?: string[];
}
</script>
<style>
</style>
