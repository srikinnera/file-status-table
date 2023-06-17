'use strict';



;define("file-status-table/adapters/-json-api", ["exports", "@ember-data/adapter/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/adapter/json-api"eaimeta@70e063a35619d71f
});
;define("file-status-table/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "file-status-table/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"file-status-table/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class App extends _application.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("file-status-table/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("file-status-table/components/checkbox", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/object"eaimeta@70e063a35619d71f
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <input
    id={{@id}}
    type="checkbox"
    class="checkbox"
    checked={{@checked}}
    {{on "click" (fn this.clicked @handleClick)}}
    indeterminate={{@indeterminate}}
  />
  */
  {
    "id": "/nhFZtv7",
    "block": "[[[11,\"input\"],[16,1,[30,1]],[24,0,\"checkbox\"],[16,\"checked\",[30,2]],[16,\"indeterminate\",[30,3]],[24,4,\"checkbox\"],[4,[38,0],[\"click\",[28,[37,1],[[30,0,[\"clicked\"]],[30,4]],null]],null],[12],[13]],[\"@id\",\"@checked\",\"@indeterminate\",\"@handleClick\"],false,[\"on\",\"fn\"]]",
    "moduleName": "file-status-table/components/checkbox.hbs",
    "isStrictMode": false
  });
  let SingleSelectionCheckbox = (_class = class SingleSelectionCheckbox extends _component2.default {
    clicked(handleClick) {
      handleClick();
    }
  }, (_applyDecoratedDescriptor(_class.prototype, "clicked", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "clicked"), _class.prototype)), _class);
  _exports.default = SingleSelectionCheckbox;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, SingleSelectionCheckbox);
});
;define("file-status-table/components/download", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <button 
  class="text-btn" 
  type="button" 
  disabled={{eq this.getIsDiabled true}}
  {{on "click" this.handleDownload}}>Download Selected</button>
  */
  {
    "id": "9p2mJFMX",
    "block": "[[[11,\"button\"],[24,0,\"text-btn\"],[16,\"disabled\",[28,[37,0],[[30,0,[\"getIsDiabled\"]],true],null]],[24,4,\"button\"],[4,[38,1],[\"click\",[30,0,[\"handleDownload\"]]],null],[12],[1,\"Download Selected\"],[13]],[],false,[\"eq\",\"on\"]]",
    "moduleName": "file-status-table/components/download.hbs",
    "isStrictMode": false
  });
  let Download = (_class = class Download extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "fileSource", _descriptor, this);
    }
    get getIsDiabled() {
      return this.fileSource.selectedCount() === 0;
    }
    handleDownload() {
      const message = this.fileSource.selectedFiles.map(file => {
        if (file.status === 'available') return `
            File: ${file.name}  
            Path: ${file.path}  
            Device: ${file.device}`;
      }).filter(e => e);
      if (this.fileSource.selectedFiles.some(file => file.status === 'available')) {
        alert(`Files selected that are available for download: ${message}`);
      } else {
        alert('Files not available to download');
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "fileSource", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "handleDownload", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "handleDownload"), _class.prototype)), _class);
  _exports.default = Download;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, Download);
});
;define("file-status-table/components/file-table", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/service", "@glimmer/tracking", "@ember/object"], function (_exports, _component, _templateFactory, _component2, _service, _tracking, _object) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/service",0,"@glimmer/tracking",0,"@ember/object"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <Header />
  <table id="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Device</th>
        <th>Path</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {{#each this.computedFileData as |file|}}
        <tr class={{if file.isChecked 'active' 'inactive'}}>
          <td><Checkbox
              @id={{@id}}
              @handleClick={{(fn
                this.toggleSelection file
              )}}
              @checked={{file.isChecked}}
              indeterminate={{false}}
            />
            </td>
          <td>{{file.name}}</td>
          <td>{{file.device}}</td>
          <td>{{file.path}}</td>
          <td><Status @status={{file.status}} /></td>
        </tr>
      {{/each}}
    </tbody>
  </table>
  */
  {
    "id": "+j3ct+wg",
    "block": "[[[8,[39,0],null,null,null],[1,\"\\n\"],[10,\"table\"],[14,1,\"table\"],[12],[1,\"\\n  \"],[10,\"thead\"],[12],[1,\"\\n    \"],[10,\"tr\"],[12],[1,\"\\n      \"],[10,\"th\"],[12],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Name\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Device\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Path\"],[13],[1,\"\\n      \"],[10,\"th\"],[12],[1,\"Status\"],[13],[1,\"\\n    \"],[13],[1,\"\\n  \"],[13],[1,\"\\n  \"],[10,\"tbody\"],[12],[1,\"\\n\"],[42,[28,[37,2],[[28,[37,2],[[30,0,[\"computedFileData\"]]],null]],null],null,[[[1,\"      \"],[10,\"tr\"],[15,0,[52,[30,1,[\"isChecked\"]],\"active\",\"inactive\"]],[12],[1,\"\\n        \"],[10,\"td\"],[12],[8,[39,4],[[16,\"indeterminate\",false]],[[\"@id\",\"@handleClick\",\"@checked\"],[[30,2],[28,[37,5],[[30,0,[\"toggleSelection\"]],[30,1]],null],[30,1,[\"isChecked\"]]]],null],[1,\"\\n          \"],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,[30,1,[\"name\"]]],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,[30,1,[\"device\"]]],[13],[1,\"\\n        \"],[10,\"td\"],[12],[1,[30,1,[\"path\"]]],[13],[1,\"\\n        \"],[10,\"td\"],[12],[8,[39,6],null,[[\"@status\"],[[30,1,[\"status\"]]]],null],[13],[1,\"\\n      \"],[13],[1,\"\\n\"]],[1]],null],[1,\"  \"],[13],[1,\"\\n\"],[13]],[\"file\",\"@id\"],false,[\"header\",\"each\",\"-track-array\",\"if\",\"checkbox\",\"fn\",\"status\"]]",
    "moduleName": "file-status-table/components/file-table.hbs",
    "isStrictMode": false
  });
  let FileTable = (_class = class FileTable extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "fileSource", _descriptor, this);
      _initializerDefineProperty(this, "files", _descriptor2, this);
      this.fileSource.setFiles([{
        name: 'smss.exe',
        device: 'Stark',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe',
        status: 'scheduled',
        isChecked: false
      }, {
        name: 'netsh.exe',
        device: 'Targaryen',
        path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe',
        status: 'available',
        isChecked: false
      }, {
        name: 'uxtheme.dll',
        device: 'Lannister',
        path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll',
        status: 'available',
        isChecked: false
      }, {
        name: 'cryptbase.dll',
        device: 'Martell',
        path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll',
        status: 'scheduled',
        isChecked: false
      }, {
        name: '7za.exe',
        device: 'Baratheon',
        path: '\\Device\\HarddiskVolume1\\temp\\7za.exe',
        status: 'scheduled',
        isChecked: false
      }]);
    }
    setFiles(files) {
      this.files = files;
    }
    get computedFileData() {
      this.setFiles(this.fileSource.getFiles());
      return this.files;
    }
    toggleSelection(file) {
      file.isChecked = !file.isChecked;
      if (file.isChecked) {
        this.fileSource.add(file);
      } else {
        this.fileSource.remove(file);
      }
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "fileSource", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "files", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _applyDecoratedDescriptor(_class.prototype, "toggleSelection", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleSelection"), _class.prototype)), _class);
  _exports.default = FileTable;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, FileTable);
});
;define("file-status-table/components/header", ["exports", "@ember/component", "@ember/template-factory", "@glimmer/component", "@ember/object", "@ember/service"], function (_exports, _component, _templateFactory, _component2, _object, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@glimmer/component",0,"@ember/object",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <Checkbox
    @id="selectAll"
    @indeterminate={{this.isSelectAllIndeterminate}}
    @checked={{this.isSelectAllChecked}}
    @handleClick={{this.toggleSelectionAllFiles}}
  />
  <span>Selected: {{this.selectedFileCount}} </span>
  <Download />
  */
  {
    "id": "9olFC7t6",
    "block": "[[[8,[39,0],null,[[\"@id\",\"@indeterminate\",\"@checked\",\"@handleClick\"],[\"selectAll\",[30,0,[\"isSelectAllIndeterminate\"]],[30,0,[\"isSelectAllChecked\"]],[30,0,[\"toggleSelectionAllFiles\"]]]],null],[1,\"\\n\"],[10,1],[12],[1,\"Selected: \"],[1,[30,0,[\"selectedFileCount\"]]],[1,\" \"],[13],[1,\"\\n\"],[8,[39,1],null,null,null]],[],false,[\"checkbox\",\"download\"]]",
    "moduleName": "file-status-table/components/header.hbs",
    "isStrictMode": false
  });
  let Header = (_class = class Header extends _component2.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "fileSource", _descriptor, this);
      _defineProperty(this, "selectAllChecked", false);
    }
    get selectedFileCount() {
      return this.fileSource.selectedCount();
    }
    setSelectAllChecked(value) {
      this.selectAllChecked = value;
    }
    get isSelectAllIndeterminate() {
      return this.fileSource.selectedCount() > 0 && this.fileSource.selectedCount() < this.fileSource.filesCount();
    }
    get isSelectAllChecked() {
      if (this.fileSource.selectedCount() === 0) {
        this.setSelectAllChecked(false);
      } else if (this.fileSource.selectedCount() < this.fileSource.filesCount()) {
        this.setSelectAllChecked(false);
      } else this.setSelectAllChecked(true);
      return this.fileSource.selectedCount() === this.fileSource.filesCount();
    }
    toggleSelectionAllFiles() {
      this.selectAllChecked = !this.selectAllChecked;
      if (this.selectAllChecked) this.fileSource.selectAll();else this.fileSource.deSelectAll();
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "fileSource", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "toggleSelectionAllFiles", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleSelectionAllFiles"), _class.prototype)), _class);
  _exports.default = Header;
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, Header);
});
;define("file-status-table/components/status", ["exports", "@ember/component", "@ember/template-factory", "@ember/component/template-only"], function (_exports, _component, _templateFactory, _templateOnly) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars",0,"@ember/component/template-only"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div class="status {{@status}}">{{@status}}</div>
  */
  {
    "id": "965rwTVG",
    "block": "[[[10,0],[15,0,[29,[\"status \",[30,1]]]],[12],[1,[30,1]],[13]],[\"@status\"],false,[]]",
    "moduleName": "file-status-table/components/status.hbs",
    "isStrictMode": false
  });
  var _default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
  _exports.default = _default;
});
;define("file-status-table/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("file-status-table/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("file-status-table/helpers/app-version", ["exports", "@ember/component/helper", "file-status-table/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"file-status-table/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_) {
    let hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }
  var _default = (0, _helper.helper)(appVersion);
  _exports.default = _default;
});
;define("file-status-table/helpers/ensure-safe-component", ["exports", "@embroider/util"], function (_exports, _util) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _util.EnsureSafeComponentHelper;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util"eaimeta@70e063a35619d71f
});
;define("file-status-table/helpers/eq", ["exports", "@ember/component/helper"], function (_exports, _helper) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper"eaimeta@70e063a35619d71f
  var _default = (0, _helper.helper)(function eq(_ref) {
    let [leftOperand, rightOperand] = _ref;
    return leftOperand === rightOperand;
  });
  _exports.default = _default;
});
;define("file-status-table/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
  var _default = _pageTitle.default;
  _exports.default = _default;
});
;define("file-status-table/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("file-status-table/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("file-status-table/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "file-status-table/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"file-status-table/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("file-status-table/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/resolvers/classic/container-debug-adapter"eaimeta@70e063a35619d71f
  var _default = {
    name: 'container-debug-adapter',
    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
    }
  };
  _exports.default = _default;
});
;define("file-status-table/initializers/ember-data-data-adapter", ["exports", "@ember-data/debug/setup"], function (_exports, _setup) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _setup.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug/setup"eaimeta@70e063a35619d71f
});
;define("file-status-table/initializers/ember-data", ["exports", "ember-data", "ember-data/setup-container"], function (_exports, _emberData, _setupContainer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-data",0,"ember-data/setup-container"eaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("file-status-table/instance-initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /* exists only for things that historically used "after" or "before" */
  var _default = {
    name: 'ember-data',
    initialize() {}
  };
  _exports.default = _default;
});
;define("file-status-table/router", ["exports", "@ember/routing/router", "file-status-table/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"file-status-table/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  class Router extends _router.default {
    constructor() {
      super(...arguments);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {});
});
;define("file-status-table/serializers/-default", ["exports", "@ember-data/serializer/json"], function (_exports, _json) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _json.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json"eaimeta@70e063a35619d71f
});
;define("file-status-table/serializers/-json-api", ["exports", "@ember-data/serializer/json-api"], function (_exports, _jsonApi) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _jsonApi.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/json-api"eaimeta@70e063a35619d71f
});
;define("file-status-table/serializers/-rest", ["exports", "@ember-data/serializer/rest"], function (_exports, _rest) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _rest.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/rest"eaimeta@70e063a35619d71f
});
;define("file-status-table/services/-ensure-registered", ["exports", "@embroider/util/services/ensure-registered"], function (_exports, _ensureRegistered) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ensureRegistered.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@embroider/util/services/ensure-registered"eaimeta@70e063a35619d71f
});
;define("file-status-table/services/file-source", ["exports", "@ember/service", "@glimmer/tracking"], function (_exports, _service, _tracking) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2;
  0; //eaimeta@70e063a35619d71f0,"@ember/service",0,"@glimmer/tracking"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let FileSourceService = (_class = class FileSourceService extends _service.default {
    constructor() {
      super(...arguments);
      _initializerDefineProperty(this, "selectedFiles", _descriptor, this);
      _initializerDefineProperty(this, "files", _descriptor2, this);
      _defineProperty(this, "availableFiles", []);
    }
    add(file) {
      this.selectedFiles = [...this.selectedFiles, file];
      this.markFile(file);
    }
    remove(file) {
      this.selectedFiles = this.selectedFiles.filter(f => f.name !== file.name);
      this.markFile(file);
    }
    selectedCount() {
      return this.selectedFiles.length;
    }
    markFile(file) {
      this.files = this.files.map(f => {
        if (f.name === file.name) return {
          ...f,
          isChecked: file.isChecked
        };else return f;
      });
    }
    setFiles(files) {
      this.files = files;
    }
    getFiles() {
      return this.files;
    }
    getFile(file) {
      return this.files.find(f => f.name === file.name);
    }
    filesCount() {
      return this.files.length;
    }
    selectAll() {
      this.files = this.files.map(file => {
        return {
          ...file,
          isChecked: true
        };
      });
      this.selectedFiles = this.files;
    }
    deSelectAll() {
      this.files = this.files.map(file => {
        return {
          ...file,
          isChecked: false
        };
      });
      this.selectedFiles = [];
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "selectedFiles", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "files", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  })), _class);
  _exports.default = FileSourceService;
});
;define("file-status-table/services/page-title-list", ["exports", "ember-page-title/services/page-title-list"], function (_exports, _pageTitleList) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitleList.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title-list"eaimeta@70e063a35619d71f
});
;define("file-status-table/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("file-status-table/services/store", ["exports", "ember-data/store"], function (_exports, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-data/store"eaimeta@70e063a35619d71f
});
;define("file-status-table/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-htmlbars"eaimeta@70e063a35619d71f
  var _default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "FileStatusTable"}}
  
  <FileTable />
  
  {{outlet}}
  */
  {
    "id": "E5Yvcx7Z",
    "block": "[[[1,[28,[35,0],[\"FileStatusTable\"],null]],[1,\"\\n\\n\"],[8,[39,1],null,null,null],[1,\"\\n\\n\"],[46,[28,[37,3],null,null],null,null,null]],[],false,[\"page-title\",\"file-table\",\"component\",\"-outlet\"]]",
    "moduleName": "file-status-table/templates/application.hbs",
    "isStrictMode": false
  });
  _exports.default = _default;
});
;define("file-status-table/transforms/boolean", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("file-status-table/transforms/date", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("file-status-table/transforms/number", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;define("file-status-table/transforms/string", ["exports", "@ember-data/serializer/-private"], function (_exports, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
});
;

;define('file-status-table/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("file-status-table/app")["default"].create({"name":"file-status-table","version":"0.0.0"});
          }
        
//# sourceMappingURL=file-status-table.map
