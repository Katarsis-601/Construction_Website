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

/***/ "./src/css/button/common-button.css":
/*!******************************************!*\
  !*** ./src/css/button/common-button.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://construction_website/./src/css/button/common-button.css?");

/***/ }),

/***/ "./src/css/card-style/card.css":
/*!*************************************!*\
  !*** ./src/css/card-style/card.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://construction_website/./src/css/card-style/card.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://construction_website/./src/css/style.css?");

/***/ }),

/***/ "./src/js/grab_on_scroll.js":
/*!**********************************!*\
  !*** ./src/js/grab_on_scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst card_list = document.querySelector(\".project-card\")\nlet position = {\n    left: 0,\n    x: 0\n}\nfunction grabOnScroll() {\n\n\n    card_list.addEventListener(\"mousedown\", ev => {\n        card_list.style.cursor = \"grabbing\"\n        position = {\n            left: card_list.scrollLeft,\n            x: ev.clientX\n        }\n        card_list.addEventListener(\"mousemove\", mouseMove)\n        card_list.addEventListener(\"mouseup\", mouseUp)\n    })\n\n\n\n}\n\nfunction mouseUp() {\n    card_list.removeEventListener(\"mousemove\", mouseMove)\n    card_list.removeEventListener(\"mouseup\", mouseUp)\n    card_list.style.cursor = \"grab\"\n}\n\nfunction mouseMove(e) {\n    let movePosition = e.clientX - position.x\n    card_list.scrollLeft = position.left - movePosition\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (grabOnScroll);\n\n//# sourceURL=webpack://construction_website/./src/js/grab_on_scroll.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_button_common_button_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/button/common-button.css */ \"./src/css/button/common-button.css\");\n/* harmony import */ var _css_card_style_card_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/card-style/card.css */ \"./src/css/card-style/card.css\");\n/* harmony import */ var _grab_on_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./grab_on_scroll.js */ \"./src/js/grab_on_scroll.js\");\n/* harmony import */ var _navbarHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbarHandler.js */ \"./src/js/navbarHandler.js\");\n\n\n\n\n\n\n(0,_grab_on_scroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_navbarHandler_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n\n//# sourceURL=webpack://construction_website/./src/js/index.js?");

/***/ }),

/***/ "./src/js/navbarHandler.js":
/*!*********************************!*\
  !*** ./src/js/navbarHandler.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet btn_status = false;\nconst navbar = document.querySelector(\".navbar-container\");\nconst navbar_btn = document.querySelector(\".navbar-btn\");\nfunction navbarHandler() {\n  window.addEventListener(\"resize\", (ev) => {\n    if (window.innerWidth <= 768) {\n      btn_status = false;\n      navbar.style.display = \"none\";\n    } else {\n      navbar.style.display = \"flex\";\n    }\n  });\n\n  navbar_btn.addEventListener(\"click\", navbarButtonHandler);\n}\n\nfunction navbarButtonHandler(ev) {\n  btn_status = !btn_status;\n  if (btn_status) {\n    navbar.style.display = \"flex\";\n  } else {\n    navbar.style.display = \"none\";\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbarHandler);\n\n\n//# sourceURL=webpack://construction_website/./src/js/navbarHandler.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;