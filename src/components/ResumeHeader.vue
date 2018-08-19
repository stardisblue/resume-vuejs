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
