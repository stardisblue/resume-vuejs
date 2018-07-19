<template>
  <section class="section">
    <title-component :title="title"/>
    <slot>TODO CONTENT</slot>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Block from '@/classes/Block';
import TitleComponent from '@/components/TitleComponent.vue';

@Component({
  components: { TitleComponent },
})
export default class BlockComponent extends Block {}
</script>
