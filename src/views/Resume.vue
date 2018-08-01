<template>
  <div class="resume">
    <option-button/>
    <block-component v-if="resume" :title="title">
      <work v-bind="resume.work"/>
      <education v-bind="resume.education"/>
      <profile v-bind="resume.profile"/>
      <interests v-bind="resume.interests"/>
      <skills v-bind="resume.skills"/>
    </block-component>
  </div>
</template>

<script lang="ts">
import Block from '@/classes/Block'
import BlockComponent from '@/components/BlockComponent.vue'
import Button from '@/components/options/Button.vue'
import Education from '@/components/resume/education/Education.vue'
import Interests from '@/components/resume/interests/Interests.vue'
import Profile from '@/components/resume/Profile.vue'
import Skills from '@/components/resume/skills/Skills.vue'
import Work from '@/components/resume/work/Work.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { mapState } from 'vuex'



@Component({
  components: { Work, Education, BlockComponent, Profile, Interests, Skills, 'option-button': Button },
  computed: mapState(['resume']),
})
export default class Resume extends Block {
  @Prop({ default: 'Curriculum Vitae' })
  protected title!: string
}
</script>
