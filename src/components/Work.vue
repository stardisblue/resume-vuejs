<template>
  <section class="section">
    <component-header title="Expérience"></component-header>
    <work-item v-for="item, index in work" :item="item" :key="index"></work-item>
  </section>
</template>
<script>
  import ComponentHeader from './ComponentHeader.vue'
  import WorkItem from './item/WorkItem.vue'

  export default {
    name: 'work',

    props: ['work'],

    components: {
      ComponentHeader,
      WorkItem
    }
  }
</script>
