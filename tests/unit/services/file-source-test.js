import { module, test } from 'qunit';
import { setupTest } from 'file-status-table/tests/helpers';

module('Unit | Service | file-source', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:file-source');
    assert.ok(service);
  });
});
