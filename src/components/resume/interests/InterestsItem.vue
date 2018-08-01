<template >
  <div v-if='itemIsString' class="iterests-item">
    {{item}}
  </div>
  <div v-else class="iterests-item">
    <div v-if="item.type" class="type" >{{item.type}}</div>
    <icon :icon="item.icon"/>
    <div class="name">{{item.name}}</div>
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
export default class InterestsItem extends Vue {
  @Prop() private item!: string | InterestsItemObject

  get itemIsString(): boolean {
    return typeof this.item === 'string'
  }
}
</script>

<style>
</style>
