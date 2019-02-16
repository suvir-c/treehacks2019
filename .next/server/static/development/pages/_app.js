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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/brand/index.js":
/*!***********************************!*\
  !*** ./components/brand/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockstack-ui */ "blockstack-ui");
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styled */ "./components/brand/styled.js");


 // import Icon from './icon';


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/'
    },
    prefetch: true,
    as: "/"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://s3.amazonaws.com/radiks/LetterMesh_TypeFace.svg",
    alt: "LetterMesh",
    height: "40"
  })));
});

/***/ }),

/***/ "./components/brand/styled.js":
/*!************************************!*\
  !*** ./components/brand/styled.js ***!
  \************************************/
/*! exports provided: Icon, Name, SubName, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Name", function() { return Name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubName", function() { return SubName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  margin: 0px auto;\n  :visited {\n    color: black;\n  }\n  :link {\n    text-decoration: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n  position: relative;\n  text-underline: none;\n  top: -4px;\n  color: black;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 24px;\n  font-weight: bold;\n  position: relative;\n  text-underline: none;\n  top: 0px;\n  color: black;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 32px;\n  height: 42px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Icon = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.img(_templateObject());
var Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject2());
var SubName = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject3());
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.a(_templateObject4());

/***/ }),

/***/ "./components/footer/index.js":
/*!************************************!*\
  !*** ./components/footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockstack-ui */ "blockstack-ui");
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styled */ "./components/footer/styled.js");
/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../brand */ "./components/brand/index.js");




/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Diagonal"], {
    mt: 4
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_2__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    mx: "auto"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_brand__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
});

/***/ }),

/***/ "./components/footer/styled.js":
/*!*************************************!*\
  !*** ./components/footer/styled.js ***!
  \*************************************/
/*! exports provided: Diagonal, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diagonal", function() { return Diagonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockstack-ui */ "blockstack-ui");
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  width: 100%;\n  clip-path: polygon(100% 0, 0% 100%, 100% 100%);\n  background: ", ";\n  height: 80px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Diagonal = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.grayBG;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"])(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.grayBG;
});
Container.defaultProps = {
  py: 8,
  px: 8
};

/***/ }),

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blockstack-ui */ "blockstack-ui");
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ "./components/nav/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer */ "./components/footer/index.js");
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







var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          useContainer = _this$props.useContainer,
          blogAttrs = _this$props.blogAttrs;
      var width = useContainer ? [1, 0.9] : 1;
      var mx = useContainer ? [2, 8] : 0;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
        blogAttrs: blogAttrs
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Flex"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        width: width,
        mt: useContainer ? 6 : 2,
        mx: mx
      }, children)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

_defineProperty(Layout, "propTypes", {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  useContainer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  blogAttrs: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
});

_defineProperty(Layout, "defaultProps", {
  useContainer: true,
  blogAttrs: null
});



/***/ }),

/***/ "./components/nav/index.js":
/*!*********************************!*\
  !*** ./components/nav/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Nav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockstack-ui */ "blockstack-ui");
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdi_react_BackburgerIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdi-react/BackburgerIcon */ "mdi-react/BackburgerIcon");
/* harmony import */ var mdi_react_BackburgerIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mdi_react_BackburgerIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blockstack/lib/auth/authApp */ "blockstack/lib/auth/authApp");
/* harmony import */ var blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _brand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../brand */ "./components/brand/index.js");
/* harmony import */ var _side_nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../side-nav */ "./components/side-nav/index.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var Nav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Nav, _React$Component);

  function Nav(props) {
    var _this;

    _classCallCheck(this, Nav);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nav).call(this, props));
    _this.sideNav = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    return _this;
  }

  _createClass(Nav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var blogAttrs = this.props.blogAttrs;
      var useSideNav = typeof window !== 'undefined' && !!Object(blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_3__["loadUserData"])();
      var friendlyIdAttrs = blogAttrs ? {
        attrs: blogAttrs
      } : null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        mt: 3,
        style: {
          overflowX: 'hidden'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        mx: [2, 8]
      }, blogAttrs ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: {
          pathname: '/blogs/show',
          query: {
            id: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__["friendlyId"])(friendlyIdAttrs)
          }
        },
        as: "/blogs/".concat(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_7__["friendlyId"])(friendlyIdAttrs)),
        prefetch: true
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: blogAttrs.typefaceImageUrl,
        alt: "Header",
        height: "40"
      }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_brand__WEBPACK_IMPORTED_MODULE_5__["default"], null)), useSideNav && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        ml: "auto",
        mr: [2, 8],
        mt: 2
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(mdi_react_BackburgerIcon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onClick: function onClick() {
          return _this2.sideNav.current.toggle();
        },
        style: {
          cursor: 'pointer'
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_side_nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
        ref: this.sideNav
      })));
    }
  }]);

  return Nav;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/side-nav/index.js":
