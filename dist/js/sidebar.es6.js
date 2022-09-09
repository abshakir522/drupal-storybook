/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "drupal":
/*!*************************!*\
  !*** external "Drupal" ***!
  \*************************/
/***/ (function(module) {

module.exports = Drupal;

/***/ }),

/***/ "once":
/*!***********************!*\
  !*** external "once" ***!
  \***********************/
/***/ (function(module) {

module.exports = once;

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**************************************************!*\
  !*** ./source/02-layouts/sidebar/sidebar.es6.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var drupal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drupal */ "drupal");
/* harmony import */ var drupal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(drupal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var once__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! once */ "once");
/* harmony import */ var once__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(once__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable */


(drupal__WEBPACK_IMPORTED_MODULE_0___default().behaviors.popup) = {
  attach(context) {
    const sideBar = document.querySelector('.side-bar');
    const sidebarLinks = sideBar.querySelectorAll('.features-item');
    const collapseBtn = document.querySelector('#side-collapse-btn');
    changeTippy(false);

    collapseBtn.onclick = () => {
      sideBar.classList.toggle('collapse');

      if (sideBar.classList.contains('collapse')) {
        changeTippy(true);
      } else {
        changeTippy(false);
      }
    };

    function changeTippy(status) {
      sidebarLinks.forEach(function (item) {
        if (item._tippy) {
          if (status) {
            item._tippy.enable();
          } else {
            item._tippy.disable();
          }
        }
      });
    }
  }

};
/* eslint-enable */
}();
/******/ })()
;
//# sourceMappingURL=sidebar.es6.js.map