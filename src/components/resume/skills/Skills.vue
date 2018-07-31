<template>
  <block-component :title="title" :list="list" class="skills">
    <template slot-scope="{ item }">
      <skills-item v-bind="item"/>
    </template>
  </block-component>
</template>
<script lang="ts">
import BlockList from '@/classes/BlockList'
import BlockComponent from '@/components/BlockComponent.vue'
import { SkillsItemObject } from '@/components/resume/skills/SkillsItem.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: { BlockComponent },
})
export default class Skills extends BlockList {
  @Prop({ default: 'Skills' })
  protected title?: string
  @Prop() protected list!: SkillsItemObject[]
}
</script>
<style>
</style>
