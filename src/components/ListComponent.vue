<template>
  <block-component :title="title">
    <div v-for="item in list">
      <slot :item="item">{{item}}</slot>
    </div>
  </block-component>
</template>
<script lang="ts">
import BlockList from '@/classes/BlockList'
import BlockComponent from '@/components/BlockComponent.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {BlockComponent},
})
export default class ListComponent extends BlockList {}
</script>
