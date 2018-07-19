<template>
    <div class="title">{{title}}</div>
</template>

<script lang="ts">
import Block from '@/classes/Block'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TitleComponent extends Block {
  @Prop() protected title!: string
}
</script>

<style lang="scss">
</style>
