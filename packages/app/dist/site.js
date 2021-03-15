/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@material/base/component.js":
/*!**************************************************!*\
  !*** ./node_modules/@material/base/component.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCComponent\": () => (/* binding */ MDCComponent),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ \"./node_modules/@material/base/foundation.js\");\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\nvar MDCComponent =\n/** @class */\nfunction () {\n  function MDCComponent(root, foundation) {\n    var args = [];\n\n    for (var _i = 2; _i < arguments.length; _i++) {\n      args[_i - 2] = arguments[_i];\n    }\n\n    this.root = root;\n    this.initialize.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spread)(args)); // Note that we initialize foundation here and not within the constructor's default param so that\n    // this.root_ is defined and can be used within the foundation class.\n\n    this.foundation = foundation === undefined ? this.getDefaultFoundation() : foundation;\n    this.foundation.init();\n    this.initialSyncWithDOM();\n  }\n\n  MDCComponent.attachTo = function (root) {\n    // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and\n    // returns an instantiated component with its root set to that element. Also note that in the cases of\n    // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized\n    // from getDefaultFoundation().\n    return new MDCComponent(root, new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCFoundation({}));\n  };\n  /* istanbul ignore next: method param only exists for typing purposes; it does not need to be unit tested */\n\n\n  MDCComponent.prototype.initialize = function () {\n    var _args = [];\n\n    for (var _i = 0; _i < arguments.length; _i++) {\n      _args[_i] = arguments[_i];\n    } // Subclasses can override this to do any additional setup work that would be considered part of a\n    // \"constructor\". Essentially, it is a hook into the parent constructor before the foundation is\n    // initialized. Any additional arguments besides root and foundation will be passed in here.\n\n  };\n\n  MDCComponent.prototype.getDefaultFoundation = function () {\n    // Subclasses must override this method to return a properly configured foundation class for the\n    // component.\n    throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');\n  };\n\n  MDCComponent.prototype.initialSyncWithDOM = function () {// Subclasses should override this method if they need to perform work to synchronize with a host DOM\n    // object. An example of this would be a form control wrapper that needs to synchronize its internal state\n    // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM\n    // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.\n  };\n\n  MDCComponent.prototype.destroy = function () {\n    // Subclasses may implement this method to release any resources / deregister any listeners they have\n    // attached. An example of this might be deregistering a resize event from the window object.\n    this.foundation.destroy();\n  };\n\n  MDCComponent.prototype.listen = function (evtType, handler, options) {\n    this.root.addEventListener(evtType, handler, options);\n  };\n\n  MDCComponent.prototype.unlisten = function (evtType, handler, options) {\n    this.root.removeEventListener(evtType, handler, options);\n  };\n  /**\n   * Fires a cross-browser-compatible custom event from the component root of the given type, with the given data.\n   */\n\n\n  MDCComponent.prototype.emit = function (evtType, evtData, shouldBubble) {\n    if (shouldBubble === void 0) {\n      shouldBubble = false;\n    }\n\n    var evt;\n\n    if (typeof CustomEvent === 'function') {\n      evt = new CustomEvent(evtType, {\n        bubbles: shouldBubble,\n        detail: evtData\n      });\n    } else {\n      evt = document.createEvent('CustomEvent');\n      evt.initCustomEvent(evtType, shouldBubble, false, evtData);\n    }\n\n    this.root.dispatchEvent(evt);\n  };\n\n  return MDCComponent;\n}();\n\n // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCComponent);\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/base/component.js?");

/***/ }),

/***/ "./node_modules/@material/base/foundation.js":
/*!***************************************************!*\
  !*** ./node_modules/@material/base/foundation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCFoundation\": () => (/* binding */ MDCFoundation),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\nvar MDCFoundation =\n/** @class */\nfunction () {\n  function MDCFoundation(adapter) {\n    if (adapter === void 0) {\n      adapter = {};\n    }\n\n    this.adapter = adapter;\n  }\n\n  Object.defineProperty(MDCFoundation, \"cssClasses\", {\n    get: function get() {\n      // Classes extending MDCFoundation should implement this method to return an object which exports every\n      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}\n      return {};\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCFoundation, \"strings\", {\n    get: function get() {\n      // Classes extending MDCFoundation should implement this method to return an object which exports all\n      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}\n      return {};\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCFoundation, \"numbers\", {\n    get: function get() {\n      // Classes extending MDCFoundation should implement this method to return an object which exports all\n      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}\n      return {};\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCFoundation, \"defaultAdapter\", {\n    get: function get() {\n      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient\n      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter\n      // validation.\n      return {};\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)\n  };\n\n  MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)\n  };\n\n  return MDCFoundation;\n}();\n\n // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCFoundation);\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/base/foundation.js?");

/***/ }),

/***/ "./node_modules/@material/dom/events.js":
/*!**********************************************!*\
  !*** ./node_modules/@material/dom/events.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"applyPassive\": () => (/* binding */ applyPassive)\n/* harmony export */ });\n/**\n * @license\n * Copyright 2019 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n/**\n * Determine whether the current browser supports passive event listeners, and\n * if so, use them.\n */\nfunction applyPassive(globalObj) {\n  if (globalObj === void 0) {\n    globalObj = window;\n  }\n\n  return supportsPassiveOption(globalObj) ? {\n    passive: true\n  } : false;\n}\n\nfunction supportsPassiveOption(globalObj) {\n  if (globalObj === void 0) {\n    globalObj = window;\n  } // See\n  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener\n\n\n  var passiveSupported = false;\n\n  try {\n    var options = {\n      // This function will be called when the browser\n      // attempts to access the passive property.\n      get passive() {\n        passiveSupported = true;\n        return false;\n      }\n\n    };\n\n    var handler = function handler() {};\n\n    globalObj.document.addEventListener('test', handler, options);\n    globalObj.document.removeEventListener('test', handler, options);\n  } catch (err) {\n    passiveSupported = false;\n  }\n\n  return passiveSupported;\n}\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/dom/events.js?");

/***/ }),

/***/ "./node_modules/@material/dom/ponyfill.js":
/*!************************************************!*\
  !*** ./node_modules/@material/dom/ponyfill.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closest\": () => (/* binding */ closest),\n/* harmony export */   \"matches\": () => (/* binding */ matches),\n/* harmony export */   \"estimateScrollWidth\": () => (/* binding */ estimateScrollWidth)\n/* harmony export */ });\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n/**\n * @fileoverview A \"ponyfill\" is a polyfill that doesn't modify the global prototype chain.\n * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.\n */\nfunction closest(element, selector) {\n  if (element.closest) {\n    return element.closest(selector);\n  }\n\n  var el = element;\n\n  while (el) {\n    if (matches(el, selector)) {\n      return el;\n    }\n\n    el = el.parentElement;\n  }\n\n  return null;\n}\nfunction matches(element, selector) {\n  var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;\n  return nativeMatches.call(element, selector);\n}\n/**\n * Used to compute the estimated scroll width of elements. When an element is\n * hidden due to display: none; being applied to a parent element, the width is\n * returned as 0. However, the element will have a true width once no longer\n * inside a display: none context. This method computes an estimated width when\n * the element is hidden or returns the true width when the element is visble.\n * @param {Element} element the element whose width to estimate\n */\n\nfunction estimateScrollWidth(element) {\n  // Check the offsetParent. If the element inherits display: none from any\n  // parent, the offsetParent property will be null (see\n  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent).\n  // This check ensures we only clone the node when necessary.\n  var htmlEl = element;\n\n  if (htmlEl.offsetParent !== null) {\n    return htmlEl.scrollWidth;\n  }\n\n  var clone = htmlEl.cloneNode(true);\n  clone.style.setProperty('position', 'absolute');\n  clone.style.setProperty('transform', 'translate(-9999px, -9999px)');\n  document.documentElement.appendChild(clone);\n  var scrollWidth = clone.scrollWidth;\n  document.documentElement.removeChild(clone);\n  return scrollWidth;\n}\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/dom/ponyfill.js?");

/***/ }),

/***/ "./node_modules/@material/floating-label/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/component.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCFloatingLabel\": () => (/* binding */ MDCFloatingLabel)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/base/component */ \"./node_modules/@material/base/component.js\");\n/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/dom/ponyfill */ \"./node_modules/@material/dom/ponyfill.js\");\n/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foundation */ \"./node_modules/@material/floating-label/foundation.js\");\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\n\nvar MDCFloatingLabel =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCFloatingLabel, _super);\n\n  function MDCFloatingLabel() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  MDCFloatingLabel.attachTo = function (root) {\n    return new MDCFloatingLabel(root);\n  };\n  /**\n   * Styles the label to produce the label shake for errors.\n   * @param shouldShake If true, shakes the label by adding a CSS class; otherwise, stops shaking by removing the class.\n   */\n\n\n  MDCFloatingLabel.prototype.shake = function (shouldShake) {\n    this.foundation.shake(shouldShake);\n  };\n  /**\n   * Styles the label to float/dock.\n   * @param shouldFloat If true, floats the label by adding a CSS class; otherwise, docks it by removing the class.\n   */\n\n\n  MDCFloatingLabel.prototype[\"float\"] = function (shouldFloat) {\n    this.foundation[\"float\"](shouldFloat);\n  };\n  /**\n   * Styles the label as required.\n   * @param isRequired If true, adds an asterisk to the label, indicating that it is required.\n   */\n\n\n  MDCFloatingLabel.prototype.setRequired = function (isRequired) {\n    this.foundation.setRequired(isRequired);\n  };\n\n  MDCFloatingLabel.prototype.getWidth = function () {\n    return this.foundation.getWidth();\n  };\n\n  MDCFloatingLabel.prototype.getDefaultFoundation = function () {\n    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.\n    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.\n    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n\n\n    var adapter = {\n      addClass: function addClass(className) {\n        return _this.root.classList.add(className);\n      },\n      removeClass: function removeClass(className) {\n        return _this.root.classList.remove(className);\n      },\n      getWidth: function getWidth() {\n        return (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_1__.estimateScrollWidth)(_this.root);\n      },\n      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {\n        return _this.listen(evtType, handler);\n      },\n      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {\n        return _this.unlisten(evtType, handler);\n      }\n    }; // tslint:enable:object-literal-sort-keys\n\n    return new _foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFloatingLabelFoundation(adapter);\n  };\n\n  return MDCFloatingLabel;\n}(_material_base_component__WEBPACK_IMPORTED_MODULE_3__.MDCComponent);\n\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/floating-label/component.js?");

/***/ }),

/***/ "./node_modules/@material/floating-label/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/floating-label/constants.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cssClasses\": () => (/* binding */ cssClasses)\n/* harmony export */ });\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\nvar cssClasses = {\n  LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',\n  LABEL_REQUIRED: 'mdc-floating-label--required',\n  LABEL_SHAKE: 'mdc-floating-label--shake',\n  ROOT: 'mdc-floating-label'\n};\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/floating-label/constants.js?");

/***/ }),

/***/ "./node_modules/@material/floating-label/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/floating-label/foundation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCFloatingLabelFoundation\": () => (/* binding */ MDCFloatingLabelFoundation),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ \"./node_modules/@material/base/foundation.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./node_modules/@material/floating-label/constants.js\");\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\nvar MDCFloatingLabelFoundation =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCFloatingLabelFoundation, _super);\n\n  function MDCFloatingLabelFoundation(adapter) {\n    var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCFloatingLabelFoundation.defaultAdapter), adapter)) || this;\n\n    _this.shakeAnimationEndHandler_ = function () {\n      return _this.handleShakeAnimationEnd_();\n    };\n\n    return _this;\n  }\n\n  Object.defineProperty(MDCFloatingLabelFoundation, \"cssClasses\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCFloatingLabelFoundation, \"defaultAdapter\", {\n    /**\n     * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.\n     */\n    get: function get() {\n      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n      return {\n        addClass: function addClass() {\n          return undefined;\n        },\n        removeClass: function removeClass() {\n          return undefined;\n        },\n        getWidth: function getWidth() {\n          return 0;\n        },\n        registerInteractionHandler: function registerInteractionHandler() {\n          return undefined;\n        },\n        deregisterInteractionHandler: function deregisterInteractionHandler() {\n          return undefined;\n        }\n      }; // tslint:enable:object-literal-sort-keys\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  MDCFloatingLabelFoundation.prototype.init = function () {\n    this.adapter.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);\n  };\n\n  MDCFloatingLabelFoundation.prototype.destroy = function () {\n    this.adapter.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);\n  };\n  /**\n   * Returns the width of the label element.\n   */\n\n\n  MDCFloatingLabelFoundation.prototype.getWidth = function () {\n    return this.adapter.getWidth();\n  };\n  /**\n   * Styles the label to produce a shake animation to indicate an error.\n   * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.\n   */\n\n\n  MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {\n    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;\n\n    if (shouldShake) {\n      this.adapter.addClass(LABEL_SHAKE);\n    } else {\n      this.adapter.removeClass(LABEL_SHAKE);\n    }\n  };\n  /**\n   * Styles the label to float or dock.\n   * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.\n   */\n\n\n  MDCFloatingLabelFoundation.prototype[\"float\"] = function (shouldFloat) {\n    var _a = MDCFloatingLabelFoundation.cssClasses,\n        LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE,\n        LABEL_SHAKE = _a.LABEL_SHAKE;\n\n    if (shouldFloat) {\n      this.adapter.addClass(LABEL_FLOAT_ABOVE);\n    } else {\n      this.adapter.removeClass(LABEL_FLOAT_ABOVE);\n      this.adapter.removeClass(LABEL_SHAKE);\n    }\n  };\n  /**\n   * Styles the label as required.\n   * @param isRequired If true, adds an asterisk to the label, indicating that it is required.\n   */\n\n\n  MDCFloatingLabelFoundation.prototype.setRequired = function (isRequired) {\n    var LABEL_REQUIRED = MDCFloatingLabelFoundation.cssClasses.LABEL_REQUIRED;\n\n    if (isRequired) {\n      this.adapter.addClass(LABEL_REQUIRED);\n    } else {\n      this.adapter.removeClass(LABEL_REQUIRED);\n    }\n  };\n\n  MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {\n    var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;\n    this.adapter.removeClass(LABEL_SHAKE);\n  };\n\n  return MDCFloatingLabelFoundation;\n}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation);\n\n // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCFloatingLabelFoundation);\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/floating-label/foundation.js?");

/***/ }),

/***/ "./node_modules/@material/line-ripple/component.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/component.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCLineRipple\": () => (/* binding */ MDCLineRipple)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/component */ \"./node_modules/@material/base/component.js\");\n/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ \"./node_modules/@material/line-ripple/foundation.js\");\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\nvar MDCLineRipple =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCLineRipple, _super);\n\n  function MDCLineRipple() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  MDCLineRipple.attachTo = function (root) {\n    return new MDCLineRipple(root);\n  };\n  /**\n   * Activates the line ripple\n   */\n\n\n  MDCLineRipple.prototype.activate = function () {\n    this.foundation.activate();\n  };\n  /**\n   * Deactivates the line ripple\n   */\n\n\n  MDCLineRipple.prototype.deactivate = function () {\n    this.foundation.deactivate();\n  };\n  /**\n   * Sets the transform origin given a user's click location.\n   * The `rippleCenter` is the x-coordinate of the middle of the ripple.\n   */\n\n\n  MDCLineRipple.prototype.setRippleCenter = function (xCoordinate) {\n    this.foundation.setRippleCenter(xCoordinate);\n  };\n\n  MDCLineRipple.prototype.getDefaultFoundation = function () {\n    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.\n    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.\n    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n\n\n    var adapter = {\n      addClass: function addClass(className) {\n        return _this.root.classList.add(className);\n      },\n      removeClass: function removeClass(className) {\n        return _this.root.classList.remove(className);\n      },\n      hasClass: function hasClass(className) {\n        return _this.root.classList.contains(className);\n      },\n      setStyle: function setStyle(propertyName, value) {\n        return _this.root.style.setProperty(propertyName, value);\n      },\n      registerEventHandler: function registerEventHandler(evtType, handler) {\n        return _this.listen(evtType, handler);\n      },\n      deregisterEventHandler: function deregisterEventHandler(evtType, handler) {\n        return _this.unlisten(evtType, handler);\n      }\n    }; // tslint:enable:object-literal-sort-keys\n\n    return new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCLineRippleFoundation(adapter);\n  };\n\n  return MDCLineRipple;\n}(_material_base_component__WEBPACK_IMPORTED_MODULE_2__.MDCComponent);\n\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/line-ripple/component.js?");

