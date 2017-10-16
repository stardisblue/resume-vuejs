<template>
  <section class="section">
    <component-header title="Formation"></component-header>
    <education-item v-for="item,index in education" :item="item" :key="index"></education-item>
  </section>
</template>
<script>
  import moment from 'moment'

  import ComponentHeader from './ComponentHeader.vue'
  import EducationItem from './item/EducationItem.vue'

  moment.locale('fr')

  export default {
    name: 'education',

    props: ['education'],

    components: {
      ComponentHeader,
      EducationItem
    },

    methods: {
      convertDate: date => moment(date.toString(), ['YYYY-MM-DD']).format('MMM YYYY')
    }
  }
</script>
