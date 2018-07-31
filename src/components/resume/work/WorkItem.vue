<template>
  <div class="work-item">
    <div class="type">{{type}}</div>
    <div class="title">{{title}}</div>
    <div class="summary">{{summary}}</div>
    <div class="start-date" v-if="startDate">{{startDate | formatDate}}</div>
    <div class="end-date" v-if="endDate">{{endDate | formatDate}}</div>
    <organisation v-if="company" :organisation="company"/>
    <external-link v-if="website" :link="website"/>
    <div v-if="body" class="content">
      <template v-if="typeof body === 'string'">{{body}}</template>
      <ul v-else>
        <li v-for="{key, icon, title, content} in computedBody" :key="key" :class="{'has-icon': icon }">
          <icon v-if="icon" :icon="icon"/>
          <span v-if="title" class="title">{{title}}</span>
          {{content}}
        </li>
      </ul>
    </div>
    <ul v-if="keywords" class="keywords">
      <li v-for="keyword in keywords" :key="keyword" class="keyword">{{keyword}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import ExternalLink, { ExternalLinkObject } from '@/components/resume/ExternalLink.vue'
import Icon, { IconObject } from '@/components/resume/Icon.vue'
import Organisation, { OrganisationObject } from '@/components/resume/Organisation.vue'
import _ from 'lodash'
import { Component, Prop, Vue } from 'vue-property-decorator'

interface CustomList {
  icon?: string | IconObject
  title?: string
  content: string
}

export interface WorkItemObject {
  type: string
  title: string
  summary: string
  company: string | OrganisationObject
  startDate?: Date
  endDate?: Date
  website: string | ExternalLinkObject
  body: string | string[] | CustomList[]
  keywords?: string[]
}


@Component({
  components: { ExternalLink, Organisation, Icon },
})
export default class WorkItem extends Vue implements WorkItemObject {
  @Prop() public type!: string
  @Prop() public title!: string
  @Prop() public summary!: string
  @Prop() public company!: string | OrganisationObject
  @Prop() public startDate?: Date
  @Prop() public endDate?: Date
  @Prop() public website!: string | ExternalLinkObject
  @Prop() public body!: string | string[] | CustomList[]
  @Prop() public keywords?: string[]

  get computedBody() {
    if (typeof this.body === 'string') { return this.body }

    return _.map(this.body, (line) => {
      if (typeof line === 'string' || typeof line === 'number') {
        return { key: line, content: line }
      }

      const {title, content} = line as any as CustomList
      return { key: title || content, ...line }
    })
  }
}
</script>

<style>
</style>
