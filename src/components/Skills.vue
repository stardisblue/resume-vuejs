<template>
  <section class="section">
    <component-header title="Compétences"></component-header>
    <div class="columns is-variable is-1">
      <template v-for="skill in skills">
        <div class="column">
          <h3 class="title is-6 is-inline-block">{{skill.name}}</h3>
          <h4 class="subtitle is-7 is-inline-block">{{skill.level}}</h4>
          <progress class="progress is-tiny" :class="skill.class"
                    :value="skill.value" max="10">{{skill.value}}%
          </progress>
          <div class="tags">
            <span v-for="keyword in skill.keywords" class="tag is-tiny is-info">{{keyword}}</span>
          </div>
        </div>
      </template>
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
<style lang="scss">
  @import '~bulma/sass/utilities/_all.sass';
  @import '~bulma/sass/elements/progress.sass';

  .progress.is-tiny {
    margin-top: -1rem;
    margin-bottom: 0.5rem;
    height: 0.3rem;
    padding-right: 3rem;
  }
</style>
