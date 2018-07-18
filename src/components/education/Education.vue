<template>
  
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import { EducationItemObject } from '@/components/education/EducationItem.vue';

@Component
export default class Education extends BlockList {
  @Prop() protected title: string = 'Education';
  @Prop() protected list!: EducationItemObject[];
}
</script>


<style>
</style>
