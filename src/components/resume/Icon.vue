<template>
  <font-awesome-icon :icon="computedIcon"/>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

export interface IconObject {
  prefix: string
  iconName: string
}

@Component
export default class Icon extends Vue {
  @Prop() private icon!: string | IconObject

  get computedIcon() {
    return typeof this.icon === 'string' ? this.icon : [this.icon.prefix, this.icon.iconName]
  }
}
</script>