<template lang="pug">
  li.r--interest(v-if='itemIsString') {{item}}
  li.r--interest(v-else)
    .r--type(v-if="item.type") {{item.type}}
    icon(:icon="item.icon")
    .r--name {{item.name}}
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
export default class InterestsItem extends Vue {
  @Prop() private item!: string | InterestsItemObject

  get itemIsString(): boolean {
    return typeof this.item === 'string'
  }
}
</script>

<style>
</style>
