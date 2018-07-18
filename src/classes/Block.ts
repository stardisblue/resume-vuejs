import { Component, Vue, Prop } from 'vue-property-decorator';
import BlockTitle from '@/components/BlockTitle.vue';

@Component({
    components: {BlockTitle},
})
export default class BlockList extends Vue {
    @Prop() protected title?: string;
}
