<template>
  <list-component :title="title" :list="list">
    <template slot-scope="{ item }">
      <education-item v-bind="item"/>
    </template>
  </list-component>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import ListComponent from '@/components/ListComponent.vue';
import EducationItem, { EducationItemObject } from '@/components/education/EducationItem.vue';

@Component({
  components: {ListComponent, EducationItem},
})
export default class Education extends BlockList {
  @Prop({default : 'Education'}) protected title?: string;
  @Prop() protected list!: EducationItemObject[];
}
</script>
<style>
</style>
