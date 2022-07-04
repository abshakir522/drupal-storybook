/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var TypeError = global.TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var String = global.String;
var TypeError = global.TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw TypeError(String(argument) + ' is not an object');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $forEach = (__webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach);
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");

var push = uncurryThis([].push);

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_REJECT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that);
    var length = lengthOfArrayLike(self);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push(target, value);      // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push(target, value);      // filterReject
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterReject` method
  // https://github.com/tc39/proposal-array-filtering
  filterReject: createMethod(7)
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-constructor.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-constructor.js ***!
  \*********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isConstructor = __webpack_require__(/*! ../internals/is-constructor */ "./node_modules/core-js/internals/is-constructor.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');
var Array = global.Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arraySpeciesConstructor = __webpack_require__(/*! ../internals/array-species-constructor */ "./node_modules/core-js/internals/array-species-constructor.js");

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/classof.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classofRaw = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var Object = global.Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ (function(module) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "./node_modules/core-js/internals/dom-token-list-prototype.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/dom-token-list-prototype.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// in old WebKit versions, `element.classList` is not an instance of global `DOMTokenList`
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

var classList = documentCreateElement('span').classList;
var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;

module.exports = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");

var bind = uncurryThis(uncurryThis.bind);

// optional / simple context binding
module.exports = function (fn, that) {
  aCallable(fn);
  return that === undefined ? fn : bind ? bind(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ (function(module) {

var call = Function.prototype.call;

module.exports = call.bind ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ (function(module) {

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var callBind = bind && bind.bind(call);

module.exports = bind ? function (fn) {
  return fn && callBind(call, fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ (function(module) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var Object = global.Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) == 'Array';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ (function(module) {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-constructor.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/is-constructor.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec = uncurryThis(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function (argument) {
  if (!isCallable(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function (argument) {
  if (!isCallable(argument)) return false;
  switch (classof(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
    // we can't check .prototype since constructors produced by .bind haven't it
  } return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
};

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
module.exports = !construct || fails(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var Object = global.Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, Object(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");

var TypeError = global.TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/core-js/internals/object-to-string.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/object-to-string.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var classof = __webpack_require__(/*! ../internals/classof */ "./node_modules/core-js/internals/classof.js");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var TypeError = global.TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").CONFIGURABLE);

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== undefined ? options.name : key;
  var state;
  if (isCallable(value)) {
    if (String(name).slice(0, 7) === 'Symbol(') {
      name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      createNonEnumerableProperty(value, 'name', name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var TypeError = global.TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var setGlobal = __webpack_require__(/*! ../internals/set-global */ "./node_modules/core-js/internals/set-global.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.19.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ (function(module) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- safe
  return number !== number || number === 0 ? 0 : (number > 0 ? floor : ceil)(number);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var Object = global.Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TypeError = global.TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-string-tag-support.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/to-string-tag-support.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

var String = global.String;

module.exports = function (argument) {
  try {
    return String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.to-string.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.to-string.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__(/*! ../internals/to-string-tag-support */ "./node_modules/core-js/internals/to-string-tag-support.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var toString = __webpack_require__(/*! ../internals/object-to-string */ "./node_modules/core-js/internals/object-to-string.js");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(global[COLLECTION_NAME] && global[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*******************************************************!*\
  !*** ./source/03-components/wachs/stepper/stepper.js ***!
  \*******************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);



/* eslint-disable */

/******/
(function (modules) {
  // webpackBootstrap

  /******/
  // The module cache

  /******/
  var installedModules = {};
  /******/
  // The require function

  /******/

  function __nested_webpack_require_310__(moduleId) {
    /******/
    // Check if module is in cache

    /******/
    if (installedModules[moduleId])
      /******/
      return installedModules[moduleId].exports;
    /******/
    // Create a new module (and put it into the cache)

    /******/

    var module = installedModules[moduleId] = {
      /******/
      exports: {},

      /******/
      id: moduleId,

      /******/
      loaded: false
      /******/

    };
    /******/
    // Execute the module function

    /******/

    modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_310__);
    /******/
    // Flag the module as loaded

    /******/

    module.loaded = true;
    /******/
    // Return the exports of the module

    /******/

    return module.exports;
    /******/
  }
  /******/
  // expose the modules object (__webpack_modules__)

  /******/


  __nested_webpack_require_310__.m = modules;
  /******/
  // expose the module cache

  /******/

  __nested_webpack_require_310__.c = installedModules;
  /******/
  // __webpack_public_path__

  /******/

  __nested_webpack_require_310__.p = "";
  /******/
  // Load entry module and return exports

  /******/

  return __nested_webpack_require_310__(0);
  /******/
}
/************************************************************************/

/******/
)([
/* 0 */

/***/
function (module, exports) {
  'use strict';
  /**
   * MDL Stepper - A library that implements to the Material Design Lite (MDL) a polyfill for stepper
   * component specified by Material Design.
   * @version v1.1.6
   * @author Alexandre Thebaldi <ahlechandre@gmail.com>.
   * @link https://github.com/ahlechandre/mdl-stepper
   */

  (function () {
    'use strict';
    /**
     * Class constructor for Stepper MDL component.
     * Implements MDL component design pattern defined at:
     * https://github.com/jasonmayes/mdl-component-design-pattern
     *
     * @constructor
     * @param {HTMLElement} element The element that will be upgraded.
     */

    function MaterialStepper(element) {
      this.element_ = element; // initialize instance.

      this.init();
    }

    window.MaterialStepper = MaterialStepper;
    /**
     * Store properties of stepper.
     * @private
     */

    MaterialStepper.prototype.Stepper_ = {};
    /**
     * Get properties of stepper.
     * @return {Object}
     * @private
     */

    MaterialStepper.prototype.getStepper_ = function () {
      return {
        isLinear: this.element_.classList.contains(this.CssClasses_.STEPPER_LINEAR),
        hasFeedback: this.element_.classList.contains(this.CssClasses_.STEPPER_FEEDBACK)
      };
    };
    /**
     * Store strings for steps states.
     * @enum {string}
     * @private
     */


    MaterialStepper.prototype.StepState_ = {
      COMPLETED: 'completed',
      ERROR: 'error',
      NORMAL: 'normal'
    };
    /**
     * Store strings for dataset attributes defined by this component that are used for
     * JavaScript custom events.
     *
     * @enum {string}
     * @private
     */

    MaterialStepper.prototype.DatasetAttributes_ = {
      CONTINUE: 'stepper-next',
      CANCEL: 'stepper-cancel',
      SKIP: 'stepper-skip',
      BACK: 'stepper-back'
    };
    /**
     * Issue: https://github.com/ahlechandre/mdl-stepper/issues/14
     * Returns a custom event object
     * @param {string} evtName The name/type of custom event to create.
     * @param {bool} bubble If event is bubbleable.
     * @param {bool} cancel If event is cancelable.
     * @returns {Event}
     */

    MaterialStepper.prototype.defineCustomEvent = function (evtName, bubble, cancel) {
      var ev;

      if ('CustomEvent' in window && typeof window.CustomEvent === 'function') {
        ev = new Event(evtName, {
          bubbles: bubble,
          cancelable: cancel
        });
      } else {
        ev = document.createEvent('Events');
        ev.initEvent(evtName, bubble, cancel);
      }

      return ev;
    };
    /**
     * Store the custom events applieds to the steps and stepper.
     *
     * @private
     */


    MaterialStepper.prototype.CustomEvents_ = {
      onstepnext: MaterialStepper.prototype.defineCustomEvent('onstepnext', true, true),
      onstepcancel: MaterialStepper.prototype.defineCustomEvent('onstepcancel', true, true),
      onstepskip: MaterialStepper.prototype.defineCustomEvent('onstepskip', true, true),
      onstepback: MaterialStepper.prototype.defineCustomEvent('onstepback', true, true),
      onstepcomplete: MaterialStepper.prototype.defineCustomEvent('onstepcomplete', true, true),
      onsteperror: MaterialStepper.prototype.defineCustomEvent('onsteperror', true, true),
      onsteppercomplete: MaterialStepper.prototype.defineCustomEvent('onsteppercomplete', true, true)
    };
    /**
     * Store strings for class names defined by this component that are used in
     * JavaScript. This allows us to simply change it in one place should we
     * decide to modify at a later date.
     *
     * @enum {string}
     * @private
     */

    MaterialStepper.prototype.CssClasses_ = {
      BUTTON_JS: 'mdl-js-button',
      STEPPER_LINEAR: 'mdl-stepper--linear',
      STEPPER_FEEDBACK: 'mdl-stepper--feedback',
      STEP_COMPLETED: 'mdl-step--completed',
      STEP_ERROR: 'mdl-step--error',
      STEP_TRANSIENT: 'mdl-step--transient',
      STEP_OPTIONAL: 'mdl-step--optional',
      STEP_EDITABLE: 'mdl-step--editable',
      IS_ACTIVE: 'is-active',
      TRANSIENT: 'mdl-step__transient',
      TRANSIENT_OVERLAY: 'mdl-step__transient-overlay',
      TRANSIENT_LOADER: 'mdl-step__transient-loader',
      SPINNER: 'mdl-spinner',
      SPINNER_JS: 'mdl-js-spinner',
      SPINNER_IS_ACTIVE: 'is-active',
      STEPPER: 'mdl-stepper',
      STEP: 'mdl-step',
      STEP_LABEL: 'mdl-step__label',
      STEP_LABEL_INDICATOR: 'mdl-step__label-indicator',
      STEP_LABEL_INDICATOR_CONTENT: 'mdl-step__label-indicator-content',
      STEP_TITLE: 'mdl-step__title',
      STEP_TITLE_TEXT: 'mdl-step__title-text',
      STEP_TITLE_MESSAGE: 'mdl-step__title-message',
      STEP_CONTENT: 'mdl-step__content',
      STEP_ACTIONS: 'mdl-step__actions'
    };
    /**
     * Store collection of steps and important data about them
     * @private
     */

    MaterialStepper.prototype.Steps_ = {};
    /**
     * Returns the label indicator for referred to the passed step.
     * @param {MaterialStepper.Steps_.collection.<step>} step The step that will get
     *                                                        the label indicator.
     * @return {HTMLElement}
     * @private
     */

    MaterialStepper.prototype.getIndicatorElement_ = function (step) {
      /** @type {HTMLElement} */
      var indicatorElement;
      /** @type {HTMLElement} */

      var indicatorContent;
      indicatorElement = document.createElement('span');
      indicatorContent = this.getIndicatorContentNormal_(step.labelndicatorText);
      indicatorElement.classList.add(this.CssClasses_.STEP_LABEL_INDICATOR);
      indicatorElement.appendChild(indicatorContent);
      return indicatorElement;
    };
    /**
     * Create a new element that's represent "normal" label indicator.
     * @param {string} text The text content of indicator (e.g. 1, 2..N).
     * @return {HTMLElement}
     * @private
     */


    MaterialStepper.prototype.getIndicatorContentNormal_ = function (text) {
      /** @type {HTMLElement} */
      var normal;
      normal = document.createElement('span');
      normal.classList.add(this.CssClasses_.STEP_LABEL_INDICATOR_CONTENT);
      normal.textContent = text;
      return normal;
    };
    /**
     * Create a new element that's represent "completed" label indicator.
     * @param {boolean} isEditable Flag to check if step is of editable type.
     * @return {HTMLElement}
     * @private
     */


    MaterialStepper.prototype.getIndicatorContentCompleted_ = function (isEditable) {
      // Creates a new material icon to represent the completed step.

      /** @type {HTMLElement} */
      var completed;
      completed = document.createElement('i');
      completed.classList.add('material-icons', this.CssClasses_.STEP_LABEL_INDICATOR_CONTENT); // If step is editable the icon used will be "edit",
      // else the icon will be "check".

      completed.textContent = isEditable ? 'edit' : 'check';
      return completed;
    };
    /**
     * Create a new element that's represent "error" label indicator.
     * @return {HTMLElement}
     * @private
     */


    MaterialStepper.prototype.getIndicatorContentError_ = function () {
      /** @type {HTMLElement} */
      var error;
      error = document.createElement('span');
      error.classList.add(this.CssClasses_.STEP_LABEL_INDICATOR_CONTENT);
      error.textContent = '!';
      return error;
    };
    /**
     * Defines a new step model.
     * @param {HTMLElement} step The step element.
     * @param {number} id The unique number for each step.
     * @return {Object}
     * @private
     */


    MaterialStepper.prototype.getStepModel_ = function (step, id) {
      /** @type {Object} */
      var model;
      /** @type {string} */

      var selectorActionsBack;
      /** @type {string} */

      var selectorActionsCancel;
      /** @type {string} */

      var selectorActionsNext;
      /** @type {string} */

      var selectorActionsSkip;
      selectorActionsBack = '[data-' + this.DatasetAttributes_.BACK + ']';
      selectorActionsCancel = '[data-' + this.DatasetAttributes_.CANCEL + ']';
      selectorActionsNext = '[data-' + this.DatasetAttributes_.CONTINUE + ']';
      selectorActionsSkip = '[data-' + this.DatasetAttributes_.SKIP + ']';
      model = {};
      model.container = step;
      model.id = id;
      model.label = step.querySelector('.' + this.CssClasses_.STEP_LABEL);
      model.labelndicatorText = id;
      model.labelTitle = step.querySelector('.' + this.CssClasses_.STEP_TITLE);
      model.labelTitleText = step.querySelector('.' + this.CssClasses_.STEP_TITLE_TEXT).textContent;
      model.labelTitleMessage = step.querySelector('.' + this.CssClasses_.STEP_TITLE_MESSAGE);
      model.labelTitleMessageText = model.labelTitleMessage ? model.labelTitleMessage.textContent : '';
      model.content = step.querySelector('.' + this.CssClasses_.STEP_CONTENT);
      model.actions = step.querySelector('.' + this.CssClasses_.STEP_ACTIONS);
      model.actionsBack = model.actions.querySelector(selectorActionsBack) || null;
      model.actionsCancel = model.actions.querySelector(selectorActionsCancel) || null;
      model.actionsNext = model.actions.querySelector(selectorActionsNext) || null;
      model.actionsSkip = model.actions.querySelector(selectorActionsSkip) || null;
      model.labelIndicator = model.label.querySelector('.' + this.CssClasses_.STEP_LABEL_INDICATOR);

      if (!model.labelIndicator) {
        // Creates a new indicator for the label if not exists
        model.labelIndicator = this.getIndicatorElement_(model);
        model.label.appendChild(model.labelIndicator);
      }

      if (step.classList.contains(this.CssClasses_.STEP_COMPLETED)) {
        model.state = this.StepState_.COMPLETED;
      } else if (step.classList.contains(this.CssClasses_.STEP_ERROR)) {
        model.state = this.StepState_.ERROR;
      } else {
        model.state = this.StepState_.NORMAL;
      }

      model.isActive = step.classList.contains(this.CssClasses_.IS_ACTIVE);
      model.isOptional = step.classList.contains(this.CssClasses_.STEP_OPTIONAL);
      model.isEditable = step.classList.contains(this.CssClasses_.STEP_EDITABLE);
      return model;
    };
    /**
     * Get the active step element.
     * @return {HTMLElement}
     */


    MaterialStepper.prototype.getActive = function () {
      return this.Steps_.collection[this.Steps_.active - 1].container;
    };
    /**
     * Get the active step id.
     * @return {number}
     */


    MaterialStepper.prototype.getActiveId = function () {
      return this.Steps_.collection[this.Steps_.active - 1].id;
    };
    /**
     * Load the model of all steps and store inside a collection.
     * @return {Object}
     * @private
     */


    MaterialStepper.prototype.getSteps_ = function () {
      /** @type {array} */
      var collection;
      /** @type {number} */

      var total;
      /** @type {number} */

      var completed;
      /** @type {number} */

      var optional;
      /** @type {number} */

      var active;
      /** @type {HTMLElement} */

      var stepElements;
      /** @type {number} */

      var i;
      collection = [];
      total = 0;
      completed = 0;
      optional = 0;
      active = 0;
      stepElements = this.element_.querySelectorAll('.' + this.CssClasses_.STEP);

      for (i = 0; i < stepElements.length; i++) {
        collection[i] = this.getStepModel_(stepElements[i], i + 1);

        if (collection[i].isOptional) {
          optional += 1;
        }

        if (collection[i].isActive) {
          active = collection[i].id;
        } // Prevents the step label to scrolling out of user view on Google Chrome.
        // More details here: <https://github.com/ahlechandre/mdl-stepper/issues/11 />.


        stepElements[i].addEventListener('scroll', function (event) {
          event.target.scrollTop = 0;
        });
      }

      total = collection.length;
      return {
        collection: collection,
        total: total,
        completed: completed,
        optional: optional,
        active: active
      };
    };
    /**
     * Defines a specific step as "active".
     * @param {MaterialStepper.Steps_.collection<step>} step A model of step.
     * @return {boolean}
     * @private
     */


    MaterialStepper.prototype.setStepActive_ = function (step) {
      /** @type {function} */
      var stepsDeactivator; // The transient effect blocks the stepper to move

      if (this.hasTransient()) return false;

      stepsDeactivator = function stepsDeactivator(step) {
        step.container.classList.remove(this.CssClasses_.IS_ACTIVE);

        if (step.isActive) {
          step.isActive = false;
        }
      };

      this.Steps_.collection.forEach(stepsDeactivator.bind(this)); // remove if step was in transient (feedback) effect

      step.container.classList.remove(this.CssClasses_.STEP_TRANSIENT);
      step.container.classList.add(this.CssClasses_.IS_ACTIVE);
      step.isActive = true;
      this.Steps_.active = step.id;
      return true;
    };
    /**
     * Defines as "active" the first step or a specific id.
     * @param {number | undefined} id Unique number of a step.
     * @return {boolean}
     * @private
     */


    MaterialStepper.prototype.setActive_ = function (id) {
      /** @type {HTMLElement | null} */
      var active;
      /** MaterialStepper.Steps_.collection<step> */

      var first;
      /** @type {number} */

      var i;
      /** @type {boolean} */

      var moved;
      /** MaterialStepper.Steps_.collection<step> */

      var step; // Return false if specified id is less or equal 0 and bigger than the last step

      if (!isNaN(id) && (id > this.Steps_.total || id <= 0)) return false;
      moved = false;

      if (id) {
        for (i = 0; i < this.Steps_.total; i++) {
          step = this.Steps_.collection[i];

          if (step.id === id) {
            moved = this.setStepActive_(step);
            break;
          }
        }
      } else {
        active = this.element_.querySelector('.' + this.CssClasses_.IS_ACTIVE);

        if (!active) {
          // Set the first step as "active" if none id was specified and
          // no "active" step was found at the DOM.
          first = this.Steps_.collection[0];
          moved = this.setStepActive_(first);
        }
      }

      if (this.Stepper_.isLinear) {
        // We know that all steps previous the "active" are "completed"
        // case the stepper is linear
        this.updateLinearStates_();
      }

      return moved;
    };
    /**
     * Change the state of a step
     * @param {MaterialStepper.Steps_.collection<step>} step The step to be updated.
     * @param {string} state The step state ("completed", "error" or "normal").
     * @return {boolean}
     * @private
     */


    MaterialStepper.prototype.updateStepState_ = function (step, state) {
      /** @type {string} */
      var stateClass;
      /** @type {HTMLElement} */

      var indicatorContent;
      /** @type {HTMLElement} */

      var currentIndicatorContent;
      /** @type {boolean} */

      var stepperCompleted;
      /** @type {boolean} */

      var hasRequired;
      /** @type {MaterialStepper.Steps_.collection<stepItem>} */

      var stepItem;
      /** @type {number} */

      var item;
      /** @type {string} */

      var selectorIndicator;
      selectorIndicator = '.' + this.CssClasses_.STEP_LABEL_INDICATOR_CONTENT; // Can't update the state for the same.

      if (step.state === state) return false; // Case the current step state to change is "completed",
      // we can decrement the total number of completed.

      if (step.state === this.StepState_.COMPLETED) {
        this.Steps_.completed -= 1;
      }

      currentIndicatorContent = step.labelIndicator.querySelector(selectorIndicator);

      switch (state) {
        case this.StepState_.COMPLETED:
          {
            // Case changing the current step state to "completed",
            // we can increment the total number of completed.
            this.Steps_.completed += 1;
            step.container.classList.remove(this.CssClasses_.STEP_ERROR);
            indicatorContent = this.getIndicatorContentCompleted_(step.isEditable);
            stateClass = this.CssClasses_.STEP_COMPLETED;
            break;
          }

        case this.StepState_.ERROR:
          {
            step.container.classList.remove(this.CssClasses_.STEP_COMPLETED);
            indicatorContent = this.getIndicatorContentError_();
            stateClass = this.CssClasses_.STEP_ERROR;
            break;
          }

        case this.StepState_.NORMAL:
          {
            step.container.classList.remove(this.CssClasses_.STEP_COMPLETED);
            step.container.classList.remove(this.CssClasses_.STEP_ERROR);
            indicatorContent = this.getIndicatorContentNormal_(step.labelndicatorText);
            break;
          }

        default:
          {
            break;
          }
      } // "normal" is the default state and don't have specific css class.


      if (stateClass) {
        step.container.classList.add(stateClass);
      }

      step.labelIndicator.replaceChild(indicatorContent, currentIndicatorContent);
      step.state = state; // Case the total number of completed steps
      // are equal the total number of steps less the optionals
      // or total number of completed steps are equal the total number of steps,
      // we can consider that the stepper are successfully complete and
      // dispatch the custom event.

      stepperCompleted = false;

      if (this.Steps_.completed === this.Steps_.total) {
        stepperCompleted = true;
      } else if (this.Steps_.completed === this.Steps_.total - this.Steps_.optional) {
        for (item in this.Steps_.collection) {
          // eslint guard-for-in.
          if (this.Steps_.collection.hasOwnProperty(item)) {
            stepItem = this.Steps_.collection[item];
            hasRequired = !stepItem.isOptional && stepItem.state !== this.StepState_.COMPLETED;
            if (hasRequired) break;
          }
        }

        stepperCompleted = !hasRequired;
      }

      if (stepperCompleted) {
        this.dispatchEventOnStepperComplete_();
      }

      return true;
    };
    /**
     * Change to "completed" the state of all steps previous the "active"
     * except the optionals.
     * @return {undefined}
     * @private
     */


    MaterialStepper.prototype.updateLinearStates_ = function () {
      /** @type {number} */
      var i;

      for (i = 0; i < this.Steps_.total; i++) {
        if (this.Steps_.collection[i].isActive) {
          break;
        } else {
          if (this.Steps_.collection[i].isOptional) continue;
          this.updateStepState_(this.Steps_.collection[i], this.StepState_.COMPLETED);
        }
      }
    };
    /**
     * Move "active" to the previous step. This operation can returns false
     * if it does not regress the step.
     * @return {boolean}
     */


    MaterialStepper.prototype.back = function () {
      /** @type {boolean} */
      var moved;
      /** @type {function} */

      var moveStep;
      /** @type {string} */

      var model;
      /** @type {MaterialStepper.Steps_.collection<step>} */

      var step;
      /** @type {MaterialStepper.Steps_.collection<step>} */

      var previous;
      moved = false;

      moveStep = function moveStep(step) {
        /** @type {boolean} */
        var stepActivated;
        stepActivated = this.setActive_(step.id);

        if (stepActivated) {
          if (stepActivated && this.Stepper_.hasFeedback) {
            // Remove the (feedback) transient effect before move.
            this.removeTransientEffect_(step);
          }
        }

        return stepActivated;
      };

      for (model in this.Steps_.collection) {
        // Rule eslint guard-for-in.
        if (this.Steps_.collection.hasOwnProperty(model)) {
          step = this.Steps_.collection[model];

          if (step.isActive) {
            previous = this.Steps_.collection[step.id - 2];
            if (!previous) return false;

            if (this.Stepper_.isLinear) {
              if (previous.isEditable) {
                moved = moveStep.bind(this)(previous);
              }
            } else {
              moved = moveStep.bind(this)(previous);
            }

            break;
          }
        }
      }

      return moved;
    };
    /**
     * Move "active" to the next if the current step is optional. This operation can returns false
     * if it does not advances the step.
     * @return {boolean}
     */


    MaterialStepper.prototype.skip = function () {
      /** @type {boolean} */
      var moved;
      /** @type {string} */

      var model;
      /** @type {MaterialStepper.Steps_.collection<step>} */

      var step;
      moved = false;

      for (model in this.Steps_.collection) {
        // Rule eslint guard-for-in.
        if (this.Steps_.collection.hasOwnProperty(model)) {
          step = this.Steps_.collection[model];

          if (step.isActive) {
            if (step.isOptional) {
              moved = this.setActive_(step.id + 1);

              if (moved && this.Stepper_.hasFeedback) {
                // Remove the (feedback) transient effect before move
                this.removeTransientEffect_(step);
              }
            }

            break;
          }
        }
      }

      return moved;
    };
    /**
     * Move "active" to specified step id.
     * This operation is similar to the MaterialStepper.setActive_(<number>).
     * @param {number} id Unique number for step.
     * @return {boolean}
     */


    MaterialStepper.prototype.goto = function (id) {
      return this.setActive_(id);
    };
    /**
     * Defines the current state of step to "error" and display
     * an alert message instead of default title message.
     * @param {string} message The text content to show with error state.
     * @return {undefined}
     */


    MaterialStepper.prototype.error = function (message) {
      /** @type {string} */
      var model;
      /** @type {MaterialStepper.Steps_.collection<step>} */

      var step;

      for (model in this.Steps_.collection) {
        // Rule eslint guard-for-in.
        if (this.Steps_.collection.hasOwnProperty(model)) {
          step = this.Steps_.collection[model];

          if (step.isActive) {
            if (this.Stepper_.hasFeedback) {
              // Remove the (feedback) transient effect before move.
              this.removeTransientEffect_(step);
            }

            this.updateStepState_(step, this.StepState_.ERROR);

            if (message) {
              this.updateTitleMessage_(step, message);
            } // Now dispatch on step the custom event "onsteperror".


            this.dispatchEventOnStepError_(step);
            break;
          }
        }
      }
    };
    /**
    * Defines current step state to "completed" and move active to the next.
    * This operation can returns false if it does not advance the step.
    * @return {boolean}
    */


    MaterialStepper.prototype.next = function () {
      /** @type {boolean} */
      var moved;
      /** @type {MaterialStepper.Steps_.collection<step>} */

      var step;
      /** @type {number} */

      var activate;
      /** @type {string} */

      var model;
      /** @type {string} */

      var item;
      /** @type {MaterialStepper.Steps_.collection<stepItem>} */

      var stepItem;
      moved = false;

      for (model in this.Steps_.collection) {
        // Rule eslint guard-for-in.
        if (this.Steps_.collection.hasOwnProperty(model)) {
          step = this.Steps_.collection[model];

          if (step.isActive) {
            activate = step.id + 1;

            if (this.Stepper_.hasFeedback) {
              // Remove the (feedback) transient effect before move
              this.removeTransientEffect_(step);
            }

            if (step.state === this.StepState_.ERROR) {
              // Case the current state of step is "error", update the error message
              // to the original title message or just remove it.
              if (step.labelTitleMessageText) {
                this.updateTitleMessage_(step, step.labelTitleMessageText);
              } else {
                this.removeTitleMessage_(step);
              }
            }

            if (step.isEditable && this.Stepper_.isLinear) {
              // In linear steppers if the current step is editable the stepper needs to find
              // the next step without "completed" state
              for (item in this.Steps_.collection) {
                // Rule eslint guard-for-in.
                if (this.Steps_.collection.hasOwnProperty(item)) {
                  stepItem = this.Steps_.collection[item];

                  if (stepItem.id > step.id && stepItem.state !== this.StepState_.COMPLETED) {
                    activate = stepItem.id;
                    break;
                  }
                }
              }
            }

            moved = this.setActive_(activate); // Update "manually" the state of current step to "completed" because
            // MaterialStepper.setActive_(<number>) can't change the state of non-linears steppers
            // and can't change the state of optional or last step in linears steppers.

            if (this.Stepper_.isLinear) {
              if (step.isOptional || step.id === this.Steps_.total) {
                this.updateStepState_(step, this.StepState_.COMPLETED);
              }
            } else {
              this.updateStepState_(step, this.StepState_.COMPLETED);
            } // Now dispatch on step the custom event "onstepcomplete"


            this.dispatchEventOnStepComplete_(step);
            break;
          }
        }
      }

      return moved;
    };
    /**
     * Update the title message or creates a new if it not exists.
     * @param {MaterialStepper.Steps_.collection<step>} step The step of label to be updated.
     * @param {string} text The text content to update.
     * @return {undefined}
     */


    MaterialStepper.prototype.updateTitleMessage_ = function (step, text) {
      /** @type {HTMLElement | null} */
      var titleMessage;
      titleMessage = step.container.querySelector('.' + this.CssClasses_.STEP_TITLE_MESSAGE);

      if (!titleMessage) {
        titleMessage = document.createElement('span');
        titleMessage.classList.add(this.CssClasses_.STEP_TITLE_MESSAGE);
        step.labelTitle.appendChild(titleMessage);
      }

      titleMessage.textContent = text;
    };
    /**
     * Remove the title message if it exists.
     * @param {MaterialStepper.Steps_.collection<step>} step The step to remove title message.
     * @return {undefined}
     */


    MaterialStepper.prototype.removeTitleMessage_ = function (step) {
      /** @type {HTMLElement | null} */
      var titleMessage;
      titleMessage = step.container.querySelector('.' + this.CssClasses_.STEP_TITLE_MESSAGE);

      if (titleMessage) {
        titleMessage.parentNode.removeChild(titleMessage);
      }
    };
    /**
     * Remove (feedback) transient effect and applied to the step.
     * @param {MaterialStepper.Steps_.collection<step>} step The step to remove effect.
     * @return {boolean}
     */


    MaterialStepper.prototype.removeTransientEffect_ = function (step) {
      /** @type {HTMLElement | null} */
      var transient;
      transient = step.content.querySelector('.' + this.CssClasses_.TRANSIENT);
      if (!transient) return false;
      step.container.classList.remove(this.CssClasses_.STEP_TRANSIENT);
      step.content.removeChild(transient);
      return true;
    };
    /**
     * Create (feedback) transient effect and apply to the current step.
     * @param {MaterialStepper.Steps_.collection<step>} step The step to add effect.
     * @return {boolean}
     */


    MaterialStepper.prototype.addTransientEffect_ = function (step) {
      /** @type {HTMLElement} */
      var transient;
      /** @type {HTMLElement} */

      var overlay;
      /** @type {HTMLElement} */

      var loader;
      /** @type {HTMLElement} */

      var spinner;
      if (step.content.querySelector('.' + this.CssClasses_.TRANSIENT)) return false;
      transient = document.createElement('div');
      overlay = document.createElement('div');
      loader = document.createElement('div');
      spinner = document.createElement('div');
      transient.classList.add(this.CssClasses_.TRANSIENT);
      overlay.classList.add(this.CssClasses_.TRANSIENT_OVERLAY);
      loader.classList.add(this.CssClasses_.TRANSIENT_LOADER);
      spinner.classList.add(this.CssClasses_.SPINNER);
      spinner.classList.add(this.CssClasses_.SPINNER_JS);
      spinner.classList.add(this.CssClasses_.SPINNER_IS_ACTIVE);
      loader.appendChild(spinner);
      transient.appendChild(overlay);
      transient.appendChild(loader);
      step.container.classList.add(this.CssClasses_.STEP_TRANSIENT);
      step.content.appendChild(transient); // Assume componentHandler is available in the global scope.

      componentHandler.upgradeDom();
      return true;
    };
    /**
     * Add event listener to linear, non-linear steppers and dispatch the custom events.
     * @return {undefined}
     */


    MaterialStepper.prototype.setCustomEvents_ = function () {
      /** @type {function} */
      var linearLabels;
      /** @type {function} */

      var nonLinearLabels;
      /** @type {function} */

      var dispatchCustomEvents;

      linearLabels = function linearLabels(step) {
        // We know that editable steps can be activated by click on label case it's completed
        if (step.isEditable) {
          step.label.addEventListener('click', function (event) {
            event.preventDefault();

            if (step.state === this.StepState_.COMPLETED) {
              this.setStepActive_(step);
            }
          }.bind(this));
        }
      };

      nonLinearLabels = function nonLinearLabels(step) {
        step.label.addEventListener('click', function (event) {
          event.preventDefault();
          this.setStepActive_(step);
        }.bind(this));
      };

      dispatchCustomEvents = function dispatchCustomEvents(step) {
        this.dispatchEventOnStepNext_(step);
        this.dispatchEventOnStepCancel_(step);
        this.dispatchEventOnStepSkip_(step);
        this.dispatchEventOnStepBack_(step);
      };

      if (this.Stepper_.isLinear) {
        this.Steps_.collection.forEach(linearLabels.bind(this));
      } else {
        this.Steps_.collection.forEach(nonLinearLabels.bind(this));
      }

      this.Steps_.collection.forEach(dispatchCustomEvents.bind(this));
    };
    /**
     * Dispatch "onstepcomplete" event on step when method stepper.next() is invoked to the
     * current and return true. Or just when the active step change your state to "completed".
     * @param {MaterialStepper.Steps_.collection<step>} step The step to dispatch event.
     * @return {undefined}
     */


    MaterialStepper.prototype.dispatchEventOnStepComplete_ = function (step) {
      step.container.dispatchEvent(this.CustomEvents_.onstepcomplete);
    };
    /**
     * Dispatch "onsteperror" event on step when method stepper.error('Your alert message')
     * is invoked to the current step and return true. Or just when the active step
     * change your state to "error".
     * @param {MaterialStepper.Steps_.collection<step>} step The step to dispatch event.
     * @return {undefined}
     */


    MaterialStepper.prototype.dispatchEventOnStepError_ = function (step) {
      step.container.dispatchEvent(this.CustomEvents_.onsteperror);
    };
    /**
     * Dispatch "onsteppercomplete" event on stepper when all steps are completed.
     * If there is optionals steps, they will be ignored.
     * @return {undefined}
     */


    MaterialStepper.prototype.dispatchEventOnStepperComplete_ = function () {
      this.element_.dispatchEvent(this.CustomEvents_.onsteppercomplete);
    };
    /**
     * Dispatch "onstepnext" event on step when the step action button/link with
     * [data-stepper-next] attribute is clicked.
     * @param {MaterialStepper.Steps_.collection<step>} step The step to dispatch event.
     * @return {boolean}
     */


    MaterialStepper.prototype.dispatchEventOnStepNext_ = function (step) {
      if (!step.actionsNext) return false;
      step.actionsNext.addEventListener('click', function () {
        if (this.Stepper_.hasFeedback) {
          this.addTransientEffect_(step);
        }

        step.container.dispatchEvent(this.CustomEvents_.onstepnext);
      }.bind(this));
      return true;
    };
    /**
     * Dispatch "onstepcancel" event on step when the step action button/link with
     * [data-stepper-cancel] attribute is clicked.
     * @param {MaterialStepper.Steps_.collection<step>} step The step to dispatch event.
     * @return {boolean}
     */


    MaterialStepper.prototype.dispatchEventOnStepCancel_ = function (step) {
      if (!step.actionsCancel) return false;
      step.actionsCancel.addEventListener('click', function (event) {
        event.preventDefault();
        step.container.dispatchEvent(this.CustomEvents_.onstepcancel);
      }.bind(this));
      return true;
    };
    /**
     * Dispatch "onstepskip" event on step when the step action button/link with
     * [data-stepper-skip] attribute is clicked.
     * @param {MaterialStepper.Steps_.collection<step>} step The step to dispatch event.
     * @return {boolean}
     */


    MaterialStepper.prototype.dispatchEventOnStepSkip_ = function (step) {
      if (!step.actionsSkip) return false;
      step.actionsSkip.addEventListener('click', function (event) {
        event.preventDefault();
        step.container.dispatchEvent(this.CustomEvents_.onstepskip);
      }.bind(this));
      return true;
    };
    /**
     * Dispatch "onstepback" event on step when the step action button/link with
     * [data-stepper-back] attribute is clicked.
     * @param {MaterialStepper.Steps_.collection<step>} step The step to dispatch event.
     * @return {boolean}
     */


    MaterialStepper.prototype.dispatchEventOnStepBack_ = function (step) {
      if (!step.actionsBack) return false;
      step.actionsBack.addEventListener('click', function (event) {
        event.preventDefault();
        step.container.dispatchEvent(this.CustomEvents_.onstepback);
      }.bind(this));
      return true;
    };
    /**
     * Check if has some active transient effect on steps.
     * @return {boolean}
     */


    MaterialStepper.prototype.hasTransient = function () {
      /** @type {string} */
      var cssClasseStep;
      /** @type {string} */

      var cssClasseStepContent;
      /** @type {string} */

      var cssClasseTransient;
      /** @type {string} */

      var selectorTransient;
      /** @type {HTMLElement | null} */

      var transient;
      cssClasseStep = '.' + this.CssClasses_.STEP;
      cssClasseStepContent = '.' + this.CssClasses_.STEP_CONTENT;
      cssClasseTransient = '.' + this.CssClasses_.TRANSIENT;
      selectorTransient = cssClasseStep + ' > ' + cssClasseStepContent + ' > ' + cssClasseTransient;
      transient = this.element_.querySelector(selectorTransient);
      return transient !== null;
    };
    /**
     * Initialize the instance.
     * @return {undefined}
     * @public
     */


    MaterialStepper.prototype.init = function () {
      // Check if stepper element exists.
      if (this.element_) {
        this.Stepper_ = this.getStepper_();
        this.Steps_ = this.getSteps_();
        this.setActive_();
        this.setCustomEvents_();
      }
    }; // The component registers itself. It can assume componentHandler is available
    // in the global scope.


    componentHandler.register({
      constructor: MaterialStepper,
      classAsString: 'MaterialStepper',
      cssClass: 'mdl-stepper',
      widget: true
    });
  })();
  /***/

}
/******/
]);
/* eslint-enable */
}();
/******/ })()
;
//# sourceMappingURL=stepper.js.map