/***/ }),

/***/ "./node_modules/@material/line-ripple/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material/line-ripple/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cssClasses\": () => (/* binding */ cssClasses)\n/* harmony export */ });\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\nvar cssClasses = {\n  LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',\n  LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'\n};\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/line-ripple/constants.js?");

/***/ }),

/***/ "./node_modules/@material/line-ripple/foundation.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material/line-ripple/foundation.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCLineRippleFoundation\": () => (/* binding */ MDCLineRippleFoundation),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ \"./node_modules/@material/base/foundation.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./node_modules/@material/line-ripple/constants.js\");\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\nvar MDCLineRippleFoundation =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCLineRippleFoundation, _super);\n\n  function MDCLineRippleFoundation(adapter) {\n    var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCLineRippleFoundation.defaultAdapter), adapter)) || this;\n\n    _this.transitionEndHandler_ = function (evt) {\n      return _this.handleTransitionEnd(evt);\n    };\n\n    return _this;\n  }\n\n  Object.defineProperty(MDCLineRippleFoundation, \"cssClasses\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCLineRippleFoundation, \"defaultAdapter\", {\n    /**\n     * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.\n     */\n    get: function get() {\n      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n      return {\n        addClass: function addClass() {\n          return undefined;\n        },\n        removeClass: function removeClass() {\n          return undefined;\n        },\n        hasClass: function hasClass() {\n          return false;\n        },\n        setStyle: function setStyle() {\n          return undefined;\n        },\n        registerEventHandler: function registerEventHandler() {\n          return undefined;\n        },\n        deregisterEventHandler: function deregisterEventHandler() {\n          return undefined;\n        }\n      }; // tslint:enable:object-literal-sort-keys\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  MDCLineRippleFoundation.prototype.init = function () {\n    this.adapter.registerEventHandler('transitionend', this.transitionEndHandler_);\n  };\n\n  MDCLineRippleFoundation.prototype.destroy = function () {\n    this.adapter.deregisterEventHandler('transitionend', this.transitionEndHandler_);\n  };\n\n  MDCLineRippleFoundation.prototype.activate = function () {\n    this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_DEACTIVATING);\n    this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_ACTIVE);\n  };\n\n  MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {\n    this.adapter.setStyle('transform-origin', xCoordinate + \"px center\");\n  };\n\n  MDCLineRippleFoundation.prototype.deactivate = function () {\n    this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_DEACTIVATING);\n  };\n\n  MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {\n    // Wait for the line ripple to be either transparent or opaque\n    // before emitting the animation end event\n    var isDeactivating = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_DEACTIVATING);\n\n    if (evt.propertyName === 'opacity') {\n      if (isDeactivating) {\n        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_ACTIVE);\n        this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.LINE_RIPPLE_DEACTIVATING);\n      }\n    }\n  };\n\n  return MDCLineRippleFoundation;\n}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation);\n\n // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCLineRippleFoundation);\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/line-ripple/foundation.js?");

/***/ }),

/***/ "./node_modules/@material/notched-outline/component.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/component.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCNotchedOutline\": () => (/* binding */ MDCNotchedOutline)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/base/component */ \"./node_modules/@material/base/component.js\");\n/* harmony import */ var _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/floating-label/foundation */ \"./node_modules/@material/floating-label/foundation.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./node_modules/@material/notched-outline/constants.js\");\n/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foundation */ \"./node_modules/@material/notched-outline/foundation.js\");\n/**\n * @license\n * Copyright 2017 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\n\n\nvar MDCNotchedOutline =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCNotchedOutline, _super);\n\n  function MDCNotchedOutline() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  MDCNotchedOutline.attachTo = function (root) {\n    return new MDCNotchedOutline(root);\n  };\n\n  MDCNotchedOutline.prototype.initialSyncWithDOM = function () {\n    this.notchElement_ = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.NOTCH_ELEMENT_SELECTOR);\n    var label = this.root.querySelector('.' + _material_floating_label_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFloatingLabelFoundation.cssClasses.ROOT);\n\n    if (label) {\n      label.style.transitionDuration = '0s';\n      this.root.classList.add(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.OUTLINE_UPGRADED);\n      requestAnimationFrame(function () {\n        label.style.transitionDuration = '';\n      });\n    } else {\n      this.root.classList.add(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.NO_LABEL);\n    }\n  };\n  /**\n   * Updates classes and styles to open the notch to the specified width.\n   * @param notchWidth The notch width in the outline.\n   */\n\n\n  MDCNotchedOutline.prototype.notch = function (notchWidth) {\n    this.foundation.notch(notchWidth);\n  };\n  /**\n   * Updates classes and styles to close the notch.\n   */\n\n\n  MDCNotchedOutline.prototype.closeNotch = function () {\n    this.foundation.closeNotch();\n  };\n\n  MDCNotchedOutline.prototype.getDefaultFoundation = function () {\n    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.\n    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.\n    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n\n\n    var adapter = {\n      addClass: function addClass(className) {\n        return _this.root.classList.add(className);\n      },\n      removeClass: function removeClass(className) {\n        return _this.root.classList.remove(className);\n      },\n      setNotchWidthProperty: function setNotchWidthProperty(width) {\n        return _this.notchElement_.style.setProperty('width', width + 'px');\n      },\n      removeNotchWidthProperty: function removeNotchWidthProperty() {\n        return _this.notchElement_.style.removeProperty('width');\n      }\n    }; // tslint:enable:object-literal-sort-keys\n\n    return new _foundation__WEBPACK_IMPORTED_MODULE_3__.MDCNotchedOutlineFoundation(adapter);\n  };\n\n  return MDCNotchedOutline;\n}(_material_base_component__WEBPACK_IMPORTED_MODULE_4__.MDCComponent);\n\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/notched-outline/component.js?");

/***/ }),

/***/ "./node_modules/@material/notched-outline/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/notched-outline/constants.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cssClasses\": () => (/* binding */ cssClasses),\n/* harmony export */   \"numbers\": () => (/* binding */ numbers),\n/* harmony export */   \"strings\": () => (/* binding */ strings)\n/* harmony export */ });\n/**\n * @license\n * Copyright 2018 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\nvar strings = {\n  NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'\n};\nvar numbers = {\n  // This should stay in sync with $mdc-notched-outline-padding * 2.\n  NOTCH_ELEMENT_PADDING: 8\n};\nvar cssClasses = {\n  NO_LABEL: 'mdc-notched-outline--no-label',\n  OUTLINE_NOTCHED: 'mdc-notched-outline--notched',\n  OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded'\n};\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/notched-outline/constants.js?");

/***/ }),

/***/ "./node_modules/@material/notched-outline/foundation.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material/notched-outline/foundation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCNotchedOutlineFoundation\": () => (/* binding */ MDCNotchedOutlineFoundation),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ \"./node_modules/@material/base/foundation.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./node_modules/@material/notched-outline/constants.js\");\n/**\n * @license\n * Copyright 2017 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\nvar MDCNotchedOutlineFoundation =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCNotchedOutlineFoundation, _super);\n\n  function MDCNotchedOutlineFoundation(adapter) {\n    return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCNotchedOutlineFoundation.defaultAdapter), adapter)) || this;\n  }\n\n  Object.defineProperty(MDCNotchedOutlineFoundation, \"strings\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCNotchedOutlineFoundation, \"cssClasses\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCNotchedOutlineFoundation, \"numbers\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCNotchedOutlineFoundation, \"defaultAdapter\", {\n    /**\n     * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.\n     */\n    get: function get() {\n      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n      return {\n        addClass: function addClass() {\n          return undefined;\n        },\n        removeClass: function removeClass() {\n          return undefined;\n        },\n        setNotchWidthProperty: function setNotchWidthProperty() {\n          return undefined;\n        },\n        removeNotchWidthProperty: function removeNotchWidthProperty() {\n          return undefined;\n        }\n      }; // tslint:enable:object-literal-sort-keys\n    },\n    enumerable: true,\n    configurable: true\n  });\n  /**\n   * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.\n   */\n\n  MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {\n    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;\n\n    if (notchWidth > 0) {\n      notchWidth += _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.NOTCH_ELEMENT_PADDING; // Add padding from left/right.\n    }\n\n    this.adapter.setNotchWidthProperty(notchWidth);\n    this.adapter.addClass(OUTLINE_NOTCHED);\n  };\n  /**\n   * Removes notched outline selector to close the notch in the outline.\n   */\n\n\n  MDCNotchedOutlineFoundation.prototype.closeNotch = function () {\n    var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;\n    this.adapter.removeClass(OUTLINE_NOTCHED);\n    this.adapter.removeNotchWidthProperty();\n  };\n\n  return MDCNotchedOutlineFoundation;\n}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation);\n\n // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCNotchedOutlineFoundation);\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/notched-outline/foundation.js?");

/***/ }),

/***/ "./node_modules/@material/ripple/component.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/component.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCRipple\": () => (/* binding */ MDCRipple)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material/base/component */ \"./node_modules/@material/base/component.js\");\n/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/dom/events */ \"./node_modules/@material/dom/events.js\");\n/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/dom/ponyfill */ \"./node_modules/@material/dom/ponyfill.js\");\n/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./foundation */ \"./node_modules/@material/ripple/foundation.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./node_modules/@material/ripple/util.js\");\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\n\n\n\nvar MDCRipple =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCRipple, _super);\n\n  function MDCRipple() {\n    var _this = _super !== null && _super.apply(this, arguments) || this;\n\n    _this.disabled = false;\n    return _this;\n  }\n\n  MDCRipple.attachTo = function (root, opts) {\n    if (opts === void 0) {\n      opts = {\n        isUnbounded: undefined\n      };\n    }\n\n    var ripple = new MDCRipple(root); // Only override unbounded behavior if option is explicitly specified\n\n    if (opts.isUnbounded !== undefined) {\n      ripple.unbounded = opts.isUnbounded;\n    }\n\n    return ripple;\n  };\n\n  MDCRipple.createAdapter = function (instance) {\n    return {\n      addClass: function addClass(className) {\n        return instance.root.classList.add(className);\n      },\n      browserSupportsCssVars: function browserSupportsCssVars() {\n        return _util__WEBPACK_IMPORTED_MODULE_1__.supportsCssVariables(window);\n      },\n      computeBoundingRect: function computeBoundingRect() {\n        return instance.root.getBoundingClientRect();\n      },\n      containsEventTarget: function containsEventTarget(target) {\n        return instance.root.contains(target);\n      },\n      deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {\n        return document.documentElement.removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());\n      },\n      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {\n        return instance.root.removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());\n      },\n      deregisterResizeHandler: function deregisterResizeHandler(handler) {\n        return window.removeEventListener('resize', handler);\n      },\n      getWindowPageOffset: function getWindowPageOffset() {\n        return {\n          x: window.pageXOffset,\n          y: window.pageYOffset\n        };\n      },\n      isSurfaceActive: function isSurfaceActive() {\n        return (0,_material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_3__.matches)(instance.root, ':active');\n      },\n      isSurfaceDisabled: function isSurfaceDisabled() {\n        return Boolean(instance.disabled);\n      },\n      isUnbounded: function isUnbounded() {\n        return Boolean(instance.unbounded);\n      },\n      registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {\n        return document.documentElement.addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());\n      },\n      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {\n        return instance.root.addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_2__.applyPassive)());\n      },\n      registerResizeHandler: function registerResizeHandler(handler) {\n        return window.addEventListener('resize', handler);\n      },\n      removeClass: function removeClass(className) {\n        return instance.root.classList.remove(className);\n      },\n      updateCssVariable: function updateCssVariable(varName, value) {\n        return instance.root.style.setProperty(varName, value);\n      }\n    };\n  };\n\n  Object.defineProperty(MDCRipple.prototype, \"unbounded\", {\n    get: function get() {\n      return Boolean(this.unbounded_);\n    },\n    set: function set(unbounded) {\n      this.unbounded_ = Boolean(unbounded);\n      this.setUnbounded_();\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  MDCRipple.prototype.activate = function () {\n    this.foundation.activate();\n  };\n\n  MDCRipple.prototype.deactivate = function () {\n    this.foundation.deactivate();\n  };\n\n  MDCRipple.prototype.layout = function () {\n    this.foundation.layout();\n  };\n\n  MDCRipple.prototype.getDefaultFoundation = function () {\n    return new _foundation__WEBPACK_IMPORTED_MODULE_4__.MDCRippleFoundation(MDCRipple.createAdapter(this));\n  };\n\n  MDCRipple.prototype.initialSyncWithDOM = function () {\n    var root = this.root;\n    this.unbounded = 'mdcRippleIsUnbounded' in root.dataset;\n  };\n  /**\n   * Closure Compiler throws an access control error when directly accessing a\n   * protected or private property inside a getter/setter, like unbounded above.\n   * By accessing the protected property inside a method, we solve that problem.\n   * That's why this function exists.\n   */\n\n\n  MDCRipple.prototype.setUnbounded_ = function () {\n    this.foundation.setUnbounded(Boolean(this.unbounded_));\n  };\n\n  return MDCRipple;\n}(_material_base_component__WEBPACK_IMPORTED_MODULE_5__.MDCComponent);\n\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/ripple/component.js?");

/***/ }),

/***/ "./node_modules/@material/ripple/constants.js":
/*!****************************************************!*\
  !*** ./node_modules/@material/ripple/constants.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cssClasses\": () => (/* binding */ cssClasses),\n/* harmony export */   \"strings\": () => (/* binding */ strings),\n/* harmony export */   \"numbers\": () => (/* binding */ numbers)\n/* harmony export */ });\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\nvar cssClasses = {\n  // Ripple is a special case where the \"root\" component is really a \"mixin\" of sorts,\n  // given that it's an 'upgrade' to an existing component. That being said it is the root\n  // CSS class that all other CSS classes derive from.\n  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',\n  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',\n  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',\n  ROOT: 'mdc-ripple-upgraded',\n  UNBOUNDED: 'mdc-ripple-upgraded--unbounded'\n};\nvar strings = {\n  VAR_FG_SCALE: '--mdc-ripple-fg-scale',\n  VAR_FG_SIZE: '--mdc-ripple-fg-size',\n  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',\n  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',\n  VAR_LEFT: '--mdc-ripple-left',\n  VAR_TOP: '--mdc-ripple-top'\n};\nvar numbers = {\n  DEACTIVATION_TIMEOUT_MS: 225,\n  FG_DEACTIVATION_MS: 150,\n  INITIAL_ORIGIN_SCALE: 0.6,\n  PADDING: 10,\n  TAP_DELAY_MS: 300\n};\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/ripple/constants.js?");

/***/ }),

