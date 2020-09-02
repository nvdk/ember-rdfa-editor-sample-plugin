import Service from '@ember/service';

export default class RdfaEditorSamplePluginService extends Service {
  /**
   * @property rdfaBlocks rdfaBlocks for the current selection
   * @property editor
   */
  async suggestHints(rdfaBlocks, editor) {
    return [{component: 'annotate-text', info: { editor }}];
  }
}
