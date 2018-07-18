<template>
  <div class="resume">
    <block-title title="test"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BlockTitle from '@/components/BlockTitle.vue'; // @ is an alias to /src

@Component({
  components: { BlockTitle },
})
export default class Resume extends Vue {}
</script>
