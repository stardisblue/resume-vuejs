<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import { WorkItemObject } from '@/components/work/WorkItem.vue';

@Component
export default class Work extends BlockList {
  @Prop() protected title: string = 'Work';
  @Prop() protected list!: WorkItemObject[];
}
</script>

<style>
</style>
