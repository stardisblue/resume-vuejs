<template>
  <block-component :title="title">
    <template v-if="!type">
      <slot v-for="item in list" :item="item">{{item}}</slot>
    </template>
    <ul v-else-if="type === 'unordered'">
      <li v-for="item in list"><slot :item="item">{{item}}</slot></li>
    </ul>
    <ol v-else >
      <li v-for="item in list"><slot :item="item">{{item}}</slot></li>
    </ol>
  </block-component>
</template>
<script lang="ts">
import BlockList from '@/classes/BlockList'
import BlockComponent from '@/components/BlockComponent.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: { BlockComponent },
})
export default class ListComponent extends BlockList {
  @Prop({
    type: String,
    validator: (value) => ['ordered', 'unordered'].indexOf(value) !== -1,
  })
  private type?: string
}
</script>
