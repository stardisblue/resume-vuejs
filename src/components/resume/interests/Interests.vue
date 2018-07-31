<template v-if="typeof list === 'string'">
  <block-component :title="title" class="interests">
    {{list}}
  </block-component>
</template>
<template v-else>
  <list-component class="interests" :title="title" :list="list" type="unordered">
    <template slot-scope="{item}">
      <template v-if="typeof item === 'string'">{{item}}</template>
      <interests-item v-else v-bind="item"/>
    </template>
  </list-component>
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
  @Prop({ default: 'Interests' })
  protected title?: string
  @Prop() protected list!: string | string[] | InterestsItemObject[]
}
</script>

<style>
</style>
