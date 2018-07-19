<template>
  <div class="education-item">
      <div class="type">{{type}}</div>
      <div class="institution">{{institution}}</div>
      <div class="area">{{area}}</div>
      <div class="study-type">{{studyType}}</div>
      <div class="summary">{{summary}}</div>
      <div v-if="startDate" class="start-date">{{startDate}}</div>
      <div v-if="endDate" class="end-date">{{endDate}}</div>
      <div v-if="gpa" class="gpa">{{gpa}}</div>
      <ul v-if="keywords" class="keywords" v-for="keyword in keywords" :key="keyword">
          <li>{{keyword}}</li>
      </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export interface EducationItemObject {
  type: string;
  institution: string;
  area: string;
  studyType: string;
  summary: string;
  startDate?: string;
  endDate?: string;
  gpa?: string;
  keywords?: string[];
}

@Component
export default class EducationItem extends Vue implements EducationItemObject {
  @Prop() public type!: string;
  @Prop() public institution!: string;
  @Prop() public area!: string;
  @Prop() public studyType!: string;
  @Prop() public summary!: string;
  @Prop() public startDate?: string;
  @Prop() public endDate?: string;
  @Prop() public gpa?: string;
  @Prop() public keywords?: string[];
}
</script>

<style>
</style>