/***/ "./node_modules/@material/ripple/foundation.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material/ripple/foundation.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCRippleFoundation\": () => (/* binding */ MDCRippleFoundation),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/base/foundation */ \"./node_modules/@material/base/foundation.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./node_modules/@material/ripple/constants.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ \"./node_modules/@material/ripple/util.js\");\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n // Activation events registered on the root element of each instance for activation\n\nvar ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs\n\nvar POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations\n\nvar activatedTargets = [];\n\nvar MDCRippleFoundation =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCRippleFoundation, _super);\n\n  function MDCRippleFoundation(adapter) {\n    var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCRippleFoundation.defaultAdapter), adapter)) || this;\n\n    _this.activationAnimationHasEnded_ = false;\n    _this.activationTimer_ = 0;\n    _this.fgDeactivationRemovalTimer_ = 0;\n    _this.fgScale_ = '0';\n    _this.frame_ = {\n      width: 0,\n      height: 0\n    };\n    _this.initialSize_ = 0;\n    _this.layoutFrame_ = 0;\n    _this.maxRadius_ = 0;\n    _this.unboundedCoords_ = {\n      left: 0,\n      top: 0\n    };\n    _this.activationState_ = _this.defaultActivationState_();\n\n    _this.activationTimerCallback_ = function () {\n      _this.activationAnimationHasEnded_ = true;\n\n      _this.runDeactivationUXLogicIfReady_();\n    };\n\n    _this.activateHandler_ = function (e) {\n      return _this.activate_(e);\n    };\n\n    _this.deactivateHandler_ = function () {\n      return _this.deactivate_();\n    };\n\n    _this.focusHandler_ = function () {\n      return _this.handleFocus();\n    };\n\n    _this.blurHandler_ = function () {\n      return _this.handleBlur();\n    };\n\n    _this.resizeHandler_ = function () {\n      return _this.layout();\n    };\n\n    return _this;\n  }\n\n  Object.defineProperty(MDCRippleFoundation, \"cssClasses\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCRippleFoundation, \"strings\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCRippleFoundation, \"numbers\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCRippleFoundation, \"defaultAdapter\", {\n    get: function get() {\n      return {\n        addClass: function addClass() {\n          return undefined;\n        },\n        browserSupportsCssVars: function browserSupportsCssVars() {\n          return true;\n        },\n        computeBoundingRect: function computeBoundingRect() {\n          return {\n            top: 0,\n            right: 0,\n            bottom: 0,\n            left: 0,\n            width: 0,\n            height: 0\n          };\n        },\n        containsEventTarget: function containsEventTarget() {\n          return true;\n        },\n        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {\n          return undefined;\n        },\n        deregisterInteractionHandler: function deregisterInteractionHandler() {\n          return undefined;\n        },\n        deregisterResizeHandler: function deregisterResizeHandler() {\n          return undefined;\n        },\n        getWindowPageOffset: function getWindowPageOffset() {\n          return {\n            x: 0,\n            y: 0\n          };\n        },\n        isSurfaceActive: function isSurfaceActive() {\n          return true;\n        },\n        isSurfaceDisabled: function isSurfaceDisabled() {\n          return true;\n        },\n        isUnbounded: function isUnbounded() {\n          return true;\n        },\n        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {\n          return undefined;\n        },\n        registerInteractionHandler: function registerInteractionHandler() {\n          return undefined;\n        },\n        registerResizeHandler: function registerResizeHandler() {\n          return undefined;\n        },\n        removeClass: function removeClass() {\n          return undefined;\n        },\n        updateCssVariable: function updateCssVariable() {\n          return undefined;\n        }\n      };\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  MDCRippleFoundation.prototype.init = function () {\n    var _this = this;\n\n    var supportsPressRipple = this.supportsPressRipple_();\n    this.registerRootHandlers_(supportsPressRipple);\n\n    if (supportsPressRipple) {\n      var _a = MDCRippleFoundation.cssClasses,\n          ROOT_1 = _a.ROOT,\n          UNBOUNDED_1 = _a.UNBOUNDED;\n      requestAnimationFrame(function () {\n        _this.adapter.addClass(ROOT_1);\n\n        if (_this.adapter.isUnbounded()) {\n          _this.adapter.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple\n\n\n          _this.layoutInternal_();\n        }\n      });\n    }\n  };\n\n  MDCRippleFoundation.prototype.destroy = function () {\n    var _this = this;\n\n    if (this.supportsPressRipple_()) {\n      if (this.activationTimer_) {\n        clearTimeout(this.activationTimer_);\n        this.activationTimer_ = 0;\n        this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);\n      }\n\n      if (this.fgDeactivationRemovalTimer_) {\n        clearTimeout(this.fgDeactivationRemovalTimer_);\n        this.fgDeactivationRemovalTimer_ = 0;\n        this.adapter.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);\n      }\n\n      var _a = MDCRippleFoundation.cssClasses,\n          ROOT_2 = _a.ROOT,\n          UNBOUNDED_2 = _a.UNBOUNDED;\n      requestAnimationFrame(function () {\n        _this.adapter.removeClass(ROOT_2);\n\n        _this.adapter.removeClass(UNBOUNDED_2);\n\n        _this.removeCssVars_();\n      });\n    }\n\n    this.deregisterRootHandlers_();\n    this.deregisterDeactivationHandlers_();\n  };\n  /**\n   * @param evt Optional event containing position information.\n   */\n\n\n  MDCRippleFoundation.prototype.activate = function (evt) {\n    this.activate_(evt);\n  };\n\n  MDCRippleFoundation.prototype.deactivate = function () {\n    this.deactivate_();\n  };\n\n  MDCRippleFoundation.prototype.layout = function () {\n    var _this = this;\n\n    if (this.layoutFrame_) {\n      cancelAnimationFrame(this.layoutFrame_);\n    }\n\n    this.layoutFrame_ = requestAnimationFrame(function () {\n      _this.layoutInternal_();\n\n      _this.layoutFrame_ = 0;\n    });\n  };\n\n  MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {\n    var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;\n\n    if (unbounded) {\n      this.adapter.addClass(UNBOUNDED);\n    } else {\n      this.adapter.removeClass(UNBOUNDED);\n    }\n  };\n\n  MDCRippleFoundation.prototype.handleFocus = function () {\n    var _this = this;\n\n    requestAnimationFrame(function () {\n      return _this.adapter.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);\n    });\n  };\n\n  MDCRippleFoundation.prototype.handleBlur = function () {\n    var _this = this;\n\n    requestAnimationFrame(function () {\n      return _this.adapter.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);\n    });\n  };\n  /**\n   * We compute this property so that we are not querying information about the client\n   * until the point in time where the foundation requests it. This prevents scenarios where\n   * client-side feature-detection may happen too early, such as when components are rendered on the server\n   * and then initialized at mount time on the client.\n   */\n\n\n  MDCRippleFoundation.prototype.supportsPressRipple_ = function () {\n    return this.adapter.browserSupportsCssVars();\n  };\n\n  MDCRippleFoundation.prototype.defaultActivationState_ = function () {\n    return {\n      activationEvent: undefined,\n      hasDeactivationUXRun: false,\n      isActivated: false,\n      isProgrammatic: false,\n      wasActivatedByPointer: false,\n      wasElementMadeActive: false\n    };\n  };\n  /**\n   * supportsPressRipple Passed from init to save a redundant function call\n   */\n\n\n  MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {\n    var _this = this;\n\n    if (supportsPressRipple) {\n      ACTIVATION_EVENT_TYPES.forEach(function (evtType) {\n        _this.adapter.registerInteractionHandler(evtType, _this.activateHandler_);\n      });\n\n      if (this.adapter.isUnbounded()) {\n        this.adapter.registerResizeHandler(this.resizeHandler_);\n      }\n    }\n\n    this.adapter.registerInteractionHandler('focus', this.focusHandler_);\n    this.adapter.registerInteractionHandler('blur', this.blurHandler_);\n  };\n\n  MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {\n    var _this = this;\n\n    if (evt.type === 'keydown') {\n      this.adapter.registerInteractionHandler('keyup', this.deactivateHandler_);\n    } else {\n      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {\n        _this.adapter.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);\n      });\n    }\n  };\n\n  MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {\n    var _this = this;\n\n    ACTIVATION_EVENT_TYPES.forEach(function (evtType) {\n      _this.adapter.deregisterInteractionHandler(evtType, _this.activateHandler_);\n    });\n    this.adapter.deregisterInteractionHandler('focus', this.focusHandler_);\n    this.adapter.deregisterInteractionHandler('blur', this.blurHandler_);\n\n    if (this.adapter.isUnbounded()) {\n      this.adapter.deregisterResizeHandler(this.resizeHandler_);\n    }\n  };\n\n  MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {\n    var _this = this;\n\n    this.adapter.deregisterInteractionHandler('keyup', this.deactivateHandler_);\n    POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {\n      _this.adapter.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);\n    });\n  };\n\n  MDCRippleFoundation.prototype.removeCssVars_ = function () {\n    var _this = this;\n\n    var rippleStrings = MDCRippleFoundation.strings;\n    var keys = Object.keys(rippleStrings);\n    keys.forEach(function (key) {\n      if (key.indexOf('VAR_') === 0) {\n        _this.adapter.updateCssVariable(rippleStrings[key], null);\n      }\n    });\n  };\n\n  MDCRippleFoundation.prototype.activate_ = function (evt) {\n    var _this = this;\n\n    if (this.adapter.isSurfaceDisabled()) {\n      return;\n    }\n\n    var activationState = this.activationState_;\n\n    if (activationState.isActivated) {\n      return;\n    } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction\n\n\n    var previousActivationEvent = this.previousActivationEvent_;\n    var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;\n\n    if (isSameInteraction) {\n      return;\n    }\n\n    activationState.isActivated = true;\n    activationState.isProgrammatic = evt === undefined;\n    activationState.activationEvent = evt;\n    activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');\n    var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {\n      return _this.adapter.containsEventTarget(target);\n    });\n\n    if (hasActivatedChild) {\n      // Immediately reset activation state, while preserving logic that prevents touch follow-on events\n      this.resetActivationState_();\n      return;\n    }\n\n    if (evt !== undefined) {\n      activatedTargets.push(evt.target);\n      this.registerDeactivationHandlers_(evt);\n    }\n\n    activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);\n\n    if (activationState.wasElementMadeActive) {\n      this.animateActivation_();\n    }\n\n    requestAnimationFrame(function () {\n      // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples\n      activatedTargets = [];\n\n      if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {\n        // If space was pressed, try again within an rAF call to detect :active, because different UAs report\n        // active states inconsistently when they're called within event handling code:\n        // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971\n        // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741\n        // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS\n        // variable is set within a rAF callback for a submit button interaction (#2241).\n        activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);\n\n        if (activationState.wasElementMadeActive) {\n          _this.animateActivation_();\n        }\n      }\n\n      if (!activationState.wasElementMadeActive) {\n        // Reset activation state immediately if element was not made active.\n        _this.activationState_ = _this.defaultActivationState_();\n      }\n    });\n  };\n\n  MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {\n    return evt !== undefined && evt.type === 'keydown' ? this.adapter.isSurfaceActive() : true;\n  };\n\n  MDCRippleFoundation.prototype.animateActivation_ = function () {\n    var _this = this;\n\n    var _a = MDCRippleFoundation.strings,\n        VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,\n        VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;\n    var _b = MDCRippleFoundation.cssClasses,\n        FG_DEACTIVATION = _b.FG_DEACTIVATION,\n        FG_ACTIVATION = _b.FG_ACTIVATION;\n    var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;\n    this.layoutInternal_();\n    var translateStart = '';\n    var translateEnd = '';\n\n    if (!this.adapter.isUnbounded()) {\n      var _c = this.getFgTranslationCoordinates_(),\n          startPoint = _c.startPoint,\n          endPoint = _c.endPoint;\n\n      translateStart = startPoint.x + \"px, \" + startPoint.y + \"px\";\n      translateEnd = endPoint.x + \"px, \" + endPoint.y + \"px\";\n    }\n\n    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);\n    this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations\n\n    clearTimeout(this.activationTimer_);\n    clearTimeout(this.fgDeactivationRemovalTimer_);\n    this.rmBoundedActivationClasses_();\n    this.adapter.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.\n\n    this.adapter.computeBoundingRect();\n    this.adapter.addClass(FG_ACTIVATION);\n    this.activationTimer_ = setTimeout(function () {\n      return _this.activationTimerCallback_();\n    }, DEACTIVATION_TIMEOUT_MS);\n  };\n\n  MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {\n    var _a = this.activationState_,\n        activationEvent = _a.activationEvent,\n        wasActivatedByPointer = _a.wasActivatedByPointer;\n    var startPoint;\n\n    if (wasActivatedByPointer) {\n      startPoint = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getNormalizedEventCoords)(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());\n    } else {\n      startPoint = {\n        x: this.frame_.width / 2,\n        y: this.frame_.height / 2\n      };\n    } // Center the element around the start point.\n\n\n    startPoint = {\n      x: startPoint.x - this.initialSize_ / 2,\n      y: startPoint.y - this.initialSize_ / 2\n    };\n    var endPoint = {\n      x: this.frame_.width / 2 - this.initialSize_ / 2,\n      y: this.frame_.height / 2 - this.initialSize_ / 2\n    };\n    return {\n      startPoint: startPoint,\n      endPoint: endPoint\n    };\n  };\n\n  MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {\n    var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.\n    // The deactivation animation should only run after both of those occur.\n\n\n    var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;\n    var _a = this.activationState_,\n        hasDeactivationUXRun = _a.hasDeactivationUXRun,\n        isActivated = _a.isActivated;\n    var activationHasEnded = hasDeactivationUXRun || !isActivated;\n\n    if (activationHasEnded && this.activationAnimationHasEnded_) {\n      this.rmBoundedActivationClasses_();\n      this.adapter.addClass(FG_DEACTIVATION);\n      this.fgDeactivationRemovalTimer_ = setTimeout(function () {\n        _this.adapter.removeClass(FG_DEACTIVATION);\n      }, _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.FG_DEACTIVATION_MS);\n    }\n  };\n\n  MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {\n    var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;\n    this.adapter.removeClass(FG_ACTIVATION);\n    this.activationAnimationHasEnded_ = false;\n    this.adapter.computeBoundingRect();\n  };\n\n  MDCRippleFoundation.prototype.resetActivationState_ = function () {\n    var _this = this;\n\n    this.previousActivationEvent_ = this.activationState_.activationEvent;\n    this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.\n    // Store the previous event until it's safe to assume that subsequent events are for new interactions.\n\n    setTimeout(function () {\n      return _this.previousActivationEvent_ = undefined;\n    }, MDCRippleFoundation.numbers.TAP_DELAY_MS);\n  };\n\n  MDCRippleFoundation.prototype.deactivate_ = function () {\n    var _this = this;\n\n    var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.\n\n    if (!activationState.isActivated) {\n      return;\n    }\n\n    var state = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, activationState);\n\n    if (activationState.isProgrammatic) {\n      requestAnimationFrame(function () {\n        return _this.animateDeactivation_(state);\n      });\n      this.resetActivationState_();\n    } else {\n      this.deregisterDeactivationHandlers_();\n      requestAnimationFrame(function () {\n        _this.activationState_.hasDeactivationUXRun = true;\n\n        _this.animateDeactivation_(state);\n\n        _this.resetActivationState_();\n      });\n    }\n  };\n\n  MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {\n    var wasActivatedByPointer = _a.wasActivatedByPointer,\n        wasElementMadeActive = _a.wasElementMadeActive;\n\n    if (wasActivatedByPointer || wasElementMadeActive) {\n      this.runDeactivationUXLogicIfReady_();\n    }\n  };\n\n  MDCRippleFoundation.prototype.layoutInternal_ = function () {\n    var _this = this;\n\n    this.frame_ = this.adapter.computeBoundingRect();\n    var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.\n    // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately\n    // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically\n    // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter\n    // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via\n    // `overflow: hidden`.\n\n    var getBoundedRadius = function getBoundedRadius() {\n      var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));\n      return hypotenuse + MDCRippleFoundation.numbers.PADDING;\n    };\n\n    this.maxRadius_ = this.adapter.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform\n\n    var initialSize = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE); // Unbounded ripple size should always be even number to equally center align.\n\n    if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {\n      this.initialSize_ = initialSize - 1;\n    } else {\n      this.initialSize_ = initialSize;\n    }\n\n    this.fgScale_ = \"\" + this.maxRadius_ / this.initialSize_;\n    this.updateLayoutCssVars_();\n  };\n\n  MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {\n    var _a = MDCRippleFoundation.strings,\n        VAR_FG_SIZE = _a.VAR_FG_SIZE,\n        VAR_LEFT = _a.VAR_LEFT,\n        VAR_TOP = _a.VAR_TOP,\n        VAR_FG_SCALE = _a.VAR_FG_SCALE;\n    this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + \"px\");\n    this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale_);\n\n    if (this.adapter.isUnbounded()) {\n      this.unboundedCoords_ = {\n        left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),\n        top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)\n      };\n      this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + \"px\");\n      this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + \"px\");\n    }\n  };\n\n  return MDCRippleFoundation;\n}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_3__.MDCFoundation);\n\n // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCRippleFoundation);\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/ripple/foundation.js?");

