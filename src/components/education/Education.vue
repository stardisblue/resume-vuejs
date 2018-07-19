<template>
  <list-component :title="title" :list="list">
    <template slot-scope="{ item }">
      <education-item v-bind="item"/>
    </template>
  </list-component>
</template>
<script lang="ts">
import BlockList from '@/classes/BlockList';
import EducationItem, { EducationItemObject } from '@/components/education/EducationItem.vue';
import ListComponent from '@/components/ListComponent.vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  components: { ListComponent, EducationItem },
})
export default class Education extends BlockList {
  @Prop({default : 'Education'}) protected title?: string
  @Prop() protected list!: EducationItemObject[]
}
</script>
<style>
</style>