/*!**************************************!*\
  !*** ./components/side-nav/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var mdi_react_CloseCircleOutlineIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mdi-react/CloseCircleOutlineIcon */ "mdi-react/CloseCircleOutlineIcon");
/* harmony import */ var mdi_react_CloseCircleOutlineIcon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mdi_react_CloseCircleOutlineIcon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blockstack/lib/auth/authApp */ "blockstack/lib/auth/authApp");
/* harmony import */ var blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! radiks */ "radiks");
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(radiks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styled */ "./components/side-nav/styled.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.js");


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




 // import { withRouter } from 'next/router';






var SideNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNav, _React$Component);

  function SideNav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SideNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SideNav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      blogs: [],
      open: false
    });

    return _this;
  }

  _createClass(SideNav, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var _this2 = this;

        var blogs;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!Object(blockstack_lib_auth_authApp__WEBPACK_IMPORTED_MODULE_4__["loadUserData"])()) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return radiks__WEBPACK_IMPORTED_MODULE_6__["UserGroup"].myGroups();

              case 3:
                blogs = _context.sent;
                this.setState({
                  blogs: blogs
                });

              case 5:
                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.events.on('routeChangeStart', function () {
                  return _this2.setState({
                    open: false
                  });
                });

              case 6:
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
    key: "toggle",
    value: function toggle() {
      var open = this.state.open;
      this.setState({
        open: !open
      });
    }
  }, {
    key: "blogs",
    value: function blogs() {
      return this.state.blogs.map(function (blog) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          key: blog._id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Divider"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Label"], null, blog.attrs.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Item"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          prefetch: true,
          href: {
            pathname: '/blogs/admin',
            query: {
              id: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_8__["friendlyId"])(blog)
            }
          },
          as: "/blogs/".concat(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_8__["friendlyId"])(blog), "/admin")
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "View all Posts"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Item"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          prefetch: true,
          href: {
            pathname: '/blogs/edit',
            query: {
              id: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_8__["friendlyId"])(blog)
            }
          },
          as: "/blogs/".concat(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_8__["friendlyId"])(blog), "/edit")
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "Edit Blog Details"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Item"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          prefetch: true,
          href: {
            pathname: '/blogs/posts/new',
            query: {
              id: Object(_lib_utils__WEBPACK_IMPORTED_MODULE_8__["friendlyId"])(blog)
            }
          },
          as: "/blogs/".concat(Object(_lib_utils__WEBPACK_IMPORTED_MODULE_8__["friendlyId"])(blog), "/posts/new")
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "Write a New Post"))));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var open = this.state.open;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Container"], {
        open: open
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Label"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(mdi_react_CloseCircleOutlineIcon__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onClick: function onClick() {
          return _this3.toggle();
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_styled__WEBPACK_IMPORTED_MODULE_7__["Item"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/blogs/new"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, "Create a new Blog"))), this.blogs());
    }
  }]);

  return SideNav;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SideNav);

/***/ }),

/***/ "./components/side-nav/styled.js":
/*!***************************************!*\
  !*** ./components/side-nav/styled.js ***!
  \***************************************/
/*! exports provided: Container, Item, Label, Divider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Divider", function() { return Divider; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! blockstack-ui */ "blockstack-ui");
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-top: 1px solid #ddd;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  color: ", ";\n\n  &:hover {\n    background: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      &:hover {\n        background: #f2f2f2;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  align-self: start;\n\n  a {\n    color: black;\n    text-decoration: none;\n  }\n\n  ", "\n\n  svg {\n    cursor: pointer;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  min-height: 100vh;\n  width: 300px;\n  z-index: 100;\n  overflow-y: scroll;\n  border-left: 1px solid #ccc;\n  box-shadow: -4px 0 6px -4px #ccc;\n  position: fixed;\n  right: 0;\n  top: 0;\n  background: white;\n  transition: .34s transform cubic-bezier(.19,1,.22,1);\n  // display: ", "\n  transform: translate(", ");\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"])(_templateObject(), function (_ref) {
  var open = _ref.open;
  return open ? 'block' : 'none';
}, function (_ref2) {
  var open = _ref2.open;
  return open ? 0 : '100%';
});
Container.defaultProps = {
  flexWrap: 'wrap',
  flexDirection: 'column'
};
var Item = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__["Box"])(_templateObject2(), function (_ref3) {
  var _ref3$hover = _ref3.hover,
      hover = _ref3$hover === void 0 ? true : _ref3$hover;
  return hover && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
});
Item.defaultProps = {
  px: 4,
  py: 3,
  width: 1
};
var Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Item)(_templateObject4(), function (_ref4) {
  var theme = _ref4.theme;
  return theme.colors.textGray;
});
Label.defaultProps = _objectSpread({}, Item.defaultProps);
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(blockstack_ui__WEBPACK_IMPORTED_MODULE_1__["Box"])(_templateObject5());
Divider.defaultProps = {
  mx: 0,
  my: 3
};