/***/ }),

/***/ "./node_modules/@material/ripple/util.js":
/*!***********************************************!*\
  !*** ./node_modules/@material/ripple/util.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"supportsCssVariables\": () => (/* binding */ supportsCssVariables),\n/* harmony export */   \"getNormalizedEventCoords\": () => (/* binding */ getNormalizedEventCoords)\n/* harmony export */ });\n/**\n * Stores result from supportsCssVariables to avoid redundant processing to\n * detect CSS custom variable support.\n */\nvar supportsCssVariables_;\nfunction supportsCssVariables(windowObj, forceRefresh) {\n  if (forceRefresh === void 0) {\n    forceRefresh = false;\n  }\n\n  var CSS = windowObj.CSS;\n  var supportsCssVars = supportsCssVariables_;\n\n  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {\n    return supportsCssVariables_;\n  }\n\n  var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';\n\n  if (!supportsFunctionPresent) {\n    return false;\n  }\n\n  var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669\n  // See: README section on Safari\n\n  var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');\n  supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;\n\n  if (!forceRefresh) {\n    supportsCssVariables_ = supportsCssVars;\n  }\n\n  return supportsCssVars;\n}\nfunction getNormalizedEventCoords(evt, pageOffset, clientRect) {\n  if (!evt) {\n    return {\n      x: 0,\n      y: 0\n    };\n  }\n\n  var x = pageOffset.x,\n      y = pageOffset.y;\n  var documentX = x + clientRect.left;\n  var documentY = y + clientRect.top;\n  var normalizedX;\n  var normalizedY; // Determine touch point relative to the ripple container.\n\n  if (evt.type === 'touchstart') {\n    var touchEvent = evt;\n    normalizedX = touchEvent.changedTouches[0].pageX - documentX;\n    normalizedY = touchEvent.changedTouches[0].pageY - documentY;\n  } else {\n    var mouseEvent = evt;\n    normalizedX = mouseEvent.pageX - documentX;\n    normalizedY = mouseEvent.pageY - documentY;\n  }\n\n  return {\n    x: normalizedX,\n    y: normalizedY\n  };\n}\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/ripple/util.js?");

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/component.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/component.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCTextFieldCharacterCounter\": () => (/* binding */ MDCTextFieldCharacterCounter)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/component */ \"./node_modules/@material/base/component.js\");\n/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ \"./node_modules/@material/textfield/character-counter/foundation.js\");\n/**\n * @license\n * Copyright 2019 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\nvar MDCTextFieldCharacterCounter =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldCharacterCounter, _super);\n\n  function MDCTextFieldCharacterCounter() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  MDCTextFieldCharacterCounter.attachTo = function (root) {\n    return new MDCTextFieldCharacterCounter(root);\n  };\n\n  Object.defineProperty(MDCTextFieldCharacterCounter.prototype, \"foundationForTextField\", {\n    // Provided for access by MDCTextField component\n    get: function get() {\n      return this.foundation;\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  MDCTextFieldCharacterCounter.prototype.getDefaultFoundation = function () {\n    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.\n    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.\n\n\n    var adapter = {\n      setContent: function setContent(content) {\n        _this.root.textContent = content;\n      }\n    };\n    return new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTextFieldCharacterCounterFoundation(adapter);\n  };\n\n  return MDCTextFieldCharacterCounter;\n}(_material_base_component__WEBPACK_IMPORTED_MODULE_2__.MDCComponent);\n\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/textfield/character-counter/component.js?");

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/constants.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/constants.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"strings\": () => (/* binding */ strings),\n/* harmony export */   \"cssClasses\": () => (/* binding */ cssClasses)\n/* harmony export */ });\n/**\n * @license\n * Copyright 2019 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\nvar cssClasses = {\n  ROOT: 'mdc-text-field-character-counter'\n};\nvar strings = {\n  ROOT_SELECTOR: \".\" + cssClasses.ROOT\n};\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/textfield/character-counter/constants.js?");

/***/ }),

/***/ "./node_modules/@material/textfield/character-counter/foundation.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material/textfield/character-counter/foundation.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCTextFieldCharacterCounterFoundation\": () => (/* binding */ MDCTextFieldCharacterCounterFoundation),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ \"./node_modules/@material/base/foundation.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./node_modules/@material/textfield/character-counter/constants.js\");\n/**\n * @license\n * Copyright 2019 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\nvar MDCTextFieldCharacterCounterFoundation =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldCharacterCounterFoundation, _super);\n\n  function MDCTextFieldCharacterCounterFoundation(adapter) {\n    return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter), adapter)) || this;\n  }\n\n  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, \"cssClasses\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, \"strings\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextFieldCharacterCounterFoundation, \"defaultAdapter\", {\n    /**\n     * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.\n     */\n    get: function get() {\n      return {\n        setContent: function setContent() {\n          return undefined;\n        }\n      };\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {\n    currentLength = Math.min(currentLength, maxLength);\n    this.adapter.setContent(currentLength + \" / \" + maxLength);\n  };\n\n  return MDCTextFieldCharacterCounterFoundation;\n}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation);\n\n // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTextFieldCharacterCounterFoundation);\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/textfield/character-counter/foundation.js?");

/***/ }),

/***/ "./node_modules/@material/textfield/component.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/component.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCTextField\": () => (/* binding */ MDCTextField)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material/base/component */ \"./node_modules/@material/base/component.js\");\n/* harmony import */ var _material_dom_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material/dom/events */ \"./node_modules/@material/dom/events.js\");\n/* harmony import */ var _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material/dom/ponyfill */ \"./node_modules/@material/dom/ponyfill.js\");\n/* harmony import */ var _material_floating_label_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/floating-label/component */ \"./node_modules/@material/floating-label/component.js\");\n/* harmony import */ var _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/line-ripple/component */ \"./node_modules/@material/line-ripple/component.js\");\n/* harmony import */ var _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material/notched-outline/component */ \"./node_modules/@material/notched-outline/component.js\");\n/* harmony import */ var _material_ripple_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/ripple/component */ \"./node_modules/@material/ripple/component.js\");\n/* harmony import */ var _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material/ripple/foundation */ \"./node_modules/@material/ripple/foundation.js\");\n/* harmony import */ var _character_counter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./character-counter/component */ \"./node_modules/@material/textfield/character-counter/component.js\");\n/* harmony import */ var _character_counter_foundation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./character-counter/foundation */ \"./node_modules/@material/textfield/character-counter/foundation.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ \"./node_modules/@material/textfield/constants.js\");\n/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./foundation */ \"./node_modules/@material/textfield/foundation.js\");\n/* harmony import */ var _helper_text_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-text/component */ \"./node_modules/@material/textfield/helper-text/component.js\");\n/* harmony import */ var _helper_text_foundation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helper-text/foundation */ \"./node_modules/@material/textfield/helper-text/foundation.js\");\n/* harmony import */ var _icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/component */ \"./node_modules/@material/textfield/icon/component.js\");\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar MDCTextField =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextField, _super);\n\n  function MDCTextField() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  MDCTextField.attachTo = function (root) {\n    return new MDCTextField(root);\n  };\n\n  MDCTextField.prototype.initialize = function (rippleFactory, lineRippleFactory, helperTextFactory, characterCounterFactory, iconFactory, labelFactory, outlineFactory) {\n    if (rippleFactory === void 0) {\n      rippleFactory = function rippleFactory(el, foundation) {\n        return new _material_ripple_component__WEBPACK_IMPORTED_MODULE_1__.MDCRipple(el, foundation);\n      };\n    }\n\n    if (lineRippleFactory === void 0) {\n      lineRippleFactory = function lineRippleFactory(el) {\n        return new _material_line_ripple_component__WEBPACK_IMPORTED_MODULE_2__.MDCLineRipple(el);\n      };\n    }\n\n    if (helperTextFactory === void 0) {\n      helperTextFactory = function helperTextFactory(el) {\n        return new _helper_text_component__WEBPACK_IMPORTED_MODULE_3__.MDCTextFieldHelperText(el);\n      };\n    }\n\n    if (characterCounterFactory === void 0) {\n      characterCounterFactory = function characterCounterFactory(el) {\n        return new _character_counter_component__WEBPACK_IMPORTED_MODULE_4__.MDCTextFieldCharacterCounter(el);\n      };\n    }\n\n    if (iconFactory === void 0) {\n      iconFactory = function iconFactory(el) {\n        return new _icon_component__WEBPACK_IMPORTED_MODULE_5__.MDCTextFieldIcon(el);\n      };\n    }\n\n    if (labelFactory === void 0) {\n      labelFactory = function labelFactory(el) {\n        return new _material_floating_label_component__WEBPACK_IMPORTED_MODULE_6__.MDCFloatingLabel(el);\n      };\n    }\n\n    if (outlineFactory === void 0) {\n      outlineFactory = function outlineFactory(el) {\n        return new _material_notched_outline_component__WEBPACK_IMPORTED_MODULE_7__.MDCNotchedOutline(el);\n      };\n    }\n\n    this.input_ = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.INPUT_SELECTOR);\n    var labelElement = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.LABEL_SELECTOR);\n    this.label_ = labelElement ? labelFactory(labelElement) : null;\n    var lineRippleElement = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.LINE_RIPPLE_SELECTOR);\n    this.lineRipple_ = lineRippleElement ? lineRippleFactory(lineRippleElement) : null;\n    var outlineElement = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.OUTLINE_SELECTOR);\n    this.outline_ = outlineElement ? outlineFactory(outlineElement) : null; // Helper text\n\n    var helperTextStrings = _helper_text_foundation__WEBPACK_IMPORTED_MODULE_9__.MDCTextFieldHelperTextFoundation.strings;\n    var nextElementSibling = this.root.nextElementSibling;\n    var hasHelperLine = nextElementSibling && nextElementSibling.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_8__.cssClasses.HELPER_LINE);\n    var helperTextEl = hasHelperLine && nextElementSibling && nextElementSibling.querySelector(helperTextStrings.ROOT_SELECTOR);\n    this.helperText_ = helperTextEl ? helperTextFactory(helperTextEl) : null; // Character counter\n\n    var characterCounterStrings = _character_counter_foundation__WEBPACK_IMPORTED_MODULE_10__.MDCTextFieldCharacterCounterFoundation.strings;\n    var characterCounterEl = this.root.querySelector(characterCounterStrings.ROOT_SELECTOR); // If character counter is not found in root element search in sibling element.\n\n    if (!characterCounterEl && hasHelperLine && nextElementSibling) {\n      characterCounterEl = nextElementSibling.querySelector(characterCounterStrings.ROOT_SELECTOR);\n    }\n\n    this.characterCounter_ = characterCounterEl ? characterCounterFactory(characterCounterEl) : null; // Leading icon\n\n    var leadingIconEl = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.LEADING_ICON_SELECTOR);\n    this.leadingIcon_ = leadingIconEl ? iconFactory(leadingIconEl) : null; // Trailing icon\n\n    var trailingIconEl = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.TRAILING_ICON_SELECTOR);\n    this.trailingIcon_ = trailingIconEl ? iconFactory(trailingIconEl) : null; // Prefix and Suffix\n\n    this.prefix_ = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.PREFIX_SELECTOR);\n    this.suffix_ = this.root.querySelector(_constants__WEBPACK_IMPORTED_MODULE_8__.strings.SUFFIX_SELECTOR);\n    this.ripple = this.createRipple_(rippleFactory);\n  };\n\n  MDCTextField.prototype.destroy = function () {\n    if (this.ripple) {\n      this.ripple.destroy();\n    }\n\n    if (this.lineRipple_) {\n      this.lineRipple_.destroy();\n    }\n\n    if (this.helperText_) {\n      this.helperText_.destroy();\n    }\n\n    if (this.characterCounter_) {\n      this.characterCounter_.destroy();\n    }\n\n    if (this.leadingIcon_) {\n      this.leadingIcon_.destroy();\n    }\n\n    if (this.trailingIcon_) {\n      this.trailingIcon_.destroy();\n    }\n\n    if (this.label_) {\n      this.label_.destroy();\n    }\n\n    if (this.outline_) {\n      this.outline_.destroy();\n    }\n\n    _super.prototype.destroy.call(this);\n  };\n  /**\n   * Initializes the Text Field's internal state based on the environment's\n   * state.\n   */\n\n\n  MDCTextField.prototype.initialSyncWithDOM = function () {\n    this.disabled = this.input_.disabled;\n  };\n\n  Object.defineProperty(MDCTextField.prototype, \"value\", {\n    get: function get() {\n      return this.foundation.getValue();\n    },\n\n    /**\n     * @param value The value to set on the input.\n     */\n    set: function set(value) {\n      this.foundation.setValue(value);\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"disabled\", {\n    get: function get() {\n      return this.foundation.isDisabled();\n    },\n\n    /**\n     * @param disabled Sets the Text Field disabled or enabled.\n     */\n    set: function set(disabled) {\n      this.foundation.setDisabled(disabled);\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"valid\", {\n    get: function get() {\n      return this.foundation.isValid();\n    },\n\n    /**\n     * @param valid Sets the Text Field valid or invalid.\n     */\n    set: function set(valid) {\n      this.foundation.setValid(valid);\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"required\", {\n    get: function get() {\n      return this.input_.required;\n    },\n\n    /**\n     * @param required Sets the Text Field to required.\n     */\n    set: function set(required) {\n      this.input_.required = required;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"pattern\", {\n    get: function get() {\n      return this.input_.pattern;\n    },\n\n    /**\n     * @param pattern Sets the input element's validation pattern.\n     */\n    set: function set(pattern) {\n      this.input_.pattern = pattern;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"minLength\", {\n    get: function get() {\n      return this.input_.minLength;\n    },\n\n    /**\n     * @param minLength Sets the input element's minLength.\n     */\n    set: function set(minLength) {\n      this.input_.minLength = minLength;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"maxLength\", {\n    get: function get() {\n      return this.input_.maxLength;\n    },\n\n    /**\n     * @param maxLength Sets the input element's maxLength.\n     */\n    set: function set(maxLength) {\n      // Chrome throws exception if maxLength is set to a value less than zero\n      if (maxLength < 0) {\n        this.input_.removeAttribute('maxLength');\n      } else {\n        this.input_.maxLength = maxLength;\n      }\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"min\", {\n    get: function get() {\n      return this.input_.min;\n    },\n\n    /**\n     * @param min Sets the input element's min.\n     */\n    set: function set(min) {\n      this.input_.min = min;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"max\", {\n    get: function get() {\n      return this.input_.max;\n    },\n\n    /**\n     * @param max Sets the input element's max.\n     */\n    set: function set(max) {\n      this.input_.max = max;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"step\", {\n    get: function get() {\n      return this.input_.step;\n    },\n\n    /**\n     * @param step Sets the input element's step.\n     */\n    set: function set(step) {\n      this.input_.step = step;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"helperTextContent\", {\n    /**\n     * Sets the helper text element content.\n     */\n    set: function set(content) {\n      this.foundation.setHelperTextContent(content);\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"leadingIconAriaLabel\", {\n    /**\n     * Sets the aria label of the leading icon.\n     */\n    set: function set(label) {\n      this.foundation.setLeadingIconAriaLabel(label);\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"leadingIconContent\", {\n    /**\n     * Sets the text content of the leading icon.\n     */\n    set: function set(content) {\n      this.foundation.setLeadingIconContent(content);\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"trailingIconAriaLabel\", {\n    /**\n     * Sets the aria label of the trailing icon.\n     */\n    set: function set(label) {\n      this.foundation.setTrailingIconAriaLabel(label);\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"trailingIconContent\", {\n    /**\n     * Sets the text content of the trailing icon.\n     */\n    set: function set(content) {\n      this.foundation.setTrailingIconContent(content);\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"useNativeValidation\", {\n    /**\n     * Enables or disables the use of native validation. Use this for custom validation.\n     * @param useNativeValidation Set this to false to ignore native input validation.\n     */\n    set: function set(useNativeValidation) {\n      this.foundation.setUseNativeValidation(useNativeValidation);\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"prefixText\", {\n    /**\n     * Gets the text content of the prefix, or null if it does not exist.\n     */\n    get: function get() {\n      return this.prefix_ ? this.prefix_.textContent : null;\n    },\n\n    /**\n     * Sets the text content of the prefix, if it exists.\n     */\n    set: function set(prefixText) {\n      if (this.prefix_) {\n        this.prefix_.textContent = prefixText;\n      }\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextField.prototype, \"suffixText\", {\n    /**\n     * Gets the text content of the suffix, or null if it does not exist.\n     */\n    get: function get() {\n      return this.suffix_ ? this.suffix_.textContent : null;\n    },\n\n    /**\n     * Sets the text content of the suffix, if it exists.\n     */\n    set: function set(suffixText) {\n      if (this.suffix_) {\n        this.suffix_.textContent = suffixText;\n      }\n    },\n    enumerable: true,\n    configurable: true\n  });\n  /**\n   * Focuses the input element.\n   */\n\n  MDCTextField.prototype.focus = function () {\n    this.input_.focus();\n  };\n  /**\n   * Recomputes the outline SVG path for the outline element.\n   */\n\n\n  MDCTextField.prototype.layout = function () {\n    var openNotch = this.foundation.shouldFloat;\n    this.foundation.notchOutline(openNotch);\n  };\n\n  MDCTextField.prototype.getDefaultFoundation = function () {\n    // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.\n    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.\n    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n    var adapter = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, this.getRootAdapterMethods_()), this.getInputAdapterMethods_()), this.getLabelAdapterMethods_()), this.getLineRippleAdapterMethods_()), this.getOutlineAdapterMethods_()); // tslint:enable:object-literal-sort-keys\n\n\n    return new _foundation__WEBPACK_IMPORTED_MODULE_11__.MDCTextFieldFoundation(adapter, this.getFoundationMap_());\n  };\n\n  MDCTextField.prototype.getRootAdapterMethods_ = function () {\n    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n\n\n    return {\n      addClass: function addClass(className) {\n        return _this.root.classList.add(className);\n      },\n      removeClass: function removeClass(className) {\n        return _this.root.classList.remove(className);\n      },\n      hasClass: function hasClass(className) {\n        return _this.root.classList.contains(className);\n      },\n      registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {\n        _this.listen(evtType, handler);\n      },\n      deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {\n        _this.unlisten(evtType, handler);\n      },\n      registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {\n        var getAttributesList = function getAttributesList(mutationsList) {\n          return mutationsList.map(function (mutation) {\n            return mutation.attributeName;\n          }).filter(function (attributeName) {\n            return attributeName;\n          });\n        };\n\n        var observer = new MutationObserver(function (mutationsList) {\n          return handler(getAttributesList(mutationsList));\n        });\n        var config = {\n          attributes: true\n        };\n        observer.observe(_this.input_, config);\n        return observer;\n      },\n      deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {\n        observer.disconnect();\n      }\n    }; // tslint:enable:object-literal-sort-keys\n  };\n\n  MDCTextField.prototype.getInputAdapterMethods_ = function () {\n    var _this = this; // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n\n\n    return {\n      getNativeInput: function getNativeInput() {\n        return _this.input_;\n      },\n      setInputAttr: function setInputAttr(attr, value) {\n        _this.input_.setAttribute(attr, value);\n      },\n      removeInputAttr: function removeInputAttr(attr) {\n        _this.input_.removeAttribute(attr);\n      },\n      isFocused: function isFocused() {\n        return document.activeElement === _this.input_;\n      },\n      registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {\n        _this.input_.addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_12__.applyPassive)());\n      },\n      deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {\n        _this.input_.removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_12__.applyPassive)());\n      }\n    }; // tslint:enable:object-literal-sort-keys\n  };\n\n  MDCTextField.prototype.getLabelAdapterMethods_ = function () {\n    var _this = this;\n\n    return {\n      floatLabel: function floatLabel(shouldFloat) {\n        return _this.label_ && _this.label_[\"float\"](shouldFloat);\n      },\n      getLabelWidth: function getLabelWidth() {\n        return _this.label_ ? _this.label_.getWidth() : 0;\n      },\n      hasLabel: function hasLabel() {\n        return Boolean(_this.label_);\n      },\n      shakeLabel: function shakeLabel(shouldShake) {\n        return _this.label_ && _this.label_.shake(shouldShake);\n      },\n      setLabelRequired: function setLabelRequired(isRequired) {\n        return _this.label_ && _this.label_.setRequired(isRequired);\n      }\n    };\n  };\n\n  MDCTextField.prototype.getLineRippleAdapterMethods_ = function () {\n    var _this = this;\n\n    return {\n      activateLineRipple: function activateLineRipple() {\n        if (_this.lineRipple_) {\n          _this.lineRipple_.activate();\n        }\n      },\n      deactivateLineRipple: function deactivateLineRipple() {\n        if (_this.lineRipple_) {\n          _this.lineRipple_.deactivate();\n        }\n      },\n      setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {\n        if (_this.lineRipple_) {\n          _this.lineRipple_.setRippleCenter(normalizedX);\n        }\n      }\n    };\n  };\n\n  MDCTextField.prototype.getOutlineAdapterMethods_ = function () {\n    var _this = this;\n\n    return {\n      closeOutline: function closeOutline() {\n        return _this.outline_ && _this.outline_.closeNotch();\n      },\n      hasOutline: function hasOutline() {\n        return Boolean(_this.outline_);\n      },\n      notchOutline: function notchOutline(labelWidth) {\n        return _this.outline_ && _this.outline_.notch(labelWidth);\n      }\n    };\n  };\n  /**\n   * @return A map of all subcomponents to subfoundations.\n   */\n\n\n  MDCTextField.prototype.getFoundationMap_ = function () {\n    return {\n      characterCounter: this.characterCounter_ ? this.characterCounter_.foundationForTextField : undefined,\n      helperText: this.helperText_ ? this.helperText_.foundationForTextField : undefined,\n      leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundationForTextField : undefined,\n      trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundationForTextField : undefined\n    };\n  };\n\n  MDCTextField.prototype.createRipple_ = function (rippleFactory) {\n    var _this = this;\n\n    var isTextArea = this.root.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_8__.cssClasses.TEXTAREA);\n    var isOutlined = this.root.classList.contains(_constants__WEBPACK_IMPORTED_MODULE_8__.cssClasses.OUTLINED);\n\n    if (isTextArea || isOutlined) {\n      return null;\n    } // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.\n    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.\n    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n\n\n    var adapter = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, _material_ripple_component__WEBPACK_IMPORTED_MODULE_1__.MDCRipple.createAdapter(this)), {\n      isSurfaceActive: function isSurfaceActive() {\n        return _material_dom_ponyfill__WEBPACK_IMPORTED_MODULE_13__.matches(_this.input_, ':active');\n      },\n      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {\n        return _this.input_.addEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_12__.applyPassive)());\n      },\n      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {\n        return _this.input_.removeEventListener(evtType, handler, (0,_material_dom_events__WEBPACK_IMPORTED_MODULE_12__.applyPassive)());\n      }\n    }); // tslint:enable:object-literal-sort-keys\n\n\n    return rippleFactory(this.root, new _material_ripple_foundation__WEBPACK_IMPORTED_MODULE_14__.MDCRippleFoundation(adapter));\n  };\n\n  return MDCTextField;\n}(_material_base_component__WEBPACK_IMPORTED_MODULE_15__.MDCComponent);\n\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/textfield/component.js?");

