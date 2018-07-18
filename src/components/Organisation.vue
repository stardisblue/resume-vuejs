<template v-if="typeof organisation === 'string'">
    <div class="organisation" >
      <template v-if="typeof organisation === 'string'">{{organisation}}</template>
      <template v-else>
        <div class="name">{{organisation.name}}</div>
        <location :location="organisation.location"></location>
        <external-link :link="organisation.website"></external-link>
      </template>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Location, { LocationObject } from '@/components/Location.vue';
import ExternalLink, { ExternalLinkObject } from '@/components/ExternalLink.vue';

export interface OrganisationObject {
  name: string;
  location: string | LocationObject;
  website: string | ExternalLinkObject;
}

@Component({
  components: { Location, ExternalLink },
})
export default class Organisation extends Vue {
  @Prop() private organisation!: string | OrganisationObject;
}
</script>

<style>
</style>
