import { module, test } from 'qunit';
import { setupRenderingTest } from 'file-status-table/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Service from '@ember/service';

class FileSource extends Service{
  selectedFiles = [{}, {}, {}];
  files = [{}, {}, {}, {}];

  selectedCount(){
    return this.selectedFiles.length;
  }

  filesCount() {
    return this.files.length;
  }

  setFiles(files) {
    this.files = files;
  }

  getFiles() {
    return this.files;
  }
}
module('Integration | Component | file-table', function (hooks) {
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

    await render(hbs`<FileTable />`);

    assert.dom(this.element).exists();
  });

  test('should have the table rendered', async function(assert){
    await render(hbs`<FileTable />`);
    assert.equal(this.element.querySelectorAll('tbody>tr').length, 5)
  })

});