/***/ }),

/***/ "./node_modules/@material/textfield/constants.js":
/*!*******************************************************!*\
  !*** ./node_modules/@material/textfield/constants.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cssClasses\": () => (/* binding */ cssClasses),\n/* harmony export */   \"strings\": () => (/* binding */ strings),\n/* harmony export */   \"numbers\": () => (/* binding */ numbers),\n/* harmony export */   \"VALIDATION_ATTR_WHITELIST\": () => (/* binding */ VALIDATION_ATTR_WHITELIST),\n/* harmony export */   \"ALWAYS_FLOAT_TYPES\": () => (/* binding */ ALWAYS_FLOAT_TYPES)\n/* harmony export */ });\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\nvar strings = {\n  ARIA_CONTROLS: 'aria-controls',\n  ARIA_DESCRIBEDBY: 'aria-describedby',\n  INPUT_SELECTOR: '.mdc-text-field__input',\n  LABEL_SELECTOR: '.mdc-floating-label',\n  LEADING_ICON_SELECTOR: '.mdc-text-field__icon--leading',\n  LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',\n  OUTLINE_SELECTOR: '.mdc-notched-outline',\n  PREFIX_SELECTOR: '.mdc-text-field__affix--prefix',\n  SUFFIX_SELECTOR: '.mdc-text-field__affix--suffix',\n  TRAILING_ICON_SELECTOR: '.mdc-text-field__icon--trailing'\n};\nvar cssClasses = {\n  DISABLED: 'mdc-text-field--disabled',\n  FOCUSED: 'mdc-text-field--focused',\n  HELPER_LINE: 'mdc-text-field-helper-line',\n  INVALID: 'mdc-text-field--invalid',\n  LABEL_FLOATING: 'mdc-text-field--label-floating',\n  NO_LABEL: 'mdc-text-field--no-label',\n  OUTLINED: 'mdc-text-field--outlined',\n  ROOT: 'mdc-text-field',\n  TEXTAREA: 'mdc-text-field--textarea',\n  WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',\n  WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon'\n};\nvar numbers = {\n  LABEL_SCALE: 0.75\n};\n/**\n * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation\n * under the \"Validation-related attributes\" section.\n */\n\nvar VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];\n/**\n * Label should always float for these types as they show some UI even if value is empty.\n */\n\nvar ALWAYS_FLOAT_TYPES = ['color', 'date', 'datetime-local', 'month', 'range', 'time', 'week'];\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/textfield/constants.js?");

/***/ }),

