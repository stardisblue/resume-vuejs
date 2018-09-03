<template>
  <div class="r--languages-item">
    <div class="r--language">{{language}}</div>
    <div class="r--value">{{value}}</div>
    <div class="r--label">{{label}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface LanguagesItemObject {
  language: string
  value: number
  label: string
}

@Component
export default class LanguagesItem extends Vue implements LanguagesItemObject {
  @Prop() public language!: string
  @Prop() public value!: number
  @Prop() public label!: string
}
</script>

<style>
</style>
