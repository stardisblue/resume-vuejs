<template lang="pug">
  article.r--education-item(class="mb1")
    .r--title-line.cf
      //- institution
      .rw--institution(class="cf dib fr r--w10")
        span.gray |
        span.r--institution(class="black-60 fr") {{institution}}
      Calendar(:icon="{prefix: 'far', iconName: 'calendar'}"
          :startDate="startDate" :endDate="endDate")
      //- title icon separation
      icon.r--chevron(icon="chevron-right" size="xs" class="mh1 v-base") 
      .r--type(v-if="type" class="black-60 dib") {{type}} :&nbsp;
        |
        |
      //- Title
      h3(class="f5 b dib mv0")
        span.r--study-type {{studyType}}
          |
          |
        span.r--area {{area}}
      //- Summary
      .dib.rw--summary(v-if="summary") &nbsp;- #[span.r--summary {{summary}}]
    //- GPA
    .r--gpa(v-if="gpa") {{gpa}}
    //-
      Keywords
    ul.r--keywords(v-if="keywords" class="list f7 code")
      li.r--keyword(v-for="keyword in keywords" :key="keyword"
        class="dib black-80 bg-washed-blue ph1 ma1") {{keyword}}
</template>

<script lang="ts">
import Calendar from '@/components/resume/Calendar.vue'
import Icon from '@/components/resume/Icon.vue'
import * as moment from 'moment'
import { Component, Prop, Vue } from 'vue-property-decorator'

export interface EducationItemObject {
  type?: string
  institution: string
  area: string
  studyType: string
  summary: string
  startDate?: Date
  endDate?: Date
  gpa?: string
  keywords?: string[]
}

@Component({
  components: {Icon, Calendar},
})
export default class EducationItem extends Vue implements EducationItemObject {
  @Prop() public type?: string
  @Prop() public institution!: string
  @Prop() public area!: string
  @Prop() public studyType!: string
  @Prop() public summary!: string
  @Prop() public startDate?: Date
  @Prop() public endDate?: Date
  @Prop() public gpa?: string
  @Prop() public keywords?: string[]
}
</script>

<style lang="sass">
.r--w10
  min-width: 10rem
</style>