/***/ "./node_modules/@material/textfield/foundation.js":
/*!********************************************************!*\
  !*** ./node_modules/@material/textfield/foundation.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCTextFieldFoundation\": () => (/* binding */ MDCTextFieldFoundation),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ \"./node_modules/@material/base/foundation.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./node_modules/@material/textfield/constants.js\");\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\nvar POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];\nvar INTERACTION_EVENTS = ['click', 'keydown'];\n\nvar MDCTextFieldFoundation =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldFoundation, _super);\n  /**\n   * @param adapter\n   * @param foundationMap Map from subcomponent names to their subfoundations.\n   */\n\n\n  function MDCTextFieldFoundation(adapter, foundationMap) {\n    if (foundationMap === void 0) {\n      foundationMap = {};\n    }\n\n    var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTextFieldFoundation.defaultAdapter), adapter)) || this;\n\n    _this.isFocused_ = false;\n    _this.receivedUserInput_ = false;\n    _this.isValid_ = true;\n    _this.useNativeValidation_ = true;\n    _this.validateOnValueChange_ = true;\n    _this.helperText_ = foundationMap.helperText;\n    _this.characterCounter_ = foundationMap.characterCounter;\n    _this.leadingIcon_ = foundationMap.leadingIcon;\n    _this.trailingIcon_ = foundationMap.trailingIcon;\n\n    _this.inputFocusHandler_ = function () {\n      return _this.activateFocus();\n    };\n\n    _this.inputBlurHandler_ = function () {\n      return _this.deactivateFocus();\n    };\n\n    _this.inputInputHandler_ = function () {\n      return _this.handleInput();\n    };\n\n    _this.setPointerXOffset_ = function (evt) {\n      return _this.setTransformOrigin(evt);\n    };\n\n    _this.textFieldInteractionHandler_ = function () {\n      return _this.handleTextFieldInteraction();\n    };\n\n    _this.validationAttributeChangeHandler_ = function (attributesList) {\n      return _this.handleValidationAttributeChange(attributesList);\n    };\n\n    return _this;\n  }\n\n  Object.defineProperty(MDCTextFieldFoundation, \"cssClasses\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextFieldFoundation, \"strings\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextFieldFoundation, \"numbers\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.numbers;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextFieldFoundation.prototype, \"shouldAlwaysFloat_\", {\n    get: function get() {\n      var type = this.getNativeInput_().type;\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextFieldFoundation.prototype, \"shouldFloat\", {\n    get: function get() {\n      return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextFieldFoundation.prototype, \"shouldShake\", {\n    get: function get() {\n      return !this.isFocused_ && !this.isValid() && !!this.getValue();\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextFieldFoundation, \"defaultAdapter\", {\n    /**\n     * See {@link MDCTextFieldAdapter} for typing information on parameters and\n     * return types.\n     */\n    get: function get() {\n      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n      return {\n        addClass: function addClass() {\n          return undefined;\n        },\n        removeClass: function removeClass() {\n          return undefined;\n        },\n        hasClass: function hasClass() {\n          return true;\n        },\n        setInputAttr: function setInputAttr() {\n          return undefined;\n        },\n        removeInputAttr: function removeInputAttr() {\n          return undefined;\n        },\n        registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {\n          return undefined;\n        },\n        deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {\n          return undefined;\n        },\n        registerInputInteractionHandler: function registerInputInteractionHandler() {\n          return undefined;\n        },\n        deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {\n          return undefined;\n        },\n        registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {\n          return new MutationObserver(function () {\n            return undefined;\n          });\n        },\n        deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {\n          return undefined;\n        },\n        getNativeInput: function getNativeInput() {\n          return null;\n        },\n        isFocused: function isFocused() {\n          return false;\n        },\n        activateLineRipple: function activateLineRipple() {\n          return undefined;\n        },\n        deactivateLineRipple: function deactivateLineRipple() {\n          return undefined;\n        },\n        setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {\n          return undefined;\n        },\n        shakeLabel: function shakeLabel() {\n          return undefined;\n        },\n        floatLabel: function floatLabel() {\n          return undefined;\n        },\n        setLabelRequired: function setLabelRequired() {\n          return undefined;\n        },\n        hasLabel: function hasLabel() {\n          return false;\n        },\n        getLabelWidth: function getLabelWidth() {\n          return 0;\n        },\n        hasOutline: function hasOutline() {\n          return false;\n        },\n        notchOutline: function notchOutline() {\n          return undefined;\n        },\n        closeOutline: function closeOutline() {\n          return undefined;\n        }\n      }; // tslint:enable:object-literal-sort-keys\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  MDCTextFieldFoundation.prototype.init = function () {\n    var _this = this;\n\n    if (this.adapter.hasLabel() && this.getNativeInput_().required) {\n      this.adapter.setLabelRequired(true);\n    }\n\n    if (this.adapter.isFocused()) {\n      this.inputFocusHandler_();\n    } else if (this.adapter.hasLabel() && this.shouldFloat) {\n      this.notchOutline(true);\n      this.adapter.floatLabel(true);\n      this.styleFloating_(true);\n    }\n\n    this.adapter.registerInputInteractionHandler('focus', this.inputFocusHandler_);\n    this.adapter.registerInputInteractionHandler('blur', this.inputBlurHandler_);\n    this.adapter.registerInputInteractionHandler('input', this.inputInputHandler_);\n    POINTERDOWN_EVENTS.forEach(function (evtType) {\n      _this.adapter.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);\n    });\n    INTERACTION_EVENTS.forEach(function (evtType) {\n      _this.adapter.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);\n    });\n    this.validationObserver_ = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);\n    this.setCharacterCounter_(this.getValue().length);\n  };\n\n  MDCTextFieldFoundation.prototype.destroy = function () {\n    var _this = this;\n\n    this.adapter.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);\n    this.adapter.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);\n    this.adapter.deregisterInputInteractionHandler('input', this.inputInputHandler_);\n    POINTERDOWN_EVENTS.forEach(function (evtType) {\n      _this.adapter.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);\n    });\n    INTERACTION_EVENTS.forEach(function (evtType) {\n      _this.adapter.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);\n    });\n    this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver_);\n  };\n  /**\n   * Handles user interactions with the Text Field.\n   */\n\n\n  MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {\n    var nativeInput = this.adapter.getNativeInput();\n\n    if (nativeInput && nativeInput.disabled) {\n      return;\n    }\n\n    this.receivedUserInput_ = true;\n  };\n  /**\n   * Handles validation attribute changes\n   */\n\n\n  MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {\n    var _this = this;\n\n    attributesList.some(function (attributeName) {\n      if (_constants__WEBPACK_IMPORTED_MODULE_1__.VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {\n        _this.styleValidity_(true);\n\n        _this.adapter.setLabelRequired(_this.getNativeInput_().required);\n\n        return true;\n      }\n\n      return false;\n    });\n\n    if (attributesList.indexOf('maxlength') > -1) {\n      this.setCharacterCounter_(this.getValue().length);\n    }\n  };\n  /**\n   * Opens/closes the notched outline.\n   */\n\n\n  MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {\n    if (!this.adapter.hasOutline() || !this.adapter.hasLabel()) {\n      return;\n    }\n\n    if (openNotch) {\n      var labelWidth = this.adapter.getLabelWidth() * _constants__WEBPACK_IMPORTED_MODULE_1__.numbers.LABEL_SCALE;\n      this.adapter.notchOutline(labelWidth);\n    } else {\n      this.adapter.closeOutline();\n    }\n  };\n  /**\n   * Activates the text field focus state.\n   */\n\n\n  MDCTextFieldFoundation.prototype.activateFocus = function () {\n    this.isFocused_ = true;\n    this.styleFocused_(this.isFocused_);\n    this.adapter.activateLineRipple();\n\n    if (this.adapter.hasLabel()) {\n      this.notchOutline(this.shouldFloat);\n      this.adapter.floatLabel(this.shouldFloat);\n      this.styleFloating_(this.shouldFloat);\n      this.adapter.shakeLabel(this.shouldShake);\n    }\n\n    if (this.helperText_ && (this.helperText_.isPersistent() || !this.helperText_.isValidation() || !this.isValid_)) {\n      this.helperText_.showToScreenReader();\n    }\n  };\n  /**\n   * Sets the line ripple's transform origin, so that the line ripple activate\n   * animation will animate out from the user's click location.\n   */\n\n\n  MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {\n    if (this.isDisabled() || this.adapter.hasOutline()) {\n      return;\n    }\n\n    var touches = evt.touches;\n    var targetEvent = touches ? touches[0] : evt;\n    var targetClientRect = targetEvent.target.getBoundingClientRect();\n    var normalizedX = targetEvent.clientX - targetClientRect.left;\n    this.adapter.setLineRippleTransformOrigin(normalizedX);\n  };\n  /**\n   * Handles input change of text input and text area.\n   */\n\n\n  MDCTextFieldFoundation.prototype.handleInput = function () {\n    this.autoCompleteFocus();\n    this.setCharacterCounter_(this.getValue().length);\n  };\n  /**\n   * Activates the Text Field's focus state in cases when the input value\n   * changes without user input (e.g. programmatically).\n   */\n\n\n  MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {\n    if (!this.receivedUserInput_) {\n      this.activateFocus();\n    }\n  };\n  /**\n   * Deactivates the Text Field's focus state.\n   */\n\n\n  MDCTextFieldFoundation.prototype.deactivateFocus = function () {\n    this.isFocused_ = false;\n    this.adapter.deactivateLineRipple();\n    var isValid = this.isValid();\n    this.styleValidity_(isValid);\n    this.styleFocused_(this.isFocused_);\n\n    if (this.adapter.hasLabel()) {\n      this.notchOutline(this.shouldFloat);\n      this.adapter.floatLabel(this.shouldFloat);\n      this.styleFloating_(this.shouldFloat);\n      this.adapter.shakeLabel(this.shouldShake);\n    }\n\n    if (!this.shouldFloat) {\n      this.receivedUserInput_ = false;\n    }\n  };\n\n  MDCTextFieldFoundation.prototype.getValue = function () {\n    return this.getNativeInput_().value;\n  };\n  /**\n   * @param value The value to set on the input Element.\n   */\n\n\n  MDCTextFieldFoundation.prototype.setValue = function (value) {\n    // Prevent Safari from moving the caret to the end of the input when the\n    // value has not changed.\n    if (this.getValue() !== value) {\n      this.getNativeInput_().value = value;\n    }\n\n    this.setCharacterCounter_(value.length);\n\n    if (this.validateOnValueChange_) {\n      var isValid = this.isValid();\n      this.styleValidity_(isValid);\n    }\n\n    if (this.adapter.hasLabel()) {\n      this.notchOutline(this.shouldFloat);\n      this.adapter.floatLabel(this.shouldFloat);\n      this.styleFloating_(this.shouldFloat);\n\n      if (this.validateOnValueChange_) {\n        this.adapter.shakeLabel(this.shouldShake);\n      }\n    }\n  };\n  /**\n   * @return The custom validity state, if set; otherwise, the result of a\n   *     native validity check.\n   */\n\n\n  MDCTextFieldFoundation.prototype.isValid = function () {\n    return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;\n  };\n  /**\n   * @param isValid Sets the custom validity state of the Text Field.\n   */\n\n\n  MDCTextFieldFoundation.prototype.setValid = function (isValid) {\n    this.isValid_ = isValid;\n    this.styleValidity_(isValid);\n    var shouldShake = !isValid && !this.isFocused_ && !!this.getValue();\n\n    if (this.adapter.hasLabel()) {\n      this.adapter.shakeLabel(shouldShake);\n    }\n  };\n  /**\n   * @param shouldValidate Whether or not validity should be updated on\n   *     value change.\n   */\n\n\n  MDCTextFieldFoundation.prototype.setValidateOnValueChange = function (shouldValidate) {\n    this.validateOnValueChange_ = shouldValidate;\n  };\n  /**\n   * @return Whether or not validity should be updated on value change. `true`\n   *     by default.\n   */\n\n\n  MDCTextFieldFoundation.prototype.getValidateOnValueChange = function () {\n    return this.validateOnValueChange_;\n  };\n  /**\n   * Enables or disables the use of native validation. Use this for custom\n   * validation.\n   * @param useNativeValidation Set this to false to ignore native input\n   *     validation.\n   */\n\n\n  MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {\n    this.useNativeValidation_ = useNativeValidation;\n  };\n\n  MDCTextFieldFoundation.prototype.isDisabled = function () {\n    return this.getNativeInput_().disabled;\n  };\n  /**\n   * @param disabled Sets the text-field disabled or enabled.\n   */\n\n\n  MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {\n    this.getNativeInput_().disabled = disabled;\n    this.styleDisabled_(disabled);\n  };\n  /**\n   * @param content Sets the content of the helper text.\n   */\n\n\n  MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {\n    if (this.helperText_) {\n      this.helperText_.setContent(content);\n    }\n  };\n  /**\n   * Sets the aria label of the leading icon.\n   */\n\n\n  MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {\n    if (this.leadingIcon_) {\n      this.leadingIcon_.setAriaLabel(label);\n    }\n  };\n  /**\n   * Sets the text content of the leading icon.\n   */\n\n\n  MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {\n    if (this.leadingIcon_) {\n      this.leadingIcon_.setContent(content);\n    }\n  };\n  /**\n   * Sets the aria label of the trailing icon.\n   */\n\n\n  MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {\n    if (this.trailingIcon_) {\n      this.trailingIcon_.setAriaLabel(label);\n    }\n  };\n  /**\n   * Sets the text content of the trailing icon.\n   */\n\n\n  MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {\n    if (this.trailingIcon_) {\n      this.trailingIcon_.setContent(content);\n    }\n  };\n  /**\n   * Sets character counter values that shows characters used and the total\n   * character limit.\n   */\n\n\n  MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {\n    if (!this.characterCounter_) {\n      return;\n    }\n\n    var maxLength = this.getNativeInput_().maxLength;\n\n    if (maxLength === -1) {\n      throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');\n    }\n\n    this.characterCounter_.setCounterValue(currentLength, maxLength);\n  };\n  /**\n   * @return True if the Text Field input fails in converting the user-supplied\n   *     value.\n   */\n\n\n  MDCTextFieldFoundation.prototype.isBadInput_ = function () {\n    // The badInput property is not supported in IE 11 💩.\n    return this.getNativeInput_().validity.badInput || false;\n  };\n  /**\n   * @return The result of native validity checking (ValidityState.valid).\n   */\n\n\n  MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {\n    return this.getNativeInput_().validity.valid;\n  };\n  /**\n   * Styles the component based on the validity state.\n   */\n\n\n  MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {\n    var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;\n\n    if (isValid) {\n      this.adapter.removeClass(INVALID);\n    } else {\n      this.adapter.addClass(INVALID);\n    }\n\n    if (this.helperText_) {\n      this.helperText_.setValidity(isValid); // We dynamically set or unset aria-describedby for validation helper text\n      // only, based on whether the field is valid\n\n      var helperTextValidation = this.helperText_.isValidation();\n\n      if (!helperTextValidation) {\n        return;\n      }\n\n      var helperTextVisible = this.helperText_.isVisible();\n      var helperTextId = this.helperText_.getId();\n\n      if (helperTextVisible && helperTextId) {\n        this.adapter.setInputAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_DESCRIBEDBY, helperTextId);\n      } else {\n        this.adapter.removeInputAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_DESCRIBEDBY);\n      }\n    }\n  };\n  /**\n   * Styles the component based on the focused state.\n   */\n\n\n  MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {\n    var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;\n\n    if (isFocused) {\n      this.adapter.addClass(FOCUSED);\n    } else {\n      this.adapter.removeClass(FOCUSED);\n    }\n  };\n  /**\n   * Styles the component based on the disabled state.\n   */\n\n\n  MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {\n    var _a = MDCTextFieldFoundation.cssClasses,\n        DISABLED = _a.DISABLED,\n        INVALID = _a.INVALID;\n\n    if (isDisabled) {\n      this.adapter.addClass(DISABLED);\n      this.adapter.removeClass(INVALID);\n    } else {\n      this.adapter.removeClass(DISABLED);\n    }\n\n    if (this.leadingIcon_) {\n      this.leadingIcon_.setDisabled(isDisabled);\n    }\n\n    if (this.trailingIcon_) {\n      this.trailingIcon_.setDisabled(isDisabled);\n    }\n  };\n  /**\n   * Styles the component based on the label floating state.\n   */\n\n\n  MDCTextFieldFoundation.prototype.styleFloating_ = function (isFloating) {\n    var LABEL_FLOATING = MDCTextFieldFoundation.cssClasses.LABEL_FLOATING;\n\n    if (isFloating) {\n      this.adapter.addClass(LABEL_FLOATING);\n    } else {\n      this.adapter.removeClass(LABEL_FLOATING);\n    }\n  };\n  /**\n   * @return The native text input element from the host environment, or an\n   *     object with the same shape for unit tests.\n   */\n\n\n  MDCTextFieldFoundation.prototype.getNativeInput_ = function () {\n    // this.adapter may be undefined in foundation unit tests. This happens when\n    // testdouble is creating a mock object and invokes the\n    // shouldShake/shouldFloat getters (which in turn call getValue(), which\n    // calls this method) before init() has been called from the MDCTextField\n    // constructor. To work around that issue, we return a dummy object.\n    var nativeInput = this.adapter ? this.adapter.getNativeInput() : null;\n    return nativeInput || {\n      disabled: false,\n      maxLength: -1,\n      required: false,\n      type: 'input',\n      validity: {\n        badInput: false,\n        valid: true\n      },\n      value: ''\n    };\n  };\n\n  return MDCTextFieldFoundation;\n}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation);\n\n // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTextFieldFoundation);\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/textfield/foundation.js?");

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/component.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/component.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCTextFieldHelperText\": () => (/* binding */ MDCTextFieldHelperText)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/component */ \"./node_modules/@material/base/component.js\");\n/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ \"./node_modules/@material/textfield/helper-text/foundation.js\");\n/**\n * @license\n * Copyright 2017 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\nvar MDCTextFieldHelperText =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldHelperText, _super);\n\n  function MDCTextFieldHelperText() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  MDCTextFieldHelperText.attachTo = function (root) {\n    return new MDCTextFieldHelperText(root);\n  };\n\n  Object.defineProperty(MDCTextFieldHelperText.prototype, \"foundationForTextField\", {\n    // Provided for access by MDCTextField component\n    get: function get() {\n      return this.foundation;\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  MDCTextFieldHelperText.prototype.getDefaultFoundation = function () {\n    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.\n    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.\n    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n\n\n    var adapter = {\n      addClass: function addClass(className) {\n        return _this.root.classList.add(className);\n      },\n      removeClass: function removeClass(className) {\n        return _this.root.classList.remove(className);\n      },\n      hasClass: function hasClass(className) {\n        return _this.root.classList.contains(className);\n      },\n      getAttr: function getAttr(attr) {\n        return _this.root.getAttribute(attr);\n      },\n      setAttr: function setAttr(attr, value) {\n        return _this.root.setAttribute(attr, value);\n      },\n      removeAttr: function removeAttr(attr) {\n        return _this.root.removeAttribute(attr);\n      },\n      setContent: function setContent(content) {\n        _this.root.textContent = content;\n      }\n    }; // tslint:enable:object-literal-sort-keys\n\n    return new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTextFieldHelperTextFoundation(adapter);\n  };\n\n  return MDCTextFieldHelperText;\n}(_material_base_component__WEBPACK_IMPORTED_MODULE_2__.MDCComponent);\n\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/textfield/helper-text/component.js?");

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/constants.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/constants.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"strings\": () => (/* binding */ strings),\n/* harmony export */   \"cssClasses\": () => (/* binding */ cssClasses)\n/* harmony export */ });\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\nvar cssClasses = {\n  HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',\n  HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg',\n  ROOT: 'mdc-text-field-helper-text'\n};\nvar strings = {\n  ARIA_HIDDEN: 'aria-hidden',\n  ROLE: 'role',\n  ROOT_SELECTOR: \".\" + cssClasses.ROOT\n};\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/textfield/helper-text/constants.js?");

