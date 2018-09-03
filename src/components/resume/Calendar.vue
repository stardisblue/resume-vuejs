<template lang="pug">
  .rw--dates.dib.cf.tc
    Icon.r--icon(:icon="icon" class="v-mid mr1 tr fl")
    span.r--start-date(v-if="startDate") {{startDate | formatDate}}
    template(v-if="startDate && endDate")
      |
      | -
      |
    span.r--end-date(v-if="endDate") {{endDate | formatDate}}
</template>
<script lang="ts">
import Icon, { IconObject } from '@/components/resume/Icon.vue'
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'


@Component({
  components: { Icon },
})
export default class Calendar extends Vue {
  @Prop() public icon !: IconObject
  @Prop() private startDate?: Date
  @Prop() private endDate?: Date
}
</script>
<style lang="sass">
.rw--dates
  width: 9rem
</style>

