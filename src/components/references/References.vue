<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/components/BlockList.vue';
import { ReferencesItemObject } from '@/components/references/ReferencesItem.vue';

@Component
export default class References extends BlockList {
  @Prop() protected list!: ReferencesItemObject[];
}
</script>

<style>
</style>
