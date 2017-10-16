<template>
  <header class="hero is-small">
    <div class="hero-body ">
      <h1 class="title">{{header.title}}</h1>
      <h2 class="subtitle">{{header.subtitle}}</h2>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header',

    props: ['header']
  }
</script>

<style lang="scss">
  @import '~bulma/sass/utilities/_all.sass';
  @import '~bulma/sass/layout/hero.sass';
  @import '~bulma/sass/elements/title.sass';
</style>
