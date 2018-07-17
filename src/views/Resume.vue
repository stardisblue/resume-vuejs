<template>
  <div class="resume">
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
     HelloWorld,
  },
})
export default class Resume extends Vue {
  public computed: object = {
  };
}
</script>
