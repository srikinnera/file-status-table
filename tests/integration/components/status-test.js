import { module, test } from 'qunit';
import { setupRenderingTest } from 'file-status-table/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | status', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Status  />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Status @status="available">{{@status}}</Status>
    `);

    assert.dom(this.element).hasText('available');
  });
});