/***/ }),

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blockstack-ui */ "blockstack-ui");
/* harmony import */ var blockstack_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blockstack_ui__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (_objectSpread({}, blockstack_ui__WEBPACK_IMPORTED_MODULE_0__["theme"], {
  colors: _objectSpread({}, blockstack_ui__WEBPACK_IMPORTED_MODULE_0__["theme"].colors, {
    textGray: '#4A4A4A',
    grayBG: '#f1f1f1'
  }),
  fonts: {
    brand: "'Roboto Slab', Georgia, serif",
    default: "'Open Sans', -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
  }
}));

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

/***/ "./lib/with-redux-store.js":
/*!*********************************!*\
  !*** ./lib/with-redux-store.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stores_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stores/index */ "./stores/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore() {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return _stores_index__WEBPACK_IMPORTED_MODULE_2__["store"];
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = _stores_index__WEBPACK_IMPORTED_MODULE_2__["store"];
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(AppWithRedux, _React$Component);

      _createClass(AppWithRedux, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(appContext) {
            var data, reduxStore, appProps;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Get or Create the store with `undefined` as initialState
                    // This allows you to set a custom default initialState
                    data = appContext.ctx.query; // console.log(appContext.ctx.req)

                    reduxStore = getOrCreateStore(data); // Provide the store to getInitialProps of pages

                    appContext.ctx.reduxStore = reduxStore; // eslint-disable-line no-param-reassign

                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 7;
                    return App.getInitialProps.call(App, appContext);

                  case 7:
                    appProps = _context.sent;

                  case 8:
                    return _context.abrupt("return", _objectSpread({}, appProps, {
                      initialReduxState: reduxStore.getState()
                    }));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      function AppWithRedux(props) {
        var _this;

        _classCallCheck(this, AppWithRedux);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AppWithRedux).call(this, props));
        _this.reduxStore = getOrCreateStore(props.initialReduxState);
        return _this;
      }

      _createClass(AppWithRedux, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, _extends({}, this.props, {
            reduxStore: this.reduxStore,
            persistor: _stores_index__WEBPACK_IMPORTED_MODULE_2__["persistor"]
          }));
        }
      }]);

      return AppWithRedux;
    }(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component)
  );
});

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "next/app");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/integration/react */ "redux-persist/integration/react");
/* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! radiks */ "radiks");
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(radiks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/theme */ "./lib/theme.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _lib_with_redux_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/with-redux-store */ "./lib/with-redux-store.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", ";\n* {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  box-sizing: border-box;\n  \n}\nhtml{\ndisplay: flex;\n}\nbody{\nflex-grow: 1;\n}\nbody, html{\n  font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  min-height: 100%;\n  margin: 0;\n  height: auto;\n  width: 100%;\n  max-width: 100%;\n  \n}\n#__next{\n  min-height:100%;\n  margin:0;\n  display: flex;\n  flex-direction: column;\n}\na:link {\n  text-decoration: underline;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












/**
 * Reset our styles
 */

var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"])(_templateObject(), Object(polished__WEBPACK_IMPORTED_MODULE_6__["normalize"])());
var radiksConfig = {
  apiServer: "http://localhost:3000"
};

var LetterMesh =
/*#__PURE__*/
function (_App) {
  _inherits(LetterMesh, _App);

  function LetterMesh() {
    _classCallCheck(this, LetterMesh);

    return _possibleConstructorReturn(this, _getPrototypeOf(LetterMesh).apply(this, arguments));
  }

  _createClass(LetterMesh, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(radiksConfig);
      Object(radiks__WEBPACK_IMPORTED_MODULE_7__["configure"])(radiksConfig);
      var router = this.props.router;
      router.events.on('routeChangeStart', function () {
        return NProgress.start();
      });
      router.events.on('routeChangeComplete', function () {
        return NProgress.done();
      });
      router.events.on('routeChangeError', function () {
        return NProgress.done();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          reduxStore = _this$props.reduxStore,
          persistor = _this$props.persistor,
          cookies = _this$props.cookies;
      var useContainer = pageProps.useContainer,
          blogAttrs = pageProps.blogAttrs;
      console.log(pageProps);
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Global, null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
        theme: _objectSpread({}, _lib_theme__WEBPACK_IMPORTED_MODULE_9__["default"], {
          transitions: ['unset', '.34s all cubic-bezier(.19,1,.22,1)']
        })
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
        store: reduxStore
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_4__["PersistGate"], {
        persistor: persistor
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        useContainer: useContainer,
        blogAttrs: blogAttrs
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, _extends({}, pageProps, {
        serverCookies: cookies
      }))))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps, cookies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;
                pageProps = {};
                console.log(radiksConfig);
                Object(radiks__WEBPACK_IMPORTED_MODULE_7__["configure"])(radiksConfig);

                if (!Component.getInitialProps) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return Component.getInitialProps(ctx);

              case 7:
                pageProps = _context.sent;

              case 8:
                cookies = ctx.req && ctx.req.universalCookies && ctx.req.universalCookies.cookies;
                return _context.abrupt("return", {
                  pageProps: pageProps,
                  cookies: cookies
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return LetterMesh;
}(next_app__WEBPACK_IMPORTED_MODULE_1___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(_lib_with_redux_store__WEBPACK_IMPORTED_MODULE_11__["default"])(LetterMesh)));

/***/ }),

/***/ "./stores/index.js":
/*!*************************!*\
  !*** ./stores/index.js ***!
  \*************************/
/*! exports provided: store, persistor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistor", function() { return persistor; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage/session */ "redux-persist/lib/storage/session");
/* harmony import */ var redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducer */ "./stores/reducer.js");

 // import createHistory from 'history/createBrowserHistory';
