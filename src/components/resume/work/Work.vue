<template>
  <list-component :title="title" :list="list">
    <template slot-scope="{ item }">
      <work-item v-bind="item"/>
    </template> 
  </list-component>
</template>
<script lang="ts">
import BlockList from '@/classes/BlockList'
import ListComponent from '@/components/ListComponent.vue'
import WorkItem, { WorkItemObject } from '@/components/resume/work/WorkItem.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {ListComponent, WorkItem},
})
export default class Work extends BlockList {
  @Prop({default: 'Work'}) protected title?: string
  @Prop() protected list!: WorkItemObject[]
}
</script>
<style>
</style>
