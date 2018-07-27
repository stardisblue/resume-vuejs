<template>
  <list-component :title="title" :list="list">
    <template slot-scope="{item}">
      <interests-item v-bind="item"/>
    </template>
  </list-component>
</template>

<script lang="ts">
import BlockList from '@/classes/BlockList'
import InterestsItem, { InterestsItemObject } from '@/components/resume/interests/InterestsItem.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: { InterestsItem },
})
export default class Interests extends BlockList {
  @Prop({ default: 'Interests' })
  protected title?: string
  @Prop() protected list!: string | string[] | InterestsItemObject[]
}
</script>

<style>
</style>
