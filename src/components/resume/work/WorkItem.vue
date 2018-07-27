<template>
  <div class="work-item">
    <div class="type">{{type}}</div>
    <div class="title">{{title}}</div>
    <div class="summary">{{summary}}</div>
    <div class="start-date" v-if="startDate">{{computedStartDate}}</div>
    <div class="end-date" v-if="endDate">{{computedEndDate}}</div>
    <organisation v-if="company" :organisation="company"/>
    <external-link v-if="website" :link="website"/>
    <div class="body">
      {{body}}
    </div>
    <ul v-if="keywords" class="keywords" v-for="keyword in keywords" :key="keyword">
      <li class="keyword">{{keyword}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import ExternalLink, { ExternalLinkObject } from '@/components/resume/ExternalLink.vue'
import Organisation, { OrganisationObject } from '@/components/resume/Organisation.vue'
import { formatDate } from '@/utils/Date'
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface WorkItemObject {
  type: string
  title: string
  summary: string
  company: string | OrganisationObject
  startDate?: Date
  endDate?: Date
  website: string | ExternalLinkObject
  body:
    | string
    | string[]
    | {
        icon?: string;
        title?: string;
        content: string;
      }
  keywords?: string[]
}

@Component({
  components: { ExternalLink, Organisation },
})
export default class WorkItem extends Vue implements WorkItemObject {
  @Prop() public type!: string
  @Prop() public title!: string
  @Prop() public summary!: string
  @Prop() public company!: string | OrganisationObject
  @Prop() public startDate?: Date
  @Prop() public endDate?: Date
  @Prop() public website!: string | ExternalLinkObject
  @Prop()
  public body!:
    | string
    | string[]
    | {
        icon?: string;
        title?: string;
        content: string;
      }
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
