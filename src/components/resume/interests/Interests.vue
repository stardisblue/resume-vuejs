<template lang="pug">
  BlockComponent(class="r--interests" :title="title")
    template(v-if="listIsString") {{list}}
    ul(v-else class="list")
      InterestsItem(v-for="item in list" :key="item" :item="item" class="")
</template>
<script lang="ts">
import BlockList from '@/classes/BlockList'
import BlockComponent from '@/components/BlockComponent.vue'
import ListComponent from '@/components/ListComponent.vue'
import InterestsItem, { InterestsItemObject } from '@/components/resume/interests/InterestsItem.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'


@Component({
  components: {BlockComponent, ListComponent, InterestsItem },
})
export default class Interests extends BlockList {
  @Prop({ default: 'Interests' }) protected title?: string
  @Prop() protected list!: string | string[] | InterestsItemObject[]

  get listIsString(): boolean {
    return typeof this.list === 'string'
  }
}
</script>

<style>
</style>