/***/ }),

/***/ "./node_modules/@material/textfield/helper-text/foundation.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material/textfield/helper-text/foundation.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCTextFieldHelperTextFoundation\": () => (/* binding */ MDCTextFieldHelperTextFoundation),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ \"./node_modules/@material/base/foundation.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./node_modules/@material/textfield/helper-text/constants.js\");\n/**\n * @license\n * Copyright 2017 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\nvar MDCTextFieldHelperTextFoundation =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldHelperTextFoundation, _super);\n\n  function MDCTextFieldHelperTextFoundation(adapter) {\n    return _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTextFieldHelperTextFoundation.defaultAdapter), adapter)) || this;\n  }\n\n  Object.defineProperty(MDCTextFieldHelperTextFoundation, \"cssClasses\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextFieldHelperTextFoundation, \"strings\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextFieldHelperTextFoundation, \"defaultAdapter\", {\n    /**\n     * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.\n     */\n    get: function get() {\n      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n      return {\n        addClass: function addClass() {\n          return undefined;\n        },\n        removeClass: function removeClass() {\n          return undefined;\n        },\n        hasClass: function hasClass() {\n          return false;\n        },\n        getAttr: function getAttr() {\n          return null;\n        },\n        setAttr: function setAttr() {\n          return undefined;\n        },\n        removeAttr: function removeAttr() {\n          return undefined;\n        },\n        setContent: function setContent() {\n          return undefined;\n        }\n      }; // tslint:enable:object-literal-sort-keys\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  MDCTextFieldHelperTextFoundation.prototype.getId = function () {\n    return this.adapter.getAttr('id');\n  };\n\n  MDCTextFieldHelperTextFoundation.prototype.isVisible = function () {\n    return this.adapter.getAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_HIDDEN) !== 'true';\n  };\n  /**\n   * Sets the content of the helper text field.\n   */\n\n\n  MDCTextFieldHelperTextFoundation.prototype.setContent = function (content) {\n    this.adapter.setContent(content);\n  };\n\n  MDCTextFieldHelperTextFoundation.prototype.isPersistent = function () {\n    return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_PERSISTENT);\n  };\n  /**\n   * @param isPersistent Sets the persistency of the helper text.\n   */\n\n\n  MDCTextFieldHelperTextFoundation.prototype.setPersistent = function (isPersistent) {\n    if (isPersistent) {\n      this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_PERSISTENT);\n    } else {\n      this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_PERSISTENT);\n    }\n  };\n  /**\n   * @return whether the helper text acts as an error validation message.\n   */\n\n\n  MDCTextFieldHelperTextFoundation.prototype.isValidation = function () {\n    return this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG);\n  };\n  /**\n   * @param isValidation True to make the helper text act as an error validation message.\n   */\n\n\n  MDCTextFieldHelperTextFoundation.prototype.setValidation = function (isValidation) {\n    if (isValidation) {\n      this.adapter.addClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG);\n    } else {\n      this.adapter.removeClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG);\n    }\n  };\n  /**\n   * Makes the helper text visible to the screen reader.\n   */\n\n\n  MDCTextFieldHelperTextFoundation.prototype.showToScreenReader = function () {\n    this.adapter.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_HIDDEN);\n  };\n  /**\n   * Sets the validity of the helper text based on the input validity.\n   */\n\n\n  MDCTextFieldHelperTextFoundation.prototype.setValidity = function (inputIsValid) {\n    var helperTextIsPersistent = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_PERSISTENT);\n    var helperTextIsValidationMsg = this.adapter.hasClass(_constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses.HELPER_TEXT_VALIDATION_MSG);\n    var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;\n\n    if (validationMsgNeedsDisplay) {\n      this.showToScreenReader();\n      this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ROLE, 'alert');\n    } else {\n      this.adapter.removeAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ROLE);\n    }\n\n    if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {\n      this.hide_();\n    }\n  };\n  /**\n   * Hides the help text from screen readers.\n   */\n\n\n  MDCTextFieldHelperTextFoundation.prototype.hide_ = function () {\n    this.adapter.setAttr(_constants__WEBPACK_IMPORTED_MODULE_1__.strings.ARIA_HIDDEN, 'true');\n  };\n\n  return MDCTextFieldHelperTextFoundation;\n}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation);\n\n // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTextFieldHelperTextFoundation);\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/textfield/helper-text/foundation.js?");

/***/ }),

/***/ "./node_modules/@material/textfield/icon/component.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/component.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCTextFieldIcon\": () => (/* binding */ MDCTextFieldIcon)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/component */ \"./node_modules/@material/base/component.js\");\n/* harmony import */ var _foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foundation */ \"./node_modules/@material/textfield/icon/foundation.js\");\n/**\n * @license\n * Copyright 2017 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\n\nvar MDCTextFieldIcon =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldIcon, _super);\n\n  function MDCTextFieldIcon() {\n    return _super !== null && _super.apply(this, arguments) || this;\n  }\n\n  MDCTextFieldIcon.attachTo = function (root) {\n    return new MDCTextFieldIcon(root);\n  };\n\n  Object.defineProperty(MDCTextFieldIcon.prototype, \"foundationForTextField\", {\n    // Provided for access by MDCTextField component\n    get: function get() {\n      return this.foundation;\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  MDCTextFieldIcon.prototype.getDefaultFoundation = function () {\n    var _this = this; // DO NOT INLINE this variable. For backward compatibility, foundations take a Partial<MDCFooAdapter>.\n    // To ensure we don't accidentally omit any methods, we need a separate, strongly typed adapter variable.\n    // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n\n\n    var adapter = {\n      getAttr: function getAttr(attr) {\n        return _this.root.getAttribute(attr);\n      },\n      setAttr: function setAttr(attr, value) {\n        return _this.root.setAttribute(attr, value);\n      },\n      removeAttr: function removeAttr(attr) {\n        return _this.root.removeAttribute(attr);\n      },\n      setContent: function setContent(content) {\n        _this.root.textContent = content;\n      },\n      registerInteractionHandler: function registerInteractionHandler(evtType, handler) {\n        return _this.listen(evtType, handler);\n      },\n      deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {\n        return _this.unlisten(evtType, handler);\n      },\n      notifyIconAction: function notifyIconAction() {\n        return _this.emit(_foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTextFieldIconFoundation.strings.ICON_EVENT, {}\n        /* evtData */\n        , true\n        /* shouldBubble */\n        );\n      }\n    }; // tslint:enable:object-literal-sort-keys\n\n    return new _foundation__WEBPACK_IMPORTED_MODULE_1__.MDCTextFieldIconFoundation(adapter);\n  };\n\n  return MDCTextFieldIcon;\n}(_material_base_component__WEBPACK_IMPORTED_MODULE_2__.MDCComponent);\n\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/textfield/icon/component.js?");

/***/ }),

/***/ "./node_modules/@material/textfield/icon/constants.js":
/*!************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/constants.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"strings\": () => (/* binding */ strings),\n/* harmony export */   \"cssClasses\": () => (/* binding */ cssClasses)\n/* harmony export */ });\n/**\n * @license\n * Copyright 2016 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\nvar strings = {\n  ICON_EVENT: 'MDCTextField:icon',\n  ICON_ROLE: 'button'\n};\nvar cssClasses = {\n  ROOT: 'mdc-text-field__icon'\n};\n\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/textfield/icon/constants.js?");

/***/ }),

/***/ "./node_modules/@material/textfield/icon/foundation.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material/textfield/icon/foundation.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MDCTextFieldIconFoundation\": () => (/* binding */ MDCTextFieldIconFoundation),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _material_base_foundation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/base/foundation */ \"./node_modules/@material/base/foundation.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./node_modules/@material/textfield/icon/constants.js\");\n/**\n * @license\n * Copyright 2017 Google Inc.\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n\n\nvar INTERACTION_EVENTS = ['click', 'keydown'];\n\nvar MDCTextFieldIconFoundation =\n/** @class */\nfunction (_super) {\n  (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(MDCTextFieldIconFoundation, _super);\n\n  function MDCTextFieldIconFoundation(adapter) {\n    var _this = _super.call(this, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__assign)({}, MDCTextFieldIconFoundation.defaultAdapter), adapter)) || this;\n\n    _this.savedTabIndex_ = null;\n\n    _this.interactionHandler_ = function (evt) {\n      return _this.handleInteraction(evt);\n    };\n\n    return _this;\n  }\n\n  Object.defineProperty(MDCTextFieldIconFoundation, \"strings\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.strings;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextFieldIconFoundation, \"cssClasses\", {\n    get: function get() {\n      return _constants__WEBPACK_IMPORTED_MODULE_1__.cssClasses;\n    },\n    enumerable: true,\n    configurable: true\n  });\n  Object.defineProperty(MDCTextFieldIconFoundation, \"defaultAdapter\", {\n    /**\n     * See {@link MDCTextFieldIconAdapter} for typing information on parameters and return types.\n     */\n    get: function get() {\n      // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.\n      return {\n        getAttr: function getAttr() {\n          return null;\n        },\n        setAttr: function setAttr() {\n          return undefined;\n        },\n        removeAttr: function removeAttr() {\n          return undefined;\n        },\n        setContent: function setContent() {\n          return undefined;\n        },\n        registerInteractionHandler: function registerInteractionHandler() {\n          return undefined;\n        },\n        deregisterInteractionHandler: function deregisterInteractionHandler() {\n          return undefined;\n        },\n        notifyIconAction: function notifyIconAction() {\n          return undefined;\n        }\n      }; // tslint:enable:object-literal-sort-keys\n    },\n    enumerable: true,\n    configurable: true\n  });\n\n  MDCTextFieldIconFoundation.prototype.init = function () {\n    var _this = this;\n\n    this.savedTabIndex_ = this.adapter.getAttr('tabindex');\n    INTERACTION_EVENTS.forEach(function (evtType) {\n      _this.adapter.registerInteractionHandler(evtType, _this.interactionHandler_);\n    });\n  };\n\n  MDCTextFieldIconFoundation.prototype.destroy = function () {\n    var _this = this;\n\n    INTERACTION_EVENTS.forEach(function (evtType) {\n      _this.adapter.deregisterInteractionHandler(evtType, _this.interactionHandler_);\n    });\n  };\n\n  MDCTextFieldIconFoundation.prototype.setDisabled = function (disabled) {\n    if (!this.savedTabIndex_) {\n      return;\n    }\n\n    if (disabled) {\n      this.adapter.setAttr('tabindex', '-1');\n      this.adapter.removeAttr('role');\n    } else {\n      this.adapter.setAttr('tabindex', this.savedTabIndex_);\n      this.adapter.setAttr('role', _constants__WEBPACK_IMPORTED_MODULE_1__.strings.ICON_ROLE);\n    }\n  };\n\n  MDCTextFieldIconFoundation.prototype.setAriaLabel = function (label) {\n    this.adapter.setAttr('aria-label', label);\n  };\n\n  MDCTextFieldIconFoundation.prototype.setContent = function (content) {\n    this.adapter.setContent(content);\n  };\n\n  MDCTextFieldIconFoundation.prototype.handleInteraction = function (evt) {\n    var isEnterKey = evt.key === 'Enter' || evt.keyCode === 13;\n\n    if (evt.type === 'click' || isEnterKey) {\n      evt.preventDefault(); // stop click from causing host label to focus\n      // input\n\n      this.adapter.notifyIconAction();\n    }\n  };\n\n  return MDCTextFieldIconFoundation;\n}(_material_base_foundation__WEBPACK_IMPORTED_MODULE_2__.MDCFoundation);\n\n // tslint:disable-next-line:no-default-export Needed for backward compatibility with MDC Web v0.44.0 and earlier.\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDCTextFieldIconFoundation);\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/@material/textfield/icon/foundation.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js ***!
  \*******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n/* eslint-env browser */\n\n/*\n  eslint-disable\n  no-console,\n  func-names\n*/\n\nvar normalizeUrl = __webpack_require__(/*! ./normalize-url */ \"./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js\");\n\nvar srcByModuleId = Object.create(null);\nvar noDocument = typeof document === 'undefined';\nvar forEach = Array.prototype.forEach;\n\nfunction debounce(fn, time) {\n  var timeout = 0;\n  return function () {\n    var self = this; // eslint-disable-next-line prefer-rest-params\n\n    var args = arguments;\n\n    var functionCall = function functionCall() {\n      return fn.apply(self, args);\n    };\n\n    clearTimeout(timeout);\n    timeout = setTimeout(functionCall, time);\n  };\n}\n\nfunction noop() {}\n\nfunction getCurrentScriptUrl(moduleId) {\n  var src = srcByModuleId[moduleId];\n\n  if (!src) {\n    if (document.currentScript) {\n      src = document.currentScript.src;\n    } else {\n      var scripts = document.getElementsByTagName('script');\n      var lastScriptTag = scripts[scripts.length - 1];\n\n      if (lastScriptTag) {\n        src = lastScriptTag.src;\n      }\n    }\n\n    srcByModuleId[moduleId] = src;\n  }\n\n  return function (fileMap) {\n    if (!src) {\n      return null;\n    }\n\n    var splitResult = src.split(/([^\\\\/]+)\\.js$/);\n    var filename = splitResult && splitResult[1];\n\n    if (!filename) {\n      return [src.replace('.js', '.css')];\n    }\n\n    if (!fileMap) {\n      return [src.replace('.js', '.css')];\n    }\n\n    return fileMap.split(',').map(function (mapRule) {\n      var reg = new RegExp(\"\".concat(filename, \"\\\\.js$\"), 'g');\n      return normalizeUrl(src.replace(reg, \"\".concat(mapRule.replace(/{fileName}/g, filename), \".css\")));\n    });\n  };\n}\n\nfunction updateCss(el, url) {\n  if (!url) {\n    if (!el.href) {\n      return;\n    } // eslint-disable-next-line\n\n\n    url = el.href.split('?')[0];\n  }\n\n  if (!isUrlRequest(url)) {\n    return;\n  }\n\n  if (el.isLoaded === false) {\n    // We seem to be about to replace a css link that hasn't loaded yet.\n    // We're probably changing the same file more than once.\n    return;\n  }\n\n  if (!url || !(url.indexOf('.css') > -1)) {\n    return;\n  } // eslint-disable-next-line no-param-reassign\n\n\n  el.visited = true;\n  var newEl = el.cloneNode();\n  newEl.isLoaded = false;\n  newEl.addEventListener('load', function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.addEventListener('error', function () {\n    if (newEl.isLoaded) {\n      return;\n    }\n\n    newEl.isLoaded = true;\n    el.parentNode.removeChild(el);\n  });\n  newEl.href = \"\".concat(url, \"?\").concat(Date.now());\n\n  if (el.nextSibling) {\n    el.parentNode.insertBefore(newEl, el.nextSibling);\n  } else {\n    el.parentNode.appendChild(newEl);\n  }\n}\n\nfunction getReloadUrl(href, src) {\n  var ret; // eslint-disable-next-line no-param-reassign\n\n  href = normalizeUrl(href, {\n    stripWWW: false\n  }); // eslint-disable-next-line array-callback-return\n\n  src.some(function (url) {\n    if (href.indexOf(src) > -1) {\n      ret = url;\n    }\n  });\n  return ret;\n}\n\nfunction reloadStyle(src) {\n  if (!src) {\n    return false;\n  }\n\n  var elements = document.querySelectorAll('link');\n  var loaded = false;\n  forEach.call(elements, function (el) {\n    if (!el.href) {\n      return;\n    }\n\n    var url = getReloadUrl(el.href, src);\n\n    if (!isUrlRequest(url)) {\n      return;\n    }\n\n    if (el.visited === true) {\n      return;\n    }\n\n    if (url) {\n      updateCss(el, url);\n      loaded = true;\n    }\n  });\n  return loaded;\n}\n\nfunction reloadAll() {\n  var elements = document.querySelectorAll('link');\n  forEach.call(elements, function (el) {\n    if (el.visited === true) {\n      return;\n    }\n\n    updateCss(el);\n  });\n}\n\nfunction isUrlRequest(url) {\n  // An URL is not an request if\n  // It is not http or https\n  if (!/^https?:/i.test(url)) {\n    return false;\n  }\n\n  return true;\n}\n\nmodule.exports = function (moduleId, options) {\n  if (noDocument) {\n    console.log('no window.document found, will not HMR CSS');\n    return noop;\n  }\n\n  var getScriptSrc = getCurrentScriptUrl(moduleId);\n\n  function update() {\n    var src = getScriptSrc(options.filename);\n    var reloaded = reloadStyle(src);\n\n    if (options.locals) {\n      console.log('[HMR] Detected local css modules. Reload all css');\n      reloadAll();\n      return;\n    }\n\n    if (reloaded) {\n      console.log('[HMR] css reload %s', src.join(' '));\n    } else {\n      console.log('[HMR] Reload all css');\n      reloadAll();\n    }\n  }\n\n  return debounce(update, 50);\n};\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js?");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js":
