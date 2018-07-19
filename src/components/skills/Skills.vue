<template>
  <block-component :title="title" :list="list">
    <template slot-scope="{ item }">
      <skills-item v-bind="item"/>
    </template>
  </block-component>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import BlockComponent from '@/components/BlockComponent.vue';
import { SkillsItemObject } from '@/components/skills/SkillsItem.vue';

@Component({
  components: { BlockComponent },
})
export default class Skills extends BlockList {
  @Prop({ default: 'Skills' })
  protected title?: string;
  @Prop() protected list!: SkillsItemObject[];
}
</script>
<style>
</style>
