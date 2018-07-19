<template>
  <div class="awards-item">
    <div class="title">{{title}}</div>
    <div class="summary">{{summary}}</div>
    <div class="date">{{date}}</div>
    <organisation :organisation="awarder"/>
  </div>
</template>

<script lang="ts">
import Organisation, { OrganisationObject } from '@/components/Organisation.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface AwardsItemObject {
  title: string
  summary: string
  date: string
  awarder: string | OrganisationObject
}

@Component({
  components: { Organisation },
})
export default class AwardsItem extends Vue implements AwardsItemObject {
  @Prop() public title!: string
  @Prop() public summary!: string
  @Prop() public date!: string
  @Prop() public awarder!: string | OrganisationObject
}
</script>

<style>
</style>
