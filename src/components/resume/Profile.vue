<template>
  <block-component :title="title">
    <div class="label">{{label}}</div>
    <div class="name">{{name}}</div>
    <div class="email"><a :href="mailTo">{{email}}</a></div>
    <div class="phone">{{phone}}</div>
    <location :location="location"/>
    <external-link v-for="s in social" :key="socialGetKey(s)" :link="s"/>
  </block-component>
</template>
<script lang="ts">
import Block from '@/classes/Block'
import BlockComponent from '@/components/BlockComponent.vue'
import ExternalLink, { ExternalLinkObject } from '@/components/resume/ExternalLink.vue'
import Location, { LocationObject } from '@/components/resume/Location.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface ProfileObject {
  name: string
  label: string
  email: string
  phone: string
  location: string | LocationObject
  social: string[] | ExternalLinkObject[]
}

@Component({
  components: { ExternalLink, Location, BlockComponent },
})
export default class Profile extends Block implements ProfileObject {
  @Prop() public name!: string
  @Prop() public label!: string
  @Prop() public email!: string
  @Prop() public phone!: string
  @Prop() public location!: string | LocationObject
  @Prop() public social!: string[] | ExternalLinkObject[]

  @Prop({ default: 'Profile' })
  protected title?: string

  get mailTo() {
    return 'mailto:' + this.email
  }

  public socialGetKey(s: string | ExternalLinkObject): string {
    if (typeof s === 'string') { return s }

    return s.label
  }
}
</script>
<style>
</style>
