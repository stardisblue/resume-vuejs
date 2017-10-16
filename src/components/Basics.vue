<template>
  <div>
    <figure class="image is-128x128 is-pulled-right">
      <img src=".././assets/profil.jpg">
    </figure>
  </div>
</template>
<script>
  export default {
    name: 'AboutMe',

    props: ['basics']
  }
</script>
<style lang="scss">
  @import '~bulma/sass/utilities/_all.sass';
  @import '~bulma/sass/elements/image.sass';
</style>
