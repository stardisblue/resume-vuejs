<template lang="pug">
  ListComponent.r--education(:title="title" :list="list")
    EducationItem(slot-scope="{ item }" v-bind="item")
</template>
<script lang="ts">
import BlockList from '@/classes/BlockList'
import ListComponent from '@/components/ListComponent.vue'
import EducationItem, { EducationItemObject } from '@/components/resume/education/EducationItem.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

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
