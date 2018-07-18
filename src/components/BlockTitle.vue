<template>
    <div class="title">{{title}}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Block from '@/classes/Block';

@Component
export default class BlockTitle extends Block {
  @Prop() protected title!: string;
}
</script>

<style lang="scss">
</style>
