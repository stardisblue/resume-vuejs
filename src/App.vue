<template>
  <div id="app">
    <resume></resume>
  </div>
</template>
<script lang="ts">
import Resume from '@/views/Resume.vue'
import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab, fas)

Vue.component('font-awesome-icon', FontAwesomeIcon)

export default Vue.extend({ components: { Resume } })
</script>

<style lang="scss">
</style>
