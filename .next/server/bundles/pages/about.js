module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(5);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "antd"
var external__antd_ = __webpack_require__(2);
var external__antd__default = /*#__PURE__*/__webpack_require__.n(external__antd_);

// EXTERNAL MODULE: external "antd/lib/locale-provider/ru_RU"
var ru_RU_ = __webpack_require__(6);
var ru_RU__default = /*#__PURE__*/__webpack_require__.n(ru_RU_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(3);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "uri-js"
var external__uri_js_ = __webpack_require__(7);
var external__uri_js__default = /*#__PURE__*/__webpack_require__.n(external__uri_js_);

// CONCATENATED MODULE: ./components/Header.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Header_Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "checkScrolled", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;

        _this.setState({
          isScrolled: !!scrolled
        });
      }
    });
    _this.state = {
      isScrolled: true
    }; // if (typeof window !== 'undefined') {
    //     this.checkScrolled();
    //     window.addEventListener('scroll', (e) => {
    //         this.checkScrolled();
    //     });
    // }

    return _this;
  }

  _createClass(Header, [{
    key: "render",
    // componentWillUnmount() {
    //     window.removeEventListener('scroll');
    // }
    value: function render() {
      var isScrolled = this.state.isScrolled;
      return external__react__default.a.createElement("div", {
        className: "jsx-3870375981" + " " + "header ".concat(isScrolled ? "" : "transparent")
      }, external__react__default.a.createElement(link__default.a, {
        href: "/"
      }, external__react__default.a.createElement("div", {
        className: "jsx-3870375981" + " " + "header-name"
      }, external__react__default.a.createElement("span", {
        className: "jsx-3870375981" + " " + "logo"
      }, "URMAN"), external__react__default.a.createElement("span", {
        className: "jsx-3870375981" + " " + "slogan"
      }, "\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0435 \u043B\u0435\u0441\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F"))), external__react__default.a.createElement("div", {
        className: "jsx-3870375981" + " " + "menu-trigger"
      }, external__react__default.a.createElement(external__antd_["Button"], {
        icon: "bars"
      }, "\u041C\u0435\u043D\u044E")), external__react__default.a.createElement("div", {
        className: "jsx-3870375981" + " " + "menu"
      }, external__react__default.a.createElement(link__default.a, {
        href: "/clients"
      }, external__react__default.a.createElement("a", {
        className: "jsx-3870375981" + " " + "menu-item"
      }, "\u041A\u043B\u0438\u0435\u043D\u0442\u044B")), external__react__default.a.createElement(link__default.a, {
        href: "/service"
      }, external__react__default.a.createElement("a", {
        className: "jsx-3870375981" + " " + "menu-item"
      }, "\u0423\u0441\u043B\u0443\u0433\u0438")), external__react__default.a.createElement(link__default.a, {
        href: "/why-urman"
      }, external__react__default.a.createElement("a", {
        className: "jsx-3870375981" + " " + "menu-item"
      }, "\u041F\u043E\u0447\u0435\u043C\u0443 URMAN")), external__react__default.a.createElement(link__default.a, {
        href: "/about"
      }, external__react__default.a.createElement("a", {
        className: "jsx-3870375981" + " " + "menu-item"
      }, "\u041E \u043D\u0430\u0441")), external__react__default.a.createElement(link__default.a, {
        href: "/blog"
      }, external__react__default.a.createElement("a", {
        className: "jsx-3870375981" + " " + "menu-item"
      }, "\u0416\u0443\u0440\u043D\u0430\u043B")), external__react__default.a.createElement(link__default.a, {
        href: "/contacts"
      }, external__react__default.a.createElement("a", {
        className: "jsx-3870375981" + " " + "menu-item"
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"))), external__react__default.a.createElement(style__default.a, {
        styleId: "3870375981",
        css: [".header.jsx-3870375981{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;color:black;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px;position:fixed;top:0;z-index:1;width:100%;background-color:white;border-bottom:1px solid #d5d5d5;}", ".header.transparent.jsx-3870375981{background-color:transparent;border-bottom-color:transparent;}", ".header-name.jsx-3870375981{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".logo.jsx-3870375981{font-size:32px;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;font-family:Geneva,Arial,Helvetica,sans-serif;cursor:pointer;height:32px;}", ".menu-trigger.jsx-3870375981{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".menu.jsx-3870375981{display:none;}", ".menu-item.jsx-3870375981{color:#444;font-size:15px;padding:4px 6px;border-radius:3px;}", ".menu-item.jsx-3870375981:hover{background:rgba(0,0,0,0.05);}", "@media screen and (min-width:750px){.menu-trigger.jsx-3870375981{display:none;}.menu.jsx-3870375981{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}}"]
      }));
    }
  }]);

  return Header;
}(external__react_["Component"]);

/* harmony default export */ var components_Header = (Header_Header);
// CONCATENATED MODULE: ./components/Footer.js


function Footer__typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer__typeof = function _typeof(obj) { return typeof obj; }; } else { Footer__typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer__typeof(obj); }

function Footer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer__defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Footer__createClass(Constructor, protoProps, staticProps) { if (protoProps) Footer__defineProperties(Constructor.prototype, protoProps); if (staticProps) Footer__defineProperties(Constructor, staticProps); return Constructor; }

function Footer__possibleConstructorReturn(self, call) { if (call && (Footer__typeof(call) === "object" || typeof call === "function")) { return call; } return Footer__assertThisInitialized(self); }

function Footer__assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var footerData = [{
  title: 'НАШИ УСЛУГИ',
  url: '',
  items: [{
    name: 'Проектная документация лесного участка',
    url: ''
  }, {
    name: 'Земельный кадастровый учет',
    url: ''
  }, {
    name: 'Проект освоения лесов',
    url: ''
  }, {
    name: 'Лесные отчеты',
    url: ''
  }, {
    name: 'Лесопатологическое обследование',
    url: ''
  }, {
    name: 'Лесная экспертиза',
    url: ''
  }, {
    name: 'Таксация лесных участков',
    url: ''
  }, {
    name: 'Полное оформление',
    url: ''
  }, {
    name: 'Оформление договора водопользования',
    url: ''
  }, {
    name: 'Лесохозяйственный регламент',
    url: ''
  }, {
    name: 'Лесной план',
    url: ''
  }]
}, {
  title: 'ПОЧЕМУ URMAN',
  url: '',
  items: [{
    name: 'Проблемы, которые мы решаем',
    url: ''
  }]
}, {
  title: 'О НАС',
  url: '',
  items: [{
    name: 'Карьера',
    url: ''
  }, {
    name: 'Наши клиенты',
    url: ''
  }]
}];

var Footer_Footer =
/*#__PURE__*/
function (_Component) {
  Footer__inherits(Footer, _Component);

  function Footer(props) {
    Footer__classCallCheck(this, Footer);

    return Footer__possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));
  }

  Footer__createClass(Footer, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("footer", {
        className: "jsx-2895218409"
      }, footerData.map(function (column, columnIndex) {
        var columnItems = column.items.map(function (item, itemIndex) {
          return external__react__default.a.createElement("p", {
            key: itemIndex,
            className: "jsx-2895218409"
          }, external__react__default.a.createElement("a", {
            href: item.url,
            className: "jsx-2895218409"
          }, item.name));
        });
        return external__react__default.a.createElement("div", {
          key: columnIndex,
          className: "jsx-2895218409" + " " + "column"
        }, external__react__default.a.createElement("h5", {
          className: "jsx-2895218409"
        }, external__react__default.a.createElement("a", {
          href: column.url,
          className: "jsx-2895218409"
        }, column.title)), columnItems);
      }), external__react__default.a.createElement(style__default.a, {
        styleId: "2895218409",
        css: ["footer.jsx-2895218409{background:url(https://www.techvalidate.com/assets/corp/header/home-bg-8ab16c51b18c37209e40ccd812f83fc6.png);background-size:contain;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", ".column.jsx-2895218409{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;padding:20px;}", "h5.jsx-2895218409{border-bottom:1px solid #d5d5d5;padding-bottom:8px;margin-bottom:10px;font-weight:600;font-size:18px;}", "h5.jsx-2895218409 a.jsx-2895218409{color:#2c2f88;}", "h5.jsx-2895218409:hover,p.jsx-2895218409:hover{-webkit-text-decoration:underline;text-decoration:underline;}", "P.jsx-2895218409{margin:5px 0;}", "p.jsx-2895218409 a.jsx-2895218409{font-size:16px;color:#2c2f88;}", "@media screen and (min-width:1024px){.column.jsx-2895218409{-webkit-flex:1 1 33%;-ms-flex:1 1 33%;flex:1 1 33%;}}"]
      }));
    }
  }]);

  return Footer;
}(external__react_["Component"]);

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./components/Layout.js








var Layout_Layout = function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return external__react__default.a.createElement("div", {
    className: "jsx-1414082796"
  }, external__react__default.a.createElement(head__default.a, null, external__react__default.a.createElement("title", {
    className: "jsx-1414082796"
  }, title), external__react__default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-1414082796"
  }), external__react__default.a.createElement("meta", {
    charSet: "utf-8",
    className: "jsx-1414082796"
  }), external__react__default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/antd/3.2.0/antd.min.css",
    className: "jsx-1414082796"
  })), external__react__default.a.createElement(style__default.a, {
    styleId: "1414082796",
    css: []
  }), external__react__default.a.createElement(components_Header, null), external__react__default.a.createElement(external__antd_["LocaleProvider"], {
    locale: ru_RU__default.a
  }, external__react__default.a.createElement("div", {
    className: "jsx-1414082796"
  }, children)), external__react__default.a.createElement(components_Footer, null));
};

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout_Layout);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/ru_RU");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("uri-js");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Layout__ = __webpack_require__(4);



var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_Layout__["a" /* default */], null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", null, "\u041C\u044B \u0442\u0430\u043A\u0438\u0435-\u0442\u043E \u0442\u0430\u043A\u0438\u0435-\u0442\u043E"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })
/******/ ]);