/*!************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n/* eslint-disable */\n\nfunction normalizeUrl(pathComponents) {\n  return pathComponents.reduce(function (accumulator, item) {\n    switch (item) {\n      case '..':\n        accumulator.pop();\n        break;\n\n      case '.':\n        break;\n\n      default:\n        accumulator.push(item);\n    }\n\n    return accumulator;\n  }, []).join('/');\n}\n\nmodule.exports = function (urlString) {\n  urlString = urlString.trim();\n\n  if (/^data:/i.test(urlString)) {\n    return urlString;\n  }\n\n  var protocol = urlString.indexOf('//') !== -1 ? urlString.split('//')[0] + '//' : '';\n  var components = urlString.replace(new RegExp(protocol, 'i'), '').split('/');\n  var host = components[0].toLowerCase().replace(/\\.$/, '');\n  components[0] = '';\n  var path = normalizeUrl(components);\n  return protocol + host + path;\n};\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/mini-css-extract-plugin/dist/hmr/normalize-url.js?");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__extends\": () => (/* binding */ __extends),\n/* harmony export */   \"__assign\": () => (/* binding */ _assign),\n/* harmony export */   \"__rest\": () => (/* binding */ __rest),\n/* harmony export */   \"__decorate\": () => (/* binding */ __decorate),\n/* harmony export */   \"__param\": () => (/* binding */ __param),\n/* harmony export */   \"__metadata\": () => (/* binding */ __metadata),\n/* harmony export */   \"__awaiter\": () => (/* binding */ __awaiter),\n/* harmony export */   \"__generator\": () => (/* binding */ __generator),\n/* harmony export */   \"__createBinding\": () => (/* binding */ __createBinding),\n/* harmony export */   \"__exportStar\": () => (/* binding */ __exportStar),\n/* harmony export */   \"__values\": () => (/* binding */ __values),\n/* harmony export */   \"__read\": () => (/* binding */ __read),\n/* harmony export */   \"__spread\": () => (/* binding */ __spread),\n/* harmony export */   \"__spreadArrays\": () => (/* binding */ __spreadArrays),\n/* harmony export */   \"__await\": () => (/* binding */ __await),\n/* harmony export */   \"__asyncGenerator\": () => (/* binding */ __asyncGenerator),\n/* harmony export */   \"__asyncDelegator\": () => (/* binding */ __asyncDelegator),\n/* harmony export */   \"__asyncValues\": () => (/* binding */ __asyncValues),\n/* harmony export */   \"__makeTemplateObject\": () => (/* binding */ __makeTemplateObject),\n/* harmony export */   \"__importStar\": () => (/* binding */ __importStar),\n/* harmony export */   \"__importDefault\": () => (/* binding */ __importDefault),\n/* harmony export */   \"__classPrivateFieldGet\": () => (/* binding */ __classPrivateFieldGet),\n/* harmony export */   \"__classPrivateFieldSet\": () => (/* binding */ __classPrivateFieldSet)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\n\n/* global Reflect, Promise */\nvar _extendStatics = function extendStatics(d, b) {\n  _extendStatics = Object.setPrototypeOf || {\n    __proto__: []\n  } instanceof Array && function (d, b) {\n    d.__proto__ = b;\n  } || function (d, b) {\n    for (var p in b) {\n      if (b.hasOwnProperty(p)) d[p] = b[p];\n    }\n  };\n\n  return _extendStatics(d, b);\n};\n\nfunction __extends(d, b) {\n  _extendStatics(d, b);\n\n  function __() {\n    this.constructor = d;\n  }\n\n  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n}\n\nvar _assign = function __assign() {\n  _assign = Object.assign || function __assign(t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n\n    return t;\n  };\n\n  return _assign.apply(this, arguments);\n};\n\n\nfunction __rest(s, e) {\n  var t = {};\n\n  for (var p in s) {\n    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];\n  }\n\n  if (s != null && typeof Object.getOwnPropertySymbols === \"function\") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\n    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];\n  }\n  return t;\n}\nfunction __decorate(decorators, target, key, desc) {\n  var c = arguments.length,\n      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,\n      d;\n  if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {\n    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n  }\n  return c > 3 && r && Object.defineProperty(target, key, r), r;\n}\nfunction __param(paramIndex, decorator) {\n  return function (target, key) {\n    decorator(target, key, paramIndex);\n  };\n}\nfunction __metadata(metadataKey, metadataValue) {\n  if ((typeof Reflect === \"undefined\" ? \"undefined\" : _typeof(Reflect)) === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\n}\nfunction __awaiter(thisArg, _arguments, P, generator) {\n  function adopt(value) {\n    return value instanceof P ? value : new P(function (resolve) {\n      resolve(value);\n    });\n  }\n\n  return new (P || (P = Promise))(function (resolve, reject) {\n    function fulfilled(value) {\n      try {\n        step(generator.next(value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function rejected(value) {\n      try {\n        step(generator[\"throw\"](value));\n      } catch (e) {\n        reject(e);\n      }\n    }\n\n    function step(result) {\n      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);\n    }\n\n    step((generator = generator.apply(thisArg, _arguments || [])).next());\n  });\n}\nfunction __generator(thisArg, body) {\n  var _ = {\n    label: 0,\n    sent: function sent() {\n      if (t[0] & 1) throw t[1];\n      return t[1];\n    },\n    trys: [],\n    ops: []\n  },\n      f,\n      y,\n      t,\n      g;\n  return g = {\n    next: verb(0),\n    \"throw\": verb(1),\n    \"return\": verb(2)\n  }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function () {\n    return this;\n  }), g;\n\n  function verb(n) {\n    return function (v) {\n      return step([n, v]);\n    };\n  }\n\n  function step(op) {\n    if (f) throw new TypeError(\"Generator is already executing.\");\n\n    while (_) {\n      try {\n        if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n        if (y = 0, t) op = [op[0] & 2, t.value];\n\n        switch (op[0]) {\n          case 0:\n          case 1:\n            t = op;\n            break;\n\n          case 4:\n            _.label++;\n            return {\n              value: op[1],\n              done: false\n            };\n\n          case 5:\n            _.label++;\n            y = op[1];\n            op = [0];\n            continue;\n\n          case 7:\n            op = _.ops.pop();\n\n            _.trys.pop();\n\n            continue;\n\n          default:\n            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {\n              _ = 0;\n              continue;\n            }\n\n            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {\n              _.label = op[1];\n              break;\n            }\n\n            if (op[0] === 6 && _.label < t[1]) {\n              _.label = t[1];\n              t = op;\n              break;\n            }\n\n            if (t && _.label < t[2]) {\n              _.label = t[2];\n\n              _.ops.push(op);\n\n              break;\n            }\n\n            if (t[2]) _.ops.pop();\n\n            _.trys.pop();\n\n            continue;\n        }\n\n        op = body.call(thisArg, _);\n      } catch (e) {\n        op = [6, e];\n        y = 0;\n      } finally {\n        f = t = 0;\n      }\n    }\n\n    if (op[0] & 5) throw op[1];\n    return {\n      value: op[0] ? op[1] : void 0,\n      done: true\n    };\n  }\n}\nfunction __createBinding(o, m, k, k2) {\n  if (k2 === undefined) k2 = k;\n  o[k2] = m[k];\n}\nfunction __exportStar(m, exports) {\n  for (var p in m) {\n    if (p !== \"default\" && !exports.hasOwnProperty(p)) exports[p] = m[p];\n  }\n}\nfunction __values(o) {\n  var s = typeof Symbol === \"function\" && Symbol.iterator,\n      m = s && o[s],\n      i = 0;\n  if (m) return m.call(o);\n  if (o && typeof o.length === \"number\") return {\n    next: function next() {\n      if (o && i >= o.length) o = void 0;\n      return {\n        value: o && o[i++],\n        done: !o\n      };\n    }\n  };\n  throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n}\nfunction __read(o, n) {\n  var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n  if (!m) return o;\n  var i = m.call(o),\n      r,\n      ar = [],\n      e;\n\n  try {\n    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {\n      ar.push(r.value);\n    }\n  } catch (error) {\n    e = {\n      error: error\n    };\n  } finally {\n    try {\n      if (r && !r.done && (m = i[\"return\"])) m.call(i);\n    } finally {\n      if (e) throw e.error;\n    }\n  }\n\n  return ar;\n}\nfunction __spread() {\n  for (var ar = [], i = 0; i < arguments.length; i++) {\n    ar = ar.concat(__read(arguments[i]));\n  }\n\n  return ar;\n}\nfunction __spreadArrays() {\n  for (var s = 0, i = 0, il = arguments.length; i < il; i++) {\n    s += arguments[i].length;\n  }\n\n  for (var r = Array(s), k = 0, i = 0; i < il; i++) {\n    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {\n      r[k] = a[j];\n    }\n  }\n\n  return r;\n}\n;\nfunction __await(v) {\n  return this instanceof __await ? (this.v = v, this) : new __await(v);\n}\nfunction __asyncGenerator(thisArg, _arguments, generator) {\n  if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\n  var g = generator.apply(thisArg, _arguments || []),\n      i,\n      q = [];\n  return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () {\n    return this;\n  }, i;\n\n  function verb(n) {\n    if (g[n]) i[n] = function (v) {\n      return new Promise(function (a, b) {\n        q.push([n, v, a, b]) > 1 || resume(n, v);\n      });\n    };\n  }\n\n  function resume(n, v) {\n    try {\n      step(g[n](v));\n    } catch (e) {\n      settle(q[0][3], e);\n    }\n  }\n\n  function step(r) {\n    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);\n  }\n\n  function fulfill(value) {\n    resume(\"next\", value);\n  }\n\n  function reject(value) {\n    resume(\"throw\", value);\n  }\n\n  function settle(f, v) {\n    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);\n  }\n}\nfunction __asyncDelegator(o) {\n  var i, p;\n  return i = {}, verb(\"next\"), verb(\"throw\", function (e) {\n    throw e;\n  }), verb(\"return\"), i[Symbol.iterator] = function () {\n    return this;\n  }, i;\n\n  function verb(n, f) {\n    i[n] = o[n] ? function (v) {\n      return (p = !p) ? {\n        value: __await(o[n](v)),\n        done: n === \"return\"\n      } : f ? f(v) : v;\n    } : f;\n  }\n}\nfunction __asyncValues(o) {\n  if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\n  var m = o[Symbol.asyncIterator],\n      i;\n  return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () {\n    return this;\n  }, i);\n\n  function verb(n) {\n    i[n] = o[n] && function (v) {\n      return new Promise(function (resolve, reject) {\n        v = o[n](v), settle(resolve, reject, v.done, v.value);\n      });\n    };\n  }\n\n  function settle(resolve, reject, d, v) {\n    Promise.resolve(v).then(function (v) {\n      resolve({\n        value: v,\n        done: d\n      });\n    }, reject);\n  }\n}\nfunction __makeTemplateObject(cooked, raw) {\n  if (Object.defineProperty) {\n    Object.defineProperty(cooked, \"raw\", {\n      value: raw\n    });\n  } else {\n    cooked.raw = raw;\n  }\n\n  return cooked;\n}\n;\nfunction __importStar(mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  }\n  result[\"default\"] = mod;\n  return result;\n}\nfunction __importDefault(mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n}\nfunction __classPrivateFieldGet(receiver, privateMap) {\n  if (!privateMap.has(receiver)) {\n    throw new TypeError(\"attempted to get private field on non-instance\");\n  }\n\n  return privateMap.get(receiver);\n}\nfunction __classPrivateFieldSet(receiver, privateMap, value) {\n  if (!privateMap.has(receiver)) {\n    throw new TypeError(\"attempted to set private field on non-instance\");\n  }\n\n  privateMap.set(receiver, value);\n  return value;\n}\n\n//# sourceURL=webpack://a3-boilerplate/./node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _material_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/ripple */ \"./node_modules/@material/ripple/component.js\");\n/* harmony import */ var _material_textfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/textfield */ \"./node_modules/@material/textfield/component.js\");\n/* harmony import */ var _material_textfield_character_counter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/textfield/character-counter */ \"./node_modules/@material/textfield/character-counter/component.js\");\n/* harmony import */ var _material_textfield_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/textfield/icon */ \"./node_modules/@material/textfield/icon/component.js\");\n//\n// Initialize material design components\n//\n\n\n\n // Buttons Ripple\n\nvar buttonEls = Array.from(document.querySelectorAll('.mdc-button'));\nbuttonEls.forEach(function (el) {\n  return new _material_ripple__WEBPACK_IMPORTED_MODULE_0__.MDCRipple(el);\n});\nvar iconButtons = Array.from(document.querySelectorAll('.mdc-icon-button'));\niconButtons.forEach(function (el) {\n  return new _material_ripple__WEBPACK_IMPORTED_MODULE_0__.MDCRipple(el);\n}); // Text field\n\nvar textFields = Array.from(document.querySelectorAll('.mdc-text-field'));\ntextFields.forEach(function (el) {\n  return new _material_textfield__WEBPACK_IMPORTED_MODULE_1__.MDCTextField(el);\n}); // character counts\n\nvar characterCounters = Array.from(document.querySelectorAll('.mdc-text-field-character-counter'));\ncharacterCounters.forEach(function (el) {\n  return new _material_textfield_character_counter__WEBPACK_IMPORTED_MODULE_2__.MDCTextFieldCharacterCounter(el);\n}); // icons\n\nvar textIcons = Array.from(document.querySelectorAll('.mdc-text-field-icon'));\ntextIcons.forEach(function (el) {\n  return new _material_textfield_icon__WEBPACK_IMPORTED_MODULE_3__.MDCTextFieldIcon(el);\n});\n\n//# sourceURL=webpack://a3-boilerplate/./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n    if(true) {\n      // 1615648451417\n      var cssReload = __webpack_require__(/*! ./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ \"./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js\")(module.id, {\"locals\":false});\n      module.hot.dispose(cssReload);\n      module.hot.accept(undefined, cssReload);\n    }\n  \n\n//# sourceURL=webpack://a3-boilerplate/./src/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("ffeaa775132d44a4011e")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "a3-boilerplate:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "http://localhost:9002/wp/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		var createStylesheet = (chunkId, fullhref, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + realHref + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 			document.head.appendChild(linkTag);
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				const oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatea3_boilerplate"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// no jsonp function
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;