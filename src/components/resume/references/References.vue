<template>
  <list-component :title="title" :list="list" class="references">
    <references-item slot-scope="{ item }" v-bind="item"/>
  </list-component>
</template>

<script lang="ts">
import BlockList from '@/classes/BlockList'
import ReferencesItem, { ReferencesItemObject } from '@/components/resume/references/ReferencesItem.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: { ReferencesItem },
})
export default class References extends BlockList {
  @Prop({default : 'References'}) protected title?: string
  @Prop() protected list!: ReferencesItemObject[]
}
</script>

<style>
</style>
