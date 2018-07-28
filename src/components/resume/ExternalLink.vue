<template>
  <div class="external-link">
    <a v-if="typeof link === 'string'" :href="link">{{link}} </a>
    <a v-else :href="link.url">
      <font-awesome-icon :icon="link.type"/>{{link.label}}
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface ExternalLinkObject {
  type: string
  label: string
  url: string
}

@Component
export default class ExternalLink extends Vue {
  @Prop() private link!: string | ExternalLinkObject
}
</script>

<style>
</style>
