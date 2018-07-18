<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/classes/Item';

export interface LanguagesItemObject {
  language: string;
  value: number;
  label: string;
}

@Component
export default class LanguagesItem extends Item<LanguagesItemObject> {}
</script>

<style>
</style>
