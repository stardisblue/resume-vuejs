<template>
  <header :class="classes.header">
    <h1 :class="classes.title" class="ma0">{{ title }}</h1>
    <h2 :class="classes.subtitle">{{ subtitle }}</h2>
  </header>
</template>
<script lang="ts">
import Block from '@/classes/Block'
import BlockComponent from '@/components/BlockComponent.vue'
import { Component, Prop } from 'vue-property-decorator'

@Component({
  components: { BlockComponent },
})
export default class Header extends Block {
  @Prop({ default: '' }) protected subtitle ?: string
  @Prop({ default: () => ({
    header: 'r--header mv3',
    title: 'f2 normal helvetica',
    subtitle: 'r--subtitle f3 normal',
  }) })
  protected classes ?: string
}
</script>
