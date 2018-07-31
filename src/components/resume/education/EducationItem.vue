<template>
  <div class="education-item">
    <div class="type">{{type}}</div>
    <div class="institution">{{institution}}</div>
    <div class="area">{{area}}</div>
    <div class="study-type">{{studyType}}</div>
    <div class="summary">{{summary}}</div>
    <div v-if="startDate" class="start-date">{{startDate | formatDate}}</div>
    <div v-if="endDate" class="end-date">{{endDate | formatDate}}</div>
    <div v-if="gpa" class="gpa">{{gpa}}</div>
    <ul v-if="keywords" class="keywords">
        <li v-for="keyword in keywords" :key="keyword">{{keyword}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import * as moment from 'moment'
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface EducationItemObject {
  type: string
  institution: string
  area: string
  studyType: string
  summary: string
  startDate?: Date
  endDate?: Date
  gpa?: string
  keywords?: string[]
}

@Component
export default class EducationItem extends Vue implements EducationItemObject {
  @Prop() public type!: string
  @Prop() public institution!: string
  @Prop() public area!: string
  @Prop() public studyType!: string
  @Prop() public summary!: string
  @Prop() public startDate?: Date
  @Prop() public endDate?: Date
  @Prop() public gpa?: string
  @Prop() public keywords?: string[]
}
</script>

<style>
</style>
