<template>
  <section class="section">
    <title-component :title="title"/>
    <div v-for="item in list">
      <slot :item="item">{{item.title}}</slot>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import BlockList from '@/classes/BlockList';
import TitleComponent from '@/components/TitleComponent.vue'

@Component({
  components: {TitleComponent},
})
export default class ListComponent extends BlockList {
    @Prop() protected list!: any[];
}
</script>
