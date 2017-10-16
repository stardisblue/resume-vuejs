<template>
  <div class="tabs is-medium">
    <ul>
      <h2>
        <li><a>{{title}}</a></li>
      </h2>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['title']
  }
</script>
<style lang="scss">
  .tabs.is-medium {
    margin-bottom: 0.5em;
  }
</style>
