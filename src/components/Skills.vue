<template>
  <section class="skills section">
    <component-header title="Compétences"></component-header>
    <div v-for="skill in skills" class="skill">
      <h3 class="title is-6 is-inline-block">{{skill.name}}</h3>
      <h4 class="subtitle is-7 is-inline-block">{{skill.level}}</h4>
      <progress class="progress is-small" :class="skill.class"
                :value="skill.value" max="10">{{skill.value}}%
      </progress>
      <div class="tags">
        <span v-for="keyword in skill.keywords" class="tag is-small is-info">{{keyword}}</span>
      </div>
    </div>
  </section>
</template>
<script>
  import ComponentHeader from './ComponentHeader.vue'

  export default {
    name: 'skills',

    components: {
      ComponentHeader
    },

    props: ['skills']
  }
</script>
<style lang="sass">
  @import '~bulma/sass/utilities/_all'
  $progress-bar-background-color: $white-ter
  @import '~bulma/sass/elements/progress'
</style>
