module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/head.js":
/*!****************************!*\
  !*** ./components/head.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);



var defaultTitle = 'LetterMesh - Decentralized Blogging';

var Head = function Head(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "UTF-8"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, props.title ? "".concat(props.title, " - ") : '', defaultTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: props.description
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon/64x64.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: props.url
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ''
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: props.description
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }));
};

Head.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  description: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  url: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"],
  ogImage: prop_types__WEBPACK_IMPORTED_MODULE_2__["string"]
};
Head.defaultProps = {
  title: '',
  description: '',
  url: 'https://lettermesh.com',
  ogImage: ''
};
/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ }),

/***/ "./components/home/styled.js":
/*!***********************************!*\
  !*** ./components/home/styled.js ***!
  \***********************************/
/*! exports provided: Hero, BlogCard, BlogDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogCard", function() { return BlogCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogDescription", function() { return BlogDescription; });
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockstack-ui */ "blockstack-ui");
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockstack_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: black;\n  text-decoration: none;\n  font-size: 22px;\n  max-width: 80%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  border-radius: 5px;\n  border: 1px solid black;\n  text-align: center;\n  text-decoration: none;\n  color: black;\n\n  img {\n    display: block;\n    max-width: 80%;\n    margin: 0px auto;\n    max-height: 80px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #bebedaa8;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Hero = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(blockstack_ui__WEBPACK_IMPORTED_MODULE_0__["Box"])(_templateObject());
var BlogCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var BlogDescription = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(blockstack_ui__WEBPACK_IMPORTED_MODULE_0__["Type"].p)(_templateObject3());

/***/ }),

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! exports provided: makeGraphiteUrl, slugify, friendlyId, makeShortId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeGraphiteUrl", function() { return makeGraphiteUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugify", function() { return slugify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friendlyId", function() { return friendlyId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeShortId", function() { return makeShortId; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
// import shortUUID from 'short-uuid';

var makeGraphiteUrl = function makeGraphiteUrl(username, id) {
  return "https://app.graphitedocs.com/shared/docs/".concat(username, "-").concat(id);
}; // copypasta from https://gist.github.com/mathewbyrne/1280286

var slugify = function slugify(text) {
  return text.toString().toLowerCase().replace(/\.+/g, '-') // Replace dots with -
  .replace(/\s+/g, '-') // Replace spaces with -
  .replace(/[^\w-]+/g, '') // Remove all non-word chars
  .replace(/--+/g, '-') // Replace multiple - with single -
  .replace(/^-+/, '') // Trim - from start of text
  .replace(/-+$/, '');
}; // Trim - from end of text

var friendlyId = function friendlyId(model) {
  return "".concat(model.attrs.friendlyId, "-").concat(slugify(model.attrs.name || model.attrs.title));
};
var makeShortId = function makeShortId() {
  shortid__WEBPACK_IMPORTED_MODULE_0___default.a.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
  return shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate();
};

/***/ }),

/***/ "./models/blog.js":
/*!************************!*\
  !*** ./models/blog.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! radiks */ "radiks");
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(radiks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import shortid from 'shortid';



var Blog =
/*#__PURE__*/
function (_UserGroup) {
  _inherits(Blog, _UserGroup);

  function Blog() {
    _classCallCheck(this, Blog);

    return _possibleConstructorReturn(this, _getPrototypeOf(Blog).apply(this, arguments));
  }

  _createClass(Blog, [{
    key: "beforeSave",
    value: function beforeSave() {
      this.attrs.friendlyId = this.attrs.friendlyId || Object(_lib_utils__WEBPACK_IMPORTED_MODULE_1__["makeShortId"])();
      return this;
    }
  }], [{
    key: "findByUrlParam",
    value: function findByUrlParam(urlParam) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        decrypt: true
      };
      var friendlyId = urlParam.split('-')[0];
      return this.findOne({
        friendlyId: friendlyId
      }, options);
    }
  }]);

  return Blog;
}(radiks__WEBPACK_IMPORTED_MODULE_0__["UserGroup"]);

_defineProperty(Blog, "schema", _objectSpread({}, radiks__WEBPACK_IMPORTED_MODULE_0__["UserGroup"].schema, {
  name: {
    type: String,
    decrypted: true
  },
  description: {
    type: String,
    decrypted: true
  },
  friendlyId: {
    type: String,
    decrypted: true
  },
  typefaceImageUrl: {
    type: String,
    decrypted: true
  }
}));



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blockstack-ui */ "blockstack-ui");
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_home_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/home/styled */ "./components/home/styled.js");
/* harmony import */ var _stores_user_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/user/actions */ "./stores/user/actions.js");
/* harmony import */ var _models_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../models/blog */ "./models/blog.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "requestInvite", function () {
      window.open('mailto:hello@lettermesh.com?subject=Requesting an Invite', '_self');
    });

    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                window.superSecretLogin = this.props.login;
                _context.next = 3;
                return this.props.handleLogIn();

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var blogs = this.props.blogs;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_6__["default"], {
        title: "Home"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
        flexWrap: "wrap"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home_styled__WEBPACK_IMPORTED_MODULE_7__["Hero"], {
        width: 1,
        px: 7,
        py: 4
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        width: [1, 3 / 4],
        pr: [0, 4]
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Type"].h1, {
        color: "black"
      }, "LetterMesh is a decentralized blogging platform."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Type"].h3, {
        display: "block",
        color: "black",
        mt: 6
      }, "With LetterMesh, you store your own data, so you can never lose it. Even if this website shuts down, your data is never lost."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Type"].p, {
        mt: 6,
        display: "block"
      }, "Want to start writing? Or you can", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "https://lettermesh.com/posts/$NiwHS@qF-welcome-to-lettermesh"
      }, "Learn More"), "."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: this.props.login,
        my: 6
      }, "Sign In with Blockstack")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        width: [0, 1 / 4],
        overflow: "hidden"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: "/static/mesh.svg",
        alt: "Mesh",
        height: "200"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        width: 1
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Type"].h1, {
        textAlign: "center",
        color: "black",
        display: "block",
        my: 5
      }, "Featured Blogs:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], null, blogs.map(function (blog) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
          width: [1, 1 / 2],
          px: 5,
          my: 6,
          key: blog._id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          prefetch: true,
          href: {
            pathname: '/blogs/show',
            query: {
              id: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["friendlyId"])(blog)
            }
          },
          as: "/blogs/".concat(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["friendlyId"])(blog))
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home_styled__WEBPACK_IMPORTED_MODULE_7__["BlogCard"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: blog.attrs.typefaceImageUrl,
          alt: blog.attrs.name
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_home_styled__WEBPACK_IMPORTED_MODULE_7__["BlogDescription"], null, blog.attrs.description)))));
      })))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var blogs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _models_blog__WEBPACK_IMPORTED_MODULE_9__["default"].fetchList({
                  name: 'LetterMesh,radiks.js'
                }, {
                  decrypt: false
                });

              case 2:
                blogs = _context2.sent;
                return _context2.abrupt("return", {
                  blogs: blogs
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(Object.assign({}, _stores_user_actions__WEBPACK_IMPORTED_MODULE_8__["default"]), dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps)(Home));

/***/ }),

