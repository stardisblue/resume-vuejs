<template>
  <list-component :title="title" :list="list">
    <template slot-scope="{ item }">
      <languages-item v-bind="item"/>
    </template>
  </list-component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import LanguagesItem, { LanguagesItemObject } from '@/components/languages/LanguagesItem.vue';

@Component({
  components: { LanguagesItem },
})
export default class Languages extends BlockList {
  @Prop({default : 'Languages'}) protected title?: string;
  @Prop() protected list!: LanguagesItemObject[];
}
</script>

<style>
</style>
