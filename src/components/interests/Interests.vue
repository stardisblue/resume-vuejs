<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/components/BlockList.vue';
import { InterestsItemObject } from '@/components/interests/InterestsItem.vue';

@Component
export default class Interests extends BlockList {
  @Prop() protected title: string = 'Interests'
  @Prop() protected list!: string | string[] | InterestsItemObject[];
}
</script>

<style>
</style>
