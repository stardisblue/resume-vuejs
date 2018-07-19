import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Block extends Vue {
    @Prop() protected title?: string
}
