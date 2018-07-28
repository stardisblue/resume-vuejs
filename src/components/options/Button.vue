<template>

<div class="option-button">
    <a @click="display = !display" href="#"><font-awesome-icon icon="terminal"/></a>
    <overlay v-show="display" />
</div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Overlay from './Overlay.vue'

@Component({
    components: {Overlay},
})
export default class Button extends Vue {
    public display: boolean = false
}
</script>
