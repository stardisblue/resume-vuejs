<template>
  <div id="vuejs-resume">
    <div class="section">
      <div class="container">

        <div class="columns">
          <div class="column is-9 is-paddingless-right">
            <resume-header :header="header"></resume-header>
            <skills :skills="skills"></skills>
            <education :education="education"></education>
            <work :work="work"></work>
          </div>
          <div class="column is-paddingless-left">
            <div class="card is-shadowless">
              <div class="card-image">
                <figure class="image has-text-centered">
                  <img src="./assets/profil.jpg">
                </figure>
              </div>
              <basics :basics="basics"></basics>
              <languages :languages="languages"></languages>
              <interests :interests="interests"></interests>
            </div>
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

  import * as resume from './resume.json'

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

<style lang="sass">
  @import '~font-awesome/css/font-awesome.css'

  // Stackoverflow theme
  $text: #242729
  $green: #5fba7d
  $cyan: #E1ECF4
  $cyan-invert: #39739d
  $blue: #07C
  $link-active: #3af
  $white-ter: #eff0f1
  //$border: #ffeb8e

  $tag-radius: 0

  $section-padding: 2rem 1.5rem

  // text
  $body-family: Arial, "Helvetica Neue", Helvetica, sans-serif

  @import '~bulma/sass/utilities/_all'
  @import '~bulma/sass/base/_all'
  @import '~bulma/sass/components/card'
  @import '~bulma/sass/components/tabs'
  @import '~bulma/sass/grid/columns'
  @import '~bulma/sass/elements/container'
  @import '~bulma/sass/elements/form'
  @import '~bulma/sass/elements/icon'
  @import '~bulma/sass/elements/image'
  @import '~bulma/sass/elements/title'
  @import '~bulma/sass/elements/tag'
  @import '~bulma/sass/elements/table'
  @import '~bulma/sass/layout/section'
  @import '~bulma/sass/layout/hero'
  @import "assets/bulma-compressed"

  @import 'assets/print'
  @import "assets/item"

</style>
