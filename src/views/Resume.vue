<template lang="pug">
  .r--resume.times.f6
    Button.fr
    div.cf(v-if="resume")
      main.fl.w-75(role="main")
        Header(:title="resume.title" :subtitle="resume.subtitle")
        Work(v-bind="resume.work")
        Education(v-bind="resume.education")
      aside.fl.w-25
        Profile(v-bind="resume.profile")
        Interests(v-bind="resume.interests")
        Skills(v-bind="resume.skills")
        Languages(v-bind="resume.languages")
</template>

<script lang="ts">
import Block from '@/classes/Block'
import Header from '@/components/Header.vue'
import Button from '@/components/options/Button.vue'
import Education from '@/components/resume/education/Education.vue'
import Interests from '@/components/resume/interests/Interests.vue'
import Languages from '@/components/resume/languages/Languages.vue'
import Profile from '@/components/resume/Profile.vue'
import Skills from '@/components/resume/skills/Skills.vue'
import Work from '@/components/resume/work/Work.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'

@Component({
  components: { Header, Work, Education, Profile, Interests, Skills, Button,
  Languages },
  computed: mapState(['resume']),
})
export default class Resume extends Block {
  @Prop({ default: 'Curriculum Vitae' })
  protected title!: string
}
</script>
<style lang="sass">
.r--has-icon
  list-style: none
  position: relative
</style>
