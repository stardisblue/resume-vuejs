import { Prop, Vue } from 'vue-property-decorator'

export default abstract class Item<T> extends Vue {
    @Prop() protected item!: T
}
