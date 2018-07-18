<template>
  <list-component :title="title" :list="list">
    <template slot-scope="{ item }">
      <work-item :item="item"/>
    </template> 
  </list-component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import WorkItem, { WorkItemObject } from '@/components/work/WorkItem.vue';
import ListComponent from '@/components/ListComponent.vue'

@Component({
  components: {ListComponent, WorkItem},
})
export default class Work extends BlockList {
  @Prop({default: 'Work'}) protected title?: string;
  @Prop() protected list!: WorkItemObject[];
}
</script>

<style>
</style>
