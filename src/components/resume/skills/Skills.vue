<template lang="pug">
  BlockComponent.r--skills(:title="title")
    SkillsItem(v-for="item in list" :key="item.name" v-bind="item")
</template>
<script lang="ts">
import BlockList from '@/classes/BlockList'
import BlockComponent from '@/components/BlockComponent.vue'
import SkillsItem, { SkillsItemObject } from '@/components/resume/skills/SkillsItem.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: { BlockComponent, SkillsItem },
})
export default class Skills extends BlockList {
  @Prop({ default: 'Skills' })
  protected title?: string
  @Prop() protected list!: SkillsItemObject[]
}
</script>
<style>
</style>