// import persistState from 'redux-localstorage';




var initialState = {};
var enhancers = [];
var middleware = [redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a];
var persistConfig = {
  key: 'kanstack',
  storage: redux_persist_lib_storage_session__WEBPACK_IMPORTED_MODULE_2___default.a,
  whitelist: ['user']
};
var composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux__WEBPACK_IMPORTED_MODULE_0__["compose"];
var persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__["persistReducer"])(persistConfig, _reducer__WEBPACK_IMPORTED_MODULE_4__["default"]);
var composedEnhancers = composeEnhancers.apply(void 0, [redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"].apply(void 0, middleware)].concat(enhancers));
var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(persistedReducer, initialState, composedEnhancers);
var persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_3__["persistStore"])(store);

/***/ }),

/***/ "./stores/reducer.js":
/*!***************************!*\
  !*** ./stores/reducer.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/reducer */ "./stores/user/reducer.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  user: _user_reducer__WEBPACK_IMPORTED_MODULE_1__["default"]
}));

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

/***/ "./stores/user/reducer.js":
/*!********************************!*\
  !*** ./stores/user/reducer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! radiks */ "radiks");
/* harmony import */ var radiks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(radiks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./stores/user/constants.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var currentUser = radiks__WEBPACK_IMPORTED_MODULE_0__["User"] ? radiks__WEBPACK_IMPORTED_MODULE_0__["User"].currentUser() : null;
var initialState = {
  currentUser: currentUser
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _constants__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]:
      {
        return _objectSpread({}, state);
      }

    case _constants__WEBPACK_IMPORTED_MODULE_1__["USER_SIGNED_IN"]:
      {
        return _objectSpread({}, state, {
          currentUser: action.user
        });
      }

    case _constants__WEBPACK_IMPORTED_MODULE_1__["USER_LOGOUT"]:
      {
        return _objectSpread({}, state, {
          currentUser: null
        });
      }

    default:
      return state;
  }
});

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./pages/_app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_app.js */"./pages/_app.js");


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

/***/ "mdi-react/BackburgerIcon":
/*!*******************************************!*\
  !*** external "mdi-react/BackburgerIcon" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdi-react/BackburgerIcon");

/***/ }),

/***/ "mdi-react/CloseCircleOutlineIcon":
/*!***************************************************!*\
  !*** external "mdi-react/CloseCircleOutlineIcon" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdi-react/CloseCircleOutlineIcon");

/***/ }),

/***/ "next/app":
/*!***************************!*\
  !*** external "next/app" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

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

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/integration/react":
/*!**************************************************!*\
  !*** external "redux-persist/integration/react" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/integration/react");

/***/ }),

/***/ "redux-persist/lib/storage/session":
/*!****************************************************!*\
  !*** external "redux-persist/lib/storage/session" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage/session");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

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

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map