<template>
    
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Block from '@/components/Block.vue';
import { LocationObject } from '@/components/Location.vue';
import ExternalLink, { ExternalLinkObject } from '@/components/ExternalLink.vue';

export interface ProfileObject {
  name: string;
  label: string;
  email: string;
  phone: string;
  location: string | LocationObject;
  social: string[] | ExternalLinkObject[];
}

@Component
export default class Profile extends Block {
  @Prop() public profile!: ProfileObject;
}
</script>
<style>
</style>
