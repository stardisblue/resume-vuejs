<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import { InterestsItemObject } from '@/components/interests/InterestsItem.vue';

@Component
export default class Interests extends BlockList {
  @Prop({default : 'Skills'}) protected title?: string;
  @Prop() protected list!: string | string[] | InterestsItemObject[];
}
</script>

<style>
</style>
