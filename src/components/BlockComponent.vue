<template lang="pug">
  section.section
    TitleComponent(:title="title")
    .content(class="ma1")
      slot TODO CONTENT
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
