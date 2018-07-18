<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import { LanguagesItemObject } from '@/components/languages/LanguagesItem.vue';

@Component
export default class Languages extends BlockList {
  @Prop({default : 'Skills'}) protected title?: string;
  @Prop() protected list!: LanguagesItemObject[];
}
</script>

<style>
</style>
