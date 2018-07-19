<template>
  <div class="publications-item">
    <div class="name">{{name}}</div>
    <div class="summary">{{summary}}</div>
    <div class="release-date">{{releaseDate}}</div>
    <organisation :organisation="publisher" />
    <external-link :link="website"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/classes/Item';
import Organisation, { OrganisationObject } from '@/components/Organisation.vue';
import ExternalLink, { ExternalLinkObject } from '@/components/ExternalLink.vue';

export interface PublicationsItemObject {
  name: string;
  summary: string;
  releaseDate: string;
  publisher: string | OrganisationObject;
  website: string | ExternalLinkObject;
}

@Component({
  components: {Organisation, ExternalLink},
})
export default class PublicationsItem extends Vue
  implements PublicationsItemObject {
  @Prop() public name!: string;
  @Prop() public summary!: string;
  @Prop() public releaseDate!: string;
  @Prop() public publisher!: string | OrganisationObject;
  @Prop() public website!: string | ExternalLinkObject;
}
</script>
<style>
</style>
