<template>
  <div class="option-overlay">
    <textarea v-model="text" @input="processYaml" name="content" id="" cols="30" rows="10"></textarea>
  </div>
</template>
<script lang="ts">
import axios from 'axios'
import jsyaml from 'js-yaml'
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Overlay extends Vue {
  public text: string = ''
  public error: string = ''

  public created() {
    axios.get('resume.yaml').then((response) => {
      this.text = response.data
      this.processYaml()
    })
  }

  public processYaml() {
    try {
      const jsonResume = jsyaml.safeLoad(this.text).resume
      this.$store.commit('setResume', jsonResume)
    } catch (error) {
      this.error = error
    }
  }
}
</script>