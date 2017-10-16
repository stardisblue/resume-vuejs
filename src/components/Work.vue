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
              <span class="title is-6">{{item.title}}</span> | <span class="has-text-grey">{{item.company}}</span>
            </span>
          </div>
          <p v-if="item.website"><a class="tag is-white" :href="item.website"><i
            class="fa fa-link"></i>&nbsp;{{item.website}}</a></p>
          <ul class="work-list">
            <li><i class="fa fa-book"></i> <span v-html="item.summary"></span></li>
            <li><i class="fa fa-check"></i> <span v-html="item.mission"></span></li>
            <li><i class="fa fa-plus"></i> <span v-html="item.gain"></span></li>
          </ul>
          <div class="tags">
            <span class="tag is-white is-medium"><i class="fa fa-wrench"></i>&nbsp;Outils:</span>
            <span v-for="tool in item.tools" class="tag is-tiny is-primary">{{tool}}</span>
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
      convertDate: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY')

    }
  }
</script>
<style lang="scss">
  @import '~bulma/sass/utilities/_all.sass';
  @import '~bulma/sass/elements/content.sass';

  .work {
    margin-bottom: 1rem
  }

  .work-header {
    position: relative;

    .work-header-body {
      padding-right: 1rem;
      &.is-white {
        background-color: white;
      }
    }
  }

  .work-header::after {
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

  .work-list {
    margin: 0.5rem 0 0.5rem 2rem;
  }
</style>
