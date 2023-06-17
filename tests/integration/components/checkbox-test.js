import { module, test } from 'qunit';
import { setupRenderingTest } from 'file-status-table/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | checkbox', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Checkbox />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Checkbox />
    `);

    assert.dom(this.element).exists();
  });

});
