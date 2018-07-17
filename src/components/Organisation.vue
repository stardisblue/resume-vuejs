<template v-if="typeof organisation === 'string'">
    <div class="organisation" >{{organisation}}</div>
</template>
<template v-else>
    <div class="organisation">
        <div class="name">{{organisation.name}}</div>
        <location :location="organisation.location"></location>
        <external-link :external-link="organisation.website"></external-link>
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
  components: {Location, ExternalLink},
})
export default class Organisation extends Vue {
  @Prop() private organisation!: string | OrganisationObject;
}
</script>

<style>
</style>
