<template>
  <list-component :title="title" :list="list" class="r--languages">
    <languages-item slot-scope="{ item }" v-bind="item"/>
  </list-component>
</template>

<script lang="ts">
import BlockList from '@/classes/BlockList'
import ListComponent from '@/components/ListComponent.vue'
import LanguagesItem, { LanguagesItemObject } from '@/components/resume/languages/LanguagesItem.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: { LanguagesItem, ListComponent },
})
export default class Languages extends BlockList {
  @Prop({default : 'Languages'}) protected title?: string
  @Prop() protected list!: LanguagesItemObject[]
}
</script>

<style>
</style>
