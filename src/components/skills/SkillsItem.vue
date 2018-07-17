<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/classes/Item';

export interface SkillsItemObject {
  name: string;
  summary: string;
  value?: {
    rating: number;
    label: string;
  };
  keywords?: string[]
}

@Component
export default class SkillsItem extends Item<SkillsItemObject> {}
</script>

<style>
</style>
