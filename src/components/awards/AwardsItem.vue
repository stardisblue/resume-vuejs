<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from '@/classes/Item';
import { OrganisationObject } from '@/components/Organisation.vue';

export interface AwardsItemObject {
  title: string;
  summary: string;
  date: string;
  awarder: string | OrganisationObject;
}

@Component
export default class AwardsItem extends Item<AwardsItemObject> {}
</script>

<style>
</style>
