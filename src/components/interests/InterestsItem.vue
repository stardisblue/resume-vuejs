<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/classes/Item';

export interface InterestsItemObject {
  type?: string;
  icon: string;
  name: string;
}

@Component
export default class InterestsItem extends Item<InterestsItemObject> {}
</script>

<style>
</style>
