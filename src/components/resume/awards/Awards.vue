<template>
  <list-component :title="title" :list="list" class="awards">
    <awards-item slot-scope="{ item }" v-bind="item"/>
  </list-component>
</template>

<script lang="ts">
import BlockList from '@/classes/BlockList'
import ListComponent from '@/components/ListComponent.vue'
import AwardsItem, { AwardsItemObject } from '@/components/resume/awards/AwardsItem.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: { ListComponent, AwardsItem },
})
export default class Awards extends BlockList {
  @Prop({default : 'Awards'}) protected title?: string
  @Prop({type: Array}) protected list!: AwardsItemObject[]
}
</script>

<style>
</style>
