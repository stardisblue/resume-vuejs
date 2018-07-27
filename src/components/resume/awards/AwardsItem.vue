<template>
  <div class="awards-item">
    <div class="title">{{title}}</div>
    <div class="summary">{{summary}}</div>
    <div class="date">{{computedDate}}</div>
    <organisation :organisation="awarder"/>
  </div>
</template>

<script lang="ts">
import Organisation, { OrganisationObject } from '@/components/resume/Organisation.vue'
import {formatDate} from '@/utils/Date'
import * as moment from 'moment'
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface AwardsItemObject {
  title: string
  summary: string
  date: Date
  awarder: string | OrganisationObject
}

@Component({
  components: { Organisation },
})
export default class AwardsItem extends Vue implements AwardsItemObject {
  @Prop() public title!: string
  @Prop() public summary!: string
  @Prop() public date!: Date
  @Prop() public awarder!: string | OrganisationObject

  get computedDate() {
    return formatDate(this.date)
  }
}
</script>

<style>
</style>
