<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/components/BlockList.vue';
import { PublicationsItemObject } from '@/components/publications/PublicationsItem.vue';

@Component
export default class Publications extends BlockList {
  @Prop() protected title: string = 'Publications';
  @Prop() protected list!: PublicationsItemObject[];
}
</script>

<style>
</style>
