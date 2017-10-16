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

  // colors
  $text: #242729;
  $success: #5fba7d;
  $info: #E1ECF4;
  $info-invert: #39739d;
  $link: #07C;
  $link-active: #3af;
  $background: #eff0f1;

  // text
  $body-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  $body-size: 15px;

  // section
  $section-padding: 0.5rem 0.5rem 0 0.5rem;

  // tags
  $tag-radius: 0;

  // tabs
  $tabs-border-bottom-width: 2px;
  $tabs-link-padding: 0 2rem 0 1rem;

  @import '~bulma/sass/utilities/_all.sass';
  @import '~bulma/sass/base/_all.sass';
  @import '~bulma/sass/components/card.sass';
  @import '~bulma/sass/components/tabs.sass';
  @import '~bulma/sass/grid/columns.sass';
  @import '~bulma/sass/elements/container.sass';
  @import '~bulma/sass/elements/form.sass';
  @import '~bulma/sass/elements/icon.sass';
  @import '~bulma/sass/elements/image.sass';
  @import '~bulma/sass/elements/title.sass';
  @import '~bulma/sass/elements/tag.sass';
  @import '~bulma/sass/elements/table.sass';
  @import '~bulma/sass/layout/section.sass';
  @import '~bulma/sass/layout/hero.sass';

  .is-paddingless-right {
    padding-right: 0;
  }

  .is-paddingless-left {
    padding-left: 0;
  }

  .tag.is-tiny {
    height: 1.5em;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }

  .tags .tag.is-tiny:not(:last-child) {
    margin-right: 0.2rem;
  }

  .content:not(:last-child) {
    margin-bottom: 0;
  }

  .item {
    margin-bottom: 0.5rem;

    .item-header {
      position: relative;
      margin-bottom: 0.3rem;

      .item-header-date {
        padding-right: 0.5em;
        min-width: 140px;
      }
      .item-header-body {
        padding-right: 1rem;
        &.is-white {
          background-color: white;
        }
      }

      &:after {
        position: absolute;
        left: 0;
        top: .8em;
        height: 1px;
        background: #ccc;
        content: "";
        width: 100%;
        z-index: -100;
        display: block;
      }
    }

    .item-body {
      font-size: 0.80em;

      .is-pulled-right {
        margin-left: 5px;
      }

      ul li .icon {
        height: 0.85rem;
      }
      blockquote {
        background-color: #fff9e3;
        border-left: 2px solid #ffeb8e;
        padding: 5px 0 5px 10px;
        margin-bottom: 0;
      }

      ul.item-content {
        margin: 0.2rem 0 0.5rem 2rem;
      }

      ul.tags {
        margin-left: 2rem;
      }
    }

  }

  @media print {
    @page {
      margin: 0;

    }

    body {
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      mso-print-color: exact;
    }
  }

</style>
