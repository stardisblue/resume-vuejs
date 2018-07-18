<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import { PublicationsItemObject } from '@/components/publications/PublicationsItem.vue';

@Component
export default class Publications extends BlockList {
  @Prop({default : 'Skills'}) protected title?: string;
  @Prop() protected list!: PublicationsItemObject[];
}
</script>

<style>
</style>
