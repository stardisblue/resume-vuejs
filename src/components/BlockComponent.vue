<template>
  <section class="section">
    <title-component :title="title"/>
    <slot>TODO CONTENT</slot>
  </section>
</template>
<script lang="ts">
import Block from '@/classes/Block'
import TitleComponent from '@/components/TitleComponent.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: { TitleComponent },
})
export default class BlockComponent extends Block {}
</script>
