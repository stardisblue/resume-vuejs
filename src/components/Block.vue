<template>
    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class BlockList extends Vue {
    @Prop() protected title?: string;
}

</script>

<style>

</style>
