<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { OrganisationObject } from '@/components/Organisation.vue';
import { ExternalLinkObject } from '@/components/ExternalLink.vue';
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

@Component
export default class WorkItem extends Item<WorkItemObject> {
}
</script>

<style>
</style>
