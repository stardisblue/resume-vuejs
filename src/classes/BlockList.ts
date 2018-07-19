import Block from '@/classes/Block'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class BlockList extends Block {
  @Prop() protected list!: any
}
