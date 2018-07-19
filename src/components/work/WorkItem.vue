<template>
  <div class="work-item">
    <div class="type">{{type}}</div>
    <div class="title">{{title}}</div>
    <div class="summary">{{summary}}</div>
    <div class="start-date" v-if="startDate">{{startDate}}</div>
    <div class="end-date" v-if="endDate">{{endDate}}</div>
    <organisation :organisation="company"/>
    <external-link :link="website"/>
    <div class="body">
      {{body}}
    </div>
    <ul v-if="keywords" class="keywords" v-for="keyword in keywords" :key="keyword">
      <li class="keyword">{{keyword}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Organisation, {
  OrganisationObject
} from '@/components/Organisation.vue';
import ExternalLink, {
  ExternalLinkObject
} from '@/components/ExternalLink.vue';

export interface WorkItemObject {
  type: string;
  title: string;
  summary: string;
  company: string | OrganisationObject;
  startDate?: string;
  endDate?: string;
  website: string | ExternalLinkObject;
  body:
    | string
    | string[]
    | {
        icon?: string;
        title?: string;
        content: string;
      };
  keywords?: string[];
}

@Component({
  components: { ExternalLink, Organisation },
})
export default class WorkItem extends Vue implements WorkItemObject {
  @Prop() public type!: string;
  @Prop() public title!: string;
  @Prop() public summary!: string;
  @Prop() public company!: string | OrganisationObject;
  @Prop() public startDate?: string;
  @Prop() public endDate?: string;
  @Prop() public website!: string | ExternalLinkObject;
  @Prop()
  public body!:
    | string
    | string[]
    | {
        icon?: string;
        title?: string;
        content: string;
      };
  @Prop() public keywords?: string[];
}
</script>

<style>
</style>
