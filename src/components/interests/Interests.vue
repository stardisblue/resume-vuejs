<template>
  <list-component :title="title" :list="list">
    <template slot-scope="{item}">
      <interests-item v-bind="item"/>
    </template>
  </list-component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import InterestsItem, { InterestsItemObject } from '@/components/interests/InterestsItem.vue';

@Component({
  components: { InterestsItem },
})
export default class Interests extends BlockList {
  @Prop({ default: 'Interests' })
  protected title?: string;
  @Prop() protected list!: string | string[] | InterestsItemObject[];
}
</script>

<style>
</style>
