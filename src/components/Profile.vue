<template>
  <block-component :title="title">
    <div class="label"></div>
    <div class="name"></div>
    <div class="email"></div>
    <div class="phone"></div>
    <location :location="profile.location"/>
    <div v-for="s in profile.social" :key="s.label || s">
      <external-link :external-link="profile.social"/>
    </div>
  </block-component>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Block from '@/classes/Block';
import BlockComponent from '@/components/BlockComponent.vue';
import Location, { LocationObject } from '@/components/Location.vue';
import ExternalLink, {
  ExternalLinkObject,
} from '@/components/ExternalLink.vue';

export interface ProfileObject {
  name: string;
  label: string;
  email: string;
  phone: string;
  location: string | LocationObject;
  social: string[] | ExternalLinkObject[];
}

@Component({
  components: { ExternalLink, Location, BlockComponent },
})
export default class Profile extends Block implements ProfileObject {
  @Prop() public name!: string;
  @Prop() public label!: string;
  @Prop() public email!: string;
  @Prop() public phone!: string;
  @Prop() public location!: string | LocationObject;
  @Prop() public social!: string[] | ExternalLinkObject[];

  @Prop({ default: 'Profile' })
  protected title?: string;
}
</script>
<style>
</style>
