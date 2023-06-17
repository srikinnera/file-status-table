import { module, test } from 'qunit';
import { setupRenderingTest } from 'file-status-table/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | download', function (hooks) {
  setupRenderingTest(hooks);

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
});
