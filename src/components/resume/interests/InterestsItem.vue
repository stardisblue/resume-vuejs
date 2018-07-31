<template>
  <div class="iterests-item">
    <div v-if="type" class="type" >{{type}}</div>
    <icon :icon="icon"/>
    <div class="name">{{name}}</div>
  </div>
</template>

<script lang="ts">
import Icon, { IconObject } from '@/components/resume/Icon.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface InterestsItemObject {
  type?: string
  icon: string | IconObject
  name: string
}

@Component({
  components: {Icon},
})
export default class InterestsItem extends Vue implements InterestsItemObject {
  @Prop() public type?: string
  @Prop() public icon!: string | IconObject
  @Prop() public name!: string
}
</script>

<style>
</style>
