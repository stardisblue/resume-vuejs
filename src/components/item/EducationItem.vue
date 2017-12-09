<template>
  <div class="item">
    <div class="item-header">
      <span class="item-header-body is-white">
        <span class="item-header-date is-inline-block is-size-7">
          <div class="icon"><i class="fa fa-calendar-o"></i></div>{{getDates}}</span>
        <span class="title is-6">{{item.studyType}} {{item.area}}</span>
        <span class="has-text-grey"> | {{item.institution}}</span>
      </span>
    </div>
    <div class="item-body" v-if="item.keywords.length > 0">
      <ul class="tags">
        <li v-for="keyword in item.keywords" class="tag is-small is-info">{{keyword}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
  import moment from 'moment'

  moment.locale('fr')

  export default {
    name: 'education-item',
    props: ['item'],

    computed: {
      getDates: function () {
        if (this.item.startDate !== '') {
          return this.convertDate(this.item.startDate) + ' - ' + this.convertDate(this.item.endDate)
        } else {
          return this.convertDate(this.item.endDate)
        }
      }
    },

    methods: {
      convertDate: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY')
    }
  }
</script>
