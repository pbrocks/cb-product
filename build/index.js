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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/index.js":
/*!*****************************!*\
  !*** ./src/blocks/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upload */ "./src/blocks/upload/index.js");


/***/ }),

/***/ "./src/blocks/upload/icons.js":
/*!************************************!*\
  !*** ./src/blocks/upload/icons.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

var icons = {};
icons.upload = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  width: "20px",
  height: "20px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z"
}));
icons.swap = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  width: "20px",
  height: "20px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m39.66 76.422h36.762v-36.781h-36.762zm4.6211-32.141h27.5v27.5h-27.5z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m36.801 55.719h-8.582v-27.5h27.5v9.2031h4.6406v-13.844h-36.781v36.762h13.223z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m90.18 42.781c-3-16.801-16.02-29.922-33-32.961-2.3789-0.42187-4.7812-0.64062-7.1797-0.64062v4.6211c2.1211 0 4.2617 0.17969 6.3594 0.55859 14.781 2.6406 26.18 13.898 29.121 28.398l-5.6602 0.003907 8.0781 14 8.0781-14h-5.7969z"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m14.52 57.219h5.6602l-8.0781-13.98-8.0781 14h5.8008c3 16.801 16.039 29.941 33 32.961 2.375 0.40234 4.7773 0.64062 7.1758 0.64062v-4.6406c-2.1016 0-4.2617-0.19922-6.3594-0.57812-14.781-2.6406-26.18-13.883-29.121-28.402z"
}));
icons.remove = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  width: "20px",
  height: "20px",
  viewBox: "0 0 100 100",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "m50 2.5c-26.199 0-47.5 21.301-47.5 47.5s21.301 47.5 47.5 47.5 47.5-21.301 47.5-47.5-21.301-47.5-47.5-47.5zm24.898 62.301l-10.199 10.199-14.801-14.801-14.801 14.801-10.199-10.199 14.801-14.801-14.801-14.801 10.199-10.199 14.801 14.801 14.801-14.801 10.199 10.199-14.801 14.801z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/blocks/upload/index.js":
/*!************************************!*\
  !*** ./src/blocks/upload/index.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/blocks/upload/icons.js");





/**
 * Block dependencies
 */


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])('product-blocks/swiper', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Media Upload Button', 'product-blocks'),
  icon: {
    background: 'purple',
    foreground: '#ffffff',
    src: _icons__WEBPACK_IMPORTED_MODULE_5__["default"].upload
  },
  category: 'common',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Image', 'product-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('MediaUpload', 'product-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Message', 'product-blocks')],
  attributes: {
    imgURL: {
      type: 'string',
      source: 'attribute',
      attribute: 'src',
      selector: 'img'
    },
    imgID: {
      type: 'number'
    },
    imgAlt: {
      type: 'string',
      source: 'attribute',
      attribute: 'alt',
      selector: 'img'
    }
  },
  edit: function edit(props) {
    var _props$attributes = props.attributes,
        imgID = _props$attributes.imgID,
        imgURL = _props$attributes.imgURL,
        imgAlt = _props$attributes.imgAlt,
        className = props.className,
        setAttributes = props.setAttributes,
        isSelected = props.isSelected;

    var onSelectImage = function onSelectImage(img) {
      setAttributes({
        imgID: img.id,
        imgURL: img.url,
        imgAlt: img.alt
      });
    };

    var onRemoveImage = function onRemoveImage() {
      setAttributes({
        imgID: null,
        imgURL: null,
        imgAlt: null
      });
    };

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: className
    }, !imgID ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
      onSelect: onSelectImage,
      type: "image",
      value: imgID,
      render: function render(_ref) {
        var open = _ref.open;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          className: "button button-large",
          onClick: open
        }, _icons__WEBPACK_IMPORTED_MODULE_5__["default"].upload, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])(' Upload Image', 'product-blocks'));
      }
    }) : Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      class: "image-wrapper"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imgURL,
      alt: imgAlt
    }), isSelected ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      className: "remove-image",
      onClick: onRemoveImage
    }, _icons__WEBPACK_IMPORTED_MODULE_5__["default"].remove) : null));
  },
  save: function save(props) {
    var _props$attributes2 = props.attributes,
        imgURL = _props$attributes2.imgURL,
        imgAlt = _props$attributes2.imgAlt;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: imgURL,
      alt: imgAlt
    }));
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/blocks/index.js");


/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map