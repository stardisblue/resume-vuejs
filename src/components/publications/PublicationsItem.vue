<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/classes/Item';
import { OrganisationObject } from '@/components/Organisation.vue';
import { ExternalLinkObject } from '@/components/ExternalLink.vue';

export interface PublicationsItemObject {
  name: string
  summary: string
  releaseDate: string
  publisher: string | OrganisationObject
  website: string | ExternalLinkObject
}

@Component
export default class PublicationsItem extends Item<PublicationsItemObject> {}
</script>
<style>
</style>
