<template>
  <list-component :title="title" :list="list"  class="publications">
    <template slot-scope="{ item }">
      <publications-item v-bind="item"/>
    </template>
  </list-component>
</template>

<script lang="ts">
import BlockList from '@/classes/BlockList'
import PublicationsItem, { PublicationsItemObject } from '@/components/resume/publications/PublicationsItem.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {PublicationsItem},
})
export default class Publications extends BlockList {
  @Prop({default : 'Publications'}) protected title?: string
  @Prop() protected list!: PublicationsItemObject[]
}
</script>

<style>
</style>
