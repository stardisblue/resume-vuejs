<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Block from '@/components/Block.vue';

@Component
export default class BlockList extends Block {
  @Prop() protected list!: any;
}
</script>

<style>
</style>
