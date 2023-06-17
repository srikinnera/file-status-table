'use strict';

define("file-status-table/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's / ember-mocha's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.
  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }

  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }

  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("file-status-table/tests/integration/components/checkbox-test", ["@ember/template-factory", "qunit", "file-status-table/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"file-status-table/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | checkbox', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Checkbox />
      */
      {
        "id": "DVPDIptp",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"checkbox\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/checkbox-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Checkbox />
          
      */
      {
        "id": "QYrlV6qg",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,null],[1,\"\\n    \"]],[],false,[\"checkbox\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/checkbox-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).exists();
    });
  });
});
define("file-status-table/tests/integration/components/download-test", ["@ember/template-factory", "qunit", "file-status-table/tests/helpers", "@ember/test-helpers", "@ember/service"], function (_templateFactory, _qunit, _helpers, _testHelpers, _service) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"file-status-table/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"@ember/service"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class FileSource extends _service.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "selectedFiles", []);
      _defineProperty(this, "files", [{}, {}, {}, {}]);
    }
    selectedCount() {
      return this.selectedFiles.length;
    }
    filesCount() {
      return this.files.length;
    }
  }
  (0, _qunit.module)('Integration | Component | download', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    hooks.beforeEach(function (assert) {
      this.owner.register('service:file-source', FileSource);
    });
    hooks.afterEach(function (assert) {
      this.owner.unregister('service:file-source');
    });
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Download />
      */
      {
        "id": "j4abUhH5",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"download\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/download-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('Download Selected');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Download />
          
      */
      {
        "id": "7Xc053F9",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,null],[1,\"\\n    \"]],[],false,[\"download\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/download-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).exists();
    });
    (0, _qunit.test)('should be disabled if no files selected', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Download />
      */
      {
        "id": "j4abUhH5",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"download\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/download-test.js",
        "isStrictMode": false
      }));
      const btn = this.element.querySelector('.text-btn');
      assert.dom(btn).isDisabled();
    });
  });
});
define("file-status-table/tests/integration/components/file-table-test", ["@ember/template-factory", "qunit", "file-status-table/tests/helpers", "@ember/test-helpers", "@ember/service"], function (_templateFactory, _qunit, _helpers, _testHelpers, _service) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"file-status-table/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"@ember/service"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class FileSource extends _service.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "selectedFiles", [{}, {}, {}]);
      _defineProperty(this, "files", [{}, {}, {}, {}]);
    }
    selectedCount() {
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
  (0, _qunit.module)('Integration | Component | file-table', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    hooks.beforeEach(function (assert) {
      this.owner.register('service:file-source', FileSource);
    });
    hooks.afterEach(function (assert) {
      this.owner.unregister('service:file-source');
    });
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <FileTable />
      */
      {
        "id": "clO67Izg",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"file-table\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/file-table-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).exists();
    });
    (0, _qunit.test)('should have the table rendered', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <FileTable />
      */
      {
        "id": "clO67Izg",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"file-table\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/file-table-test.js",
        "isStrictMode": false
      }));
      assert.equal(this.element.querySelectorAll('tbody>tr').length, 5);
    });
  });
});
define("file-status-table/tests/integration/components/header-test", ["@ember/template-factory", "qunit", "file-status-table/tests/helpers", "@ember/test-helpers", "@ember/service"], function (_templateFactory, _qunit, _helpers, _testHelpers, _service) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"file-status-table/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars",0,"@ember/service"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class FileSource extends _service.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "selectedFiles", [{}, {}, {}]);
      _defineProperty(this, "files", [{}, {}, {}, {}]);
    }
    selectedCount() {
      return this.selectedFiles.length;
    }
    filesCount() {
      return this.files.length;
    }
  }
  (0, _qunit.module)('Integration | Component | header', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    hooks.beforeEach(function (assert) {
      this.owner.register('service:file-source', FileSource);
    });
    hooks.afterEach(function (assert) {
      this.owner.unregister('service:file-source');
    });
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Header />
      */
      {
        "id": "ZoNjLNKp",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"header\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/header-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).exists();
    });
    (0, _qunit.test)('should have a select all checkbox', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Header />
      */
      {
        "id": "ZoNjLNKp",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"header\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/header-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element.querySelector('.checkbox')).exists();
    });
    (0, _qunit.test)('should have download button', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Header />
      */
      {
        "id": "ZoNjLNKp",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"header\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/header-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element.querySelector('.text-btn')).exists();
    });
    (0, _qunit.test)('should show count of selected files', async function (assert) {
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Header />
      */
      {
        "id": "ZoNjLNKp",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"header\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/header-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('Selected: 3 Download Selected');
    });
  });
});
define("file-status-table/tests/integration/components/status-test", ["@ember/template-factory", "qunit", "file-status-table/tests/helpers", "@ember/test-helpers"], function (_templateFactory, _qunit, _helpers, _testHelpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"file-status-table/tests/helpers",0,"@ember/test-helpers",0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | status', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Status  />
      */
      {
        "id": "pNoCjcUz",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"status\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/status-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Status @status="available">{{@status}}</Status>
          
      */
      {
        "id": "ms9szow+",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,[[\"@status\"],[\"available\"]],[[\"default\"],[[[[1,[30,1]]],[]]]]],[1,\"\\n    \"]],[\"@status\"],false,[\"status\"]]",
        "moduleName": "/Users/kinnu/Documents/file-status-table/file-status-table/tests/integration/components/status-test.js",
        "isStrictMode": false
      }));
      assert.dom(this.element).hasText('available');
    });
  });
});
define("file-status-table/tests/test-helper", ["file-status-table/app", "file-status-table/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"file-status-table/app",0,"file-status-table/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("file-status-table/tests/unit/services/file-source-test", ["qunit", "file-status-table/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"file-status-table/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Service | file-source', function (hooks) {
    (0, _helpers.setupTest)(hooks);

    // TODO: Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:file-source');
      assert.ok(service);
    });
  });
});
define('file-status-table/config/environment', [], function() {
  var prefix = 'file-status-table';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('file-status-table/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
