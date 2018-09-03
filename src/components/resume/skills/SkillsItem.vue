<template lang="pug">
  .r--skill.mb1
    h3.r--name(class="f5 b dib mb1") {{name}} #[small.normal.f6(v-if="summary") {{summary}}]
    .r--value(v-if="value")
      .r--rating {{value.rating}}
      .r--label {{value.label}}
    ul.r--keywords(v-if="keywords" class="list f7 code")
      li.r--keyword(v-for="keyword in keywords" :key="keyword" class="dib ma1 ph1 bg-washed-blue") {{keyword}}

</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface SkillsItemObject {
  name: string
  summary: string
  value?: {
    rating: number;
    label: string;
  }
  keywords?: string[]
}

@Component
export default class SkillsItem extends Vue implements SkillsItemObject {
  @Prop() public name!: string
  @Prop() public summary!: string
  @Prop()
  public value?: {
    rating: number;
    label: string;
  }
  @Prop() public keywords?: string[]
}
</script>
<style>
</style>
