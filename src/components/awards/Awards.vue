<template>
  <list-component :title="title" :list="list">
    <template slot-scope="{ item }">
      <awards-item v-bind="item"/>
    </template>
  </list-component>
</template>

<script lang="ts">
import BlockList from '@/classes/BlockList'
import AwardsItem, { AwardsItemObject } from '@/components/awards/AwardsItem.vue'
import ListComponent from '@/components/ListComponent.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: { ListComponent, AwardsItem },
})
export default class Awards extends BlockList {
  @Prop({default : 'Awards'}) protected title?: string
  @Prop() protected list!: AwardsItemObject[]
}
</script>

<style>
</style>
