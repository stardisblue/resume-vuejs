<template lang="pug">
  h2.r--title(:class="titleClass" class="mb2 f3 helvetica") 
    span(class="bb") {{title}}
</template>

<script lang="ts">
import Block from '@/classes/Block'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TitleComponent extends Block {
  @Prop() protected title!: string
  @Prop({ default: '' })
  protected titleClass ?: string
}
</script>
