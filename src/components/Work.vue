<template>
  <section class="section">
    <div class="container">
      <div class="tabs is-medium ">
        <ul>
          <h2>
            <li class="is-active"><a>Experience</a></li>
          </h2>
        </ul>
      </div>
      <template v-for="item in work">
        <div class="work">
          <div class="work-header">
            <span class="work-header-body is-white">
              <span class="tag is-white"><i class="fa fa-calendar-o"></i>&nbsp;
              {{convertDate(item.startDate)}} - {{convertDate(item.endDate)}}
              </span>
              <span class="title is-6">{{item.title}}</span><span class="has-text-grey"> | {{item.company}}</span>
            </span>
          </div>
          <div class="work-body">
            <p v-if="item.website" class="is-pulled-right"><a class="tag is-link" :href="item.website">
              <i class="fa fa-link"></i>&nbsp;{{websiteName(item.website)}}</a></p>
            <div class="content is-marginless">
              <blockquote class="blockquote" v-html="item.summary"></blockquote>
            </div>
            <ul>
              <li><span class="icon"><i class="fa fa-check"></i></span> <span v-html="item.mission"></span></li>
              <li><span class="icon"><i class="fa fa-plus"></i></span> <span v-html="item.gain"></span></li>
            </ul>
            <div class="tags">
              <span v-for="tool in item.tools" class="tag is-tiny is-info">{{tool}}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
<script>
  import moment from 'moment'

  moment.locale('fr')

  export default {
    name: 'work',

    props: ['work'],

    methods: {
      convertDate: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY'),
      websiteName: (website) => {
        return website.replace(/^https?:\/\//i, '')
      }
    }
  }
</script>
<style lang="scss">
  $content-blockquote-padding: 0.75em 1.5em;

  @import '~bulma/sass/utilities/_all.sass';
  @import '~bulma/sass/elements/content.sass';

  .work {
    margin-bottom: 1rem;

    .work-header {
      position: relative;

      .work-header-body {
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

    ul {
      margin: 0.5rem 0 0.5rem 2rem;
    }

    .tags {
      margin-left: 2rem;
    }
  }

</style>
