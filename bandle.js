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

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./main.scss\");\n\r\n\r\nconst burger = document.getElementById('burger');\r\nconst menu = document.querySelector('.menu');\r\nlet isShowMenu = false;\r\n\r\nconst burgerIcon = `\r\n<svg width=\"24\" height=\"21\" viewBox=\"0 0 24 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 2C0 0.89543 0.895431 0 2 0H22C23.1046 0 24 0.895431 24 2V3C24 4.10457 23.1046 5 22 5H2C0.89543 5 0 4.10457 0 3V2ZM0 10C0 8.89543 0.895431 8 2 8H22C23.1046 8 24 8.89543 24 10V11C24 12.1046 23.1046 13 22 13H2C0.89543 13 0 12.1046 0 11V10ZM2 16C0.895431 16 0 16.8954 0 18V19C0 20.1046 0.89543 21 2 21H22C23.1046 21 24 20.1046 24 19V18C24 16.8954 23.1046 16 22 16H2Z\" fill=\"black\"/>\r\n</svg>\r\n`;\r\n\r\nconst closeIcon = `\r\n<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\r\n    <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M4.41417 0.657655C3.63312 -0.123393 2.36679 -0.123393 1.58574 0.657655L0.878633 1.36476C0.0975847 2.14581 0.0975844 3.41214 0.878633 4.19319L6.51827 9.83282L1.28319 15.0679C0.502137 15.849 0.502137 17.1153 1.28319 17.8963L1.99029 18.6034C2.77134 19.3845 4.03767 19.3845 4.81872 18.6034L10.0538 13.3684L15.0208 18.3353C15.8018 19.1164 17.0681 19.1164 17.8492 18.3353L18.5563 17.6282C19.3374 16.8472 19.3374 15.5808 18.5563 14.7998L13.5893 9.83282L18.9609 4.46131C19.7419 3.68026 19.7419 2.41393 18.9609 1.63288L18.2537 0.925772C17.4727 0.144723 16.2064 0.144723 15.4253 0.925771L10.0538 6.29729L4.41417 0.657655Z\" fill=\"black\"/>\r\n</svg>\r\n`\r\n\r\nconst updateIconMenu = () => {\r\n    burger.innerHTML = isShowMenu ? closeIcon : burgerIcon;\r\n}\r\n\r\nfunction toggleMenu() {\r\n    if (isShowMenu) {\r\n        menu.classList.add('menu--open');\r\n    } else {\r\n        menu.classList.remove('menu--open');\r\n    }\r\n}\r\n\r\nburger.addEventListener('click', () => {\r\n    isShowMenu = !isShowMenu;\r\n    updateIconMenu();\r\n    toggleMenu();\r\n});\r\n\r\nfunction hideIncompleteGridRows() {\r\n    const gridContainer = document.querySelector('.cards');\r\n    const gridItems = Array.from(gridContainer.children);\r\n    gridItems.forEach(item => {\r\n        item.style.display = '';\r\n        item.style.visibility = '';\r\n        item.hidden = false;\r\n    });\r\n    const totalItems = gridItems.length;\r\n    const gridComputedStyle = window.getComputedStyle(gridContainer);\r\n    const columnCount = gridComputedStyle\r\n        .getPropertyValue('grid-template-columns')\r\n        .split(' ').length;\r\n    const fullRowCount = Math.floor(totalItems / columnCount);\r\n    const itemsInLastRow = totalItems % columnCount;\r\n    if (itemsInLastRow > 0) {\r\n        const startIndex = fullRowCount * columnCount;\r\n        const lastRowItems = gridItems.slice(startIndex, startIndex + itemsInLastRow);\r\n        lastRowItems.forEach(item => {\r\n        item.style.display = 'none';\r\n        });\r\n    }\r\n}\r\n\r\nwindow.addEventListener('resize', () => {\r\n    hideIncompleteGridRows()\r\n    if (isShowMenu) {\r\n        isShowMenu = false;\r\n        updateIconMenu();\r\n        toggleMenu();\r\n    }\r\n})\r\n\r\nhideIncompleteGridRows()\n\n//# sourceURL=webpack:///./main.js?\n}");

/***/ }),

/***/ "./main.scss":
/*!*******************!*\
  !*** ./main.scss ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./main.scss?\n}");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;