<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import { SkillsItemObject } from '@/components/skills/SkillsItem.vue';

@Component
export default class Skills extends BlockList {
  @Prop({default : 'Skills'}) protected title?: string;
  @Prop() protected list!: SkillsItemObject[];
}
</script>

<style>
</style>
