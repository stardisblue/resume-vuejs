<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import { AwardsItemObject } from '@/components/awards/AwardsItem.vue';

@Component
export default class Awards extends BlockList {
  @Prop() protected title: string = 'Awards';
  @Prop() protected list!: AwardsItemObject[];
}
</script>

<style>
</style>
