import { Component, Vue, Prop } from 'vue-property-decorator';
import Block from './Block';

@Component
export default class BlockList extends Block {
  @Prop() protected list!: any;
}
