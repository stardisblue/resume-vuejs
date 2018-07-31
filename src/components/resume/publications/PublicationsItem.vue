<template>
  <div class="publications-item">
    <div class="name">{{name}}</div>
    <div class="summary">{{summary}}</div>
    <div class="release-date">{{releaseDate | formatDate}}</div>
    <organisation :organisation="publisher" />
    <external-link :link="website"/>
  </div>
</template>

<script lang="ts">
import Item from '@/classes/Item'
import ExternalLink, { ExternalLinkObject } from '@/components/resume/ExternalLink.vue'
import Organisation, { OrganisationObject } from '@/components/resume/Organisation.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface PublicationsItemObject {
  name: string
  summary: string
  releaseDate: Date
  publisher: string | OrganisationObject
  website: string | ExternalLinkObject
}

@Component({
  components: { Organisation, ExternalLink },
})
export default class PublicationsItem extends Vue
  implements PublicationsItemObject {
  @Prop() public name!: string
  @Prop() public summary!: string
  @Prop() public releaseDate!: Date
  @Prop() public publisher!: string | OrganisationObject
  @Prop() public website!: string | ExternalLinkObject
}
</script>
<style>
</style>
