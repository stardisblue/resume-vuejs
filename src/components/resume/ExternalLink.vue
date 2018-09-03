<template lang="pug">
  .r--external-link.code
    a(v-if="linkIsString" :href="link" class="link underline-hover") {{link}}
    a(v-else :href="link.url" class="link underline-hover")
      icon(:icon="link.type" class="black")
      span(class="pl1") {{link.label}}
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
