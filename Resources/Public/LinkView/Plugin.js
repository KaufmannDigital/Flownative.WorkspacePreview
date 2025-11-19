(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js
  var init_manifest = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/manifest.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js
  var init_createConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/createConsumerApi.js"() {
      init_manifest();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js
  function readFromConsumerApi(key) {
    return (...args) => {
      if (window["@Neos:HostPluginAPI"] && window["@Neos:HostPluginAPI"][`@${key}`]) {
        return window["@Neos:HostPluginAPI"][`@${key}`](...args);
      }
      throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!");
    };
  }
  var init_readFromConsumerApi = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/readFromConsumerApi.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js
  var init_AbstractRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/AbstractRegistry.js"() {
    }
  });

  // node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js
  var init_positionalArraySorter = __esm({
    "node_modules/@neos-project/positional-array-sorter/dist/positionalArraySorter.js"() {
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js
  var init_SynchronousRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousRegistry.js"() {
      init_AbstractRegistry();
      init_positionalArraySorter();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js
  var init_SynchronousMetaRegistry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/SynchronousMetaRegistry.js"() {
      init_SynchronousRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js
  var init_registry = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/registry/index.js"() {
      init_SynchronousRegistry();
      init_SynchronousMetaRegistry();
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/index.js
  var dist_default;
  var init_dist = __esm({
    "node_modules/@neos-project/neos-ui-extensibility/dist/index.js"() {
      init_createConsumerApi();
      init_readFromConsumerApi();
      init_registry();
      dist_default = readFromConsumerApi("manifest");
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js
  var require_react = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().React;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js
  var require_react_redux = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-redux/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().reactRedux;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js
  var require_prop_types = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/prop-types/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().PropTypes;
    }
  });

  // node_modules/clipboard/dist/clipboard.js
  var require_clipboard = __commonJS({
    "node_modules/clipboard/dist/clipboard.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory();
        else if (typeof define === "function" && define.amd)
          define([], factory);
        else if (typeof exports === "object")
          exports["ClipboardJS"] = factory();
        else
          root["ClipboardJS"] = factory();
      })(exports, function() {
        return (
          /******/
          function() {
            var __webpack_modules__ = {
              /***/
              686: (
                /***/
                function(__unused_webpack_module, __webpack_exports__, __webpack_require__2) {
                  "use strict";
                  __webpack_require__2.d(__webpack_exports__, {
                    "default": function() {
                      return (
                        /* binding */
                        clipboard
                      );
                    }
                  });
                  var tiny_emitter = __webpack_require__2(279);
                  var tiny_emitter_default = /* @__PURE__ */ __webpack_require__2.n(tiny_emitter);
                  var listen = __webpack_require__2(370);
                  var listen_default = /* @__PURE__ */ __webpack_require__2.n(listen);
                  var src_select = __webpack_require__2(817);
                  var select_default = /* @__PURE__ */ __webpack_require__2.n(src_select);
                  ;
                  function command(type) {
                    try {
                      return document.execCommand(type);
                    } catch (err) {
                      return false;
                    }
                  }
                  ;
                  var ClipboardActionCut = function ClipboardActionCut2(target) {
                    var selectedText = select_default()(target);
                    command("cut");
                    return selectedText;
                  };
                  var actions_cut = ClipboardActionCut;
                  ;
                  function createFakeElement(value) {
                    var isRTL = document.documentElement.getAttribute("dir") === "rtl";
                    var fakeElement = document.createElement("textarea");
                    fakeElement.style.fontSize = "12pt";
                    fakeElement.style.border = "0";
                    fakeElement.style.padding = "0";
                    fakeElement.style.margin = "0";
                    fakeElement.style.position = "absolute";
                    fakeElement.style[isRTL ? "right" : "left"] = "-9999px";
                    var yPosition = window.pageYOffset || document.documentElement.scrollTop;
                    fakeElement.style.top = "".concat(yPosition, "px");
                    fakeElement.setAttribute("readonly", "");
                    fakeElement.value = value;
                    return fakeElement;
                  }
                  ;
                  var fakeCopyAction = function fakeCopyAction2(value, options) {
                    var fakeElement = createFakeElement(value);
                    options.container.appendChild(fakeElement);
                    var selectedText = select_default()(fakeElement);
                    command("copy");
                    fakeElement.remove();
                    return selectedText;
                  };
                  var ClipboardActionCopy = function ClipboardActionCopy2(target) {
                    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                      container: document.body
                    };
                    var selectedText = "";
                    if (typeof target === "string") {
                      selectedText = fakeCopyAction(target, options);
                    } else if (target instanceof HTMLInputElement && !["text", "search", "url", "tel", "password"].includes(target === null || target === void 0 ? void 0 : target.type)) {
                      selectedText = fakeCopyAction(target.value, options);
                    } else {
                      selectedText = select_default()(target);
                      command("copy");
                    }
                    return selectedText;
                  };
                  var actions_copy = ClipboardActionCopy;
                  ;
                  function _typeof(obj) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                      _typeof = function _typeof2(obj2) {
                        return typeof obj2;
                      };
                    } else {
                      _typeof = function _typeof2(obj2) {
                        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                      };
                    }
                    return _typeof(obj);
                  }
                  var ClipboardActionDefault = function ClipboardActionDefault2() {
                    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    var _options$action = options.action, action = _options$action === void 0 ? "copy" : _options$action, container = options.container, target = options.target, text = options.text;
                    if (action !== "copy" && action !== "cut") {
                      throw new Error('Invalid "action" value, use either "copy" or "cut"');
                    }
                    if (target !== void 0) {
                      if (target && _typeof(target) === "object" && target.nodeType === 1) {
                        if (action === "copy" && target.hasAttribute("disabled")) {
                          throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                        }
                        if (action === "cut" && (target.hasAttribute("readonly") || target.hasAttribute("disabled"))) {
                          throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`);
                        }
                      } else {
                        throw new Error('Invalid "target" value, use a valid Element');
                      }
                    }
                    if (text) {
                      return actions_copy(text, {
                        container
                      });
                    }
                    if (target) {
                      return action === "cut" ? actions_cut(target) : actions_copy(target, {
                        container
                      });
                    }
                  };
                  var actions_default = ClipboardActionDefault;
                  ;
                  function clipboard_typeof(obj) {
                    "@babel/helpers - typeof";
                    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                      clipboard_typeof = function _typeof2(obj2) {
                        return typeof obj2;
                      };
                    } else {
                      clipboard_typeof = function _typeof2(obj2) {
                        return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                      };
                    }
                    return clipboard_typeof(obj);
                  }
                  function _classCallCheck(instance, Constructor) {
                    if (!(instance instanceof Constructor)) {
                      throw new TypeError("Cannot call a class as a function");
                    }
                  }
                  function _defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                      var descriptor = props[i];
                      descriptor.enumerable = descriptor.enumerable || false;
                      descriptor.configurable = true;
                      if ("value" in descriptor)
                        descriptor.writable = true;
                      Object.defineProperty(target, descriptor.key, descriptor);
                    }
                  }
                  function _createClass(Constructor, protoProps, staticProps) {
                    if (protoProps)
                      _defineProperties(Constructor.prototype, protoProps);
                    if (staticProps)
                      _defineProperties(Constructor, staticProps);
                    return Constructor;
                  }
                  function _inherits(subClass, superClass) {
                    if (typeof superClass !== "function" && superClass !== null) {
                      throw new TypeError("Super expression must either be null or a function");
                    }
                    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
                    if (superClass)
                      _setPrototypeOf(subClass, superClass);
                  }
                  function _setPrototypeOf(o, p) {
                    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
                      o2.__proto__ = p2;
                      return o2;
                    };
                    return _setPrototypeOf(o, p);
                  }
                  function _createSuper(Derived) {
                    var hasNativeReflectConstruct = _isNativeReflectConstruct();
                    return function _createSuperInternal() {
                      var Super = _getPrototypeOf(Derived), result;
                      if (hasNativeReflectConstruct) {
                        var NewTarget = _getPrototypeOf(this).constructor;
                        result = Reflect.construct(Super, arguments, NewTarget);
                      } else {
                        result = Super.apply(this, arguments);
                      }
                      return _possibleConstructorReturn(this, result);
                    };
                  }
                  function _possibleConstructorReturn(self, call) {
                    if (call && (clipboard_typeof(call) === "object" || typeof call === "function")) {
                      return call;
                    }
                    return _assertThisInitialized(self);
                  }
                  function _assertThisInitialized(self) {
                    if (self === void 0) {
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    }
                    return self;
                  }
                  function _isNativeReflectConstruct() {
                    if (typeof Reflect === "undefined" || !Reflect.construct)
                      return false;
                    if (Reflect.construct.sham)
                      return false;
                    if (typeof Proxy === "function")
                      return true;
                    try {
                      Date.prototype.toString.call(Reflect.construct(Date, [], function() {
                      }));
                      return true;
                    } catch (e) {
                      return false;
                    }
                  }
                  function _getPrototypeOf(o) {
                    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
                      return o2.__proto__ || Object.getPrototypeOf(o2);
                    };
                    return _getPrototypeOf(o);
                  }
                  function getAttributeValue(suffix, element) {
                    var attribute = "data-clipboard-".concat(suffix);
                    if (!element.hasAttribute(attribute)) {
                      return;
                    }
                    return element.getAttribute(attribute);
                  }
                  var Clipboard2 = /* @__PURE__ */ function(_Emitter) {
                    _inherits(Clipboard3, _Emitter);
                    var _super = _createSuper(Clipboard3);
                    function Clipboard3(trigger, options) {
                      var _this;
                      _classCallCheck(this, Clipboard3);
                      _this = _super.call(this);
                      _this.resolveOptions(options);
                      _this.listenClick(trigger);
                      return _this;
                    }
                    _createClass(Clipboard3, [{
                      key: "resolveOptions",
                      value: function resolveOptions() {
                        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                        this.action = typeof options.action === "function" ? options.action : this.defaultAction;
                        this.target = typeof options.target === "function" ? options.target : this.defaultTarget;
                        this.text = typeof options.text === "function" ? options.text : this.defaultText;
                        this.container = clipboard_typeof(options.container) === "object" ? options.container : document.body;
                      }
                      /**
                       * Adds a click event listener to the passed trigger.
                       * @param {String|HTMLElement|HTMLCollection|NodeList} trigger
                       */
                    }, {
                      key: "listenClick",
                      value: function listenClick(trigger) {
                        var _this2 = this;
                        this.listener = listen_default()(trigger, "click", function(e) {
                          return _this2.onClick(e);
                        });
                      }
                      /**
                       * Defines a new `ClipboardAction` on each click event.
                       * @param {Event} e
                       */
                    }, {
                      key: "onClick",
                      value: function onClick(e) {
                        var trigger = e.delegateTarget || e.currentTarget;
                        var action = this.action(trigger) || "copy";
                        var text = actions_default({
                          action,
                          container: this.container,
                          target: this.target(trigger),
                          text: this.text(trigger)
                        });
                        this.emit(text ? "success" : "error", {
                          action,
                          text,
                          trigger,
                          clearSelection: function clearSelection() {
                            if (trigger) {
                              trigger.focus();
                            }
                            window.getSelection().removeAllRanges();
                          }
                        });
                      }
                      /**
                       * Default `action` lookup function.
                       * @param {Element} trigger
                       */
                    }, {
                      key: "defaultAction",
                      value: function defaultAction(trigger) {
                        return getAttributeValue("action", trigger);
                      }
                      /**
                       * Default `target` lookup function.
                       * @param {Element} trigger
                       */
                    }, {
                      key: "defaultTarget",
                      value: function defaultTarget(trigger) {
                        var selector = getAttributeValue("target", trigger);
                        if (selector) {
                          return document.querySelector(selector);
                        }
                      }
                      /**
                       * Allow fire programmatically a copy action
                       * @param {String|HTMLElement} target
                       * @param {Object} options
                       * @returns Text copied.
                       */
                    }, {
                      key: "defaultText",
                      /**
                       * Default `text` lookup function.
                       * @param {Element} trigger
                       */
                      value: function defaultText(trigger) {
                        return getAttributeValue("text", trigger);
                      }
                      /**
                       * Destroy lifecycle.
                       */
                    }, {
                      key: "destroy",
                      value: function destroy() {
                        this.listener.destroy();
                      }
                    }], [{
                      key: "copy",
                      value: function copy(target) {
                        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                          container: document.body
                        };
                        return actions_copy(target, options);
                      }
                      /**
                       * Allow fire programmatically a cut action
                       * @param {String|HTMLElement} target
                       * @returns Text cutted.
                       */
                    }, {
                      key: "cut",
                      value: function cut(target) {
                        return actions_cut(target);
                      }
                      /**
                       * Returns the support of the given action, or all actions if no action is
                       * given.
                       * @param {String} [action]
                       */
                    }, {
                      key: "isSupported",
                      value: function isSupported() {
                        var action = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ["copy", "cut"];
                        var actions = typeof action === "string" ? [action] : action;
                        var support = !!document.queryCommandSupported;
                        actions.forEach(function(action2) {
                          support = support && !!document.queryCommandSupported(action2);
                        });
                        return support;
                      }
                    }]);
                    return Clipboard3;
                  }(tiny_emitter_default());
                  var clipboard = Clipboard2;
                }
              ),
              /***/
              828: (
                /***/
                function(module2) {
                  var DOCUMENT_NODE_TYPE = 9;
                  if (typeof Element !== "undefined" && !Element.prototype.matches) {
                    var proto = Element.prototype;
                    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
                  }
                  function closest(element, selector) {
                    while (element && element.nodeType !== DOCUMENT_NODE_TYPE) {
                      if (typeof element.matches === "function" && element.matches(selector)) {
                        return element;
                      }
                      element = element.parentNode;
                    }
                  }
                  module2.exports = closest;
                }
              ),
              /***/
              438: (
                /***/
                function(module2, __unused_webpack_exports, __webpack_require__2) {
                  var closest = __webpack_require__2(828);
                  function _delegate(element, selector, type, callback, useCapture) {
                    var listenerFn = listener.apply(this, arguments);
                    element.addEventListener(type, listenerFn, useCapture);
                    return {
                      destroy: function() {
                        element.removeEventListener(type, listenerFn, useCapture);
                      }
                    };
                  }
                  function delegate(elements, selector, type, callback, useCapture) {
                    if (typeof elements.addEventListener === "function") {
                      return _delegate.apply(null, arguments);
                    }
                    if (typeof type === "function") {
                      return _delegate.bind(null, document).apply(null, arguments);
                    }
                    if (typeof elements === "string") {
                      elements = document.querySelectorAll(elements);
                    }
                    return Array.prototype.map.call(elements, function(element) {
                      return _delegate(element, selector, type, callback, useCapture);
                    });
                  }
                  function listener(element, selector, type, callback) {
                    return function(e) {
                      e.delegateTarget = closest(e.target, selector);
                      if (e.delegateTarget) {
                        callback.call(element, e);
                      }
                    };
                  }
                  module2.exports = delegate;
                }
              ),
              /***/
              879: (
                /***/
                function(__unused_webpack_module, exports2) {
                  exports2.node = function(value) {
                    return value !== void 0 && value instanceof HTMLElement && value.nodeType === 1;
                  };
                  exports2.nodeList = function(value) {
                    var type = Object.prototype.toString.call(value);
                    return value !== void 0 && (type === "[object NodeList]" || type === "[object HTMLCollection]") && "length" in value && (value.length === 0 || exports2.node(value[0]));
                  };
                  exports2.string = function(value) {
                    return typeof value === "string" || value instanceof String;
                  };
                  exports2.fn = function(value) {
                    var type = Object.prototype.toString.call(value);
                    return type === "[object Function]";
                  };
                }
              ),
              /***/
              370: (
                /***/
                function(module2, __unused_webpack_exports, __webpack_require__2) {
                  var is = __webpack_require__2(879);
                  var delegate = __webpack_require__2(438);
                  function listen(target, type, callback) {
                    if (!target && !type && !callback) {
                      throw new Error("Missing required arguments");
                    }
                    if (!is.string(type)) {
                      throw new TypeError("Second argument must be a String");
                    }
                    if (!is.fn(callback)) {
                      throw new TypeError("Third argument must be a Function");
                    }
                    if (is.node(target)) {
                      return listenNode(target, type, callback);
                    } else if (is.nodeList(target)) {
                      return listenNodeList(target, type, callback);
                    } else if (is.string(target)) {
                      return listenSelector(target, type, callback);
                    } else {
                      throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                    }
                  }
                  function listenNode(node, type, callback) {
                    node.addEventListener(type, callback);
                    return {
                      destroy: function() {
                        node.removeEventListener(type, callback);
                      }
                    };
                  }
                  function listenNodeList(nodeList, type, callback) {
                    Array.prototype.forEach.call(nodeList, function(node) {
                      node.addEventListener(type, callback);
                    });
                    return {
                      destroy: function() {
                        Array.prototype.forEach.call(nodeList, function(node) {
                          node.removeEventListener(type, callback);
                        });
                      }
                    };
                  }
                  function listenSelector(selector, type, callback) {
                    return delegate(document.body, selector, type, callback);
                  }
                  module2.exports = listen;
                }
              ),
              /***/
              817: (
                /***/
                function(module2) {
                  function select(element) {
                    var selectedText;
                    if (element.nodeName === "SELECT") {
                      element.focus();
                      selectedText = element.value;
                    } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
                      var isReadOnly = element.hasAttribute("readonly");
                      if (!isReadOnly) {
                        element.setAttribute("readonly", "");
                      }
                      element.select();
                      element.setSelectionRange(0, element.value.length);
                      if (!isReadOnly) {
                        element.removeAttribute("readonly");
                      }
                      selectedText = element.value;
                    } else {
                      if (element.hasAttribute("contenteditable")) {
                        element.focus();
                      }
                      var selection = window.getSelection();
                      var range = document.createRange();
                      range.selectNodeContents(element);
                      selection.removeAllRanges();
                      selection.addRange(range);
                      selectedText = selection.toString();
                    }
                    return selectedText;
                  }
                  module2.exports = select;
                }
              ),
              /***/
              279: (
                /***/
                function(module2) {
                  function E() {
                  }
                  E.prototype = {
                    on: function(name, callback, ctx) {
                      var e = this.e || (this.e = {});
                      (e[name] || (e[name] = [])).push({
                        fn: callback,
                        ctx
                      });
                      return this;
                    },
                    once: function(name, callback, ctx) {
                      var self = this;
                      function listener() {
                        self.off(name, listener);
                        callback.apply(ctx, arguments);
                      }
                      ;
                      listener._ = callback;
                      return this.on(name, listener, ctx);
                    },
                    emit: function(name) {
                      var data = [].slice.call(arguments, 1);
                      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
                      var i = 0;
                      var len = evtArr.length;
                      for (i; i < len; i++) {
                        evtArr[i].fn.apply(evtArr[i].ctx, data);
                      }
                      return this;
                    },
                    off: function(name, callback) {
                      var e = this.e || (this.e = {});
                      var evts = e[name];
                      var liveEvents = [];
                      if (evts && callback) {
                        for (var i = 0, len = evts.length; i < len; i++) {
                          if (evts[i].fn !== callback && evts[i].fn._ !== callback)
                            liveEvents.push(evts[i]);
                        }
                      }
                      liveEvents.length ? e[name] = liveEvents : delete e[name];
                      return this;
                    }
                  };
                  module2.exports = E;
                  module2.exports.TinyEmitter = E;
                }
              )
              /******/
            };
            var __webpack_module_cache__ = {};
            function __webpack_require__(moduleId) {
              if (__webpack_module_cache__[moduleId]) {
                return __webpack_module_cache__[moduleId].exports;
              }
              var module2 = __webpack_module_cache__[moduleId] = {
                /******/
                // no module.id needed
                /******/
                // no module.loaded needed
                /******/
                exports: {}
                /******/
              };
              __webpack_modules__[moduleId](module2, module2.exports, __webpack_require__);
              return module2.exports;
            }
            !function() {
              __webpack_require__.n = function(module2) {
                var getter = module2 && module2.__esModule ? (
                  /******/
                  function() {
                    return module2["default"];
                  }
                ) : (
                  /******/
                  function() {
                    return module2;
                  }
                );
                __webpack_require__.d(getter, { a: getter });
                return getter;
              };
            }();
            !function() {
              __webpack_require__.d = function(exports2, definition) {
                for (var key in definition) {
                  if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
                    Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
                  }
                }
              };
            }();
            !function() {
              __webpack_require__.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
              };
            }();
            return __webpack_require__(686);
          }().default
        );
      });
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/vendor/react-dom/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("vendor")().ReactDOM;
    }
  });

  // node_modules/react-clipboard.js/dist/react-clipboard.js
  var require_react_clipboard = __commonJS({
    "node_modules/react-clipboard.js/dist/react-clipboard.js"(exports, module) {
      (function webpackUniversalModuleDefinition(root, factory) {
        if (typeof exports === "object" && typeof module === "object")
          module.exports = factory(require_clipboard(), require_prop_types(), require_react(), require_react_dom());
        else if (typeof define === "function" && define.amd)
          define(["clipboard", "prop-types", "react", "react-dom"], factory);
        else if (typeof exports === "object")
          exports["ReactClipboard"] = factory(require_clipboard(), require_prop_types(), require_react(), require_react_dom());
        else
          root["ReactClipboard"] = factory(root["ClipboardJS"], root["PropTypes"], root["React"], root["ReactDOM"]);
      })(exports, function(__WEBPACK_EXTERNAL_MODULE_clipboard__, __WEBPACK_EXTERNAL_MODULE_prop_types__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
        return (
          /******/
          function(modules) {
            var installedModules = {};
            function __webpack_require__(moduleId) {
              if (installedModules[moduleId]) {
                return installedModules[moduleId].exports;
              }
              var module2 = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: false,
                /******/
                exports: {}
                /******/
              };
              modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
              module2.l = true;
              return module2.exports;
            }
            __webpack_require__.m = modules;
            __webpack_require__.c = installedModules;
            __webpack_require__.d = function(exports2, name, getter) {
              if (!__webpack_require__.o(exports2, name)) {
                Object.defineProperty(exports2, name, { enumerable: true, get: getter });
              }
            };
            __webpack_require__.r = function(exports2) {
              if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
              }
              Object.defineProperty(exports2, "__esModule", { value: true });
            };
            __webpack_require__.t = function(value, mode) {
              if (mode & 1)
                value = __webpack_require__(value);
              if (mode & 8)
                return value;
              if (mode & 4 && typeof value === "object" && value && value.__esModule)
                return value;
              var ns = /* @__PURE__ */ Object.create(null);
              __webpack_require__.r(ns);
              Object.defineProperty(ns, "default", { enumerable: true, value });
              if (mode & 2 && typeof value != "string")
                for (var key in value)
                  __webpack_require__.d(ns, key, function(key2) {
                    return value[key2];
                  }.bind(null, key));
              return ns;
            };
            __webpack_require__.n = function(module2) {
              var getter = module2 && module2.__esModule ? (
                /******/
                function getDefault() {
                  return module2["default"];
                }
              ) : (
                /******/
                function getModuleExports() {
                  return module2;
                }
              );
              __webpack_require__.d(getter, "a", getter);
              return getter;
            };
            __webpack_require__.o = function(object, property) {
              return Object.prototype.hasOwnProperty.call(object, property);
            };
            __webpack_require__.p = "";
            return __webpack_require__(__webpack_require__.s = "./index.js");
          }({
            /***/
            "./index.js": (
              /*!******************!*\
                !*** ./index.js ***!
                \******************/
              /*! exports provided: default */
              /***/
              function(module2, __webpack_exports__, __webpack_require__) {
                "use strict";
                __webpack_require__.r(__webpack_exports__);
                var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                  /*! react */
                  "react"
                );
                var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
                var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                  /*! react-dom */
                  "react-dom"
                );
                var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
                var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                  /*! prop-types */
                  "prop-types"
                );
                var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
                function _typeof(obj) {
                  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                    _typeof = function _typeof2(obj2) {
                      return typeof obj2;
                    };
                  } else {
                    _typeof = function _typeof2(obj2) {
                      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
                    };
                  }
                  return _typeof(obj);
                }
                function _objectSpread(target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i] != null ? arguments[i] : {};
                    var ownKeys = Object.keys(source);
                    if (typeof Object.getOwnPropertySymbols === "function") {
                      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
                      }));
                    }
                    ownKeys.forEach(function(key) {
                      _defineProperty(target, key, source[key]);
                    });
                  }
                  return target;
                }
                function _classCallCheck(instance, Constructor) {
                  if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                  }
                }
                function _defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor)
                      descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                  }
                }
                function _createClass(Constructor, protoProps, staticProps) {
                  if (protoProps)
                    _defineProperties(Constructor.prototype, protoProps);
                  if (staticProps)
                    _defineProperties(Constructor, staticProps);
                  return Constructor;
                }
                function _possibleConstructorReturn(self, call) {
                  if (call && (_typeof(call) === "object" || typeof call === "function")) {
                    return call;
                  }
                  return _assertThisInitialized(self);
                }
                function _assertThisInitialized(self) {
                  if (self === void 0) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  }
                  return self;
                }
                function _getPrototypeOf(o) {
                  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
                    return o2.__proto__ || Object.getPrototypeOf(o2);
                  };
                  return _getPrototypeOf(o);
                }
                function _inherits(subClass, superClass) {
                  if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function");
                  }
                  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
                  if (superClass)
                    _setPrototypeOf(subClass, superClass);
                }
                function _setPrototypeOf(o, p) {
                  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
                    o2.__proto__ = p2;
                    return o2;
                  };
                  return _setPrototypeOf(o, p);
                }
                function _defineProperty(obj, key, value) {
                  if (key in obj) {
                    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
                  } else {
                    obj[key] = value;
                  }
                  return obj;
                }
                var ClipboardButton = /* @__PURE__ */ function(_React$Component) {
                  _inherits(ClipboardButton2, _React$Component);
                  function ClipboardButton2() {
                    _classCallCheck(this, ClipboardButton2);
                    return _possibleConstructorReturn(this, _getPrototypeOf(ClipboardButton2).apply(this, arguments));
                  }
                  _createClass(ClipboardButton2, [{
                    key: "propsWith",
                    value: function propsWith(regexp) {
                      var remove = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                      var object = {};
                      Object.keys(this.props).forEach(function(key) {
                        if (key.search(regexp) !== -1) {
                          var objectKey = remove ? key.replace(regexp, "") : key;
                          object[objectKey] = this.props[key];
                        }
                      }, this);
                      return object;
                    }
                  }, {
                    key: "componentWillUnmount",
                    value: function componentWillUnmount() {
                      this.clipboard && this.clipboard.destroy();
                    }
                  }, {
                    key: "componentDidMount",
                    value: function componentDidMount() {
                      var options = this.props.options || this.propsWith(/^option-/, true);
                      var element = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this.element);
                      if (!element) {
                        return;
                      }
                      var Clipboard2 = __webpack_require__(
                        /*! clipboard */
                        "clipboard"
                      );
                      this.clipboard = new Clipboard2(element, options);
                      var callbacks = this.propsWith(/^on/, true);
                      Object.keys(callbacks).forEach(function(callback) {
                        this.clipboard.on(callback.toLowerCase(), this.props["on" + callback]);
                      }, this);
                    }
                  }, {
                    key: "render",
                    value: function render() {
                      var _this = this;
                      var attributes = _objectSpread({
                        title: this.props.title || "",
                        type: this.getType(),
                        className: this.props.className || "",
                        style: this.props.style || {},
                        ref: function ref(element) {
                          return _this.element = element;
                        },
                        onClick: this.props.onClick
                      }, this.propsWith(/^data-/), this.propsWith(/^button-/, true));
                      var Clipboard2 = __webpack_require__(
                        /*! clipboard */
                        "clipboard"
                      );
                      if (!this.props.isVisibleWhenUnsupported && !Clipboard2.isSupported()) {
                        return null;
                      }
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(this.getComponent(), attributes, this.props.children);
                    }
                  }, {
                    key: "getType",
                    value: function getType() {
                      if (this.getComponent() === "button" || this.getComponent() === "input") {
                        return this.props.type || "button";
                      } else {
                        return void 0;
                      }
                    }
                  }, {
                    key: "getComponent",
                    value: function getComponent() {
                      return this.props.component || "button";
                    }
                  }]);
                  return ClipboardButton2;
                }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
                _defineProperty(ClipboardButton, "propTypes", {
                  options: function options(props, propName, componentName) {
                    var options2 = props[propName];
                    if (options2 && _typeof(options2) !== "object" || Array.isArray(options2)) {
                      return new Error("Invalid props '".concat(propName, "' supplied to '").concat(componentName, "'. ") + "'".concat(propName, "' is not an object."));
                    }
                    if (props["option-text"] !== void 0) {
                      var optionText = props["option-text"];
                      if (typeof optionText !== "function") {
                        return new Error("Invalid props 'option-text' supplied to '".concat(componentName, "'. ") + "'option-text' is not a function.");
                      }
                    }
                  },
                  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
                  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
                  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
                  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
                  component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
                  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any
                });
                _defineProperty(ClipboardButton, "defaultProps", {
                  isVisibleWhenUnsupported: true,
                  onClick: function onClick() {
                  }
                  /* Returns a object with all props that fulfill a certain naming pattern
                   *
                   * @param {RegExp} regexp - Regular expression representing which pattern
                   *                          you'll be searching for.
                   * @param {Boolean} remove - Determines if the regular expression should be
                   *                           removed when transmitting the key from the props
                   *                           to the new object.
                   *
                   * e.g:
                   *
                   * // Considering:
                   * // this.props = {option-foo: 1, onBar: 2, data-foobar: 3 data-baz: 4};
                   *
                   * // *RegExps not using // so that this comment doesn't break up
                   * this.propsWith(option-*, true); // returns {foo: 1}
                   * this.propsWith(on*, true); // returns {Bar: 2}
                   * this.propsWith(data-*); // returns {data-foobar: 1, data-baz: 4}
                   */
                });
                __webpack_exports__["default"] = ClipboardButton;
              }
            ),
            /***/
            "clipboard": (
              /*!********************************************************************************************************!*\
                !*** external {"root":"ClipboardJS","amd":"clipboard","commonjs":"clipboard","commonjs2":"clipboard"} ***!
                \********************************************************************************************************/
              /*! no static exports found */
              /***/
              function(module2, exports2) {
                module2.exports = __WEBPACK_EXTERNAL_MODULE_clipboard__;
              }
            ),
            /***/
            "prop-types": (
              /*!*********************************************************************************************************!*\
                !*** external {"root":"PropTypes","amd":"prop-types","commonjs":"prop-types","commonjs2":"prop-types"} ***!
                \*********************************************************************************************************/
              /*! no static exports found */
              /***/
              function(module2, exports2) {
                module2.exports = __WEBPACK_EXTERNAL_MODULE_prop_types__;
              }
            ),
            /***/
            "react": (
              /*!**************************************************************************************!*\
                !*** external {"root":"React","amd":"react","commonjs":"react","commonjs2":"react"} ***!
                \**************************************************************************************/
              /*! no static exports found */
              /***/
              function(module2, exports2) {
                module2.exports = __WEBPACK_EXTERNAL_MODULE_react__;
              }
            ),
            /***/
            "react-dom": (
              /*!*****************************************************************************************************!*\
                !*** external {"root":"ReactDOM","amd":"react-dom","commonjs":"react-dom","commonjs2":"react-dom"} ***!
                \*****************************************************************************************************/
              /*! no static exports found */
              /***/
              function(module2, exports2) {
                module2.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;
              }
            )
            /******/
          })
        );
      });
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js
  var require_neos_ui_decorators = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-decorators/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiDecorators;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js
  var require_react_ui_components = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/react-ui-components/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().ReactUiComponents;
    }
  });

  // node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js
  var require_neos_ui_redux_store = __commonJS({
    "node_modules/@neos-project/neos-ui-extensibility/dist/shims/neosProjectPackages/neos-ui-redux-store/index.js"(exports, module) {
      init_readFromConsumerApi();
      module.exports = readFromConsumerApi("NeosProjectPackages")().NeosUiReduxStore;
    }
  });

  // css-modules:css-modules://vD-SEkC_wFeGTxQ6NJ_eLBi8FpErhPtdi5zHLF6CRhk.css
  var init_ = __esm({
    "css-modules:css-modules://vD-SEkC_wFeGTxQ6NJ_eLBi8FpErhPtdi5zHLF6CRhk.css"() {
    }
  });

  // src/style.module.css
  var style_module_default;
  var init_style_module = __esm({
    "src/style.module.css"() {
      init_();
      style_module_default = { "linkViewError": "gDna_a_linkViewError", "loader": "gDna_a_loader", "linkView": "gDna_a_linkView", "spin": "gDna_a_spin", "linkViewLabel": "gDna_a_linkViewLabel", "linkViewButton": "gDna_a_linkViewButton" };
    }
  });

  // src/LinkView.js
  var import_react, import_react_redux, import_prop_types, import_react_clipboard, import_neos_ui_decorators, import_react_ui_components, import_neos_ui_redux_store, LinkView;
  var init_LinkView = __esm({
    "src/LinkView.js"() {
      import_react = __toESM(require_react());
      import_react_redux = __toESM(require_react_redux());
      import_prop_types = __toESM(require_prop_types());
      import_react_clipboard = __toESM(require_react_clipboard());
      import_neos_ui_decorators = __toESM(require_neos_ui_decorators());
      import_react_ui_components = __toESM(require_react_ui_components());
      import_neos_ui_redux_store = __toESM(require_neos_ui_redux_store());
      init_style_module();
      LinkView = class extends import_react.PureComponent {
        constructor(props) {
          super(props);
          this.state = {
            isLoading: false,
            linkUrl: "",
            error: "none"
          };
        }
        componentDidMount() {
          this.loadTokenLink();
        }
        loadTokenLink() {
          this.setState({ isLoading: true });
          this.props.dataSourcesDataLoader.resolveValue({ dataSourceIdentifier: "PreviewLinkView", contextNodePath: this.props.focusedNodePath, dataSourceDisableCaching: true }, "").then((data) => {
            this.setState({
              isLoading: false,
              linkUrl: data.data.error === "none" ? data.data.link : "",
              error: data.data.error
            });
          });
        }
        render() {
          if (this.state.error !== "none") {
            return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { className: style_module_default.linkViewLabel }, this.props.i18nRegistry.translate("Flownative.WorkspacePreview:Main:previewLink", "Preview Link")), /* @__PURE__ */ import_react.default.createElement("div", { className: style_module_default.linkView }, /* @__PURE__ */ import_react.default.createElement("div", { className: style_module_default.linkViewError }, this.props.i18nRegistry.translate("Flownative.WorkspacePreview:Main:error." + this.state.error, "Error: " + this.state.error))));
          }
          return /* @__PURE__ */ import_react.default.createElement("div", null, /* @__PURE__ */ import_react.default.createElement("label", { className: style_module_default.linkViewLabel }, this.props.i18nRegistry.translate("Flownative.WorkspacePreview:Main:previewLink", "Preview Link")), /* @__PURE__ */ import_react.default.createElement("div", { className: style_module_default.linkView }, this.state.isLoading ? /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.Icon, { className: style_module_default.loader, icon: "spinner", padded: "right" }) : null, !this.state.isLoading ? /* @__PURE__ */ import_react.default.createElement(
            import_react_clipboard.default,
            {
              className: style_module_default.linkViewButton,
              "data-clipboard-text": this.state.linkUrl,
              component: import_react_ui_components.Button,
              "button-style": "lighter"
            },
            /* @__PURE__ */ import_react.default.createElement(import_react_ui_components.Icon, { icon: "copy", padded: "right" }),
            this.props.i18nRegistry.translate("Flownative.WorkspacePreview:Main:copyPreviewLink", "Copy Preview Link")
          ) : null));
        }
      };
      LinkView.propTypes = {
        data: import_prop_types.default.object.isRequired
      };
      LinkView = __decorateClass([
        (0, import_react_redux.connect)((state) => ({
          documentNode: import_neos_ui_redux_store.selectors.CR.Nodes.documentNodeSelector(state),
          focusedNodePath: import_neos_ui_redux_store.selectors.CR.Nodes.focusedNodePathSelector(state),
          activeDimensions: import_neos_ui_redux_store.selectors.CR.ContentDimensions.activePresets(state),
          baseWorkspace: import_neos_ui_redux_store.selectors.CR.Workspaces.baseWorkspaceSelector(state)
        })),
        (0, import_neos_ui_decorators.neos)((globalRegistry) => ({
          i18nRegistry: globalRegistry.get("i18n"),
          serverFeedbackHandlers: globalRegistry.get("serverFeedbackHandlers"),
          dataSourcesDataLoader: globalRegistry.get("dataLoaders").get("DataSources")
        }))
      ], LinkView);
    }
  });

  // src/manifest.js
  var manifest_exports = {};
  var init_manifest2 = __esm({
    "src/manifest.js"() {
      init_dist();
      init_LinkView();
      dist_default("Flownative.WorkspacePreview:LinkView", {}, (globalRegistry) => {
        const viewsRegistry = globalRegistry.get("inspector").get("views");
        viewsRegistry.set("Flownative.WorkspacePreview/LinkView", {
          component: LinkView,
          hasOwnLabel: true
        });
      });
    }
  });

  // src/index.js
  init_manifest2();
})();
/*! Bundled license information:

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)
*/
