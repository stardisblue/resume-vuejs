<template>
  <div class="card-content is-narrow">
    <component-header title="Intérêts"></component-header>

    <div class="tags">
      <div v-for="interest in interests" class="tag is-success">{{interest}}</div>
    </div>
  </div>
</template>
<script>
  import ComponentHeader from './ComponentHeader.vue'

  export default {
    name: 'interests',

    props: ['interests'],

    components: {
      ComponentHeader
    }
  }
</script>
