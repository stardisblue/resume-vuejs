<template>
  <div class="profile">
    <div class="label"></div>
    <div class="name"></div>
    <div class="email"></div>
    <div class="phone"></div>
    <location :location="profile.location"/>
    <div v-for="s in profile.social" :key="s.label || s">
      <external-link :external-link="profile.social"/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Block from '@/components/Block.vue';
import Location, { LocationObject } from '@/components/Location.vue';
import ExternalLink, { ExternalLinkObject } from '@/components/ExternalLink.vue';

export interface ProfileObject {
  name: string;
  label: string;
  email: string;
  phone: string;
  location: string | LocationObject;
  social: string[] | ExternalLinkObject[];
}

@Component({
  components: { ExternalLink, Location },
})
export default class Profile extends Block {
  @Prop() public profile!: ProfileObject;
}
</script>
<style>
</style>
