<template>
  <div class="item">
    <div class="item-header">
            <span class="item-header-body is-white">
              <div class="item-header-date is-inline-block is-size-7"><i class="fa fa-calendar-o"></i>&nbsp;
              {{convertDate(item.startDate)}} - {{convertDate(item.endDate)}}
              </div>
              <span class="title is-6">{{item.title}}</span><span class="has-text-grey"> | {{item.company}}</span>
            </span>
    </div>
    <div class="item-body">
      <div v-if="item.website" class="is-pulled-right">
        <div class="tags has-addons">
          <span class="tag icon"><i class="fa" :class="'fa-'+item.website.type"></i></span>
          <a class="tag is-link" :href="item.website.url">{{item.website.text}}</a>
        </div>
      </div>

      <blockquote v-html="item.summary"></blockquote>

      <ul class="item-content">
        <li v-for="content in item.content">
          <span class="icon has-text-success"><i class="fa" :class="content.icon"></i></span>
          <span v-html="content.text"></span></li>
      </ul>

      <ul class="tags">
        <li v-for="keyword in item.keywords" class="tag is-tiny is-info">{{keyword}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'

  moment.locale('fr')

  export default {
    name: 'work-item',
    props: ['item'],
    methods: {
      convertDate: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY')
    }
  }
</script>
