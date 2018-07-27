<template>
  <div class="education-item">
    <div class="type">{{type}}</div>
    <div class="institution">{{institution}}</div>
    <div class="area">{{area}}</div>
    <div class="study-type">{{studyType}}</div>
    <div class="summary">{{summary}}</div>
    <div v-if="startDate" class="start-date">{{computedStartDate}}</div>
    <div v-if="endDate" class="end-date">{{computedEndDate}}</div>
    <div v-if="gpa" class="gpa">{{gpa}}</div>
    <ul v-if="keywords" class="keywords" v-for="keyword in keywords" :key="keyword">
        <li>{{keyword}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import {formatDate} from '@/utils/Date'
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

  get computedStartDate() {
    return formatDate(this.startDate)
  }

  get computedEndDate() {
    return formatDate(this.endDate)
  }
}
</script>

<style>
</style>
