<template>
  <section class="section">
    <div class="container">
      <div class="tabs is-medium ">
        <ul>
          <li class="is-active"><h2><a>Compétences</a></h2></li>
        </ul>
      </div>
      <div class="columns is-variable is-1">
        <template v-for="skill in skills">
          <div class="column">
            <h3 class="title is-6">{{skill.name}}</h3>
            <h4 class="subtitle is-6">{{skill.level}}</h4>
            <progress class="progress is-tiny" :class="skill.class"
                      :value="skill.value" max="10">{{skill.value}}%
            </progress>
            <div class="tags">
              <span v-for="keyword in skill.keywords" class="tag is-tiny is-info">{{keyword}}</span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
<script>
  export default {
    name: 'skills',

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
