<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import { ReferencesItemObject } from '@/components/references/ReferencesItem.vue';

@Component
export default class References extends BlockList {
  @Prop({default : 'Skills'}) protected title?: string;
  @Prop() protected list!: ReferencesItemObject[];
}
</script>

<style>
</style>
