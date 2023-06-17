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
}

module('Integration | Component | header', function (hooks) {
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

    await render(hbs`<Header />`);

    assert.dom(this.element).exists();
  });

  test('should have a select all checkbox', async function(assert){
    await render(hbs`<Header />`);
    assert.dom(this.element.querySelector('.checkbox')).exists();
  })

  test('should have download button', async function(assert){
    await render(hbs`<Header />`);
    assert.dom(this.element.querySelector('.text-btn')).exists();
  })

  test('should show count of selected files', async function(assert){
    await render(hbs`<Header />`);
    assert.dom(this.element).hasText('Selected: 3 Download Selected');
  });

});
