<template>
  <div id="vuejs-resume">
    <div class="section">
      <div class="container">

        <div class="columns">
          <div class="column is-9">
            <resume-header :header="header"></resume-header>
            <skills :skills="skills"></skills>
            <work :work="work"></work>
            <education :education="education"></education>
          </div>
          <div class="column">
            <basics :basics="basics"></basics>
            <interests :interests="interests"></interests>
            <languages :languages="languages"></languages>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Basics from './components/Basics.vue'
  import Education from './components/Education.vue'
  import ResumeHeader from './components/ResumeHeader.vue'
  import Interests from './components/Interests.vue'
  import Languages from './components/Languages.vue'
  import Skills from './components/Skills.vue'
  import Work from './components/Work.vue'

  import * as resume from './assets/resume.json'

  export default {
    name: 'resume',
    components: {
      ResumeHeader,
      Skills,
      Work,
      Education,
      Basics,
      Interests,
      Languages
    },

    data: () => resume

  }
</script>

<style lang="scss">
  @import '~font-awesome/css/font-awesome.css';
  $section-padding: 0.5rem 1.5rem;
  $tabs-border-bottom-width: 2px;
  $tabs-link-padding: 0 2rem 0 1rem;
  $tag-radius: 0;

  @import '~bulma/sass/utilities/_all.sass';
  @import '~bulma/sass/base/_all.sass';
  @import '~bulma/sass/components/tabs.sass';
  @import '~bulma/sass/grid/columns.sass';
  @import '~bulma/sass/elements/container.sass';
  @import '~bulma/sass/elements/tag.sass';
  @import '~bulma/sass/layout/section.sass';

  .tag.is-tiny {
    height: 1.75em;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }

  .tags .tag.is-tiny:not(:last-child) {
    margin-right: 0.3rem;
  }

</style>
