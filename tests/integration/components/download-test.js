import { module, test } from 'qunit';
import { setupRenderingTest } from 'file-status-table/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

class FileSource extends Service{
  selectedFiles = [];
  files = [{}, {}, {}, {}];

  selectedCount(){
    return this.selectedFiles.length;
  }

  filesCount() {
    return this.files.length;
  }
}


module('Integration | Component | download', function (hooks) {
  setupRenderingTest(hooks);
  hooks.beforeEach(function(assert){
    this.owner.register('service:file-source', FileSource)
  })

  hooks.afterEach(function(assert){
    this.owner.unregister('service:file-source')
  })
  
  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Download />`);

    assert.dom(this.element).hasText('Download Selected');

    // Template block usage:
    await render(hbs`
      <Download />
    `);

    assert.dom(this.element).exists();
  });

  test('should be disabled if no files selected', async function(assert){
    await render(hbs`<Download />`);
    const btn = this.element.querySelector('.text-btn')
    assert.dom(btn).isDisabled()
  })
});