/***/ "./stores/user/actions.js":
/*!********************************!*\
  !*** ./stores/user/actions.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockstack/lib/auth/authApp */ "blockstack/lib/auth/authApp");
/* harmony import */ var blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! radiks */ "radiks");
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(radiks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./stores/user/constants.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// import * as blockstack from 'blockstack';




var login = function login() {
  var redirect = "".concat(window.location.origin);
  var manifest = "".concat(redirect, "/manifest.json");
  var scopes = ['store_write', 'publish_data'];
  Object(blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_1__["redirectToSignIn"])(redirect, manifest, scopes);
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_3__["LOGIN"]
  };
};

var loggingIn = function loggingIn() {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_3__["USER_SIGNING_IN"]
  };
};

var logout = function logout() {
  Object(blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_1__["signUserOut"])();
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_3__["USER_LOGOUT"]
  };
};

var gotUserData = function gotUserData(userData) {
  return {
    type: _constants__WEBPACK_IMPORTED_MODULE_3__["USER_SIGNED_IN"],
    user: userData
  };
};

var handleLogIn = function handleLogIn() {
  return (
    /*#__PURE__*/
    function () {
      var _innerHandleSignIn = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var userData, user, _user;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(loggingIn());
                userData = Object(blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_1__["loadUserData"])();

                if (!Object(blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_1__["isSignInPending"])()) {
                  _context.next = 17;
                  break;
                }

                _context.next = 5;
                return Object(blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_1__["handlePendingSignIn"])();

              case 5:
                userData = _context.sent;
                _context.next = 8;
                return radiks__WEBPACK_IMPORTED_MODULE_2__["User"].createWithCurrentUser();

              case 8:
                user = _context.sent;
                _context.next = 11;
                return radiks__WEBPACK_IMPORTED_MODULE_2__["GroupMembership"].cacheKeys();

              case 11:
                _context.next = 13;
                return user.save();

              case 13:
                console.log('new user', user);
                dispatch(gotUserData(user));
                window.location = '/';
                return _context.abrupt("return", user);

              case 17:
                if (!userData) {
                  _context.next = 26;
                  break;
                }

                _context.next = 20;
                return radiks__WEBPACK_IMPORTED_MODULE_2__["GroupMembership"].cacheKeys();

              case 20:
                _user = radiks__WEBPACK_IMPORTED_MODULE_2__["User"].currentUser();
                _context.next = 23;
                return _user.save();

              case 23:
                dispatch(gotUserData(_user));
                console.log('existing user', _user);
                return _context.abrupt("return", _user);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function innerHandleSignIn(_x) {
        return _innerHandleSignIn.apply(this, arguments);
      }

      return innerHandleSignIn;
    }()
  );
};

/* harmony default export */ __webpack_exports__["default"] = ({
  login: login,
  handleLogIn: handleLogIn,
  logout: logout
});

/***/ }),

/***/ "./stores/user/constants.js":
/*!**********************************!*\
  !*** ./stores/user/constants.js ***!
  \**********************************/
/*! exports provided: LOGIN, HANDLE_LOGIN, USER_LOGOUT, USER_SIGNING_IN, USER_SIGNED_IN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HANDLE_LOGIN", function() { return HANDLE_LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGOUT", function() { return USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_SIGNING_IN", function() { return USER_SIGNING_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_SIGNED_IN", function() { return USER_SIGNED_IN; });
var LOGIN = 'LOGIN';
var HANDLE_LOGIN = 'HANDLE_LOGIN';
var USER_LOGOUT = 'USER_LOGOUT';
var USER_SIGNING_IN = 'USER_SIGNING_IN';
var USER_SIGNED_IN = 'USER_SIGNED_IN';

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "blockstack-ui":
/*!********************************!*\
  !*** external "blockstack-ui" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("blockstack-ui");

/***/ }),

/***/ "blockstack/lib/auth/authApp":
/*!**********************************************!*\
  !*** external "blockstack/lib/auth/authApp" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("blockstack/lib/auth/authApp");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "radiks":
/*!*************************!*\
  !*** external "radiks" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("radiks");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map