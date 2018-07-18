<template>
  
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import { EducationItemObject } from '@/components/education/EducationItem.vue';

@Component
export default class Education extends BlockList {
  @Prop({default : 'Skills'}) protected title?: string;
  @Prop() protected list!: EducationItemObject[];
}
</script>


<style>
</style>
