import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Block extends Vue {
    @Prop() protected title?: string;
}
