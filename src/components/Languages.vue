<template>
  <div class="card-content">
    <component-header title="Langues"></component-header>

    <table class="table is-fullwidth">
      <tbody>
      <tr v-for="language in languages">
        <td>{{language.language}}</td>
        <td>{{language.fluency}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import ComponentHeader from './ComponentHeader.vue'

  export default {
    name: 'languages',

    props: ['languages'],

    components: {
      ComponentHeader
    }
  }
</script>
<style>
  .languages {
    margin-top: 0.5rem;
  }
</style>
