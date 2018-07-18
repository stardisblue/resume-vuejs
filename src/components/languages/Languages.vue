<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/components/BlockList.vue';
import { LanguagesItemObject } from '@/components/languages/LanguagesItem.vue';

@Component
export default class Languages extends BlockList {
  @Prop() protected title: string = 'Languages';
  @Prop() protected list!: LanguagesItemObject[];
}
</script>

<style>
</style>
