import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class AnnotateTextComponent extends Component {
  get editor() {
    return this.args.info.editor;
  }

  @action
  async insert(annotation) {
    const selection = this.editor.selectCurrentSelection();
    this.editor.update(selection, { set: { property: 'http://purl.org/dc/terms/description'}});
    this.args.closeHints();
  }

  @action
  closeHints() {
    this.args.closeHints();
  }
}
