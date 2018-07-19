<template>
  <list-component :title="title" :list="list">
    <template slot-scope="{ item }">
      <publications-item v-bind="item"/>
    </template>
  </list-component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import PublicationsItem, { PublicationsItemObject } from '@/components/publications/PublicationsItem.vue';

@Component({
  components: {PublicationsItem},
})
export default class Publications extends BlockList {
  @Prop({default : 'Publications'}) protected title?: string;
  @Prop() protected list!: PublicationsItemObject[];
}
</script>

<style>
</style>
