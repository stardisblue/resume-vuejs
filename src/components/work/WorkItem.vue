<template>
  <div class="work-item">
    <div class="type">{{item.type}}</div>
    <div class="title">{{item.title}}</div>
    <div class="summary">{{item.summary}}</div>
    <div class="start-date" v-if="item.startDate">{{startDate}}</div>
    <div class="end-date" v-if="item.endDate">{{endDate}}</div>
    <organisation :organisation="item.company"/>
    <external-link :link="item.website"/>
    <div class="body">
      {{item.body}}
    </div>
    <ul class="keywords" v-for="keyword in item.keywords" :key="keyword">
      <li class="keyword">{{keyword}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Organisation, {
  OrganisationObject,
} from '@/components/Organisation.vue';
import ExternalLink, {
  ExternalLinkObject,
} from '@/components/ExternalLink.vue';
import Item from '@/classes/Item';

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
  keywords: string[];
}

@Component({
  components: { ExternalLink, Organisation },
})
export default class WorkItem extends Item<WorkItemObject> {}
</script>

<style>
</style>
