<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/classes/Item';

export interface ReferencesItemObject {
  name: string;
  reference: string;
}

@Component
export default class ReferencesItem extends Item<ReferencesItemObject> {}
</script>

<style>
</style>
