/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cifra/CifraAnime.js":
/*!*********************************!*\
  !*** ./src/cifra/CifraAnime.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CifraAnime)
/* harmony export */ });
/* harmony import */ var pyllar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pyllar/component */ "./node_modules/pyllar/component.js");
/* harmony import */ var _CifraAnime_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CifraAnime.css */ "./src/cifra/CifraAnime.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var CifraAnime = /*#__PURE__*/function (_PiComponent) {
  function CifraAnime() {
    var _this;
    _classCallCheck(this, CifraAnime);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, CifraAnime, [].concat(args));
    _defineProperty(_this, "view", /*html*/"<div class=\"cifra-preview\">\n        <div class=\"box\">\n            <div class=\"box-inner\"></div>\n        </div>\n    </div>");
    return _this;
  }
  _inherits(CifraAnime, _PiComponent);
  return _createClass(CifraAnime);
}(pyllar_component__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/cifra/CifraModel.js":
/*!*********************************!*\
  !*** ./src/cifra/CifraModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CifraModel)
/* harmony export */ });
/* harmony import */ var pyllar_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pyllar/config */ "./node_modules/pyllar/config.js");
/* harmony import */ var pyllar_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pyllar/model */ "./node_modules/pyllar/model.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var CifraModel = /*#__PURE__*/function (_PiModel) {
  function CifraModel() {
    _classCallCheck(this, CifraModel);
    return _callSuper(this, CifraModel, arguments);
  }
  _inherits(CifraModel, _PiModel);
  return _createClass(CifraModel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(CifraModel.prototype), "init", this).call(this, pyllar_config__WEBPACK_IMPORTED_MODULE_0__["default"].get('endpoint.cifra'));
    }
  }, {
    key: "initWithJson",
    value: function initWithJson(json) {
      _get(_getPrototypeOf(CifraModel.prototype), "initWithJson", this).call(this, json);
      return this;
    }
  }, {
    key: "actions",
    value: function actions() {
      return {
        'insert': 'POST:/',
        'save': 'PUT:/',
        'get': 'GET:/:id',
        'all': 'GET:/',
        'import': 'GET:/import?url=:url'
      };
    }
  }]);
}(pyllar_model__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/cifra/CifraStream.js":
/*!**********************************!*\
  !*** ./src/cifra/CifraStream.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CifraStream)
/* harmony export */ });
/* harmony import */ var _CifraModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CifraModel */ "./src/cifra/CifraModel.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var CifraStream = /*#__PURE__*/function () {
  function CifraStream(host) {
    _classCallCheck(this, CifraStream);
    _defineProperty(this, "fnNewCifra", null);
    _defineProperty(this, "fnNewNote", null);
    this.host = host;
  }
  return _createClass(CifraStream, [{
    key: "onNewCifra",
    value: function onNewCifra(fn) {
      this.fnNewCifra = fn;
    }
  }, {
    key: "onNewNote",
    value: function onNewNote(fn) {
      this.fnNewNote = fn;
    }
  }, {
    key: "_processEvent",
    value: function _processEvent(e) {
      var _this = this;
      try {
        var event = JSON.parse(e.data);
        if (event.type == 'new:cifra') {
          new _CifraModel__WEBPACK_IMPORTED_MODULE_0__["default"]().get(event.id).then(function (cifra) {
            if (_this.fnNewCifra) {
              _this.fnNewCifra(cifra);
            }
          });
          return;
        }
        if (event.type == 'note') {
          if (this.fnNewNote) {
            this.fnNewNote(event.note);
          }
        }
      } catch (error) {}
    }
  }, {
    key: "connect",
    value: function connect() {
      var _this2 = this;
      var socket = new WebSocket(this.host);
      socket.addEventListener('open', function (event) {
        console.log('Conectado ao servidor WebSocket');

        // Envia uma mensagem ao servidor
        socket.send('Olá servidor!');
      });

      // Quando uma mensagem é recebida do servidor
      socket.addEventListener('message', function (event) {
        _this2._processEvent(event);
      });

      // Quando a conexão é fechada
      socket.addEventListener('close', function (event) {
        console.log('Desconectado do servidor WebSocket');
        _this2.connect();
      });
    }
  }]);
}();

;

/***/ }),

/***/ "./src/cifra/CifraView.js":
/*!********************************!*\
  !*** ./src/cifra/CifraView.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CifraView)
/* harmony export */ });
/* harmony import */ var pyllar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pyllar/component */ "./node_modules/pyllar/component.js");
/* harmony import */ var _CifraModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CifraModel */ "./src/cifra/CifraModel.js");
/* harmony import */ var _marcador_Marcador__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../marcador/Marcador */ "./src/marcador/Marcador.js");
/* harmony import */ var _note_NoteCollection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../note/NoteCollection */ "./src/note/NoteCollection.js");
/* harmony import */ var _CifraView_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CifraView.css */ "./src/cifra/CifraView.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var CifraView = /*#__PURE__*/function (_PiComponent) {
  function CifraView() {
    var _this;
    _classCallCheck(this, CifraView);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, CifraView, [].concat(args));
    _defineProperty(_this, "view", /*html*/"<div :class=\"cifra-view {@_mostrarAcordes ?  '' : 'no-chords'}\">\n        <div class=\"titulo\">\n            {@_titulo}\n        </div>\n\n        <div class=\"options\">\n            <div class=\"form-check form-switch\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"mostrarAcordes\" @change=\"_saveMostrarAcordes($value)\" :checked=\"{@_mostrarAcordes}\">\n                <label class=\"form-check-label\" for=\"mostrarAcordes\">Mostrar Acordes</label>\n            </div>\n\n            <div class=\"form-check form-switch\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"barraRolagem\" @change=\"_saveRolagemAutomatica($value)\" :checked=\"{@_rolagemAutomatica}\">\n                <label class=\"form-check-label\" for=\"barraRolagem\">Barra de Rolagem Autom\xE1tica</label>\n            </div>\n\n            <div class=\"form-check form-switch\">\n                <input class=\"form-check-input\" type=\"checkbox\" id=\"evidenciar\" @change=\"_saveEvidenciarNotas($value)\" :checked=\"{@_evidenciarAcordes}\">\n                <label class=\"form-check-label\" for=\"evidenciar\">Evid\xEAnciar acordes</label>\n            </div>\n        </div>\n\n        <div class=\"center\"></div>\n\n        <div id=\"marcador\" class=\"marcador\"></div>\n        \n        <pre id=\"content\"></pre>\n\n        <div style=\"padding: 1px 10px; border-radius: 3px; position: fixed; background-color: rgba(0, 0, 0, 0.05); bottom: 0px; right: 3px;\">v0.1.1</div>\n    </div>");
    _defineProperty(_this, "_titulo", '');
    _defineProperty(_this, "_mostrarAcordes", true);
    _defineProperty(_this, "_rolagemAutomatica", true);
    _defineProperty(_this, "_evidenciarAcordes", true);
    return _this;
  }
  _inherits(CifraView, _PiComponent);
  return _createClass(CifraView, [{
    key: "viewDidLoad",
    value: function viewDidLoad() {
      this._loadConfig();
      this._loadMarcador();
    }
  }, {
    key: "setStream",
    value: function setStream(stream) {
      var _this2 = this;
      stream.onNewNote(function (note) {
        _this2.setMarcadorPosicao(note.position);
      });
    }
  }, {
    key: "loadCifra",
    value: function () {
      var _loadCifra = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id, fn) {
        var cifra;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new _CifraModel__WEBPACK_IMPORTED_MODULE_1__["default"]().get(id);
            case 2:
              cifra = _context.sent;
              this.setCifra(cifra, fn);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function loadCifra(_x, _x2) {
        return _loadCifra.apply(this, arguments);
      }
      return loadCifra;
    }()
  }, {
    key: "setCifra",
    value: function setCifra(cifra, fn) {
      this.$element.find("#content").html(this._formatNotes(this._formatTag(cifra.texto)));
      this._titulo = cifra.titulo;
      this._loadNotes();
      this._loadConfig();
      this.setMarcadorPosicao(0);
      if (fn) fn();
    }
  }, {
    key: "setMarcadorPosicao",
    value: function setMarcadorPosicao(position) {
      this.marcador.move(this.notes.getNoteByPosition(position));
    }
  }, {
    key: "_saveMostrarAcordes",
    value: function _saveMostrarAcordes(v) {
      this._mostrarAcordes = v;
      this._saveConfig();
    }
  }, {
    key: "_saveRolagemAutomatica",
    value: function _saveRolagemAutomatica(v) {
      this._rolagemAutomatica = v;
      if (this.marcador) {
        this.marcador.setRolagemAutomatica(v);
      }
      this._saveConfig();
    }
  }, {
    key: "_saveEvidenciarNotas",
    value: function _saveEvidenciarNotas(v) {
      this._evidenciarAcordes = v;
      if (this.marcador) {
        v ? this.marcador.show() : this.marcador.hide();
      }
      this._saveConfig();
    }
  }, {
    key: "_formatNotes",
    value: function _formatNotes(cifra) {
      return cifra.replace(/\([^)]+\)/gi, function (note) {
        return "<b>".concat(note.replace('(', '').replace(')', ''), "</b>");
      });
    }
  }, {
    key: "_formatTag",
    value: function _formatTag(cifra) {
      return cifra.replace(/\[[^\]]+\]/gi, function (note) {
        return "<i>".concat(note, "</i>");
      });
    }
  }, {
    key: "_loadMarcador",
    value: function _loadMarcador() {
      this.marcador = new _marcador_Marcador__WEBPACK_IMPORTED_MODULE_2__["default"](this.$element.find("#marcador"));
    }
  }, {
    key: "_loadNotes",
    value: function _loadNotes() {
      this.notes = new _note_NoteCollection__WEBPACK_IMPORTED_MODULE_3__["default"](this.$element.find("#content").find('b'));
    }
  }, {
    key: "_saveConfig",
    value: function _saveConfig() {
      window.localStorage.setItem('mostrar_acordes', this._mostrarAcordes);
      window.localStorage.setItem('rolagem_automatica', this._rolagemAutomatica);
      window.localStorage.setItem('evidenciar_acordes', this._evidenciarAcordes);
    }
  }, {
    key: "_loadConfig",
    value: function _loadConfig() {
      var config = this._getConfig();
      this._saveMostrarAcordes(config.mostrarAcordes);
      this._saveRolagemAutomatica(config.rolagemAutomatica);
      this._saveEvidenciarNotas(config.evidenciarAcordes);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig() {
      var mostrarAcordes = window.localStorage.getItem('mostrar_acordes');
      var rolagemAutomatica = window.localStorage.getItem('rolagem_automatica');
      var evidenciarAcordes = window.localStorage.getItem('evidenciar_acordes');
      if (mostrarAcordes === null || rolagemAutomatica === null || evidenciarAcordes === null) {
        this._saveConfig();
        true, _readOnlyError("mostrarAcordes");
        true, _readOnlyError("rolagemAutomatica");
        true, _readOnlyError("evidenciarAcordes");
      }
      return {
        mostrarAcordes: mostrarAcordes === 'true',
        rolagemAutomatica: rolagemAutomatica === 'true',
        evidenciarAcordes: evidenciarAcordes === 'true'
      };
    }
  }]);
}(pyllar_component__WEBPACK_IMPORTED_MODULE_0__["default"]);

pyllar_component__WEBPACK_IMPORTED_MODULE_0__["default"].register(CifraView);

/***/ }),

/***/ "./src/homepage/HomePage.js":
/*!**********************************!*\
  !*** ./src/homepage/HomePage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var pyllar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pyllar/component */ "./node_modules/pyllar/component.js");
/* harmony import */ var pyllar_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pyllar/config */ "./node_modules/pyllar/config.js");
/* harmony import */ var _cifra_CifraView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cifra/CifraView */ "./src/cifra/CifraView.js");
/* harmony import */ var _cifra_CifraAnime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cifra/CifraAnime */ "./src/cifra/CifraAnime.js");
/* harmony import */ var _cifra_CifraStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cifra/CifraStream */ "./src/cifra/CifraStream.js");
/* harmony import */ var _transporte_TransporteModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../transporte/TransporteModel */ "./src/transporte/TransporteModel.js");
/* harmony import */ var _HomePage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HomePage.css */ "./src/homepage/HomePage.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







var HomePage = /*#__PURE__*/function (_PiComponent) {
  function HomePage() {
    var _this;
    _classCallCheck(this, HomePage);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, HomePage, [].concat(args));
    _defineProperty(_this, "view", /*html*/"<div class=\"container homepage\">\n        <div class=\"content\">\n            <div id=\"view\"></div>\n        </div>\n    </div>");
    return _this;
  }
  _inherits(HomePage, _PiComponent);
  return _createClass(HomePage, [{
    key: "instances",
    value: function instances() {
      this.cifraStream = new _cifra_CifraStream__WEBPACK_IMPORTED_MODULE_4__["default"](pyllar_config__WEBPACK_IMPORTED_MODULE_1__["default"].get('cifraStream'));
    }
  }, {
    key: "viewDidLoad",
    value: function viewDidLoad() {
      this.cifraStream.connect();
      this._loadTransporte();
      this._loadEvents();
    }
  }, {
    key: "setView",
    value: function setView(view) {
      view.render(this.$element.find('#view'));
    }
  }, {
    key: "_loadTransporte",
    value: function _loadTransporte() {
      var _this2 = this;
      new _transporte_TransporteModel__WEBPACK_IMPORTED_MODULE_5__["default"]().get().then(function (transporte) {
        if (transporte == null) {
          _this2.setView(new _cifra_CifraAnime__WEBPACK_IMPORTED_MODULE_3__["default"]());
          return;
        }
        if (transporte.cifraId == 0) {
          _this2.setView(new _cifra_CifraAnime__WEBPACK_IMPORTED_MODULE_3__["default"]());
          return;
        }
        var cifraView = new _cifra_CifraView__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _this2.setView(cifraView);
        cifraView.setStream(_this2.cifraStream);
        cifraView.loadCifra(transporte.cifraId, function () {
          cifraView.setMarcadorPosicao(transporte.posicao);
          cifraView.setMarcadorPosicao(0);
        });
      });
    }
  }, {
    key: "_loadEvents",
    value: function _loadEvents() {
      var _this3 = this;
      this.cifraStream.onNewCifra(function (cifra) {
        var cifraView = new _cifra_CifraView__WEBPACK_IMPORTED_MODULE_2__["default"]();
        _this3.setView(cifraView);
        cifraView.setStream(_this3.cifraStream);
        cifraView.setCifra(cifra);
      });
    }
  }]);
}(pyllar_component__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/marcador/Marcador.js":
/*!**********************************!*\
  !*** ./src/marcador/Marcador.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Marcador)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Marcador = /*#__PURE__*/function () {
  function Marcador($marcador) {
    _classCallCheck(this, Marcador);
    this.$marcador = $marcador;
    this.note = null;
    this.rolagemAutomatica = true;
  }
  return _createClass(Marcador, [{
    key: "move",
    value: function move(note) {
      var _this = this;
      if (note == null) return;
      var position = note.position();
      var w = note.width();
      var h = note.height();
      this.$marcador.css('top', position.top - 2).css('left', position.left - 7);
      this.$marcador.css('width', w + 13).css('height', h + 4);
      note.save();
      setTimeout(function () {
        note.highlight();
      }, 200);
      if (this.note) {
        this.note.restore();
      }
      this.note = note;
      setTimeout(function () {
        _this._moveScroll(note);
      }, 200);
    }
  }, {
    key: "setRolagemAutomatica",
    value: function setRolagemAutomatica(b) {
      this.rolagemAutomatica = b;
    }
  }, {
    key: "show",
    value: function show() {
      this.$marcador.show();
    }
  }, {
    key: "hide",
    value: function hide() {
      this.$marcador.hide();
    }
  }, {
    key: "_moveScroll",
    value: function _moveScroll(note) {
      if (!this.rolagemAutomatica) {
        return;
      }
      var wh = window.innerHeight;
      var wh2 = wh / 2;
      var np = note.position().top;
      var nt = np - window.scrollY;
      if (nt > wh2) {
        window.scrollBy(0, note.height() / 2 + nt - wh2);
      }
      var rect = this.$marcador.get(0).getBoundingClientRect();
      if (rect.top < 0) {
        window.scrollBy(0, rect.top - 60);
      }
    }
  }]);
}();

;

/***/ }),

/***/ "./src/note/Note.js":
/*!**************************!*\
  !*** ./src/note/Note.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Note)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Note = /*#__PURE__*/function () {
  function Note($note) {
    _classCallCheck(this, Note);
    this.$note = $note;
  }
  return _createClass(Note, [{
    key: "highlight",
    value: function highlight() {
      this.$note.css('color', 'white');
    }
  }, {
    key: "restore",
    value: function restore() {
      this.$note.css('color', this.$note.attr('data-color'));
    }
  }, {
    key: "save",
    value: function save() {
      this.$note.attr('data-color', this.$note.css('color'));
    }
  }, {
    key: "position",
    value: function position() {
      return this.$note.position();
    }
  }, {
    key: "width",
    value: function width() {
      return this.$note.width();
    }
  }, {
    key: "height",
    value: function height() {
      return this.$note.height();
    }
  }, {
    key: "$element",
    get: function get() {
      return this.$note;
    }
  }]);
}();

;

/***/ }),

/***/ "./src/note/NoteCollection.js":
/*!************************************!*\
  !*** ./src/note/NoteCollection.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotesCollection)
/* harmony export */ });
/* harmony import */ var _Note__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Note */ "./src/note/Note.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }

var NotesCollection = /*#__PURE__*/function (_Array) {
  function NotesCollection($notes) {
    var _this;
    _classCallCheck(this, NotesCollection);
    _this = _callSuper(this, NotesCollection);
    $notes.get().forEach(function (note, index) {
      _this.push(new _Note__WEBPACK_IMPORTED_MODULE_0__["default"]($(note)));
    });
    return _this;
  }
  _inherits(NotesCollection, _Array);
  return _createClass(NotesCollection, [{
    key: "getNoteByPosition",
    value: function getNoteByPosition(p) {
      return this[p - 1];
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Array));

;

/***/ }),

/***/ "./src/transporte/TransporteModel.js":
/*!*******************************************!*\
  !*** ./src/transporte/TransporteModel.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TransporteModel)
/* harmony export */ });
/* harmony import */ var pyllar_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pyllar/config */ "./node_modules/pyllar/config.js");
/* harmony import */ var pyllar_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pyllar/model */ "./node_modules/pyllar/model.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var TransporteModel = /*#__PURE__*/function (_PiModel) {
  function TransporteModel() {
    _classCallCheck(this, TransporteModel);
    return _callSuper(this, TransporteModel, arguments);
  }
  _inherits(TransporteModel, _PiModel);
  return _createClass(TransporteModel, [{
    key: "init",
    value: function init() {
      _get(_getPrototypeOf(TransporteModel.prototype), "init", this).call(this, pyllar_config__WEBPACK_IMPORTED_MODULE_0__["default"].get('endpoint.transporte'));
    }
  }, {
    key: "actions",
    value: function actions() {
      return {
        'get': 'GET:/'
      };
    }
  }]);
}(pyllar_model__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/app.css":
/*!***********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/app.css ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --app-color: #a007ff;
}

.btn-primary {
    background-color: var(--app-color) !important;
    border-color: var(--app-color) !important;
}`, "",{"version":3,"sources":["webpack://./src/app.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;AACxB;;AAEA;IACI,6CAA6C;IAC7C,yCAAyC;AAC7C","sourcesContent":[":root{\r\n    --app-color: #a007ff;\r\n}\r\n\r\n.btn-primary {\r\n    background-color: var(--app-color) !important;\r\n    border-color: var(--app-color) !important;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/cifra/CifraAnime.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/cifra/CifraAnime.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%271600%27 height=%27198%27%3e%3cdefs%3e%3clinearGradient id=%27a%27 x1=%2750%25%27 x2=%2750%25%27 y1=%27-10.959%25%27 y2=%27100%25%27%3e%3cstop stop-color=%27%23fcc900%27 stop-opacity=%27.25%27 offset=%270%25%27/%3e%3cstop stop-color=%27%23fcc900%27 offset=%27100%25%27/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill=%27url%28%23a%29%27 fill-rule=%27evenodd%27 d=%27M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z%27/%3e%3c/svg%3e */ "data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%271600%27 height=%27198%27%3e%3cdefs%3e%3clinearGradient id=%27a%27 x1=%2750%25%27 x2=%2750%25%27 y1=%27-10.959%25%27 y2=%27100%25%27%3e%3cstop stop-color=%27%23fcc900%27 stop-opacity=%27.25%27 offset=%270%25%27/%3e%3cstop stop-color=%27%23fcc900%27 offset=%27100%25%27/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill=%27url%28%23a%29%27 fill-rule=%27evenodd%27 d=%27M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z%27/%3e%3c/svg%3e"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cifra-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #01101D;
}

.cifra-preview .box {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
}

.cifra-preview .box:before {
    position: absolute;
    content: '';
    width: calc(100% + 30px);
    height: calc(100% + 30px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(.7);
    filter: blur(0);
    opacity: 1;
    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1);
}

.cifra-preview .box:hover:before {
    transform: translate(-50%, -50%) scale(1);
    filter: blur(50px);
}

.cifra-preview .box-inner {
    position: relative;
    width: 100%;
    height: 100%;
}

.cifra-preview .box:before,
.cifra-preview .box-inner {
    background-color: #440099;
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.58);
    /* border-radius: 21px; */

    background-image:
        url(${___CSS_LOADER_URL_REPLACEMENT_0___}),
        url(${___CSS_LOADER_URL_REPLACEMENT_0___}),
        url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-repeat: repeat-x;
    background-size: 1600px 50%;
    background-position: 0 130%, -50px 130%, 500px 130%;

    animation: 20s waves linear infinite forwards;
}

@keyframes waves {
    to {
        background-position: 1600px 130%, 3150px 130%, 5300px 130%;
    }
}`, "",{"version":3,"sources":["webpack://./src/cifra/CifraAnime.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,aAAa;IACb,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,WAAW;IACX,YAAY;IACZ,QAAQ;IACR,WAAW;IACX,SAAS;IACT,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,wBAAwB;IACxB,yBAAyB;IACzB,QAAQ;IACR,SAAS;IACT,0CAA0C;IAC1C,eAAe;IACf,UAAU;IACV,oDAAoD;AACxD;;AAEA;IACI,yCAAyC;IACzC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,YAAY;AAChB;;AAEA;;IAEI,yBAAyB;IACzB,8CAA8C;IAC9C,yBAAyB;;IAEzB;;;+CAG4e;IAC5e,2BAA2B;IAC3B,2BAA2B;IAC3B,mDAAmD;;IAEnD,6CAA6C;AACjD;;AAEA;IACI;QACI,0DAA0D;IAC9D;AACJ","sourcesContent":[".cifra-preview {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100vh;\r\n    background-color: #01101D;\r\n}\r\n\r\n.cifra-preview .box {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    right: 0px;\r\n}\r\n\r\n.cifra-preview .box:before {\r\n    position: absolute;\r\n    content: '';\r\n    width: calc(100% + 30px);\r\n    height: calc(100% + 30px);\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%) scale(.7);\r\n    filter: blur(0);\r\n    opacity: 1;\r\n    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1);\r\n}\r\n\r\n.cifra-preview .box:hover:before {\r\n    transform: translate(-50%, -50%) scale(1);\r\n    filter: blur(50px);\r\n}\r\n\r\n.cifra-preview .box-inner {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.cifra-preview .box:before,\r\n.cifra-preview .box-inner {\r\n    background-color: #440099;\r\n    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.58);\r\n    /* border-radius: 21px; */\r\n\r\n    background-image:\r\n        url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23fcc900' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23fcc900' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e\"),\r\n        url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23fcc900' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23fcc900' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e\"),\r\n        url(\"data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3e%3cstop stop-color='%23fcc900' stop-opacity='.25' offset='0%25'/%3e%3cstop stop-color='%23fcc900' offset='100%25'/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z'/%3e%3c/svg%3e\");\r\n    background-repeat: repeat-x;\r\n    background-size: 1600px 50%;\r\n    background-position: 0 130%, -50px 130%, 500px 130%;\r\n\r\n    animation: 20s waves linear infinite forwards;\r\n}\r\n\r\n@keyframes waves {\r\n    to {\r\n        background-position: 1600px 130%, 3150px 130%, 5300px 130%;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/cifra/CifraView.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/cifra/CifraView.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cifra-view .marcador {
    position: absolute;
    background: red;
    color: white;
    padding: 2px 10px;
    z-index: -1;
    border-radius: 4px;
    transition: top 0.2s, left 0.2s, width 0.2s, height 0.2s;
    display: none;
}

.cifra-view pre {
    padding-left: 15px;
}

.cifra-view .center {
    position: fixed;
    top: 50%;
    left: 0px;
    right: 0px;
    height: 2px;
    /* background-color: #333; */
}

.cifra-view b {
    color: #f70;
}

.cifra-view.no-chords b {
    color: #fff;
    background-color: #fff;

}

.cifra-view.no-chords .marcador {
    color: #fff;
    background-color: #fff;

}

.cifra-view i {
    background-color: #fffb39;
    color: #555;
    border: 1px solid #333;
    font-style: normal;
}

.cifra-view .titulo {
    font-size: 16px;
    font-family: Roboto;
    font-weight: bold;
    background: var(--app-color);
    /*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=5e21c7&c2=a33cd3&gt=l&gd=dtl
*/
    background: #5E21C7;
    background: linear-gradient(135deg, #5E21C7, #A33CD3);
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    color: #fff;
    padding: 10px;
    margin-bottom: 30px;
}

.cifra-view .options {
    margin-bottom: 30px;
}

.cifra-view .options .form-check {
    margin: 5px;
}`, "",{"version":3,"sources":["webpack://./src/cifra/CifraView.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,kBAAkB;IAClB,wDAAwD;IACxD,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,QAAQ;IACR,SAAS;IACT,UAAU;IACV,WAAW;IACX,4BAA4B;AAChC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,WAAW;IACX,sBAAsB;;AAE1B;;AAEA;IACI,WAAW;IACX,sBAAsB;;AAE1B;;AAEA;IACI,yBAAyB;IACzB,WAAW;IACX,sBAAsB;IACtB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,4BAA4B;IAC5B;;;CAGH;IACG,mBAAmB;IACnB,qDAAqD;IACrD,+BAA+B;IAC/B,8BAA8B;IAC9B,WAAW;IACX,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf","sourcesContent":[".cifra-view .marcador {\n    position: absolute;\n    background: red;\n    color: white;\n    padding: 2px 10px;\n    z-index: -1;\n    border-radius: 4px;\n    transition: top 0.2s, left 0.2s, width 0.2s, height 0.2s;\n    display: none;\n}\n\n.cifra-view pre {\n    padding-left: 15px;\n}\n\n.cifra-view .center {\n    position: fixed;\n    top: 50%;\n    left: 0px;\n    right: 0px;\n    height: 2px;\n    /* background-color: #333; */\n}\n\n.cifra-view b {\n    color: #f70;\n}\n\n.cifra-view.no-chords b {\n    color: #fff;\n    background-color: #fff;\n\n}\n\n.cifra-view.no-chords .marcador {\n    color: #fff;\n    background-color: #fff;\n\n}\n\n.cifra-view i {\n    background-color: #fffb39;\n    color: #555;\n    border: 1px solid #333;\n    font-style: normal;\n}\n\n.cifra-view .titulo {\n    font-size: 16px;\n    font-family: Roboto;\n    font-weight: bold;\n    background: var(--app-color);\n    /*\n* Created with https://www.css-gradient.com\n* Gradient link: https://www.css-gradient.com/?c1=5e21c7&c2=a33cd3&gt=l&gd=dtl\n*/\n    background: #5E21C7;\n    background: linear-gradient(135deg, #5E21C7, #A33CD3);\n    border-bottom-right-radius: 7px;\n    border-bottom-left-radius: 7px;\n    color: #fff;\n    padding: 10px;\n    margin-bottom: 30px;\n}\n\n.cifra-view .options {\n    margin-bottom: 30px;\n}\n\n.cifra-view .options .form-check {\n    margin: 5px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/homepage/HomePage.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/homepage/HomePage.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.homepage .menu {
    background: var(--app-color);
    color: #fff;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-bottom: 20px;
}

.homepage .menu a{
    color: #fff;
}`, "",{"version":3,"sources":["webpack://./src/homepage/HomePage.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,WAAW;IACX,gCAAgC;IAChC,+BAA+B;IAC/B,mBAAmB;AACvB;;AAEA;IACI,WAAW;AACf","sourcesContent":[".homepage .menu {\r\n    background: var(--app-color);\r\n    color: #fff;\r\n    border-bottom-right-radius: 10px;\r\n    border-bottom-left-radius: 10px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.homepage .menu a{\r\n    color: #fff;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/pyllar/action.js":
/*!***************************************!*\
  !*** ./node_modules/pyllar/action.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiAction)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./node_modules/pyllar/class.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./node_modules/pyllar/request.js");
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./promise */ "./node_modules/pyllar/promise.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./type */ "./node_modules/pyllar/type.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./url */ "./node_modules/pyllar/url.js");






/**
 * @class
 */
class PiAction extends _class__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #request = new _request__WEBPACK_IMPORTED_MODULE_1__["default"]();
    #promise = new _promise__WEBPACK_IMPORTED_MODULE_2__["default"]();

    constructor(options) {
        super(options)

        this._load();
    }

    /**
     * Retorna a promise
     * 
     * @returns {PiPromise}
     */
    get promise() {
        return this.#promise;
    }

    /**
     * Shadow method
     */
    invoke() {
        return this._callModelMethod.apply(this, arguments);
    }

    processErrorResponse() {
        this.#promise.reject.apply(this.#promise, arguments);
    }

    processSuccessResponse(data, paging) {
        if (this._ignore_response) {
            this.#promise.resolve(this.model);
            return;
        }

        if (_type__WEBPACK_IMPORTED_MODULE_3__["default"].isArray(data)) {
            const arr = [];
            const promises = [];

            for (let i = 0; i < data.length; i++) {
                const model = this.model.create().initWithJson(data[i]);

                if (model instanceof _promise__WEBPACK_IMPORTED_MODULE_2__["default"]) {
                    model.ok((data) => {
                        arr.push(data);
                    });

                    promises.push(model);
                } else {
                    arr.push(model);
                }
            }

            if (promises.length == 0) {
                this.#promise.resolve(arr, paging);
            } else {
                _promise__WEBPACK_IMPORTED_MODULE_2__["default"].wait(promises).ok(() => {
                    this.#promise.resolve(arr, paging);
                });
            }
        } else {
            const model = this.model.create().initWithJson(data);

            if (model instanceof _promise__WEBPACK_IMPORTED_MODULE_2__["default"]) {
                model.ok((data) => {
                    this.#promise.resolve(data, paging);
                });
            } else {
                this.#promise.resolve(model, paging);
            }
        }
    }

    _load() {
        this._parseStmt(this.actionStmt);
        this._addModelMethod();
    }

    _addModelMethod() {
        var self = this;

        if (this._is_static) {
            this.model.constructor[this.actionName] = function () {
                const action = new PiAction({
                    actionName: self.name,
                    actionStmt: self.stmt,
                    model: self.model.clone()
                });

                const promise = action.invoke.apply(action, arguments);
                return new Promise((ok, error) => {
                    promise.ok(ok);
                    promise.error(error);
                });
            };

            return;
        }

        this.model[this.actionName] = function () {
            const promise = self.invoke.apply(self, arguments);
            return new Promise((ok, error) => {
                promise.ok(ok);
                promise.error(error);
            });
        };
    }

    _callModelMethod(...args) {
        this.#promise = new _promise__WEBPACK_IMPORTED_MODULE_2__["default"]();

        if (_type__WEBPACK_IMPORTED_MODULE_3__["default"].isObject(args[0])) {
            this.model.inject(args[0]);
        }

        if (this._method == 'GET' || this._method == 'OPTIONS') {
            this._createRequestGet.apply(this, args);
        }

        if (this._method == 'PUT' || this._method == 'POST' || this._method == 'DELETE' || this._method == 'PATH') {
            this._createRequestPost.apply(this, args);
        }

        return this.#promise;
    }

    _createRequestGet(...args) {
        let url = this._createUrl(...args);

        if (this.#request.isSending()) {
            this.#request.abort();
        }

        this.model.requestWillGet(url);

        this.#request.getJson(url)
            .then((json) => {
                this.model.responseSuccessWillLoad.apply(this.model, [this, url, json.data, json.paging]);
            })
            .catch((json) => {
                if (args[0] instanceof TypeError) {
                    throw args[0];
                }

                this.model.responseErrorWillLoad.apply(this.model, [this, url, json.data, json.paging]);
            });

        this.model.requestDidGet(url);
    }

    _createRequestPost(...args) {
        let url = this._createUrl(...args);
        let json = this.model.toJson();

        if (this.#request.isSending()) {
            this.#request.abort();
        }

        this.model.requestWillPost(json, url);
        this.#request.setMethod(this._method).postJson(url, json)
            .then((json) => {
                this.model.responseSuccessWillLoad.apply(this.model, [this, url, json.data, json.paging]);
            }).catch((...args) => {
                if (args[0] instanceof TypeError) {
                    throw args[0];
                }

                this.model.responseErrorWillLoad.apply(this.model, [this, url, json.data, json.paging]);
            });

        this.model.requestDidPost(json, url);
    }

    _createUrl(...args) {
        let action = this._getAction(...args);
        let url = '';

        if (this.model.getBaseUrl() instanceof _url__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            url = _url__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.model.getBaseUrl()).path(action);
        } else {
            if (this.model.getBaseUrl().indexOf('http') > -1) {
                url = _url__WEBPACK_IMPORTED_MODULE_4__["default"].create(this.model.getBaseUrl() + action);
            } else {
                url = _url__WEBPACK_IMPORTED_MODULE_4__["default"].create('localhost', this.model.getBaseUrl() + action);
            }
        }

        return url;
    }

    _getAction(...args) {
        let count = 0;

        return this._url.replace(/\:\w+[\(\w*\)]*/gi, (pattern) => {
            let property = pattern.substring(1);
            let modelValue = this.model[property] || '';

            if (args.length == 0) {
                return modelValue;
            } else {
                return (args[count++] || modelValue).toString();
            }
        });
    }

    _parseStmt(stmt) {
        const p = stmt.split(':/');
        const method = p[0];
        const path = p[1];

        this._is_static = false;
        if (method.indexOf('static') > -1) {
            this._is_static = true;
        }

        this._ignore_response = false;
        if (method.indexOf('~') > -1) {
            this._ignore_response = true;
        }

        this._url = path.length ? '/' + path : '';

        if (stmt.toUpperCase().indexOf('GET') > -1) {
            this._method = 'GET';
        } else if (stmt.toUpperCase().indexOf('POST') > -1) {
            this._method = 'POST';
        } else if (stmt.toUpperCase().indexOf('PUT') > -1) {
            this._method = 'PUT';
        } else if (stmt.toUpperCase().indexOf('DELETE') > -1) {
            this._method = 'DELETE';
        } else if (stmt.toUpperCase().indexOf('PATH') > -1) {
            this._method = 'PATH';
        } else if (stmt.toUpperCase().indexOf('OPTIONS') > -1) {
            this._method = 'OPTIONS';
        } else if (this._url.indexOf('?') > -1) {
            this._method = 'GET';
        } else {
            this._method = 'POST';
        }
    }

};

/***/ }),

/***/ "./node_modules/pyllar/alias.js":
/*!**************************************!*\
  !*** ./node_modules/pyllar/alias.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiAs)
/* harmony export */ });
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dictionary */ "./node_modules/pyllar/dictionary.js");


/**
 * @class
 */
class PiAs {
    #alias = new _dictionary__WEBPACK_IMPORTED_MODULE_0__["default"]();

    /**
     * Adiciona a lista de parametros ao conjunto
     * 
     * @returns {boolean}
     */
    add() {
        if (arguments.length < 2) {
            throw "PiAs: numero insulficiente de parametros";
        }

        if (this.#alias.existKey(arguments[0])) {
            throw "PiAs: este apelido ja foi definido: " + arguments[0];
        }

        let value = "";
        for (let i = 1; i < arguments.length; i++) {
            let as = arguments[i];

            if (this.#alias.existKey(as)) {
                value += this.#alias.getValue(as);
            } else {
                value += as;
            }
        }

        this.#alias.add(arguments[0], value);

        return true;
    }

    /**
     * Atualiza o conjunto
     * @returns {boolean}
     */
    update() {
        if (arguments.length < 2) {
            throw "PiAs: numero insulficiente de parametros";
        }

        if (this.#alias.existKey(arguments[0])) {
            this.remove(arguments[0]);
            return false;
        }

        let value = "";
        for (let i = 1; i < arguments.length; i++) {
            let as = arguments[i];

            if (this.#alias.existKey(as)) {
                value += this.#alias.getValue(as);
            } else {
                value += as;
            }
        }

        this.#alias.add(arguments[0], value);

        return true;
    }

    /**
     * Remove um item do conjunto
     * 
     * @param {string} as - Item
     * @returns {boolean}
     */
    remove(as) {
        this.#alias.remove(as);

        return this;
    }

    /**
     * Retorna se existe o item no conjunto
     * 
     * @param {string} as 
     * @returns {boolean}
     */
    exist(as) {
        return this.#alias.existKey(as);
    }

    /**
     * Retorna o valor do item
     * 
     * @param {string} as 
     * @returns {object}
     */
    getValue(as) {
        let v = this.#alias.getValue(as);

        if (this.exist(as) == false) {
            return null;
        } else if (this.#alias.existKey(v)) {
            return this.getValue(v);
        } else {
            return v;
        }
    }

};

/***/ }),

/***/ "./node_modules/pyllar/app.js":
/*!************************************!*\
  !*** ./node_modules/pyllar/app.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiApp)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./node_modules/pyllar/class.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url */ "./node_modules/pyllar/url.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");
/* harmony import */ var _url_hash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./url_hash */ "./node_modules/pyllar/url_hash.js");





if ((0,_env__WEBPACK_IMPORTED_MODULE_2__.location)().host.length == 0) {
    _url__WEBPACK_IMPORTED_MODULE_1__["default"].add('localhost', 'http://localhost');
} else {
    _url__WEBPACK_IMPORTED_MODULE_1__["default"].add('localhost', _url__WEBPACK_IMPORTED_MODULE_1__["default"].create((0,_env__WEBPACK_IMPORTED_MODULE_2__.location)().toString()).href());
}

/**
 * @class
 */
class PiApp extends _class__WEBPACK_IMPORTED_MODULE_0__["default"] {
    page = null;
    services = [];
    _totalRouteNotFound = 0;

    init(){
        super.init();

        _url_hash__WEBPACK_IMPORTED_MODULE_3__["default"].onWillChange(() => {
            this._totalRouteNotFound = 0;
        });
    }

    register() {
        for (let i = 0; i < arguments.length; i++) {
            const cpo = arguments[i];
            (0,_env__WEBPACK_IMPORTED_MODULE_2__.register)(cpo);
        }

        return this;
    }

    addServices() {
        for (let i = 0; i < arguments.length; i++) {
            const service = arguments[i];

            service.onRouteNotFound((route) => {
                this._totalRouteNotFound++;

                if (this._totalRouteNotFound == this.services.length) {
                    this.#routeNotFound(route);
                }
            });

            this.services.push(service);
        }

        return this;
    }
    
    startServices() {
        for (let i = 0; i < this.services.length; i++) {
            const service = this.services[i];
            service.start();
        }

        return this;
    }

    stopServices() {
        for (let i = 0; i < this.services.length; i++) {
            const service = this.services[i];
            service.stop();
        }

        return this;
    }

    setPage(page) {
        if (this.page) {
            this.page.destroy();
        }

        page.render(this.element);

        this.page = page;

        return this;
    }

    getPage(){
        return this.page;
    }

    openModal(modal) {
        modal.render(this.element, true);
    }

    #routeNotFound(route) {
        for (let i = 0; i < this.services.length; i++) {
            const service = this.services[i];
            if (service.routeNotFound) {
                service.routeNotFound(route);
            }
        }

        return this;
    }

};

/***/ }),

/***/ "./node_modules/pyllar/array.js":
/*!**************************************!*\
  !*** ./node_modules/pyllar/array.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiArray)
/* harmony export */ });
/**
 * @class
 * @name PiArray
 */
class PiArray {
    static addMethod(array, name, cb) {
        const cbs = [];
        if (array[name] != undefined) {
            cbs.push(cb);
            return;
        }

        Object.defineProperty(array, name, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function (...params) {
                cb.call(array, ...params);
                return this;
            }
        })
    }
};

/***/ }),

/***/ "./node_modules/pyllar/boot.js":
/*!*************************************!*\
  !*** ./node_modules/pyllar/boot.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiBoot)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/pyllar/config.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./node_modules/pyllar/app.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree */ "./node_modules/pyllar/tree.js");
/* harmony import */ var _virtual_tree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./virtual_tree */ "./node_modules/pyllar/virtual_tree.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class */ "./node_modules/pyllar/class.js");







/**
 * @class
 */
class PiBoot extends _class__WEBPACK_IMPORTED_MODULE_5__["default"] {

    createApp() {
        if ((0,_env__WEBPACK_IMPORTED_MODULE_1__.app)() == undefined) {
            _env__WEBPACK_IMPORTED_MODULE_1__.global.app = new _app__WEBPACK_IMPORTED_MODULE_2__["default"]();
            _env__WEBPACK_IMPORTED_MODULE_1__.global.app._scope = { context: _env__WEBPACK_IMPORTED_MODULE_1__.app };
        } else {
            _env__WEBPACK_IMPORTED_MODULE_1__.global.app = new App();
            _env__WEBPACK_IMPORTED_MODULE_1__.global.app._scope = { context: _env__WEBPACK_IMPORTED_MODULE_1__.app };
        }

        return _env__WEBPACK_IMPORTED_MODULE_1__.global.app;
    }

    loadApp() {
        if (_config__WEBPACK_IMPORTED_MODULE_0__["default"].get('app.parse.enable')) {
            this.#createVirtualTree();
        }
    }

    #createVirtualTree() {
        const element = document.querySelector(_config__WEBPACK_IMPORTED_MODULE_0__["default"].get('app.parse.selector'));
        if (element == null) {
            throw `PiBoot: Não foi possível encontrar o elemento pelo seletor informado ${_config__WEBPACK_IMPORTED_MODULE_0__["default"].get('app.parse.selector')}`;
        }

        const root = _tree__WEBPACK_IMPORTED_MODULE_3__["default"].parse(element.innerHTML);
        element.innerHTML = '';
        element.append(root);

        const vtree = new _virtual_tree__WEBPACK_IMPORTED_MODULE_4__["default"](element, (0,_env__WEBPACK_IMPORTED_MODULE_1__.app)()._scope, (0,_env__WEBPACK_IMPORTED_MODULE_1__.app)());
        vtree.load();

        (0,_env__WEBPACK_IMPORTED_MODULE_1__.app)().element = element;
        (0,_env__WEBPACK_IMPORTED_MODULE_1__.app)().$element = $(element);
    }
};

/***/ }),

/***/ "./node_modules/pyllar/bootstrap.js":
/*!******************************************!*\
  !*** ./node_modules/pyllar/bootstrap.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bootstrap)
/* harmony export */ });
/* harmony import */ var _boot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boot */ "./node_modules/pyllar/boot.js");
/* harmony import */ var _initialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialize */ "./node_modules/pyllar/initialize.js");
/* harmony import */ var _callback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callback */ "./node_modules/pyllar/callback.js");
/* harmony import */ var _native_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./native_element */ "./node_modules/pyllar/native_element.js");
/* harmony import */ var _native_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_native_element__WEBPACK_IMPORTED_MODULE_3__);





class Bootstrap {
    #hooks = new _callback__WEBPACK_IMPORTED_MODULE_2__["default"]();

    onInit(fn){
        this.#hooks.add('init', fn);

        return this;
    }

    onLoad(fn){
        this.#hooks.add('load', fn);

        return this;
    }

    onReady(fn){
        this.#hooks.add('ready', fn);

        return this;
    }

    async load() {
        const boot = new _boot__WEBPACK_IMPORTED_MODULE_0__["default"]();
        let app = null;

        _initialize__WEBPACK_IMPORTED_MODULE_1__["default"]
            .init(() => {
                this.#hooks.trigger('init', app);
                app = boot.createApp();
            })
            .start(() => {
                this.#hooks.trigger('load', app);
                boot.loadApp();
                this.#hooks.trigger('ready', app);
            });
        
        await _initialize__WEBPACK_IMPORTED_MODULE_1__["default"].load();
    }
}

/***/ }),

/***/ "./node_modules/pyllar/callback.js":
/*!*****************************************!*\
  !*** ./node_modules/pyllar/callback.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiCallback)
/* harmony export */ });
/**
 * @class
 */
class PiCallback {
    #list = [];

    /**
     * Remove todos os listeners
     * 
     * @returns {PiCallback}
     */
    clear() {
        this.#list = [];

        return this;
    }

    /**
     * Adiciona um callback
     * 
     * @param {string} name - Nome do callback
     * @param {function} fn - Função de callback
     * @param {object} ctx - Contexto onde o callback será chamado
     * @returns {PiCallback}
     */
    add(name, fn, ctx) {
        if (this.#list[name] == null) {
            this.#list[name] = [];
        }

        this.#list[name].push({ name: name, fn: fn, ctx: ctx });

        return this;
    }

    /**
     * Remove um callback por nome
     * 
     * @param {string} name - Nome do callback
     * @returns {PiCallback}
     */
    remove(name) {
        if (!this.exist(name)) return this;

        this.#list[name] = [];

        return this;
    }

    /**
     * Verifica se existe um callback adicionado
     * 
     * @param {string} name - Nome do callback
     * @returns {boolean}
     */
    exist(name) {
        return this.#list[name] != null;
    }

    /**
     * Returna uma lista com todos os callbacks adicionado pelo nome
     * 
     * @param {string} name - Nome do callback
     * @returns {array}
     */
    get(name) {
        if (!this.exist(name)) return [];
        return this.#list[name];
    }

    /**
     * Alias para get(name)
     * 
     * @param {string} name - Nome do callback
     * @returns {array}
     */
    findAll(name) {
        return this.get(name);
    }

    /**
     * Dispara os callback adicionados pelo nome
     * 
     * @param {string} name - Nome
     * @param  {...any} args - Lista de parametros passado para o callback
     * @returns {object}
     */
    trigger(name, ...args) {
        let arr = this.findAll(name);
        let r = undefined;

        for (let i = 0; i < arr.length; i++) {
            let item = arr[i];

            r = item.fn.apply(item.ctx, args);
        }

        return r;
    }
};

/***/ }),

/***/ "./node_modules/pyllar/class.js":
/*!**************************************!*\
  !*** ./node_modules/pyllar/class.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiClass)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/pyllar/type.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./node_modules/pyllar/object.js");



/**
 * @class
 */
class PiClass {
    #parameters = null;

    constructor(...args) {
        this.instances(...args);

        if (_type__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(args[0])) {
            _object__WEBPACK_IMPORTED_MODULE_1__["default"].extendAndCall(this, args[0]);
        }

        this.#parameters = args[0] == undefined ? {} : args[0];

        this.init(...args);
    }

    instances() {

    }

    /**
     * Retorna o parametro fornecido na criação do objeto
     * 
     * @returns {object}
     */
    get parameters() {
        return this.#parameters;
    }

    /**
     * Injeta as propriedades do objeto
     * 
     * @param {json} json - Objeto a ser injetado no objeto atual
     * @returns {this}
     */
    inject(json) {
        for (var property in json) {
            this[property] = json[property];
        }

        return this;
    }

    init() {

    }

    jsonWillConvert() {

    }

    /**
     * Converte o objeto em um json
     * 
     * @returns {object}
     */
    toJson() {
        this.jsonWillConvert();
        let json = JSON.parse(JSON.stringify(this));
        this.jsonDidConvert(json);

        return json;
    }

    jsonDidConvert(json) {

    }

    cloneWillLoad() {

    }

    /**
     * Clona o objeto atual
     * 
     * @returns {this}
     */
    clone() {
        this.cloneWillLoad();
        let json = this.toJson();
        let clone = new this.constructor(json);
        this.cloneDidLoad(clone);

        return clone;
    }

    cloneDidLoad() {

    }

    /**
     * Cria uma nova instancia da classe
     * 
     * @param  {...any} args 
     * @returns {this}
     */
    static create(...args) {
        return new this(...args);
    }

    create(...args) {
        return new this.constructor(...args);
    }
};

/***/ }),

/***/ "./node_modules/pyllar/component.js":
/*!******************************************!*\
  !*** ./node_modules/pyllar/component.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiComponent)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/pyllar/type.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "./node_modules/pyllar/class.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./node_modules/pyllar/event.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string */ "./node_modules/pyllar/string.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model */ "./node_modules/pyllar/model.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object */ "./node_modules/pyllar/object.js");
/* harmony import */ var _tree__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tree */ "./node_modules/pyllar/tree.js");
/* harmony import */ var _virtual_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./virtual_tree */ "./node_modules/pyllar/virtual_tree.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./promise */ "./node_modules/pyllar/promise.js");
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./random */ "./node_modules/pyllar/random.js");













const $ = _env__WEBPACK_IMPORTED_MODULE_8__.global.$;

/**
 * @class
 */
class PiComponent extends _class__WEBPACK_IMPORTED_MODULE_1__["default"] {
    event = new _event__WEBPACK_IMPORTED_MODULE_2__["default"]();

    #vtrees = [];
    #watchs = [];
    #scope = null;
    #$element = null;
    #isParentElement = false;
    #elementId = '';

    constructor(...args) {
        super(...args);

        this.#scope = {
            context: this
        };

        this.#elementId = _random__WEBPACK_IMPORTED_MODULE_10__["default"].uuid('xx-xx');
    }

    init(...args) {
        super.init(...args);

        this._loadPromise = new _promise__WEBPACK_IMPORTED_MODULE_9__["default"]();
        this.willLoad(this._loadPromise);
    }

    /**
     * Injeta o modelo em todos os elementos de pagina com o atributo 'data-model'
     * Caso o parametro seja um json, seu valor será embutido no component
     * 
     * @param {PiModel} model - Modelo a ser injetado
     * @returns {PiComponent}
     */
    inject(model) {
        if (model instanceof _model__WEBPACK_IMPORTED_MODULE_4__["default"]) {
            const names = _string__WEBPACK_IMPORTED_MODULE_3__["default"].clips(this.view, 'data-model="', '"');
            for (let i = 0; i < names.length; i++) {
                const name = names[i];
                const element = this.element.querySelector('[data-model="' + name + '"]');
                const value = _object__WEBPACK_IMPORTED_MODULE_5__["default"].extractValue(model, name);

                if (element._hasComponent) {
                    element._component.set(value);
                } else if (element.firstChild && element.firstChild._hasComponent) {
                    element.firstChild._component.set(value);
                } else {
                    element.set(value);
                }
            }
        } else {
            super.inject(model);
        }

        return this;
    }

    /**
     * Retorna o valor que representa o component
     * 
     * @returns {string}
     */
    get() {
        return '';
    }

    /**
     * Define um valor para o component
     * Dispara o evento 'change'
     * 
     * @returns {PiComponent}
     */
    set(value) {
        if (this.element == null) {
            return this;
        }

        this.dispatchEvent('change', value);

        return this;
    }

    /**
     * Dispara um evento nativo sobre o elemento
     * 
     * @param {string} eventName - Nome do evento
     * @param {Object} param - Objeto a ser passado pelo evento
     * @returns {PiComponent}
     */
    dispatchEvent(eventName, param, newEvent = true) {
        if (this.element == null) {
            return this;
        }

        var event = param;
        if (newEvent) {
            event = new CustomEvent(eventName, {
                bubbles: true,
                cancelable: true,
                composed: false,
                detail: param,
            });
        }

        if (this.#isParentElement) {
            this.element.dispatchEvent(event);
        } else {
            this.element.parentElement.dispatchEvent(event);
        }

        return this;
    }

    /**
     * Retorna wrapper jquery
     * 
     * @returns {jQueryElement}
     */
    get $element() {
        if (this.#$element) return this.#$element;
        return this.#$element = $(this.element);
    }

    /**
     * Renderiza o elemento anexando ou inserindo no elemento
     * 
     * @param {Element} element - Elemento html onde o componente será renderizado
     * @param {boolean} append 
     * @returns {PiComponent}
     */
    render(element, append = false) {
        if (element instanceof $) {
            element = element.get(0);
        }

        this._loadPromise.once(() => {
            this.#loadAttributes(element);

            if (element.mount) {
                element.mount(this);
            }

            this.viewWillLoad();
            this.viewWillRender();
            this.viewRender(element, append);
            this.viewDidRender();
            this.#listen();
            this.viewDidLoad();

            if (element.didMount) {
                element.didMount(this);
            }

            this.element.setAttribute('data-id', this.#elementId);
        });

        return this;
    }

    get isRendered() {
        const elemento = document.querySelector(`[data-id="${this.#elementId}"]`);
        return document.contains(elemento);
    }

    willLoad(promise) {
        promise.resolve();
    }

    didLoad() {

    }

    viewWillLoad() {

    }

    viewWillRender() {

    }

    viewDidRender() {

    }

    viewRender(element, append = false) {
        if (!append) {
            element.innerHTML = '';
        }

        if (this.view) {
            const elements = this.loadView(this.view, element);

            if (elements.length == 1) {
                this.element = elements[0];
                this.#isParentElement = false;
            } else {
                this.element = element;
                this.#isParentElement = true;
            }

        } else {
            this.element = element;
        }
    }

    viewDidLoad() {

    }

    /**
     * Monitora alteração sobre propriedade 
     * 
     * @param {string} property - Nome da propriedade a ser monitorada
     * @param {function} fn - Função de callback
     * @returns {PiElement}
     */
    watch(property, fn) {
        const ids = _object__WEBPACK_IMPORTED_MODULE_5__["default"].on(this.#scope, 'context.' + property, fn)
        this.#watchs = this.#watchs.concat({
            property: property,
            ids: ids
        });

        return this;
    }

    /**
     * Para de monitorar uma proprieade do contexto
     * 
     * @param {string} property - Nome da propriedade
     * @returns {PiElement}
     */
    unWatch(property) {
        const arr = this.#watchs;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].property == property) {
                _object__WEBPACK_IMPORTED_MODULE_5__["default"].off(this.#scope, arr[i].ids);
                break;
            }
        }

        return this;
    }

    destroy() {
        for (let i = 0; i < this.#vtrees.length; i++) {
            const vtree = this.#vtrees[i];
            vtree.destroy();
        }
        this.#vtrees = [];

        this.#clearContextWatch();
    }

    loadView(view, element) {
        const root = _tree__WEBPACK_IMPORTED_MODULE_6__["default"].parse(view);
        const children = [];

        for (; root.childElementCount;) {
            const child = root.children[0];
            element.append(child);
            children.push(child);
        }

        this.#loadTree(children);

        return children;
    }

    #loadTree(tree) {
        const vtree = new _virtual_tree__WEBPACK_IMPORTED_MODULE_7__["default"](tree, this.#scope, this);
        vtree.load();
        this.#vtrees.push(vtree);
    }

    #listen() {
        if (this.element == null) {
            return this;
        }

        const self = this;
        const observer = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                if (mutation.type == 'childList') {
                    for (var i = 0; i < mutation.addedNodes.length; i++) {
                        const element = mutation.addedNodes[i];
                        self.#loadTree(element);
                    }
                }
            });
        });

        observer.observe(this.element, {
            childList: true,
            attributes: false,
            characterData: false,
            subtree: false,
            attributeOldValue: false,
            characterDataOldValue: false
        });
    }

    #clearContextWatch() {
        let ids = [];

        for (let i = 0; i < this.#watchs.length; i++) {
            ids = ids.concat(this.#watchs[i].ids);
        }

        _object__WEBPACK_IMPORTED_MODULE_5__["default"].off(this.#scope, ids);
        this.#watchs = [];
    }

    #loadAttributes(element) {
        if (element.getAttributeNames == undefined) {
            return;
        }

        const attrs = element.getAttributeNames();

        for (let i = 0; i < attrs.length; i++) {
            const name = attrs[i];
            let value = element.getAttribute(name);

            if (name.indexOf('prop-') == -1) {
                continue
            }

            if (_type__WEBPACK_IMPORTED_MODULE_0__["default"].isString(value) && (_type__WEBPACK_IMPORTED_MODULE_0__["default"].isObject(value) || _type__WEBPACK_IMPORTED_MODULE_0__["default"].isArray(value))) {
                value = JSON.parse(value);
            }

            const cname = name.replace('prop-', '');
            this[cname] = value;
        }
    }

    static register(cpo) {
        (0,_env__WEBPACK_IMPORTED_MODULE_8__.register)(cpo);
    }
}

/***/ }),

/***/ "./node_modules/pyllar/config.js":
/*!***************************************!*\
  !*** ./node_modules/pyllar/config.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/pyllar/object.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");



const defaults = {
    app: {
        parse: {
            enable: true,
            selector: 'body'
        }
    },
    html: {
        loader: 'Carregando ...'
    },
    expression: {
        xlanguage: /(\{>?)([^\}]+)(\})/gi,
        xvariable: /(@)([\w\.]+)/gi,
        xhtml: /(\{>)([^\}]+)(\})/gi,
    },
    history: {
        popstate: false,
        prefixHashtag: true
    },
    services: [],
    request: {
        fetch: null
    }
};

/**
 * @class
 */
class PiConfig {
    /**
     * Define uma configuração
     * 
     * @param {string} key - Parametro da configuração
     * @param {object} value - Valor da configuração
     * @returns {PiConfig}
     */
    static set(key, value) {
        _object__WEBPACK_IMPORTED_MODULE_0__["default"].setProperty(defaults, key, value);

        return PiConfig;
    }

    /**
     * Retorna uma configuração
     * 
     * @param {string} key - Path da configuração
     * @returns {object||string}
     */
    static get(key) {
        return _object__WEBPACK_IMPORTED_MODULE_0__["default"].extractValue(defaults, key);
    };

    /**
     * Carrega um conjunto de configurações
     * 
     * @param {object} settings - Objeto contendo configurações
     * @returns {PiConfig}
     */
    static load(settings) {
        _object__WEBPACK_IMPORTED_MODULE_0__["default"].extend(defaults, settings);
        return PiConfig;
    }

    /**
     * Mescla a configuração atual com a nova configuração informada por parametro
     * 
     * @param {object} settings - Configuração
     * @param {object} value - Valor da configuração
     * @returns {object}
     */
    static extend(settings, value = false) {
        if (value == false) return _object__WEBPACK_IMPORTED_MODULE_0__["default"].extend(defaults, settings);
        else return _object__WEBPACK_IMPORTED_MODULE_0__["default"].extend(defaults, { settings: value });
    }

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PiConfig);

(0,_env__WEBPACK_IMPORTED_MODULE_1__.register)(PiConfig);

/***/ }),

/***/ "./node_modules/pyllar/dictionary.js":
/*!*******************************************!*\
  !*** ./node_modules/pyllar/dictionary.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiDictionary)
/* harmony export */ });
/**
 * @class
 */
class PiDictionary {
    #list = [];

    /**
     * Adiciona o par chave valor
     * 
     * @param {string} key - Chave
     * @param {string} value - Valor
     * @returns {PiDictionary}
     */
    add(key, value) {
        this.#list[key] = value;

        return this;
    }

    /**
     * Verifica se existe a chave
     * 
     * @param {string} key - Chave
     * @returns {boolean}
     */
    existKey(key) {
        return this.#list[key] != undefined;
    }

    /**
     * Verifica se existe o valor
     * 
     * @param {string} value - Valor
     * @returns {boolean}
     */
    existValue(value) {
        for (let i = this.#list.length - 1; i >= 0; i--) {
            if (this.#list[i] == value) return true;
        }

        return false;
    }

    /**
     * Retorna o valor
     * 
     * @param {string} key - Chave
     * @returns {string}
     */
    getValue(key) {
        return this.#list[key];
    }

    /**
     * Remove a chave
     * 
     * @param {string} key - Chave
     * @returns {PiDictionary}
     */
    remove(key) {
        delete this.#list[key];

        return this;
    }

    /**
     * Limpa o dicionario
     * 
     * @returns {PiDictionary}
     */
    clear() {
        this.#list = [];

        return this;
    }

    /**
     * Convert o dicionario em array
     * 
     * @returns {array}
     */
    toArray() {
        return this.#list;
    }

};

/***/ }),

/***/ "./node_modules/pyllar/element.js":
/*!****************************************!*\
  !*** ./node_modules/pyllar/element.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiElement)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/pyllar/object.js");
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expression */ "./node_modules/pyllar/expression.js");
/* harmony import */ var _statement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statement */ "./node_modules/pyllar/statement.js");
/* harmony import */ var _virtual_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./virtual_tree */ "./node_modules/pyllar/virtual_tree.js");
/* harmony import */ var _for_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./for_directive */ "./node_modules/pyllar/for_directive.js");
/* harmony import */ var _foreach_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foreach_directive */ "./node_modules/pyllar/foreach_directive.js");
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./array */ "./node_modules/pyllar/array.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./type */ "./node_modules/pyllar/type.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config */ "./node_modules/pyllar/config.js");
/* harmony import */ var _promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./promise */ "./node_modules/pyllar/promise.js");












/**
 * @class
 */
class PiElement {
    /**
     * Constroi PiElement baseado no elemento html
     * 
     * @param {Element} element - Elemento html
     * @param {object} [scope = {context: {}}] - Classe de escopo
     */
    constructor(element, scope = { context: {} }, componentParent = null) {
        this._element = element;

        this._attrNames = element.getAttributeNames();
        this._destroyed = false;
        this._directives = [];
        this._autoBind = true;

        this._element._component = null;
        this._element._hasComponent = false;
        this._element._componentParent = componentParent;

        this._foreachContext = {};

        this._defaultVariablesNames = [];
        this._defaultVariablesValues = [];

        this._scope = scope;
        this._watchs = [];
        this._children = [];
        this._events = {
            'enter': this._eventEnter
        };

        this._orderAttributeNames();
        this._loadDirectivesBase();

        this._element._pie = true;
    }

    /**
     * 
     * @param {string} name - Adiciona propriedade ao contexto do foreach
     * @param {obj} value - Objeto associado a propriedade de contexto do foreach
     * @returns {PiElement}
     */
    addForeachContext(name, value) {
        this._foreachContext[name] = value;

        return this;
    }

    setComponent(cx) {
        this._element._hasComponent = true;
        this._element._component = cx;

        return this;
    }

    extendForeachContext(foreachContext) {
        _object__WEBPACK_IMPORTED_MODULE_0__["default"].extend(this._foreachContext, foreachContext);

        return this;
    }

    /**
     * Monitora alteração sobre propriedade 
     * 
     * @param {string} propertyName - Nome da propriedade a ser monitorada
     * @param {function} fn - Função de callback
     * @returns {PiElement}
     */
    watch(propertyName, fn) {
        this._addContextWatch(propertyName, fn);

        return this;
    }

    /**
     * Para de monitorar uma proprieade do contexto
     * 
     * @param {string} propertyName - Nome da propriedade
     * @returns {PiElement}
     */
    unWatch(propertyName) {
        this._removeContextWatch(propertyName);

        return this;
    }

    /**
     * Carrega e analisa todas as diretivas juntamente com o template
     * 
     * @returns {PiElement}
     */
    load(wrapper) {
        this._loadDefaultVariables();
        this._runDirectives(wrapper);
        this._loadTemplate();

        return this;
    }

    _loadDefaultVariables() {
        let variablesForeachNames = Object.keys(this._foreachContext);
        let variablesForeachValues = Object.values(this._foreachContext);
        let contextPropertyNames = [];
        let contextPropertyValues = [];

        const cpo = this._element._componentParent;
        if (cpo != null) {
            contextPropertyNames = Object.getOwnPropertyNames(cpo.__proto__);
            for (let i = 0; i < contextPropertyNames.length; i++) {
                if (cpo[contextPropertyNames[i]] instanceof Function) {
                    contextPropertyValues.push(cpo[contextPropertyNames[i]].bind(cpo));
                }
            }
        }

        this._defaultVariablesNames = variablesForeachNames.concat(contextPropertyNames);
        this._defaultVariablesValues = variablesForeachValues.concat(contextPropertyValues);
    }

    /**
     * Adiciona uma directiva para um atributo do elemento
     * 
     * @param {string} name - nome da diretiva
     * @param {function} fn - Função de callback
     * @returns {this}
     */
    addDirective(name, fn) {
        this._directives[name] = fn;

        return this;
    }

    /**
     * Retorna se existe uma diretiva adicionada pelo seu nome
     * 
     * @param {string} name - Nome da diretiva
     * @returns {boolean}
     */
    existDirective(name) {
        return this._directives[name] != null;
    }

    /**
     * Retorna wrapper jquery
     * 
     * @returns {jQueryElement}
     */
    get $() {
        if (this._$element) return this._$element;
        return this._$element = $(this._element);
    }

    /**
     * Alias para listen
     * 
     * @param {string} eventName - Nome do evento
     * @param {function} fn - Função de callback
     * @param  {...any} args - Argumentos enviados ao callback quando ocorrer o evento
     * @returns {PiElement}
     */
    on(eventName, fn, ...args) {
        return this.listen(eventName, fn, ...args);
    }

    _eventEnter(fn, ...args) {
        this._element.addEventListener('keyup', (e) => {
            if (e.keyCode == 13) {
                fn.apply(this, [e, ...args]);
            }
        });
    }

    _eventDefault(eventName, fn, ...args) {
        this._element.addEventListener(eventName, (e) => {
            fn.apply(this, [e, ...args]);
        });
    }

    /**
     * Adiciona um callback sobre um evento do elemento
     * 
     * @param {string} eventName - Nome do evento
     * @param {function} fn - Função de callback
     * @param  {...any} args - Argumentos enviados ao callback quando ocorrer o evento
     * @returns {PiElement}
     */
    listen(eventName, fn, ...args) {
        const event = this._events[eventName];

        if (event) {
            event.call(this, fn, ...args);
        } else {
            this._eventDefault(eventName, fn, ...args);
        }

        return this;
    }

    /**
     * Alias para unlisten
     * 
     * @param {string} eventName - Nome do evento
     * @param {function} fn - Função de callback
     * @returns {PiElement}
     */
    off(eventName, fn) {
        return this.unlisten(eventName, fn);
    }

    /**
     * Remove callback sobre um evento do elemento
     * 
     * @param {string} eventName - Nome do evento
     * @param {function} fn - Função de callback
     * @returns {PiElement}
     */
    unlisten(eventName, fn) {
        this._element.removeEventListener(eventName, fn);

        return this;
    }

    _dispose() {
        if (this._destroyed) {
            return;
        }

        this._destroyed = true;
        this._element.remove();

        for (let i = 0; i < this._children.length; i++) {
            this._children[i].destroy();
        }
        this._children = [];

        return this;
    }

    /**
     * Remove elemento do DOM
     * 
     * @returns {PiElement}
     */
    destroy() {
        if (this._destroyed) {
            return;
        }

        this._dispose();
        this._clearContextWatch();

        return this;
    }

    /**
     * Insere elemento depois
     * 
     * @param {PiElement} element - Elemento a ser inserido
     * @returns {PiElement}
     */
    insertBefore(element) {
        this._element.parentNode.insertBefore(element._element, this._element.nextElementSibling);

        return this;
    }

    /**
     * Insere elemento antes
     * 
     * @param {PiElement} element - Elemento a ser inserido
     * @returns {PiElement}
     */
    insertAfter(element) {
        this._element.parentNode.insertBefore(element._element, this._element.nextSibling);

        return this;
    }

    /**
     * Adiciona um elemento 
     * 
     * @param {PiElement} element 
     * @returns {PiElement}
     */
    append(element) {
        this._element.parentNode.append(element._element);

        return this;
    }

    /**
     * Executa uma statement dentro do contexto sempre que o evento associado for disparado
     * 
     * @param {string} statement - Statement executada sempre que o ocorrer o evento
     * @param {strin} event - Nome do evento a ser observado
     * @returns {PiElement}
     */
    addEventStatement(statement, _, event) {
        const expression = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](statement);

        this.listen(event, function (e) {
            const ctx = this._getContext();
            const variables = this._getDefaultVariables();

            variables[0].push('$event');
            variables[1].push(e);

            const stmt = expression.parse(ctx, variables);

            return _statement__WEBPACK_IMPORTED_MODULE_2__["default"].execWithVariables(stmt, variables, ctx);
        });

        return this;
    }

    setChangeDirective(statement) {
        const expression = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](statement);

        this.listen('change', function (e) {
            const ctx = this._getContext();
            const variables = this._getDefaultVariables();

            variables[0].push('$event');
            variables[1].push(e);

            const stmt = expression.parse(ctx, variables);

            return _statement__WEBPACK_IMPORTED_MODULE_2__["default"].execWithVariables(stmt, variables, ctx);
        });

        return this;
    }

    /**
     * Retorna o valor do elemento
     * 
     * @returns {string|number|boolean}
     */
    get value() {
        const e = this._element;

        if (e instanceof HTMLInputElement && e.type == 'checkbox') {
            return e.checked;
        }

        if (e instanceof HTMLInputElement && e.type == 'radio') {
            return e.checked;
        }

        return e.value;
    }

    /**
     * Define o valor do elemento
     * 
     * @param {string|boolean} value - Valor
     * @returns {PiElement}
     */
    set value(value) {
        const e = this._element;

        if (e instanceof HTMLInputElement && (e.type == 'checkbox' || e.type == 'radio')) {
            e.checked = value;
            return this;
        }

        e.value = value;

        return this;
    }

    /**
     * Adiciona um vinculo de direção dupla entre uma propriedade do contexto e o elemento virtual
     * 
     * @param {string} propertyName - Nome da propriedade do contexto que será vinculada ao elemento
     * @param {string} eventName - Nome da propriedade do contexto que será vinculada ao elemento
     * @returns {PiElement}
     */
    addBind(propertyName, _, eventName) {
        if (propertyName == null || propertyName.length == 0) {
            return;
        }

        this._addBindToElementContext(propertyName, eventName);

        return this;
    }

    /**
     * Retorna verdadeiro se o elemento estiver destruido
     * 
     * @returns {boolean}
     */
    get isDestroyed() {
        return this._destroyed;
    }

    /**
     * Define uma expression de inicialização
     * 
     * @param {string} expression
     * @returns {PiElement}
     */
    setInitDirective(expression) {
        const ex = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](expression);
        const ctx = this._getContext();
        const defaultVariables = this._getDefaultVariables();
        const stmt = ex.parse(ctx, defaultVariables);

        _statement__WEBPACK_IMPORTED_MODULE_2__["default"].execWithVariables('this.' + stmt, defaultVariables, ctx);

        return this;
    }

    /**
     * Adiciona bind fullduplex do elemento a propriedade da model
     * 
     * @param {string} propertyName - Nome da propriedade da model que será vinculada ao elemento
     * @returns {PiElement}
     */
    setModelDirective(propertyName) {
        let event = 'change';

        if (this._element instanceof HTMLInputElement) {
            event = 'keyup';
        }

        this._addBindToElementContext(propertyName, event);

        return this;
    }

    /**
     * Define o valor do elemento baseado em uma expression language avaliada dentro do contexto do elemento
     * 
     * @param {string} expression - Expressão a ser avaliada dentro do contexto
     * @returns {PiElement}
     */
    setValueDirective(expression) {
        if (this._destroyed) {
            return this;
        }

        const ex = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](expression);
        const ctx = this._getContext();

        this.value = ex.parse(ctx, this._getDefaultVariables());

        return this;
    }

    /**
     * Define se o elemento terá o atributo 'selected' baseado na expression language
     * 
     * @param {string} expression - Expressão a ser avaliada dentro do contexto
     * @returns {PiElement}
     */
    setSelectedDirective(expression) {
        if (this._destroyed) {
            return this;
        }

        const ex = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](expression);
        const ctx = this._getContext();
        const value = ex.parse(ctx, this._getDefaultVariables());

        if (value === true || value === "true") {
            this._element.setAttribute('selected', true);
        } else {
            this._element.removeAttribute('selected');
        }

        return this;
    }

    setCheckedDirective(expression) {
        if (this._destroyed) {
            return this;
        }

        const ex = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](expression);
        const ctx = this._getContext();
        const variables = ex.variables;
        let value = ex.parse(ctx, this._getDefaultVariables());

        this._element.checked = value == 'true';

        if (variables.length > 0) {
            for (let i = 0; i < variables.length; i++) {
                const variable = variables[i];
                this._addContextWatch(variable, () => {
                    value = ex.parse(ctx, this._getDefaultVariables());

                    this._element.checked = value == 'true';
                });
            }
        }
    }

    setSrcDirective(expression) {
        if (this._destroyed) {
            return this;
        }

        const ex = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](expression);
        const ctx = this._getContext();
        const variables = ex.variables;
        let value = ex.parse(ctx, this._getDefaultVariables());

        this._element.setAttribute('src', value);

        if (variables.length > 0) {
            for (let i = 0; i < variables.length; i++) {
                const variable = variables[i];
                this._addContextWatch(variable, () => {
                    value = ex.parse(ctx, this._getDefaultVariables());

                    this._element.setAttribute('src', value);
                });
            }
        }
    }

    setConditionalDirective(expression) {
        if (this._destroyed) {
            return this;
        }

        const ex = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](expression);
        const variables = ex.variables;

        this._updateConditional(ex);

        if (variables.length > 0) {
            for (let i = 0; i < variables.length; i++) {
                const variable = variables[i];
                this._addContextWatch(variable, () => {
                    this._updateConditional(ex);
                });
            }
        }
    }

    /**
     * Define se o elemento terá o atributo 'disabled' baseado na expression language
     * 
     * @param {string} expression - Expressão a ser avaliada dentro do contexto
     * @returns {PiElement}
     */
    setDisabledDirective(expression) {
        if (this._destroyed) {
            return this;
        }

        const ex = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](expression);
        this._updateDisabled(ex);

        for (let i = 0; i < ex.variables.length; i++) {
            const variableName = ex.variables[i];

            this._addContextWatch(variableName, () => {
                this._updateDisabled(ex);
            });
        }

        return this;
    }

    /**
     * Define a manipulação do estilo do elemento por meio de uma expression language
     * 
     * @param {string} expression 
     * @returns {PiElement}
     */
    setStyleDirective(expression) {
        if (this._destroyed) {
            return this;
        }

        this._expressionStyle = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](expression);

        this._updateStyle();

        const variableNames = this._expressionStyle.variables;
        for (let i = 0; i < variableNames.length; i++) {
            const variableName = variableNames[i];

            this._addContextWatch(variableName, () => {
                this._updateStyle();
            });
        }

        return this;
    }

    /**
     * Define a manipulação das classes do elemento por meio de uma expression language
     * 
     * @param {string} expression
     * @returns {PiElement}
     */
    setClassDirective(expression) {
        if (this._destroyed) {
            return this;
        }

        this._expressionClass = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](expression);

        this._updateClass();

        const variables = this._expressionClass.variables;
        for (let i = 0; i < variables.length; i++) {
            const v = variables[i];

            this._addContextWatch(v, () => {
                this._updateClass();
            });
        }

        return this;
    }

    setForDirective(stmt) {
        const exp = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](stmt);
        const ctx = this._getContext();
        const variables = this._getDefaultVariables();
        const _stmt = exp.parse(ctx, variables);
        const forDirective = new _for_directive__WEBPACK_IMPORTED_MODULE_4__["default"](_stmt);
        const attrNodes = this._getPiAttributeNodes([':for']);

        let nodes = [];
        let refNode = document.createTextNode('');
        this._element.parentNode.insertBefore(refNode, this._element.nextSibling);

        forDirective
            .loop((ixn, index) => {
                const cpoParent = this._element.componentParent;
                this._setAttributeNodes(attrNodes);

                const clonedElement = this._element.cloneNode(true);
                const newElement = new PiElement(clonedElement, this._scope, cpoParent);
                newElement.extendForeachContext(this._foreachContext);
                newElement._autoBind = false;
                newElement.addForeachContext(ixn, index);
                newElement.load(cpoParent);

                const vtree = new _virtual_tree__WEBPACK_IMPORTED_MODULE_3__["default"](clonedElement.children, this._scope, cpoParent);
                vtree.hook('did:create:velement', (ve) => {
                    newElement._children.push(ve);
                    ve.extendForeachContext(newElement._foreachContext);
                });
                vtree.load();

                nodes.push(newElement);
            })
            .end(() => {
                for (let i = nodes.length - 1; i >= 0; i--) {
                    const newNode = nodes[i]._element;
                    refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
                }
            })
            .run();

        if (exp.variables.length > 0) {
            for (let i = 0; i < exp.variables.length; i++) {
                const variableName = exp.variables[i];
                this._addContextWatch(variableName, (value) => {
                    for (let i = 0; i < nodes.length; i++) {
                        nodes[i].destroy();
                    }

                    nodes = [];
                    forDirective.run(value);
                });
            }
        }

        this._element.parentElement.dispatchEvent(new CustomEvent('fordone', {
            bubbles: true,
            cancelable: true,
            composed: false,
        }));

        this._dispose();

        return this;

    }

    /**
     * Define a diretiva foreach do elemento
     * 
     * @param {stmt} stmt - Declaração foreach
     * @returns {PiElement}
     */
    setForEachDirective(stmt) {
        const exp = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](stmt);
        const ctx = this._getContext();
        const variables = this._getDefaultVariables();
        const _stmt = exp.parse(ctx, variables);
        const foreach = new _foreach_directive__WEBPACK_IMPORTED_MODULE_5__["default"](_stmt);
        const propertyName = foreach.objectInterableName;
        const attrNodes = this._getPiAttributeNodes([':foreach']);
        let array = _object__WEBPACK_IMPORTED_MODULE_0__["default"].extractValue(this._scope, 'context.' + propertyName);

        if (array == undefined) {
            array = (0,_env__WEBPACK_IMPORTED_MODULE_7__.findClass)(propertyName);
        }

        if (array == undefined) {
            array = _object__WEBPACK_IMPORTED_MODULE_0__["default"].extractValue(this._foreachContext, propertyName);
        }

        if (array == undefined) {
            throw `ForEach: propriedade não encontrada '${propertyName}'`;
        }

        let nodes = [];
        let currentElements = [];

        var refNode = document.createTextNode('');
        this._element.parentNode.insertBefore(refNode, this._element.nextSibling);

        foreach
            .loop((arr, index, vn, ixn) => {
                const cpoParent = this._element._componentParent;
                const foreachPropertyName = vn;
                const forearchProperyValue = array[index];
                const forearchIndexName = ixn;

                this._setAttributeNodes(attrNodes);

                const clonedElement = this._element.cloneNode(true);
                const newElement = new PiElement(clonedElement, this._scope, cpoParent);
                newElement.extendForeachContext(this._foreachContext);
                newElement._autoBind = false;

                newElement.addForeachContext(foreachPropertyName, forearchProperyValue);
                if (forearchIndexName) {
                    newElement.addForeachContext(forearchIndexName, index);
                }
                newElement.load(cpoParent);

                const vtree = new _virtual_tree__WEBPACK_IMPORTED_MODULE_3__["default"](clonedElement.children, this._scope, cpoParent);
                vtree.hook('did:create:velement', (ve) => {
                    newElement._children.push(ve);
                    ve.extendForeachContext(newElement._foreachContext);
                });
                vtree.load();

                nodes.push(clonedElement);
                currentElements.push(newElement);
            })
            .end(() => {
                for (let i = 0; i < nodes.length; i++) {
                    const newNode = nodes[i];
                    refNode.parentNode.insertBefore(newNode, refNode);
                }

                nodes = [];
            }).
            run(array);

        const splice = function (array, index, deleteCount, ...items) {
            if (deleteCount > 0) {
                const length = index + deleteCount > currentElements.length ? currentElements.length : index + deleteCount;

                // destroy os elementos
                for (let i = index; i < length; i++) {
                    currentElements[i].destroy();
                }

                Array.prototype.splice.call(array, index, deleteCount);
                currentElements.splice(index, deleteCount);
            }

            if (items.length > 0) {
                Array.prototype.splice.call(array, index, 0, ...items);
                foreach.run(array, index);
            }

            return array;
        };

        if (_type__WEBPACK_IMPORTED_MODULE_8__["default"].isArray(array)) {

            _array__WEBPACK_IMPORTED_MODULE_6__["default"].addMethod(array, 'load', function (array, index = 0) {
                splice(this, index, 0, ...array);

                return this;
            });

            _array__WEBPACK_IMPORTED_MODULE_6__["default"].addMethod(array, 'add', function (item) {
                splice(this, this.length, 0, item);

                return this;
            });

            _array__WEBPACK_IMPORTED_MODULE_6__["default"].addMethod(array, 'clear', function () {
                splice(this, 0, this.length);

                return this;
            });

            _array__WEBPACK_IMPORTED_MODULE_6__["default"].addMethod(array, 'remove', function (index) {
                splice(this, index, 1);

                return this;
            });

            _array__WEBPACK_IMPORTED_MODULE_6__["default"].addMethod(array, 'reload', function () {
                for (let i = 0; i < this.length; i++) {
                    currentElements[i].destroy();
                }
                currentElements = [];

                foreach.run(this, 0);
            });
        }

        this._element.parentElement.dispatchEvent(new CustomEvent('fordone', {
            bubbles: true,
            cancelable: true,
            composed: false,
        }));

        this.destroy();

        return this;
    }

    setRenderDirective(directiva, propName, eventName, context) {
        const ctx = this._getContext();
        const variables = this._getDefaultVariables();

        const create = _statement__WEBPACK_IMPORTED_MODULE_2__["default"].execWithVariables(directiva, variables, ctx);
        let fn;
        if (create.name == directiva) {
            fn = new create();
        } else if (create.call) {
            fn = create.call(context);
        } else {
            fn = create;
        }

        this._loadLoader();

        if (fn instanceof Promise) {
            fn.then((c) => {
                this.setComponent(c);
                c.render(this._element);
            });
        } else if (fn instanceof _promise__WEBPACK_IMPORTED_MODULE_10__["default"]) {
            fn.ok((c) => {
                this.setComponent(c);
                c.render(this._element);
            })
        } else {
            this.setComponent(fn);
            fn.render(this._element);
        }
    }

    _getValueFromDefaultVariables(name) {
        const { defaultNames, defaultValues } = this._getDefaultVariables();

        for (let i = 0; i < defaultNames.length; i++) {
            const vname = defaultNames[i];
            if (vname == name) {
                return defaultValues[i];
            }
        }

        return null;
    }

    _getDefaultVariables() {
        const self = this._element._component || this._element._componentParent;
        const elementValue = this._element.get ? this._element.get() : '';
        const variablesNames = ['$this', '$element', '$value'];
        const variablesValues = [self, this._element, elementValue];

        this._loadDefaultVariables();
        (0,_env__WEBPACK_IMPORTED_MODULE_7__.getClasses)().forEach(c => { variablesNames.push(c.name); variablesValues.push(c) });

        return [this._defaultVariablesNames.concat(variablesNames), this._defaultVariablesValues.concat(variablesValues)];
    }

    _addBindToElementContext(propertyName, eventName) {
        let isChangePropertyByEvent = false;

        const value = _object__WEBPACK_IMPORTED_MODULE_0__["default"].extractValue(this._scope, 'context.' + propertyName);
        this._element.set(value);

        this._addContextWatch(propertyName, () => {
            if (isChangePropertyByEvent) {
                return;
            }

            const value = _object__WEBPACK_IMPORTED_MODULE_0__["default"].extractValue(this._scope, 'context.' + propertyName);
            this._element.set(value);

            this._updateView();
        });

        if (eventName !== false) {
            this.listen(eventName, function () {
                isChangePropertyByEvent = true;
                _object__WEBPACK_IMPORTED_MODULE_0__["default"].setProperty(this._scope.context, propertyName, this.value);
                isChangePropertyByEvent = false;
            });
        } else {
            this.listen('change', function (e) {
                isChangePropertyByEvent = true;
                _object__WEBPACK_IMPORTED_MODULE_0__["default"].setProperty(this._scope.context, propertyName, e.detail);
                isChangePropertyByEvent = false;
            });
        }

        return this;
    }

    _getPiAttributeNodes(excepts = []) {
        const attrs = [];

        for (let i = 0; i < this._attrNames.length; i++) {
            const name = this._attrNames[i];
            const firstCharacter = name[0];

            if (excepts.indexOf(name) == -1 && (firstCharacter == ':' || firstCharacter == '#' || firstCharacter == '@')) {
                attrs.push(this._element.getAttributeNode(name));
            }
        }

        return attrs;
    }

    _setAttributeNodes(attrNodes = []) {
        for (let i = 0; i < attrNodes.length; i++) {
            const attrNode = attrNodes[i];
            if (attrNode == null) {
                continue;
            }
            this._element.setAttributeNode(attrNode);
        }

        return this;
    }

    setMountDirective(expression) {
        this._element.mount = (component) => {
            const ex = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](expression);
            const ctx = this._getContext();
            const defaultVariables = this._getDefaultVariables();
            const stmt = ex.parse(ctx, defaultVariables);
            defaultVariables['$this'] = component;

            _statement__WEBPACK_IMPORTED_MODULE_2__["default"].execWithVariables('this.' + stmt, defaultVariables, ctx);
        };

        return this;
    }

    setDidMountDirective() {

    }

    setWillMountDirective() {

    }

    setForEndValueDirective(expression, propName, eventName, context) {
        if (eventName == 'value' || eventName == 'setValue') {
            this.listen(propName, function (e) {
                const ex = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](expression);
                const ctx = this._getContext();
                const defaultVariables = this._getDefaultVariables();
                this.value = ex.parse(ctx, defaultVariables);
            });
            return;
        }
    }

    _loadDirectivesBase() {
        this.addDirective('for', this.setForDirective);
        this.addDirective('foreach', this.setForEachDirective);
        this.addDirective('loader', this.setLoaderDirective);
        this.addDirective('class', this.setClassDirective);
        this.addDirective('style', this.setStyleDirective);
        this.addDirective('init', this.setInitDirective);
        this.addDirective('bind', this.addBind);
        this.addDirective('on', this.addEventStatement);
        this.addDirective('value', this.setValueDirective);
        this.addDirective('selected', this.setSelectedDirective);
        this.addDirective('disabled', this.setDisabledDirective);
        this.addDirective('if', this.setConditionalDirective);
        this.addDirective('model', this.setModelDirective);
        this.addDirective('change', this.setChangeDirective);
        this.addDirective('src', this.setSrcDirective);
        this.addDirective('checked', this.setCheckedDirective);
        this.addDirective('mount', this.setMountDirective);
        this.addDirective('render', this.setRenderDirective);
        this.addDirective('forend', this.setForEndValueDirective);
        this.addDirective('fordone', this.setForEndValueDirective);
    }

    setLoaderDirective(directiva, propName, eventName, context) {
        const ctx = this._getContext();
        const variables = this._getDefaultVariables();

        const create = _statement__WEBPACK_IMPORTED_MODULE_2__["default"].execWithVariables(directiva, variables, ctx);
        if (create.name == directiva) {
            const loader = new create();
            loader.render(this._element);
        } else if (create.call) {
            const loader = create.call(context);
            loader.render(this._element);
        } else {
            create.render(this._element);
        }

        this._hasLoader = true;
    }

    _loadLoader() {
        if (this._hasLoader == undefined) {
            const loader = _config__WEBPACK_IMPORTED_MODULE_9__["default"].get('html.loader');
            let html = loader;

            if (loader.constructor.name == 'Function') {
                html = loader();
            }

            this._element.innerHTML = html;
        }
    }

    _(context) {
        const contextPropertyNames = Object.keys(context);
        const contextPropertyValues = Object.values(context);

        for (let i = 0; i < contextPropertyValues.length; i++) {
            const value = contextPropertyValues[i];
            if (value instanceof Function) {
                contextPropertyValues[i] = value.bind(context);
            }
        }
    }

    _createExpression(value, node) {
        const exp = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](value);
        node._piex = exp;

        if (this._autoBind) {
            for (let i = 0; i < exp.variables.length; i++) {
                const variableName = exp.variables[i];
                this._addContextWatch(variableName, () => {
                    this._updateView();
                });
            }
        }
    }

    _loadTemplate() {
        if (this._destroyed) {
            return;
        }

        const nodes = this._element.childNodes;
        const xhtml = _config__WEBPACK_IMPORTED_MODULE_9__["default"].get('expression.xhtml');

        for (let i = 0; i < nodes.length; i++) {
            let node = nodes[i];
            let value = node.nodeValue;
            if (value && xhtml.test(value)) {
                const el = document.createElement('span');
                el.innerHTML = value;

                node.parentNode.insertBefore(el, node.nextSibling);

                this._element.removeChild(node);
                this._createExpression(value, el);

                i--;
                continue;
            }

            if (value && value.indexOf('{') > -1 && node instanceof Text) {
                this._createExpression(value, node);
            }
        }

        this._updateView();
    }

    _updateConditional(ex) {
        const ctx = this._getContext();
        const defaultVariables = this._getDefaultVariables();
        const value = _statement__WEBPACK_IMPORTED_MODULE_2__["default"].execWithVariables(ex.parse(ctx, defaultVariables), defaultVariables, ctx);
        const nextElement = this._element.nextElementSibling;

        if (nextElement && nextElement.hasAttribute(':else')) {
            nextElement.__pielse = true;
            nextElement.removeAttribute(':else');
        }

        const hasElse = nextElement && nextElement.__pielse;

        if (value) {
            this.$.show();

            if (hasElse) {
                $(nextElement).hide();
            }
        } else {
            this.$.hide();

            if (hasElse) {
                $(nextElement).show();
            }
        }
    }

    _updateDisabled(ex) {
        const ctx = this._getContext();
        const value = ex.parse(ctx, this._getDefaultVariables());

        if (value == 'true' || value === true) {
            this._element.setAttribute('disabled', true);
        } else {
            this._element.removeAttribute('disabled');
        }
    }

    _updateView() {
        if (this._destroyed) {
            return;
        }

        const nodes = this._element.childNodes;
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node._piex) {
                const text = node._piex.parse(this._getContext(), this._getDefaultVariables());
                if (node instanceof Text) {
                    node.nodeValue = text;
                } else {
                    node.innerHTML = text;
                }

            }
        }
    }

    _updateStyle() {
        if (this._destroyed) {
            return;
        }

        if (this._expressionStyle) {
            const styleInline = this._expressionStyle.parse(this._getContext(), this._getDefaultVariables());
            const styles = styleInline.split(';');

            for (let i = 0; i < styles.length; i++) {
                const style = styles[i].split(':');
                if (style.length != 2) {
                    continue;
                }

                const styleName = style[0].trim();
                const styleValue = style[1].trim();

                this.$.css(styleName, styleValue);
            }
        }
    }

    _updateClass() {
        if (this._destroyed) {
            return;
        }

        if (this._expressionClass) {
            const classList = this._expressionClass.parse(this._getContext(), this._getDefaultVariables()).trim();
            if (classList == this._element.className) {
                return
            }

            this._element.className = '';
            if (classList.length > 0) {
                this._element.classList.add(...classList.split(' ').filter(e => e !== ''));
            }
        }
    }

    _orderAttributeNames(){
        let i = this._attrNames.indexOf('foreach');
        if (i > -1) {
            this._attrNames.splice(i, 1);
            this._attrNames.unshift('foreach');
        }

        i = this._attrNames.indexOf('for');
        if (i > -1) {
            this._attrNames.splice(i, 1);
            this._attrNames.unshift('for');
        }
    }

    _runDirectives(wrapper) {
        if (this._destroyed) {
            return;
        }

        for (let i = 0; i < this._attrNames.length; i++) {
            const attrName = this._attrNames[i];
            const attrValue = this._element.getAttribute(attrName);
            const { propName, eventName } = this._extractPiAttributeNameAndProperty(attrName);

            if (this.existDirective(propName)) {
                this._element.removeAttribute(attrName);
                this._directives[propName].call(this, attrValue, propName, eventName, wrapper);
                continue;
            }

            if (propName == 'foreach') {
                return;
            }

            if (propName == 'for') {
                return;
            }

            if (attrName.indexOf('#') == 0) {
                const ex = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](attrValue);
                const value = ex.parse(this._getContext(), this._getDefaultVariables());
                if (value) {
                    this._element.setAttribute(attrName.substr(1), value);
                }

                this._element.removeAttribute(attrName);
                continue;
            }

            if (attrName.indexOf(':') == 0) {
                const ex = new _expression__WEBPACK_IMPORTED_MODULE_1__["default"](attrValue);
                const ctx = this._getContext();
                const variables = ex.variables;
                let value = ex.parse(ctx, this._getDefaultVariables());

                if (value) {
                    this._element.setAttribute(attrName.substr(1), value);
                }

                this._element.removeAttribute(attrName);

                if (variables.length > 0) {
                    for (let i = 0; i < variables.length; i++) {
                        const variable = variables[i];
                        this._addContextWatch(variable, () => {
                            value = ex.parse(ctx, this._getDefaultVariables());

                            this._element.setAttribute(attrName.substr(1), value);
                        });
                    }
                }

                continue;
            }
        }
    }

    _extractPiAttributeNameAndProperty(attribute) {
        let propName = '';
        let eventName = false;

        if (attribute.indexOf('@') > -1) {
            propName = 'on';
            eventName = attribute.replace('@', '');

            const nameAndEvent = eventName.split(':');
            if (nameAndEvent.length > 1) {
                propName = nameAndEvent[0];
                eventName = nameAndEvent[1];
            }
        } else if (attribute.indexOf(':') > -1) {
            propName = attribute.replace(':', '');

            const nameAndEvent = propName.split('.');
            if (nameAndEvent.length > 1) {
                propName = nameAndEvent[0];
                eventName = nameAndEvent[1];
            }
        }

        return { propName, eventName };
    }

    _getContext() {
        return this._scope.context;
    }

    _clearContextWatch() {
        let ids = [];

        for (let i = 0; i < this._watchs.length; i++) {
            ids = ids.concat(this._watchs[i].ids);
        }

        _object__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._scope, ids);
        this._watchs = [];
    }

    _addContextWatch(property, fn) {
        const ids = _object__WEBPACK_IMPORTED_MODULE_0__["default"].on(this._scope, 'context.' + property, fn)
        this._watchs = this._watchs.concat({
            property: property,
            ids: ids
        });

        return this;
    }

    _removeContextWatch(propertyName) {
        const arr = this._watchs;

        for (let i = 0; i < arr.length; i++) {
            if (arr[i].property == propertyName) {
                _object__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._scope, arr[i].ids);
                break;
            }
        }

        return this;
    }

};

/***/ }),

/***/ "./node_modules/pyllar/env.js":
/*!************************************!*\
  !*** ./node_modules/pyllar/env.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $),
/* harmony export */   app: () => (/* binding */ app),
/* harmony export */   findClass: () => (/* binding */ findClass),
/* harmony export */   getClasses: () => (/* binding */ getClasses),
/* harmony export */   global: () => (/* binding */ global),
/* harmony export */   location: () => (/* binding */ location),
/* harmony export */   register: () => (/* binding */ register),
/* harmony export */   setLocation: () => (/* binding */ setLocation)
/* harmony export */ });
/***
 * Copyright Manoel Neco 2022, Todos os direitos reservados
 *
 * @autor: Manoel Neco
 * @create: 2012-present
 * @version: v11.2.6-beta
 */

const global = window;
const components = [];

function registerObject(name, obj) {
    obj.name = name;
    components.push(obj);
}

function register(name, obj) {
    if (name != null && name.constructor.name == 'String' && obj != null) {
        registerObject(name, obj);
        return;
    }

    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        const cName = obj.constructor.name;

        if (findClass(obj) == undefined) {
            if (cName == 'Function' || cName == 'Object') {
                obj = Object.freeze(obj);
            }

            components.push(obj);
        }
    }
}

function getClasses() {
    return components;
}

function findClass(cName) {
    return components.find(c => c.name == cName || (c.constructor && c.constructor.name == cName));
}

function app() {
    return global.app;
}

function location() {
    return global.location;
}

function setLocation(url) {
    global.location = url;
}

function $() {
    return global.$
}



/***/ }),

/***/ "./node_modules/pyllar/event.js":
/*!**************************************!*\
  !*** ./node_modules/pyllar/event.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiEvent)
/* harmony export */ });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./node_modules/pyllar/random.js");


/**
 * @class
 */
class PiEvent {
    #list = [];

    /**
     * Adiciona um evento para ser observado
     * 
     * @param {string} event - Nome do evento
     * @param {function} callback - Callback
     * @param {object} ctx - Contexto do callback
     * @param {boolean} once - Se o callback deverá ser chamado apenas uma vez
     * @returns {PiEvent}
     */
    listen(event, callback, ctx, once = false) {
        const uuid = _random__WEBPACK_IMPORTED_MODULE_0__["default"].uuid('xxx-xx');
        callback.id = uuid;

        this.#list.push({ uuid: uuid, event: event, cb: callback, ctx: ctx, once: once });

        return uuid;
    }

    /**
     * Deixa de observar um evento
     * 
     * @param {string} event - Nome do evento
     * @param {function} cb - Callback
     * @returns {PiEvent}
     */
    unlisten(event, cb = '*') {
        for (let i = this.#list.length - 1; i >= 0; i--) {
            let item = this.#list[i];
            if (item.event == event) {
                if (cb === item.uuid) {
                    this.#list.splice(i, 1);
                    break;
                }

                if (cb == '*' || cb.id == item.cb.id) {
                    this.#list.splice(i, 1);
                    i--;
                }
            }
        }

        return this;
    }

    /**
     * Adiciona um evento para ser observado apenas uma vez
     * 
     * @param {string} event - Nome do evento
     * @param {function} callback - Callback
     * @param {object} ctx - Contexto do callback
     * @returns {PiEvent}
     */
    once(event, callback, ctx) {
        return this.listen(event, callback, ctx, true);
    }

    /**
     * Dispara os callback associados ao evento
     * 
     * @param {string} event - Nome do evento
     * @param  {...any} args - Parametros enviados ao callback do evento
     * @returns {PiEvent}
     */
    trigger(event, ...args) {
        let eventsOnce = [];

        for (let i = 0; i < this.#list.length; i++) {
            if (this.#list[i].event == event) {
                let item = this.#list[i];
                item.cb.apply(item.ctx, args);

                if (item.once) {
                    eventsOnce.push(item);
                }
            }
        }

        for (let i = eventsOnce.length - 1; i >= 0; i--) {
            this.unlisten(eventsOnce[i].event, eventsOnce[i].cb);
        }

        return this;
    }

    /**
     * Verifica se foi adicionado um evento
     * 
     * @param {string} event - Nome do evento
     * @returns {boolean}
     */
    exist(event) {
        for (let i = this.#list.length - 1; i >= 0; i--) {
            if (this.#list[i].event == event) return true;
        }

        return false;
    }

    reseed(name, event) {
        if (name instanceof PiEvent) {
            this._reseedAll(event);
            return this;
        }

        this.listen(name, function() {
            event.trigger.call(event, name, ...arguments);
        });

        return this;
    };

    _reseedAll(event){
        for (let i = this.#list.length - 1; i >= 0; i--) {
            const eventName = this.#list[i].event;
            this.reseed(eventName, event);
        }
    }

    /**
     * Remove todos os eventos
     * 
     * @returns {PiEvent}
     */
    clear() {
        this.#list = [];

        return this;
    }

};

/***/ }),

/***/ "./node_modules/pyllar/expression.js":
/*!*******************************************!*\
  !*** ./node_modules/pyllar/expression.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiExpression)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/pyllar/config.js");
/* harmony import */ var _statement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./statement */ "./node_modules/pyllar/statement.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./node_modules/pyllar/type.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object */ "./node_modules/pyllar/object.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./node_modules/pyllar/helpers.js");






const hps = _helpers__WEBPACK_IMPORTED_MODULE_4__.helpers;

/**
 * @class
 */
class PiExpression {

    /**
     * 
     * @param {string} template - Template base
     */
    constructor(template) {
        this._template = template;

        this._rxExpression = _config__WEBPACK_IMPORTED_MODULE_0__["default"].get('expression.xlanguage');
        this._rxVariable = _config__WEBPACK_IMPORTED_MODULE_0__["default"].get('expression.xvariable');

        this._load();
    }

    setDelimiters(pattern){
        this._rxExpression = pattern;

        return this;
    }

    /**
     * Retorna todas as expressões encontradas no template base
     * 
     * @returns {array}
     */
    get all() {
        const expressions = [];

        for (let i = 0; i < this._expressions.length; i++) {
            expressions.push(this._clear(this._expressions[i].value));
        }

        return expressions;
    }

    /**
     * Retorna todas as variáveis encontradas dentro das expressões
     * 
     * @returns {array}
     */
    get variables() {
        if (this._variables == undefined) {
            this._variables = this._extractAllVariables();
        }

        return this._variables;
    }

    /**
     * Retorna resultado do template parseado com o contexto informado
     * 
     * @param {object} context 
     * @returns {string}
     */
    parse(context, variables = [[], []]) {
        let expressions = this._expressions;
        let phrase = this._phrase;

        const contextPropertyNames = Object.keys(context);
        const contextPropertyValues = Object.values(context);

        for (let i = 0; i < contextPropertyValues.length; i++) {
            const value = contextPropertyValues[i];
            if (value instanceof Function) {
                contextPropertyValues[i] = value.bind(context);
            }
        }

        variables[0] = contextPropertyNames.concat(variables[0]);
        variables[1] = contextPropertyValues.concat(variables[1]);

        for (let i = 0; i < hps.all.length; i++) {
            const hook = hps.all[i];

            variables[0].push(hook[0]);
            variables[1].push(hook[1]);
        }

        for (let i = 0; i < expressions.length; i++) {
            const expression = expressions[i];
            const stmt = this._clear(expression.value);

            let value = _statement__WEBPACK_IMPORTED_MODULE_1__["default"].execWithVariables(stmt, variables, context);

            if (_type__WEBPACK_IMPORTED_MODULE_2__["default"].isNumber(value) && value == 0) {
                value = '0';
            } else if (_type__WEBPACK_IMPORTED_MODULE_2__["default"].isObject(value)) {
                value = JSON.stringify(value);
            }

            phrase = phrase.replace(expression.key, _type__WEBPACK_IMPORTED_MODULE_2__["default"].isBoolean(value) ? value : value || '');
        }

        return phrase;
    }

    _load() {
        var { phrase, expressions } = this._extractPhraseAndExpressions();
        this._phrase = phrase;
        this._expressions = expressions;
    }

    _clear(expression) {
        expression = expression.replace(this._rxExpression, function (_, dbegin, body, dend) {
            return body;
        });

        expression = expression.replace(this._rxVariable, function (_, dbegin, body, dend) {
            return body;
        });

        return expression.trim();
    }

    _extractPhraseAndExpressions() {
        var expressions = [];
        var counter = 1;
        var phrase = this._template.replace(this._rxExpression, function (expressionFounded) {
            const variable = `_$${counter++}_`;

            expressions.push({
                value: expressionFounded,
                key: variable
            });

            return variable;
        });

        return { phrase, expressions };
    }

    _extractAllVariables() {
        var variables = this._template.match(this._rxVariable) || [];

        for (let i = 0; i < variables.length; i++) {
            const v = variables[i];
            variables[i] = v.substr(1);
        }

        return variables;
    }

    _extractVariables(expression) {
        var variables = expression.match(this._rxVariable) || [];

        for (let i = 0; i < variables.length; i++) {
            const v = variables[i];
            variables[i] = v.substr(1);
        }

        return variables;
    }

    _extractVariablesValues(variableNames, context) {
        const variables = [];

        for (let i = 0; i < variableNames.length; i++) {
            const name = variableNames[i];

            variables.push(_object__WEBPACK_IMPORTED_MODULE_3__["default"].extractValue(context, name));
        }

        return variables;
    }

}

/***/ }),

/***/ "./node_modules/pyllar/for_directive.js":
/*!**********************************************!*\
  !*** ./node_modules/pyllar/for_directive.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiForDirective)
/* harmony export */ });
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/pyllar/type.js");


const stmtRange1 = /^(\w+)\s+in\s+range\(\s*(-?\d+)\s*\)$/gi;
const stmtRange2 = /^(\w+)\s+in\s+range\(\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/gi;
const stmtRange3 = /^(\w+)\s+in\s+range\(\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/gi;
const stmtLiteral = /^(\w+)\s+in\s+([0-9]+)$/gi;
const stmtProperty = /^(\w+)\s+in\s+(\w+)$/gi;

class PiForDirective {
    constructor(stmt) {
        this._stmt = stmt;

        this._iterableCount = null;
        this._iterableProperty = null;
        this._iterableStart = 0;
        this._iterableStep = 1;
        this._indexName = null;
        this._loop = null;
        this._end = null;

        this._load();
    }

    get objectInterableName() {
        return this._iterableProperty;
    }

    loop(fn) {
        this._loop = fn;

        return this;
    }

    end(fn) {
        this._end = fn;

        return this;
    }

    run(count = null) {
        let length = 0;

        if (count != null) {
            length = count;
        } else if (this._iterableCount) {
            length = this._iterableCount;
        }

        if (this._iterableStep < 0) {
            for (let i = this._iterableCount - this._iterableStart; i >= 0; i += this._iterableStep) {
                this._loop(this._indexName, i);
            }
        } else {
            for (let i = this._iterableStart; i < length; i += this._iterableStep) {
                this._loop(this._indexName, i);
            }
        }

        this._end();

        return this;
    }

    _loadNumber(n) {
        const number = parseInt(n);
        const isNumber = _type__WEBPACK_IMPORTED_MODULE_0__["default"].isNumber(number);

        if (isNumber) {
            this._iterableCount = number;
            this._iterableProperty = null;
        } else {
            this._iterableCount = null;
            this._iterableProperty = n;
        }
    }

    _load() {
        if (stmtRange1.test(this._stmt)) {
            this._loadForRange1();
        } else if (stmtRange2.test(this._stmt)) {
            this._loadForRange2();
        } else if (stmtRange3.test(this._stmt)) {
            this._loadForRange3();
        } else if (stmtLiteral.test(this._stmt)) {
            this._loadForLiteral();
        } else if (stmtProperty.test(this._stmt)) {
            this._loadForProperty();
        } else {
            throw `PiForDirective: Statement inválida para laço for = ${this._stmt}. Padrão esperado: (variável in literal) ou (variável in range(total[, inicio[, passo]]))`;
        }
    }

    _loadForRange1() {
        this._stmt.replace(stmtRange1, (stmt, indexName, propertyName) => {
            this._loadNumber(propertyName);
            this._indexName = indexName;

            return stmt;
        });
    }

    _loadForRange2() {
        this._stmt.replace(stmtRange2, (stmt, indexName, propertyName, start) => {
            this._loadNumber(propertyName);
            this._indexName = indexName;
            this._iterableStart = parseInt(start);

            return stmt;
        });
    }

    _loadForRange3() {
        this._stmt.replace(stmtRange3, (stmt, indexName, propertyName, start, step) => {
            this._loadNumber(propertyName);
            this._indexName = indexName;
            this._iterableStart = parseInt(start);
            this._iterableStep = parseInt(step);

            return stmt;
        });
    }

    _loadForProperty() {
        this._stmt.replace(stmtProperty, (stmt, indexName, propertyName) => {
            this._loadNumber(propertyName);
            this._indexName = indexName;

            return stmt;
        });
    }

    _loadForLiteral() {
        this._stmt.replace(stmtLiteral, (stmt, indexName, propertyName) => {
            this._iterableCount = parseInt(propertyName);
            this._indexName = indexName;

            return stmt;
        });
    }
};

/***/ }),

/***/ "./node_modules/pyllar/foreach_directive.js":
/*!**************************************************!*\
  !*** ./node_modules/pyllar/foreach_directive.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiForEachDirective)
/* harmony export */ });
/* harmony import */ var _function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function */ "./node_modules/pyllar/function.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./object */ "./node_modules/pyllar/object.js");



const stmtForearchWithIndex = /^\((\w+)\s*,\s*(\w+)\)\s+in\s+(\w+(\.\w+)*)$/gi;

class PiForEachDirective {
    constructor(stmt, context = {}, fn = _function__WEBPACK_IMPORTED_MODULE_0__["default"].noop) {
        this._stmt = stmt;
        this._context = context;
        this._fn = fn;
        this._end = _function__WEBPACK_IMPORTED_MODULE_0__["default"].noop;

        this._load();
    }

    get variableInterableName() {
        return this._variableInterableName;
    }

    get objectInterableName() {
        return this._objectInterableName;
    }

    loop(fn) {
        this._fn = fn;

        return this;
    }

    run(array = null, indexBegin = 0, indexEnd = -1, step = 1) {
        const objectInterable = array || _object__WEBPACK_IMPORTED_MODULE_1__["default"].extractValue(this._context, this._objectInterableName);

        if (objectInterable.constructor.name == 'Function' || objectInterable.constructor.name == 'Object') {
            const foreachFn = new Function('_this', 'obj', 'vn', 'ixn', 'fn', `for(const i in obj){fn(obj, i, vn, ixn);}`);
            foreachFn(this, objectInterable, this._variableInterableName, this._variableIndexName, this._fn)
            this._end();
            return this;
        }
        
        const foreachFn = new Function('_this', 'arr', 'indexBegin', 'indexEnd', 'step', 'vn', 'ixn', 'fn', `for(var i = indexBegin ; i < indexEnd ; i += step){fn(arr, i, vn, ixn);}`);
        if (indexEnd == -1) {
            indexEnd = objectInterable.length;
        }

        foreachFn(this, objectInterable, indexBegin, indexEnd, step, this._variableInterableName, this._variableIndexName, this._fn)
        this._end();

        return this;
    }

    end(fn) {
        this._end = fn;

        return this;
    }

    _load() {
        if (stmtForearchWithIndex.test(this._stmt)) {
            this._loadForeachIndexAndProperties();
        } else {
            this._loadForeachProperties();
        }

    }

    _loadForeachIndexAndProperties() {
        this._stmt.replace(stmtForearchWithIndex, (stmt, indexName, propertyName, interableName) => {
            this._variableInterableName = propertyName;
            this._objectInterableName = interableName;
            this._variableIndexName = indexName;

            return stmt;
        });
    }

    _loadForeachProperties() {
        const stmt = this._stmt;
        const tokens = stmt.trim().split(' ');

        if (tokens.length != 3) {
            throw `PiForEachDirective: Statement inválida para laço foreach = ${stmt}. Padrão esperado: [variável in iterável] ou [(index, variável) in iterável]`;
        }

        this._variableIndexName = null;
        this._variableInterableName = tokens[0];
        this._objectInterableName = tokens[2];
    }
};

/***/ }),

/***/ "./node_modules/pyllar/function.js":
/*!*****************************************!*\
  !*** ./node_modules/pyllar/function.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiFunction)
/* harmony export */ });
/**
 * @class
 */
class PiFunction {
    /**
     * Função vazia
     */
    static noop() { }
};

/***/ }),

/***/ "./node_modules/pyllar/helpers.js":
/*!****************************************!*\
  !*** ./node_modules/pyllar/helpers.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debounce: () => (/* binding */ debounce),
/* harmony export */   helpers: () => (/* binding */ helpers),
/* harmony export */   timeout: () => (/* binding */ timeout),
/* harmony export */   timeoutSec: () => (/* binding */ timeoutSec)
/* harmony export */ });
/* harmony import */ var _translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translate */ "./node_modules/pyllar/translate.js");


function timeout(time, fn, ctx) {
    setTimeout(() => {
        fn.call(ctx);
    }, time);
}

function timeoutSec(time, fn, ctx) {
    timeout(time * 1000, fn, ctx);
}

function debounce(time) {
    return function (fn, ctx) {
        timeout(time, fn, ctx);
    }
}

const helpers = {
    _all: [],

    register(name, fn) {
        this._all.push([name, fn]);
    },

    get all() {
        return this._all;
    }
};

helpers.register('_', function () {
    return _translate__WEBPACK_IMPORTED_MODULE_0__["default"].get.apply(_translate__WEBPACK_IMPORTED_MODULE_0__["default"], arguments);
});



/***/ }),

/***/ "./node_modules/pyllar/initialize.js":
/*!*******************************************!*\
  !*** ./node_modules/pyllar/initialize.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");


/**
 * @class
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class PiInitialize {
    #readyFn = [];
    #bootFn = [];
    #bootInit = [];
    #bootStart = [];
    #isLoaded = false;

    /**
     * 
     * @param {function} fn - Função que será executada no inicio do boot
     * 
     * @returns {PiInitialize}
     */
    boot(fn) {
        this.#bootFn.unshift(fn);

        return this;
    }

    /**
     * Função executada apos o boot
     * 
     * @param {function} fn - Callback
     * @returns {PiInitialize}
     */
    init(fn) {
        this.#bootInit.unshift(fn);

        return this;
    }

    /**
     * Função executada após a inicialização
     * @param {function} fn - Callback
     * @returns {PiInitialize}
     */
    start(fn) {
        this.#bootStart.unshift(fn);

        return this;
    }

    /**
     * Executa a sequencia de incialização: boot -> callback -> ready
     * 
     * @returns {Promise}
     */
    load() {
        return new Promise((ok) => {
            _env__WEBPACK_IMPORTED_MODULE_0__.global.$(() => {
                this.#dispatch(this.#bootFn);
                this.#dispatch(this.#bootInit);
                this.#dispatch(this.#bootStart);
                this.#dispatch(this.#readyFn);

                this.#isLoaded = true;
                console.log(';)')
                ok();
            });
        });
    }

    /**
     * Função executada após todo processo de inicialização
     * 
     * @param {function} fn - Função que será executada depois que o sistema estiver inicializado
     * @returns {Promise}
     */
    ready() {
        return new Promise((ok, err) => {
            if (this.#isLoaded) {
                ok();
                return;
            }

            this.#readyFn.unshift(ok);
        });
    }

    #dispatch(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i]();
        }
    }
});

/***/ }),

/***/ "./node_modules/pyllar/model.js":
/*!**************************************!*\
  !*** ./node_modules/pyllar/model.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiModel)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "./node_modules/pyllar/class.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action */ "./node_modules/pyllar/action.js");
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./object */ "./node_modules/pyllar/object.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component */ "./node_modules/pyllar/component.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./string */ "./node_modules/pyllar/string.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config */ "./node_modules/pyllar/config.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./url */ "./node_modules/pyllar/url.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app */ "./node_modules/pyllar/app.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./type */ "./node_modules/pyllar/type.js");











/**
 * @class
 */
class PiModel {
    #parameters = null;
    #actionList = [];
    #validatorList = [];
    #baseUrl = '';

    constructor(...args) {
        this.#actionList = [];
        this.#validatorList = [];
        this.#baseUrl = '';

        if (_type__WEBPACK_IMPORTED_MODULE_9__["default"].isObject(args[0])) {
            _object__WEBPACK_IMPORTED_MODULE_3__["default"].extendAndCall(this, args[0]);
        }

        this.#parameters = args[0] == undefined ? {} : args[0];

        this.init(...args);
    }

    getBaseUrl() {
        return this.#baseUrl;
    }

    /**
     * Injeta as propriedades do objeto
     * 
     * @param {json} json - Objeto a ser injetado no objeto atual
     * @returns {this}
     */
    _inject(json) {
        for (var property in json) {
            this[property] = json[property];
        }

        return this;
    }

    /**
     * Clona o objeto atual
     * 
     * @returns {this}
     */
    clone() {
        this.cloneWillLoad();
        let json = this.toJson();
        let clone = new this.constructor(json);
        this.cloneDidLoad(clone);

        return clone;
    }

    cloneDidLoad() {

    }

    cloneWillLoad() {

    }

    /**
     * Cria uma nova instancia da classe
     * 
     * @param  {...any} args 
     * @returns {this}
     */
    static create(...args) {
        return new this(...args);
    }

    create(...args) {
        return new this.constructor(...args);
    }

    toJson() {
        this.jsonWillConvert();
        let json = JSON.parse(JSON.stringify(this));
        this.jsonDidConvert(json);

        return json;
    }

    jsonDidConvert(json) {

    }

    jsonWillConvert() {

    }

    instances() {

    }

    /**
     * Initializa as rotas
     * 
     * @param {string} url - Url base utilizada pelas actions para as requests
     */
    init(url) {
        this._loadActions();
        this._loadValidations();

        this._configUrl(url || this.#parameters.url || '');
    }

    /**
     * Injeta o json dentro da model
     * 
     * @param {object} json - Json a ser injetado no modelo
     * @returns {PiModel}
     */
    initWithJson(json) {
        this._inject(json);

        return this;
    }

    /**
     * Adiciona uma action
     * 
     * @param {string} name - Nome da rota
     * @param {string} stmt - Rota no formato: METHOD:/route?querystring
     * @returns {PiModel}
     */
    addAction(name, stmt) {
        const action = new _action__WEBPACK_IMPORTED_MODULE_2__["default"]({
            actionName: name,
            actionStmt: stmt,
            model: this
        });

        this.#actionList[name] = action;

        return this;
    }

    /**
     * Adiciona uma regra de validação para uma propriedade da model
     * 
     * @param {string} name - Propriedade da model
     * @param {PiValidator} rule - Classe que implementa a regra de validação
     * @returns {PiModel}
     */
    addValidator(name, rule) {
        this.#validatorList[name] = rule;

        return this;
    }

    /**
     * Retorna um objeto literal contendo todas as regras de validação
     * 
     * @returns {object}
     */
    validators() {
        return {};
    }

    /**
     * Retorna um objeto literal contendo todas as actions
     * 
     * @returns {object}
     */
    actions() {
        return {};
    }

    /**
     * Define um valor para uma propriedade.
     * Este método dispara a execução da validação 
     * de propriedade antes de inserir o valor
     * 
     * @param {string} key - Nome da propriedade
     * @param {object} value - Valor da propriedade
     * @returns {PiModel}
     */
    setProperty(key, value, type) {
        const names = key.split('.');
        let isComposed = names.length > 1,
            rule = this.#validatorList[key];

        switch (type) {
            case 'int':
                value = parseInt(value);
                if(isNaN(value)) {
                    value = 0;
                }
                break;
        }
        
        if (isComposed) {
            let last = names[names.length - 1],
                property = _object__WEBPACK_IMPORTED_MODULE_3__["default"].extractPropertyContext(this, key);

            if (property instanceof PiModel) {
                property.setProperty(last, value);
            } else {
                if (property[last] instanceof Function) {
                    property[last](value);
                } else {
                    property[last] = value;
                }
            }

        } else {
            if (rule == undefined) {
                if (this[key] instanceof Function) {
                    this[key](value);
                } else {
                    this[key] = value;
                }
            } else {
                rule.load(this, key, value);

                if (rule.isValid()) {
                    this[key] = value;
                } else {
                    throw rule.label;
                }
            }
        }

        return this;
    }

    /**
     * Insere a model caso id seja zero ou atualiza a model 
     * caso o valor do id seja maior que zero
     * 
     * @returns {PiPromise}
     */
    save() {
        if (this.id == undefined) return this.insert()
        else if (this.id == 0) return this.insert();
        else return this.update();
    }

    /**
     * Retorna uma action pelo nome
     * 
     * @param {string} name - Nome da action
     * @returns {PiAction}
     */
    getAction(name) {
        return this.#actionList[name];
    }

    /**
     * Tentar injetar os data-models do component na model caso o parametro seja um PiComponent.
     * Retorna em um array string com todos os erros encontrados.
     * Se o parametro for um json ele ira injetar as propriedades na model.
     * 
     * @param {PiComponent} component
     * @param {object} options 
     * @returns {array}
     */
    inject(component, options = {}) {
        if (component instanceof _component__WEBPACK_IMPORTED_MODULE_4__["default"] || component instanceof _app__WEBPACK_IMPORTED_MODULE_8__["default"]) {
            let names = _string__WEBPACK_IMPORTED_MODULE_5__["default"].clips(component.element.innerHTML, 'data-model="', '"'),
                isComponent = false,
                errors = [];

            options = _object__WEBPACK_IMPORTED_MODULE_3__["default"].extend({}, {
                invalidInputClass: 'invalid-feedback'
            }, options);

            for (let i = 0; i < names.length; i++) {
                let property = names[i],
                    element = component.element.querySelector('[data-model="' + property + '"]'),
                    value = undefined,
                    parent = element.parentNode;

                if (element.firstChild && element.firstChild._hasComponent) {
                    value = element.firstChild._component.get();
                    isComponent = true;
                } else if (element._hasComponent) {
                    value = element._component.get();
                    isComponent = true;
                } else {
                    isComponent = false;
                    value = element.get();
                }

                var nextElement = element.nextElementSibling;
                var elementMessage = null;
                if (nextElement && nextElement.hasAttribute('validation-message')) {
                    elementMessage = nextElement;
                } else {
                    elementMessage = document.createElement('div');
                    elementMessage.setAttribute('validation-message', '');
                    parent.insertBefore(elementMessage, element.nextSibling);
                }

                if (element.setCustomValidity) {
                    element.setCustomValidity('');
                }

                elementMessage.style.display = 'none';
                elementMessage.innerHTML = '';
                elementMessage.classList.remove(options.invalidInputClass);
                parent.classList.remove('was-validated');

                try {
                    this.setProperty(property, value, element.getAttribute('data-type'));
                } catch (msg) {
                    elementMessage.innerHTML = msg;
                    elementMessage.classList.add(options.invalidInputClass);
                    elementMessage.style.display = 'block';

                    if (element.setCustomValidity) {
                        element.setCustomValidity(msg);
                    }

                    if (!isComponent) {
                        parent.classList.add('was-validated');
                    }

                    errors.push(msg);
                }
            }

            return errors;
        } else {
            if (component instanceof PiModel) {
                this._inject(component.toJson());
            } else {
                this._inject(component);
            }
        }

        return [];
    }

    requestWillGet(json) {

    }

    jsonDidConvert(json) {

    }

    requestDidGet(json) {

    }

    requestWillPost(json) {

    }

    requestDidPost(json) {

    }

    responseSuccessWillLoad(action, url, data) {
        this.responseSuccess.apply(this, arguments);
    }

    responseSuccess(action, url, ...args) {
        action.processSuccessResponse.apply(action, args);
        this.responseSuccessDidLoad.apply(this, arguments);
    }

    responseSuccessDidLoad() {

    }

    responseErrorWillLoad(action, url, data) {
        this.responseError.apply(this, arguments);
    }

    responseError(action, url, ...args) {
        action.processErrorResponse.apply(action, args);
        this.responseErrorDidLoad.apply(this, arguments);
    }

    responseErrorDidLoad() {

    }

    _loadActions() {
        const userActions = this.actions();
        const defaultActions = {
            'add': 'POST:/',
            'insert': 'POST:/',
            'update': 'PUT:/:id',
            'remove': 'REMOVE:/:id',
            'get': 'GET:/:id',
            'find': 'GET:/find/:id',
            'all': 'GET:/'
        };
        const actions = _object__WEBPACK_IMPORTED_MODULE_3__["default"].extend({}, defaultActions, userActions);

        for (let name in actions) {
            this.addAction(name, actions[name]);
        }
    }

    _configUrl(url) {
        const modelUrl = _config__WEBPACK_IMPORTED_MODULE_6__["default"].get('model.url');

        if (modelUrl == undefined) {
            this.setBaseUrl(url);
        } else {
            this.setBaseUrl(modelUrl + url);
        }
    }

    setBaseUrl(url) {
        if (url == undefined) {
            this.#baseUrl = _url__WEBPACK_IMPORTED_MODULE_7__["default"].create('localhost').href();
        } else {
            this.#baseUrl = url;
        }

        return this;
    }

    _loadValidations() {
        const validators = this.validators();
        for (var v in validators) {
            this.addValidator(v, validators[v]);
        }
    }

    static register(model) {
        (0,_env__WEBPACK_IMPORTED_MODULE_0__.register)(model)
    }
};

/***/ }),

/***/ "./node_modules/pyllar/native_element.js":
/*!***********************************************!*\
  !*** ./node_modules/pyllar/native_element.js ***!
  \***********************************************/
/***/ (() => {

HTMLElement.prototype.get = function () {
    if (this instanceof HTMLImageElement) {
        return this.getAttribute('src');
    }

    if (this instanceof HTMLLinkElement) {
        return this.getAttribute('href');
    }

    if (this instanceof HTMLInputElement && this.type == 'checkbox') {
        return this.checked;
    }

    if (this instanceof HTMLInputElement && this.type == 'radio') {
        return this.checked;
    }

    return this.value;
};

HTMLPreElement.prototype.get = function () {
    return this.innerHTML;
};

HTMLPreElement.prototype.set = function (v) {
    this.innerHTML = v;
};

HTMLElement.prototype.set = function (v) {
    if (this instanceof HTMLImageElement) {
        this.setAttribute('src', v);
        return;
    }

    if (this instanceof HTMLLinkElement) {
        this.setAttribute('href', v);
        return;
    }

    if (this instanceof HTMLInputElement && this.type == 'checkbox') {
        this.checked = v;
        return;
    }

    if (this instanceof HTMLInputElement && this.type == 'radio') {
        this.checked = v;
        return;
    }

    this.value = v;
};

/***/ }),

/***/ "./node_modules/pyllar/object.js":
/*!***************************************!*\
  !*** ./node_modules/pyllar/object.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiObject)
/* harmony export */ });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./node_modules/pyllar/random.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./string */ "./node_modules/pyllar/string.js");



/**
 * @class
 * @name PiObject
 */
class PiObject {

    /**
     * Adiciona e chama todas as propriedades com nome de função dos argumentos no primeiro parametro
     * 
     * @returns {object}
     */
    static extendAndCall = function () {
        let dst = arguments[0];

        for (let i = arguments.length - 1; i > 0; i--) {
            let obj = arguments[i];

            for (let p in obj) {
                if (typeof dst[p] == 'function') {
                    dst[p](obj[p]);
                } else {
                    dst[p] = obj[p];
                }
            }
        }

        return dst;
    }

    /**
     * Extrai o contexto onde propriedade existe
     * 
     * @param {object} obj - objeto
     * @param {string} property - path da propriedade
     * @returns {object}
     */
    static extractPropertyContext = function (obj, property) {
        let p = property.split('.');

        if (p.length > 1) {
            for (let i = 0; i < p.length - 1; i++) {
                let m = p[i];
                if (obj[m] == undefined) obj[m] = {};
                obj = obj[m];
            }
        }

        return obj;
    }

    /**
     * Chama uma função de callback sempre que a propriedade do objeto for alterada
     * 
     * @param {object} obj - Objeto base
     * @param {string} property - Nome da propriedade a ser monitorada
     * @param {function} callback - Callback executado sempre a a propriedade é alterada
     * @param {boolean} [deep = true] deep - Define se as propriedades acima tambem serão observadas
     */
    static on = function (obj, property, callback, deep = true) {
        let currentValue = PiObject.extractValue(obj, property);
        let path = property.split('.');

        if (obj.__onSetList == undefined) {
            obj.__onSetList = [];
            obj.__onSetFn = [];
        }

        if (obj.__onSetFn[property] == undefined) {
            obj.__onSetFn[property] = [];
        }

        const exist = obj.__onSetList.find(p => p == property) !== undefined;
        if (!exist) {
            const _obj = PiObject.extractPropertyContext(obj, property);
            const _property = _string__WEBPACK_IMPORTED_MODULE_1__["default"].last(property, '.');

            if (!(_property == 'length' && PiType.isArray(_obj))) {
                Object.defineProperty(_obj, _property, {
                    set: function (value) {
                        currentValue = value;

                        const arrFn = obj.__onSetFn[property];
                        for (let i = 0; i < arrFn.length; i++) {
                            arrFn[i].cb(value, property);
                        }

                        return value;
                    },

                    get: function () {
                        return currentValue;
                    }
                });

                obj.__onSetList.push(property);
            }
        }

        const id = _random__WEBPACK_IMPORTED_MODULE_0__["default"].uuid('xxx-xxx');
        let ids = [id];
        obj.__onSetFn[property].push({
            id: id,
            cb: callback
        });

        if (deep && path.length > 1) {
            path.pop();
            const _ids = PiObject.on(obj, path.join('.'), callback);
            ids = ids.concat(_ids);
        }

        return ids;
    }

    static off = function (obj, ids) {
        if (obj.__onSetFn == undefined) {
            return;
        }

        for (const property in obj.__onSetFn) {
            const arr = obj.__onSetFn[property];
            for (let i = 0; i < arr.length; i++) {
                const item = arr[i];
                if (ids.find(e => e == item.id)) {
                    i--;
                    arr.splice(i, 1);
                }
            }
        }
    }

    /**
     * Extrai o valor de uma propriedade
     * 
     * @param {object} obj - objeto
     * @param {string} property - path da propriedade
     * @returns {object}
     */
    static extractValue = function (obj, property) {
        const p = property.split('.');

        if (p.length > 1) {
            for (let i = 0; i < p.length; i++) {
                obj = obj[p[i]]
                if (obj == undefined) break;
            }

            return obj;
        } else {
            return obj[property];
        }
    }

    /**
     * Atribui um valor a uma propriedade
     * 
     * @param {object} obj - objeto
     * @param {string} property - path da propridade
     * @param {object} value - valor a ser inserido na propriedade
     */
    static setProperty = function (obj, property, value) {
        const p = property.split('.');

        if (p.length > 1) {
            const lastProperty = p[p.length - 1];
            for (let i = 0; i < p.length - 1; i++) {
                obj = obj[p[i]]
                if (obj == undefined) break;
            }

            obj[lastProperty] = value;
        } else {
            obj[property] = value;
        }
    }

    /**
     * Adiciona todas as propriedades e metodos de todos os parametros no primeiro
     * 
     * @method PiObject.extend
     * @param {arguments} arg
     * @return {object}
     */
    static extend = function () {
        for (let i = 1; i < arguments.length; i++) {
            let obj = arguments[i];
            for (let v in obj) {
                arguments[0][v] = obj[v];
            }
        }

        return arguments[0];
    }
};

/***/ }),

/***/ "./node_modules/pyllar/promise.js":
/*!****************************************!*\
  !*** ./node_modules/pyllar/promise.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiPromise)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./node_modules/pyllar/class.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");



/**
 * @class
 */
class PiPromise extends _class__WEBPACK_IMPORTED_MODULE_0__["default"] {
    #isOnce = false;
    #promise = this.newPromise();

    instances() {
        this.clear();
    }

    /**
     * Espera até que todas as promises informadas por parametro
     * sejam resolvidas. Chama o callback de ok caso haja sucesso
     * em todos os retornos. Caso haja um erro retorna o callback de error
     * 
     * @returns {PiPromise}
     */
    static wait(promises = null) {
        var promise = new PiPromise();
        var count = 0;
        var success = true;
        var arr = promises || arguments;

        for (let i = 0; i < arr.length; i++) {
            arr[i].finally(() => {
                count++;
                if (count == arr.length) {
                    success ? promise.resolve() : promise.reject();
                }
            }).catch(() => {
                success = false;
            });
        }

        return promise;
    }

    /**
     * Retorna uma promise nativa associada a instancia
     * 
     * @returns Promise
     */
    get() {
        return this.#promise;
    }

    /**
     * Cria uma promise nativa associada a instancia
     * 
     * @returns Promise
     */
    newPromise() {
        return new Promise((resolve, reject) => {
            this.ok(resolve);
            this.error(reject);
        });
    }

    /**
     * Resolve a promise
     * 
     * @returns {PiPromise}
     */
    resolve() {
        this._argOk = arguments;

        this._callOk();
        this._callOnce();
        this._callDone();

        if (this.#isOnce) {
            this.reset();
        }

        return this;
    }

    /***
     * Vincula uma promise à promise atual
     * 
     * @returns {PiPromise}
     */
    link(promise) {
        const self = this;

        promise.ok(function () {
            self.resolve.apply(self, arguments);
        });

        promise.error(function () {
            self.reject.apply(self, arguments);
        });

        return this;
    }

    /**
     * Rejeita a promise
     * 
     * @returns {PiPromise}
     */
    reject() {
        this._argErr = arguments;

        this._callErr();
        this._callDone();

        if (this.#isOnce) {
            this.reset();
        }

        return this;
    }

    /**
     * Adiciona callback disparado quando a promise for resolvida
     * 
     * @param {function} cb - Callback
     * @param {object} context - Objeto de contexto
     * @returns {PiPromise}
     */
    ok(cb, context) {
        this._cbOk.push({ cb: cb, context: context });

        if (this._isOk) {
            this._callOk();
        }

        return this;
    }

    /**
     * Alias para método ok
     * 
     * @param {function} cb - Callback
     * @param {object} context - Objeto de contexto
     * @returns {PiPromise}
     */
    then() {
        return this.ok.apply(this, arguments);
    }

    /**
     * Adiciona callback disparado apenas uma vez quando a promise for resolvida
     * 
     * @param {function} cb - Callback
     * @param {object} context - Objeto de contexto
     * @returns {PiPromise}
     */
    once(cb, context) {
        this._cbOnce.push({ cb: cb, context: context });

        if (this._isOk) {
            this._callOnce();
        }

        return this;
    }

    /**
     * Adiciona callback disparado quando a promise for rejeitada
     * 
     * @param {function} cb - Callback
     * @param {object} context - Objeto de contexto
     * @returns {PiPromise}
     */
    error(cb, context) {
        this._cbErr.push({ cb: cb, context: context });

        if (this._isErr) {
            this._callErr();
        }

        return this;
    }

    /***
     * Alias para método error
     */
    catch() {
        return this.error.apply(this, arguments);
    }

    /**
     * Adiciona callback disparado sempre que a promise é resolvida ou rejeitada
     * 
     * @param {function} cb - Callback
     * @param {object} context - Objeto de contexto
     * @returns {PiPromise}
     */
    done(cb, context) {
        this._cbDone.push({ cb: cb, context: context });

        if (this._isDone) {
            this._callDone();
        }

        return this;
    }

    /**
     * Alias para método done
     */
    finally() {
        return this.done.apply(this, arguments);
    }

    /**
     * Limpa todos os callbacks
     * 
     * @returns {PiPromise}
     */
    reset() {
        this._cbOk = [];
        this._cbErr = [];
        this._cbDone = [];

        return this;
    }

    /**
     * Reseta todos os valores
     * 
     * @returns {PiPromise}
     */
    clear() {
        this._cbOk = [];
        this._cbErr = [];
        this._cbDone = [];
        this._cbOnce = [];

        this._isOk = false;
        this._isErr = false;
        this._isDone = false;

        this._argOk = [];
        this._argErr = [];

        return this;
    }

    toPromise() {
        return this.#promise;
    }

    _call(arr, args) {
        for (let i = arr.length - 1; i >= 0; i--) {
            arr[i].cb.apply(arr[i].context, args);
        }
    }

    _callOnce() {
        this._isOk = true;
        this._call(this._cbOnce, this._argOk);
        this._cbOnce = [];
    }

    _callOk() {
        this._isOk = true;
        this._call(this._cbOk, this._argOk);
    }

    _callErr() {
        this._isErr = true;
        this._call(this._cbErr, this._argErr);
    }

    _callDone() {
        this._isDone = true;
        this._call(this._cbDone, []);
    }
};

(0,_env__WEBPACK_IMPORTED_MODULE_1__.register)(PiPromise);

/***/ }),

/***/ "./node_modules/pyllar/random.js":
/*!***************************************!*\
  !*** ./node_modules/pyllar/random.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiRandom)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");


/**
 * @class
 */
class PiRandom {
    static #seed = 0;
    /**
     * Gera um número aleatório
     * 
     * @returns {number}
     */
    static generator() {
        return PiRandom.range(0, Number.MAX_VALUE);
    }

    /**
     * Gera um número aleatório entre {min} e {max}
     * 
     * @param {number} _min - Valor mínimo
     * @param {number} _max - Valor máximo
     * @returns {number}
     */
    static range(_min, _max) {
        _min = _min || 0;
        _max = _max || Number.MAX_VALUE;

        let random = Math.floor(Math.random() * (1 + _max - _min)) + _min;

        if (random > _max) return _max;
        else return random;
    }

    static uuid(format) {
        let d = new Date().getTime();
        let uuid = (format || 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(/[xy]/g, function (c) {
            let r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });

        return uuid + (PiRandom.#seed++);
    }

};

(0,_env__WEBPACK_IMPORTED_MODULE_0__.register)(PiRandom);

/***/ }),

/***/ "./node_modules/pyllar/request.js":
/*!****************************************!*\
  !*** ./node_modules/pyllar/request.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiRequest)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./node_modules/pyllar/config.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "./node_modules/pyllar/class.js");
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./url */ "./node_modules/pyllar/url.js");




class ChainRequestItem {
    next = null;
    #fn = null;

    constructor(fn) {
        this.#fn = fn;
    }

    invoke() {
        this.#fn.call(this.#fn, ...arguments, () => {
            this.next.invoke(...arguments);
        });
    }
}

class ChainRequest {
    #requests = [];

    first() {
        if (this.#requests.length == 0) {
            return null;
        }

        return this.#requests[0];
    }

    last() {
        if (this.#requests.length == 0) {
            return null;
        }

        return this.#requests[this.#requests.length - 1];
    }

    add(fn) {
        if (fn == null) {
            return this;
        }

        const last = this.last();
        const current = new ChainRequestItem(fn);
        if (last != null) {
            last.next = current;
        }

        this.#requests.push(current);

        return this;
    }

    invoke() {
        const first = this.first();
        if (first == null) {
            return this;
        }

        first.invoke.apply(first, arguments);

        return this;
    }
}


/**
 * @class
 */
class PiRequest extends _class__WEBPACK_IMPORTED_MODULE_1__["default"] {
    #sending = false;
    #xhr = null;
    #chainRequest = new ChainRequest();
    #method = 'POST';

    constructor() {
        super();

        this.#chainRequest
            .add(_config__WEBPACK_IMPORTED_MODULE_0__["default"].get('request.fetch'))
            .add((url, settings, success, error) => {
                try {
                    fetch(url, settings).then((response) => {
                        this.#sending = false;

                        if (response.status >= 200 && response.status < 300) {
                            response.text().then((text) => {
                                success(text, response.status);
                            });
                        } else {
                            response.text().then((text) => {
                                error(text, response.status);
                            });
                        }

                        this.#xhr = null;
                    }).catch(function (e) {
                        if (e.message == 'Failed to fetch') {
                            error(`{ "message": "${e.message}", "status": "error" }`, 503);
                        }
                    });
                } catch (error) {
                    error(`{ "message": "offline", "status": "error" }`, 503);
                }
            });
    }

    addHandler(fn) {
        this.#chainRequest.add(fn);

        return this;
    }

    /**
     * Aborta o request caso a solicitação tenha sido enviada
     * 
     * @returns {PiRequest}
     */
    abort() {
        if (this.#xhr) {
            this.#xhr.abort();
            this.#xhr = null;
            this.#sending = false;
        }

        return this;
    }

    /**
     * Retorna se a request esta sendo enviada
     * 
     * @returns {boolean}
     */
    isSending() {
        return this.#sending;
    }

    setMethod(method) {
        this.#method = method;

        return this;
    }

    /**
     * Envia uma request do tipo GET
     * 
     * @param {string} url - Url da request
     * @param {object} obj - Query string como objeto
     * @returns {Promise}
     */
    get(url, obj, config = (xhr) => { return xhr; }) {
        return new Promise((resolve, reject) => {
            let qs = '';

            if (obj != undefined) qs = '?' + this.#convertObjectToFormData(obj);

            this.#requestGet(url + qs, (text, statusCode) => {
                resolve(text, statusCode);
            }, (text, statusCode) => {
                reject(text, statusCode);
            }, config);
        });
    }

    /**
     * Envia uma solicitação do tipo GET e faz o parse JSON da resposta
     * 
     * @param {string} url - Url da request
     * @param {object} obj - Query string como objeto
     * @returns {Promise}
     */
    getJson(url, obj, config = (xhr) => { return xhr; }) {
        return new Promise((resolve, reject) => {
            let qs = '';

            if (obj != undefined) qs = '?' + this.#convertObjectToFormData(obj);

            this.#requestGet(url + qs,
                (text, statusCode) => {
                    if (text.length == 0) {
                        resolve({});
                        return
                    }

                    let json = JSON.parse(text);
                    if (this.#existProtocol(json)) {
                        if (json.status == 'ok') resolve(json);
                        else reject(json.message, statusCode);
                    } else {
                        resolve(json);
                    }
                },
                (text, statusCode) => {
                    if (text.length == 0) {
                        reject({}, statusCode);
                        return;
                    }

                    let json = JSON.parse(text);
                    if (this.#existProtocol(json)) {
                        if (json.status == 'error') {
                            reject(json.message, statusCode);
                        }
                    } else {
                        reject(json, statusCode);
                    }
                }, config);
        });
    }

    /**
     * Envia uma solicitação do tipo POST.
     * 
     * @param {string} url - Url da requeset
     * @param {object} obj - Objeto a ser enviado no formato value=key
     * @returns {Promise}
     */
    post(url, obj, config = null) {
        return new Promise((resolve, reject) => {
            let formData = this.#convertObjectToFormData(obj);

            this.#requestPost(url, encodeURI(formData),
                (text, statusCode) => {
                    resolve(text, statusCode);
                },
                (text, statusCode) => {
                    reject(text, statusCode);
                },
                (xhr) => {
                    xhr.headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    if (config) {
                        config(xhr);
                    }

                    return xhr;
                });
        });
    }

    /**
     * Envia para a url informada array de File
     * 
     * @param {string} url - Url da request e faz o parse JSON da resposta
     * @param {array} files - Array File
     * @returns {Promise}
     */
    sendFiles(url, files, config = null) {
        return new Promise((resolve, reject) => {
            var formData = new FormData();

            for (var i = 0; i < files.length; i++) {
                formData.append(`file${i}`, files[i]);
            };

            this.#requestPost(url, formData,
                (text, statusCode) => {
                    if (text.length == 0) {
                        resolve({});
                        return;
                    }

                    let json = JSON.parse(text);
                    if (this.#existProtocol(json)) {
                        if (json.status == 'ok') resolve(json);
                        else reject(json.message, statusCode);
                    } else {
                        resolve(json);
                    }
                },
                (text, statusCode) => {
                    if (text.length == 0) {
                        reject({}, statusCode);
                        return;
                    }

                    let json = JSON.parse(text);
                    if (this.#existProtocol(json)) {
                        if (json.status == 'error') reject(json.message, statusCode);
                    } else {
                        reject(json, statusCode);
                    }
                },
                (xhr) => {
                    if (config) {
                        config(xhr);
                    }

                    return xhr;
                });
        });
    }

    /**
     * Envia uma solicitação do tipo POST e faz o parse JSON da resposta
     * 
     * @param {string} url - Url da request
     * @param {object} obj - Objeto a ser enviado no formato json
     * @returns {Promise}
     */
    postJson(url, obj, config = null) {
        return new Promise((resolve, reject) => {
            this.#requestPost(url, JSON.stringify(obj),
                (text, statusCode) => {
                    if (text.length == 0) {
                        resolve({});
                        return;
                    }

                    let json = JSON.parse(text);
                    if (this.#existProtocol(json)) {
                        if (json.status == 'ok') resolve(json);
                        else reject(json.message, statusCode);
                    } else {
                        resolve(json);
                    }
                },
                (text, statusCode) => {
                    if (text.length == 0) {
                        reject({}, statusCode);
                        return;
                    }

                    let json = JSON.parse(text);
                    if (this.#existProtocol(json)) {
                        if (json.status == 'error') {
                            reject(json.message, statusCode);
                        }
                    } else {
                        reject(json, statusCode);
                    }
                },
                (xhr) => {
                    xhr.headers.append('Content-Type', 'application/json');
                    if (config) {
                        config(xhr);
                    }

                    return xhr;
                });
        });
    }

    #requestGet(url, success, error, config) {
        this.#method = 'GET';
        this.#createRequest(url,
            (text, statusCode) => {
                success(text, statusCode);
            },
            (text, statusCode) => {
                error(text, statusCode);
            },
            (xhr) => {
                xhr.method = this.#method;
                xhr.headers.append('X-Requested-With', 'XMLHttpRequest');

                return config(xhr);
            }
        );
    }

    #requestPost(url, formData, success, error, config) {
        // let auth = Pi.getConfig('request.Authorization');

        this.#createRequest(url,
            (text, statusCode) => {
                success(text, statusCode);
            },
            (text, statusCode) => {
                error(text, statusCode);
            },
            (xhr) => {
                xhr.method = this.#method;
                xhr.headers.append('X-Requested-With', 'XMLHttpRequest');
                xhr.body = formData;

                return config(xhr);
            }
        );
    }

    #createRequest(url, success, error, config) {
        var headers = new Headers();
        headers.append('Accept', 'application/json, text/plain, */*');

        this.#xhr = new AbortController();
        var settings = config({
            signal: this.#xhr.signal,
            mode: 'cors',
            headers: headers
        });

        var _url = url instanceof _url__WEBPACK_IMPORTED_MODULE_2__["default"] ? url : _url__WEBPACK_IMPORTED_MODULE_2__["default"].create(url);

        this.#sending = true;
        this.#chainRequest.invoke(_url, settings, success, error);
    }

    #existProtocol(json) {
        return json.status;
    }

    #convertObjectToFormData(obj) {
        let encodedString = '';

        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                if (encodedString.length > 0) {
                    encodedString += '&';
                }
                encodedString += prop + '=' + obj[prop];
            }
        }

        return encodedString;
    }

};

/***/ }),

/***/ "./node_modules/pyllar/statement.js":
/*!******************************************!*\
  !*** ./node_modules/pyllar/statement.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiStatement)
/* harmony export */ });
/**
 * @class
 */
class PiStatement {

    /**
     * Executa uma statement iniciando em um contexto
     * 
     * @param {string} statement - Statement que será executada dentro do contexto
     * @param {object} context - Contexto de execução
     * @returns {object}
     */
    static exec(statement, context) {
        return PiStatement.execWithVariables(statement, [[], []], context);
    }

    /**
     * Executa uma statement dentro de um contexto com variavéis de escopo
     * 
     * @param {string} statement - Statement
     * @param {array} variables - Array com os nomes e valores das variáveis
     * @param {object} context - Objeto de contexto
     * @returns {object}
     */
    static execWithVariables(statement, variables, context) {
        const variableNames = variables[0];
        const variableValues = variables[1];

        for (let i = 0; i < variableNames.length; i++) {
            const variableName = variableNames[i];
            if (variableName == 'this') {
                variableNames.splice(i, 1);
                i--;
                continue;
            }

            variableNames[i] = variableNames[i].replaceAll('.', '');
            statement = statement.replaceAll(variableName, variableNames[i])
        }

        const func = new Function('_this', ...variableNames, `return (function(){return ${statement}}).call(_this);`);
        return func(context, ...variableValues);
    }
};


/***/ }),

/***/ "./node_modules/pyllar/string.js":
/*!***************************************!*\
  !*** ./node_modules/pyllar/string.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiString)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/pyllar/type.js");


/**
 * @class 
 */
class PiString {
    /**
     * Converte todas as palavras da string para capital. As palavras podem estar seperadas por espaço ou _ ou -
     * 
     * @param {string} str - string 
     * @return {string}
     */
    static capital(str) {
        if (!_type__WEBPACK_IMPORTED_MODULE_1__["default"].isString(str)) return '';

        str = str.toLowerCase();

        let p = /(^[\s_\.-]*\w|[\s\._-]\w)+/gi,
            m = str.match(p);

        for (let v in m) {
            str = str.replace(m[v], m[v].toUpperCase());
        }

        return str;
    };

    /**
     * Retorna última palavra separada por caracter
     * 
     * @param {string} str - String
     * @param {string} separator - Separador de palavras
     * @returns {string}
     */
    static last(str, separator = ' ') {
        const tokens = str.split(separator);

        if (tokens.length == 0) {
            return str;
        }

        return tokens[tokens.length - 1];
    }

    /**
     * Retorna a primeira palavra separada por caracter
     * 
     * @param {string} str - String
     * @param {string} separator - Separador de palavras
     * @returns {string}
     */
    static first(str, separator = ' ') {
        const tokens = str.split(separator);

        if (tokens.length == 0) {
            return str;
        }

        return tokens[0];
    }

    /**
     * Retorna uma string formatada segundo os marcadores de texto
     * 
     * @param {strin} format - String com marcadores de texto
     * @param  {...any} args - Lista de valoers para os marcadores de texto
     * @returns {string}
     */
    static format(format, ...args) {
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };

    /**
     * Faz o recorte no texto baseado nos caracteres informados nos parametros beginWord e endWord
     * 
     * @param {string} text - Texto
     * @param {string} beginWord - Palavra que inicia o clipping
     * @param {string} endWord - Palavra que finaliza o clipping
     * @returns {string}
     */
    static clips(text, beginWord, endWord) {
        let arr = [];
        let i = -1;

        while (true) {
            i = text.indexOf(beginWord, i + 1);
            if (i == -1) break;
            i += beginWord.length;

            let f = text.indexOf(endWord, i + 1);
            if (f == -1) break;

            arr.push(text.substr(i, f - i));
            i = f + 1;
        }

        return arr;
    };

    /**
     * Verifica se o objeto event fornecido contém apenas caracteres alphanuméricos
     * 
     * @method isAlphaNumeric
     * @param {event} e 
     * @return {boolean}
     */
    static isAlphaNumeric(e) {
        let charCode = (e.which) ? e.which : e.keyCode;
        if (charCode == 8) return true;

        let keynum;
        let keychar;
        let charcheck = /[a-zA-Z0-9]/;
        if (window.event) // IE
        {
            keynum = e.keyCode;
        }
        else {
            if (e.which) // Netscape/Firefox/Opera
            {
                keynum = e.which;
            }
            else return true;
        }

        keychar = String.fromCharCode(keynum);
        return charcheck.test(keychar);
    };

    /**
     * Convert todos os espaços para código html &nbsp;
     * 
     * @method space2nbsp
     * @param {string} str 
     * @return {string}
     */
    static space2nbsp(str) {
        if (str == null) return '';
        return str.replace(/\s/gi, '&nbsp;').replace(/\-/gi, '&nbsp;-&nbsp;');
    };

    /**
     * Adiciona três pontos ao final da string de seu tamanho exceder o limite fornecido
     * 
     * @method reticencias
     * @param {string} str 
     * @param {int} length 
     * @return {string}
     */
    static reticencias(str, length) {
        if (str.length > length) return str.substring(0, length) + '...';
        else return str;
    }
    ;
    /**
     * Remove todos os espaços da string
     * 
     * @method removeSpace
     * @param {string} str 
     * @return {string}
     */
    static removeSpace(str) {
        return (str || '').replace(/\s*/gi, '');
    };

    /**
     * Retorna a primeira palavra da string
     * 
     * @method firtWord
     * @param {string} str 
     * @return {string}
     */
    static firstWord(str) {
        if (_type__WEBPACK_IMPORTED_MODULE_1__["default"].isString(str)) {
            return str.split(' ')[0];
        } else {
            return '';
        }
    };

    /**
     * Retorna a última palavra da string
     * 
     * @method lastWord
     * @param {string} str 
     * @return {string}
     */
    static lastWord(str) {
        if (_type__WEBPACK_IMPORTED_MODULE_1__["default"].isString(str)) {
            let p = str.split(' ');
            return p[p.length - 1];
        } else {
            return '';
        }

    };

    /**
     * Retorna a primeira e última palavras da string
     * 
     * @method firstAndlastWord
     * @param {string} str 
     * @return {string}
     */
    static firstAndlastWord(str) {
        let p = str.split(' ');
        let first = '';

        if (p.length == 1) return str;

        first = str.split(' ')[0];

        return first + ' ' + p[p.length - 1];
    };

    /**
     * Converte todas as palavras da string para capital. As palavras podem estar seperadas por espaço ou _
     * 
     * @method capital
     * @param {string} str 
     * @return {string}
     */
    static capital(str) {
        if (!_type__WEBPACK_IMPORTED_MODULE_1__["default"].isString(str)) return '';

        str = str.toLowerCase();

        let p = /(^[\s_\.-]*\w|[\s\._-]\w)+/gi,
            m = str.match(p);

        for (let v in m) {
            str = str.replace(m[v], m[v].toUpperCase());
        }

        return str;
    };

    static replace(input, search, replacement) {
        return input.replace(new RegExp(search, 'g'), replacement);
    };

    /**
     * Reduz um nome em n - 1 palavras iniciais mais a ultima palavra
     * 
     * @method cut
     * @param {string} str 
     * @param {int} total 
     * @return {string}
     */
    static cut(str, total) {
        if (!_type__WEBPACK_IMPORTED_MODULE_1__["default"].isString(str) || total < 0) return str;

        let p = str.split(' '),
            arr = [];

        //adiciona a primeira palavra
        arr.push(p[0]);

        if (total > p.length) total = p.length;

        for (let i = 1; i < total; i++) {
            arr.push(p[i]);
        }

        //adiciona a ultima palavra
        if (p.length > total) {
            arr.push(p[p.length - 1]);
        }

        return arr.join(' ');
    }
};

(0,_env__WEBPACK_IMPORTED_MODULE_0__.register)(PiString);

/***/ }),

/***/ "./node_modules/pyllar/translate.js":
/*!******************************************!*\
  !*** ./node_modules/pyllar/translate.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ "./node_modules/pyllar/object.js");

/**
 * class
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class PiTranslate {
    #table = {};

    /**
     * 
     * @param {object} table - Carrega uma tabela de tradução para o translate
     * @returns {PiTranslate}
     */
    load(table) {
        _object__WEBPACK_IMPORTED_MODULE_0__["default"].extend(this.#table, table);

        return this;
    }

    /**
     * Define um valor para uma chave
     * 
     * @param {string} key - Chave
     * @param {string} value - Valor
     * @returns {PiTranslate}
     */
    set(key, value) {
        this.#table[key] = value;

        return this;
    }

    /**
     * Retorna um valor de uma dada chave
     * 
     * @param {string} key - Chave
     * @returns {string}
     */
    get(key) {
        return this.#table[key] || '';
    }

    /**
     * Verifica se existe uma chave na tabela de tradução
     * 
     * @param {string} key - Chave
     * @returns {boolean}
     */
    exist(key) {
        return this.#table[key] != undefined;
    }

    /**
     * Apaga toda a tabela de tradução
     * 
     * @returns {PiTranslate}
     */
    clear() {
        this.#table = {};
        return this;
    }
});

/***/ }),

/***/ "./node_modules/pyllar/tree.js":
/*!*************************************!*\
  !*** ./node_modules/pyllar/tree.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiTree)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");


/**
 * @class
 * @name PiTree
 */
class PiTree {
    /**
     * Cria uma arvóre virtual onde todos os elementos serão instancias de PiElement
     */
    constructor() {

    }

    static parse(html) {
        const tree = new PiTree();
        if (html instanceof Element) html = html.innerHTML;

        const doc = tree._loadDocument(html);
        const root = tree._loadElementRoot(doc);

        return root;
    }

    _loadDocument(html) {
        try {
            const wp = new _env__WEBPACK_IMPORTED_MODULE_0__.global.DOMParser();
            return wp.parseFromString(html, 'text/html'); //Vai fazer o parse de string para Element
        } catch (error) {
            console.log('PiTree: O html informado esta formatado incorretamente');
            console.log(html);
        }

        return null;
    }

    _loadElementRoot(doc) {
        if (doc == null) {
            return null;
        }

        const root = document.createDocumentFragment(); // Vai criar um fragmento da DOM principal
        const element = doc.getElementsByTagName('body')[0];
        const elements = [...element.children];

        for (let i = 0; i < elements.length; i++) {
            root.appendChild(elements[i]); // Vai adicional todos os elementos da DOM principal para a DOM fragmentada
        }

        return root;
    }
};


/***/ }),

/***/ "./node_modules/pyllar/type.js":
/*!*************************************!*\
  !*** ./node_modules/pyllar/type.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiType)
/* harmony export */ });
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");


/**
 * @class
 */
class PiType {
    /**
     * Returna se o parametro é exatamente 'undefined'
     * 
     * @param {object} obj 
     * @returns {boolean}
     */
    static isUndefined(obj) {
        if (obj === null) return false;
        else if (obj == undefined) return true;
        else return false;
    }

    /**
     * Retorna o nome do construtor do objeto
     * 
     * @param {object} obj 
     * @returns {string}
     */
    static typeof(obj) {
        let v = null;

        if (obj != undefined && obj != null && !PiType.isNumber(obj)) {
            try {
                v = obj.constructor.name;
                if (v == '') v = 'Object';
            } catch (ex) {

            }
        } else if (PiType.isNumber(obj)) {
            return 'Number';
        } else if (obj === undefined) {
            return 'Undefined'
        } else if (obj === null) {
            return 'Null';
        }

        return v;
    }

    /**
     * Retorna true se o parametro é um número ou false caso contrário
     * 
     * @param {object} obj 
     * @returns {boolean}
     */
    static isNumber(obj) {
        if (typeof obj == 'number' && isFinite(obj) && !isNaN(obj)) return true;
        else return false;
    }

    /**
    * Returna true se o parametro é null ou undefined
    * 
    * @param {object} obj 
    * @returns {boolean}
    */
    static isNullOrUndefined(obj) {
        if (obj == null || obj == undefined) return true;
        else return false;
    }

    /**
     * Returna true se o parametro é uma função
     * 
     * @param {object} obj 
     * @returns {boolean}
     */
    static isFunction(obj) {
        if (typeof obj == 'function') return true;
        else return false;
    }

    /**
     * Returna true se o parametro é um array
     * 
     * @param {object} obj 
     * @returns {boolean}
     */
    static isArray(obj) {
        if (PiType.typeof(obj) == 'Array') return true;

        if (PiType.typeof(obj) == 'String') {
            if (/^\[.*\]$/gi.test(obj)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Retorna true se o parametro é um Object
     * 
     * @param {object} obj 
     * @returns {boolean}
     */
    static isObject(obj) {
        if (PiType.typeof(obj) == 'Object') return true;
        if (typeof obj == 'object') return true;

        if (PiType.typeof(obj) == 'String') {
            if (/^\{.*\}$/gi.test(obj)) {
                return true;
            }
        }

        return false;
    }

    /**
     * Returna true se o parametro é uma string
     * 
     * @param {object} obj 
     * @returns {boolean}
     */
    static isString(obj) {
        if (typeof obj == 'string') return true;
        else return false;
    }

    /**
     * Returna true se o parametro é um Boolean
     * 
     * @param {object} obj 
     * @returns {boolean}
     */
    static isBoolean(obj) {
        if (typeof obj == 'boolean') return true;
        else return false;
    }
};

(0,_env__WEBPACK_IMPORTED_MODULE_0__.register)(PiType);

/***/ }),

/***/ "./node_modules/pyllar/url.js":
/*!************************************!*\
  !*** ./node_modules/pyllar/url.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiUrl)
/* harmony export */ });
/* harmony import */ var _alias__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alias */ "./node_modules/pyllar/alias.js");
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class */ "./node_modules/pyllar/class.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./node_modules/pyllar/type.js");
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./string */ "./node_modules/pyllar/string.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");






/**
 * @class
 */
class PiUrl extends _class__WEBPACK_IMPORTED_MODULE_1__["default"] {
    static alias = new _alias__WEBPACK_IMPORTED_MODULE_0__["default"]();

    init() {
        let arr = arguments,
            url = '';

        for (let i = 0; i < arr.length; i++) {
            let alias = arr[i];

            if (PiUrl.alias.exist(arr[i])) {
                alias = PiUrl.alias.getValue(arr[i]);
            }

            if (alias[0] == '/' && url[url.length - 1] == '/') {
                url += alias.substring(1);
            } else {
                url += alias;
            }

        }

        this.setUrl(url);
    }

    /**
     * Define a url
     * 
     * @param {string} url
     * @returns {PiUrl}
     */
    setUrl(url) {
        if (PiUrl.alias.exist(url)) {
            url = PiUrl.alias.getValue(url);
        }

        if (PiUrl.isValid(url)) this._url = url;

        return this;
    }

    /**
     * Obtem o scheme da url
     * 
     * @returns {string}
     */
    scheme() {
        let url = this.getUrl(),
            i = url.indexOf(':');

        if (i < 0) return '';
        return url.substr(0, i);
    }

    /**
     * Define ou obtem o host da url
     * 
     * @param {string} host
     * @returns {string}
     */
    host(host) {
        let url = this.getUrl(),
            h = this._parse(url, 'host');

        if (host === undefined) {
            return h;
        } else {
            this.setUrl(url.replace(h, host));
            return this;
        }
    }

    /**
     * Define ou obtem a porta da url
     * 
     * @param {string|int} port 
     * @returns {PiUrl|int}
     */
    port(port) {
        let url = this.getUrl(),
            p = this._parse(url, 'port') || '';

        if (_type__WEBPACK_IMPORTED_MODULE_2__["default"].isUndefined(port)) {
            return p;
        }

        let pt = this.port() || '',
            href = this.href();

        if (pt.length == 0) {
            url = url.replace(href, href + ':' + port);
        } else {
            url = url.replace(p, port);
        }

        this.setUrl(url);

        return this;
    }

    /**
     * Define ou obtem o href da url
     * 
     * @param {string} url - Href
     * @returns {PiUrl|string}
     */
    href(url) {
        let u = this.host(),
            h = u,
            s = this._parse(this.getUrl(), 'scheme');

        if (url === undefined) {
            let p = this.port();

            if (p.length == 0) p = '';
            else p = ':' + p;

            if (s.length > 0) {
                h = s + '://' + u + p;
            } else {
                h = u + p;
            }

            return h;
        }

        this.setUrl(url);

        return this;
    }

    /**
     * Define ou obtem o hash da url
     * 
     * @param {string} hash 
     * @returns {PiUrl|string}
     */
    hash(hash) {
        let url = this.getUrl(),
            hh = this._parse(url, 'hash');

        if (hash === undefined) {
            return hh;
        } else {

            if (hh.length == 0) {
                this.setUrl(url + '#' + hash);
            } else {
                this.setUrl(url.replace(hh, hash));
            }

            return this;
        }
    }

    /**
     * Anexa ao path da url o path informado
     * 
     * @param {string} path 
     * @returns {PiUrl}
     */
    appendPath(path) {
        let url = this.getUrl(),
            p = this._parse(url, 'path');

        if (PiUrl.alias.exist(path)) {
            path = PiUrl.alias.getValue(path);
        }

        if (url.substring(url.length - 1) != '/') url += '/';
        this.setUrl(url + path);
        return this;
    }

    /**
     * Define ou obtem o path da url
     * 
     * @param {string} path 
     * @returns {PiUrl|string}
     */
    path(path) {
        let url = this.getUrl(),
            p = this._parse(url, 'path'),
            pp = '/' + p;

        if (path === undefined) {
            return pp;
        }

        if (PiUrl.alias.exist(path)) {
            path = PiUrl.alias.getValue(path);
        }

        if (p.length == 0) {
            if (url.substring(url.length - 1) != '/' && path.charAt(0) != '/') url += '/' + path;
            else url += path;
        } else {
            url = url.replace(pp, path);
        }

        this.setUrl(url);

        return this;
    }

    /**
     * Define ou obtem o filename da url
     * 
     * @param {string} filename 
     * @returns {PiUrl|strin}
     */
    filename(filename) {
        let url = this.getUrl();

        if (filename === undefined) {
            return url.replace(/\\/g, '/').replace(/.*\//, '').replace(/\?.*/, '') || '';
        } else {
            let u = this.getUrl(),
                f = this.filename();

            this.setUrl(u.replace(f, filename));
            return this;
        }
    }

    /**
     * Define ou obtem a query string da url
     * 
     * @param {string} query 
     * @returns {PiUrl|string}
     */
    query(query) {
        let url = this.getUrl(),
            p = this._parse(url, 'query');

        if (query === undefined) {
            return p;
        } else {
            let q = this.query();
            this.setUrl(url.replace(q, query));
            return this;
        }
    }

    /**
     * Adiciona uma valor a query string
     * 
     * @param {string} key - Chave
     * @param {string} value - Valor
     * @returns {PiUrl}
     */
    addQuery(key, value) {
        let q = this.query(),
            url = this.getUrl(),
            qs = _string__WEBPACK_IMPORTED_MODULE_3__["default"].format('{1}={2}', url, key, encodeURIComponent(value));

        if (q.length == 0) {
            this.setUrl(url + '?' + qs);
        } else {
            this.setUrl(url + '&' + qs);
        }

        return this;
    }

    /**
     * Obtem um valor da query string pela sua chave
     * 
     * @param {string} key - Chave
     * @returns {string}
     */
    getQuery(key) {
        let qs = this.query().split('&');

        for (var i = 0; i < qs.length; i++) {
            let q = qs[i].split('=');
            if (q[0] == key) {
                return decodeURIComponent(q[1]);
            }
        }

        return '';
    }

    /**
     * Obtem o dirname da url
     * 
     * @returns {string}
     */
    dirname() {
        return this.getUrl().replace(/\\/g, '/').replace(/\/[^\/]*$/, '');
    }

    /**
     * Retorna a url formatada
     * 
     * @returns {string}
     */
    getUrl() {
        // var m = this.options;

        // if (PiSubdomains.exist(m)) {
        //     var s = PiSubdomains.next(m);
        //     return PiString.format(this.url, s);
        // }

        return this._url || '';
    }

    /**
     * Alias to getUrl
     * 
     * @returns {strin}
     */
    toString() {
        return this.getUrl();
    }

    _parse(url, parte) {
        let p = { 'url': 0, 'scheme': 1, 'slash': 2, 'host': 3, 'port': 4, 'path': 5, 'query': 6, 'hash': 7 },
            pattern = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,
            s = pattern.exec(url || '');

        if (s == null) return '';
        return s[p[parte]] || '';
    }

    /**
     * Verifica se a url informada é valida
     * 
     * @param {string} url 
     * @returns {boolean}
     */
    static isValid(url) {
        return /(http|https|)(:\/\/|)([\w-]+\.?)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(url || '');
    }

    /**
     * Adiciona a lista de parametros a url
     * 
     */
    static add() {
        PiUrl.alias.add.apply(PiUrl.alias, arguments);
    }

    /**
     * 
     * @param {string} name 
     * @returns {string}
     */
    static get(name) {
        return PiUrl.alias.getValue(name);
    }

    static to() {
        let arr = arguments,
            url = '';

        for (let i = 0; i < arguments.length; i++) {
            let alias = arr[i];

            if (PiUrl.alias.exist(arr[i])) {
                alias = PiUrl.alias.getValue(arr[i]);
            }

            if (alias[0] == '/' && url[url.length - 1] == '/') {
                url += alias.substring(1);
            } else {
                url += alias;
            }

        }

        (0,_env__WEBPACK_IMPORTED_MODULE_4__.setLocation)(url);
    }

    static query(query) {
        let q = PiUrl.create((0,_env__WEBPACK_IMPORTED_MODULE_4__.location)()).query(),
            p = q.split('&');

        for (let i in p) {
            let pp = p[i].split('=');
            if (pp[0] == query) return pp[1];
        }
    }

};

(0,_env__WEBPACK_IMPORTED_MODULE_4__.register)(PiUrl);

/***/ }),

/***/ "./node_modules/pyllar/url_hash.js":
/*!*****************************************!*\
  !*** ./node_modules/pyllar/url_hash.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiUrlHash)
/* harmony export */ });
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random */ "./node_modules/pyllar/random.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./node_modules/pyllar/type.js");




/**
 * @class
 */
class PiUrlHash {
    static _callbacks = [];
    static _fnWillChanges = [];
    static _fnDidChanges = [];
    #hashId = 0;

    /**
     * Disparado sempre que a hash da url for alterada
     */
    hashDidChange() {

    }

    /**
     * Observa mudanças no hash da url
     * 
     * @returns {PiUrlHash}
     */
    listen() {
        this.#hashId = _random__WEBPACK_IMPORTED_MODULE_0__["default"].uuid('xxx-xxx');

        PiUrlHash._callbacks.push({
            id: this.#hashId,
            cb: () => {
                return this.hashDidChange(PiUrlHash.get());
            }
        });

        return this;
    }

    /**
     * Deixa de observar mudanças no hash da url
     * 
     * @returns {PiUrlHash}
     */
    unlisten() {
        const arr = PiUrlHash._callbacks;

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];
            if (item.id == this.#hashId) {
                PiUrlHash._callbacks.splice(i, 1);
                return this;
            }

        }

        return this;
    }

    /**
     * Retorna o valor atual do hash da url
     * 
     * @returns {string}
     */
    static get() {
        let h = (0,_env__WEBPACK_IMPORTED_MODULE_1__.location)().hash;
        h = h.length == 0 ? h : h.substr(1);

        return h;
    }

    /**
     * Define o valor do hash da url
     * 
     * @param {string} hash - Valor do hash
     */
    static to(hash) {
        let h = PiUrlHash.get();
        let q = h.indexOf('?');

        if (q > -1) {
            q = h.substr(q);
            h = h.substr(0, q);
        } else {
            q = '';
        }

        if ('!' + h == hash || '!' + hash == h) {
            return this;
        }

        if (q.length > 0) {
            hash += q;
        }

        (0,_env__WEBPACK_IMPORTED_MODULE_1__.location)().hash = hash;

        return PiUrlHash;
    }

    /**
     * Retorna o valor da query string no hash da url
     * 
     * @param {string} key - Chave da query string
     * @returns {string}
     */
    static getQueryString(key) {
        let h = PiUrlHash.get();
        let ps = h.split('?');

        if (ps.length < 2) return '';
        let kv = ps[1].split('&');
        for (let i = 0; i < kv.length; i++) {
            var k = kv[i].split('=');
            if (k[0] == key) return decodeURIComponent(k[1]);
        }

        return '';
    }

    static getQueryInt(key) {
        return parseInt(PiUrlHash.getQueryString(key));
    }

    static getQueryFloat(key) {
        return parseFloat(PiUrlHash.getQueryString(key));
    }

    /**
     * Remove um par chave-valor da query string do hash da url
     * 
     * @param {string} key - Chave da query string
     */
    static removeQueryString(key) {
        let h = PiUrlHash.get();
        let ps = h.split('?');

        if (key == undefined) {
            (0,_env__WEBPACK_IMPORTED_MODULE_1__.location)().hash = ps[0];
            return PiUrlHash;
        }

        let p = [];
        let map = [];

        if (ps.length > 1) {
            p = ps[1].split('&');
            for (let i = 0; i < p.length; i++) {
                if (p[i].length == 0) continue;

                let _ps = p[i].split('=');
                map[_ps[0]] = _ps[1];
            }
        }

        delete map[key];

        var arr = [];
        for (const key in map) {
            arr.push(`${key}=${map[key]}`);
        }

        (0,_env__WEBPACK_IMPORTED_MODULE_1__.location)().hash = `${ps[0]}?${arr.join('&')}`;

        return PiUrlHash;
    }

    /**
     * Adiciona um par chave-valor para a query string do hash da url
     * 
     * @param {string} key - Chave da query string
     * @param {string} value - Valor da query string
     */
    static addQueryString(key, value = '') {
        let h = PiUrlHash.get();
        let ps = h.split('?');
        let p = [];
        let map = [];

        if (ps.length > 1) {
            p = ps[1].split('&');
            for (let i = 0; i < p.length; i++) {
                if (p[i].length == 0) continue;

                let _ps = p[i].split('=');
                map[_ps[0]] = _ps[1];
            }
        }

        map[key] = value || '';
        var arr = [];
        for (const key in map) {
            arr.push(`${key}=${map[key]}`);
        }

        (0,_env__WEBPACK_IMPORTED_MODULE_1__.location)().hash = `${ps[0]}?${arr.join('&')}`;

        return PiUrlHash;
    }

    /**
     * Adiciona array de paths para o hash da url
     * 
     * @param  {...any} args - Array de paths
     */
    static add(...args) {
        let h = PiUrlHash.get();

        if (h.length > 0) {
            PiUrlHash.to(h + '/' + args.join('/'));
        } else {
            PiUrlHash.to(args.join('/'));
        }
    }

    /**
     * Remove do hash da url o valor informado
     * 
     * @param {string} str - String a ser removida
     * @returns {PiUrlhash}
     */
    static remove(str) {
        (0,_env__WEBPACK_IMPORTED_MODULE_1__.location)().hash = (0,_env__WEBPACK_IMPORTED_MODULE_1__.location)().hash.replace(str, '');

        return this;
    }

    static onWillChange(fn) {
        PiUrlHash._fnWillChanges.push(fn);
    }

    static onDidChange(fn) {
        PiUrlHash._fnDidChange.push(fn);
    }

};

var lastHash = null;
_env__WEBPACK_IMPORTED_MODULE_1__.global.onhashchange = function () {
    if (lastHash == PiUrlHash.get()) {
        return;
    }
    lastHash = PiUrlHash.get();

    const arr = PiUrlHash._callbacks;

    for (let i = 0; i < PiUrlHash._fnWillChanges.length; i++) {
        PiUrlHash._fnWillChanges[i](lastHash);
    }

    for (var i = 0; i < arr.length; i++) {
        arr[i].cb();
    }

    for (let i = 0; i < PiUrlHash._fnDidChanges.length; i++) {
        PiUrlHash._fnDidChanges[i](lastHash);
    }
};

(0,_env__WEBPACK_IMPORTED_MODULE_1__.register)(PiUrlHash);

/***/ }),

/***/ "./node_modules/pyllar/virtual_tree.js":
/*!*********************************************!*\
  !*** ./node_modules/pyllar/virtual_tree.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PiVirtualTree)
/* harmony export */ });
/* harmony import */ var _element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element */ "./node_modules/pyllar/element.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./env */ "./node_modules/pyllar/env.js");



/**
 * @class
 */
class PiVirtualTree {
    #elementsParent = null;
    #velements = [];
    #components = [];
    #componentsParams = [];
    #componentParent = null;
    #hook = [];
    #scope = { context: {} };

    constructor(element, scope = { context: {} }, componentParent = null) {
        if (element instanceof Array) {
            this.#elementsParent = element;
        } else if (element instanceof HTMLCollection) {
            this.#elementsParent = element;
        } else {
            this.#elementsParent = [element];
        }

        this.#componentParent = componentParent;
        this.#scope = scope;
    }

    hook(name, fn) {
        this.#hook[name] = fn;

        return this;
    }

    load() {
        this._createVirtualElements(this.#elementsParent);
        this._createComponents();

        return this;
    }

    destroy() {
        for (let i = 0; i < this.#velements.length; i++) {
            const element = this.#velements[i];
            element.destroy();
        }

        for (let i = 0; i < this.#components.length; i++) {
            this.#components[i].destroy();
        }

        this.#velements = [];
        this.#components = [];
        this.#componentsParams = [];

        return this;
    }

    _createComponent(componentName) {
        const __constructor = (0,_env__WEBPACK_IMPORTED_MODULE_1__.findClass)(componentName);

        if (__constructor == undefined) {
            throw `Component não localizado: ${componentName}`;
        }

        return new __constructor();
    }

    _createComponents() {
        for (let i = 0; i < this.#componentsParams.length; i++) {
            const params = this.#componentsParams[i];
            const componentName = params.componentName;
            const velement = params.velement;
            const element = velement._element;
            const name = element.getAttribute('name');

            var component = null;

            if (this.#componentParent) {
                if (name) {
                    component = this.#componentParent[name];
                    if (component == null) {
                        component = this._createComponent(componentName);
                        this.#componentParent[name] = component;
                    }
                } else {
                    component = this._createComponent(componentName);
                }
            } else {
                component = this._createComponent(componentName);
            }

            velement.setComponent(component);
            component.render(element);
            this.#components.push(component);
        }
    }

    _createVirtualElements(elements) {
        if (elements == null) {
            return;
        }

        if (elements.length == 1 && elements[0] instanceof DocumentFragment) {
            this._createVirtualElements(elements[0].children);
            return;
        }

        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];

            if (element instanceof Text) {
                continue;
            }

            if (element instanceof HTMLScriptElement) {
                continue;
            }

            if (element instanceof HTMLStyleElement) {
                continue;
            }

            if (element._pie == undefined) {
                this._invokeHook('will:create:velement');
                const velement = new _element__WEBPACK_IMPORTED_MODULE_0__["default"](element, this.#scope, this.#componentParent);
                this._invokeHook('did:create:velement', velement);
                this._invokeHook('will:load:velement', velement);
                velement.load(this.#componentParent);
                this._invokeHook('did:load:velement', velement);

                if (velement.isDestroyed) {
                    i--;
                    continue;
                }

                const componentName = element.getAttribute('component');
                if (componentName != null) {
                    this.#componentsParams.push({
                        velement: velement,
                        componentName: componentName
                    });
                }

                this.#velements.push(velement);
            }

            this._createVirtualElements(element.children);
        }
    }

    _invokeHook(name, ...params) {
        if (this.#hook[name]) {
            this.#hook[name](...params);
        }

        return this;
    }
};

/***/ }),

/***/ "./src/app.css":
/*!*********************!*\
  !*** ./src/app.css ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/cifra/CifraAnime.css":
/*!**********************************!*\
  !*** ./src/cifra/CifraAnime.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_CifraAnime_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./CifraAnime.css */ "./node_modules/css-loader/dist/cjs.js!./src/cifra/CifraAnime.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_CifraAnime_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_CifraAnime_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_CifraAnime_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_CifraAnime_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/cifra/CifraView.css":
/*!*********************************!*\
  !*** ./src/cifra/CifraView.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_CifraView_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./CifraView.css */ "./node_modules/css-loader/dist/cjs.js!./src/cifra/CifraView.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_CifraView_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_CifraView_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_CifraView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_CifraView_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/homepage/HomePage.css":
/*!***********************************!*\
  !*** ./src/homepage/HomePage.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_HomePage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./HomePage.css */ "./node_modules/css-loader/dist/cjs.js!./src/homepage/HomePage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_HomePage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_HomePage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_HomePage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_HomePage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%271600%27 height=%27198%27%3e%3cdefs%3e%3clinearGradient id=%27a%27 x1=%2750%25%27 x2=%2750%25%27 y1=%27-10.959%25%27 y2=%27100%25%27%3e%3cstop stop-color=%27%23fcc900%27 stop-opacity=%27.25%27 offset=%270%25%27/%3e%3cstop stop-color=%27%23fcc900%27 offset=%27100%25%27/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill=%27url%28%23a%29%27 fill-rule=%27evenodd%27 d=%27M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z%27/%3e%3c/svg%3e":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%271600%27 height=%27198%27%3e%3cdefs%3e%3clinearGradient id=%27a%27 x1=%2750%25%27 x2=%2750%25%27 y1=%27-10.959%25%27 y2=%27100%25%27%3e%3cstop stop-color=%27%23fcc900%27 stop-opacity=%27.25%27 offset=%270%25%27/%3e%3cstop stop-color=%27%23fcc900%27 offset=%27100%25%27/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill=%27url%28%23a%29%27 fill-rule=%27evenodd%27 d=%27M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z%27/%3e%3c/svg%3e ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%271600%27 height=%27198%27%3e%3cdefs%3e%3clinearGradient id=%27a%27 x1=%2750%25%27 x2=%2750%25%27 y1=%27-10.959%25%27 y2=%27100%25%27%3e%3cstop stop-color=%27%23fcc900%27 stop-opacity=%27.25%27 offset=%270%25%27/%3e%3cstop stop-color=%27%23fcc900%27 offset=%27100%25%27/%3e%3c/linearGradient%3e%3c/defs%3e%3cpath fill=%27url%28%23a%29%27 fill-rule=%27evenodd%27 d=%27M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z%27/%3e%3c/svg%3e";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pyllar_env__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pyllar/env */ "./node_modules/pyllar/env.js");
/* harmony import */ var pyllar_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pyllar/bootstrap */ "./node_modules/pyllar/bootstrap.js");
/* harmony import */ var pyllar_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pyllar/config */ "./node_modules/pyllar/config.js");
/* harmony import */ var _homepage_HomePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/HomePage */ "./src/homepage/HomePage.js");
/* harmony import */ var _cifra_CifraView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cifra/CifraView */ "./src/cifra/CifraView.js");
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.css */ "./src/app.css");






if (window.appSettings) {
  pyllar_config__WEBPACK_IMPORTED_MODULE_2__["default"].load(appSettings);
}
(function () {
  if (typeof window.localStorage === 'undefined' || typeof window.sessionStorage === 'undefined') {
    (function () {
      var Storage = function Storage(type) {
        function createCookie(name, value, days) {
          var expires;
          if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toGMTString();
          } else {
            expires = "";
          }
          document.cookie = name + "=" + value + expires + "; path=/";
        }
        function readCookie(name) {
          var nameEQ = name + "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
          }
          return null;
        }
        function eraseCookie(name) {
          createCookie(name, "", -1);
        }
        function clearCookies() {
          var cookies = document.cookie.split(";");
          for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
          }
        }
        return {
          setItem: function setItem(key, value) {
            createCookie(key, value, 365);
          },
          getItem: function getItem(key) {
            return readCookie(key);
          },
          removeItem: function removeItem(key) {
            eraseCookie(key);
          },
          clear: function clear() {
            clearCookies();
          }
        };
      };
      window.localStorage = new Storage('local');
      window.sessionStorage = new Storage('session');
    })();
  }
})();
pyllar_config__WEBPACK_IMPORTED_MODULE_2__["default"].set('request.fetch', function (url, settings, success, error, next) {
  next();
});
new pyllar_bootstrap__WEBPACK_IMPORTED_MODULE_1__["default"]().onLoad(function (boot) {}).onReady(function (boot) {
  var homepage = new _homepage_HomePage__WEBPACK_IMPORTED_MODULE_3__["default"]();
  homepage.render(pyllar_env__WEBPACK_IMPORTED_MODULE_0__.global.app.$element);
  homepage.setView(new _cifra_CifraView__WEBPACK_IMPORTED_MODULE_4__["default"]());
}).load();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsK0NBQVEsVUFBVSxFQUFFLEVBQUUsRUFBRTs7QUFFekM7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QUUsQ0FBQztFQUNSO0FBQ0osQ0FBQyxFQUFFLENBQUM7QUFHSnJRLHFEQUFRLENBQUM2UixHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVVDLEdBQUcsRUFBRUMsUUFBUSxFQUFFQyxPQUFPLEVBQUUvUCxLQUFLLEVBQUVxRSxJQUFJLEVBQUU7RUFDekVBLElBQUksQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDQUFDO0FBRUYsSUFBSTJKLHdEQUFTLENBQUMsQ0FBQyxDQUNWZ0MsTUFBTSxDQUFDLFVBQUNDLElBQUksRUFBSyxDQUVsQixDQUFDLENBQUMsQ0FDREMsT0FBTyxDQUFDLFVBQUNELElBQUksRUFBSztFQUNmLElBQU1FLFFBQVEsR0FBRyxJQUFJL0UsMERBQVEsQ0FBQyxDQUFDO0VBQy9CK0UsUUFBUSxDQUFDeEUsTUFBTSxDQUFDb0MsOENBQU0sQ0FBQ3FDLEdBQUcsQ0FBQ3BILFFBQVEsQ0FBQztFQUNwQ21ILFFBQVEsQ0FBQzFFLE9BQU8sQ0FBQyxJQUFJekQsd0RBQVMsQ0FBQyxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQ0RrRyxJQUFJLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9zcmMvY2lmcmEvQ2lmcmFBbmltZS5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL3NyYy9jaWZyYS9DaWZyYU1vZGVsLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vc3JjL2NpZnJhL0NpZnJhU3RyZWFtLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vc3JjL2NpZnJhL0NpZnJhVmlldy5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL3NyYy9ob21lcGFnZS9Ib21lUGFnZS5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL3NyYy9tYXJjYWRvci9NYXJjYWRvci5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL3NyYy9ub3RlL05vdGUuanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9zcmMvbm90ZS9Ob3RlQ29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL3NyYy90cmFuc3BvcnRlL1RyYW5zcG9ydGVNb2RlbC5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL3NyYy9hcHAuY3NzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vc3JjL2NpZnJhL0NpZnJhQW5pbWUuY3NzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vc3JjL2NpZnJhL0NpZnJhVmlldy5jc3MiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9zcmMvaG9tZXBhZ2UvSG9tZVBhZ2UuY3NzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL25vZGVfbW9kdWxlcy9weWxsYXIvYWN0aW9uLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci9hbGlhcy5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL25vZGVfbW9kdWxlcy9weWxsYXIvYXBwLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci9hcnJheS5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL25vZGVfbW9kdWxlcy9weWxsYXIvYm9vdC5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL25vZGVfbW9kdWxlcy9weWxsYXIvYm9vdHN0cmFwLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci9jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL25vZGVfbW9kdWxlcy9weWxsYXIvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvcHlsbGFyL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL25vZGVfbW9kdWxlcy9weWxsYXIvY29uZmlnLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci9kaWN0aW9uYXJ5LmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci9lbGVtZW50LmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci9lbnYuanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvcHlsbGFyL2V2ZW50LmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci9leHByZXNzaW9uLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci9mb3JfZGlyZWN0aXZlLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci9mb3JlYWNoX2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL25vZGVfbW9kdWxlcy9weWxsYXIvZnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvcHlsbGFyL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvcHlsbGFyL2luaXRpYWxpemUuanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvcHlsbGFyL21vZGVsLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci9uYXRpdmVfZWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL25vZGVfbW9kdWxlcy9weWxsYXIvb2JqZWN0LmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci9wcm9taXNlLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci9yYW5kb20uanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvcHlsbGFyL3JlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvcHlsbGFyL3N0YXRlbWVudC5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL25vZGVfbW9kdWxlcy9weWxsYXIvc3RyaW5nLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3B5bGxhci90cmFuc2xhdGUuanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvcHlsbGFyL3RyZWUuanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvcHlsbGFyL3R5cGUuanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvcHlsbGFyL3VybC5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL25vZGVfbW9kdWxlcy9weWxsYXIvdXJsX2hhc2guanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvcHlsbGFyL3ZpcnR1YWxfdHJlZS5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL3NyYy9hcHAuY3NzP2E2NzIiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9zcmMvY2lmcmEvQ2lmcmFBbmltZS5jc3M/ZDY5NCIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL3NyYy9jaWZyYS9DaWZyYVZpZXcuY3NzPzI0ZDQiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9zcmMvaG9tZXBhZ2UvSG9tZVBhZ2UuY3NzPzE2MzMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2NpZnJhLXV4Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9jaWZyYS11eC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jaWZyYS11eC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jaWZyYS11eC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY2lmcmEtdXgvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jaWZyYS11eC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NpZnJhLXV4L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2NpZnJhLXV4L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9jaWZyYS11eC8uL3NyYy9ib290c3RyYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBpQ29tcG9uZW50IGZyb20gJ3B5bGxhci9jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IFwiLi9DaWZyYUFuaW1lLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lmcmFBbmltZSBleHRlbmRzIFBpQ29tcG9uZW50IHtcclxuICAgIHZpZXcgPSAvKmh0bWwqL2A8ZGl2IGNsYXNzPVwiY2lmcmEtcHJldmlld1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1pbm5lclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YFxyXG59IiwiaW1wb3J0IFBpQ29uZmlnIGZyb20gJ3B5bGxhci9jb25maWcnO1xyXG5pbXBvcnQgUGlNb2RlbCBmcm9tICdweWxsYXIvbW9kZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lmcmFNb2RlbCBleHRlbmRzIFBpTW9kZWwge1xyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHN1cGVyLmluaXQoUGlDb25maWcuZ2V0KCdlbmRwb2ludC5jaWZyYScpKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0V2l0aEpzb24oanNvbil7XHJcbiAgICAgICAgc3VwZXIuaW5pdFdpdGhKc29uKGpzb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBhY3Rpb25zKCl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgJ2luc2VydCc6ICdQT1NUOi8nLFxyXG4gICAgICAgICAgICAnc2F2ZSc6ICdQVVQ6LycsXHJcbiAgICAgICAgICAgICdnZXQnOiAnR0VUOi86aWQnLFxyXG4gICAgICAgICAgICAnYWxsJzogJ0dFVDovJyxcclxuICAgICAgICAgICAgJ2ltcG9ydCc6ICdHRVQ6L2ltcG9ydD91cmw9OnVybCdcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQ2lmcmFNb2RlbCBmcm9tICcuL0NpZnJhTW9kZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lmcmFTdHJlYW0ge1xyXG4gICAgZm5OZXdDaWZyYSA9IG51bGw7XHJcbiAgICBmbk5ld05vdGUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3QpIHtcclxuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xyXG4gICAgfVxyXG5cclxuICAgIG9uTmV3Q2lmcmEoZm4pIHtcclxuICAgICAgICB0aGlzLmZuTmV3Q2lmcmEgPSBmblxyXG4gICAgfVxyXG5cclxuICAgIG9uTmV3Tm90ZShmbikge1xyXG4gICAgICAgIHRoaXMuZm5OZXdOb3RlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgX3Byb2Nlc3NFdmVudChlKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnQudHlwZSA9PSAnbmV3OmNpZnJhJykge1xyXG4gICAgICAgICAgICAgICAgKG5ldyBDaWZyYU1vZGVsKCkpLmdldChldmVudC5pZCkudGhlbigoY2lmcmEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZuTmV3Q2lmcmEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZuTmV3Q2lmcmEoY2lmcmEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT0gJ25vdGUnKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmZuTmV3Tm90ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mbk5ld05vdGUoZXZlbnQubm90ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29ubmVjdCgpIHtcclxuICAgICAgICBjb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHRoaXMuaG9zdCk7XHJcblxyXG4gICAgICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29uZWN0YWRvIGFvIHNlcnZpZG9yIFdlYlNvY2tldCcpO1xyXG5cclxuICAgICAgICAgICAgLy8gRW52aWEgdW1hIG1lbnNhZ2VtIGFvIHNlcnZpZG9yXHJcbiAgICAgICAgICAgIHNvY2tldC5zZW5kKCdPbMOhIHNlcnZpZG9yIScpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBRdWFuZG8gdW1hIG1lbnNhZ2VtIMOpIHJlY2ViaWRhIGRvIHNlcnZpZG9yXHJcbiAgICAgICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NFdmVudChldmVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFF1YW5kbyBhIGNvbmV4w6NvIMOpIGZlY2hhZGFcclxuICAgICAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZXNjb25lY3RhZG8gZG8gc2Vydmlkb3IgV2ViU29ja2V0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29ubmVjdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCBQaUNvbXBvbmVudCBmcm9tICdweWxsYXIvY29tcG9uZW50JztcblxuaW1wb3J0IENpZnJhTW9kZWwgZnJvbSAnLi9DaWZyYU1vZGVsJztcbmltcG9ydCBNYXJjYWRvciBmcm9tICcuLi9tYXJjYWRvci9NYXJjYWRvcic7XG5pbXBvcnQgTm90ZXNDb2xsZWN0aW9uIGZyb20gJy4uL25vdGUvTm90ZUNvbGxlY3Rpb24nO1xuXG5pbXBvcnQgXCIuL0NpZnJhVmlldy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2lmcmFWaWV3IGV4dGVuZHMgUGlDb21wb25lbnQge1xuICAgIHZpZXcgPSAvKmh0bWwqL2A8ZGl2IDpjbGFzcz1cImNpZnJhLXZpZXcge0BfbW9zdHJhckFjb3JkZXMgPyAgJycgOiAnbm8tY2hvcmRzJ31cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdHVsb1wiPlxuICAgICAgICAgICAge0BfdGl0dWxvfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJtb3N0cmFyQWNvcmRlc1wiIEBjaGFuZ2U9XCJfc2F2ZU1vc3RyYXJBY29yZGVzKCR2YWx1ZSlcIiA6Y2hlY2tlZD1cIntAX21vc3RyYXJBY29yZGVzfVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJtb3N0cmFyQWNvcmRlc1wiPk1vc3RyYXIgQWNvcmRlczwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJiYXJyYVJvbGFnZW1cIiBAY2hhbmdlPVwiX3NhdmVSb2xhZ2VtQXV0b21hdGljYSgkdmFsdWUpXCIgOmNoZWNrZWQ9XCJ7QF9yb2xhZ2VtQXV0b21hdGljYX1cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsXCIgZm9yPVwiYmFycmFSb2xhZ2VtXCI+QmFycmEgZGUgUm9sYWdlbSBBdXRvbcOhdGljYTwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tY2hlY2sgZm9ybS1zd2l0Y2hcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJmb3JtLWNoZWNrLWlucHV0XCIgdHlwZT1cImNoZWNrYm94XCIgaWQ9XCJldmlkZW5jaWFyXCIgQGNoYW5nZT1cIl9zYXZlRXZpZGVuY2lhck5vdGFzKCR2YWx1ZSlcIiA6Y2hlY2tlZD1cIntAX2V2aWRlbmNpYXJBY29yZGVzfVwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tY2hlY2stbGFiZWxcIiBmb3I9XCJldmlkZW5jaWFyXCI+RXZpZMOqbmNpYXIgYWNvcmRlczwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlclwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJtYXJjYWRvclwiIGNsYXNzPVwibWFyY2Fkb3JcIj48L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDxwcmUgaWQ9XCJjb250ZW50XCI+PC9wcmU+XG5cbiAgICAgICAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDFweCAxMHB4OyBib3JkZXItcmFkaXVzOiAzcHg7IHBvc2l0aW9uOiBmaXhlZDsgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTsgYm90dG9tOiAwcHg7IHJpZ2h0OiAzcHg7XCI+djAuMS4xPC9kaXY+XG4gICAgPC9kaXY+YDtcblxuICAgIF90aXR1bG8gPSAnJztcbiAgICBfbW9zdHJhckFjb3JkZXMgPSB0cnVlO1xuICAgIF9yb2xhZ2VtQXV0b21hdGljYSA9IHRydWU7XG4gICAgX2V2aWRlbmNpYXJBY29yZGVzID0gdHJ1ZTtcblxuICAgIHZpZXdEaWRMb2FkKCkge1xuICAgICAgICB0aGlzLl9sb2FkQ29uZmlnKCk7XG4gICAgICAgIHRoaXMuX2xvYWRNYXJjYWRvcigpO1xuICAgIH1cblxuICAgIHNldFN0cmVhbShzdHJlYW0pIHtcbiAgICAgICAgc3RyZWFtLm9uTmV3Tm90ZShub3RlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2V0TWFyY2Fkb3JQb3NpY2FvKG5vdGUucG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyBsb2FkQ2lmcmEoaWQsIGZuKSB7XG4gICAgICAgIGNvbnN0IGNpZnJhID0gYXdhaXQgKG5ldyBDaWZyYU1vZGVsKCkpLmdldChpZCk7XG4gICAgICAgIHRoaXMuc2V0Q2lmcmEoY2lmcmEsIGZuKTtcbiAgICB9XG5cbiAgICBzZXRDaWZyYShjaWZyYSwgZm4pIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5maW5kKFwiI2NvbnRlbnRcIikuaHRtbCh0aGlzLl9mb3JtYXROb3Rlcyh0aGlzLl9mb3JtYXRUYWcoY2lmcmEudGV4dG8pKSk7XG5cbiAgICAgICAgdGhpcy5fdGl0dWxvID0gY2lmcmEudGl0dWxvO1xuXG4gICAgICAgIHRoaXMuX2xvYWROb3RlcygpO1xuICAgICAgICB0aGlzLl9sb2FkQ29uZmlnKCk7XG5cbiAgICAgICAgdGhpcy5zZXRNYXJjYWRvclBvc2ljYW8oMCk7XG4gICAgICAgIGlmIChmbikgZm4oKTtcbiAgICB9XG5cbiAgICBzZXRNYXJjYWRvclBvc2ljYW8ocG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5tYXJjYWRvci5tb3ZlKHRoaXMubm90ZXMuZ2V0Tm90ZUJ5UG9zaXRpb24ocG9zaXRpb24pKTtcbiAgICB9XG5cbiAgICBfc2F2ZU1vc3RyYXJBY29yZGVzKHYpIHtcbiAgICAgICAgdGhpcy5fbW9zdHJhckFjb3JkZXMgPSB2O1xuXG4gICAgICAgIHRoaXMuX3NhdmVDb25maWcoKTtcbiAgICB9XG5cbiAgICBfc2F2ZVJvbGFnZW1BdXRvbWF0aWNhKHYpIHtcbiAgICAgICAgdGhpcy5fcm9sYWdlbUF1dG9tYXRpY2EgPSB2O1xuXG4gICAgICAgIGlmICh0aGlzLm1hcmNhZG9yKSB7XG4gICAgICAgICAgICB0aGlzLm1hcmNhZG9yLnNldFJvbGFnZW1BdXRvbWF0aWNhKHYpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fc2F2ZUNvbmZpZygpO1xuICAgIH1cblxuICAgIF9zYXZlRXZpZGVuY2lhck5vdGFzKHYpIHtcbiAgICAgICAgdGhpcy5fZXZpZGVuY2lhckFjb3JkZXMgPSB2O1xuXG4gICAgICAgIGlmICh0aGlzLm1hcmNhZG9yKSB7XG4gICAgICAgICAgICB2ID8gdGhpcy5tYXJjYWRvci5zaG93KCkgOiB0aGlzLm1hcmNhZG9yLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3NhdmVDb25maWcoKTtcbiAgICB9XG5cbiAgICBfZm9ybWF0Tm90ZXMoY2lmcmEpIHtcbiAgICAgICAgcmV0dXJuIGNpZnJhLnJlcGxhY2UoL1xcKFteKV0rXFwpL2dpLCAobm90ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8Yj4ke25vdGUucmVwbGFjZSgnKCcsICcnKS5yZXBsYWNlKCcpJywgJycpfTwvYj5gXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9mb3JtYXRUYWcoY2lmcmEpIHtcbiAgICAgICAgcmV0dXJuIGNpZnJhLnJlcGxhY2UoL1xcW1teXFxdXStcXF0vZ2ksIChub3RlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYDxpPiR7bm90ZX08L2k+YFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbG9hZE1hcmNhZG9yKCkge1xuICAgICAgICB0aGlzLm1hcmNhZG9yID0gbmV3IE1hcmNhZG9yKHRoaXMuJGVsZW1lbnQuZmluZChcIiNtYXJjYWRvclwiKSk7XG4gICAgfVxuXG4gICAgX2xvYWROb3RlcygpIHtcbiAgICAgICAgdGhpcy5ub3RlcyA9IG5ldyBOb3Rlc0NvbGxlY3Rpb24odGhpcy4kZWxlbWVudC5maW5kKFwiI2NvbnRlbnRcIikuZmluZCgnYicpKTtcbiAgICB9XG5cbiAgICBfc2F2ZUNvbmZpZygpIHtcbiAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdtb3N0cmFyX2Fjb3JkZXMnLCB0aGlzLl9tb3N0cmFyQWNvcmRlcyk7XG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncm9sYWdlbV9hdXRvbWF0aWNhJywgdGhpcy5fcm9sYWdlbUF1dG9tYXRpY2EpO1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2V2aWRlbmNpYXJfYWNvcmRlcycsIHRoaXMuX2V2aWRlbmNpYXJBY29yZGVzKTtcbiAgICB9XG5cbiAgICBfbG9hZENvbmZpZygpIHtcbiAgICAgICAgY29uc3QgY29uZmlnID0gdGhpcy5fZ2V0Q29uZmlnKCk7XG5cbiAgICAgICAgdGhpcy5fc2F2ZU1vc3RyYXJBY29yZGVzKGNvbmZpZy5tb3N0cmFyQWNvcmRlcyk7XG4gICAgICAgIHRoaXMuX3NhdmVSb2xhZ2VtQXV0b21hdGljYShjb25maWcucm9sYWdlbUF1dG9tYXRpY2EpO1xuICAgICAgICB0aGlzLl9zYXZlRXZpZGVuY2lhck5vdGFzKGNvbmZpZy5ldmlkZW5jaWFyQWNvcmRlcyk7XG4gICAgfVxuXG4gICAgX2dldENvbmZpZygpIHtcbiAgICAgICAgY29uc3QgbW9zdHJhckFjb3JkZXMgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ21vc3RyYXJfYWNvcmRlcycpO1xuICAgICAgICBjb25zdCByb2xhZ2VtQXV0b21hdGljYSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sYWdlbV9hdXRvbWF0aWNhJyk7XG4gICAgICAgIGNvbnN0IGV2aWRlbmNpYXJBY29yZGVzID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdldmlkZW5jaWFyX2Fjb3JkZXMnKTtcblxuICAgICAgICBpZiAobW9zdHJhckFjb3JkZXMgPT09IG51bGwgfHwgcm9sYWdlbUF1dG9tYXRpY2EgPT09IG51bGwgfHwgZXZpZGVuY2lhckFjb3JkZXMgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NhdmVDb25maWcoKTtcblxuICAgICAgICAgICAgbW9zdHJhckFjb3JkZXMgPSB0cnVlO1xuICAgICAgICAgICAgcm9sYWdlbUF1dG9tYXRpY2EgPSB0cnVlO1xuICAgICAgICAgICAgZXZpZGVuY2lhckFjb3JkZXMgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vc3RyYXJBY29yZGVzOiBtb3N0cmFyQWNvcmRlcyA9PT0gJ3RydWUnLFxuICAgICAgICAgICAgcm9sYWdlbUF1dG9tYXRpY2E6IHJvbGFnZW1BdXRvbWF0aWNhID09PSAndHJ1ZScsXG4gICAgICAgICAgICBldmlkZW5jaWFyQWNvcmRlczogZXZpZGVuY2lhckFjb3JkZXMgPT09ICd0cnVlJ1xuICAgICAgICB9XG4gICAgfVxufVxuXG5QaUNvbXBvbmVudC5yZWdpc3RlcihDaWZyYVZpZXcpOyIsImltcG9ydCBQaUNvbXBvbmVudCBmcm9tICdweWxsYXIvY29tcG9uZW50JztcclxuaW1wb3J0IFBpQ29uZmlnIGZyb20gJ3B5bGxhci9jb25maWcnO1xyXG5cclxuaW1wb3J0IENpZnJhVmlldyBmcm9tICcuLi9jaWZyYS9DaWZyYVZpZXcnO1xyXG5pbXBvcnQgQ2lmcmFBbmltZSBmcm9tICcuLi9jaWZyYS9DaWZyYUFuaW1lJztcclxuaW1wb3J0IENpZnJhU3RyZWFtIGZyb20gJy4uL2NpZnJhL0NpZnJhU3RyZWFtJztcclxuXHJcbmltcG9ydCBUcmFuc3BvcnRlTW9kZWwgZnJvbSAnLi4vdHJhbnNwb3J0ZS9UcmFuc3BvcnRlTW9kZWwnO1xyXG5cclxuaW1wb3J0IFwiLi9Ib21lUGFnZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVQYWdlIGV4dGVuZHMgUGlDb21wb25lbnQge1xyXG4gICAgdmlldyA9IC8qaHRtbCovYDxkaXYgY2xhc3M9XCJjb250YWluZXIgaG9tZXBhZ2VcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwidmlld1wiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuXHJcbiAgICBpbnN0YW5jZXMoKSB7XHJcbiAgICAgICAgdGhpcy5jaWZyYVN0cmVhbSA9IG5ldyBDaWZyYVN0cmVhbShQaUNvbmZpZy5nZXQoJ2NpZnJhU3RyZWFtJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXdEaWRMb2FkKCkge1xyXG4gICAgICAgIHRoaXMuY2lmcmFTdHJlYW0uY29ubmVjdCgpO1xyXG5cclxuICAgICAgICB0aGlzLl9sb2FkVHJhbnNwb3J0ZSgpO1xyXG4gICAgICAgIHRoaXMuX2xvYWRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWaWV3KHZpZXcpIHtcclxuICAgICAgICB2aWV3LnJlbmRlcih0aGlzLiRlbGVtZW50LmZpbmQoJyN2aWV3JykpO1xyXG4gICAgfVxyXG5cclxuICAgIF9sb2FkVHJhbnNwb3J0ZSgpIHtcclxuICAgICAgICAobmV3IFRyYW5zcG9ydGVNb2RlbCgpKS5nZXQoKS50aGVuKCh0cmFuc3BvcnRlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0cmFuc3BvcnRlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmlldyhuZXcgQ2lmcmFBbmltZSgpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRyYW5zcG9ydGUuY2lmcmFJZCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZpZXcobmV3IENpZnJhQW5pbWUoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNpZnJhVmlldyA9IG5ldyBDaWZyYVZpZXcoKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRWaWV3KGNpZnJhVmlldyk7XHJcbiAgICAgICAgICAgIGNpZnJhVmlldy5zZXRTdHJlYW0odGhpcy5jaWZyYVN0cmVhbSk7XHJcbiAgICAgICAgICAgIGNpZnJhVmlldy5sb2FkQ2lmcmEodHJhbnNwb3J0ZS5jaWZyYUlkLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjaWZyYVZpZXcuc2V0TWFyY2Fkb3JQb3NpY2FvKHRyYW5zcG9ydGUucG9zaWNhbyk7XHJcbiAgICAgICAgICAgICAgICBjaWZyYVZpZXcuc2V0TWFyY2Fkb3JQb3NpY2FvKDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBfbG9hZEV2ZW50cygpIHtcclxuICAgICAgICB0aGlzLmNpZnJhU3RyZWFtLm9uTmV3Q2lmcmEoY2lmcmEgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjaWZyYVZpZXcgPSBuZXcgQ2lmcmFWaWV3KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmlldyhjaWZyYVZpZXcpO1xyXG4gICAgICAgICAgICBjaWZyYVZpZXcuc2V0U3RyZWFtKHRoaXMuY2lmcmFTdHJlYW0pO1xyXG4gICAgICAgICAgICBjaWZyYVZpZXcuc2V0Q2lmcmEoY2lmcmEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFyY2Fkb3Ige1xuXG4gICAgY29uc3RydWN0b3IoJG1hcmNhZG9yKSB7XG4gICAgICAgIHRoaXMuJG1hcmNhZG9yID0gJG1hcmNhZG9yO1xuICAgICAgICB0aGlzLm5vdGUgPSBudWxsO1xuICAgICAgICB0aGlzLnJvbGFnZW1BdXRvbWF0aWNhID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBtb3ZlKG5vdGUpIHtcbiAgICAgICAgaWYgKG5vdGUgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbm90ZS5wb3NpdGlvbigpO1xuICAgICAgICBjb25zdCB3ID0gbm90ZS53aWR0aCgpO1xuICAgICAgICBjb25zdCBoID0gbm90ZS5oZWlnaHQoKTtcblxuICAgICAgICB0aGlzLiRtYXJjYWRvci5jc3MoJ3RvcCcsIHBvc2l0aW9uLnRvcCAtIDIpLmNzcygnbGVmdCcsIHBvc2l0aW9uLmxlZnQgLSA3KTtcbiAgICAgICAgdGhpcy4kbWFyY2Fkb3IuY3NzKCd3aWR0aCcsIHcgKyAxMykuY3NzKCdoZWlnaHQnLCBoICsgNCk7XG5cbiAgICAgICAgbm90ZS5zYXZlKCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgbm90ZS5oaWdobGlnaHQoKTtcbiAgICAgICAgfSwgMjAwKTtcblxuICAgICAgICBpZiAodGhpcy5ub3RlKSB7XG4gICAgICAgICAgICB0aGlzLm5vdGUucmVzdG9yZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub3RlID0gbm90ZTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX21vdmVTY3JvbGwobm90ZSk7XG4gICAgICAgIH0sIDIwMCk7XG4gICAgfVxuXG4gICAgc2V0Um9sYWdlbUF1dG9tYXRpY2EoYikge1xuICAgICAgICB0aGlzLnJvbGFnZW1BdXRvbWF0aWNhID0gYjtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLiRtYXJjYWRvci5zaG93KCk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgdGhpcy4kbWFyY2Fkb3IuaGlkZSgpO1xuICAgIH1cblxuICAgIF9tb3ZlU2Nyb2xsKG5vdGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJvbGFnZW1BdXRvbWF0aWNhKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB3aCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgICAgY29uc3Qgd2gyID0gd2ggLyAyO1xuICAgICAgICBjb25zdCBucCA9IG5vdGUucG9zaXRpb24oKS50b3A7XG4gICAgICAgIGNvbnN0IG50ID0gbnAgLSB3aW5kb3cuc2Nyb2xsWTtcblxuICAgICAgICBpZiAobnQgPiB3aDIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCBub3RlLmhlaWdodCgpIC8gMiArIG50IC0gd2gyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLiRtYXJjYWRvci5nZXQoMCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmIChyZWN0LnRvcCA8IDApIHtcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxCeSgwLCAocmVjdC50b3AgLSA2MCkpO1xuICAgICAgICB9XG4gICAgfVxufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCRub3RlKSB7XHJcbiAgICAgICAgdGhpcy4kbm90ZSA9ICRub3RlO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZ2hsaWdodCgpIHtcclxuICAgICAgICB0aGlzLiRub3RlLmNzcygnY29sb3InLCAnd2hpdGUnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXN0b3JlKCkge1xyXG4gICAgICAgIHRoaXMuJG5vdGUuY3NzKCdjb2xvcicsIHRoaXMuJG5vdGUuYXR0cignZGF0YS1jb2xvcicpKTtcclxuICAgIH1cclxuXHJcbiAgICBzYXZlKCkge1xyXG4gICAgICAgIHRoaXMuJG5vdGUuYXR0cignZGF0YS1jb2xvcicsIHRoaXMuJG5vdGUuY3NzKCdjb2xvcicpKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3NpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kbm90ZS5wb3NpdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHdpZHRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRub3RlLndpZHRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGVpZ2h0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiRub3RlLmhlaWdodCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkZWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kbm90ZTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQgTm90ZSBmcm9tIFwiLi9Ob3RlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3Rlc0NvbGxlY3Rpb24gZXh0ZW5kcyBBcnJheSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigkbm90ZXMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAkbm90ZXMuZ2V0KCkuZm9yRWFjaCgobm90ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5wdXNoKG5ldyBOb3RlKCQobm90ZSkpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROb3RlQnlQb3NpdGlvbihwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXNbcCAtIDFdO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCBQaUNvbmZpZyBmcm9tICdweWxsYXIvY29uZmlnJztcclxuaW1wb3J0IFBpTW9kZWwgZnJvbSAncHlsbGFyL21vZGVsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zcG9ydGVNb2RlbCBleHRlbmRzIFBpTW9kZWwge1xyXG4gICAgaW5pdCgpe1xyXG4gICAgICAgIHN1cGVyLmluaXQoUGlDb25maWcuZ2V0KCdlbmRwb2ludC50cmFuc3BvcnRlJykpO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGlvbnMoKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAnZ2V0JzogJ0dFVDovJyxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XHJcbiAgICAtLWFwcC1jb2xvcjogI2EwMDdmZjtcclxufVxyXG5cclxuLmJ0bi1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFwcC1jb2xvcikgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLWNvbG9yKSAhaW1wb3J0YW50O1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXBwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDZDQUE2QztJQUM3Qyx5Q0FBeUM7QUFDN0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxyXFxuICAgIC0tYXBwLWNvbG9yOiAjYTAwN2ZmO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLXByaW1hcnkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtY29sb3IpICFpbXBvcnRhbnQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYXBwLWNvbG9yKSAhaW1wb3J0YW50O1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0lMjdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyNyB3aWR0aD0lMjcxNjAwJTI3IGhlaWdodD0lMjcxOTglMjclM2UlM2NkZWZzJTNlJTNjbGluZWFyR3JhZGllbnQgaWQ9JTI3YSUyNyB4MT0lMjc1MCUyNSUyNyB4Mj0lMjc1MCUyNSUyNyB5MT0lMjctMTAuOTU5JTI1JTI3IHkyPSUyNzEwMCUyNSUyNyUzZSUzY3N0b3Agc3RvcC1jb2xvcj0lMjclMjNmY2M5MDAlMjcgc3RvcC1vcGFjaXR5PSUyNy4yNSUyNyBvZmZzZXQ9JTI3MCUyNSUyNy8lM2UlM2NzdG9wIHN0b3AtY29sb3I9JTI3JTIzZmNjOTAwJTI3IG9mZnNldD0lMjcxMDAlMjUlMjcvJTNlJTNjL2xpbmVhckdyYWRpZW50JTNlJTNjL2RlZnMlM2UlM2NwYXRoIGZpbGw9JTI3dXJsJTI4JTIzYSUyOSUyNyBmaWxsLXJ1bGU9JTI3ZXZlbm9kZCUyNyBkPSUyN00uMDA1IDEyMUMzMTEgMTIxIDQwOS44OTgtLjI1IDgxMSAwYzQwMCAwIDUwMCAxMjEgNzg5IDEyMXY3N0gwcy4wMDUtNDggLjAwNS03N3olMjcvJTNlJTNjL3N2ZyUzZVwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNpZnJhLXByZXZpZXcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExMDFEO1xyXG59XHJcblxyXG4uY2lmcmEtcHJldmlldyAuYm94IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5jaWZyYS1wcmV2aWV3IC5ib3g6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDMwcHgpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAzMHB4KTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoLjcpO1xyXG4gICAgZmlsdGVyOiBibHVyKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA0NTBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XHJcbn1cclxuXHJcbi5jaWZyYS1wcmV2aWV3IC5ib3g6aG92ZXI6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xyXG4gICAgZmlsdGVyOiBibHVyKDUwcHgpO1xyXG59XHJcblxyXG4uY2lmcmEtcHJldmlldyAuYm94LWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uY2lmcmEtcHJldmlldyAuYm94OmJlZm9yZSxcclxuLmNpZnJhLXByZXZpZXcgLmJveC1pbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQwMDk5O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjU4KTtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDIxcHg7ICovXHJcblxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTpcclxuICAgICAgICB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSksXHJcbiAgICAgICAgdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pLFxyXG4gICAgICAgIHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTYwMHB4IDUwJTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMTMwJSwgLTUwcHggMTMwJSwgNTAwcHggMTMwJTtcclxuXHJcbiAgICBhbmltYXRpb246IDIwcyB3YXZlcyBsaW5lYXIgaW5maW5pdGUgZm9yd2FyZHM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd2F2ZXMge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDE2MDBweCAxMzAlLCAzMTUwcHggMTMwJSwgNTMwMHB4IDEzMCU7XHJcbiAgICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jaWZyYS9DaWZyYUFuaW1lLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixRQUFRO0lBQ1IsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHdCQUF3QjtJQUN4Qix5QkFBeUI7SUFDekIsUUFBUTtJQUNSLFNBQVM7SUFDVCwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLFVBQVU7SUFDVixvREFBb0Q7QUFDeEQ7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6Qiw4Q0FBOEM7SUFDOUMseUJBQXlCOztJQUV6Qjs7OytDQUc0ZTtJQUM1ZSwyQkFBMkI7SUFDM0IsMkJBQTJCO0lBQzNCLG1EQUFtRDs7SUFFbkQsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0k7UUFDSSwwREFBMEQ7SUFDOUQ7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2lmcmEtcHJldmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExMDFEO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lmcmEtcHJldmlldyAuYm94IHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgYm90dG9tOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgcmlnaHQ6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNpZnJhLXByZXZpZXcgLmJveDpiZWZvcmUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlICsgMzBweCk7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlICsgMzBweCk7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKC43KTtcXHJcXG4gICAgZmlsdGVyOiBibHVyKDApO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgNDUwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uY2lmcmEtcHJldmlldyAuYm94OmhvdmVyOmJlZm9yZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcclxcbiAgICBmaWx0ZXI6IGJsdXIoNTBweCk7XFxyXFxufVxcclxcblxcclxcbi5jaWZyYS1wcmV2aWV3IC5ib3gtaW5uZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jaWZyYS1wcmV2aWV3IC5ib3g6YmVmb3JlLFxcclxcbi5jaWZyYS1wcmV2aWV3IC5ib3gtaW5uZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQwMDk5O1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEycHggMCByZ2JhKDAsIDAsIDAsIDAuNTgpO1xcclxcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyMXB4OyAqL1xcclxcblxcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOlxcclxcbiAgICAgICAgdXJsKFxcXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VVEYtOCwlM2NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTYwMCcgaGVpZ2h0PScxOTgnJTNlJTNjZGVmcyUzZSUzY2xpbmVhckdyYWRpZW50IGlkPSdhJyB4MT0nNTAlMjUnIHgyPSc1MCUyNScgeTE9Jy0xMC45NTklMjUnIHkyPScxMDAlMjUnJTNlJTNjc3RvcCBzdG9wLWNvbG9yPSclMjNmY2M5MDAnIHN0b3Atb3BhY2l0eT0nLjI1JyBvZmZzZXQ9JzAlMjUnLyUzZSUzY3N0b3Agc3RvcC1jb2xvcj0nJTIzZmNjOTAwJyBvZmZzZXQ9JzEwMCUyNScvJTNlJTNjL2xpbmVhckdyYWRpZW50JTNlJTNjL2RlZnMlM2UlM2NwYXRoIGZpbGw9J3VybCglMjNhKScgZmlsbC1ydWxlPSdldmVub2RkJyBkPSdNLjAwNSAxMjFDMzExIDEyMSA0MDkuODk4LS4yNSA4MTEgMGM0MDAgMCA1MDAgMTIxIDc4OSAxMjF2NzdIMHMuMDA1LTQ4IC4wMDUtNzd6Jy8lM2UlM2Mvc3ZnJTNlXFxcIiksXFxyXFxuICAgICAgICB1cmwoXFxcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PVVURi04LCUzY3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxNjAwJyBoZWlnaHQ9JzE5OCclM2UlM2NkZWZzJTNlJTNjbGluZWFyR3JhZGllbnQgaWQ9J2EnIHgxPSc1MCUyNScgeDI9JzUwJTI1JyB5MT0nLTEwLjk1OSUyNScgeTI9JzEwMCUyNSclM2UlM2NzdG9wIHN0b3AtY29sb3I9JyUyM2ZjYzkwMCcgc3RvcC1vcGFjaXR5PScuMjUnIG9mZnNldD0nMCUyNScvJTNlJTNjc3RvcCBzdG9wLWNvbG9yPSclMjNmY2M5MDAnIG9mZnNldD0nMTAwJTI1Jy8lM2UlM2MvbGluZWFyR3JhZGllbnQlM2UlM2MvZGVmcyUzZSUzY3BhdGggZmlsbD0ndXJsKCUyM2EpJyBmaWxsLXJ1bGU9J2V2ZW5vZGQnIGQ9J00uMDA1IDEyMUMzMTEgMTIxIDQwOS44OTgtLjI1IDgxMSAwYzQwMCAwIDUwMCAxMjEgNzg5IDEyMXY3N0gwcy4wMDUtNDggLjAwNS03N3onLyUzZSUzYy9zdmclM2VcXFwiKSxcXHJcXG4gICAgICAgIHVybChcXFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJTNjc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzE2MDAnIGhlaWdodD0nMTk4JyUzZSUzY2RlZnMlM2UlM2NsaW5lYXJHcmFkaWVudCBpZD0nYScgeDE9JzUwJTI1JyB4Mj0nNTAlMjUnIHkxPSctMTAuOTU5JTI1JyB5Mj0nMTAwJTI1JyUzZSUzY3N0b3Agc3RvcC1jb2xvcj0nJTIzZmNjOTAwJyBzdG9wLW9wYWNpdHk9Jy4yNScgb2Zmc2V0PScwJTI1Jy8lM2UlM2NzdG9wIHN0b3AtY29sb3I9JyUyM2ZjYzkwMCcgb2Zmc2V0PScxMDAlMjUnLyUzZSUzYy9saW5lYXJHcmFkaWVudCUzZSUzYy9kZWZzJTNlJTNjcGF0aCBmaWxsPSd1cmwoJTIzYSknIGZpbGwtcnVsZT0nZXZlbm9kZCcgZD0nTS4wMDUgMTIxQzMxMSAxMjEgNDA5Ljg5OC0uMjUgODExIDBjNDAwIDAgNTAwIDEyMSA3ODkgMTIxdjc3SDBzLjAwNS00OCAuMDA1LTc3eicvJTNlJTNjL3N2ZyUzZVxcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTYwMHB4IDUwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAxMzAlLCAtNTBweCAxMzAlLCA1MDBweCAxMzAlO1xcclxcblxcclxcbiAgICBhbmltYXRpb246IDIwcyB3YXZlcyBsaW5lYXIgaW5maW5pdGUgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgd2F2ZXMge1xcclxcbiAgICB0byB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNjAwcHggMTMwJSwgMzE1MHB4IDEzMCUsIDUzMDBweCAxMzAlO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNpZnJhLXZpZXcgLm1hcmNhZG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMnMsIGxlZnQgMC4ycywgd2lkdGggMC4ycywgaGVpZ2h0IDAuMnM7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNpZnJhLXZpZXcgcHJlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5jaWZyYS12aWV3IC5jZW50ZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAwcHg7XG4gICAgcmlnaHQ6IDBweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzOyAqL1xufVxuXG4uY2lmcmEtdmlldyBiIHtcbiAgICBjb2xvcjogI2Y3MDtcbn1cblxuLmNpZnJhLXZpZXcubm8tY2hvcmRzIGIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbn1cblxuLmNpZnJhLXZpZXcubm8tY2hvcmRzIC5tYXJjYWRvciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxufVxuXG4uY2lmcmEtdmlldyBpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmYjM5O1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4uY2lmcmEtdmlldyAudGl0dWxvIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtY29sb3IpO1xuICAgIC8qXG4qIENyZWF0ZWQgd2l0aCBodHRwczovL3d3dy5jc3MtZ3JhZGllbnQuY29tXG4qIEdyYWRpZW50IGxpbms6IGh0dHBzOi8vd3d3LmNzcy1ncmFkaWVudC5jb20vP2MxPTVlMjFjNyZjMj1hMzNjZDMmZ3Q9bCZnZD1kdGxcbiovXG4gICAgYmFja2dyb3VuZDogIzVFMjFDNztcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNUUyMUM3LCAjQTMzQ0QzKTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDdweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5jaWZyYS12aWV3IC5vcHRpb25zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4uY2lmcmEtdmlldyAub3B0aW9ucyAuZm9ybS1jaGVjayB7XG4gICAgbWFyZ2luOiA1cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY2lmcmEvQ2lmcmFWaWV3LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHdEQUF3RDtJQUN4RCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCOzs7Q0FHSDtJQUNHLG1CQUFtQjtJQUNuQixxREFBcUQ7SUFDckQsK0JBQStCO0lBQy9CLDhCQUE4QjtJQUM5QixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2lmcmEtdmlldyAubWFyY2Fkb3Ige1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuMnMsIGxlZnQgMC4ycywgd2lkdGggMC4ycywgaGVpZ2h0IDAuMnM7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jaWZyYS12aWV3IHByZSB7XFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuXFxuLmNpZnJhLXZpZXcgLmNlbnRlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgcmlnaHQ6IDBweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMzMzM7ICovXFxufVxcblxcbi5jaWZyYS12aWV3IGIge1xcbiAgICBjb2xvcjogI2Y3MDtcXG59XFxuXFxuLmNpZnJhLXZpZXcubm8tY2hvcmRzIGIge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG5cXG59XFxuXFxuLmNpZnJhLXZpZXcubm8tY2hvcmRzIC5tYXJjYWRvciB7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcblxcbn1cXG5cXG4uY2lmcmEtdmlldyBpIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmIzOTtcXG4gICAgY29sb3I6ICM1NTU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuLmNpZnJhLXZpZXcgLnRpdHVsbyB7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1jb2xvcik7XFxuICAgIC8qXFxuKiBDcmVhdGVkIHdpdGggaHR0cHM6Ly93d3cuY3NzLWdyYWRpZW50LmNvbVxcbiogR3JhZGllbnQgbGluazogaHR0cHM6Ly93d3cuY3NzLWdyYWRpZW50LmNvbS8/YzE9NWUyMWM3JmMyPWEzM2NkMyZndD1sJmdkPWR0bFxcbiovXFxuICAgIGJhY2tncm91bmQ6ICM1RTIxQzc7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1RTIxQzcsICNBMzNDRDMpO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogN3B4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA3cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG5cXG4uY2lmcmEtdmlldyAub3B0aW9ucyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5jaWZyYS12aWV3IC5vcHRpb25zIC5mb3JtLWNoZWNrIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhvbWVwYWdlIC5tZW51IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1jb2xvcik7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5ob21lcGFnZSAubWVudSBhe1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9ob21lcGFnZS9Ib21lUGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLGdDQUFnQztJQUNoQywrQkFBK0I7SUFDL0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5ob21lcGFnZSAubWVudSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1jb2xvcik7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvbWVwYWdlIC5tZW51IGF7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgUGlDbGFzcyBmcm9tICcuL2NsYXNzJ1xuaW1wb3J0IFBpUmVxdWVzdCBmcm9tICcuL3JlcXVlc3QnXG5pbXBvcnQgUGlQcm9taXNlIGZyb20gJy4vcHJvbWlzZSdcbmltcG9ydCBQaVR5cGUgZnJvbSAnLi90eXBlJ1xuaW1wb3J0IFBpVXJsIGZyb20gJy4vdXJsJ1xuXG4vKipcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaUFjdGlvbiBleHRlbmRzIFBpQ2xhc3Mge1xuICAgICNyZXF1ZXN0ID0gbmV3IFBpUmVxdWVzdCgpO1xuICAgICNwcm9taXNlID0gbmV3IFBpUHJvbWlzZSgpO1xuXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKVxuXG4gICAgICAgIHRoaXMuX2xvYWQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRvcm5hIGEgcHJvbWlzZVxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtQaVByb21pc2V9XG4gICAgICovXG4gICAgZ2V0IHByb21pc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9taXNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNoYWRvdyBtZXRob2RcbiAgICAgKi9cbiAgICBpbnZva2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYWxsTW9kZWxNZXRob2QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBwcm9jZXNzRXJyb3JSZXNwb25zZSgpIHtcbiAgICAgICAgdGhpcy4jcHJvbWlzZS5yZWplY3QuYXBwbHkodGhpcy4jcHJvbWlzZSwgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICBwcm9jZXNzU3VjY2Vzc1Jlc3BvbnNlKGRhdGEsIHBhZ2luZykge1xuICAgICAgICBpZiAodGhpcy5faWdub3JlX3Jlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLiNwcm9taXNlLnJlc29sdmUodGhpcy5tb2RlbCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoUGlUeXBlLmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kZWwgPSB0aGlzLm1vZGVsLmNyZWF0ZSgpLmluaXRXaXRoSnNvbihkYXRhW2ldKTtcblxuICAgICAgICAgICAgICAgIGlmIChtb2RlbCBpbnN0YW5jZW9mIFBpUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBtb2RlbC5vaygoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gobW9kZWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG1vZGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuI3Byb21pc2UucmVzb2x2ZShhcnIsIHBhZ2luZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFBpUHJvbWlzZS53YWl0KHByb21pc2VzKS5vaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI3Byb21pc2UucmVzb2x2ZShhcnIsIHBhZ2luZyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBtb2RlbCA9IHRoaXMubW9kZWwuY3JlYXRlKCkuaW5pdFdpdGhKc29uKGRhdGEpO1xuXG4gICAgICAgICAgICBpZiAobW9kZWwgaW5zdGFuY2VvZiBQaVByb21pc2UpIHtcbiAgICAgICAgICAgICAgICBtb2RlbC5vaygoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiNwcm9taXNlLnJlc29sdmUoZGF0YSwgcGFnaW5nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jcHJvbWlzZS5yZXNvbHZlKG1vZGVsLCBwYWdpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2xvYWQoKSB7XG4gICAgICAgIHRoaXMuX3BhcnNlU3RtdCh0aGlzLmFjdGlvblN0bXQpO1xuICAgICAgICB0aGlzLl9hZGRNb2RlbE1ldGhvZCgpO1xuICAgIH1cblxuICAgIF9hZGRNb2RlbE1ldGhvZCgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc19zdGF0aWMpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuY29uc3RydWN0b3JbdGhpcy5hY3Rpb25OYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb24gPSBuZXcgUGlBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb25OYW1lOiBzZWxmLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblN0bXQ6IHNlbGYuc3RtdCxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHNlbGYubW9kZWwuY2xvbmUoKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGFjdGlvbi5pbnZva2UuYXBwbHkoYWN0aW9uLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgob2ssIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2Uub2sob2spO1xuICAgICAgICAgICAgICAgICAgICBwcm9taXNlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubW9kZWxbdGhpcy5hY3Rpb25OYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb21pc2UgPSBzZWxmLmludm9rZS5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChvaywgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLm9rKG9rKTtcbiAgICAgICAgICAgICAgICBwcm9taXNlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIF9jYWxsTW9kZWxNZXRob2QoLi4uYXJncykge1xuICAgICAgICB0aGlzLiNwcm9taXNlID0gbmV3IFBpUHJvbWlzZSgpO1xuXG4gICAgICAgIGlmIChQaVR5cGUuaXNPYmplY3QoYXJnc1swXSkpIHtcbiAgICAgICAgICAgIHRoaXMubW9kZWwuaW5qZWN0KGFyZ3NbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX21ldGhvZCA9PSAnR0VUJyB8fCB0aGlzLl9tZXRob2QgPT0gJ09QVElPTlMnKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0R2V0LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX21ldGhvZCA9PSAnUFVUJyB8fCB0aGlzLl9tZXRob2QgPT0gJ1BPU1QnIHx8IHRoaXMuX21ldGhvZCA9PSAnREVMRVRFJyB8fCB0aGlzLl9tZXRob2QgPT0gJ1BBVEgnKSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVSZXF1ZXN0UG9zdC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9taXNlO1xuICAgIH1cblxuICAgIF9jcmVhdGVSZXF1ZXN0R2V0KC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuX2NyZWF0ZVVybCguLi5hcmdzKTtcblxuICAgICAgICBpZiAodGhpcy4jcmVxdWVzdC5pc1NlbmRpbmcoKSkge1xuICAgICAgICAgICAgdGhpcy4jcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2RlbC5yZXF1ZXN0V2lsbEdldCh1cmwpO1xuXG4gICAgICAgIHRoaXMuI3JlcXVlc3QuZ2V0SnNvbih1cmwpXG4gICAgICAgICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kZWwucmVzcG9uc2VTdWNjZXNzV2lsbExvYWQuYXBwbHkodGhpcy5tb2RlbCwgW3RoaXMsIHVybCwganNvbi5kYXRhLCBqc29uLnBhZ2luZ10pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoanNvbikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzWzBdIGluc3RhbmNlb2YgVHlwZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5yZXNwb25zZUVycm9yV2lsbExvYWQuYXBwbHkodGhpcy5tb2RlbCwgW3RoaXMsIHVybCwganNvbi5kYXRhLCBqc29uLnBhZ2luZ10pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbC5yZXF1ZXN0RGlkR2V0KHVybCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZVJlcXVlc3RQb3N0KC4uLmFyZ3MpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuX2NyZWF0ZVVybCguLi5hcmdzKTtcbiAgICAgICAgbGV0IGpzb24gPSB0aGlzLm1vZGVsLnRvSnNvbigpO1xuXG4gICAgICAgIGlmICh0aGlzLiNyZXF1ZXN0LmlzU2VuZGluZygpKSB7XG4gICAgICAgICAgICB0aGlzLiNyZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1vZGVsLnJlcXVlc3RXaWxsUG9zdChqc29uLCB1cmwpO1xuICAgICAgICB0aGlzLiNyZXF1ZXN0LnNldE1ldGhvZCh0aGlzLl9tZXRob2QpLnBvc3RKc29uKHVybCwganNvbilcbiAgICAgICAgICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5yZXNwb25zZVN1Y2Nlc3NXaWxsTG9hZC5hcHBseSh0aGlzLm1vZGVsLCBbdGhpcywgdXJsLCBqc29uLmRhdGEsIGpzb24ucGFnaW5nXSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChhcmdzWzBdIGluc3RhbmNlb2YgVHlwZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGFyZ3NbMF07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RlbC5yZXNwb25zZUVycm9yV2lsbExvYWQuYXBwbHkodGhpcy5tb2RlbCwgW3RoaXMsIHVybCwganNvbi5kYXRhLCBqc29uLnBhZ2luZ10pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbC5yZXF1ZXN0RGlkUG9zdChqc29uLCB1cmwpO1xuICAgIH1cblxuICAgIF9jcmVhdGVVcmwoLi4uYXJncykge1xuICAgICAgICBsZXQgYWN0aW9uID0gdGhpcy5fZ2V0QWN0aW9uKC4uLmFyZ3MpO1xuICAgICAgICBsZXQgdXJsID0gJyc7XG5cbiAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0QmFzZVVybCgpIGluc3RhbmNlb2YgUGlVcmwpIHtcbiAgICAgICAgICAgIHVybCA9IFBpVXJsLmNyZWF0ZSh0aGlzLm1vZGVsLmdldEJhc2VVcmwoKSkucGF0aChhY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kZWwuZ2V0QmFzZVVybCgpLmluZGV4T2YoJ2h0dHAnKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdXJsID0gUGlVcmwuY3JlYXRlKHRoaXMubW9kZWwuZ2V0QmFzZVVybCgpICsgYWN0aW9uKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gUGlVcmwuY3JlYXRlKCdsb2NhbGhvc3QnLCB0aGlzLm1vZGVsLmdldEJhc2VVcmwoKSArIGFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIF9nZXRBY3Rpb24oLi4uYXJncykge1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl91cmwucmVwbGFjZSgvXFw6XFx3K1tcXChcXHcqXFwpXSovZ2ksIChwYXR0ZXJuKSA9PiB7XG4gICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBwYXR0ZXJuLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIGxldCBtb2RlbFZhbHVlID0gdGhpcy5tb2RlbFtwcm9wZXJ0eV0gfHwgJyc7XG5cbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1vZGVsVmFsdWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoYXJnc1tjb3VudCsrXSB8fCBtb2RlbFZhbHVlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfcGFyc2VTdG10KHN0bXQpIHtcbiAgICAgICAgY29uc3QgcCA9IHN0bXQuc3BsaXQoJzovJyk7XG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHBbMF07XG4gICAgICAgIGNvbnN0IHBhdGggPSBwWzFdO1xuXG4gICAgICAgIHRoaXMuX2lzX3N0YXRpYyA9IGZhbHNlO1xuICAgICAgICBpZiAobWV0aG9kLmluZGV4T2YoJ3N0YXRpYycpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX2lzX3N0YXRpYyA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pZ25vcmVfcmVzcG9uc2UgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1ldGhvZC5pbmRleE9mKCd+JykgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5faWdub3JlX3Jlc3BvbnNlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3VybCA9IHBhdGgubGVuZ3RoID8gJy8nICsgcGF0aCA6ICcnO1xuXG4gICAgICAgIGlmIChzdG10LnRvVXBwZXJDYXNlKCkuaW5kZXhPZignR0VUJykgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5fbWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RtdC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ1BPU1QnKSA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9tZXRob2QgPSAnUE9TVCc7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RtdC50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ1BVVCcpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX21ldGhvZCA9ICdQVVQnO1xuICAgICAgICB9IGVsc2UgaWYgKHN0bXQudG9VcHBlckNhc2UoKS5pbmRleE9mKCdERUxFVEUnKSA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9tZXRob2QgPSAnREVMRVRFJztcbiAgICAgICAgfSBlbHNlIGlmIChzdG10LnRvVXBwZXJDYXNlKCkuaW5kZXhPZignUEFUSCcpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX21ldGhvZCA9ICdQQVRIJztcbiAgICAgICAgfSBlbHNlIGlmIChzdG10LnRvVXBwZXJDYXNlKCkuaW5kZXhPZignT1BUSU9OUycpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX21ldGhvZCA9ICdPUFRJT05TJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl91cmwuaW5kZXhPZignPycpID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX21ldGhvZCA9ICdHRVQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbWV0aG9kID0gJ1BPU1QnO1xuICAgICAgICB9XG4gICAgfVxuXG59OyIsImltcG9ydCBQaURpY3Rpb25hcnkgZnJvbSBcIi4vZGljdGlvbmFyeVwiO1xuXG4vKipcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaUFzIHtcbiAgICAjYWxpYXMgPSBuZXcgUGlEaWN0aW9uYXJ5KCk7XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSBhIGxpc3RhIGRlIHBhcmFtZXRyb3MgYW8gY29uanVudG9cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBhZGQoKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhyb3cgXCJQaUFzOiBudW1lcm8gaW5zdWxmaWNpZW50ZSBkZSBwYXJhbWV0cm9zXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4jYWxpYXMuZXhpc3RLZXkoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICAgICAgdGhyb3cgXCJQaUFzOiBlc3RlIGFwZWxpZG8gamEgZm9pIGRlZmluaWRvOiBcIiArIGFyZ3VtZW50c1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWx1ZSA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXMgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiNhbGlhcy5leGlzdEtleShhcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLiNhbGlhcy5nZXRWYWx1ZShhcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlICs9IGFzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jYWxpYXMuYWRkKGFyZ3VtZW50c1swXSwgdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dWFsaXphIG8gY29uanVudG9cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgdGhyb3cgXCJQaUFzOiBudW1lcm8gaW5zdWxmaWNpZW50ZSBkZSBwYXJhbWV0cm9zXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4jYWxpYXMuZXhpc3RLZXkoYXJndW1lbnRzWzBdKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWx1ZSA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXMgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiNhbGlhcy5leGlzdEtleShhcykpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSArPSB0aGlzLiNhbGlhcy5nZXRWYWx1ZShhcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlICs9IGFzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jYWxpYXMuYWRkKGFyZ3VtZW50c1swXSwgdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB1bSBpdGVtIGRvIGNvbmp1bnRvXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFzIC0gSXRlbVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHJlbW92ZShhcykge1xuICAgICAgICB0aGlzLiNhbGlhcy5yZW1vdmUoYXMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgc2UgZXhpc3RlIG8gaXRlbSBubyBjb25qdW50b1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhcyBcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBleGlzdChhcykge1xuICAgICAgICByZXR1cm4gdGhpcy4jYWxpYXMuZXhpc3RLZXkoYXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgbyB2YWxvciBkbyBpdGVtXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGFzIFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgZ2V0VmFsdWUoYXMpIHtcbiAgICAgICAgbGV0IHYgPSB0aGlzLiNhbGlhcy5nZXRWYWx1ZShhcyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZXhpc3QoYXMpID09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLiNhbGlhcy5leGlzdEtleSh2KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VmFsdWUodik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfVxuICAgIH1cblxufTsiLCJpbXBvcnQgUGlDbGFzcyBmcm9tICcuL2NsYXNzJ1xuaW1wb3J0IFBpVXJsIGZyb20gJy4vdXJsJ1xuaW1wb3J0IHsgcmVnaXN0ZXIsIGxvY2F0aW9uIH0gZnJvbSAnLi9lbnYnXG5pbXBvcnQgUGlVcmxIYXNoIGZyb20gJy4vdXJsX2hhc2gnO1xuXG5pZiAobG9jYXRpb24oKS5ob3N0Lmxlbmd0aCA9PSAwKSB7XG4gICAgUGlVcmwuYWRkKCdsb2NhbGhvc3QnLCAnaHR0cDovL2xvY2FsaG9zdCcpO1xufSBlbHNlIHtcbiAgICBQaVVybC5hZGQoJ2xvY2FsaG9zdCcsIFBpVXJsLmNyZWF0ZShsb2NhdGlvbigpLnRvU3RyaW5nKCkpLmhyZWYoKSk7XG59XG5cbi8qKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpQXBwIGV4dGVuZHMgUGlDbGFzcyB7XG4gICAgcGFnZSA9IG51bGw7XG4gICAgc2VydmljZXMgPSBbXTtcbiAgICBfdG90YWxSb3V0ZU5vdEZvdW5kID0gMDtcblxuICAgIGluaXQoKXtcbiAgICAgICAgc3VwZXIuaW5pdCgpO1xuXG4gICAgICAgIFBpVXJsSGFzaC5vbldpbGxDaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fdG90YWxSb3V0ZU5vdEZvdW5kID0gMDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjcG8gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICByZWdpc3RlcihjcG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYWRkU2VydmljZXMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBzZXJ2aWNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgICAgICBzZXJ2aWNlLm9uUm91dGVOb3RGb3VuZCgocm91dGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl90b3RhbFJvdXRlTm90Rm91bmQrKztcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90b3RhbFJvdXRlTm90Rm91bmQgPT0gdGhpcy5zZXJ2aWNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jcm91dGVOb3RGb3VuZChyb3V0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2VydmljZXMucHVzaChzZXJ2aWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBcbiAgICBzdGFydFNlcnZpY2VzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VydmljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnNlcnZpY2VzW2ldO1xuICAgICAgICAgICAgc2VydmljZS5zdGFydCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc3RvcFNlcnZpY2VzKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2VydmljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnNlcnZpY2VzW2ldO1xuICAgICAgICAgICAgc2VydmljZS5zdG9wKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRQYWdlKHBhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSkge1xuICAgICAgICAgICAgdGhpcy5wYWdlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhZ2UucmVuZGVyKHRoaXMuZWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5wYWdlID0gcGFnZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRQYWdlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2U7XG4gICAgfVxuXG4gICAgb3Blbk1vZGFsKG1vZGFsKSB7XG4gICAgICAgIG1vZGFsLnJlbmRlcih0aGlzLmVsZW1lbnQsIHRydWUpO1xuICAgIH1cblxuICAgICNyb3V0ZU5vdEZvdW5kKHJvdXRlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZXJ2aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc2VydmljZXNbaV07XG4gICAgICAgICAgICBpZiAoc2VydmljZS5yb3V0ZU5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgc2VydmljZS5yb3V0ZU5vdEZvdW5kKHJvdXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufTsiLCIvKipcbiAqIEBjbGFzc1xuICogQG5hbWUgUGlBcnJheVxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaUFycmF5IHtcbiAgICBzdGF0aWMgYWRkTWV0aG9kKGFycmF5LCBuYW1lLCBjYikge1xuICAgICAgICBjb25zdCBjYnMgPSBbXTtcbiAgICAgICAgaWYgKGFycmF5W25hbWVdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2JzLnB1c2goY2IpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGFycmF5LCBuYW1lLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKC4uLnBhcmFtcykge1xuICAgICAgICAgICAgICAgIGNiLmNhbGwoYXJyYXksIC4uLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufTsiLCJpbXBvcnQgUGlDb25maWcgZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgeyBnbG9iYWwsIGFwcCB9IGZyb20gJy4vZW52J1xuaW1wb3J0IFBpQXBwIGZyb20gJy4vYXBwJ1xuaW1wb3J0IFBpVHJlZSBmcm9tICcuL3RyZWUnXG5pbXBvcnQgUGlWaXJ0dWFsVHJlZSBmcm9tICcuL3ZpcnR1YWxfdHJlZSdcbmltcG9ydCBQaUNsYXNzIGZyb20gJy4vY2xhc3MnXG5cbi8qKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpQm9vdCBleHRlbmRzIFBpQ2xhc3Mge1xuXG4gICAgY3JlYXRlQXBwKCkge1xuICAgICAgICBpZiAoYXBwKCkgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBnbG9iYWwuYXBwID0gbmV3IFBpQXBwKCk7XG4gICAgICAgICAgICBnbG9iYWwuYXBwLl9zY29wZSA9IHsgY29udGV4dDogYXBwIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnbG9iYWwuYXBwID0gbmV3IEFwcCgpO1xuICAgICAgICAgICAgZ2xvYmFsLmFwcC5fc2NvcGUgPSB7IGNvbnRleHQ6IGFwcCB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdsb2JhbC5hcHA7XG4gICAgfVxuXG4gICAgbG9hZEFwcCgpIHtcbiAgICAgICAgaWYgKFBpQ29uZmlnLmdldCgnYXBwLnBhcnNlLmVuYWJsZScpKSB7XG4gICAgICAgICAgICB0aGlzLiNjcmVhdGVWaXJ0dWFsVHJlZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgI2NyZWF0ZVZpcnR1YWxUcmVlKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihQaUNvbmZpZy5nZXQoJ2FwcC5wYXJzZS5zZWxlY3RvcicpKTtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgYFBpQm9vdDogTsOjbyBmb2kgcG9zc8OtdmVsIGVuY29udHJhciBvIGVsZW1lbnRvIHBlbG8gc2VsZXRvciBpbmZvcm1hZG8gJHtQaUNvbmZpZy5nZXQoJ2FwcC5wYXJzZS5zZWxlY3RvcicpfWA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCByb290ID0gUGlUcmVlLnBhcnNlKGVsZW1lbnQuaW5uZXJIVE1MKTtcbiAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgZWxlbWVudC5hcHBlbmQocm9vdCk7XG5cbiAgICAgICAgY29uc3QgdnRyZWUgPSBuZXcgUGlWaXJ0dWFsVHJlZShlbGVtZW50LCBhcHAoKS5fc2NvcGUsIGFwcCgpKTtcbiAgICAgICAgdnRyZWUubG9hZCgpO1xuXG4gICAgICAgIGFwcCgpLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICBhcHAoKS4kZWxlbWVudCA9ICQoZWxlbWVudCk7XG4gICAgfVxufTsiLCJpbXBvcnQgUGlCb290IGZyb20gJy4vYm9vdCdcbmltcG9ydCBQaUluaXQgZnJvbSAnLi9pbml0aWFsaXplJ1xuaW1wb3J0IFBpQ2FsbGJhY2sgZnJvbSAnLi9jYWxsYmFjaydcbmltcG9ydCBfIGZyb20gJy4vbmF0aXZlX2VsZW1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb3RzdHJhcCB7XG4gICAgI2hvb2tzID0gbmV3IFBpQ2FsbGJhY2soKTtcblxuICAgIG9uSW5pdChmbil7XG4gICAgICAgIHRoaXMuI2hvb2tzLmFkZCgnaW5pdCcsIGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBvbkxvYWQoZm4pe1xuICAgICAgICB0aGlzLiNob29rcy5hZGQoJ2xvYWQnLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgb25SZWFkeShmbil7XG4gICAgICAgIHRoaXMuI2hvb2tzLmFkZCgncmVhZHknLCBmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZCgpIHtcbiAgICAgICAgY29uc3QgYm9vdCA9IG5ldyBQaUJvb3QoKTtcbiAgICAgICAgbGV0IGFwcCA9IG51bGw7XG5cbiAgICAgICAgUGlJbml0XG4gICAgICAgICAgICAuaW5pdCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4jaG9va3MudHJpZ2dlcignaW5pdCcsIGFwcCk7XG4gICAgICAgICAgICAgICAgYXBwID0gYm9vdC5jcmVhdGVBcHAoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuI2hvb2tzLnRyaWdnZXIoJ2xvYWQnLCBhcHApO1xuICAgICAgICAgICAgICAgIGJvb3QubG9hZEFwcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2hvb2tzLnRyaWdnZXIoJ3JlYWR5JywgYXBwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgYXdhaXQgUGlJbml0LmxvYWQoKTtcbiAgICB9XG59IiwiLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlDYWxsYmFjayB7XG4gICAgI2xpc3QgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0b2RvcyBvcyBsaXN0ZW5lcnNcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7UGlDYWxsYmFja31cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy4jbGlzdCA9IFtdO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkaWNpb25hIHVtIGNhbGxiYWNrXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOb21lIGRvIGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBGdW7Dp8OjbyBkZSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjdHggLSBDb250ZXh0byBvbmRlIG8gY2FsbGJhY2sgc2Vyw6EgY2hhbWFkb1xuICAgICAqIEByZXR1cm5zIHtQaUNhbGxiYWNrfVxuICAgICAqL1xuICAgIGFkZChuYW1lLCBmbiwgY3R4KSB7XG4gICAgICAgIGlmICh0aGlzLiNsaXN0W25hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuI2xpc3RbbmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2xpc3RbbmFtZV0ucHVzaCh7IG5hbWU6IG5hbWUsIGZuOiBmbiwgY3R4OiBjdHggfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHVtIGNhbGxiYWNrIHBvciBub21lXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOb21lIGRvIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge1BpQ2FsbGJhY2t9XG4gICAgICovXG4gICAgcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLmV4aXN0KG5hbWUpKSByZXR1cm4gdGhpcztcblxuICAgICAgICB0aGlzLiNsaXN0W25hbWVdID0gW107XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmVyaWZpY2Egc2UgZXhpc3RlIHVtIGNhbGxiYWNrIGFkaWNpb25hZG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5vbWUgZG8gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBleGlzdChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNsaXN0W25hbWVdICE9IG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuYSB1bWEgbGlzdGEgY29tIHRvZG9zIG9zIGNhbGxiYWNrcyBhZGljaW9uYWRvIHBlbG8gbm9tZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gTm9tZSBkbyBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHthcnJheX1cbiAgICAgKi9cbiAgICBnZXQobmFtZSkge1xuICAgICAgICBpZiAoIXRoaXMuZXhpc3QobmFtZSkpIHJldHVybiBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xpc3RbbmFtZV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgcGFyYSBnZXQobmFtZSlcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5vbWUgZG8gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAgICovXG4gICAgZmluZEFsbChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChuYW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXJhIG9zIGNhbGxiYWNrIGFkaWNpb25hZG9zIHBlbG8gbm9tZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gTm9tZVxuICAgICAqIEBwYXJhbSAgey4uLmFueX0gYXJncyAtIExpc3RhIGRlIHBhcmFtZXRyb3MgcGFzc2FkbyBwYXJhIG8gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRyaWdnZXIobmFtZSwgLi4uYXJncykge1xuICAgICAgICBsZXQgYXJyID0gdGhpcy5maW5kQWxsKG5hbWUpO1xuICAgICAgICBsZXQgciA9IHVuZGVmaW5lZDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBhcnJbaV07XG5cbiAgICAgICAgICAgIHIgPSBpdGVtLmZuLmFwcGx5KGl0ZW0uY3R4LCBhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByO1xuICAgIH1cbn07IiwiaW1wb3J0IFBpVHlwZSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgUGlPYmplY3QgZnJvbSBcIi4vb2JqZWN0XCJcblxuLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlDbGFzcyB7XG4gICAgI3BhcmFtZXRlcnMgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICB0aGlzLmluc3RhbmNlcyguLi5hcmdzKTtcblxuICAgICAgICBpZiAoUGlUeXBlLmlzT2JqZWN0KGFyZ3NbMF0pKSB7XG4gICAgICAgICAgICBQaU9iamVjdC5leHRlbmRBbmRDYWxsKHRoaXMsIGFyZ3NbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jcGFyYW1ldGVycyA9IGFyZ3NbMF0gPT0gdW5kZWZpbmVkID8ge30gOiBhcmdzWzBdO1xuXG4gICAgICAgIHRoaXMuaW5pdCguLi5hcmdzKTtcbiAgICB9XG5cbiAgICBpbnN0YW5jZXMoKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRvcm5hIG8gcGFyYW1ldHJvIGZvcm5lY2lkbyBuYSBjcmlhw6fDo28gZG8gb2JqZXRvXG4gICAgICogXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXQgcGFyYW1ldGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3BhcmFtZXRlcnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZXRhIGFzIHByb3ByaWVkYWRlcyBkbyBvYmpldG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2pzb259IGpzb24gLSBPYmpldG8gYSBzZXIgaW5qZXRhZG8gbm8gb2JqZXRvIGF0dWFsXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgaW5qZWN0KGpzb24pIHtcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4ganNvbikge1xuICAgICAgICAgICAgdGhpc1twcm9wZXJ0eV0gPSBqc29uW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG5cbiAgICB9XG5cbiAgICBqc29uV2lsbENvbnZlcnQoKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0ZSBvIG9iamV0byBlbSB1bSBqc29uXG4gICAgICogXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICB0b0pzb24oKSB7XG4gICAgICAgIHRoaXMuanNvbldpbGxDb252ZXJ0KCk7XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzKSk7XG4gICAgICAgIHRoaXMuanNvbkRpZENvbnZlcnQoanNvbik7XG5cbiAgICAgICAgcmV0dXJuIGpzb247XG4gICAgfVxuXG4gICAganNvbkRpZENvbnZlcnQoanNvbikge1xuXG4gICAgfVxuXG4gICAgY2xvbmVXaWxsTG9hZCgpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsb25hIG8gb2JqZXRvIGF0dWFsXG4gICAgICogXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHRoaXMuY2xvbmVXaWxsTG9hZCgpO1xuICAgICAgICBsZXQganNvbiA9IHRoaXMudG9Kc29uKCk7XG4gICAgICAgIGxldCBjbG9uZSA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKGpzb24pO1xuICAgICAgICB0aGlzLmNsb25lRGlkTG9hZChjbG9uZSk7XG5cbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cblxuICAgIGNsb25lRGlkTG9hZCgpIHtcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyaWEgdW1hIG5vdmEgaW5zdGFuY2lhIGRhIGNsYXNzZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSAgey4uLmFueX0gYXJncyBcbiAgICAgKiBAcmV0dXJucyB7dGhpc31cbiAgICAgKi9cbiAgICBzdGF0aWMgY3JlYXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIGNyZWF0ZSguLi5hcmdzKSB7XG4gICAgICAgIHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvciguLi5hcmdzKTtcbiAgICB9XG59OyIsImltcG9ydCBQaVR5cGUgZnJvbSAnLi90eXBlJ1xuaW1wb3J0IFBpQ2xhc3MgZnJvbSBcIi4vY2xhc3NcIjtcbmltcG9ydCBQaUV2ZW50IGZyb20gXCIuL2V2ZW50XCI7XG5pbXBvcnQgUGlTdHJpbmcgZnJvbSAnLi9zdHJpbmcnXG5pbXBvcnQgUGlNb2RlbCBmcm9tICcuL21vZGVsJ1xuaW1wb3J0IFBpT2JqZWN0IGZyb20gJy4vb2JqZWN0J1xuaW1wb3J0IFBpVHJlZSBmcm9tIFwiLi90cmVlXCI7XG5pbXBvcnQgUGlWaXJ0dWFsVHJlZSBmcm9tIFwiLi92aXJ0dWFsX3RyZWVcIjtcbmltcG9ydCB7IGdsb2JhbCB9IGZyb20gJy4vZW52J1xuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tICcuL2Vudic7XG5pbXBvcnQgUGlQcm9taXNlIGZyb20gJy4vcHJvbWlzZSc7XG5pbXBvcnQgUGlSYW5kb20gZnJvbSAnLi9yYW5kb20nO1xuXG5jb25zdCAkID0gZ2xvYmFsLiQ7XG5cbi8qKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpQ29tcG9uZW50IGV4dGVuZHMgUGlDbGFzcyB7XG4gICAgZXZlbnQgPSBuZXcgUGlFdmVudCgpO1xuXG4gICAgI3Z0cmVlcyA9IFtdO1xuICAgICN3YXRjaHMgPSBbXTtcbiAgICAjc2NvcGUgPSBudWxsO1xuICAgICMkZWxlbWVudCA9IG51bGw7XG4gICAgI2lzUGFyZW50RWxlbWVudCA9IGZhbHNlO1xuICAgICNlbGVtZW50SWQgPSAnJztcblxuICAgIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJncyk7XG5cbiAgICAgICAgdGhpcy4jc2NvcGUgPSB7XG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy4jZWxlbWVudElkID0gUGlSYW5kb20udXVpZCgneHgteHgnKTtcbiAgICB9XG5cbiAgICBpbml0KC4uLmFyZ3MpIHtcbiAgICAgICAgc3VwZXIuaW5pdCguLi5hcmdzKTtcblxuICAgICAgICB0aGlzLl9sb2FkUHJvbWlzZSA9IG5ldyBQaVByb21pc2UoKTtcbiAgICAgICAgdGhpcy53aWxsTG9hZCh0aGlzLl9sb2FkUHJvbWlzZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZXRhIG8gbW9kZWxvIGVtIHRvZG9zIG9zIGVsZW1lbnRvcyBkZSBwYWdpbmEgY29tIG8gYXRyaWJ1dG8gJ2RhdGEtbW9kZWwnXG4gICAgICogQ2FzbyBvIHBhcmFtZXRybyBzZWphIHVtIGpzb24sIHNldSB2YWxvciBzZXLDoSBlbWJ1dGlkbyBubyBjb21wb25lbnRcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1BpTW9kZWx9IG1vZGVsIC0gTW9kZWxvIGEgc2VyIGluamV0YWRvXG4gICAgICogQHJldHVybnMge1BpQ29tcG9uZW50fVxuICAgICAqL1xuICAgIGluamVjdChtb2RlbCkge1xuICAgICAgICBpZiAobW9kZWwgaW5zdGFuY2VvZiBQaU1vZGVsKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lcyA9IFBpU3RyaW5nLmNsaXBzKHRoaXMudmlldywgJ2RhdGEtbW9kZWw9XCInLCAnXCInKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbmFtZXNbaV07XG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tb2RlbD1cIicgKyBuYW1lICsgJ1wiXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gUGlPYmplY3QuZXh0cmFjdFZhbHVlKG1vZGVsLCBuYW1lKTtcblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Ll9oYXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5fY29tcG9uZW50LnNldCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50LmZpcnN0Q2hpbGQgJiYgZWxlbWVudC5maXJzdENoaWxkLl9oYXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5maXJzdENoaWxkLl9jb21wb25lbnQuc2V0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VwZXIuaW5qZWN0KG1vZGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgbyB2YWxvciBxdWUgcmVwcmVzZW50YSBvIGNvbXBvbmVudFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIHVtIHZhbG9yIHBhcmEgbyBjb21wb25lbnRcbiAgICAgKiBEaXNwYXJhIG8gZXZlbnRvICdjaGFuZ2UnXG4gICAgICogXG4gICAgICogQHJldHVybnMge1BpQ29tcG9uZW50fVxuICAgICAqL1xuICAgIHNldCh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KCdjaGFuZ2UnLCB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGlzcGFyYSB1bSBldmVudG8gbmF0aXZvIHNvYnJlIG8gZWxlbWVudG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gTm9tZSBkbyBldmVudG9cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW0gLSBPYmpldG8gYSBzZXIgcGFzc2FkbyBwZWxvIGV2ZW50b1xuICAgICAqIEByZXR1cm5zIHtQaUNvbXBvbmVudH1cbiAgICAgKi9cbiAgICBkaXNwYXRjaEV2ZW50KGV2ZW50TmFtZSwgcGFyYW0sIG5ld0V2ZW50ID0gdHJ1ZSkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV2ZW50ID0gcGFyYW07XG4gICAgICAgIGlmIChuZXdFdmVudCkge1xuICAgICAgICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnROYW1lLCB7XG4gICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbXBvc2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHBhcmFtLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4jaXNQYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgd3JhcHBlciBqcXVlcnlcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7alF1ZXJ5RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgJGVsZW1lbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLiMkZWxlbWVudCkgcmV0dXJuIHRoaXMuIyRlbGVtZW50O1xuICAgICAgICByZXR1cm4gdGhpcy4jJGVsZW1lbnQgPSAkKHRoaXMuZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVuZGVyaXphIG8gZWxlbWVudG8gYW5leGFuZG8gb3UgaW5zZXJpbmRvIG5vIGVsZW1lbnRvXG4gICAgICogXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudG8gaHRtbCBvbmRlIG8gY29tcG9uZW50ZSBzZXLDoSByZW5kZXJpemFkb1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYXBwZW5kIFxuICAgICAqIEByZXR1cm5zIHtQaUNvbXBvbmVudH1cbiAgICAgKi9cbiAgICByZW5kZXIoZWxlbWVudCwgYXBwZW5kID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiAkKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5nZXQoMCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sb2FkUHJvbWlzZS5vbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuI2xvYWRBdHRyaWJ1dGVzKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5tb3VudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQubW91bnQodGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudmlld1dpbGxMb2FkKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXdXaWxsUmVuZGVyKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXdSZW5kZXIoZWxlbWVudCwgYXBwZW5kKTtcbiAgICAgICAgICAgIHRoaXMudmlld0RpZFJlbmRlcigpO1xuICAgICAgICAgICAgdGhpcy4jbGlzdGVuKCk7XG4gICAgICAgICAgICB0aGlzLnZpZXdEaWRMb2FkKCk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LmRpZE1vdW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5kaWRNb3VudCh0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIHRoaXMuI2VsZW1lbnRJZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldCBpc1JlbmRlcmVkKCkge1xuICAgICAgICBjb25zdCBlbGVtZW50byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWlkPVwiJHt0aGlzLiNlbGVtZW50SWR9XCJdYCk7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jb250YWlucyhlbGVtZW50byk7XG4gICAgfVxuXG4gICAgd2lsbExvYWQocHJvbWlzZSkge1xuICAgICAgICBwcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICBkaWRMb2FkKCkge1xuXG4gICAgfVxuXG4gICAgdmlld1dpbGxMb2FkKCkge1xuXG4gICAgfVxuXG4gICAgdmlld1dpbGxSZW5kZXIoKSB7XG5cbiAgICB9XG5cbiAgICB2aWV3RGlkUmVuZGVyKCkge1xuXG4gICAgfVxuXG4gICAgdmlld1JlbmRlcihlbGVtZW50LCBhcHBlbmQgPSBmYWxzZSkge1xuICAgICAgICBpZiAoIWFwcGVuZCkge1xuICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnZpZXcpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5sb2FkVmlldyh0aGlzLnZpZXcsIGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50c1swXTtcbiAgICAgICAgICAgICAgICB0aGlzLiNpc1BhcmVudEVsZW1lbnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLiNpc1BhcmVudEVsZW1lbnQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmlld0RpZExvYWQoKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNb25pdG9yYSBhbHRlcmHDp8OjbyBzb2JyZSBwcm9wcmllZGFkZSBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgLSBOb21lIGRhIHByb3ByaWVkYWRlIGEgc2VyIG1vbml0b3JhZGFcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIEZ1bsOnw6NvIGRlIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge1BpRWxlbWVudH1cbiAgICAgKi9cbiAgICB3YXRjaChwcm9wZXJ0eSwgZm4pIHtcbiAgICAgICAgY29uc3QgaWRzID0gUGlPYmplY3Qub24odGhpcy4jc2NvcGUsICdjb250ZXh0LicgKyBwcm9wZXJ0eSwgZm4pXG4gICAgICAgIHRoaXMuI3dhdGNocyA9IHRoaXMuI3dhdGNocy5jb25jYXQoe1xuICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgICAgICAgaWRzOiBpZHNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyYSBkZSBtb25pdG9yYXIgdW1hIHByb3ByaWVhZGUgZG8gY29udGV4dG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgLSBOb21lIGRhIHByb3ByaWVkYWRlXG4gICAgICogQHJldHVybnMge1BpRWxlbWVudH1cbiAgICAgKi9cbiAgICB1bldhdGNoKHByb3BlcnR5KSB7XG4gICAgICAgIGNvbnN0IGFyciA9IHRoaXMuI3dhdGNocztcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGFycltpXS5wcm9wZXJ0eSA9PSBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgIFBpT2JqZWN0Lm9mZih0aGlzLiNzY29wZSwgYXJyW2ldLmlkcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI3Z0cmVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdnRyZWUgPSB0aGlzLiN2dHJlZXNbaV07XG4gICAgICAgICAgICB2dHJlZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4jdnRyZWVzID0gW107XG5cbiAgICAgICAgdGhpcy4jY2xlYXJDb250ZXh0V2F0Y2goKTtcbiAgICB9XG5cbiAgICBsb2FkVmlldyh2aWV3LCBlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSBQaVRyZWUucGFyc2Uodmlldyk7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gW107XG5cbiAgICAgICAgZm9yICg7IHJvb3QuY2hpbGRFbGVtZW50Q291bnQ7KSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHJvb3QuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBlbGVtZW50LmFwcGVuZChjaGlsZCk7XG4gICAgICAgICAgICBjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI2xvYWRUcmVlKGNoaWxkcmVuKTtcblxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgfVxuXG4gICAgI2xvYWRUcmVlKHRyZWUpIHtcbiAgICAgICAgY29uc3QgdnRyZWUgPSBuZXcgUGlWaXJ0dWFsVHJlZSh0cmVlLCB0aGlzLiNzY29wZSwgdGhpcyk7XG4gICAgICAgIHZ0cmVlLmxvYWQoKTtcbiAgICAgICAgdGhpcy4jdnRyZWVzLnB1c2godnRyZWUpO1xuICAgIH1cblxuICAgICNsaXN0ZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAobXV0YXRpb25zKSB7XG4gICAgICAgICAgICBtdXRhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAobXV0YXRpb24pIHtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRpb24udHlwZSA9PSAnY2hpbGRMaXN0Jykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG11dGF0aW9uLmFkZGVkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBtdXRhdGlvbi5hZGRlZE5vZGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi4jbG9hZFRyZWUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZXM6IGZhbHNlLFxuICAgICAgICAgICAgY2hhcmFjdGVyRGF0YTogZmFsc2UsXG4gICAgICAgICAgICBzdWJ0cmVlOiBmYWxzZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiBmYWxzZSxcbiAgICAgICAgICAgIGNoYXJhY3RlckRhdGFPbGRWYWx1ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgI2NsZWFyQ29udGV4dFdhdGNoKCkge1xuICAgICAgICBsZXQgaWRzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLiN3YXRjaHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlkcyA9IGlkcy5jb25jYXQodGhpcy4jd2F0Y2hzW2ldLmlkcyk7XG4gICAgICAgIH1cblxuICAgICAgICBQaU9iamVjdC5vZmYodGhpcy4jc2NvcGUsIGlkcyk7XG4gICAgICAgIHRoaXMuI3dhdGNocyA9IFtdO1xuICAgIH1cblxuICAgICNsb2FkQXR0cmlidXRlcyhlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50LmdldEF0dHJpYnV0ZU5hbWVzID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYXR0cnMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZU5hbWVzKCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGF0dHJzW2ldO1xuICAgICAgICAgICAgbGV0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUobmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChuYW1lLmluZGV4T2YoJ3Byb3AtJykgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoUGlUeXBlLmlzU3RyaW5nKHZhbHVlKSAmJiAoUGlUeXBlLmlzT2JqZWN0KHZhbHVlKSB8fCBQaVR5cGUuaXNBcnJheSh2YWx1ZSkpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBKU09OLnBhcnNlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgY25hbWUgPSBuYW1lLnJlcGxhY2UoJ3Byb3AtJywgJycpO1xuICAgICAgICAgICAgdGhpc1tjbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3RlcihjcG8pIHtcbiAgICAgICAgcmVnaXN0ZXIoY3BvKTtcbiAgICB9XG59IiwiaW1wb3J0IFBpT2JqZWN0IGZyb20gXCIuL29iamVjdFwiO1xuaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tIFwiLi9lbnZcIjtcblxuY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgYXBwOiB7XG4gICAgICAgIHBhcnNlOiB7XG4gICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICBzZWxlY3RvcjogJ2JvZHknXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGh0bWw6IHtcbiAgICAgICAgbG9hZGVyOiAnQ2FycmVnYW5kbyAuLi4nXG4gICAgfSxcbiAgICBleHByZXNzaW9uOiB7XG4gICAgICAgIHhsYW5ndWFnZTogLyhcXHs+PykoW15cXH1dKykoXFx9KS9naSxcbiAgICAgICAgeHZhcmlhYmxlOiAvKEApKFtcXHdcXC5dKykvZ2ksXG4gICAgICAgIHhodG1sOiAvKFxcez4pKFteXFx9XSspKFxcfSkvZ2ksXG4gICAgfSxcbiAgICBoaXN0b3J5OiB7XG4gICAgICAgIHBvcHN0YXRlOiBmYWxzZSxcbiAgICAgICAgcHJlZml4SGFzaHRhZzogdHJ1ZVxuICAgIH0sXG4gICAgc2VydmljZXM6IFtdLFxuICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgZmV0Y2g6IG51bGxcbiAgICB9XG59O1xuXG4vKipcbiAqIEBjbGFzc1xuICovXG5jbGFzcyBQaUNvbmZpZyB7XG4gICAgLyoqXG4gICAgICogRGVmaW5lIHVtYSBjb25maWd1cmHDp8Ojb1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBQYXJhbWV0cm8gZGEgY29uZmlndXJhw6fDo29cbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBWYWxvciBkYSBjb25maWd1cmHDp8Ojb1xuICAgICAqIEByZXR1cm5zIHtQaUNvbmZpZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgUGlPYmplY3Quc2V0UHJvcGVydHkoZGVmYXVsdHMsIGtleSwgdmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBQaUNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRvcm5hIHVtYSBjb25maWd1cmHDp8Ojb1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBQYXRoIGRhIGNvbmZpZ3VyYcOnw6NvXG4gICAgICogQHJldHVybnMge29iamVjdHx8c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiBQaU9iamVjdC5leHRyYWN0VmFsdWUoZGVmYXVsdHMsIGtleSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENhcnJlZ2EgdW0gY29uanVudG8gZGUgY29uZmlndXJhw6fDtWVzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNldHRpbmdzIC0gT2JqZXRvIGNvbnRlbmRvIGNvbmZpZ3VyYcOnw7Vlc1xuICAgICAqIEByZXR1cm5zIHtQaUNvbmZpZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgbG9hZChzZXR0aW5ncykge1xuICAgICAgICBQaU9iamVjdC5leHRlbmQoZGVmYXVsdHMsIHNldHRpbmdzKTtcbiAgICAgICAgcmV0dXJuIFBpQ29uZmlnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1lc2NsYSBhIGNvbmZpZ3VyYcOnw6NvIGF0dWFsIGNvbSBhIG5vdmEgY29uZmlndXJhw6fDo28gaW5mb3JtYWRhIHBvciBwYXJhbWV0cm9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3MgLSBDb25maWd1cmHDp8Ojb1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZSAtIFZhbG9yIGRhIGNvbmZpZ3VyYcOnw6NvXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZXh0ZW5kKHNldHRpbmdzLCB2YWx1ZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PSBmYWxzZSkgcmV0dXJuIFBpT2JqZWN0LmV4dGVuZChkZWZhdWx0cywgc2V0dGluZ3MpO1xuICAgICAgICBlbHNlIHJldHVybiBQaU9iamVjdC5leHRlbmQoZGVmYXVsdHMsIHsgc2V0dGluZ3M6IHZhbHVlIH0pO1xuICAgIH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGlDb25maWc7XG5cbnJlZ2lzdGVyKFBpQ29uZmlnKTsiLCIvKipcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaURpY3Rpb25hcnkge1xuICAgICNsaXN0ID0gW107XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSBvIHBhciBjaGF2ZSB2YWxvclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBDaGF2ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFZhbG9yXG4gICAgICogQHJldHVybnMge1BpRGljdGlvbmFyeX1cbiAgICAgKi9cbiAgICBhZGQoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLiNsaXN0W2tleV0gPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJpZmljYSBzZSBleGlzdGUgYSBjaGF2ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBDaGF2ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGV4aXN0S2V5KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy4jbGlzdFtrZXldICE9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJpZmljYSBzZSBleGlzdGUgbyB2YWxvclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFZhbG9yXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZXhpc3RWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy4jbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuI2xpc3RbaV0gPT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgbyB2YWxvclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBDaGF2ZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VmFsdWUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNsaXN0W2tleV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgY2hhdmVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gQ2hhdmVcbiAgICAgKiBAcmV0dXJucyB7UGlEaWN0aW9uYXJ5fVxuICAgICAqL1xuICAgIHJlbW92ZShrZXkpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuI2xpc3Rba2V5XTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaW1wYSBvIGRpY2lvbmFyaW9cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7UGlEaWN0aW9uYXJ5fVxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICB0aGlzLiNsaXN0ID0gW107XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29udmVydCBvIGRpY2lvbmFyaW8gZW0gYXJyYXlcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9XG4gICAgICovXG4gICAgdG9BcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xpc3Q7XG4gICAgfVxuXG59OyIsImltcG9ydCBQaU9iamVjdCBmcm9tIFwiLi9vYmplY3RcIjtcbmltcG9ydCBQaUV4cHJlc3Npb24gZnJvbSBcIi4vZXhwcmVzc2lvblwiO1xuaW1wb3J0IFBpU3RhdGVtZW50IGZyb20gXCIuL3N0YXRlbWVudFwiO1xuaW1wb3J0IFBpVmlydHVhbFRyZWUgZnJvbSBcIi4vdmlydHVhbF90cmVlXCI7XG5pbXBvcnQgUGlGb3JEaXJlY3RpdmUgZnJvbSAnLi9mb3JfZGlyZWN0aXZlJ1xuaW1wb3J0IFBpRm9yRWFjaERpcmVjdGl2ZSBmcm9tICcuL2ZvcmVhY2hfZGlyZWN0aXZlJ1xuaW1wb3J0IFBpQXJyYXkgZnJvbSBcIi4vYXJyYXlcIjtcbmltcG9ydCB7IGZpbmRDbGFzcywgZ2V0Q2xhc3NlcyB9IGZyb20gXCIuL2VudlwiO1xuaW1wb3J0IFBpVHlwZSBmcm9tIFwiLi90eXBlXCI7XG5pbXBvcnQgUGlDb25maWcgZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgUGlQcm9taXNlIGZyb20gJy4vcHJvbWlzZSdcblxuLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJvaSBQaUVsZW1lbnQgYmFzZWFkbyBubyBlbGVtZW50byBodG1sXG4gICAgICogXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudG8gaHRtbFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbc2NvcGUgPSB7Y29udGV4dDoge319XSAtIENsYXNzZSBkZSBlc2NvcG9cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBzY29wZSA9IHsgY29udGV4dDoge30gfSwgY29tcG9uZW50UGFyZW50ID0gbnVsbCkge1xuICAgICAgICB0aGlzLl9lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICB0aGlzLl9hdHRyTmFtZXMgPSBlbGVtZW50LmdldEF0dHJpYnV0ZU5hbWVzKCk7XG4gICAgICAgIHRoaXMuX2Rlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9kaXJlY3RpdmVzID0gW107XG4gICAgICAgIHRoaXMuX2F1dG9CaW5kID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLl9lbGVtZW50Ll9jb21wb25lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9lbGVtZW50Ll9oYXNDb21wb25lbnQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5fY29tcG9uZW50UGFyZW50ID0gY29tcG9uZW50UGFyZW50O1xuXG4gICAgICAgIHRoaXMuX2ZvcmVhY2hDb250ZXh0ID0ge307XG5cbiAgICAgICAgdGhpcy5fZGVmYXVsdFZhcmlhYmxlc05hbWVzID0gW107XG4gICAgICAgIHRoaXMuX2RlZmF1bHRWYXJpYWJsZXNWYWx1ZXMgPSBbXTtcblxuICAgICAgICB0aGlzLl9zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLl93YXRjaHMgPSBbXTtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5fZXZlbnRzID0ge1xuICAgICAgICAgICAgJ2VudGVyJzogdGhpcy5fZXZlbnRFbnRlclxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX29yZGVyQXR0cmlidXRlTmFtZXMoKTtcbiAgICAgICAgdGhpcy5fbG9hZERpcmVjdGl2ZXNCYXNlKCk7XG5cbiAgICAgICAgdGhpcy5fZWxlbWVudC5fcGllID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIEFkaWNpb25hIHByb3ByaWVkYWRlIGFvIGNvbnRleHRvIGRvIGZvcmVhY2hcbiAgICAgKiBAcGFyYW0ge29ian0gdmFsdWUgLSBPYmpldG8gYXNzb2NpYWRvIGEgcHJvcHJpZWRhZGUgZGUgY29udGV4dG8gZG8gZm9yZWFjaFxuICAgICAqIEByZXR1cm5zIHtQaUVsZW1lbnR9XG4gICAgICovXG4gICAgYWRkRm9yZWFjaENvbnRleHQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fZm9yZWFjaENvbnRleHRbbmFtZV0gPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRDb21wb25lbnQoY3gpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5faGFzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5fY29tcG9uZW50ID0gY3g7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZXh0ZW5kRm9yZWFjaENvbnRleHQoZm9yZWFjaENvbnRleHQpIHtcbiAgICAgICAgUGlPYmplY3QuZXh0ZW5kKHRoaXMuX2ZvcmVhY2hDb250ZXh0LCBmb3JlYWNoQ29udGV4dCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTW9uaXRvcmEgYWx0ZXJhw6fDo28gc29icmUgcHJvcHJpZWRhZGUgXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZSAtIE5vbWUgZGEgcHJvcHJpZWRhZGUgYSBzZXIgbW9uaXRvcmFkYVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gRnVuw6fDo28gZGUgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7UGlFbGVtZW50fVxuICAgICAqL1xuICAgIHdhdGNoKHByb3BlcnR5TmFtZSwgZm4pIHtcbiAgICAgICAgdGhpcy5fYWRkQ29udGV4dFdhdGNoKHByb3BlcnR5TmFtZSwgZm4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcmEgZGUgbW9uaXRvcmFyIHVtYSBwcm9wcmllYWRlIGRvIGNvbnRleHRvXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZSAtIE5vbWUgZGEgcHJvcHJpZWRhZGVcbiAgICAgKiBAcmV0dXJucyB7UGlFbGVtZW50fVxuICAgICAqL1xuICAgIHVuV2F0Y2gocHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHRoaXMuX3JlbW92ZUNvbnRleHRXYXRjaChwcm9wZXJ0eU5hbWUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhcnJlZ2EgZSBhbmFsaXNhIHRvZGFzIGFzIGRpcmV0aXZhcyBqdW50YW1lbnRlIGNvbSBvIHRlbXBsYXRlXG4gICAgICogXG4gICAgICogQHJldHVybnMge1BpRWxlbWVudH1cbiAgICAgKi9cbiAgICBsb2FkKHdyYXBwZXIpIHtcbiAgICAgICAgdGhpcy5fbG9hZERlZmF1bHRWYXJpYWJsZXMoKTtcbiAgICAgICAgdGhpcy5fcnVuRGlyZWN0aXZlcyh3cmFwcGVyKTtcbiAgICAgICAgdGhpcy5fbG9hZFRlbXBsYXRlKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2xvYWREZWZhdWx0VmFyaWFibGVzKCkge1xuICAgICAgICBsZXQgdmFyaWFibGVzRm9yZWFjaE5hbWVzID0gT2JqZWN0LmtleXModGhpcy5fZm9yZWFjaENvbnRleHQpO1xuICAgICAgICBsZXQgdmFyaWFibGVzRm9yZWFjaFZhbHVlcyA9IE9iamVjdC52YWx1ZXModGhpcy5fZm9yZWFjaENvbnRleHQpO1xuICAgICAgICBsZXQgY29udGV4dFByb3BlcnR5TmFtZXMgPSBbXTtcbiAgICAgICAgbGV0IGNvbnRleHRQcm9wZXJ0eVZhbHVlcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGNwbyA9IHRoaXMuX2VsZW1lbnQuX2NvbXBvbmVudFBhcmVudDtcbiAgICAgICAgaWYgKGNwbyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb250ZXh0UHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGNwby5fX3Byb3RvX18pO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250ZXh0UHJvcGVydHlOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChjcG9bY29udGV4dFByb3BlcnR5TmFtZXNbaV1dIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dFByb3BlcnR5VmFsdWVzLnB1c2goY3BvW2NvbnRleHRQcm9wZXJ0eU5hbWVzW2ldXS5iaW5kKGNwbykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2RlZmF1bHRWYXJpYWJsZXNOYW1lcyA9IHZhcmlhYmxlc0ZvcmVhY2hOYW1lcy5jb25jYXQoY29udGV4dFByb3BlcnR5TmFtZXMpO1xuICAgICAgICB0aGlzLl9kZWZhdWx0VmFyaWFibGVzVmFsdWVzID0gdmFyaWFibGVzRm9yZWFjaFZhbHVlcy5jb25jYXQoY29udGV4dFByb3BlcnR5VmFsdWVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSB1bWEgZGlyZWN0aXZhIHBhcmEgdW0gYXRyaWJ1dG8gZG8gZWxlbWVudG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIG5vbWUgZGEgZGlyZXRpdmFcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIEZ1bsOnw6NvIGRlIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgYWRkRGlyZWN0aXZlKG5hbWUsIGZuKSB7XG4gICAgICAgIHRoaXMuX2RpcmVjdGl2ZXNbbmFtZV0gPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRvcm5hIHNlIGV4aXN0ZSB1bWEgZGlyZXRpdmEgYWRpY2lvbmFkYSBwZWxvIHNldSBub21lXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBOb21lIGRhIGRpcmV0aXZhXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZXhpc3REaXJlY3RpdmUobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGlyZWN0aXZlc1tuYW1lXSAhPSBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgd3JhcHBlciBqcXVlcnlcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7alF1ZXJ5RWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXQgJCgpIHtcbiAgICAgICAgaWYgKHRoaXMuXyRlbGVtZW50KSByZXR1cm4gdGhpcy5fJGVsZW1lbnQ7XG4gICAgICAgIHJldHVybiB0aGlzLl8kZWxlbWVudCA9ICQodGhpcy5fZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgcGFyYSBsaXN0ZW5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gTm9tZSBkbyBldmVudG9cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIEZ1bsOnw6NvIGRlIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzIC0gQXJndW1lbnRvcyBlbnZpYWRvcyBhbyBjYWxsYmFjayBxdWFuZG8gb2NvcnJlciBvIGV2ZW50b1xuICAgICAqIEByZXR1cm5zIHtQaUVsZW1lbnR9XG4gICAgICovXG4gICAgb24oZXZlbnROYW1lLCBmbiwgLi4uYXJncykge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW4oZXZlbnROYW1lLCBmbiwgLi4uYXJncyk7XG4gICAgfVxuXG4gICAgX2V2ZW50RW50ZXIoZm4sIC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZS5rZXlDb2RlID09IDEzKSB7XG4gICAgICAgICAgICAgICAgZm4uYXBwbHkodGhpcywgW2UsIC4uLmFyZ3NdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2V2ZW50RGVmYXVsdChldmVudE5hbWUsIGZuLCAuLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiB7XG4gICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBbZSwgLi4uYXJnc10pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSB1bSBjYWxsYmFjayBzb2JyZSB1bSBldmVudG8gZG8gZWxlbWVudG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gTm9tZSBkbyBldmVudG9cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIEZ1bsOnw6NvIGRlIGNhbGxiYWNrXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzIC0gQXJndW1lbnRvcyBlbnZpYWRvcyBhbyBjYWxsYmFjayBxdWFuZG8gb2NvcnJlciBvIGV2ZW50b1xuICAgICAqIEByZXR1cm5zIHtQaUVsZW1lbnR9XG4gICAgICovXG4gICAgbGlzdGVuKGV2ZW50TmFtZSwgZm4sIC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc3QgZXZlbnQgPSB0aGlzLl9ldmVudHNbZXZlbnROYW1lXTtcblxuICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmNhbGwodGhpcywgZm4sIC4uLmFyZ3MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fZXZlbnREZWZhdWx0KGV2ZW50TmFtZSwgZm4sIC4uLmFyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgcGFyYSB1bmxpc3RlblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgLSBOb21lIGRvIGV2ZW50b1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gRnVuw6fDo28gZGUgY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7UGlFbGVtZW50fVxuICAgICAqL1xuICAgIG9mZihldmVudE5hbWUsIGZuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVubGlzdGVuKGV2ZW50TmFtZSwgZm4pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBjYWxsYmFjayBzb2JyZSB1bSBldmVudG8gZG8gZWxlbWVudG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIC0gTm9tZSBkbyBldmVudG9cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIEZ1bsOnw6NvIGRlIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge1BpRWxlbWVudH1cbiAgICAgKi9cbiAgICB1bmxpc3RlbihldmVudE5hbWUsIGZuKSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmUoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9jaGlsZHJlbltpXS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2hpbGRyZW4gPSBbXTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgZWxlbWVudG8gZG8gRE9NXG4gICAgICogXG4gICAgICogQHJldHVybnMge1BpRWxlbWVudH1cbiAgICAgKi9cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9kaXNwb3NlKCk7XG4gICAgICAgIHRoaXMuX2NsZWFyQ29udGV4dFdhdGNoKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJlIGVsZW1lbnRvIGRlcG9pc1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7UGlFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudG8gYSBzZXIgaW5zZXJpZG9cbiAgICAgKiBAcmV0dXJucyB7UGlFbGVtZW50fVxuICAgICAqL1xuICAgIGluc2VydEJlZm9yZShlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudC5fZWxlbWVudCwgdGhpcy5fZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluc2VyZSBlbGVtZW50byBhbnRlc1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7UGlFbGVtZW50fSBlbGVtZW50IC0gRWxlbWVudG8gYSBzZXIgaW5zZXJpZG9cbiAgICAgKiBAcmV0dXJucyB7UGlFbGVtZW50fVxuICAgICAqL1xuICAgIGluc2VydEFmdGVyKGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50Ll9lbGVtZW50LCB0aGlzLl9lbGVtZW50Lm5leHRTaWJsaW5nKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSB1bSBlbGVtZW50byBcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge1BpRWxlbWVudH0gZWxlbWVudCBcbiAgICAgKiBAcmV0dXJucyB7UGlFbGVtZW50fVxuICAgICAqL1xuICAgIGFwcGVuZChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmQoZWxlbWVudC5fZWxlbWVudCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0YSB1bWEgc3RhdGVtZW50IGRlbnRybyBkbyBjb250ZXh0byBzZW1wcmUgcXVlIG8gZXZlbnRvIGFzc29jaWFkbyBmb3IgZGlzcGFyYWRvXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlbWVudCAtIFN0YXRlbWVudCBleGVjdXRhZGEgc2VtcHJlIHF1ZSBvIG9jb3JyZXIgbyBldmVudG9cbiAgICAgKiBAcGFyYW0ge3N0cmlufSBldmVudCAtIE5vbWUgZG8gZXZlbnRvIGEgc2VyIG9ic2VydmFkb1xuICAgICAqIEByZXR1cm5zIHtQaUVsZW1lbnR9XG4gICAgICovXG4gICAgYWRkRXZlbnRTdGF0ZW1lbnQoc3RhdGVtZW50LCBfLCBldmVudCkge1xuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gbmV3IFBpRXhwcmVzc2lvbihzdGF0ZW1lbnQpO1xuXG4gICAgICAgIHRoaXMubGlzdGVuKGV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5fZ2V0RGVmYXVsdFZhcmlhYmxlcygpO1xuXG4gICAgICAgICAgICB2YXJpYWJsZXNbMF0ucHVzaCgnJGV2ZW50Jyk7XG4gICAgICAgICAgICB2YXJpYWJsZXNbMV0ucHVzaChlKTtcblxuICAgICAgICAgICAgY29uc3Qgc3RtdCA9IGV4cHJlc3Npb24ucGFyc2UoY3R4LCB2YXJpYWJsZXMpO1xuXG4gICAgICAgICAgICByZXR1cm4gUGlTdGF0ZW1lbnQuZXhlY1dpdGhWYXJpYWJsZXMoc3RtdCwgdmFyaWFibGVzLCBjdHgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRDaGFuZ2VEaXJlY3RpdmUoc3RhdGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb24gPSBuZXcgUGlFeHByZXNzaW9uKHN0YXRlbWVudCk7XG5cbiAgICAgICAgdGhpcy5saXN0ZW4oJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLl9nZXREZWZhdWx0VmFyaWFibGVzKCk7XG5cbiAgICAgICAgICAgIHZhcmlhYmxlc1swXS5wdXNoKCckZXZlbnQnKTtcbiAgICAgICAgICAgIHZhcmlhYmxlc1sxXS5wdXNoKGUpO1xuXG4gICAgICAgICAgICBjb25zdCBzdG10ID0gZXhwcmVzc2lvbi5wYXJzZShjdHgsIHZhcmlhYmxlcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBQaVN0YXRlbWVudC5leGVjV2l0aFZhcmlhYmxlcyhzdG10LCB2YXJpYWJsZXMsIGN0eCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgbyB2YWxvciBkbyBlbGVtZW50b1xuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVtYmVyfGJvb2xlYW59XG4gICAgICovXG4gICAgZ2V0IHZhbHVlKCkge1xuICAgICAgICBjb25zdCBlID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZS50eXBlID09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmNoZWNrZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgZS50eXBlID09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIHJldHVybiBlLmNoZWNrZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZS52YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgbyB2YWxvciBkbyBlbGVtZW50b1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfGJvb2xlYW59IHZhbHVlIC0gVmFsb3JcbiAgICAgKiBAcmV0dXJucyB7UGlFbGVtZW50fVxuICAgICAqL1xuICAgIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICBjb25zdCBlID0gdGhpcy5fZWxlbWVudDtcblxuICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgKGUudHlwZSA9PSAnY2hlY2tib3gnIHx8IGUudHlwZSA9PSAncmFkaW8nKSkge1xuICAgICAgICAgICAgZS5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGUudmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSB1bSB2aW5jdWxvIGRlIGRpcmXDp8OjbyBkdXBsYSBlbnRyZSB1bWEgcHJvcHJpZWRhZGUgZG8gY29udGV4dG8gZSBvIGVsZW1lbnRvIHZpcnR1YWxcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHlOYW1lIC0gTm9tZSBkYSBwcm9wcmllZGFkZSBkbyBjb250ZXh0byBxdWUgc2Vyw6EgdmluY3VsYWRhIGFvIGVsZW1lbnRvXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSAtIE5vbWUgZGEgcHJvcHJpZWRhZGUgZG8gY29udGV4dG8gcXVlIHNlcsOhIHZpbmN1bGFkYSBhbyBlbGVtZW50b1xuICAgICAqIEByZXR1cm5zIHtQaUVsZW1lbnR9XG4gICAgICovXG4gICAgYWRkQmluZChwcm9wZXJ0eU5hbWUsIF8sIGV2ZW50TmFtZSkge1xuICAgICAgICBpZiAocHJvcGVydHlOYW1lID09IG51bGwgfHwgcHJvcGVydHlOYW1lLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hZGRCaW5kVG9FbGVtZW50Q29udGV4dChwcm9wZXJ0eU5hbWUsIGV2ZW50TmFtZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0b3JuYSB2ZXJkYWRlaXJvIHNlIG8gZWxlbWVudG8gZXN0aXZlciBkZXN0cnVpZG9cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBnZXQgaXNEZXN0cm95ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kZXN0cm95ZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIHVtYSBleHByZXNzaW9uIGRlIGluaWNpYWxpemHDp8Ojb1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBleHByZXNzaW9uXG4gICAgICogQHJldHVybnMge1BpRWxlbWVudH1cbiAgICAgKi9cbiAgICBzZXRJbml0RGlyZWN0aXZlKGV4cHJlc3Npb24pIHtcbiAgICAgICAgY29uc3QgZXggPSBuZXcgUGlFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYXJpYWJsZXMgPSB0aGlzLl9nZXREZWZhdWx0VmFyaWFibGVzKCk7XG4gICAgICAgIGNvbnN0IHN0bXQgPSBleC5wYXJzZShjdHgsIGRlZmF1bHRWYXJpYWJsZXMpO1xuXG4gICAgICAgIFBpU3RhdGVtZW50LmV4ZWNXaXRoVmFyaWFibGVzKCd0aGlzLicgKyBzdG10LCBkZWZhdWx0VmFyaWFibGVzLCBjdHgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkaWNpb25hIGJpbmQgZnVsbGR1cGxleCBkbyBlbGVtZW50byBhIHByb3ByaWVkYWRlIGRhIG1vZGVsXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5TmFtZSAtIE5vbWUgZGEgcHJvcHJpZWRhZGUgZGEgbW9kZWwgcXVlIHNlcsOhIHZpbmN1bGFkYSBhbyBlbGVtZW50b1xuICAgICAqIEByZXR1cm5zIHtQaUVsZW1lbnR9XG4gICAgICovXG4gICAgc2V0TW9kZWxEaXJlY3RpdmUocHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGxldCBldmVudCA9ICdjaGFuZ2UnO1xuXG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnQgPSAna2V5dXAnO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fYWRkQmluZFRvRWxlbWVudENvbnRleHQocHJvcGVydHlOYW1lLCBldmVudCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIG8gdmFsb3IgZG8gZWxlbWVudG8gYmFzZWFkbyBlbSB1bWEgZXhwcmVzc2lvbiBsYW5ndWFnZSBhdmFsaWFkYSBkZW50cm8gZG8gY29udGV4dG8gZG8gZWxlbWVudG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvbiAtIEV4cHJlc3PDo28gYSBzZXIgYXZhbGlhZGEgZGVudHJvIGRvIGNvbnRleHRvXG4gICAgICogQHJldHVybnMge1BpRWxlbWVudH1cbiAgICAgKi9cbiAgICBzZXRWYWx1ZURpcmVjdGl2ZShleHByZXNzaW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXggPSBuZXcgUGlFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRDb250ZXh0KCk7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IGV4LnBhcnNlKGN0eCwgdGhpcy5fZ2V0RGVmYXVsdFZhcmlhYmxlcygpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgc2UgbyBlbGVtZW50byB0ZXLDoSBvIGF0cmlidXRvICdzZWxlY3RlZCcgYmFzZWFkbyBuYSBleHByZXNzaW9uIGxhbmd1YWdlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV4cHJlc3Npb24gLSBFeHByZXNzw6NvIGEgc2VyIGF2YWxpYWRhIGRlbnRybyBkbyBjb250ZXh0b1xuICAgICAqIEByZXR1cm5zIHtQaUVsZW1lbnR9XG4gICAgICovXG4gICAgc2V0U2VsZWN0ZWREaXJlY3RpdmUoZXhwcmVzc2lvbikge1xuICAgICAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4ID0gbmV3IFBpRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV4LnBhcnNlKGN0eCwgdGhpcy5fZ2V0RGVmYXVsdFZhcmlhYmxlcygpKTtcblxuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUgfHwgdmFsdWUgPT09IFwidHJ1ZVwiKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0Q2hlY2tlZERpcmVjdGl2ZShleHByZXNzaW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXggPSBuZXcgUGlFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IGV4LnZhcmlhYmxlcztcbiAgICAgICAgbGV0IHZhbHVlID0gZXgucGFyc2UoY3R4LCB0aGlzLl9nZXREZWZhdWx0VmFyaWFibGVzKCkpO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuY2hlY2tlZCA9IHZhbHVlID09ICd0cnVlJztcblxuICAgICAgICBpZiAodmFyaWFibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFyaWFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGUgPSB2YXJpYWJsZXNbaV07XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQ29udGV4dFdhdGNoKHZhcmlhYmxlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZXgucGFyc2UoY3R4LCB0aGlzLl9nZXREZWZhdWx0VmFyaWFibGVzKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuY2hlY2tlZCA9IHZhbHVlID09ICd0cnVlJztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldFNyY0RpcmVjdGl2ZShleHByZXNzaW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXggPSBuZXcgUGlFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IGV4LnZhcmlhYmxlcztcbiAgICAgICAgbGV0IHZhbHVlID0gZXgucGFyc2UoY3R4LCB0aGlzLl9nZXREZWZhdWx0VmFyaWFibGVzKCkpO1xuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKCdzcmMnLCB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhcmlhYmxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gdmFyaWFibGVzW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZENvbnRleHRXYXRjaCh2YXJpYWJsZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGV4LnBhcnNlKGN0eCwgdGhpcy5fZ2V0RGVmYXVsdFZhcmlhYmxlcygpKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnc3JjJywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0Q29uZGl0aW9uYWxEaXJlY3RpdmUoZXhwcmVzc2lvbikge1xuICAgICAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4ID0gbmV3IFBpRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0gZXgudmFyaWFibGVzO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNvbmRpdGlvbmFsKGV4KTtcblxuICAgICAgICBpZiAodmFyaWFibGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFyaWFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGUgPSB2YXJpYWJsZXNbaV07XG4gICAgICAgICAgICAgICAgdGhpcy5fYWRkQ29udGV4dFdhdGNoKHZhcmlhYmxlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNvbmRpdGlvbmFsKGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSBzZSBvIGVsZW1lbnRvIHRlcsOhIG8gYXRyaWJ1dG8gJ2Rpc2FibGVkJyBiYXNlYWRvIG5hIGV4cHJlc3Npb24gbGFuZ3VhZ2VcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvbiAtIEV4cHJlc3PDo28gYSBzZXIgYXZhbGlhZGEgZGVudHJvIGRvIGNvbnRleHRvXG4gICAgICogQHJldHVybnMge1BpRWxlbWVudH1cbiAgICAgKi9cbiAgICBzZXREaXNhYmxlZERpcmVjdGl2ZShleHByZXNzaW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXggPSBuZXcgUGlFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLl91cGRhdGVEaXNhYmxlZChleCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleC52YXJpYWJsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZSA9IGV4LnZhcmlhYmxlc1tpXTtcblxuICAgICAgICAgICAgdGhpcy5fYWRkQ29udGV4dFdhdGNoKHZhcmlhYmxlTmFtZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZURpc2FibGVkKGV4KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIGEgbWFuaXB1bGHDp8OjbyBkbyBlc3RpbG8gZG8gZWxlbWVudG8gcG9yIG1laW8gZGUgdW1hIGV4cHJlc3Npb24gbGFuZ3VhZ2VcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvbiBcbiAgICAgKiBAcmV0dXJucyB7UGlFbGVtZW50fVxuICAgICAqL1xuICAgIHNldFN0eWxlRGlyZWN0aXZlKGV4cHJlc3Npb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9leHByZXNzaW9uU3R5bGUgPSBuZXcgUGlFeHByZXNzaW9uKGV4cHJlc3Npb24pO1xuXG4gICAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKCk7XG5cbiAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lcyA9IHRoaXMuX2V4cHJlc3Npb25TdHlsZS52YXJpYWJsZXM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFyaWFibGVOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lc1tpXTtcblxuICAgICAgICAgICAgdGhpcy5fYWRkQ29udGV4dFdhdGNoKHZhcmlhYmxlTmFtZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSBhIG1hbmlwdWxhw6fDo28gZGFzIGNsYXNzZXMgZG8gZWxlbWVudG8gcG9yIG1laW8gZGUgdW1hIGV4cHJlc3Npb24gbGFuZ3VhZ2VcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXhwcmVzc2lvblxuICAgICAqIEByZXR1cm5zIHtQaUVsZW1lbnR9XG4gICAgICovXG4gICAgc2V0Q2xhc3NEaXJlY3RpdmUoZXhwcmVzc2lvbikge1xuICAgICAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2V4cHJlc3Npb25DbGFzcyA9IG5ldyBQaUV4cHJlc3Npb24oZXhwcmVzc2lvbik7XG5cbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xhc3MoKTtcblxuICAgICAgICBjb25zdCB2YXJpYWJsZXMgPSB0aGlzLl9leHByZXNzaW9uQ2xhc3MudmFyaWFibGVzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdiA9IHZhcmlhYmxlc1tpXTtcblxuICAgICAgICAgICAgdGhpcy5fYWRkQ29udGV4dFdhdGNoKHYsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDbGFzcygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzZXRGb3JEaXJlY3RpdmUoc3RtdCkge1xuICAgICAgICBjb25zdCBleHAgPSBuZXcgUGlFeHByZXNzaW9uKHN0bXQpO1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuX2dldERlZmF1bHRWYXJpYWJsZXMoKTtcbiAgICAgICAgY29uc3QgX3N0bXQgPSBleHAucGFyc2UoY3R4LCB2YXJpYWJsZXMpO1xuICAgICAgICBjb25zdCBmb3JEaXJlY3RpdmUgPSBuZXcgUGlGb3JEaXJlY3RpdmUoX3N0bXQpO1xuICAgICAgICBjb25zdCBhdHRyTm9kZXMgPSB0aGlzLl9nZXRQaUF0dHJpYnV0ZU5vZGVzKFsnOmZvciddKTtcblxuICAgICAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICAgICAgbGV0IHJlZk5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUocmVmTm9kZSwgdGhpcy5fZWxlbWVudC5uZXh0U2libGluZyk7XG5cbiAgICAgICAgZm9yRGlyZWN0aXZlXG4gICAgICAgICAgICAubG9vcCgoaXhuLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNwb1BhcmVudCA9IHRoaXMuX2VsZW1lbnQuY29tcG9uZW50UGFyZW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZU5vZGVzKGF0dHJOb2Rlcyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG5ldyBQaUVsZW1lbnQoY2xvbmVkRWxlbWVudCwgdGhpcy5fc2NvcGUsIGNwb1BhcmVudCk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5leHRlbmRGb3JlYWNoQ29udGV4dCh0aGlzLl9mb3JlYWNoQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5fYXV0b0JpbmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFkZEZvcmVhY2hDb250ZXh0KGl4biwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQubG9hZChjcG9QYXJlbnQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdnRyZWUgPSBuZXcgUGlWaXJ0dWFsVHJlZShjbG9uZWRFbGVtZW50LmNoaWxkcmVuLCB0aGlzLl9zY29wZSwgY3BvUGFyZW50KTtcbiAgICAgICAgICAgICAgICB2dHJlZS5ob29rKCdkaWQ6Y3JlYXRlOnZlbGVtZW50JywgKHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuX2NoaWxkcmVuLnB1c2godmUpO1xuICAgICAgICAgICAgICAgICAgICB2ZS5leHRlbmRGb3JlYWNoQ29udGV4dChuZXdFbGVtZW50Ll9mb3JlYWNoQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdnRyZWUubG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZW5kKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gbm9kZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3Tm9kZSA9IG5vZGVzW2ldLl9lbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICByZWZOb2RlLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucnVuKCk7XG5cbiAgICAgICAgaWYgKGV4cC52YXJpYWJsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHAudmFyaWFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gZXhwLnZhcmlhYmxlc1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRDb250ZXh0V2F0Y2godmFyaWFibGVOYW1lLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZXNbaV0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbm9kZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yRGlyZWN0aXZlLnJ1bih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudEVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2ZvcmRvbmUnLCB7XG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgICAgY2FuY2VsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbXBvc2VkOiBmYWxzZSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuX2Rpc3Bvc2UoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSBhIGRpcmV0aXZhIGZvcmVhY2ggZG8gZWxlbWVudG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0bXR9IHN0bXQgLSBEZWNsYXJhw6fDo28gZm9yZWFjaFxuICAgICAqIEByZXR1cm5zIHtQaUVsZW1lbnR9XG4gICAgICovXG4gICAgc2V0Rm9yRWFjaERpcmVjdGl2ZShzdG10KSB7XG4gICAgICAgIGNvbnN0IGV4cCA9IG5ldyBQaUV4cHJlc3Npb24oc3RtdCk7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0gdGhpcy5fZ2V0RGVmYXVsdFZhcmlhYmxlcygpO1xuICAgICAgICBjb25zdCBfc3RtdCA9IGV4cC5wYXJzZShjdHgsIHZhcmlhYmxlcyk7XG4gICAgICAgIGNvbnN0IGZvcmVhY2ggPSBuZXcgUGlGb3JFYWNoRGlyZWN0aXZlKF9zdG10KTtcbiAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gZm9yZWFjaC5vYmplY3RJbnRlcmFibGVOYW1lO1xuICAgICAgICBjb25zdCBhdHRyTm9kZXMgPSB0aGlzLl9nZXRQaUF0dHJpYnV0ZU5vZGVzKFsnOmZvcmVhY2gnXSk7XG4gICAgICAgIGxldCBhcnJheSA9IFBpT2JqZWN0LmV4dHJhY3RWYWx1ZSh0aGlzLl9zY29wZSwgJ2NvbnRleHQuJyArIHByb3BlcnR5TmFtZSk7XG5cbiAgICAgICAgaWYgKGFycmF5ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYXJyYXkgPSBmaW5kQ2xhc3MocHJvcGVydHlOYW1lKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhcnJheSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFycmF5ID0gUGlPYmplY3QuZXh0cmFjdFZhbHVlKHRoaXMuX2ZvcmVhY2hDb250ZXh0LCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFycmF5ID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgYEZvckVhY2g6IHByb3ByaWVkYWRlIG7Do28gZW5jb250cmFkYSAnJHtwcm9wZXJ0eU5hbWV9J2A7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbm9kZXMgPSBbXTtcbiAgICAgICAgbGV0IGN1cnJlbnRFbGVtZW50cyA9IFtdO1xuXG4gICAgICAgIHZhciByZWZOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHJlZk5vZGUsIHRoaXMuX2VsZW1lbnQubmV4dFNpYmxpbmcpO1xuXG4gICAgICAgIGZvcmVhY2hcbiAgICAgICAgICAgIC5sb29wKChhcnIsIGluZGV4LCB2biwgaXhuKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3BvUGFyZW50ID0gdGhpcy5fZWxlbWVudC5fY29tcG9uZW50UGFyZW50O1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcmVhY2hQcm9wZXJ0eU5hbWUgPSB2bjtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JlYXJjaFByb3BlcnlWYWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JlYXJjaEluZGV4TmFtZSA9IGl4bjtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3NldEF0dHJpYnV0ZU5vZGVzKGF0dHJOb2Rlcyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjbG9uZWRFbGVtZW50ID0gdGhpcy5fZWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3RWxlbWVudCA9IG5ldyBQaUVsZW1lbnQoY2xvbmVkRWxlbWVudCwgdGhpcy5fc2NvcGUsIGNwb1BhcmVudCk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5leHRlbmRGb3JlYWNoQ29udGV4dCh0aGlzLl9mb3JlYWNoQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgbmV3RWxlbWVudC5fYXV0b0JpbmQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuYWRkRm9yZWFjaENvbnRleHQoZm9yZWFjaFByb3BlcnR5TmFtZSwgZm9yZWFyY2hQcm9wZXJ5VmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChmb3JlYXJjaEluZGV4TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmFkZEZvcmVhY2hDb250ZXh0KGZvcmVhcmNoSW5kZXhOYW1lLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQubG9hZChjcG9QYXJlbnQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdnRyZWUgPSBuZXcgUGlWaXJ0dWFsVHJlZShjbG9uZWRFbGVtZW50LmNoaWxkcmVuLCB0aGlzLl9zY29wZSwgY3BvUGFyZW50KTtcbiAgICAgICAgICAgICAgICB2dHJlZS5ob29rKCdkaWQ6Y3JlYXRlOnZlbGVtZW50JywgKHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQuX2NoaWxkcmVuLnB1c2godmUpO1xuICAgICAgICAgICAgICAgICAgICB2ZS5leHRlbmRGb3JlYWNoQ29udGV4dChuZXdFbGVtZW50Ll9mb3JlYWNoQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdnRyZWUubG9hZCgpO1xuXG4gICAgICAgICAgICAgICAgbm9kZXMucHVzaChjbG9uZWRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudHMucHVzaChuZXdFbGVtZW50KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZW5kKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld05vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgcmVmTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBub2RlcyA9IFtdO1xuICAgICAgICAgICAgfSkuXG4gICAgICAgICAgICBydW4oYXJyYXkpO1xuXG4gICAgICAgIGNvbnN0IHNwbGljZSA9IGZ1bmN0aW9uIChhcnJheSwgaW5kZXgsIGRlbGV0ZUNvdW50LCAuLi5pdGVtcykge1xuICAgICAgICAgICAgaWYgKGRlbGV0ZUNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IGluZGV4ICsgZGVsZXRlQ291bnQgPiBjdXJyZW50RWxlbWVudHMubGVuZ3RoID8gY3VycmVudEVsZW1lbnRzLmxlbmd0aCA6IGluZGV4ICsgZGVsZXRlQ291bnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBkZXN0cm95IG9zIGVsZW1lbnRvc1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50c1tpXS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGFycmF5LCBpbmRleCwgZGVsZXRlQ291bnQpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50cy5zcGxpY2UoaW5kZXgsIGRlbGV0ZUNvdW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGl0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoYXJyYXksIGluZGV4LCAwLCAuLi5pdGVtcyk7XG4gICAgICAgICAgICAgICAgZm9yZWFjaC5ydW4oYXJyYXksIGluZGV4KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChQaVR5cGUuaXNBcnJheShhcnJheSkpIHtcblxuICAgICAgICAgICAgUGlBcnJheS5hZGRNZXRob2QoYXJyYXksICdsb2FkJywgZnVuY3Rpb24gKGFycmF5LCBpbmRleCA9IDApIHtcbiAgICAgICAgICAgICAgICBzcGxpY2UodGhpcywgaW5kZXgsIDAsIC4uLmFycmF5KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIFBpQXJyYXkuYWRkTWV0aG9kKGFycmF5LCAnYWRkJywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBzcGxpY2UodGhpcywgdGhpcy5sZW5ndGgsIDAsIGl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUGlBcnJheS5hZGRNZXRob2QoYXJyYXksICdjbGVhcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzcGxpY2UodGhpcywgMCwgdGhpcy5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUGlBcnJheS5hZGRNZXRob2QoYXJyYXksICdyZW1vdmUnLCBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzcGxpY2UodGhpcywgaW5kZXgsIDEpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgUGlBcnJheS5hZGRNZXRob2QoYXJyYXksICdyZWxvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50c1tpXS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yZWFjaC5ydW4odGhpcywgMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2VsZW1lbnQucGFyZW50RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnZm9yZG9uZScsIHtcbiAgICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29tcG9zZWQ6IGZhbHNlLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy5kZXN0cm95KCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2V0UmVuZGVyRGlyZWN0aXZlKGRpcmVjdGl2YSwgcHJvcE5hbWUsIGV2ZW50TmFtZSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuX2dldERlZmF1bHRWYXJpYWJsZXMoKTtcblxuICAgICAgICBjb25zdCBjcmVhdGUgPSBQaVN0YXRlbWVudC5leGVjV2l0aFZhcmlhYmxlcyhkaXJlY3RpdmEsIHZhcmlhYmxlcywgY3R4KTtcbiAgICAgICAgbGV0IGZuO1xuICAgICAgICBpZiAoY3JlYXRlLm5hbWUgPT0gZGlyZWN0aXZhKSB7XG4gICAgICAgICAgICBmbiA9IG5ldyBjcmVhdGUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjcmVhdGUuY2FsbCkge1xuICAgICAgICAgICAgZm4gPSBjcmVhdGUuY2FsbChjb250ZXh0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZuID0gY3JlYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fbG9hZExvYWRlcigpO1xuXG4gICAgICAgIGlmIChmbiBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIGZuLnRoZW4oKGMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENvbXBvbmVudChjKTtcbiAgICAgICAgICAgICAgICBjLnJlbmRlcih0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKGZuIGluc3RhbmNlb2YgUGlQcm9taXNlKSB7XG4gICAgICAgICAgICBmbi5vaygoYykgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q29tcG9uZW50KGMpO1xuICAgICAgICAgICAgICAgIGMucmVuZGVyKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29tcG9uZW50KGZuKTtcbiAgICAgICAgICAgIGZuLnJlbmRlcih0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9nZXRWYWx1ZUZyb21EZWZhdWx0VmFyaWFibGVzKG5hbWUpIHtcbiAgICAgICAgY29uc3QgeyBkZWZhdWx0TmFtZXMsIGRlZmF1bHRWYWx1ZXMgfSA9IHRoaXMuX2dldERlZmF1bHRWYXJpYWJsZXMoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlZmF1bHROYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgdm5hbWUgPSBkZWZhdWx0TmFtZXNbaV07XG4gICAgICAgICAgICBpZiAodm5hbWUgPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2dldERlZmF1bHRWYXJpYWJsZXMoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzLl9lbGVtZW50Ll9jb21wb25lbnQgfHwgdGhpcy5fZWxlbWVudC5fY29tcG9uZW50UGFyZW50O1xuICAgICAgICBjb25zdCBlbGVtZW50VmFsdWUgPSB0aGlzLl9lbGVtZW50LmdldCA/IHRoaXMuX2VsZW1lbnQuZ2V0KCkgOiAnJztcbiAgICAgICAgY29uc3QgdmFyaWFibGVzTmFtZXMgPSBbJyR0aGlzJywgJyRlbGVtZW50JywgJyR2YWx1ZSddO1xuICAgICAgICBjb25zdCB2YXJpYWJsZXNWYWx1ZXMgPSBbc2VsZiwgdGhpcy5fZWxlbWVudCwgZWxlbWVudFZhbHVlXTtcblxuICAgICAgICB0aGlzLl9sb2FkRGVmYXVsdFZhcmlhYmxlcygpO1xuICAgICAgICBnZXRDbGFzc2VzKCkuZm9yRWFjaChjID0+IHsgdmFyaWFibGVzTmFtZXMucHVzaChjLm5hbWUpOyB2YXJpYWJsZXNWYWx1ZXMucHVzaChjKSB9KTtcblxuICAgICAgICByZXR1cm4gW3RoaXMuX2RlZmF1bHRWYXJpYWJsZXNOYW1lcy5jb25jYXQodmFyaWFibGVzTmFtZXMpLCB0aGlzLl9kZWZhdWx0VmFyaWFibGVzVmFsdWVzLmNvbmNhdCh2YXJpYWJsZXNWYWx1ZXMpXTtcbiAgICB9XG5cbiAgICBfYWRkQmluZFRvRWxlbWVudENvbnRleHQocHJvcGVydHlOYW1lLCBldmVudE5hbWUpIHtcbiAgICAgICAgbGV0IGlzQ2hhbmdlUHJvcGVydHlCeUV2ZW50ID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgdmFsdWUgPSBQaU9iamVjdC5leHRyYWN0VmFsdWUodGhpcy5fc2NvcGUsICdjb250ZXh0LicgKyBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICB0aGlzLl9lbGVtZW50LnNldCh2YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5fYWRkQ29udGV4dFdhdGNoKHByb3BlcnR5TmFtZSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQ2hhbmdlUHJvcGVydHlCeUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IFBpT2JqZWN0LmV4dHJhY3RWYWx1ZSh0aGlzLl9zY29wZSwgJ2NvbnRleHQuJyArIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnNldCh2YWx1ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZpZXcoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGV2ZW50TmFtZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuKGV2ZW50TmFtZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlzQ2hhbmdlUHJvcGVydHlCeUV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBQaU9iamVjdC5zZXRQcm9wZXJ0eSh0aGlzLl9zY29wZS5jb250ZXh0LCBwcm9wZXJ0eU5hbWUsIHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgICAgIGlzQ2hhbmdlUHJvcGVydHlCeUV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuKCdjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlzQ2hhbmdlUHJvcGVydHlCeUV2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBQaU9iamVjdC5zZXRQcm9wZXJ0eSh0aGlzLl9zY29wZS5jb250ZXh0LCBwcm9wZXJ0eU5hbWUsIGUuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICBpc0NoYW5nZVByb3BlcnR5QnlFdmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfZ2V0UGlBdHRyaWJ1dGVOb2RlcyhleGNlcHRzID0gW10pIHtcbiAgICAgICAgY29uc3QgYXR0cnMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2F0dHJOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHRoaXMuX2F0dHJOYW1lc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0Q2hhcmFjdGVyID0gbmFtZVswXTtcblxuICAgICAgICAgICAgaWYgKGV4Y2VwdHMuaW5kZXhPZihuYW1lKSA9PSAtMSAmJiAoZmlyc3RDaGFyYWN0ZXIgPT0gJzonIHx8IGZpcnN0Q2hhcmFjdGVyID09ICcjJyB8fCBmaXJzdENoYXJhY3RlciA9PSAnQCcpKSB7XG4gICAgICAgICAgICAgICAgYXR0cnMucHVzaCh0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZU5vZGUobmFtZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF0dHJzO1xuICAgIH1cblxuICAgIF9zZXRBdHRyaWJ1dGVOb2RlcyhhdHRyTm9kZXMgPSBbXSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF0dHJOb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXR0ck5vZGUgPSBhdHRyTm9kZXNbaV07XG4gICAgICAgICAgICBpZiAoYXR0ck5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGVOb2RlKGF0dHJOb2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldE1vdW50RGlyZWN0aXZlKGV4cHJlc3Npb24pIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5tb3VudCA9IChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4ID0gbmV3IFBpRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldENvbnRleHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYXJpYWJsZXMgPSB0aGlzLl9nZXREZWZhdWx0VmFyaWFibGVzKCk7XG4gICAgICAgICAgICBjb25zdCBzdG10ID0gZXgucGFyc2UoY3R4LCBkZWZhdWx0VmFyaWFibGVzKTtcbiAgICAgICAgICAgIGRlZmF1bHRWYXJpYWJsZXNbJyR0aGlzJ10gPSBjb21wb25lbnQ7XG5cbiAgICAgICAgICAgIFBpU3RhdGVtZW50LmV4ZWNXaXRoVmFyaWFibGVzKCd0aGlzLicgKyBzdG10LCBkZWZhdWx0VmFyaWFibGVzLCBjdHgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNldERpZE1vdW50RGlyZWN0aXZlKCkge1xuXG4gICAgfVxuXG4gICAgc2V0V2lsbE1vdW50RGlyZWN0aXZlKCkge1xuXG4gICAgfVxuXG4gICAgc2V0Rm9yRW5kVmFsdWVEaXJlY3RpdmUoZXhwcmVzc2lvbiwgcHJvcE5hbWUsIGV2ZW50TmFtZSwgY29udGV4dCkge1xuICAgICAgICBpZiAoZXZlbnROYW1lID09ICd2YWx1ZScgfHwgZXZlbnROYW1lID09ICdzZXRWYWx1ZScpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuKHByb3BOYW1lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4ID0gbmV3IFBpRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRDb250ZXh0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhcmlhYmxlcyA9IHRoaXMuX2dldERlZmF1bHRWYXJpYWJsZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gZXgucGFyc2UoY3R4LCBkZWZhdWx0VmFyaWFibGVzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2xvYWREaXJlY3RpdmVzQmFzZSgpIHtcbiAgICAgICAgdGhpcy5hZGREaXJlY3RpdmUoJ2ZvcicsIHRoaXMuc2V0Rm9yRGlyZWN0aXZlKTtcbiAgICAgICAgdGhpcy5hZGREaXJlY3RpdmUoJ2ZvcmVhY2gnLCB0aGlzLnNldEZvckVhY2hEaXJlY3RpdmUpO1xuICAgICAgICB0aGlzLmFkZERpcmVjdGl2ZSgnbG9hZGVyJywgdGhpcy5zZXRMb2FkZXJEaXJlY3RpdmUpO1xuICAgICAgICB0aGlzLmFkZERpcmVjdGl2ZSgnY2xhc3MnLCB0aGlzLnNldENsYXNzRGlyZWN0aXZlKTtcbiAgICAgICAgdGhpcy5hZGREaXJlY3RpdmUoJ3N0eWxlJywgdGhpcy5zZXRTdHlsZURpcmVjdGl2ZSk7XG4gICAgICAgIHRoaXMuYWRkRGlyZWN0aXZlKCdpbml0JywgdGhpcy5zZXRJbml0RGlyZWN0aXZlKTtcbiAgICAgICAgdGhpcy5hZGREaXJlY3RpdmUoJ2JpbmQnLCB0aGlzLmFkZEJpbmQpO1xuICAgICAgICB0aGlzLmFkZERpcmVjdGl2ZSgnb24nLCB0aGlzLmFkZEV2ZW50U3RhdGVtZW50KTtcbiAgICAgICAgdGhpcy5hZGREaXJlY3RpdmUoJ3ZhbHVlJywgdGhpcy5zZXRWYWx1ZURpcmVjdGl2ZSk7XG4gICAgICAgIHRoaXMuYWRkRGlyZWN0aXZlKCdzZWxlY3RlZCcsIHRoaXMuc2V0U2VsZWN0ZWREaXJlY3RpdmUpO1xuICAgICAgICB0aGlzLmFkZERpcmVjdGl2ZSgnZGlzYWJsZWQnLCB0aGlzLnNldERpc2FibGVkRGlyZWN0aXZlKTtcbiAgICAgICAgdGhpcy5hZGREaXJlY3RpdmUoJ2lmJywgdGhpcy5zZXRDb25kaXRpb25hbERpcmVjdGl2ZSk7XG4gICAgICAgIHRoaXMuYWRkRGlyZWN0aXZlKCdtb2RlbCcsIHRoaXMuc2V0TW9kZWxEaXJlY3RpdmUpO1xuICAgICAgICB0aGlzLmFkZERpcmVjdGl2ZSgnY2hhbmdlJywgdGhpcy5zZXRDaGFuZ2VEaXJlY3RpdmUpO1xuICAgICAgICB0aGlzLmFkZERpcmVjdGl2ZSgnc3JjJywgdGhpcy5zZXRTcmNEaXJlY3RpdmUpO1xuICAgICAgICB0aGlzLmFkZERpcmVjdGl2ZSgnY2hlY2tlZCcsIHRoaXMuc2V0Q2hlY2tlZERpcmVjdGl2ZSk7XG4gICAgICAgIHRoaXMuYWRkRGlyZWN0aXZlKCdtb3VudCcsIHRoaXMuc2V0TW91bnREaXJlY3RpdmUpO1xuICAgICAgICB0aGlzLmFkZERpcmVjdGl2ZSgncmVuZGVyJywgdGhpcy5zZXRSZW5kZXJEaXJlY3RpdmUpO1xuICAgICAgICB0aGlzLmFkZERpcmVjdGl2ZSgnZm9yZW5kJywgdGhpcy5zZXRGb3JFbmRWYWx1ZURpcmVjdGl2ZSk7XG4gICAgICAgIHRoaXMuYWRkRGlyZWN0aXZlKCdmb3Jkb25lJywgdGhpcy5zZXRGb3JFbmRWYWx1ZURpcmVjdGl2ZSk7XG4gICAgfVxuXG4gICAgc2V0TG9hZGVyRGlyZWN0aXZlKGRpcmVjdGl2YSwgcHJvcE5hbWUsIGV2ZW50TmFtZSwgY29udGV4dCkge1xuICAgICAgICBjb25zdCBjdHggPSB0aGlzLl9nZXRDb250ZXh0KCk7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IHRoaXMuX2dldERlZmF1bHRWYXJpYWJsZXMoKTtcblxuICAgICAgICBjb25zdCBjcmVhdGUgPSBQaVN0YXRlbWVudC5leGVjV2l0aFZhcmlhYmxlcyhkaXJlY3RpdmEsIHZhcmlhYmxlcywgY3R4KTtcbiAgICAgICAgaWYgKGNyZWF0ZS5uYW1lID09IGRpcmVjdGl2YSkge1xuICAgICAgICAgICAgY29uc3QgbG9hZGVyID0gbmV3IGNyZWF0ZSgpO1xuICAgICAgICAgICAgbG9hZGVyLnJlbmRlcih0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIGlmIChjcmVhdGUuY2FsbCkge1xuICAgICAgICAgICAgY29uc3QgbG9hZGVyID0gY3JlYXRlLmNhbGwoY29udGV4dCk7XG4gICAgICAgICAgICBsb2FkZXIucmVuZGVyKHRoaXMuX2VsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3JlYXRlLnJlbmRlcih0aGlzLl9lbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2hhc0xvYWRlciA9IHRydWU7XG4gICAgfVxuXG4gICAgX2xvYWRMb2FkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLl9oYXNMb2FkZXIgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkZXIgPSBQaUNvbmZpZy5nZXQoJ2h0bWwubG9hZGVyJyk7XG4gICAgICAgICAgICBsZXQgaHRtbCA9IGxvYWRlcjtcblxuICAgICAgICAgICAgaWYgKGxvYWRlci5jb25zdHJ1Y3Rvci5uYW1lID09ICdGdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBodG1sID0gbG9hZGVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuaW5uZXJIVE1MID0gaHRtbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF8oY29udGV4dCkge1xuICAgICAgICBjb25zdCBjb250ZXh0UHJvcGVydHlOYW1lcyA9IE9iamVjdC5rZXlzKGNvbnRleHQpO1xuICAgICAgICBjb25zdCBjb250ZXh0UHJvcGVydHlWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGNvbnRleHQpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGV4dFByb3BlcnR5VmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGNvbnRleHRQcm9wZXJ0eVZhbHVlc1tpXTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dFByb3BlcnR5VmFsdWVzW2ldID0gdmFsdWUuYmluZChjb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jcmVhdGVFeHByZXNzaW9uKHZhbHVlLCBub2RlKSB7XG4gICAgICAgIGNvbnN0IGV4cCA9IG5ldyBQaUV4cHJlc3Npb24odmFsdWUpO1xuICAgICAgICBub2RlLl9waWV4ID0gZXhwO1xuXG4gICAgICAgIGlmICh0aGlzLl9hdXRvQmluZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBleHAudmFyaWFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gZXhwLnZhcmlhYmxlc1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRDb250ZXh0V2F0Y2godmFyaWFibGVOYW1lLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZVZpZXcoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9sb2FkVGVtcGxhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fZWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICBjb25zdCB4aHRtbCA9IFBpQ29uZmlnLmdldCgnZXhwcmVzc2lvbi54aHRtbCcpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBub2RlLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB4aHRtbC50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgbm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbCwgbm9kZS5uZXh0U2libGluZyk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZUV4cHJlc3Npb24odmFsdWUsIGVsKTtcblxuICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlICYmIHZhbHVlLmluZGV4T2YoJ3snKSA+IC0xICYmIG5vZGUgaW5zdGFuY2VvZiBUZXh0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlRXhwcmVzc2lvbih2YWx1ZSwgbm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl91cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgX3VwZGF0ZUNvbmRpdGlvbmFsKGV4KSB7XG4gICAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2dldENvbnRleHQoKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhcmlhYmxlcyA9IHRoaXMuX2dldERlZmF1bHRWYXJpYWJsZXMoKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBQaVN0YXRlbWVudC5leGVjV2l0aFZhcmlhYmxlcyhleC5wYXJzZShjdHgsIGRlZmF1bHRWYXJpYWJsZXMpLCBkZWZhdWx0VmFyaWFibGVzLCBjdHgpO1xuICAgICAgICBjb25zdCBuZXh0RWxlbWVudCA9IHRoaXMuX2VsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIGlmIChuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC5oYXNBdHRyaWJ1dGUoJzplbHNlJykpIHtcbiAgICAgICAgICAgIG5leHRFbGVtZW50Ll9fcGllbHNlID0gdHJ1ZTtcbiAgICAgICAgICAgIG5leHRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnOmVsc2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhhc0Vsc2UgPSBuZXh0RWxlbWVudCAmJiBuZXh0RWxlbWVudC5fX3BpZWxzZTtcblxuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuJC5zaG93KCk7XG5cbiAgICAgICAgICAgIGlmIChoYXNFbHNlKSB7XG4gICAgICAgICAgICAgICAgJChuZXh0RWxlbWVudCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKGhhc0Vsc2UpIHtcbiAgICAgICAgICAgICAgICAkKG5leHRFbGVtZW50KS5zaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfdXBkYXRlRGlzYWJsZWQoZXgpIHtcbiAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0Q29udGV4dCgpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGV4LnBhcnNlKGN0eCwgdGhpcy5fZ2V0RGVmYXVsdFZhcmlhYmxlcygpKTtcblxuICAgICAgICBpZiAodmFsdWUgPT0gJ3RydWUnIHx8IHZhbHVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3VwZGF0ZVZpZXcoKSB7XG4gICAgICAgIGlmICh0aGlzLl9kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vZGVzID0gdGhpcy5fZWxlbWVudC5jaGlsZE5vZGVzO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBub2RlID0gbm9kZXNbaV07XG4gICAgICAgICAgICBpZiAobm9kZS5fcGlleCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBub2RlLl9waWV4LnBhcnNlKHRoaXMuX2dldENvbnRleHQoKSwgdGhpcy5fZ2V0RGVmYXVsdFZhcmlhYmxlcygpKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIFRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5ub2RlVmFsdWUgPSB0ZXh0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gdGV4dDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF91cGRhdGVTdHlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2V4cHJlc3Npb25TdHlsZSkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVJbmxpbmUgPSB0aGlzLl9leHByZXNzaW9uU3R5bGUucGFyc2UodGhpcy5fZ2V0Q29udGV4dCgpLCB0aGlzLl9nZXREZWZhdWx0VmFyaWFibGVzKCkpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVzID0gc3R5bGVJbmxpbmUuc3BsaXQoJzsnKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZSA9IHN0eWxlc1tpXS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIGlmIChzdHlsZS5sZW5ndGggIT0gMikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsZU5hbWUgPSBzdHlsZVswXS50cmltKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGVWYWx1ZSA9IHN0eWxlWzFdLnRyaW0oKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJC5jc3Moc3R5bGVOYW1lLCBzdHlsZVZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF91cGRhdGVDbGFzcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2Rlc3Ryb3llZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2V4cHJlc3Npb25DbGFzcykge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gdGhpcy5fZXhwcmVzc2lvbkNsYXNzLnBhcnNlKHRoaXMuX2dldENvbnRleHQoKSwgdGhpcy5fZ2V0RGVmYXVsdFZhcmlhYmxlcygpKS50cmltKCk7XG4gICAgICAgICAgICBpZiAoY2xhc3NMaXN0ID09IHRoaXMuX2VsZW1lbnQuY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuY2xhc3NOYW1lID0gJyc7XG4gICAgICAgICAgICBpZiAoY2xhc3NMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbGVtZW50LmNsYXNzTGlzdC5hZGQoLi4uY2xhc3NMaXN0LnNwbGl0KCcgJykuZmlsdGVyKGUgPT4gZSAhPT0gJycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9vcmRlckF0dHJpYnV0ZU5hbWVzKCl7XG4gICAgICAgIGxldCBpID0gdGhpcy5fYXR0ck5hbWVzLmluZGV4T2YoJ2ZvcmVhY2gnKTtcbiAgICAgICAgaWYgKGkgPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5fYXR0ck5hbWVzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuX2F0dHJOYW1lcy51bnNoaWZ0KCdmb3JlYWNoJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpID0gdGhpcy5fYXR0ck5hbWVzLmluZGV4T2YoJ2ZvcicpO1xuICAgICAgICBpZiAoaSA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLl9hdHRyTmFtZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgdGhpcy5fYXR0ck5hbWVzLnVuc2hpZnQoJ2ZvcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3J1bkRpcmVjdGl2ZXMod3JhcHBlcikge1xuICAgICAgICBpZiAodGhpcy5fZGVzdHJveWVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2F0dHJOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXR0ck5hbWUgPSB0aGlzLl9hdHRyTmFtZXNbaV07XG4gICAgICAgICAgICBjb25zdCBhdHRyVmFsdWUgPSB0aGlzLl9lbGVtZW50LmdldEF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgICAgICAgICBjb25zdCB7IHByb3BOYW1lLCBldmVudE5hbWUgfSA9IHRoaXMuX2V4dHJhY3RQaUF0dHJpYnV0ZU5hbWVBbmRQcm9wZXJ0eShhdHRyTmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmV4aXN0RGlyZWN0aXZlKHByb3BOYW1lKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJlY3RpdmVzW3Byb3BOYW1lXS5jYWxsKHRoaXMsIGF0dHJWYWx1ZSwgcHJvcE5hbWUsIGV2ZW50TmFtZSwgd3JhcHBlcik7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9wTmFtZSA9PSAnZm9yZWFjaCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwcm9wTmFtZSA9PSAnZm9yJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF0dHJOYW1lLmluZGV4T2YoJyMnKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXggPSBuZXcgUGlFeHByZXNzaW9uKGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBleC5wYXJzZSh0aGlzLl9nZXRDb250ZXh0KCksIHRoaXMuX2dldERlZmF1bHRWYXJpYWJsZXMoKSk7XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLnN1YnN0cigxKSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJOYW1lKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF0dHJOYW1lLmluZGV4T2YoJzonKSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXggPSBuZXcgUGlFeHByZXNzaW9uKGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5fZ2V0Q29udGV4dCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlcyA9IGV4LnZhcmlhYmxlcztcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBleC5wYXJzZShjdHgsIHRoaXMuX2dldERlZmF1bHRWYXJpYWJsZXMoKSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUuc3Vic3RyKDEpLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhYmxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFyaWFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YXJpYWJsZSA9IHZhcmlhYmxlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FkZENvbnRleHRXYXRjaCh2YXJpYWJsZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gZXgucGFyc2UoY3R4LCB0aGlzLl9nZXREZWZhdWx0VmFyaWFibGVzKCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUuc3Vic3RyKDEpLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2V4dHJhY3RQaUF0dHJpYnV0ZU5hbWVBbmRQcm9wZXJ0eShhdHRyaWJ1dGUpIHtcbiAgICAgICAgbGV0IHByb3BOYW1lID0gJyc7XG4gICAgICAgIGxldCBldmVudE5hbWUgPSBmYWxzZTtcblxuICAgICAgICBpZiAoYXR0cmlidXRlLmluZGV4T2YoJ0AnKSA+IC0xKSB7XG4gICAgICAgICAgICBwcm9wTmFtZSA9ICdvbic7XG4gICAgICAgICAgICBldmVudE5hbWUgPSBhdHRyaWJ1dGUucmVwbGFjZSgnQCcsICcnKTtcblxuICAgICAgICAgICAgY29uc3QgbmFtZUFuZEV2ZW50ID0gZXZlbnROYW1lLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICBpZiAobmFtZUFuZEV2ZW50Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBwcm9wTmFtZSA9IG5hbWVBbmRFdmVudFswXTtcbiAgICAgICAgICAgICAgICBldmVudE5hbWUgPSBuYW1lQW5kRXZlbnRbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlLmluZGV4T2YoJzonKSA+IC0xKSB7XG4gICAgICAgICAgICBwcm9wTmFtZSA9IGF0dHJpYnV0ZS5yZXBsYWNlKCc6JywgJycpO1xuXG4gICAgICAgICAgICBjb25zdCBuYW1lQW5kRXZlbnQgPSBwcm9wTmFtZS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgaWYgKG5hbWVBbmRFdmVudC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgcHJvcE5hbWUgPSBuYW1lQW5kRXZlbnRbMF07XG4gICAgICAgICAgICAgICAgZXZlbnROYW1lID0gbmFtZUFuZEV2ZW50WzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgcHJvcE5hbWUsIGV2ZW50TmFtZSB9O1xuICAgIH1cblxuICAgIF9nZXRDb250ZXh0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fc2NvcGUuY29udGV4dDtcbiAgICB9XG5cbiAgICBfY2xlYXJDb250ZXh0V2F0Y2goKSB7XG4gICAgICAgIGxldCBpZHMgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX3dhdGNocy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWRzID0gaWRzLmNvbmNhdCh0aGlzLl93YXRjaHNbaV0uaWRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFBpT2JqZWN0Lm9mZih0aGlzLl9zY29wZSwgaWRzKTtcbiAgICAgICAgdGhpcy5fd2F0Y2hzID0gW107XG4gICAgfVxuXG4gICAgX2FkZENvbnRleHRXYXRjaChwcm9wZXJ0eSwgZm4pIHtcbiAgICAgICAgY29uc3QgaWRzID0gUGlPYmplY3Qub24odGhpcy5fc2NvcGUsICdjb250ZXh0LicgKyBwcm9wZXJ0eSwgZm4pXG4gICAgICAgIHRoaXMuX3dhdGNocyA9IHRoaXMuX3dhdGNocy5jb25jYXQoe1xuICAgICAgICAgICAgcHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgICAgICAgaWRzOiBpZHNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX3JlbW92ZUNvbnRleHRXYXRjaChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgY29uc3QgYXJyID0gdGhpcy5fd2F0Y2hzO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXJyW2ldLnByb3BlcnR5ID09IHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgIFBpT2JqZWN0Lm9mZih0aGlzLl9zY29wZSwgYXJyW2ldLmlkcyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbn07IiwiLyoqKlxuICogQ29weXJpZ2h0IE1hbm9lbCBOZWNvIDIwMjIsIFRvZG9zIG9zIGRpcmVpdG9zIHJlc2VydmFkb3NcbiAqXG4gKiBAYXV0b3I6IE1hbm9lbCBOZWNvXG4gKiBAY3JlYXRlOiAyMDEyLXByZXNlbnRcbiAqIEB2ZXJzaW9uOiB2MTEuMi42LWJldGFcbiAqL1xuXG5jb25zdCBnbG9iYWwgPSB3aW5kb3c7XG5jb25zdCBjb21wb25lbnRzID0gW107XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyT2JqZWN0KG5hbWUsIG9iaikge1xuICAgIG9iai5uYW1lID0gbmFtZTtcbiAgICBjb21wb25lbnRzLnB1c2gob2JqKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXIobmFtZSwgb2JqKSB7XG4gICAgaWYgKG5hbWUgIT0gbnVsbCAmJiBuYW1lLmNvbnN0cnVjdG9yLm5hbWUgPT0gJ1N0cmluZycgJiYgb2JqICE9IG51bGwpIHtcbiAgICAgICAgcmVnaXN0ZXJPYmplY3QobmFtZSwgb2JqKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBvYmogPSBhcmd1bWVudHNbaV07XG4gICAgICAgIGNvbnN0IGNOYW1lID0gb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG5cbiAgICAgICAgaWYgKGZpbmRDbGFzcyhvYmopID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKGNOYW1lID09ICdGdW5jdGlvbicgfHwgY05hbWUgPT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBvYmogPSBPYmplY3QuZnJlZXplKG9iaik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaChvYmopO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRDbGFzc2VzKCkge1xuICAgIHJldHVybiBjb21wb25lbnRzO1xufVxuXG5mdW5jdGlvbiBmaW5kQ2xhc3MoY05hbWUpIHtcbiAgICByZXR1cm4gY29tcG9uZW50cy5maW5kKGMgPT4gYy5uYW1lID09IGNOYW1lIHx8IChjLmNvbnN0cnVjdG9yICYmIGMuY29uc3RydWN0b3IubmFtZSA9PSBjTmFtZSkpO1xufVxuXG5mdW5jdGlvbiBhcHAoKSB7XG4gICAgcmV0dXJuIGdsb2JhbC5hcHA7XG59XG5cbmZ1bmN0aW9uIGxvY2F0aW9uKCkge1xuICAgIHJldHVybiBnbG9iYWwubG9jYXRpb247XG59XG5cbmZ1bmN0aW9uIHNldExvY2F0aW9uKHVybCkge1xuICAgIGdsb2JhbC5sb2NhdGlvbiA9IHVybDtcbn1cblxuZnVuY3Rpb24gJCgpIHtcbiAgICByZXR1cm4gZ2xvYmFsLiRcbn1cblxuZXhwb3J0IHsgZ2V0Q2xhc3NlcywgZmluZENsYXNzLCByZWdpc3RlciwgZ2xvYmFsLCBhcHAsIGxvY2F0aW9uLCBzZXRMb2NhdGlvbiwgJCB9OyIsImltcG9ydCBQaVJhbmRvbSBmcm9tICcuL3JhbmRvbSdcblxuLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlFdmVudCB7XG4gICAgI2xpc3QgPSBbXTtcblxuICAgIC8qKlxuICAgICAqIEFkaWNpb25hIHVtIGV2ZW50byBwYXJhIHNlciBvYnNlcnZhZG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBOb21lIGRvIGV2ZW50b1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY3R4IC0gQ29udGV4dG8gZG8gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9uY2UgLSBTZSBvIGNhbGxiYWNrIGRldmVyw6Egc2VyIGNoYW1hZG8gYXBlbmFzIHVtYSB2ZXpcbiAgICAgKiBAcmV0dXJucyB7UGlFdmVudH1cbiAgICAgKi9cbiAgICBsaXN0ZW4oZXZlbnQsIGNhbGxiYWNrLCBjdHgsIG9uY2UgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCB1dWlkID0gUGlSYW5kb20udXVpZCgneHh4LXh4Jyk7XG4gICAgICAgIGNhbGxiYWNrLmlkID0gdXVpZDtcblxuICAgICAgICB0aGlzLiNsaXN0LnB1c2goeyB1dWlkOiB1dWlkLCBldmVudDogZXZlbnQsIGNiOiBjYWxsYmFjaywgY3R4OiBjdHgsIG9uY2U6IG9uY2UgfSk7XG5cbiAgICAgICAgcmV0dXJuIHV1aWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVpeGEgZGUgb2JzZXJ2YXIgdW0gZXZlbnRvXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gTm9tZSBkbyBldmVudG9cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiAtIENhbGxiYWNrXG4gICAgICogQHJldHVybnMge1BpRXZlbnR9XG4gICAgICovXG4gICAgdW5saXN0ZW4oZXZlbnQsIGNiID0gJyonKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLiNsaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuI2xpc3RbaV07XG4gICAgICAgICAgICBpZiAoaXRlbS5ldmVudCA9PSBldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChjYiA9PT0gaXRlbS51dWlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuI2xpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoY2IgPT0gJyonIHx8IGNiLmlkID09IGl0ZW0uY2IuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jbGlzdC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSB1bSBldmVudG8gcGFyYSBzZXIgb2JzZXJ2YWRvIGFwZW5hcyB1bWEgdmV6XG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gTm9tZSBkbyBldmVudG9cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayAtIENhbGxiYWNrXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGN0eCAtIENvbnRleHRvIGRvIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge1BpRXZlbnR9XG4gICAgICovXG4gICAgb25jZShldmVudCwgY2FsbGJhY2ssIGN0eCkge1xuICAgICAgICByZXR1cm4gdGhpcy5saXN0ZW4oZXZlbnQsIGNhbGxiYWNrLCBjdHgsIHRydWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc3BhcmEgb3MgY2FsbGJhY2sgYXNzb2NpYWRvcyBhbyBldmVudG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBOb21lIGRvIGV2ZW50b1xuICAgICAqIEBwYXJhbSAgey4uLmFueX0gYXJncyAtIFBhcmFtZXRyb3MgZW52aWFkb3MgYW8gY2FsbGJhY2sgZG8gZXZlbnRvXG4gICAgICogQHJldHVybnMge1BpRXZlbnR9XG4gICAgICovXG4gICAgdHJpZ2dlcihldmVudCwgLi4uYXJncykge1xuICAgICAgICBsZXQgZXZlbnRzT25jZSA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuI2xpc3RbaV0uZXZlbnQgPT0gZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuI2xpc3RbaV07XG4gICAgICAgICAgICAgICAgaXRlbS5jYi5hcHBseShpdGVtLmN0eCwgYXJncyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5vbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50c09uY2UucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gZXZlbnRzT25jZS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdGhpcy51bmxpc3RlbihldmVudHNPbmNlW2ldLmV2ZW50LCBldmVudHNPbmNlW2ldLmNiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcmlmaWNhIHNlIGZvaSBhZGljaW9uYWRvIHVtIGV2ZW50b1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIE5vbWUgZG8gZXZlbnRvXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZXhpc3QoZXZlbnQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuI2xpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiNsaXN0W2ldLmV2ZW50ID09IGV2ZW50KSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXNlZWQobmFtZSwgZXZlbnQpIHtcbiAgICAgICAgaWYgKG5hbWUgaW5zdGFuY2VvZiBQaUV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNlZWRBbGwoZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpc3RlbihuYW1lLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV2ZW50LnRyaWdnZXIuY2FsbChldmVudCwgbmFtZSwgLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIF9yZXNlZWRBbGwoZXZlbnQpe1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy4jbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnROYW1lID0gdGhpcy4jbGlzdFtpXS5ldmVudDtcbiAgICAgICAgICAgIHRoaXMucmVzZWVkKGV2ZW50TmFtZSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIHRvZG9zIG9zIGV2ZW50b3NcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7UGlFdmVudH1cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy4jbGlzdCA9IFtdO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxufTsiLCJpbXBvcnQgUGlDb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgUGlTdGF0ZW1lbnQgZnJvbSBcIi4vc3RhdGVtZW50XCI7XG5pbXBvcnQgUGlUeXBlIGZyb20gXCIuL3R5cGVcIjtcbmltcG9ydCBQaU9iamVjdCBmcm9tIFwiLi9vYmplY3RcIjtcbmltcG9ydCB7IGhlbHBlcnMsIHRpbWVvdXQgfSBmcm9tIFwiLi9oZWxwZXJzXCI7XG5cbmNvbnN0IGhwcyA9IGhlbHBlcnM7XG5cbi8qKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpRXhwcmVzc2lvbiB7XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdGVtcGxhdGUgLSBUZW1wbGF0ZSBiYXNlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IodGVtcGxhdGUpIHtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxuICAgICAgICB0aGlzLl9yeEV4cHJlc3Npb24gPSBQaUNvbmZpZy5nZXQoJ2V4cHJlc3Npb24ueGxhbmd1YWdlJyk7XG4gICAgICAgIHRoaXMuX3J4VmFyaWFibGUgPSBQaUNvbmZpZy5nZXQoJ2V4cHJlc3Npb24ueHZhcmlhYmxlJyk7XG5cbiAgICAgICAgdGhpcy5fbG9hZCgpO1xuICAgIH1cblxuICAgIHNldERlbGltaXRlcnMocGF0dGVybil7XG4gICAgICAgIHRoaXMuX3J4RXhwcmVzc2lvbiA9IHBhdHRlcm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0b3JuYSB0b2RhcyBhcyBleHByZXNzw7VlcyBlbmNvbnRyYWRhcyBubyB0ZW1wbGF0ZSBiYXNlXG4gICAgICogXG4gICAgICogQHJldHVybnMge2FycmF5fVxuICAgICAqL1xuICAgIGdldCBhbGwoKSB7XG4gICAgICAgIGNvbnN0IGV4cHJlc3Npb25zID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9leHByZXNzaW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZXhwcmVzc2lvbnMucHVzaCh0aGlzLl9jbGVhcih0aGlzLl9leHByZXNzaW9uc1tpXS52YWx1ZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV4cHJlc3Npb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgdG9kYXMgYXMgdmFyacOhdmVpcyBlbmNvbnRyYWRhcyBkZW50cm8gZGFzIGV4cHJlc3PDtWVzXG4gICAgICogXG4gICAgICogQHJldHVybnMge2FycmF5fVxuICAgICAqL1xuICAgIGdldCB2YXJpYWJsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl92YXJpYWJsZXMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl92YXJpYWJsZXMgPSB0aGlzLl9leHRyYWN0QWxsVmFyaWFibGVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fdmFyaWFibGVzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgcmVzdWx0YWRvIGRvIHRlbXBsYXRlIHBhcnNlYWRvIGNvbSBvIGNvbnRleHRvIGluZm9ybWFkb1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcGFyc2UoY29udGV4dCwgdmFyaWFibGVzID0gW1tdLCBbXV0pIHtcbiAgICAgICAgbGV0IGV4cHJlc3Npb25zID0gdGhpcy5fZXhwcmVzc2lvbnM7XG4gICAgICAgIGxldCBwaHJhc2UgPSB0aGlzLl9waHJhc2U7XG5cbiAgICAgICAgY29uc3QgY29udGV4dFByb3BlcnR5TmFtZXMgPSBPYmplY3Qua2V5cyhjb250ZXh0KTtcbiAgICAgICAgY29uc3QgY29udGV4dFByb3BlcnR5VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhjb250ZXh0KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRleHRQcm9wZXJ0eVZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjb250ZXh0UHJvcGVydHlWYWx1ZXNbaV07XG4gICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnRleHRQcm9wZXJ0eVZhbHVlc1tpXSA9IHZhbHVlLmJpbmQoY29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXJpYWJsZXNbMF0gPSBjb250ZXh0UHJvcGVydHlOYW1lcy5jb25jYXQodmFyaWFibGVzWzBdKTtcbiAgICAgICAgdmFyaWFibGVzWzFdID0gY29udGV4dFByb3BlcnR5VmFsdWVzLmNvbmNhdCh2YXJpYWJsZXNbMV0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaHBzLmFsbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgaG9vayA9IGhwcy5hbGxbaV07XG5cbiAgICAgICAgICAgIHZhcmlhYmxlc1swXS5wdXNoKGhvb2tbMF0pO1xuICAgICAgICAgICAgdmFyaWFibGVzWzFdLnB1c2goaG9va1sxXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV4cHJlc3Npb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBleHByZXNzaW9uID0gZXhwcmVzc2lvbnNbaV07XG4gICAgICAgICAgICBjb25zdCBzdG10ID0gdGhpcy5fY2xlYXIoZXhwcmVzc2lvbi52YWx1ZSk7XG5cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IFBpU3RhdGVtZW50LmV4ZWNXaXRoVmFyaWFibGVzKHN0bXQsIHZhcmlhYmxlcywgY29udGV4dCk7XG5cbiAgICAgICAgICAgIGlmIChQaVR5cGUuaXNOdW1iZXIodmFsdWUpICYmIHZhbHVlID09IDApIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICcwJztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoUGlUeXBlLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwaHJhc2UgPSBwaHJhc2UucmVwbGFjZShleHByZXNzaW9uLmtleSwgUGlUeXBlLmlzQm9vbGVhbih2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlIHx8ICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwaHJhc2U7XG4gICAgfVxuXG4gICAgX2xvYWQoKSB7XG4gICAgICAgIHZhciB7IHBocmFzZSwgZXhwcmVzc2lvbnMgfSA9IHRoaXMuX2V4dHJhY3RQaHJhc2VBbmRFeHByZXNzaW9ucygpO1xuICAgICAgICB0aGlzLl9waHJhc2UgPSBwaHJhc2U7XG4gICAgICAgIHRoaXMuX2V4cHJlc3Npb25zID0gZXhwcmVzc2lvbnM7XG4gICAgfVxuXG4gICAgX2NsZWFyKGV4cHJlc3Npb24pIHtcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24ucmVwbGFjZSh0aGlzLl9yeEV4cHJlc3Npb24sIGZ1bmN0aW9uIChfLCBkYmVnaW4sIGJvZHksIGRlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBib2R5O1xuICAgICAgICB9KTtcblxuICAgICAgICBleHByZXNzaW9uID0gZXhwcmVzc2lvbi5yZXBsYWNlKHRoaXMuX3J4VmFyaWFibGUsIGZ1bmN0aW9uIChfLCBkYmVnaW4sIGJvZHksIGRlbmQpIHtcbiAgICAgICAgICAgIHJldHVybiBib2R5O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbi50cmltKCk7XG4gICAgfVxuXG4gICAgX2V4dHJhY3RQaHJhc2VBbmRFeHByZXNzaW9ucygpIHtcbiAgICAgICAgdmFyIGV4cHJlc3Npb25zID0gW107XG4gICAgICAgIHZhciBjb3VudGVyID0gMTtcbiAgICAgICAgdmFyIHBocmFzZSA9IHRoaXMuX3RlbXBsYXRlLnJlcGxhY2UodGhpcy5fcnhFeHByZXNzaW9uLCBmdW5jdGlvbiAoZXhwcmVzc2lvbkZvdW5kZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhYmxlID0gYF8kJHtjb3VudGVyKyt9X2A7XG5cbiAgICAgICAgICAgIGV4cHJlc3Npb25zLnB1c2goe1xuICAgICAgICAgICAgICAgIHZhbHVlOiBleHByZXNzaW9uRm91bmRlZCxcbiAgICAgICAgICAgICAgICBrZXk6IHZhcmlhYmxlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIHZhcmlhYmxlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4geyBwaHJhc2UsIGV4cHJlc3Npb25zIH07XG4gICAgfVxuXG4gICAgX2V4dHJhY3RBbGxWYXJpYWJsZXMoKSB7XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSB0aGlzLl90ZW1wbGF0ZS5tYXRjaCh0aGlzLl9yeFZhcmlhYmxlKSB8fCBbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhcmlhYmxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdiA9IHZhcmlhYmxlc1tpXTtcbiAgICAgICAgICAgIHZhcmlhYmxlc1tpXSA9IHYuc3Vic3RyKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhcmlhYmxlcztcbiAgICB9XG5cbiAgICBfZXh0cmFjdFZhcmlhYmxlcyhleHByZXNzaW9uKSB7XG4gICAgICAgIHZhciB2YXJpYWJsZXMgPSBleHByZXNzaW9uLm1hdGNoKHRoaXMuX3J4VmFyaWFibGUpIHx8IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFyaWFibGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCB2ID0gdmFyaWFibGVzW2ldO1xuICAgICAgICAgICAgdmFyaWFibGVzW2ldID0gdi5zdWJzdHIoMSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFyaWFibGVzO1xuICAgIH1cblxuICAgIF9leHRyYWN0VmFyaWFibGVzVmFsdWVzKHZhcmlhYmxlTmFtZXMsIGNvbnRleHQpIHtcbiAgICAgICAgY29uc3QgdmFyaWFibGVzID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXJpYWJsZU5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdmFyaWFibGVOYW1lc1tpXTtcblxuICAgICAgICAgICAgdmFyaWFibGVzLnB1c2goUGlPYmplY3QuZXh0cmFjdFZhbHVlKGNvbnRleHQsIG5hbWUpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YXJpYWJsZXM7XG4gICAgfVxuXG59IiwiaW1wb3J0ICBQaVR5cGUgZnJvbSBcIi4vdHlwZVwiO1xuXG5jb25zdCBzdG10UmFuZ2UxID0gL14oXFx3KylcXHMraW5cXHMrcmFuZ2VcXChcXHMqKC0/XFxkKylcXHMqXFwpJC9naTtcbmNvbnN0IHN0bXRSYW5nZTIgPSAvXihcXHcrKVxccytpblxccytyYW5nZVxcKFxccyooLT9cXGQrKVxccyosXFxzKigtP1xcZCspXFxzKlxcKSQvZ2k7XG5jb25zdCBzdG10UmFuZ2UzID0gL14oXFx3KylcXHMraW5cXHMrcmFuZ2VcXChcXHMqKC0/XFxkKylcXHMqLFxccyooLT9cXGQrKVxccyosXFxzKigtP1xcZCspXFxzKlxcKSQvZ2k7XG5jb25zdCBzdG10TGl0ZXJhbCA9IC9eKFxcdyspXFxzK2luXFxzKyhbMC05XSspJC9naTtcbmNvbnN0IHN0bXRQcm9wZXJ0eSA9IC9eKFxcdyspXFxzK2luXFxzKyhcXHcrKSQvZ2k7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpRm9yRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihzdG10KSB7XG4gICAgICAgIHRoaXMuX3N0bXQgPSBzdG10O1xuXG4gICAgICAgIHRoaXMuX2l0ZXJhYmxlQ291bnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9pdGVyYWJsZVByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgdGhpcy5faXRlcmFibGVTdGFydCA9IDA7XG4gICAgICAgIHRoaXMuX2l0ZXJhYmxlU3RlcCA9IDE7XG4gICAgICAgIHRoaXMuX2luZGV4TmFtZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2xvb3AgPSBudWxsO1xuICAgICAgICB0aGlzLl9lbmQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuX2xvYWQoKTtcbiAgICB9XG5cbiAgICBnZXQgb2JqZWN0SW50ZXJhYmxlTmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZXJhYmxlUHJvcGVydHk7XG4gICAgfVxuXG4gICAgbG9vcChmbikge1xuICAgICAgICB0aGlzLl9sb29wID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZW5kKGZuKSB7XG4gICAgICAgIHRoaXMuX2VuZCA9IGZuO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJ1bihjb3VudCA9IG51bGwpIHtcbiAgICAgICAgbGV0IGxlbmd0aCA9IDA7XG5cbiAgICAgICAgaWYgKGNvdW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IGNvdW50O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2l0ZXJhYmxlQ291bnQpIHtcbiAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMuX2l0ZXJhYmxlQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5faXRlcmFibGVTdGVwIDwgMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2l0ZXJhYmxlQ291bnQgLSB0aGlzLl9pdGVyYWJsZVN0YXJ0OyBpID49IDA7IGkgKz0gdGhpcy5faXRlcmFibGVTdGVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9vcCh0aGlzLl9pbmRleE5hbWUsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuX2l0ZXJhYmxlU3RhcnQ7IGkgPCBsZW5ndGg7IGkgKz0gdGhpcy5faXRlcmFibGVTdGVwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbG9vcCh0aGlzLl9pbmRleE5hbWUsIGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZW5kKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgX2xvYWROdW1iZXIobikge1xuICAgICAgICBjb25zdCBudW1iZXIgPSBwYXJzZUludChuKTtcbiAgICAgICAgY29uc3QgaXNOdW1iZXIgPSBQaVR5cGUuaXNOdW1iZXIobnVtYmVyKTtcblxuICAgICAgICBpZiAoaXNOdW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX2l0ZXJhYmxlQ291bnQgPSBudW1iZXI7XG4gICAgICAgICAgICB0aGlzLl9pdGVyYWJsZVByb3BlcnR5ID0gbnVsbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2l0ZXJhYmxlQ291bnQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5faXRlcmFibGVQcm9wZXJ0eSA9IG47XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfbG9hZCgpIHtcbiAgICAgICAgaWYgKHN0bXRSYW5nZTEudGVzdCh0aGlzLl9zdG10KSkge1xuICAgICAgICAgICAgdGhpcy5fbG9hZEZvclJhbmdlMSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0bXRSYW5nZTIudGVzdCh0aGlzLl9zdG10KSkge1xuICAgICAgICAgICAgdGhpcy5fbG9hZEZvclJhbmdlMigpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0bXRSYW5nZTMudGVzdCh0aGlzLl9zdG10KSkge1xuICAgICAgICAgICAgdGhpcy5fbG9hZEZvclJhbmdlMygpO1xuICAgICAgICB9IGVsc2UgaWYgKHN0bXRMaXRlcmFsLnRlc3QodGhpcy5fc3RtdCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRGb3JMaXRlcmFsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RtdFByb3BlcnR5LnRlc3QodGhpcy5fc3RtdCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRGb3JQcm9wZXJ0eSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgYFBpRm9yRGlyZWN0aXZlOiBTdGF0ZW1lbnQgaW52w6FsaWRhIHBhcmEgbGHDp28gZm9yID0gJHt0aGlzLl9zdG10fS4gUGFkcsOjbyBlc3BlcmFkbzogKHZhcmnDoXZlbCBpbiBsaXRlcmFsKSBvdSAodmFyacOhdmVsIGluIHJhbmdlKHRvdGFsWywgaW5pY2lvWywgcGFzc29dXSkpYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9sb2FkRm9yUmFuZ2UxKCkge1xuICAgICAgICB0aGlzLl9zdG10LnJlcGxhY2Uoc3RtdFJhbmdlMSwgKHN0bXQsIGluZGV4TmFtZSwgcHJvcGVydHlOYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkTnVtYmVyKHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9pbmRleE5hbWUgPSBpbmRleE5hbWU7XG5cbiAgICAgICAgICAgIHJldHVybiBzdG10O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbG9hZEZvclJhbmdlMigpIHtcbiAgICAgICAgdGhpcy5fc3RtdC5yZXBsYWNlKHN0bXRSYW5nZTIsIChzdG10LCBpbmRleE5hbWUsIHByb3BlcnR5TmFtZSwgc3RhcnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWROdW1iZXIocHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4TmFtZSA9IGluZGV4TmFtZTtcbiAgICAgICAgICAgIHRoaXMuX2l0ZXJhYmxlU3RhcnQgPSBwYXJzZUludChzdGFydCk7XG5cbiAgICAgICAgICAgIHJldHVybiBzdG10O1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfbG9hZEZvclJhbmdlMygpIHtcbiAgICAgICAgdGhpcy5fc3RtdC5yZXBsYWNlKHN0bXRSYW5nZTMsIChzdG10LCBpbmRleE5hbWUsIHByb3BlcnR5TmFtZSwgc3RhcnQsIHN0ZXApID0+IHtcbiAgICAgICAgICAgIHRoaXMuX2xvYWROdW1iZXIocHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4TmFtZSA9IGluZGV4TmFtZTtcbiAgICAgICAgICAgIHRoaXMuX2l0ZXJhYmxlU3RhcnQgPSBwYXJzZUludChzdGFydCk7XG4gICAgICAgICAgICB0aGlzLl9pdGVyYWJsZVN0ZXAgPSBwYXJzZUludChzdGVwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHN0bXQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9sb2FkRm9yUHJvcGVydHkoKSB7XG4gICAgICAgIHRoaXMuX3N0bXQucmVwbGFjZShzdG10UHJvcGVydHksIChzdG10LCBpbmRleE5hbWUsIHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fbG9hZE51bWJlcihwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgdGhpcy5faW5kZXhOYW1lID0gaW5kZXhOYW1lO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RtdDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2xvYWRGb3JMaXRlcmFsKCkge1xuICAgICAgICB0aGlzLl9zdG10LnJlcGxhY2Uoc3RtdExpdGVyYWwsIChzdG10LCBpbmRleE5hbWUsIHByb3BlcnR5TmFtZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5faXRlcmFibGVDb3VudCA9IHBhcnNlSW50KHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9pbmRleE5hbWUgPSBpbmRleE5hbWU7XG5cbiAgICAgICAgICAgIHJldHVybiBzdG10O1xuICAgICAgICB9KTtcbiAgICB9XG59OyIsImltcG9ydCBQaUZ1bmN0aW9uIGZyb20gJy4vZnVuY3Rpb24nXG5pbXBvcnQgUGlPYmplY3QgZnJvbSAnLi9vYmplY3QnXG5cbmNvbnN0IHN0bXRGb3JlYXJjaFdpdGhJbmRleCA9IC9eXFwoKFxcdyspXFxzKixcXHMqKFxcdyspXFwpXFxzK2luXFxzKyhcXHcrKFxcLlxcdyspKikkL2dpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaUZvckVhY2hEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHN0bXQsIGNvbnRleHQgPSB7fSwgZm4gPSBQaUZ1bmN0aW9uLm5vb3ApIHtcbiAgICAgICAgdGhpcy5fc3RtdCA9IHN0bXQ7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLl9mbiA9IGZuO1xuICAgICAgICB0aGlzLl9lbmQgPSBQaUZ1bmN0aW9uLm5vb3A7XG5cbiAgICAgICAgdGhpcy5fbG9hZCgpO1xuICAgIH1cblxuICAgIGdldCB2YXJpYWJsZUludGVyYWJsZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl92YXJpYWJsZUludGVyYWJsZU5hbWU7XG4gICAgfVxuXG4gICAgZ2V0IG9iamVjdEludGVyYWJsZU5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9vYmplY3RJbnRlcmFibGVOYW1lO1xuICAgIH1cblxuICAgIGxvb3AoZm4pIHtcbiAgICAgICAgdGhpcy5fZm4gPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBydW4oYXJyYXkgPSBudWxsLCBpbmRleEJlZ2luID0gMCwgaW5kZXhFbmQgPSAtMSwgc3RlcCA9IDEpIHtcbiAgICAgICAgY29uc3Qgb2JqZWN0SW50ZXJhYmxlID0gYXJyYXkgfHwgUGlPYmplY3QuZXh0cmFjdFZhbHVlKHRoaXMuX2NvbnRleHQsIHRoaXMuX29iamVjdEludGVyYWJsZU5hbWUpO1xuXG4gICAgICAgIGlmIChvYmplY3RJbnRlcmFibGUuY29uc3RydWN0b3IubmFtZSA9PSAnRnVuY3Rpb24nIHx8IG9iamVjdEludGVyYWJsZS5jb25zdHJ1Y3Rvci5uYW1lID09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JlYWNoRm4gPSBuZXcgRnVuY3Rpb24oJ190aGlzJywgJ29iaicsICd2bicsICdpeG4nLCAnZm4nLCBgZm9yKGNvbnN0IGkgaW4gb2JqKXtmbihvYmosIGksIHZuLCBpeG4pO31gKTtcbiAgICAgICAgICAgIGZvcmVhY2hGbih0aGlzLCBvYmplY3RJbnRlcmFibGUsIHRoaXMuX3ZhcmlhYmxlSW50ZXJhYmxlTmFtZSwgdGhpcy5fdmFyaWFibGVJbmRleE5hbWUsIHRoaXMuX2ZuKVxuICAgICAgICAgICAgdGhpcy5fZW5kKCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZm9yZWFjaEZuID0gbmV3IEZ1bmN0aW9uKCdfdGhpcycsICdhcnInLCAnaW5kZXhCZWdpbicsICdpbmRleEVuZCcsICdzdGVwJywgJ3ZuJywgJ2l4bicsICdmbicsIGBmb3IodmFyIGkgPSBpbmRleEJlZ2luIDsgaSA8IGluZGV4RW5kIDsgaSArPSBzdGVwKXtmbihhcnIsIGksIHZuLCBpeG4pO31gKTtcbiAgICAgICAgaWYgKGluZGV4RW5kID09IC0xKSB7XG4gICAgICAgICAgICBpbmRleEVuZCA9IG9iamVjdEludGVyYWJsZS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JlYWNoRm4odGhpcywgb2JqZWN0SW50ZXJhYmxlLCBpbmRleEJlZ2luLCBpbmRleEVuZCwgc3RlcCwgdGhpcy5fdmFyaWFibGVJbnRlcmFibGVOYW1lLCB0aGlzLl92YXJpYWJsZUluZGV4TmFtZSwgdGhpcy5fZm4pXG4gICAgICAgIHRoaXMuX2VuZCgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVuZChmbikge1xuICAgICAgICB0aGlzLl9lbmQgPSBmbjtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBfbG9hZCgpIHtcbiAgICAgICAgaWYgKHN0bXRGb3JlYXJjaFdpdGhJbmRleC50ZXN0KHRoaXMuX3N0bXQpKSB7XG4gICAgICAgICAgICB0aGlzLl9sb2FkRm9yZWFjaEluZGV4QW5kUHJvcGVydGllcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbG9hZEZvcmVhY2hQcm9wZXJ0aWVzKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIF9sb2FkRm9yZWFjaEluZGV4QW5kUHJvcGVydGllcygpIHtcbiAgICAgICAgdGhpcy5fc3RtdC5yZXBsYWNlKHN0bXRGb3JlYXJjaFdpdGhJbmRleCwgKHN0bXQsIGluZGV4TmFtZSwgcHJvcGVydHlOYW1lLCBpbnRlcmFibGVOYW1lKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl92YXJpYWJsZUludGVyYWJsZU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgICB0aGlzLl9vYmplY3RJbnRlcmFibGVOYW1lID0gaW50ZXJhYmxlTmFtZTtcbiAgICAgICAgICAgIHRoaXMuX3ZhcmlhYmxlSW5kZXhOYW1lID0gaW5kZXhOYW1lO1xuXG4gICAgICAgICAgICByZXR1cm4gc3RtdDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2xvYWRGb3JlYWNoUHJvcGVydGllcygpIHtcbiAgICAgICAgY29uc3Qgc3RtdCA9IHRoaXMuX3N0bXQ7XG4gICAgICAgIGNvbnN0IHRva2VucyA9IHN0bXQudHJpbSgpLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgaWYgKHRva2Vucy5sZW5ndGggIT0gMykge1xuICAgICAgICAgICAgdGhyb3cgYFBpRm9yRWFjaERpcmVjdGl2ZTogU3RhdGVtZW50IGludsOhbGlkYSBwYXJhIGxhw6dvIGZvcmVhY2ggPSAke3N0bXR9LiBQYWRyw6NvIGVzcGVyYWRvOiBbdmFyacOhdmVsIGluIGl0ZXLDoXZlbF0gb3UgWyhpbmRleCwgdmFyacOhdmVsKSBpbiBpdGVyw6F2ZWxdYDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3ZhcmlhYmxlSW5kZXhOYW1lID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdmFyaWFibGVJbnRlcmFibGVOYW1lID0gdG9rZW5zWzBdO1xuICAgICAgICB0aGlzLl9vYmplY3RJbnRlcmFibGVOYW1lID0gdG9rZW5zWzJdO1xuICAgIH1cbn07IiwiLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlGdW5jdGlvbiB7XG4gICAgLyoqXG4gICAgICogRnVuw6fDo28gdmF6aWFcbiAgICAgKi9cbiAgICBzdGF0aWMgbm9vcCgpIHsgfVxufTsiLCJpbXBvcnQgUGlUcmFuc2xhdGUgZnJvbSBcIi4vdHJhbnNsYXRlXCI7XG5cbmZ1bmN0aW9uIHRpbWVvdXQodGltZSwgZm4sIGN0eCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBmbi5jYWxsKGN0eCk7XG4gICAgfSwgdGltZSk7XG59XG5cbmZ1bmN0aW9uIHRpbWVvdXRTZWModGltZSwgZm4sIGN0eCkge1xuICAgIHRpbWVvdXQodGltZSAqIDEwMDAsIGZuLCBjdHgpO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZSh0aW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChmbiwgY3R4KSB7XG4gICAgICAgIHRpbWVvdXQodGltZSwgZm4sIGN0eCk7XG4gICAgfVxufVxuXG5jb25zdCBoZWxwZXJzID0ge1xuICAgIF9hbGw6IFtdLFxuXG4gICAgcmVnaXN0ZXIobmFtZSwgZm4pIHtcbiAgICAgICAgdGhpcy5fYWxsLnB1c2goW25hbWUsIGZuXSk7XG4gICAgfSxcblxuICAgIGdldCBhbGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGw7XG4gICAgfVxufTtcblxuaGVscGVycy5yZWdpc3RlcignXycsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUGlUcmFuc2xhdGUuZ2V0LmFwcGx5KFBpVHJhbnNsYXRlLCBhcmd1bWVudHMpO1xufSk7XG5cbmV4cG9ydCB7IHRpbWVvdXQsIHRpbWVvdXRTZWMsIGRlYm91bmNlLCBoZWxwZXJzIH07IiwiaW1wb3J0IHsgZ2xvYmFsIH0gZnJvbSAnLi9lbnYnXG5cbi8qKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IG5ldyBjbGFzcyBQaUluaXRpYWxpemUge1xuICAgICNyZWFkeUZuID0gW107XG4gICAgI2Jvb3RGbiA9IFtdO1xuICAgICNib290SW5pdCA9IFtdO1xuICAgICNib290U3RhcnQgPSBbXTtcbiAgICAjaXNMb2FkZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIC0gRnVuw6fDo28gcXVlIHNlcsOhIGV4ZWN1dGFkYSBubyBpbmljaW8gZG8gYm9vdFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtQaUluaXRpYWxpemV9XG4gICAgICovXG4gICAgYm9vdChmbikge1xuICAgICAgICB0aGlzLiNib290Rm4udW5zaGlmdChmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRnVuw6fDo28gZXhlY3V0YWRhIGFwb3MgbyBib290XG4gICAgICogXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gLSBDYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtQaUluaXRpYWxpemV9XG4gICAgICovXG4gICAgaW5pdChmbikge1xuICAgICAgICB0aGlzLiNib290SW5pdC51bnNoaWZ0KGZuKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGdW7Dp8OjbyBleGVjdXRhZGEgYXDDs3MgYSBpbmljaWFsaXphw6fDo29cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIENhbGxiYWNrXG4gICAgICogQHJldHVybnMge1BpSW5pdGlhbGl6ZX1cbiAgICAgKi9cbiAgICBzdGFydChmbikge1xuICAgICAgICB0aGlzLiNib290U3RhcnQudW5zaGlmdChmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0YSBhIHNlcXVlbmNpYSBkZSBpbmNpYWxpemHDp8OjbzogYm9vdCAtPiBjYWxsYmFjayAtPiByZWFkeVxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGxvYWQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgob2spID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC4kKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiNkaXNwYXRjaCh0aGlzLiNib290Rm4pO1xuICAgICAgICAgICAgICAgIHRoaXMuI2Rpc3BhdGNoKHRoaXMuI2Jvb3RJbml0KTtcbiAgICAgICAgICAgICAgICB0aGlzLiNkaXNwYXRjaCh0aGlzLiNib290U3RhcnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuI2Rpc3BhdGNoKHRoaXMuI3JlYWR5Rm4pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4jaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc7KScpXG4gICAgICAgICAgICAgICAgb2soKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGdW7Dp8OjbyBleGVjdXRhZGEgYXDDs3MgdG9kbyBwcm9jZXNzbyBkZSBpbmljaWFsaXphw6fDo29cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiAtIEZ1bsOnw6NvIHF1ZSBzZXLDoSBleGVjdXRhZGEgZGVwb2lzIHF1ZSBvIHNpc3RlbWEgZXN0aXZlciBpbmljaWFsaXphZG9cbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICByZWFkeSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChvaywgZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy4jaXNMb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBvaygpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4jcmVhZHlGbi51bnNoaWZ0KG9rKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgI2Rpc3BhdGNoKGFycikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJyW2ldKCk7XG4gICAgICAgIH1cbiAgICB9XG59OyIsImltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAnLi9lbnYnO1xuaW1wb3J0IFBpQ2xhc3MgZnJvbSAnLi9jbGFzcydcbmltcG9ydCBQaUFjdGlvbiBmcm9tICcuL2FjdGlvbidcbmltcG9ydCBQaU9iamVjdCBmcm9tICcuL29iamVjdCc7XG5pbXBvcnQgUGlDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnQnXG5pbXBvcnQgUGlTdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IFBpQ29uZmlnIGZyb20gJy4vY29uZmlnJztcbmltcG9ydCBQaVVybCBmcm9tICcuL3VybCc7XG5pbXBvcnQgUGlBcHAgZnJvbSAnLi9hcHAnO1xuaW1wb3J0IFBpVHlwZSBmcm9tICcuL3R5cGUnO1xuXG4vKipcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaU1vZGVsIHtcbiAgICAjcGFyYW1ldGVycyA9IG51bGw7XG4gICAgI2FjdGlvbkxpc3QgPSBbXTtcbiAgICAjdmFsaWRhdG9yTGlzdCA9IFtdO1xuICAgICNiYXNlVXJsID0gJyc7XG5cbiAgICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuI2FjdGlvbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy4jdmFsaWRhdG9yTGlzdCA9IFtdO1xuICAgICAgICB0aGlzLiNiYXNlVXJsID0gJyc7XG5cbiAgICAgICAgaWYgKFBpVHlwZS5pc09iamVjdChhcmdzWzBdKSkge1xuICAgICAgICAgICAgUGlPYmplY3QuZXh0ZW5kQW5kQ2FsbCh0aGlzLCBhcmdzWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3BhcmFtZXRlcnMgPSBhcmdzWzBdID09IHVuZGVmaW5lZCA/IHt9IDogYXJnc1swXTtcblxuICAgICAgICB0aGlzLmluaXQoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgZ2V0QmFzZVVybCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2Jhc2VVcmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZXRhIGFzIHByb3ByaWVkYWRlcyBkbyBvYmpldG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2pzb259IGpzb24gLSBPYmpldG8gYSBzZXIgaW5qZXRhZG8gbm8gb2JqZXRvIGF0dWFsXG4gICAgICogQHJldHVybnMge3RoaXN9XG4gICAgICovXG4gICAgX2luamVjdChqc29uKSB7XG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIGpzb24pIHtcbiAgICAgICAgICAgIHRoaXNbcHJvcGVydHldID0ganNvbltwcm9wZXJ0eV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbG9uYSBvIG9iamV0byBhdHVhbFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIGNsb25lKCkge1xuICAgICAgICB0aGlzLmNsb25lV2lsbExvYWQoKTtcbiAgICAgICAgbGV0IGpzb24gPSB0aGlzLnRvSnNvbigpO1xuICAgICAgICBsZXQgY2xvbmUgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihqc29uKTtcbiAgICAgICAgdGhpcy5jbG9uZURpZExvYWQoY2xvbmUpO1xuXG4gICAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG5cbiAgICBjbG9uZURpZExvYWQoKSB7XG5cbiAgICB9XG5cbiAgICBjbG9uZVdpbGxMb2FkKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JpYSB1bWEgbm92YSBpbnN0YW5jaWEgZGEgY2xhc3NlXG4gICAgICogXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzIFxuICAgICAqIEByZXR1cm5zIHt0aGlzfVxuICAgICAqL1xuICAgIHN0YXRpYyBjcmVhdGUoLi4uYXJncykge1xuICAgICAgICByZXR1cm4gbmV3IHRoaXMoLi4uYXJncyk7XG4gICAgfVxuXG4gICAgY3JlYXRlKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKC4uLmFyZ3MpO1xuICAgIH1cblxuICAgIHRvSnNvbigpIHtcbiAgICAgICAgdGhpcy5qc29uV2lsbENvbnZlcnQoKTtcbiAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMpKTtcbiAgICAgICAgdGhpcy5qc29uRGlkQ29udmVydChqc29uKTtcblxuICAgICAgICByZXR1cm4ganNvbjtcbiAgICB9XG5cbiAgICBqc29uRGlkQ29udmVydChqc29uKSB7XG5cbiAgICB9XG5cbiAgICBqc29uV2lsbENvbnZlcnQoKSB7XG5cbiAgICB9XG5cbiAgICBpbnN0YW5jZXMoKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXphIGFzIHJvdGFzXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVybCBiYXNlIHV0aWxpemFkYSBwZWxhcyBhY3Rpb25zIHBhcmEgYXMgcmVxdWVzdHNcbiAgICAgKi9cbiAgICBpbml0KHVybCkge1xuICAgICAgICB0aGlzLl9sb2FkQWN0aW9ucygpO1xuICAgICAgICB0aGlzLl9sb2FkVmFsaWRhdGlvbnMoKTtcblxuICAgICAgICB0aGlzLl9jb25maWdVcmwodXJsIHx8IHRoaXMuI3BhcmFtZXRlcnMudXJsIHx8ICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmpldGEgbyBqc29uIGRlbnRybyBkYSBtb2RlbFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBqc29uIC0gSnNvbiBhIHNlciBpbmpldGFkbyBubyBtb2RlbG9cbiAgICAgKiBAcmV0dXJucyB7UGlNb2RlbH1cbiAgICAgKi9cbiAgICBpbml0V2l0aEpzb24oanNvbikge1xuICAgICAgICB0aGlzLl9pbmplY3QoanNvbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRpY2lvbmEgdW1hIGFjdGlvblxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gTm9tZSBkYSByb3RhXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0bXQgLSBSb3RhIG5vIGZvcm1hdG86IE1FVEhPRDovcm91dGU/cXVlcnlzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7UGlNb2RlbH1cbiAgICAgKi9cbiAgICBhZGRBY3Rpb24obmFtZSwgc3RtdCkge1xuICAgICAgICBjb25zdCBhY3Rpb24gPSBuZXcgUGlBY3Rpb24oe1xuICAgICAgICAgICAgYWN0aW9uTmFtZTogbmFtZSxcbiAgICAgICAgICAgIGFjdGlvblN0bXQ6IHN0bXQsXG4gICAgICAgICAgICBtb2RlbDogdGhpc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiNhY3Rpb25MaXN0W25hbWVdID0gYWN0aW9uO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkaWNpb25hIHVtYSByZWdyYSBkZSB2YWxpZGHDp8OjbyBwYXJhIHVtYSBwcm9wcmllZGFkZSBkYSBtb2RlbFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIC0gUHJvcHJpZWRhZGUgZGEgbW9kZWxcbiAgICAgKiBAcGFyYW0ge1BpVmFsaWRhdG9yfSBydWxlIC0gQ2xhc3NlIHF1ZSBpbXBsZW1lbnRhIGEgcmVncmEgZGUgdmFsaWRhw6fDo29cbiAgICAgKiBAcmV0dXJucyB7UGlNb2RlbH1cbiAgICAgKi9cbiAgICBhZGRWYWxpZGF0b3IobmFtZSwgcnVsZSkge1xuICAgICAgICB0aGlzLiN2YWxpZGF0b3JMaXN0W25hbWVdID0gcnVsZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRvcm5hIHVtIG9iamV0byBsaXRlcmFsIGNvbnRlbmRvIHRvZGFzIGFzIHJlZ3JhcyBkZSB2YWxpZGHDp8Ojb1xuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgdmFsaWRhdG9ycygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgdW0gb2JqZXRvIGxpdGVyYWwgY29udGVuZG8gdG9kYXMgYXMgYWN0aW9uc1xuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgYWN0aW9ucygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSB1bSB2YWxvciBwYXJhIHVtYSBwcm9wcmllZGFkZS5cbiAgICAgKiBFc3RlIG3DqXRvZG8gZGlzcGFyYSBhIGV4ZWN1w6fDo28gZGEgdmFsaWRhw6fDo28gXG4gICAgICogZGUgcHJvcHJpZWRhZGUgYW50ZXMgZGUgaW5zZXJpciBvIHZhbG9yXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIE5vbWUgZGEgcHJvcHJpZWRhZGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSBWYWxvciBkYSBwcm9wcmllZGFkZVxuICAgICAqIEByZXR1cm5zIHtQaU1vZGVsfVxuICAgICAqL1xuICAgIHNldFByb3BlcnR5KGtleSwgdmFsdWUsIHR5cGUpIHtcbiAgICAgICAgY29uc3QgbmFtZXMgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgbGV0IGlzQ29tcG9zZWQgPSBuYW1lcy5sZW5ndGggPiAxLFxuICAgICAgICAgICAgcnVsZSA9IHRoaXMuI3ZhbGlkYXRvckxpc3Rba2V5XTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2ludCc6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChpc0NvbXBvc2VkKSB7XG4gICAgICAgICAgICBsZXQgbGFzdCA9IG5hbWVzW25hbWVzLmxlbmd0aCAtIDFdLFxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gUGlPYmplY3QuZXh0cmFjdFByb3BlcnR5Q29udGV4dCh0aGlzLCBrZXkpO1xuXG4gICAgICAgICAgICBpZiAocHJvcGVydHkgaW5zdGFuY2VvZiBQaU1vZGVsKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHkuc2V0UHJvcGVydHkobGFzdCwgdmFsdWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocHJvcGVydHlbbGFzdF0gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eVtsYXN0XSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlbbGFzdF0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChydWxlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzW2tleV0gaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2tleV0odmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcnVsZS5sb2FkKHRoaXMsIGtleSwgdmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHJ1bGUuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHJ1bGUubGFiZWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5zZXJlIGEgbW9kZWwgY2FzbyBpZCBzZWphIHplcm8gb3UgYXR1YWxpemEgYSBtb2RlbCBcbiAgICAgKiBjYXNvIG8gdmFsb3IgZG8gaWQgc2VqYSBtYWlvciBxdWUgemVyb1xuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtQaVByb21pc2V9XG4gICAgICovXG4gICAgc2F2ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaWQgPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5pbnNlcnQoKVxuICAgICAgICBlbHNlIGlmICh0aGlzLmlkID09IDApIHJldHVybiB0aGlzLmluc2VydCgpO1xuICAgICAgICBlbHNlIHJldHVybiB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgdW1hIGFjdGlvbiBwZWxvIG5vbWVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSAtIE5vbWUgZGEgYWN0aW9uXG4gICAgICogQHJldHVybnMge1BpQWN0aW9ufVxuICAgICAqL1xuICAgIGdldEFjdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNhY3Rpb25MaXN0W25hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlbnRhciBpbmpldGFyIG9zIGRhdGEtbW9kZWxzIGRvIGNvbXBvbmVudCBuYSBtb2RlbCBjYXNvIG8gcGFyYW1ldHJvIHNlamEgdW0gUGlDb21wb25lbnQuXG4gICAgICogUmV0b3JuYSBlbSB1bSBhcnJheSBzdHJpbmcgY29tIHRvZG9zIG9zIGVycm9zIGVuY29udHJhZG9zLlxuICAgICAqIFNlIG8gcGFyYW1ldHJvIGZvciB1bSBqc29uIGVsZSBpcmEgaW5qZXRhciBhcyBwcm9wcmllZGFkZXMgbmEgbW9kZWwuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtQaUNvbXBvbmVudH0gY29tcG9uZW50XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgXG4gICAgICogQHJldHVybnMge2FycmF5fVxuICAgICAqL1xuICAgIGluamVjdChjb21wb25lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgUGlDb21wb25lbnQgfHwgY29tcG9uZW50IGluc3RhbmNlb2YgUGlBcHApIHtcbiAgICAgICAgICAgIGxldCBuYW1lcyA9IFBpU3RyaW5nLmNsaXBzKGNvbXBvbmVudC5lbGVtZW50LmlubmVySFRNTCwgJ2RhdGEtbW9kZWw9XCInLCAnXCInKSxcbiAgICAgICAgICAgICAgICBpc0NvbXBvbmVudCA9IGZhbHNlLFxuICAgICAgICAgICAgICAgIGVycm9ycyA9IFtdO1xuXG4gICAgICAgICAgICBvcHRpb25zID0gUGlPYmplY3QuZXh0ZW5kKHt9LCB7XG4gICAgICAgICAgICAgICAgaW52YWxpZElucHV0Q2xhc3M6ICdpbnZhbGlkLWZlZWRiYWNrJ1xuICAgICAgICAgICAgfSwgb3B0aW9ucyk7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHkgPSBuYW1lc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IGNvbXBvbmVudC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW1vZGVsPVwiJyArIHByb3BlcnR5ICsgJ1wiXScpLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZmlyc3RDaGlsZCAmJiBlbGVtZW50LmZpcnN0Q2hpbGQuX2hhc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGVsZW1lbnQuZmlyc3RDaGlsZC5fY29tcG9uZW50LmdldCgpO1xuICAgICAgICAgICAgICAgICAgICBpc0NvbXBvbmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbGVtZW50Ll9oYXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBlbGVtZW50Ll9jb21wb25lbnQuZ2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIGlzQ29tcG9uZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpc0NvbXBvbmVudCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGVsZW1lbnQuZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIG5leHRFbGVtZW50ID0gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRNZXNzYWdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAobmV4dEVsZW1lbnQgJiYgbmV4dEVsZW1lbnQuaGFzQXR0cmlidXRlKCd2YWxpZGF0aW9uLW1lc3NhZ2UnKSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50TWVzc2FnZSA9IG5leHRFbGVtZW50O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRNZXNzYWdlLnNldEF0dHJpYnV0ZSgndmFsaWRhdGlvbi1tZXNzYWdlJywgJycpO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGVsZW1lbnRNZXNzYWdlLCBlbGVtZW50Lm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5zZXRDdXN0b21WYWxpZGl0eSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50TWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRNZXNzYWdlLmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRNZXNzYWdlLmNsYXNzTGlzdC5yZW1vdmUob3B0aW9ucy5pbnZhbGlkSW5wdXRDbGFzcyk7XG4gICAgICAgICAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dhcy12YWxpZGF0ZWQnKTtcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJvcGVydHkocHJvcGVydHksIHZhbHVlLCBlbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJykpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKG1zZykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50TWVzc2FnZS5pbm5lckhUTUwgPSBtc2c7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRNZXNzYWdlLmNsYXNzTGlzdC5hZGQob3B0aW9ucy5pbnZhbGlkSW5wdXRDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRNZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldEN1c3RvbVZhbGlkaXR5KG1zZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2gobXNnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBlcnJvcnM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50IGluc3RhbmNlb2YgUGlNb2RlbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2luamVjdChjb21wb25lbnQudG9Kc29uKCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmplY3QoY29tcG9uZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICByZXF1ZXN0V2lsbEdldChqc29uKSB7XG5cbiAgICB9XG5cbiAgICBqc29uRGlkQ29udmVydChqc29uKSB7XG5cbiAgICB9XG5cbiAgICByZXF1ZXN0RGlkR2V0KGpzb24pIHtcblxuICAgIH1cblxuICAgIHJlcXVlc3RXaWxsUG9zdChqc29uKSB7XG5cbiAgICB9XG5cbiAgICByZXF1ZXN0RGlkUG9zdChqc29uKSB7XG5cbiAgICB9XG5cbiAgICByZXNwb25zZVN1Y2Nlc3NXaWxsTG9hZChhY3Rpb24sIHVybCwgZGF0YSkge1xuICAgICAgICB0aGlzLnJlc3BvbnNlU3VjY2Vzcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJlc3BvbnNlU3VjY2VzcyhhY3Rpb24sIHVybCwgLi4uYXJncykge1xuICAgICAgICBhY3Rpb24ucHJvY2Vzc1N1Y2Nlc3NSZXNwb25zZS5hcHBseShhY3Rpb24sIGFyZ3MpO1xuICAgICAgICB0aGlzLnJlc3BvbnNlU3VjY2Vzc0RpZExvYWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXNwb25zZVN1Y2Nlc3NEaWRMb2FkKCkge1xuXG4gICAgfVxuXG4gICAgcmVzcG9uc2VFcnJvcldpbGxMb2FkKGFjdGlvbiwgdXJsLCBkYXRhKSB7XG4gICAgICAgIHRoaXMucmVzcG9uc2VFcnJvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHJlc3BvbnNlRXJyb3IoYWN0aW9uLCB1cmwsIC4uLmFyZ3MpIHtcbiAgICAgICAgYWN0aW9uLnByb2Nlc3NFcnJvclJlc3BvbnNlLmFwcGx5KGFjdGlvbiwgYXJncyk7XG4gICAgICAgIHRoaXMucmVzcG9uc2VFcnJvckRpZExvYWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICByZXNwb25zZUVycm9yRGlkTG9hZCgpIHtcblxuICAgIH1cblxuICAgIF9sb2FkQWN0aW9ucygpIHtcbiAgICAgICAgY29uc3QgdXNlckFjdGlvbnMgPSB0aGlzLmFjdGlvbnMoKTtcbiAgICAgICAgY29uc3QgZGVmYXVsdEFjdGlvbnMgPSB7XG4gICAgICAgICAgICAnYWRkJzogJ1BPU1Q6LycsXG4gICAgICAgICAgICAnaW5zZXJ0JzogJ1BPU1Q6LycsXG4gICAgICAgICAgICAndXBkYXRlJzogJ1BVVDovOmlkJyxcbiAgICAgICAgICAgICdyZW1vdmUnOiAnUkVNT1ZFOi86aWQnLFxuICAgICAgICAgICAgJ2dldCc6ICdHRVQ6LzppZCcsXG4gICAgICAgICAgICAnZmluZCc6ICdHRVQ6L2ZpbmQvOmlkJyxcbiAgICAgICAgICAgICdhbGwnOiAnR0VUOi8nXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGFjdGlvbnMgPSBQaU9iamVjdC5leHRlbmQoe30sIGRlZmF1bHRBY3Rpb25zLCB1c2VyQWN0aW9ucyk7XG5cbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBhY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEFjdGlvbihuYW1lLCBhY3Rpb25zW25hbWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jb25maWdVcmwodXJsKSB7XG4gICAgICAgIGNvbnN0IG1vZGVsVXJsID0gUGlDb25maWcuZ2V0KCdtb2RlbC51cmwnKTtcblxuICAgICAgICBpZiAobW9kZWxVcmwgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJhc2VVcmwodXJsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmFzZVVybChtb2RlbFVybCArIHVybCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRCYXNlVXJsKHVybCkge1xuICAgICAgICBpZiAodXJsID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy4jYmFzZVVybCA9IFBpVXJsLmNyZWF0ZSgnbG9jYWxob3N0JykuaHJlZigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jYmFzZVVybCA9IHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9sb2FkVmFsaWRhdGlvbnMoKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvcnMgPSB0aGlzLnZhbGlkYXRvcnMoKTtcbiAgICAgICAgZm9yICh2YXIgdiBpbiB2YWxpZGF0b3JzKSB7XG4gICAgICAgICAgICB0aGlzLmFkZFZhbGlkYXRvcih2LCB2YWxpZGF0b3JzW3ZdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyByZWdpc3Rlcihtb2RlbCkge1xuICAgICAgICByZWdpc3Rlcihtb2RlbClcbiAgICB9XG59OyIsIkhUTUxFbGVtZW50LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIHRoaXMudHlwZSA9PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIHRoaXMudHlwZSA9PSAncmFkaW8nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMudmFsdWU7XG59O1xuXG5IVE1MUHJlRWxlbWVudC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmlubmVySFRNTDtcbn07XG5cbkhUTUxQcmVFbGVtZW50LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodikge1xuICAgIHRoaXMuaW5uZXJIVE1MID0gdjtcbn07XG5cbkhUTUxFbGVtZW50LnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodikge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc3JjJywgdik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaHJlZicsIHYpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIHRoaXMudHlwZSA9PSAnY2hlY2tib3gnKSB7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHY7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgdGhpcy50eXBlID09ICdyYWRpbycpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdjtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2O1xufTsiLCJpbXBvcnQgUGlSYW5kb20gZnJvbSAnLi9yYW5kb20nXG5pbXBvcnQgUGlTdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuXG4vKipcbiAqIEBjbGFzc1xuICogQG5hbWUgUGlPYmplY3RcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlPYmplY3Qge1xuXG4gICAgLyoqXG4gICAgICogQWRpY2lvbmEgZSBjaGFtYSB0b2RhcyBhcyBwcm9wcmllZGFkZXMgY29tIG5vbWUgZGUgZnVuw6fDo28gZG9zIGFyZ3VtZW50b3Mgbm8gcHJpbWVpcm8gcGFyYW1ldHJvXG4gICAgICogXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZXh0ZW5kQW5kQ2FsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRzdCA9IGFyZ3VtZW50c1swXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBvYmogPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICAgIGZvciAobGV0IHAgaW4gb2JqKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkc3RbcF0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBkc3RbcF0ob2JqW3BdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkc3RbcF0gPSBvYmpbcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRzdDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWkgbyBjb250ZXh0byBvbmRlIHByb3ByaWVkYWRlIGV4aXN0ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBvYmpldG9cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgLSBwYXRoIGRhIHByb3ByaWVkYWRlXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZXh0cmFjdFByb3BlcnR5Q29udGV4dCA9IGZ1bmN0aW9uIChvYmosIHByb3BlcnR5KSB7XG4gICAgICAgIGxldCBwID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgICAgICBpZiAocC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG0gPSBwW2ldO1xuICAgICAgICAgICAgICAgIGlmIChvYmpbbV0gPT0gdW5kZWZpbmVkKSBvYmpbbV0gPSB7fTtcbiAgICAgICAgICAgICAgICBvYmogPSBvYmpbbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoYW1hIHVtYSBmdW7Dp8OjbyBkZSBjYWxsYmFjayBzZW1wcmUgcXVlIGEgcHJvcHJpZWRhZGUgZG8gb2JqZXRvIGZvciBhbHRlcmFkYVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBPYmpldG8gYmFzZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwcm9wZXJ0eSAtIE5vbWUgZGEgcHJvcHJpZWRhZGUgYSBzZXIgbW9uaXRvcmFkYVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gQ2FsbGJhY2sgZXhlY3V0YWRvIHNlbXByZSBhIGEgcHJvcHJpZWRhZGUgw6kgYWx0ZXJhZGFcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtkZWVwID0gdHJ1ZV0gZGVlcCAtIERlZmluZSBzZSBhcyBwcm9wcmllZGFkZXMgYWNpbWEgdGFtYmVtIHNlcsOjbyBvYnNlcnZhZGFzXG4gICAgICovXG4gICAgc3RhdGljIG9uID0gZnVuY3Rpb24gKG9iaiwgcHJvcGVydHksIGNhbGxiYWNrLCBkZWVwID0gdHJ1ZSkge1xuICAgICAgICBsZXQgY3VycmVudFZhbHVlID0gUGlPYmplY3QuZXh0cmFjdFZhbHVlKG9iaiwgcHJvcGVydHkpO1xuICAgICAgICBsZXQgcGF0aCA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICAgICAgaWYgKG9iai5fX29uU2V0TGlzdCA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIG9iai5fX29uU2V0TGlzdCA9IFtdO1xuICAgICAgICAgICAgb2JqLl9fb25TZXRGbiA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9iai5fX29uU2V0Rm5bcHJvcGVydHldID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgb2JqLl9fb25TZXRGbltwcm9wZXJ0eV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0ID0gb2JqLl9fb25TZXRMaXN0LmZpbmQocCA9PiBwID09IHByb3BlcnR5KSAhPT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIWV4aXN0KSB7XG4gICAgICAgICAgICBjb25zdCBfb2JqID0gUGlPYmplY3QuZXh0cmFjdFByb3BlcnR5Q29udGV4dChvYmosIHByb3BlcnR5KTtcbiAgICAgICAgICAgIGNvbnN0IF9wcm9wZXJ0eSA9IFBpU3RyaW5nLmxhc3QocHJvcGVydHksICcuJyk7XG5cbiAgICAgICAgICAgIGlmICghKF9wcm9wZXJ0eSA9PSAnbGVuZ3RoJyAmJiBQaVR5cGUuaXNBcnJheShfb2JqKSkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoX29iaiwgX3Byb3BlcnR5LCB7XG4gICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VmFsdWUgPSB2YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyRm4gPSBvYmouX19vblNldEZuW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyRm4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJGbltpXS5jYih2YWx1ZSwgcHJvcGVydHkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBvYmouX19vblNldExpc3QucHVzaChwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpZCA9IFBpUmFuZG9tLnV1aWQoJ3h4eC14eHgnKTtcbiAgICAgICAgbGV0IGlkcyA9IFtpZF07XG4gICAgICAgIG9iai5fX29uU2V0Rm5bcHJvcGVydHldLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgY2I6IGNhbGxiYWNrXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChkZWVwICYmIHBhdGgubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcGF0aC5wb3AoKTtcbiAgICAgICAgICAgIGNvbnN0IF9pZHMgPSBQaU9iamVjdC5vbihvYmosIHBhdGguam9pbignLicpLCBjYWxsYmFjayk7XG4gICAgICAgICAgICBpZHMgPSBpZHMuY29uY2F0KF9pZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGlkcztcbiAgICB9XG5cbiAgICBzdGF0aWMgb2ZmID0gZnVuY3Rpb24gKG9iaiwgaWRzKSB7XG4gICAgICAgIGlmIChvYmouX19vblNldEZuID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBvYmouX19vblNldEZuKSB7XG4gICAgICAgICAgICBjb25zdCBhcnIgPSBvYmouX19vblNldEZuW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGFycltpXTtcbiAgICAgICAgICAgICAgICBpZiAoaWRzLmZpbmQoZSA9PiBlID09IGl0ZW0uaWQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWkgbyB2YWxvciBkZSB1bWEgcHJvcHJpZWRhZGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gb2JqZXRvXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHByb3BlcnR5IC0gcGF0aCBkYSBwcm9wcmllZGFkZVxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGV4dHJhY3RWYWx1ZSA9IGZ1bmN0aW9uIChvYmosIHByb3BlcnR5KSB7XG4gICAgICAgIGNvbnN0IHAgPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuXG4gICAgICAgIGlmIChwLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG9iaiA9IG9ialtwW2ldXVxuICAgICAgICAgICAgICAgIGlmIChvYmogPT0gdW5kZWZpbmVkKSBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcGVydHldO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXRyaWJ1aSB1bSB2YWxvciBhIHVtYSBwcm9wcmllZGFkZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogLSBvYmpldG9cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcGVydHkgLSBwYXRoIGRhIHByb3ByaWRhZGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdmFsdWUgLSB2YWxvciBhIHNlciBpbnNlcmlkbyBuYSBwcm9wcmllZGFkZVxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRQcm9wZXJ0eSA9IGZ1bmN0aW9uIChvYmosIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBwID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgICAgICBpZiAocC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0UHJvcGVydHkgPSBwW3AubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgb2JqID0gb2JqW3BbaV1dXG4gICAgICAgICAgICAgICAgaWYgKG9iaiA9PSB1bmRlZmluZWQpIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBvYmpbbGFzdFByb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW3Byb3BlcnR5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRpY2lvbmEgdG9kYXMgYXMgcHJvcHJpZWRhZGVzIGUgbWV0b2RvcyBkZSB0b2RvcyBvcyBwYXJhbWV0cm9zIG5vIHByaW1laXJvXG4gICAgICogXG4gICAgICogQG1ldGhvZCBQaU9iamVjdC5leHRlbmRcbiAgICAgKiBAcGFyYW0ge2FyZ3VtZW50c30gYXJnXG4gICAgICogQHJldHVybiB7b2JqZWN0fVxuICAgICAqL1xuICAgIHN0YXRpYyBleHRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgb2JqID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgdiBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBhcmd1bWVudHNbMF1bdl0gPSBvYmpbdl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICAgIH1cbn07IiwiaW1wb3J0IFBpQ2xhc3MgZnJvbSAnLi9jbGFzcydcbmltcG9ydCB7IHJlZ2lzdGVyIH0gZnJvbSAnLi9lbnYnO1xuXG4vKipcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaVByb21pc2UgZXh0ZW5kcyBQaUNsYXNzIHtcbiAgICAjaXNPbmNlID0gZmFsc2U7XG4gICAgI3Byb21pc2UgPSB0aGlzLm5ld1Byb21pc2UoKTtcblxuICAgIGluc3RhbmNlcygpIHtcbiAgICAgICAgdGhpcy5jbGVhcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVzcGVyYSBhdMOpIHF1ZSB0b2RhcyBhcyBwcm9taXNlcyBpbmZvcm1hZGFzIHBvciBwYXJhbWV0cm9cbiAgICAgKiBzZWphbSByZXNvbHZpZGFzLiBDaGFtYSBvIGNhbGxiYWNrIGRlIG9rIGNhc28gaGFqYSBzdWNlc3NvXG4gICAgICogZW0gdG9kb3Mgb3MgcmV0b3Jub3MuIENhc28gaGFqYSB1bSBlcnJvIHJldG9ybmEgbyBjYWxsYmFjayBkZSBlcnJvclxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtQaVByb21pc2V9XG4gICAgICovXG4gICAgc3RhdGljIHdhaXQocHJvbWlzZXMgPSBudWxsKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFBpUHJvbWlzZSgpO1xuICAgICAgICB2YXIgY291bnQgPSAwO1xuICAgICAgICB2YXIgc3VjY2VzcyA9IHRydWU7XG4gICAgICAgIHZhciBhcnIgPSBwcm9taXNlcyB8fCBhcmd1bWVudHM7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFycltpXS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSBhcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPyBwcm9taXNlLnJlc29sdmUoKSA6IHByb21pc2UucmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0b3JuYSB1bWEgcHJvbWlzZSBuYXRpdmEgYXNzb2NpYWRhIGEgaW5zdGFuY2lhXG4gICAgICogXG4gICAgICogQHJldHVybnMgUHJvbWlzZVxuICAgICAqL1xuICAgIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3Byb21pc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JpYSB1bWEgcHJvbWlzZSBuYXRpdmEgYXNzb2NpYWRhIGEgaW5zdGFuY2lhXG4gICAgICogXG4gICAgICogQHJldHVybnMgUHJvbWlzZVxuICAgICAqL1xuICAgIG5ld1Byb21pc2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9rKHJlc29sdmUpO1xuICAgICAgICAgICAgdGhpcy5lcnJvcihyZWplY3QpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNvbHZlIGEgcHJvbWlzZVxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtQaVByb21pc2V9XG4gICAgICovXG4gICAgcmVzb2x2ZSgpIHtcbiAgICAgICAgdGhpcy5fYXJnT2sgPSBhcmd1bWVudHM7XG5cbiAgICAgICAgdGhpcy5fY2FsbE9rKCk7XG4gICAgICAgIHRoaXMuX2NhbGxPbmNlKCk7XG4gICAgICAgIHRoaXMuX2NhbGxEb25lKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuI2lzT25jZSkge1xuICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqIFZpbmN1bGEgdW1hIHByb21pc2Ugw6AgcHJvbWlzZSBhdHVhbFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtQaVByb21pc2V9XG4gICAgICovXG4gICAgbGluayhwcm9taXNlKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHByb21pc2Uub2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5yZXNvbHZlLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb21pc2UuZXJyb3IoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5yZWplY3QuYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVqZWl0YSBhIHByb21pc2VcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7UGlQcm9taXNlfVxuICAgICAqL1xuICAgIHJlamVjdCgpIHtcbiAgICAgICAgdGhpcy5fYXJnRXJyID0gYXJndW1lbnRzO1xuXG4gICAgICAgIHRoaXMuX2NhbGxFcnIoKTtcbiAgICAgICAgdGhpcy5fY2FsbERvbmUoKTtcblxuICAgICAgICBpZiAodGhpcy4jaXNPbmNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSBjYWxsYmFjayBkaXNwYXJhZG8gcXVhbmRvIGEgcHJvbWlzZSBmb3IgcmVzb2x2aWRhXG4gICAgICogXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgLSBDYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gT2JqZXRvIGRlIGNvbnRleHRvXG4gICAgICogQHJldHVybnMge1BpUHJvbWlzZX1cbiAgICAgKi9cbiAgICBvayhjYiwgY29udGV4dCkge1xuICAgICAgICB0aGlzLl9jYk9rLnB1c2goeyBjYjogY2IsIGNvbnRleHQ6IGNvbnRleHQgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzT2spIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxPaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxpYXMgcGFyYSBtw6l0b2RvIG9rXG4gICAgICogXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgLSBDYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gT2JqZXRvIGRlIGNvbnRleHRvXG4gICAgICogQHJldHVybnMge1BpUHJvbWlzZX1cbiAgICAgKi9cbiAgICB0aGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkaWNpb25hIGNhbGxiYWNrIGRpc3BhcmFkbyBhcGVuYXMgdW1hIHZleiBxdWFuZG8gYSBwcm9taXNlIGZvciByZXNvbHZpZGFcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYiAtIENhbGxiYWNrXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBPYmpldG8gZGUgY29udGV4dG9cbiAgICAgKiBAcmV0dXJucyB7UGlQcm9taXNlfVxuICAgICAqL1xuICAgIG9uY2UoY2IsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5fY2JPbmNlLnB1c2goeyBjYjogY2IsIGNvbnRleHQ6IGNvbnRleHQgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2lzT2spIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxPbmNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSBjYWxsYmFjayBkaXNwYXJhZG8gcXVhbmRvIGEgcHJvbWlzZSBmb3IgcmVqZWl0YWRhXG4gICAgICogXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgLSBDYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gT2JqZXRvIGRlIGNvbnRleHRvXG4gICAgICogQHJldHVybnMge1BpUHJvbWlzZX1cbiAgICAgKi9cbiAgICBlcnJvcihjYiwgY29udGV4dCkge1xuICAgICAgICB0aGlzLl9jYkVyci5wdXNoKHsgY2I6IGNiLCBjb250ZXh0OiBjb250ZXh0IH0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc0Vycikge1xuICAgICAgICAgICAgdGhpcy5fY2FsbEVycigpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqKlxuICAgICAqIEFsaWFzIHBhcmEgbcOpdG9kbyBlcnJvclxuICAgICAqL1xuICAgIGNhdGNoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lcnJvci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkaWNpb25hIGNhbGxiYWNrIGRpc3BhcmFkbyBzZW1wcmUgcXVlIGEgcHJvbWlzZSDDqSByZXNvbHZpZGEgb3UgcmVqZWl0YWRhXG4gICAgICogXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgLSBDYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZXh0IC0gT2JqZXRvIGRlIGNvbnRleHRvXG4gICAgICogQHJldHVybnMge1BpUHJvbWlzZX1cbiAgICAgKi9cbiAgICBkb25lKGNiLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuX2NiRG9uZS5wdXNoKHsgY2I6IGNiLCBjb250ZXh0OiBjb250ZXh0IH0pO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc0RvbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbGxEb25lKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyBwYXJhIG3DqXRvZG8gZG9uZVxuICAgICAqL1xuICAgIGZpbmFsbHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRvbmUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaW1wYSB0b2RvcyBvcyBjYWxsYmFja3NcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7UGlQcm9taXNlfVxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICB0aGlzLl9jYk9rID0gW107XG4gICAgICAgIHRoaXMuX2NiRXJyID0gW107XG4gICAgICAgIHRoaXMuX2NiRG9uZSA9IFtdO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0YSB0b2RvcyBvcyB2YWxvcmVzXG4gICAgICogXG4gICAgICogQHJldHVybnMge1BpUHJvbWlzZX1cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy5fY2JPayA9IFtdO1xuICAgICAgICB0aGlzLl9jYkVyciA9IFtdO1xuICAgICAgICB0aGlzLl9jYkRvbmUgPSBbXTtcbiAgICAgICAgdGhpcy5fY2JPbmNlID0gW107XG5cbiAgICAgICAgdGhpcy5faXNPayA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0VyciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0RvbmUgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9hcmdPayA9IFtdO1xuICAgICAgICB0aGlzLl9hcmdFcnIgPSBbXTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB0b1Byb21pc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNwcm9taXNlO1xuICAgIH1cblxuICAgIF9jYWxsKGFyciwgYXJncykge1xuICAgICAgICBmb3IgKGxldCBpID0gYXJyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBhcnJbaV0uY2IuYXBwbHkoYXJyW2ldLmNvbnRleHQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NhbGxPbmNlKCkge1xuICAgICAgICB0aGlzLl9pc09rID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fY2FsbCh0aGlzLl9jYk9uY2UsIHRoaXMuX2FyZ09rKTtcbiAgICAgICAgdGhpcy5fY2JPbmNlID0gW107XG4gICAgfVxuXG4gICAgX2NhbGxPaygpIHtcbiAgICAgICAgdGhpcy5faXNPayA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NhbGwodGhpcy5fY2JPaywgdGhpcy5fYXJnT2spO1xuICAgIH1cblxuICAgIF9jYWxsRXJyKCkge1xuICAgICAgICB0aGlzLl9pc0VyciA9IHRydWU7XG4gICAgICAgIHRoaXMuX2NhbGwodGhpcy5fY2JFcnIsIHRoaXMuX2FyZ0Vycik7XG4gICAgfVxuXG4gICAgX2NhbGxEb25lKCkge1xuICAgICAgICB0aGlzLl9pc0RvbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jYWxsKHRoaXMuX2NiRG9uZSwgW10pO1xuICAgIH1cbn07XG5cbnJlZ2lzdGVyKFBpUHJvbWlzZSk7IiwiaW1wb3J0IHsgcmVnaXN0ZXIgfSBmcm9tIFwiLi9lbnZcIjtcblxuLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlSYW5kb20ge1xuICAgIHN0YXRpYyAjc2VlZCA9IDA7XG4gICAgLyoqXG4gICAgICogR2VyYSB1bSBuw7ptZXJvIGFsZWF0w7NyaW9cbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZW5lcmF0b3IoKSB7XG4gICAgICAgIHJldHVybiBQaVJhbmRvbS5yYW5nZSgwLCBOdW1iZXIuTUFYX1ZBTFVFKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXJhIHVtIG7Dum1lcm8gYWxlYXTDs3JpbyBlbnRyZSB7bWlufSBlIHttYXh9XG4gICAgICogXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9taW4gLSBWYWxvciBtw61uaW1vXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IF9tYXggLSBWYWxvciBtw6F4aW1vXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBzdGF0aWMgcmFuZ2UoX21pbiwgX21heCkge1xuICAgICAgICBfbWluID0gX21pbiB8fCAwO1xuICAgICAgICBfbWF4ID0gX21heCB8fCBOdW1iZXIuTUFYX1ZBTFVFO1xuXG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIF9tYXggLSBfbWluKSkgKyBfbWluO1xuXG4gICAgICAgIGlmIChyYW5kb20gPiBfbWF4KSByZXR1cm4gX21heDtcbiAgICAgICAgZWxzZSByZXR1cm4gcmFuZG9tO1xuICAgIH1cblxuICAgIHN0YXRpYyB1dWlkKGZvcm1hdCkge1xuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBsZXQgdXVpZCA9IChmb3JtYXQgfHwgJ3h4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eCcpLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIGxldCByID0gKGQgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcbiAgICAgICAgICAgIHJldHVybiAoYyA9PSAneCcgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1dWlkICsgKFBpUmFuZG9tLiNzZWVkKyspO1xuICAgIH1cblxufTtcblxucmVnaXN0ZXIoUGlSYW5kb20pOyIsImltcG9ydCBQaUNvbmZpZyBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgUGlDbGFzcyBmcm9tICcuL2NsYXNzJztcbmltcG9ydCBQaVVybCBmcm9tICcuL3VybCc7XG5cbmNsYXNzIENoYWluUmVxdWVzdEl0ZW0ge1xuICAgIG5leHQgPSBudWxsO1xuICAgICNmbiA9IG51bGw7XG5cbiAgICBjb25zdHJ1Y3Rvcihmbikge1xuICAgICAgICB0aGlzLiNmbiA9IGZuO1xuICAgIH1cblxuICAgIGludm9rZSgpIHtcbiAgICAgICAgdGhpcy4jZm4uY2FsbCh0aGlzLiNmbiwgLi4uYXJndW1lbnRzLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm5leHQuaW52b2tlKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuY2xhc3MgQ2hhaW5SZXF1ZXN0IHtcbiAgICAjcmVxdWVzdHMgPSBbXTtcblxuICAgIGZpcnN0KCkge1xuICAgICAgICBpZiAodGhpcy4jcmVxdWVzdHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuI3JlcXVlc3RzWzBdO1xuICAgIH1cblxuICAgIGxhc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLiNyZXF1ZXN0cy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy4jcmVxdWVzdHNbdGhpcy4jcmVxdWVzdHMubGVuZ3RoIC0gMV07XG4gICAgfVxuXG4gICAgYWRkKGZuKSB7XG4gICAgICAgIGlmIChmbiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxhc3QgPSB0aGlzLmxhc3QoKTtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IG5ldyBDaGFpblJlcXVlc3RJdGVtKGZuKTtcbiAgICAgICAgaWYgKGxhc3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGFzdC5uZXh0ID0gY3VycmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuI3JlcXVlc3RzLnB1c2goY3VycmVudCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaW52b2tlKCkge1xuICAgICAgICBjb25zdCBmaXJzdCA9IHRoaXMuZmlyc3QoKTtcbiAgICAgICAgaWYgKGZpcnN0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlyc3QuaW52b2tlLmFwcGx5KGZpcnN0LCBhcmd1bWVudHMpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaVJlcXVlc3QgZXh0ZW5kcyBQaUNsYXNzIHtcbiAgICAjc2VuZGluZyA9IGZhbHNlO1xuICAgICN4aHIgPSBudWxsO1xuICAgICNjaGFpblJlcXVlc3QgPSBuZXcgQ2hhaW5SZXF1ZXN0KCk7XG4gICAgI21ldGhvZCA9ICdQT1NUJztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuI2NoYWluUmVxdWVzdFxuICAgICAgICAgICAgLmFkZChQaUNvbmZpZy5nZXQoJ3JlcXVlc3QuZmV0Y2gnKSlcbiAgICAgICAgICAgIC5hZGQoKHVybCwgc2V0dGluZ3MsIHN1Y2Nlc3MsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2godXJsLCBzZXR0aW5ncykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI3NlbmRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4oKHRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0ZXh0LCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KCkudGhlbigodGV4dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcih0ZXh0LCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiN4aHIgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUubWVzc2FnZSA9PSAnRmFpbGVkIHRvIGZldGNoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yKGB7IFwibWVzc2FnZVwiOiBcIiR7ZS5tZXNzYWdlfVwiLCBcInN0YXR1c1wiOiBcImVycm9yXCIgfWAsIDUwMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKGB7IFwibWVzc2FnZVwiOiBcIm9mZmxpbmVcIiwgXCJzdGF0dXNcIjogXCJlcnJvclwiIH1gLCA1MDMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFkZEhhbmRsZXIoZm4pIHtcbiAgICAgICAgdGhpcy4jY2hhaW5SZXF1ZXN0LmFkZChmbik7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWJvcnRhIG8gcmVxdWVzdCBjYXNvIGEgc29saWNpdGHDp8OjbyB0ZW5oYSBzaWRvIGVudmlhZGFcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7UGlSZXF1ZXN0fVxuICAgICAqL1xuICAgIGFib3J0KCkge1xuICAgICAgICBpZiAodGhpcy4jeGhyKSB7XG4gICAgICAgICAgICB0aGlzLiN4aHIuYWJvcnQoKTtcbiAgICAgICAgICAgIHRoaXMuI3hociA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLiNzZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRvcm5hIHNlIGEgcmVxdWVzdCBlc3RhIHNlbmRvIGVudmlhZGFcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1NlbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNzZW5kaW5nO1xuICAgIH1cblxuICAgIHNldE1ldGhvZChtZXRob2QpIHtcbiAgICAgICAgdGhpcy4jbWV0aG9kID0gbWV0aG9kO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVudmlhIHVtYSByZXF1ZXN0IGRvIHRpcG8gR0VUXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVybCBkYSByZXF1ZXN0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIFF1ZXJ5IHN0cmluZyBjb21vIG9iamV0b1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGdldCh1cmwsIG9iaiwgY29uZmlnID0gKHhocikgPT4geyByZXR1cm4geGhyOyB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcXMgPSAnJztcblxuICAgICAgICAgICAgaWYgKG9iaiAhPSB1bmRlZmluZWQpIHFzID0gJz8nICsgdGhpcy4jY29udmVydE9iamVjdFRvRm9ybURhdGEob2JqKTtcblxuICAgICAgICAgICAgdGhpcy4jcmVxdWVzdEdldCh1cmwgKyBxcywgKHRleHQsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRleHQsIHN0YXR1c0NvZGUpO1xuICAgICAgICAgICAgfSwgKHRleHQsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgICAgICByZWplY3QodGV4dCwgc3RhdHVzQ29kZSk7XG4gICAgICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbnZpYSB1bWEgc29saWNpdGHDp8OjbyBkbyB0aXBvIEdFVCBlIGZheiBvIHBhcnNlIEpTT04gZGEgcmVzcG9zdGFcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVXJsIGRhIHJlcXVlc3RcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqIC0gUXVlcnkgc3RyaW5nIGNvbW8gb2JqZXRvXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZ2V0SnNvbih1cmwsIG9iaiwgY29uZmlnID0gKHhocikgPT4geyByZXR1cm4geGhyOyB9KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcXMgPSAnJztcblxuICAgICAgICAgICAgaWYgKG9iaiAhPSB1bmRlZmluZWQpIHFzID0gJz8nICsgdGhpcy4jY29udmVydE9iamVjdFRvRm9ybURhdGEob2JqKTtcblxuICAgICAgICAgICAgdGhpcy4jcmVxdWVzdEdldCh1cmwgKyBxcyxcbiAgICAgICAgICAgICAgICAodGV4dCwgc3RhdHVzQ29kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuI2V4aXN0UHJvdG9jb2woanNvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqc29uLnN0YXR1cyA9PSAnb2snKSByZXNvbHZlKGpzb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZWplY3QoanNvbi5tZXNzYWdlLCBzdGF0dXNDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICh0ZXh0LCBzdGF0dXNDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3Qoe30sIHN0YXR1c0NvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4jZXhpc3RQcm90b2NvbChqc29uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpzb24uc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoanNvbi5tZXNzYWdlLCBzdGF0dXNDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChqc29uLCBzdGF0dXNDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVudmlhIHVtYSBzb2xpY2l0YcOnw6NvIGRvIHRpcG8gUE9TVC5cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVXJsIGRhIHJlcXVlc2V0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIE9iamV0byBhIHNlciBlbnZpYWRvIG5vIGZvcm1hdG8gdmFsdWU9a2V5XG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgcG9zdCh1cmwsIG9iaiwgY29uZmlnID0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gdGhpcy4jY29udmVydE9iamVjdFRvRm9ybURhdGEob2JqKTtcblxuICAgICAgICAgICAgdGhpcy4jcmVxdWVzdFBvc3QodXJsLCBlbmNvZGVVUkkoZm9ybURhdGEpLFxuICAgICAgICAgICAgICAgICh0ZXh0LCBzdGF0dXNDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGV4dCwgc3RhdHVzQ29kZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAodGV4dCwgc3RhdHVzQ29kZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGV4dCwgc3RhdHVzQ29kZSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoeGhyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHhoci5oZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWcoeGhyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB4aHI7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEVudmlhIHBhcmEgYSB1cmwgaW5mb3JtYWRhIGFycmF5IGRlIEZpbGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVXJsIGRhIHJlcXVlc3QgZSBmYXogbyBwYXJzZSBKU09OIGRhIHJlc3Bvc3RhXG4gICAgICogQHBhcmFtIHthcnJheX0gZmlsZXMgLSBBcnJheSBGaWxlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgc2VuZEZpbGVzKHVybCwgZmlsZXMsIGNvbmZpZyA9IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBmaWxlJHtpfWAsIGZpbGVzW2ldKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRoaXMuI3JlcXVlc3RQb3N0KHVybCwgZm9ybURhdGEsXG4gICAgICAgICAgICAgICAgKHRleHQsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4jZXhpc3RQcm90b2NvbChqc29uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpzb24uc3RhdHVzID09ICdvaycpIHJlc29sdmUoanNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJlamVjdChqc29uLm1lc3NhZ2UsIHN0YXR1c0NvZGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKHRleHQsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7fSwgc3RhdHVzQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiNleGlzdFByb3RvY29sKGpzb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoanNvbi5zdGF0dXMgPT0gJ2Vycm9yJykgcmVqZWN0KGpzb24ubWVzc2FnZSwgc3RhdHVzQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoanNvbiwgc3RhdHVzQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICh4aHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnKHhocik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geGhyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbnZpYSB1bWEgc29saWNpdGHDp8OjbyBkbyB0aXBvIFBPU1QgZSBmYXogbyBwYXJzZSBKU09OIGRhIHJlc3Bvc3RhXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVybCBkYSByZXF1ZXN0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9iaiAtIE9iamV0byBhIHNlciBlbnZpYWRvIG5vIGZvcm1hdG8ganNvblxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHBvc3RKc29uKHVybCwgb2JqLCBjb25maWcgPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLiNyZXF1ZXN0UG9zdCh1cmwsIEpTT04uc3RyaW5naWZ5KG9iaiksXG4gICAgICAgICAgICAgICAgKHRleHQsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSBKU09OLnBhcnNlKHRleHQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4jZXhpc3RQcm90b2NvbChqc29uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpzb24uc3RhdHVzID09ICdvaycpIHJlc29sdmUoanNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHJlamVjdChqc29uLm1lc3NhZ2UsIHN0YXR1c0NvZGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKHRleHQsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHQubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7fSwgc3RhdHVzQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQganNvbiA9IEpTT04ucGFyc2UodGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiNleGlzdFByb3RvY29sKGpzb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoanNvbi5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChqc29uLm1lc3NhZ2UsIHN0YXR1c0NvZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGpzb24sIHN0YXR1c0NvZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAoeGhyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHhoci5oZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnKHhocik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geGhyO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAjcmVxdWVzdEdldCh1cmwsIHN1Y2Nlc3MsIGVycm9yLCBjb25maWcpIHtcbiAgICAgICAgdGhpcy4jbWV0aG9kID0gJ0dFVCc7XG4gICAgICAgIHRoaXMuI2NyZWF0ZVJlcXVlc3QodXJsLFxuICAgICAgICAgICAgKHRleHQsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHRleHQsIHN0YXR1c0NvZGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICh0ZXh0LCBzdGF0dXNDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZXJyb3IodGV4dCwgc3RhdHVzQ29kZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKHhocikgPT4ge1xuICAgICAgICAgICAgICAgIHhoci5tZXRob2QgPSB0aGlzLiNtZXRob2Q7XG4gICAgICAgICAgICAgICAgeGhyLmhlYWRlcnMuYXBwZW5kKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY29uZmlnKHhocik7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgI3JlcXVlc3RQb3N0KHVybCwgZm9ybURhdGEsIHN1Y2Nlc3MsIGVycm9yLCBjb25maWcpIHtcbiAgICAgICAgLy8gbGV0IGF1dGggPSBQaS5nZXRDb25maWcoJ3JlcXVlc3QuQXV0aG9yaXphdGlvbicpO1xuXG4gICAgICAgIHRoaXMuI2NyZWF0ZVJlcXVlc3QodXJsLFxuICAgICAgICAgICAgKHRleHQsIHN0YXR1c0NvZGUpID0+IHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHRleHQsIHN0YXR1c0NvZGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICh0ZXh0LCBzdGF0dXNDb2RlKSA9PiB7XG4gICAgICAgICAgICAgICAgZXJyb3IodGV4dCwgc3RhdHVzQ29kZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKHhocikgPT4ge1xuICAgICAgICAgICAgICAgIHhoci5tZXRob2QgPSB0aGlzLiNtZXRob2Q7XG4gICAgICAgICAgICAgICAgeGhyLmhlYWRlcnMuYXBwZW5kKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgICAgICAgICAgeGhyLmJvZHkgPSBmb3JtRGF0YTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjb25maWcoeGhyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAjY3JlYXRlUmVxdWVzdCh1cmwsIHN1Y2Nlc3MsIGVycm9yLCBjb25maWcpIHtcbiAgICAgICAgdmFyIGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgICAgICBoZWFkZXJzLmFwcGVuZCgnQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicpO1xuXG4gICAgICAgIHRoaXMuI3hociA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICAgICAgdmFyIHNldHRpbmdzID0gY29uZmlnKHtcbiAgICAgICAgICAgIHNpZ25hbDogdGhpcy4jeGhyLnNpZ25hbCxcbiAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIF91cmwgPSB1cmwgaW5zdGFuY2VvZiBQaVVybCA/IHVybCA6IFBpVXJsLmNyZWF0ZSh1cmwpO1xuXG4gICAgICAgIHRoaXMuI3NlbmRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLiNjaGFpblJlcXVlc3QuaW52b2tlKF91cmwsIHNldHRpbmdzLCBzdWNjZXNzLCBlcnJvcik7XG4gICAgfVxuXG4gICAgI2V4aXN0UHJvdG9jb2woanNvbikge1xuICAgICAgICByZXR1cm4ganNvbi5zdGF0dXM7XG4gICAgfVxuXG4gICAgI2NvbnZlcnRPYmplY3RUb0Zvcm1EYXRhKG9iaikge1xuICAgICAgICBsZXQgZW5jb2RlZFN0cmluZyA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVuY29kZWRTdHJpbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBlbmNvZGVkU3RyaW5nICs9ICcmJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZW5jb2RlZFN0cmluZyArPSBwcm9wICsgJz0nICsgb2JqW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVuY29kZWRTdHJpbmc7XG4gICAgfVxuXG59OyIsIi8qKlxuICogQGNsYXNzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpU3RhdGVtZW50IHtcblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGEgdW1hIHN0YXRlbWVudCBpbmljaWFuZG8gZW0gdW0gY29udGV4dG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RhdGVtZW50IC0gU3RhdGVtZW50IHF1ZSBzZXLDoSBleGVjdXRhZGEgZGVudHJvIGRvIGNvbnRleHRvXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbnRleHQgLSBDb250ZXh0byBkZSBleGVjdcOnw6NvXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBzdGF0aWMgZXhlYyhzdGF0ZW1lbnQsIGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIFBpU3RhdGVtZW50LmV4ZWNXaXRoVmFyaWFibGVzKHN0YXRlbWVudCwgW1tdLCBbXV0sIGNvbnRleHQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGEgdW1hIHN0YXRlbWVudCBkZW50cm8gZGUgdW0gY29udGV4dG8gY29tIHZhcmlhdsOpaXMgZGUgZXNjb3BvXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0YXRlbWVudCAtIFN0YXRlbWVudFxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHZhcmlhYmxlcyAtIEFycmF5IGNvbSBvcyBub21lcyBlIHZhbG9yZXMgZGFzIHZhcmnDoXZlaXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29udGV4dCAtIE9iamV0byBkZSBjb250ZXh0b1xuICAgICAqIEByZXR1cm5zIHtvYmplY3R9XG4gICAgICovXG4gICAgc3RhdGljIGV4ZWNXaXRoVmFyaWFibGVzKHN0YXRlbWVudCwgdmFyaWFibGVzLCBjb250ZXh0KSB7XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlTmFtZXMgPSB2YXJpYWJsZXNbMF07XG4gICAgICAgIGNvbnN0IHZhcmlhYmxlVmFsdWVzID0gdmFyaWFibGVzWzFdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFyaWFibGVOYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGVOYW1lID0gdmFyaWFibGVOYW1lc1tpXTtcbiAgICAgICAgICAgIGlmICh2YXJpYWJsZU5hbWUgPT0gJ3RoaXMnKSB7XG4gICAgICAgICAgICAgICAgdmFyaWFibGVOYW1lcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXJpYWJsZU5hbWVzW2ldID0gdmFyaWFibGVOYW1lc1tpXS5yZXBsYWNlQWxsKCcuJywgJycpO1xuICAgICAgICAgICAgc3RhdGVtZW50ID0gc3RhdGVtZW50LnJlcGxhY2VBbGwodmFyaWFibGVOYW1lLCB2YXJpYWJsZU5hbWVzW2ldKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZnVuYyA9IG5ldyBGdW5jdGlvbignX3RoaXMnLCAuLi52YXJpYWJsZU5hbWVzLCBgcmV0dXJuIChmdW5jdGlvbigpe3JldHVybiAke3N0YXRlbWVudH19KS5jYWxsKF90aGlzKTtgKTtcbiAgICAgICAgcmV0dXJuIGZ1bmMoY29udGV4dCwgLi4udmFyaWFibGVWYWx1ZXMpO1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gXCIuL2VudlwiO1xuaW1wb3J0IFBpVHlwZSBmcm9tIFwiLi90eXBlXCI7XG4vKipcbiAqIEBjbGFzcyBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlTdHJpbmcge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRlIHRvZGFzIGFzIHBhbGF2cmFzIGRhIHN0cmluZyBwYXJhIGNhcGl0YWwuIEFzIHBhbGF2cmFzIHBvZGVtIGVzdGFyIHNlcGVyYWRhcyBwb3IgZXNwYcOnbyBvdSBfIG91IC1cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gc3RyaW5nIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgY2FwaXRhbChzdHIpIHtcbiAgICAgICAgaWYgKCFQaVR5cGUuaXNTdHJpbmcoc3RyKSkgcmV0dXJuICcnO1xuXG4gICAgICAgIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGxldCBwID0gLyheW1xcc19cXC4tXSpcXHd8W1xcc1xcLl8tXVxcdykrL2dpLFxuICAgICAgICAgICAgbSA9IHN0ci5tYXRjaChwKTtcblxuICAgICAgICBmb3IgKGxldCB2IGluIG0pIHtcbiAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG1bdl0sIG1bdl0udG9VcHBlckNhc2UoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXRvcm5hIMO6bHRpbWEgcGFsYXZyYSBzZXBhcmFkYSBwb3IgY2FyYWN0ZXJcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIC0gU3RyaW5nXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlcGFyYXRvciAtIFNlcGFyYWRvciBkZSBwYWxhdnJhc1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGxhc3Qoc3RyLCBzZXBhcmF0b3IgPSAnICcpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gc3RyLnNwbGl0KHNlcGFyYXRvcik7XG5cbiAgICAgICAgaWYgKHRva2Vucy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgYSBwcmltZWlyYSBwYWxhdnJhIHNlcGFyYWRhIHBvciBjYXJhY3RlclxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBTdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VwYXJhdG9yIC0gU2VwYXJhZG9yIGRlIHBhbGF2cmFzXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZmlyc3Qoc3RyLCBzZXBhcmF0b3IgPSAnICcpIHtcbiAgICAgICAgY29uc3QgdG9rZW5zID0gc3RyLnNwbGl0KHNlcGFyYXRvcik7XG5cbiAgICAgICAgaWYgKHRva2Vucy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0b2tlbnNbMF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0b3JuYSB1bWEgc3RyaW5nIGZvcm1hdGFkYSBzZWd1bmRvIG9zIG1hcmNhZG9yZXMgZGUgdGV4dG9cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmlufSBmb3JtYXQgLSBTdHJpbmcgY29tIG1hcmNhZG9yZXMgZGUgdGV4dG9cbiAgICAgKiBAcGFyYW0gIHsuLi5hbnl9IGFyZ3MgLSBMaXN0YSBkZSB2YWxvZXJzIHBhcmEgb3MgbWFyY2Fkb3JlcyBkZSB0ZXh0b1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGZvcm1hdChmb3JtYXQsIC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdC5yZXBsYWNlKC97KFxcZCspfS9nLCBmdW5jdGlvbiAobWF0Y2gsIG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmdzW251bWJlcl0gIT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICA/IGFyZ3NbbnVtYmVyXVxuICAgICAgICAgICAgICAgIDogbWF0Y2hcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGYXogbyByZWNvcnRlIG5vIHRleHRvIGJhc2VhZG8gbm9zIGNhcmFjdGVyZXMgaW5mb3JtYWRvcyBub3MgcGFyYW1ldHJvcyBiZWdpbldvcmQgZSBlbmRXb3JkXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgLSBUZXh0b1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiZWdpbldvcmQgLSBQYWxhdnJhIHF1ZSBpbmljaWEgbyBjbGlwcGluZ1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlbmRXb3JkIC0gUGFsYXZyYSBxdWUgZmluYWxpemEgbyBjbGlwcGluZ1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGNsaXBzKHRleHQsIGJlZ2luV29yZCwgZW5kV29yZCkge1xuICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgIGxldCBpID0gLTE7XG5cbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGkgPSB0ZXh0LmluZGV4T2YoYmVnaW5Xb3JkLCBpICsgMSk7XG4gICAgICAgICAgICBpZiAoaSA9PSAtMSkgYnJlYWs7XG4gICAgICAgICAgICBpICs9IGJlZ2luV29yZC5sZW5ndGg7XG5cbiAgICAgICAgICAgIGxldCBmID0gdGV4dC5pbmRleE9mKGVuZFdvcmQsIGkgKyAxKTtcbiAgICAgICAgICAgIGlmIChmID09IC0xKSBicmVhaztcblxuICAgICAgICAgICAgYXJyLnB1c2godGV4dC5zdWJzdHIoaSwgZiAtIGkpKTtcbiAgICAgICAgICAgIGkgPSBmICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFZlcmlmaWNhIHNlIG8gb2JqZXRvIGV2ZW50IGZvcm5lY2lkbyBjb250w6ltIGFwZW5hcyBjYXJhY3RlcmVzIGFscGhhbnVtw6lyaWNvc1xuICAgICAqIFxuICAgICAqIEBtZXRob2QgaXNBbHBoYU51bWVyaWNcbiAgICAgKiBAcGFyYW0ge2V2ZW50fSBlIFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzQWxwaGFOdW1lcmljKGUpIHtcbiAgICAgICAgbGV0IGNoYXJDb2RlID0gKGUud2hpY2gpID8gZS53aGljaCA6IGUua2V5Q29kZTtcbiAgICAgICAgaWYgKGNoYXJDb2RlID09IDgpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIGxldCBrZXludW07XG4gICAgICAgIGxldCBrZXljaGFyO1xuICAgICAgICBsZXQgY2hhcmNoZWNrID0gL1thLXpBLVowLTldLztcbiAgICAgICAgaWYgKHdpbmRvdy5ldmVudCkgLy8gSUVcbiAgICAgICAge1xuICAgICAgICAgICAga2V5bnVtID0gZS5rZXlDb2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUud2hpY2gpIC8vIE5ldHNjYXBlL0ZpcmVmb3gvT3BlcmFcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXludW0gPSBlLndoaWNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleWNoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGtleW51bSk7XG4gICAgICAgIHJldHVybiBjaGFyY2hlY2sudGVzdChrZXljaGFyKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udmVydCB0b2RvcyBvcyBlc3Bhw6dvcyBwYXJhIGPDs2RpZ28gaHRtbCAmbmJzcDtcbiAgICAgKiBcbiAgICAgKiBAbWV0aG9kIHNwYWNlMm5ic3BcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgc3BhY2UybmJzcChzdHIpIHtcbiAgICAgICAgaWYgKHN0ciA9PSBudWxsKSByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzL2dpLCAnJm5ic3A7JykucmVwbGFjZSgvXFwtL2dpLCAnJm5ic3A7LSZuYnNwOycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSB0csOqcyBwb250b3MgYW8gZmluYWwgZGEgc3RyaW5nIGRlIHNldSB0YW1hbmhvIGV4Y2VkZXIgbyBsaW1pdGUgZm9ybmVjaWRvXG4gICAgICogXG4gICAgICogQG1ldGhvZCByZXRpY2VuY2lhc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgXG4gICAgICogQHBhcmFtIHtpbnR9IGxlbmd0aCBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIHJldGljZW5jaWFzKHN0ciwgbGVuZ3RoKSB7XG4gICAgICAgIGlmIChzdHIubGVuZ3RoID4gbGVuZ3RoKSByZXR1cm4gc3RyLnN1YnN0cmluZygwLCBsZW5ndGgpICsgJy4uLic7XG4gICAgICAgIGVsc2UgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgO1xuICAgIC8qKlxuICAgICAqIFJlbW92ZSB0b2RvcyBvcyBlc3Bhw6dvcyBkYSBzdHJpbmdcbiAgICAgKiBcbiAgICAgKiBAbWV0aG9kIHJlbW92ZVNwYWNlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIHJlbW92ZVNwYWNlKHN0cikge1xuICAgICAgICByZXR1cm4gKHN0ciB8fCAnJykucmVwbGFjZSgvXFxzKi9naSwgJycpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXRvcm5hIGEgcHJpbWVpcmEgcGFsYXZyYSBkYSBzdHJpbmdcbiAgICAgKiBcbiAgICAgKiBAbWV0aG9kIGZpcnRXb3JkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGZpcnN0V29yZChzdHIpIHtcbiAgICAgICAgaWYgKFBpVHlwZS5pc1N0cmluZyhzdHIpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnNwbGl0KCcgJylbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0b3JuYSBhIMO6bHRpbWEgcGFsYXZyYSBkYSBzdHJpbmdcbiAgICAgKiBcbiAgICAgKiBAbWV0aG9kIGxhc3RXb3JkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGxhc3RXb3JkKHN0cikge1xuICAgICAgICBpZiAoUGlUeXBlLmlzU3RyaW5nKHN0cikpIHtcbiAgICAgICAgICAgIGxldCBwID0gc3RyLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICByZXR1cm4gcFtwLmxlbmd0aCAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0b3JuYSBhIHByaW1laXJhIGUgw7psdGltYSBwYWxhdnJhcyBkYSBzdHJpbmdcbiAgICAgKiBcbiAgICAgKiBAbWV0aG9kIGZpcnN0QW5kbGFzdFdvcmRcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZmlyc3RBbmRsYXN0V29yZChzdHIpIHtcbiAgICAgICAgbGV0IHAgPSBzdHIuc3BsaXQoJyAnKTtcbiAgICAgICAgbGV0IGZpcnN0ID0gJyc7XG5cbiAgICAgICAgaWYgKHAubGVuZ3RoID09IDEpIHJldHVybiBzdHI7XG5cbiAgICAgICAgZmlyc3QgPSBzdHIuc3BsaXQoJyAnKVswXTtcblxuICAgICAgICByZXR1cm4gZmlyc3QgKyAnICcgKyBwW3AubGVuZ3RoIC0gMV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRlIHRvZGFzIGFzIHBhbGF2cmFzIGRhIHN0cmluZyBwYXJhIGNhcGl0YWwuIEFzIHBhbGF2cmFzIHBvZGVtIGVzdGFyIHNlcGVyYWRhcyBwb3IgZXNwYcOnbyBvdSBfXG4gICAgICogXG4gICAgICogQG1ldGhvZCBjYXBpdGFsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHN0ciBcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGNhcGl0YWwoc3RyKSB7XG4gICAgICAgIGlmICghUGlUeXBlLmlzU3RyaW5nKHN0cikpIHJldHVybiAnJztcblxuICAgICAgICBzdHIgPSBzdHIudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBsZXQgcCA9IC8oXltcXHNfXFwuLV0qXFx3fFtcXHNcXC5fLV1cXHcpKy9naSxcbiAgICAgICAgICAgIG0gPSBzdHIubWF0Y2gocCk7XG5cbiAgICAgICAgZm9yIChsZXQgdiBpbiBtKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShtW3ZdLCBtW3ZdLnRvVXBwZXJDYXNlKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9O1xuXG4gICAgc3RhdGljIHJlcGxhY2UoaW5wdXQsIHNlYXJjaCwgcmVwbGFjZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnJlcGxhY2UobmV3IFJlZ0V4cChzZWFyY2gsICdnJyksIHJlcGxhY2VtZW50KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVkdXogdW0gbm9tZSBlbSBuIC0gMSBwYWxhdnJhcyBpbmljaWFpcyBtYWlzIGEgdWx0aW1hIHBhbGF2cmFcbiAgICAgKiBcbiAgICAgKiBAbWV0aG9kIGN1dFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgXG4gICAgICogQHBhcmFtIHtpbnR9IHRvdGFsIFxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgY3V0KHN0ciwgdG90YWwpIHtcbiAgICAgICAgaWYgKCFQaVR5cGUuaXNTdHJpbmcoc3RyKSB8fCB0b3RhbCA8IDApIHJldHVybiBzdHI7XG5cbiAgICAgICAgbGV0IHAgPSBzdHIuc3BsaXQoJyAnKSxcbiAgICAgICAgICAgIGFyciA9IFtdO1xuXG4gICAgICAgIC8vYWRpY2lvbmEgYSBwcmltZWlyYSBwYWxhdnJhXG4gICAgICAgIGFyci5wdXNoKHBbMF0pO1xuXG4gICAgICAgIGlmICh0b3RhbCA+IHAubGVuZ3RoKSB0b3RhbCA9IHAubGVuZ3RoO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICAgICAgYXJyLnB1c2gocFtpXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL2FkaWNpb25hIGEgdWx0aW1hIHBhbGF2cmFcbiAgICAgICAgaWYgKHAubGVuZ3RoID4gdG90YWwpIHtcbiAgICAgICAgICAgIGFyci5wdXNoKHBbcC5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXJyLmpvaW4oJyAnKTtcbiAgICB9XG59O1xuXG5yZWdpc3RlcihQaVN0cmluZyk7IiwiaW1wb3J0IFBpT2JqZWN0IGZyb20gJy4vb2JqZWN0J1xuLyoqXG4gKiBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBuZXcgY2xhc3MgUGlUcmFuc2xhdGUge1xuICAgICN0YWJsZSA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRhYmxlIC0gQ2FycmVnYSB1bWEgdGFiZWxhIGRlIHRyYWR1w6fDo28gcGFyYSBvIHRyYW5zbGF0ZVxuICAgICAqIEByZXR1cm5zIHtQaVRyYW5zbGF0ZX1cbiAgICAgKi9cbiAgICBsb2FkKHRhYmxlKSB7XG4gICAgICAgIFBpT2JqZWN0LmV4dGVuZCh0aGlzLiN0YWJsZSwgdGFibGUpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSB1bSB2YWxvciBwYXJhIHVtYSBjaGF2ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBDaGF2ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFZhbG9yXG4gICAgICogQHJldHVybnMge1BpVHJhbnNsYXRlfVxuICAgICAqL1xuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuI3RhYmxlW2tleV0gPSB2YWx1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRvcm5hIHVtIHZhbG9yIGRlIHVtYSBkYWRhIGNoYXZlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIENoYXZlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiN0YWJsZVtrZXldIHx8ICcnO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZlcmlmaWNhIHNlIGV4aXN0ZSB1bWEgY2hhdmUgbmEgdGFiZWxhIGRlIHRyYWR1w6fDo29cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gQ2hhdmVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBleGlzdChrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI3RhYmxlW2tleV0gIT0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFwYWdhIHRvZGEgYSB0YWJlbGEgZGUgdHJhZHXDp8Ojb1xuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtQaVRyYW5zbGF0ZX1cbiAgICAgKi9cbiAgICBjbGVhcigpIHtcbiAgICAgICAgdGhpcy4jdGFibGUgPSB7fTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTsiLCJpbXBvcnQge2dsb2JhbH0gZnJvbSAnLi9lbnYnXG5cbi8qKlxuICogQGNsYXNzXG4gKiBAbmFtZSBQaVRyZWVcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlUcmVlIHtcbiAgICAvKipcbiAgICAgKiBDcmlhIHVtYSBhcnbDs3JlIHZpcnR1YWwgb25kZSB0b2RvcyBvcyBlbGVtZW50b3Mgc2Vyw6NvIGluc3RhbmNpYXMgZGUgUGlFbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgcGFyc2UoaHRtbCkge1xuICAgICAgICBjb25zdCB0cmVlID0gbmV3IFBpVHJlZSgpO1xuICAgICAgICBpZiAoaHRtbCBpbnN0YW5jZW9mIEVsZW1lbnQpIGh0bWwgPSBodG1sLmlubmVySFRNTDtcblxuICAgICAgICBjb25zdCBkb2MgPSB0cmVlLl9sb2FkRG9jdW1lbnQoaHRtbCk7XG4gICAgICAgIGNvbnN0IHJvb3QgPSB0cmVlLl9sb2FkRWxlbWVudFJvb3QoZG9jKTtcblxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG5cbiAgICBfbG9hZERvY3VtZW50KGh0bWwpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHdwID0gbmV3IGdsb2JhbC5ET01QYXJzZXIoKTtcbiAgICAgICAgICAgIHJldHVybiB3cC5wYXJzZUZyb21TdHJpbmcoaHRtbCwgJ3RleHQvaHRtbCcpOyAvL1ZhaSBmYXplciBvIHBhcnNlIGRlIHN0cmluZyBwYXJhIEVsZW1lbnRcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQaVRyZWU6IE8gaHRtbCBpbmZvcm1hZG8gZXN0YSBmb3JtYXRhZG8gaW5jb3JyZXRhbWVudGUnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGh0bWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgX2xvYWRFbGVtZW50Um9vdChkb2MpIHtcbiAgICAgICAgaWYgKGRvYyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7IC8vIFZhaSBjcmlhciB1bSBmcmFnbWVudG8gZGEgRE9NIHByaW5jaXBhbFxuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdib2R5JylbMF07XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gWy4uLmVsZW1lbnQuY2hpbGRyZW5dO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZWxlbWVudHNbaV0pOyAvLyBWYWkgYWRpY2lvbmFsIHRvZG9zIG9zIGVsZW1lbnRvcyBkYSBET00gcHJpbmNpcGFsIHBhcmEgYSBET00gZnJhZ21lbnRhZGFcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByb290O1xuICAgIH1cbn07XG4iLCJpbXBvcnQgeyByZWdpc3RlciB9IGZyb20gXCIuL2VudlwiO1xuXG4vKipcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaVR5cGUge1xuICAgIC8qKlxuICAgICAqIFJldHVybmEgc2UgbyBwYXJhbWV0cm8gw6kgZXhhdGFtZW50ZSAndW5kZWZpbmVkJ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzVW5kZWZpbmVkKG9iaikge1xuICAgICAgICBpZiAob2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGVsc2UgaWYgKG9iaiA9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRvcm5hIG8gbm9tZSBkbyBjb25zdHJ1dG9yIGRvIG9iamV0b1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgdHlwZW9mKG9iaikge1xuICAgICAgICBsZXQgdiA9IG51bGw7XG5cbiAgICAgICAgaWYgKG9iaiAhPSB1bmRlZmluZWQgJiYgb2JqICE9IG51bGwgJiYgIVBpVHlwZS5pc051bWJlcihvYmopKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHYgPSBvYmouY29uc3RydWN0b3IubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAodiA9PSAnJykgdiA9ICdPYmplY3QnO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFBpVHlwZS5pc051bWJlcihvYmopKSB7XG4gICAgICAgICAgICByZXR1cm4gJ051bWJlcic7XG4gICAgICAgIH0gZWxzZSBpZiAob2JqID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAnVW5kZWZpbmVkJ1xuICAgICAgICB9IGVsc2UgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuICdOdWxsJztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldG9ybmEgdHJ1ZSBzZSBvIHBhcmFtZXRybyDDqSB1bSBuw7ptZXJvIG91IGZhbHNlIGNhc28gY29udHLDoXJpb1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzTnVtYmVyKG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShvYmopICYmICFpc05hTihvYmopKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5hIHRydWUgc2UgbyBwYXJhbWV0cm8gw6kgbnVsbCBvdSB1bmRlZmluZWRcbiAgICAqIFxuICAgICogQHBhcmFtIHtvYmplY3R9IG9iaiBcbiAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICovXG4gICAgc3RhdGljIGlzTnVsbE9yVW5kZWZpbmVkKG9iaikge1xuICAgICAgICBpZiAob2JqID09IG51bGwgfHwgb2JqID09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybmEgdHJ1ZSBzZSBvIHBhcmFtZXRybyDDqSB1bWEgZnVuw6fDo29cbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb2JqIFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHN0YXRpYyBpc0Z1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuYSB0cnVlIHNlIG8gcGFyYW1ldHJvIMOpIHVtIGFycmF5XG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9iaiBcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNBcnJheShvYmopIHtcbiAgICAgICAgaWYgKFBpVHlwZS50eXBlb2Yob2JqKSA9PSAnQXJyYXknKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBpZiAoUGlUeXBlLnR5cGVvZihvYmopID09ICdTdHJpbmcnKSB7XG4gICAgICAgICAgICBpZiAoL15cXFsuKlxcXSQvZ2kudGVzdChvYmopKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0b3JuYSB0cnVlIHNlIG8gcGFyYW1ldHJvIMOpIHVtIE9iamVjdFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzT2JqZWN0KG9iaikge1xuICAgICAgICBpZiAoUGlUeXBlLnR5cGVvZihvYmopID09ICdPYmplY3QnKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmogPT0gJ29iamVjdCcpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIGlmIChQaVR5cGUudHlwZW9mKG9iaikgPT0gJ1N0cmluZycpIHtcbiAgICAgICAgICAgIGlmICgvXlxcey4qXFx9JC9naS50ZXN0KG9iaikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5hIHRydWUgc2UgbyBwYXJhbWV0cm8gw6kgdW1hIHN0cmluZ1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgc3RhdGljIGlzU3RyaW5nKG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PSAnc3RyaW5nJykgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybmEgdHJ1ZSBzZSBvIHBhcmFtZXRybyDDqSB1bSBCb29sZWFuXG4gICAgICogXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9iaiBcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNCb29sZWFuKG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PSAnYm9vbGVhbicpIHJldHVybiB0cnVlO1xuICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICB9XG59O1xuXG5yZWdpc3RlcihQaVR5cGUpOyIsImltcG9ydCBQaUFzIGZyb20gJy4vYWxpYXMnO1xuaW1wb3J0IFBpQ2xhc3MgZnJvbSAnLi9jbGFzcyc7XG5pbXBvcnQgUGlUeXBlIGZyb20gJy4vdHlwZSc7XG5pbXBvcnQgUGlTdHJpbmcgZnJvbSAnLi9zdHJpbmcnO1xuaW1wb3J0IHsgbG9jYXRpb24sIHJlZ2lzdGVyLCBzZXRMb2NhdGlvbiB9IGZyb20gJy4vZW52J1xuXG4vKipcbiAqIEBjbGFzc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaVVybCBleHRlbmRzIFBpQ2xhc3Mge1xuICAgIHN0YXRpYyBhbGlhcyA9IG5ldyBQaUFzKCk7XG5cbiAgICBpbml0KCkge1xuICAgICAgICBsZXQgYXJyID0gYXJndW1lbnRzLFxuICAgICAgICAgICAgdXJsID0gJyc7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhbGlhcyA9IGFycltpXTtcblxuICAgICAgICAgICAgaWYgKFBpVXJsLmFsaWFzLmV4aXN0KGFycltpXSkpIHtcbiAgICAgICAgICAgICAgICBhbGlhcyA9IFBpVXJsLmFsaWFzLmdldFZhbHVlKGFycltpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhbGlhc1swXSA9PSAnLycgJiYgdXJsW3VybC5sZW5ndGggLSAxXSA9PSAnLycpIHtcbiAgICAgICAgICAgICAgICB1cmwgKz0gYWxpYXMuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1cmwgKz0gYWxpYXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VXJsKHVybCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIGEgdXJsXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm5zIHtQaVVybH1cbiAgICAgKi9cbiAgICBzZXRVcmwodXJsKSB7XG4gICAgICAgIGlmIChQaVVybC5hbGlhcy5leGlzdCh1cmwpKSB7XG4gICAgICAgICAgICB1cmwgPSBQaVVybC5hbGlhcy5nZXRWYWx1ZSh1cmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFBpVXJsLmlzVmFsaWQodXJsKSkgdGhpcy5fdXJsID0gdXJsO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9idGVtIG8gc2NoZW1lIGRhIHVybFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2NoZW1lKCkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKSxcbiAgICAgICAgICAgIGkgPSB1cmwuaW5kZXhPZignOicpO1xuXG4gICAgICAgIGlmIChpIDwgMCkgcmV0dXJuICcnO1xuICAgICAgICByZXR1cm4gdXJsLnN1YnN0cigwLCBpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgb3Ugb2J0ZW0gbyBob3N0IGRhIHVybFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBob3N0XG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBob3N0KGhvc3QpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCksXG4gICAgICAgICAgICBoID0gdGhpcy5fcGFyc2UodXJsLCAnaG9zdCcpO1xuXG4gICAgICAgIGlmIChob3N0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRVcmwodXJsLnJlcGxhY2UoaCwgaG9zdCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgb3Ugb2J0ZW0gYSBwb3J0YSBkYSB1cmxcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xpbnR9IHBvcnQgXG4gICAgICogQHJldHVybnMge1BpVXJsfGludH1cbiAgICAgKi9cbiAgICBwb3J0KHBvcnQpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsKCksXG4gICAgICAgICAgICBwID0gdGhpcy5fcGFyc2UodXJsLCAncG9ydCcpIHx8ICcnO1xuXG4gICAgICAgIGlmIChQaVR5cGUuaXNVbmRlZmluZWQocG9ydCkpIHtcbiAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHB0ID0gdGhpcy5wb3J0KCkgfHwgJycsXG4gICAgICAgICAgICBocmVmID0gdGhpcy5ocmVmKCk7XG5cbiAgICAgICAgaWYgKHB0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShocmVmLCBocmVmICsgJzonICsgcG9ydCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB1cmwgPSB1cmwucmVwbGFjZShwLCBwb3J0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VXJsKHVybCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIG91IG9idGVtIG8gaHJlZiBkYSB1cmxcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gSHJlZlxuICAgICAqIEByZXR1cm5zIHtQaVVybHxzdHJpbmd9XG4gICAgICovXG4gICAgaHJlZih1cmwpIHtcbiAgICAgICAgbGV0IHUgPSB0aGlzLmhvc3QoKSxcbiAgICAgICAgICAgIGggPSB1LFxuICAgICAgICAgICAgcyA9IHRoaXMuX3BhcnNlKHRoaXMuZ2V0VXJsKCksICdzY2hlbWUnKTtcblxuICAgICAgICBpZiAodXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxldCBwID0gdGhpcy5wb3J0KCk7XG5cbiAgICAgICAgICAgIGlmIChwLmxlbmd0aCA9PSAwKSBwID0gJyc7XG4gICAgICAgICAgICBlbHNlIHAgPSAnOicgKyBwO1xuXG4gICAgICAgICAgICBpZiAocy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaCA9IHMgKyAnOi8vJyArIHUgKyBwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoID0gdSArIHA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBoO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRVcmwodXJsKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgb3Ugb2J0ZW0gbyBoYXNoIGRhIHVybFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoIFxuICAgICAqIEByZXR1cm5zIHtQaVVybHxzdHJpbmd9XG4gICAgICovXG4gICAgaGFzaChoYXNoKSB7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFVybCgpLFxuICAgICAgICAgICAgaGggPSB0aGlzLl9wYXJzZSh1cmwsICdoYXNoJyk7XG5cbiAgICAgICAgaWYgKGhhc2ggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGhoO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAoaGgubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVybCh1cmwgKyAnIycgKyBoYXNoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRVcmwodXJsLnJlcGxhY2UoaGgsIGhhc2gpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbmV4YSBhbyBwYXRoIGRhIHVybCBvIHBhdGggaW5mb3JtYWRvXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggXG4gICAgICogQHJldHVybnMge1BpVXJsfVxuICAgICAqL1xuICAgIGFwcGVuZFBhdGgocGF0aCkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKSxcbiAgICAgICAgICAgIHAgPSB0aGlzLl9wYXJzZSh1cmwsICdwYXRoJyk7XG5cbiAgICAgICAgaWYgKFBpVXJsLmFsaWFzLmV4aXN0KHBhdGgpKSB7XG4gICAgICAgICAgICBwYXRoID0gUGlVcmwuYWxpYXMuZ2V0VmFsdWUocGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXJsLnN1YnN0cmluZyh1cmwubGVuZ3RoIC0gMSkgIT0gJy8nKSB1cmwgKz0gJy8nO1xuICAgICAgICB0aGlzLnNldFVybCh1cmwgKyBwYXRoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIG91IG9idGVtIG8gcGF0aCBkYSB1cmxcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBcbiAgICAgKiBAcmV0dXJucyB7UGlVcmx8c3RyaW5nfVxuICAgICAqL1xuICAgIHBhdGgocGF0aCkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKSxcbiAgICAgICAgICAgIHAgPSB0aGlzLl9wYXJzZSh1cmwsICdwYXRoJyksXG4gICAgICAgICAgICBwcCA9ICcvJyArIHA7XG5cbiAgICAgICAgaWYgKHBhdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHBwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFBpVXJsLmFsaWFzLmV4aXN0KHBhdGgpKSB7XG4gICAgICAgICAgICBwYXRoID0gUGlVcmwuYWxpYXMuZ2V0VmFsdWUocGF0aCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgaWYgKHVybC5zdWJzdHJpbmcodXJsLmxlbmd0aCAtIDEpICE9ICcvJyAmJiBwYXRoLmNoYXJBdCgwKSAhPSAnLycpIHVybCArPSAnLycgKyBwYXRoO1xuICAgICAgICAgICAgZWxzZSB1cmwgKz0gcGF0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVybCA9IHVybC5yZXBsYWNlKHBwLCBwYXRoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0VXJsKHVybCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lIG91IG9idGVtIG8gZmlsZW5hbWUgZGEgdXJsXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVuYW1lIFxuICAgICAqIEByZXR1cm5zIHtQaVVybHxzdHJpbn1cbiAgICAgKi9cbiAgICBmaWxlbmFtZShmaWxlbmFtZSkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKTtcblxuICAgICAgICBpZiAoZmlsZW5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHVybC5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvLipcXC8vLCAnJykucmVwbGFjZSgvXFw/LiovLCAnJykgfHwgJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgdSA9IHRoaXMuZ2V0VXJsKCksXG4gICAgICAgICAgICAgICAgZiA9IHRoaXMuZmlsZW5hbWUoKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRVcmwodS5yZXBsYWNlKGYsIGZpbGVuYW1lKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZSBvdSBvYnRlbSBhIHF1ZXJ5IHN0cmluZyBkYSB1cmxcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlcnkgXG4gICAgICogQHJldHVybnMge1BpVXJsfHN0cmluZ31cbiAgICAgKi9cbiAgICBxdWVyeShxdWVyeSkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmwoKSxcbiAgICAgICAgICAgIHAgPSB0aGlzLl9wYXJzZSh1cmwsICdxdWVyeScpO1xuXG4gICAgICAgIGlmIChxdWVyeSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBxID0gdGhpcy5xdWVyeSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRVcmwodXJsLnJlcGxhY2UocSwgcXVlcnkpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRpY2lvbmEgdW1hIHZhbG9yIGEgcXVlcnkgc3RyaW5nXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIENoYXZlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVmFsb3JcbiAgICAgKiBAcmV0dXJucyB7UGlVcmx9XG4gICAgICovXG4gICAgYWRkUXVlcnkoa2V5LCB2YWx1ZSkge1xuICAgICAgICBsZXQgcSA9IHRoaXMucXVlcnkoKSxcbiAgICAgICAgICAgIHVybCA9IHRoaXMuZ2V0VXJsKCksXG4gICAgICAgICAgICBxcyA9IFBpU3RyaW5nLmZvcm1hdCgnezF9PXsyfScsIHVybCwga2V5LCBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICBpZiAocS5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zZXRVcmwodXJsICsgJz8nICsgcXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRVcmwodXJsICsgJyYnICsgcXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT2J0ZW0gdW0gdmFsb3IgZGEgcXVlcnkgc3RyaW5nIHBlbGEgc3VhIGNoYXZlXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIENoYXZlXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRRdWVyeShrZXkpIHtcbiAgICAgICAgbGV0IHFzID0gdGhpcy5xdWVyeSgpLnNwbGl0KCcmJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBxcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHEgPSBxc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgaWYgKHFbMF0gPT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChxWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYnRlbSBvIGRpcm5hbWUgZGEgdXJsXG4gICAgICogXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBkaXJuYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRVcmwoKS5yZXBsYWNlKC9cXFxcL2csICcvJykucmVwbGFjZSgvXFwvW15cXC9dKiQvLCAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0b3JuYSBhIHVybCBmb3JtYXRhZGFcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVybCgpIHtcbiAgICAgICAgLy8gdmFyIG0gPSB0aGlzLm9wdGlvbnM7XG5cbiAgICAgICAgLy8gaWYgKFBpU3ViZG9tYWlucy5leGlzdChtKSkge1xuICAgICAgICAvLyAgICAgdmFyIHMgPSBQaVN1YmRvbWFpbnMubmV4dChtKTtcbiAgICAgICAgLy8gICAgIHJldHVybiBQaVN0cmluZy5mb3JtYXQodGhpcy51cmwsIHMpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3VybCB8fCAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGlhcyB0byBnZXRVcmxcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW59XG4gICAgICovXG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFVybCgpO1xuICAgIH1cblxuICAgIF9wYXJzZSh1cmwsIHBhcnRlKSB7XG4gICAgICAgIGxldCBwID0geyAndXJsJzogMCwgJ3NjaGVtZSc6IDEsICdzbGFzaCc6IDIsICdob3N0JzogMywgJ3BvcnQnOiA0LCAncGF0aCc6IDUsICdxdWVyeSc6IDYsICdoYXNoJzogNyB9LFxuICAgICAgICAgICAgcGF0dGVybiA9IC9eKD86KFtBLVphLXpdKyk6KT8oXFwvezAsM30pKFswLTkuXFwtQS1aYS16XSspKD86OihcXGQrKSk/KD86XFwvKFtePyNdKikpPyg/OlxcPyhbXiNdKikpPyg/OiMoLiopKT8kLyxcbiAgICAgICAgICAgIHMgPSBwYXR0ZXJuLmV4ZWModXJsIHx8ICcnKTtcblxuICAgICAgICBpZiAocyA9PSBudWxsKSByZXR1cm4gJyc7XG4gICAgICAgIHJldHVybiBzW3BbcGFydGVdXSB8fCAnJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBWZXJpZmljYSBzZSBhIHVybCBpbmZvcm1hZGEgw6kgdmFsaWRhXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdGF0aWMgaXNWYWxpZCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIC8oaHR0cHxodHRwc3wpKDpcXC9cXC98KShbXFx3LV0rXFwuPykrW1xcdy1dKyhcXC9bXFx3LSAuXFwvPyUmPV0qKT8vLnRlc3QodXJsIHx8ICcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSBhIGxpc3RhIGRlIHBhcmFtZXRyb3MgYSB1cmxcbiAgICAgKiBcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkKCkge1xuICAgICAgICBQaVVybC5hbGlhcy5hZGQuYXBwbHkoUGlVcmwuYWxpYXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0KG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIFBpVXJsLmFsaWFzLmdldFZhbHVlKG5hbWUpO1xuICAgIH1cblxuICAgIHN0YXRpYyB0bygpIHtcbiAgICAgICAgbGV0IGFyciA9IGFyZ3VtZW50cyxcbiAgICAgICAgICAgIHVybCA9ICcnO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYWxpYXMgPSBhcnJbaV07XG5cbiAgICAgICAgICAgIGlmIChQaVVybC5hbGlhcy5leGlzdChhcnJbaV0pKSB7XG4gICAgICAgICAgICAgICAgYWxpYXMgPSBQaVVybC5hbGlhcy5nZXRWYWx1ZShhcnJbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWxpYXNbMF0gPT0gJy8nICYmIHVybFt1cmwubGVuZ3RoIC0gMV0gPT0gJy8nKSB7XG4gICAgICAgICAgICAgICAgdXJsICs9IGFsaWFzLnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsICs9IGFsaWFzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBzZXRMb2NhdGlvbih1cmwpO1xuICAgIH1cblxuICAgIHN0YXRpYyBxdWVyeShxdWVyeSkge1xuICAgICAgICBsZXQgcSA9IFBpVXJsLmNyZWF0ZShsb2NhdGlvbigpKS5xdWVyeSgpLFxuICAgICAgICAgICAgcCA9IHEuc3BsaXQoJyYnKTtcblxuICAgICAgICBmb3IgKGxldCBpIGluIHApIHtcbiAgICAgICAgICAgIGxldCBwcCA9IHBbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGlmIChwcFswXSA9PSBxdWVyeSkgcmV0dXJuIHBwWzFdO1xuICAgICAgICB9XG4gICAgfVxuXG59O1xuXG5yZWdpc3RlcihQaVVybCk7IiwiaW1wb3J0IFBpUmFuZG9tIGZyb20gJy4vcmFuZG9tJ1xuaW1wb3J0IHtnbG9iYWwsIGxvY2F0aW9uLCByZWdpc3Rlcn0gZnJvbSAnLi9lbnYnXG5pbXBvcnQgUGlUeXBlIGZyb20gJy4vdHlwZSdcblxuLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlVcmxIYXNoIHtcbiAgICBzdGF0aWMgX2NhbGxiYWNrcyA9IFtdO1xuICAgIHN0YXRpYyBfZm5XaWxsQ2hhbmdlcyA9IFtdO1xuICAgIHN0YXRpYyBfZm5EaWRDaGFuZ2VzID0gW107XG4gICAgI2hhc2hJZCA9IDA7XG5cbiAgICAvKipcbiAgICAgKiBEaXNwYXJhZG8gc2VtcHJlIHF1ZSBhIGhhc2ggZGEgdXJsIGZvciBhbHRlcmFkYVxuICAgICAqL1xuICAgIGhhc2hEaWRDaGFuZ2UoKSB7XG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPYnNlcnZhIG11ZGFuw6dhcyBubyBoYXNoIGRhIHVybFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtQaVVybEhhc2h9XG4gICAgICovXG4gICAgbGlzdGVuKCkge1xuICAgICAgICB0aGlzLiNoYXNoSWQgPSBQaVJhbmRvbS51dWlkKCd4eHgteHh4Jyk7XG5cbiAgICAgICAgUGlVcmxIYXNoLl9jYWxsYmFja3MucHVzaCh7XG4gICAgICAgICAgICBpZDogdGhpcy4jaGFzaElkLFxuICAgICAgICAgICAgY2I6ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5oYXNoRGlkQ2hhbmdlKFBpVXJsSGFzaC5nZXQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlaXhhIGRlIG9ic2VydmFyIG11ZGFuw6dhcyBubyBoYXNoIGRhIHVybFxuICAgICAqIFxuICAgICAqIEByZXR1cm5zIHtQaVVybEhhc2h9XG4gICAgICovXG4gICAgdW5saXN0ZW4oKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IFBpVXJsSGFzaC5fY2FsbGJhY2tzO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gYXJyW2ldO1xuICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT0gdGhpcy4jaGFzaElkKSB7XG4gICAgICAgICAgICAgICAgUGlVcmxIYXNoLl9jYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRvcm5hIG8gdmFsb3IgYXR1YWwgZG8gaGFzaCBkYSB1cmxcbiAgICAgKiBcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXQoKSB7XG4gICAgICAgIGxldCBoID0gbG9jYXRpb24oKS5oYXNoO1xuICAgICAgICBoID0gaC5sZW5ndGggPT0gMCA/IGggOiBoLnN1YnN0cigxKTtcblxuICAgICAgICByZXR1cm4gaDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmUgbyB2YWxvciBkbyBoYXNoIGRhIHVybFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoIC0gVmFsb3IgZG8gaGFzaFxuICAgICAqL1xuICAgIHN0YXRpYyB0byhoYXNoKSB7XG4gICAgICAgIGxldCBoID0gUGlVcmxIYXNoLmdldCgpO1xuICAgICAgICBsZXQgcSA9IGguaW5kZXhPZignPycpO1xuXG4gICAgICAgIGlmIChxID4gLTEpIHtcbiAgICAgICAgICAgIHEgPSBoLnN1YnN0cihxKTtcbiAgICAgICAgICAgIGggPSBoLnN1YnN0cigwLCBxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHEgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgnIScgKyBoID09IGhhc2ggfHwgJyEnICsgaGFzaCA9PSBoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChxLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGhhc2ggKz0gcTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2F0aW9uKCkuaGFzaCA9IGhhc2g7XG5cbiAgICAgICAgcmV0dXJuIFBpVXJsSGFzaDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXRvcm5hIG8gdmFsb3IgZGEgcXVlcnkgc3RyaW5nIG5vIGhhc2ggZGEgdXJsXG4gICAgICogXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleSAtIENoYXZlIGRhIHF1ZXJ5IHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc3RhdGljIGdldFF1ZXJ5U3RyaW5nKGtleSkge1xuICAgICAgICBsZXQgaCA9IFBpVXJsSGFzaC5nZXQoKTtcbiAgICAgICAgbGV0IHBzID0gaC5zcGxpdCgnPycpO1xuXG4gICAgICAgIGlmIChwcy5sZW5ndGggPCAyKSByZXR1cm4gJyc7XG4gICAgICAgIGxldCBrdiA9IHBzWzFdLnNwbGl0KCcmJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwga3YubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrID0ga3ZbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGlmIChrWzBdID09IGtleSkgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChrWzFdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0UXVlcnlJbnQoa2V5KSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChQaVVybEhhc2guZ2V0UXVlcnlTdHJpbmcoa2V5KSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFF1ZXJ5RmxvYXQoa2V5KSB7XG4gICAgICAgIHJldHVybiBwYXJzZUZsb2F0KFBpVXJsSGFzaC5nZXRRdWVyeVN0cmluZyhrZXkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgdW0gcGFyIGNoYXZlLXZhbG9yIGRhIHF1ZXJ5IHN0cmluZyBkbyBoYXNoIGRhIHVybFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBDaGF2ZSBkYSBxdWVyeSBzdHJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVtb3ZlUXVlcnlTdHJpbmcoa2V5KSB7XG4gICAgICAgIGxldCBoID0gUGlVcmxIYXNoLmdldCgpO1xuICAgICAgICBsZXQgcHMgPSBoLnNwbGl0KCc/Jyk7XG5cbiAgICAgICAgaWYgKGtleSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxvY2F0aW9uKCkuaGFzaCA9IHBzWzBdO1xuICAgICAgICAgICAgcmV0dXJuIFBpVXJsSGFzaDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwID0gW107XG4gICAgICAgIGxldCBtYXAgPSBbXTtcblxuICAgICAgICBpZiAocHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcCA9IHBzWzFdLnNwbGl0KCcmJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocFtpXS5sZW5ndGggPT0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBsZXQgX3BzID0gcFtpXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIG1hcFtfcHNbMF1dID0gX3BzWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIG1hcFtrZXldO1xuXG4gICAgICAgIHZhciBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbWFwKSB7XG4gICAgICAgICAgICBhcnIucHVzaChgJHtrZXl9PSR7bWFwW2tleV19YCk7XG4gICAgICAgIH1cblxuICAgICAgICBsb2NhdGlvbigpLmhhc2ggPSBgJHtwc1swXX0/JHthcnIuam9pbignJicpfWA7XG5cbiAgICAgICAgcmV0dXJuIFBpVXJsSGFzaDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGljaW9uYSB1bSBwYXIgY2hhdmUtdmFsb3IgcGFyYSBhIHF1ZXJ5IHN0cmluZyBkbyBoYXNoIGRhIHVybFxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgLSBDaGF2ZSBkYSBxdWVyeSBzdHJpbmdcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBWYWxvciBkYSBxdWVyeSBzdHJpbmdcbiAgICAgKi9cbiAgICBzdGF0aWMgYWRkUXVlcnlTdHJpbmcoa2V5LCB2YWx1ZSA9ICcnKSB7XG4gICAgICAgIGxldCBoID0gUGlVcmxIYXNoLmdldCgpO1xuICAgICAgICBsZXQgcHMgPSBoLnNwbGl0KCc/Jyk7XG4gICAgICAgIGxldCBwID0gW107XG4gICAgICAgIGxldCBtYXAgPSBbXTtcblxuICAgICAgICBpZiAocHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgcCA9IHBzWzFdLnNwbGl0KCcmJyk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAocFtpXS5sZW5ndGggPT0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBsZXQgX3BzID0gcFtpXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgICAgIG1hcFtfcHNbMF1dID0gX3BzWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWFwW2tleV0gPSB2YWx1ZSB8fCAnJztcbiAgICAgICAgdmFyIGFyciA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBtYXApIHtcbiAgICAgICAgICAgIGFyci5wdXNoKGAke2tleX09JHttYXBba2V5XX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxvY2F0aW9uKCkuaGFzaCA9IGAke3BzWzBdfT8ke2Fyci5qb2luKCcmJyl9YDtcblxuICAgICAgICByZXR1cm4gUGlVcmxIYXNoO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkaWNpb25hIGFycmF5IGRlIHBhdGhzIHBhcmEgbyBoYXNoIGRhIHVybFxuICAgICAqIFxuICAgICAqIEBwYXJhbSAgey4uLmFueX0gYXJncyAtIEFycmF5IGRlIHBhdGhzXG4gICAgICovXG4gICAgc3RhdGljIGFkZCguLi5hcmdzKSB7XG4gICAgICAgIGxldCBoID0gUGlVcmxIYXNoLmdldCgpO1xuXG4gICAgICAgIGlmIChoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIFBpVXJsSGFzaC50byhoICsgJy8nICsgYXJncy5qb2luKCcvJykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUGlVcmxIYXNoLnRvKGFyZ3Muam9pbignLycpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBkbyBoYXNoIGRhIHVybCBvIHZhbG9yIGluZm9ybWFkb1xuICAgICAqIFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgLSBTdHJpbmcgYSBzZXIgcmVtb3ZpZGFcbiAgICAgKiBAcmV0dXJucyB7UGlVcmxoYXNofVxuICAgICAqL1xuICAgIHN0YXRpYyByZW1vdmUoc3RyKSB7XG4gICAgICAgIGxvY2F0aW9uKCkuaGFzaCA9IGxvY2F0aW9uKCkuaGFzaC5yZXBsYWNlKHN0ciwgJycpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN0YXRpYyBvbldpbGxDaGFuZ2UoZm4pIHtcbiAgICAgICAgUGlVcmxIYXNoLl9mbldpbGxDaGFuZ2VzLnB1c2goZm4pO1xuICAgIH1cblxuICAgIHN0YXRpYyBvbkRpZENoYW5nZShmbikge1xuICAgICAgICBQaVVybEhhc2guX2ZuRGlkQ2hhbmdlLnB1c2goZm4pO1xuICAgIH1cblxufTtcblxudmFyIGxhc3RIYXNoID0gbnVsbDtcbmdsb2JhbC5vbmhhc2hjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGxhc3RIYXNoID09IFBpVXJsSGFzaC5nZXQoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxhc3RIYXNoID0gUGlVcmxIYXNoLmdldCgpO1xuXG4gICAgY29uc3QgYXJyID0gUGlVcmxIYXNoLl9jYWxsYmFja3M7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFBpVXJsSGFzaC5fZm5XaWxsQ2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBQaVVybEhhc2guX2ZuV2lsbENoYW5nZXNbaV0obGFzdEhhc2gpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGFycltpXS5jYigpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUGlVcmxIYXNoLl9mbkRpZENoYW5nZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgUGlVcmxIYXNoLl9mbkRpZENoYW5nZXNbaV0obGFzdEhhc2gpO1xuICAgIH1cbn07XG5cbnJlZ2lzdGVyKFBpVXJsSGFzaCk7IiwiaW1wb3J0IFBpRWxlbWVudCBmcm9tIFwiLi9lbGVtZW50XCI7XG5pbXBvcnQgeyBmaW5kQ2xhc3MgfSBmcm9tICcuL2VudidcblxuLyoqXG4gKiBAY2xhc3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGlWaXJ0dWFsVHJlZSB7XG4gICAgI2VsZW1lbnRzUGFyZW50ID0gbnVsbDtcbiAgICAjdmVsZW1lbnRzID0gW107XG4gICAgI2NvbXBvbmVudHMgPSBbXTtcbiAgICAjY29tcG9uZW50c1BhcmFtcyA9IFtdO1xuICAgICNjb21wb25lbnRQYXJlbnQgPSBudWxsO1xuICAgICNob29rID0gW107XG4gICAgI3Njb3BlID0geyBjb250ZXh0OiB7fSB9O1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgc2NvcGUgPSB7IGNvbnRleHQ6IHt9IH0sIGNvbXBvbmVudFBhcmVudCA9IG51bGwpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHNQYXJlbnQgPSBlbGVtZW50O1xuICAgICAgICB9IGVsc2UgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbikge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHNQYXJlbnQgPSBlbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4jZWxlbWVudHNQYXJlbnQgPSBbZWxlbWVudF07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiNjb21wb25lbnRQYXJlbnQgPSBjb21wb25lbnRQYXJlbnQ7XG4gICAgICAgIHRoaXMuI3Njb3BlID0gc2NvcGU7XG4gICAgfVxuXG4gICAgaG9vayhuYW1lLCBmbikge1xuICAgICAgICB0aGlzLiNob29rW25hbWVdID0gZm47XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgdGhpcy5fY3JlYXRlVmlydHVhbEVsZW1lbnRzKHRoaXMuI2VsZW1lbnRzUGFyZW50KTtcbiAgICAgICAgdGhpcy5fY3JlYXRlQ29tcG9uZW50cygpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jdmVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy4jdmVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2NvbXBvbmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuI2NvbXBvbmVudHNbaV0uZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4jdmVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuI2NvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgdGhpcy4jY29tcG9uZW50c1BhcmFtcyA9IFtdO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIF9jcmVhdGVDb21wb25lbnQoY29tcG9uZW50TmFtZSkge1xuICAgICAgICBjb25zdCBfX2NvbnN0cnVjdG9yID0gZmluZENsYXNzKGNvbXBvbmVudE5hbWUpO1xuXG4gICAgICAgIGlmIChfX2NvbnN0cnVjdG9yID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgYENvbXBvbmVudCBuw6NvIGxvY2FsaXphZG86ICR7Y29tcG9uZW50TmFtZX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBfX2NvbnN0cnVjdG9yKCk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNvbXBvbmVudHMoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jY29tcG9uZW50c1BhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0gdGhpcy4jY29tcG9uZW50c1BhcmFtc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudE5hbWUgPSBwYXJhbXMuY29tcG9uZW50TmFtZTtcbiAgICAgICAgICAgIGNvbnN0IHZlbGVtZW50ID0gcGFyYW1zLnZlbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHZlbGVtZW50Ll9lbGVtZW50O1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XG5cbiAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4jY29tcG9uZW50UGFyZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy4jY29tcG9uZW50UGFyZW50W25hbWVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuX2NyZWF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuI2NvbXBvbmVudFBhcmVudFtuYW1lXSA9IGNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuX2NyZWF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuX2NyZWF0ZUNvbXBvbmVudChjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmVsZW1lbnQuc2V0Q29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgICAgICAgICBjb21wb25lbnQucmVuZGVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy4jY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY3JlYXRlVmlydHVhbEVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gICAgICAgIGlmIChlbGVtZW50cyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID09IDEgJiYgZWxlbWVudHNbMF0gaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KSB7XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVWaXJ0dWFsRWxlbWVudHMoZWxlbWVudHNbMF0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsZW1lbnRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFRleHQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU2NyaXB0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTdHlsZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuX3BpZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VIb29rKCd3aWxsOmNyZWF0ZTp2ZWxlbWVudCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlbGVtZW50ID0gbmV3IFBpRWxlbWVudChlbGVtZW50LCB0aGlzLiNzY29wZSwgdGhpcy4jY29tcG9uZW50UGFyZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbnZva2VIb29rKCdkaWQ6Y3JlYXRlOnZlbGVtZW50JywgdmVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2ludm9rZUhvb2soJ3dpbGw6bG9hZDp2ZWxlbWVudCcsIHZlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB2ZWxlbWVudC5sb2FkKHRoaXMuI2NvbXBvbmVudFBhcmVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5faW52b2tlSG9vaygnZGlkOmxvYWQ6dmVsZW1lbnQnLCB2ZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodmVsZW1lbnQuaXNEZXN0cm95ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb21wb25lbnROYW1lID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NvbXBvbmVudCcpO1xuICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnROYW1lICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4jY29tcG9uZW50c1BhcmFtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlbGVtZW50OiB2ZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudE5hbWU6IGNvbXBvbmVudE5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy4jdmVsZW1lbnRzLnB1c2godmVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVWaXJ0dWFsRWxlbWVudHMoZWxlbWVudC5jaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfaW52b2tlSG9vayhuYW1lLCAuLi5wYXJhbXMpIHtcbiAgICAgICAgaWYgKHRoaXMuI2hvb2tbbmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuI2hvb2tbbmFtZV0oLi4ucGFyYW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NpZnJhQW5pbWUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ2lmcmFBbmltZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ2lmcmFWaWV3LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NpZnJhVmlldy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSG9tZVBhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSG9tZVBhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBnbG9iYWwgfSBmcm9tIFwicHlsbGFyL2VudlwiO1xyXG5pbXBvcnQgQm9vdHN0cmFwIGZyb20gXCJweWxsYXIvYm9vdHN0cmFwXCI7XHJcbmltcG9ydCBQaUNvbmZpZyBmcm9tIFwicHlsbGFyL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IEhvbWVQYWdlIGZyb20gXCIuL2hvbWVwYWdlL0hvbWVQYWdlXCI7XHJcbmltcG9ydCBDaWZyYVZpZXcgZnJvbSBcIi4vY2lmcmEvQ2lmcmFWaWV3XCI7XHJcblxyXG5pbXBvcnQgXCIuL2FwcC5jc3NcIlxyXG5cclxuaWYgKHdpbmRvdy5hcHBTZXR0aW5ncykge1xyXG4gICAgUGlDb25maWcubG9hZChhcHBTZXR0aW5ncyk7XHJcbn1cclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5sb2NhbFN0b3JhZ2UgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIFN0b3JhZ2UgPSBmdW5jdGlvbiAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQ29va2llKG5hbWUsIHZhbHVlLCBkYXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4cGlyZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRheXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlcyA9IFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b0dNVFN0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyZXMgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lICsgXCI9XCIgKyB2YWx1ZSArIGV4cGlyZXMgKyBcIjsgcGF0aD0vXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVhZENvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWVFUSA9IG5hbWUgKyBcIj1cIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjID0gY2FbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PSAnICcpIGMgPSBjLnN1YnN0cmluZygxLCBjLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PSAwKSByZXR1cm4gYy5zdWJzdHJpbmcobmFtZUVRLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBlcmFzZUNvb2tpZShuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ29va2llKG5hbWUsIFwiXCIsIC0xKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjbGVhckNvb2tpZXMoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29va2llID0gY29va2llc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVxUG9zID0gY29va2llLmluZGV4T2YoXCI9XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbmFtZSA9IGVxUG9zID4gLTEgPyBjb29raWUuc3Vic3RyKDAsIGVxUG9zKSA6IGNvb2tpZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gbmFtZSArIFwiPTtleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDAgR01UXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlQ29va2llKGtleSwgdmFsdWUsIDM2NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBnZXRJdGVtOiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWFkQ29va2llKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICByZW1vdmVJdGVtOiBmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVyYXNlQ29va2llKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjbGVhcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckNvb2tpZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZSA9IG5ldyBTdG9yYWdlKCdsb2NhbCcpO1xyXG4gICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UgPSBuZXcgU3RvcmFnZSgnc2Vzc2lvbicpO1xyXG5cclxuICAgICAgICB9KSgpO1xyXG4gICAgfVxyXG59KSgpO1xyXG5cclxuXHJcblBpQ29uZmlnLnNldCgncmVxdWVzdC5mZXRjaCcsIGZ1bmN0aW9uICh1cmwsIHNldHRpbmdzLCBzdWNjZXNzLCBlcnJvciwgbmV4dCkge1xyXG4gICAgbmV4dCgpO1xyXG59KTtcclxuXHJcbm5ldyBCb290c3RyYXAoKVxyXG4gICAgLm9uTG9hZCgoYm9vdCkgPT4ge1xyXG5cclxuICAgIH0pXHJcbiAgICAub25SZWFkeSgoYm9vdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhvbWVwYWdlID0gbmV3IEhvbWVQYWdlKCk7XHJcbiAgICAgICAgaG9tZXBhZ2UucmVuZGVyKGdsb2JhbC5hcHAuJGVsZW1lbnQpO1xyXG4gICAgICAgIGhvbWVwYWdlLnNldFZpZXcobmV3IENpZnJhVmlldygpKTtcclxuICAgIH0pXHJcbiAgICAubG9hZCgpOyJdLCJuYW1lcyI6WyJQaUNvbXBvbmVudCIsIkNpZnJhQW5pbWUiLCJfUGlDb21wb25lbnQiLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX2NhbGxTdXBlciIsImNvbmNhdCIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9pbmhlcml0cyIsIl9jcmVhdGVDbGFzcyIsImRlZmF1bHQiLCJQaUNvbmZpZyIsIlBpTW9kZWwiLCJDaWZyYU1vZGVsIiwiX1BpTW9kZWwiLCJrZXkiLCJ2YWx1ZSIsImluaXQiLCJfZ2V0IiwiX2dldFByb3RvdHlwZU9mIiwicHJvdG90eXBlIiwiY2FsbCIsImdldCIsImluaXRXaXRoSnNvbiIsImpzb24iLCJhY3Rpb25zIiwiQ2lmcmFTdHJlYW0iLCJob3N0Iiwib25OZXdDaWZyYSIsImZuIiwiZm5OZXdDaWZyYSIsIm9uTmV3Tm90ZSIsImZuTmV3Tm90ZSIsIl9wcm9jZXNzRXZlbnQiLCJlIiwiZXZlbnQiLCJKU09OIiwicGFyc2UiLCJkYXRhIiwidHlwZSIsImlkIiwidGhlbiIsImNpZnJhIiwibm90ZSIsImVycm9yIiwiY29ubmVjdCIsIl90aGlzMiIsInNvY2tldCIsIldlYlNvY2tldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwic2VuZCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJ0IiwiciIsIk9iamVjdCIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwiYXJnIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJfZGVmaW5lUHJvcGVydGllcyIsIl90b1Byb3BlcnR5S2V5IiwiX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4iLCJfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0IiwiUmVmbGVjdCIsImNvbnN0cnVjdCIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJSZWZlcmVuY2VFcnJvciIsIkJvb2xlYW4iLCJ2YWx1ZU9mIiwiYmluZCIsIl9zZXRQcm90b3R5cGVPZiIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiTWFyY2Fkb3IiLCJOb3Rlc0NvbGxlY3Rpb24iLCJDaWZyYVZpZXciLCJ2aWV3RGlkTG9hZCIsIl9sb2FkQ29uZmlnIiwiX2xvYWRNYXJjYWRvciIsInNldFN0cmVhbSIsInN0cmVhbSIsInNldE1hcmNhZG9yUG9zaWNhbyIsInBvc2l0aW9uIiwiX2xvYWRDaWZyYSIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0Iiwic2V0Q2lmcmEiLCJsb2FkQ2lmcmEiLCJfeCIsIl94MiIsIiRlbGVtZW50IiwiZmluZCIsImh0bWwiLCJfZm9ybWF0Tm90ZXMiLCJfZm9ybWF0VGFnIiwidGV4dG8iLCJfdGl0dWxvIiwidGl0dWxvIiwiX2xvYWROb3RlcyIsIm1hcmNhZG9yIiwibW92ZSIsIm5vdGVzIiwiZ2V0Tm90ZUJ5UG9zaXRpb24iLCJfc2F2ZU1vc3RyYXJBY29yZGVzIiwiX21vc3RyYXJBY29yZGVzIiwiX3NhdmVDb25maWciLCJfc2F2ZVJvbGFnZW1BdXRvbWF0aWNhIiwiX3JvbGFnZW1BdXRvbWF0aWNhIiwic2V0Um9sYWdlbUF1dG9tYXRpY2EiLCJfc2F2ZUV2aWRlbmNpYXJOb3RhcyIsIl9ldmlkZW5jaWFyQWNvcmRlcyIsInNob3ciLCJoaWRlIiwicmVwbGFjZSIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJjb25maWciLCJfZ2V0Q29uZmlnIiwibW9zdHJhckFjb3JkZXMiLCJyb2xhZ2VtQXV0b21hdGljYSIsImV2aWRlbmNpYXJBY29yZGVzIiwiZ2V0SXRlbSIsIl9yZWFkT25seUVycm9yIiwicmVnaXN0ZXIiLCJUcmFuc3BvcnRlTW9kZWwiLCJIb21lUGFnZSIsImluc3RhbmNlcyIsImNpZnJhU3RyZWFtIiwiX2xvYWRUcmFuc3BvcnRlIiwiX2xvYWRFdmVudHMiLCJzZXRWaWV3IiwidmlldyIsInJlbmRlciIsInRyYW5zcG9ydGUiLCJjaWZyYUlkIiwiY2lmcmFWaWV3IiwicG9zaWNhbyIsIl90aGlzMyIsIiRtYXJjYWRvciIsInciLCJ3aWR0aCIsImhlaWdodCIsImNzcyIsInRvcCIsImxlZnQiLCJzYXZlIiwic2V0VGltZW91dCIsImhpZ2hsaWdodCIsInJlc3RvcmUiLCJfbW92ZVNjcm9sbCIsImIiLCJ3aCIsImlubmVySGVpZ2h0Iiwid2gyIiwibnAiLCJudCIsInNjcm9sbFkiLCJzY3JvbGxCeSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJOb3RlIiwiJG5vdGUiLCJhdHRyIiwiX0FycmF5IiwiJG5vdGVzIiwiaW5kZXgiLCIkIiwiX3dyYXBOYXRpdmVTdXBlciIsImdsb2JhbCIsIkJvb3RzdHJhcCIsImFwcFNldHRpbmdzIiwibG9hZCIsInNlc3Npb25TdG9yYWdlIiwiU3RvcmFnZSIsImNyZWF0ZUNvb2tpZSIsImRheXMiLCJleHBpcmVzIiwiZGF0ZSIsIkRhdGUiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvR01UU3RyaW5nIiwiZG9jdW1lbnQiLCJjb29raWUiLCJyZWFkQ29va2llIiwibmFtZUVRIiwiY2EiLCJzcGxpdCIsInN1YnN0cmluZyIsImluZGV4T2YiLCJlcmFzZUNvb2tpZSIsImNsZWFyQ29va2llcyIsImNvb2tpZXMiLCJlcVBvcyIsInN1YnN0ciIsInJlbW92ZUl0ZW0iLCJjbGVhciIsInNldCIsInVybCIsInNldHRpbmdzIiwic3VjY2VzcyIsIm9uTG9hZCIsImJvb3QiLCJvblJlYWR5IiwiaG9tZXBhZ2UiLCJhcHAiXSwic291cmNlUm9vdCI6IiJ9