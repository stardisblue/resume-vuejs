<template>
  <div class="item">
    <div class="item-header">
      <span class="item-header-body is-white">
        <div class="item-header-date is-inline-block is-size-7">
          <div class="icon"><i class="fa fa-calendar-o"></i></div>{{getDates}}</div>
        <span class="title is-6">{{item.studyType}} {{item.area}}</span>
        <span class="has-text-grey"> | {{item.institution}}</span>
      </span>
    </div>
    <div class="item-body">
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
    name: 'education-item',
    props: ['item'],

    computed: {
      getDates: function () {
        if (this.item.startDate !== '') {
          return moment(this.item.startDate.toString(), ['YYYY-MM-DD']).format('MMM YYYY') + ' - ' +
            moment(this.item.endDate.toString(), ['YYYY-MM-DD']).format('MMM YYYY')
        } else {
          return moment(this.item.endDate.toString(), ['YYYY-MM-DD']).format('MMM YYYY')
        }
      }
    },

    methods: {
      convertDate: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY')
    }
  }
</script>
