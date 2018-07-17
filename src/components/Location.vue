<template v-if="typeof location === 'string'">
  <div class="location">{{location}}</div>
</template>
<template v-else>
  <div class="location">>
    <div class="address">{{location.address}}</div>
    <div class="postalCode">{{location.postalCode}}</div>
    <div class="city">{{location.city}}</div>
    <div class="countryCode">{{location.countryCode}}</div>
    <div class="region">{{location.region}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface LocationObject {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

@Component
export default class Location extends Vue {
  @Prop() private location!: string | LocationObject;
}
</script>

<style>
</style>
