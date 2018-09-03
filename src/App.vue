<template>
  <div id="app" class="mw8 center">
    <resume></resume>
  </div>
</template>
<script lang="ts">
import Resume from '@/views/Resume.vue'
import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, far, fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

export default Vue.extend({ components: { Resume } })
</script>
<style lang="sass">

@media print
  @page
    margin: 0 1em

  .f6
    font-size: .8em
</style>
