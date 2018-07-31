<template>
  <div class="external-link">
    <a v-if="linkIsString" :href="link">{{link}} </a>
    <a v-else :href="link.url">
      <icon :icon="link.type"/>{{link.label}}
    </a>
  </div>
</template>

<script lang="ts">
import Icon from '@/components/resume/Icon.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface ExternalLinkObject {
  type: string
  label: string
  url: string
}

@Component({
  components: {Icon},
})
export default class ExternalLink extends Vue {
  @Prop() private link!: string | ExternalLinkObject

  get linkIsString() {
    return typeof this.link === 'string'
  }
}
</script>

<style>
</style>
