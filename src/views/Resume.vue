<template>
  <div class="resume">
    <block-component title="Curriculum Vitae">
      <work :list="list"/>
    </block-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BlockComponent from '@/components/BlockComponent.vue';
import Work from '@/components/work/Work.vue'; // @ is an alias to /src
import { WorkItemObject } from '@/components/work/WorkItem.vue';

@Component({
  components: { Work, BlockComponent },
})
export default class Resume extends Vue {
  public list: WorkItemObject[] = [
    {
      type: 'test',
      title: 'test2',
      summary: 'ceci est un sommaire',
      company: 'companie',
      website: 'http://google.com',
      body: 'ceci est le corps de texte',
      keywords: ['ceci', 'sont', 'des', 'tags'],
    },
    {
      type: 'test',
      title: 'test2',
      summary: 'ceci est un sommaire',
      company: 'companie',
      website: 'http://google.cdddom',
      body: 'ceci est le corps de texte',
      keywords: ['ceci', 'sont', 'des', 'tags'],
    },
  ];
}
</script>
