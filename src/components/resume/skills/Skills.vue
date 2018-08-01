<template>
  <list-component class="skills" :title="title" :list="list" >
    <skills-item slot-scope="{ item }" v-bind="item"/>
  </list-component>
</template>
<script lang="ts">
import BlockList from '@/classes/BlockList'
import ListComponent from '@/components/ListComponent.vue'
import SkillsItem, { SkillsItemObject } from '@/components/resume/skills/SkillsItem.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: { ListComponent, SkillsItem },
})
export default class Skills extends BlockList {
  @Prop({ default: 'Skills' })
  protected title?: string
  @Prop() protected list!: SkillsItemObject[]
}
</script>
<style>
</style>
