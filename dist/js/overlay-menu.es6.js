/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/03-components/overlay-menu/modules/_OverlayMenu.es6.js":
/*!***********************************************************************!*\
  !*** ./source/03-components/overlay-menu/modules/_OverlayMenu.es6.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class OverlayMenu {
  /**
   * @constructor
   * @param {HTMLElement} domNode - The top-level menu node
   * @param {HTMLElement|null} menuButton - The open menu button
   * @param {HTMLElement|null} closeButton - The close button toggle
   */
  constructor(domNode, _temp) {
    let {
      menuButton = null,
      closeButton = null
    } = _temp === void 0 ? {} : _temp;
    this.overlay = domNode;
    this.menuButton = menuButton;
    this.closeButton = closeButton;
    this.handleKeydown = this.handleKeydown.bind(this);
  }
  /**
   * Create a menu toggle button.
   * @return {HTMLElement}
   */


  createMenuButton() {
    const menuButton = document.createElement('button');
    menuButton.classList.add('c-hamburger-button', 'c-hamburger-button--menu');
    menuButton.setAttribute('aria-controls', this.overlay.id);
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.innerHTML = '<span class="c-hamburger-button__icon">Menu</span>';
    return this.overlay.insertAdjacentElement('beforebegin', menuButton);
  }

  createCloseButton() {
    const menuButton = document.createElement('button');
    menuButton.classList.add('c-hamburger-button', 'c-hamburger-button--close');
    menuButton.setAttribute('aria-controls', this.overlay.id);
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.innerHTML = '<span class="c-hamburger-button__icon">Close</span>';
    menuButton.hidden = true;
    return this.overlay.insertAdjacentElement('afterbegin', menuButton);
  }
  /**
   * Close the overlay.
   * @return void
   */


  closeMenu() {
    this.menuButton.hidden = false;
    this.menuButton.setAttribute('aria-expanded', 'false');
    this.closeButton.hidden = true;
    this.closeButton.setAttribute('aria-expanded', 'false');
    this.overlay.classList.remove('is-open');
    document.body.classList.remove('has-open-menu');
    window.removeEventListener('keydown', this.handleKeydown);
    this.disableTab(this.overlay);
  }
  /**
   * Open the overlay.
   * @return void
   */


  openMenu() {
    this.menuButton.hidden = true;
    this.menuButton.setAttribute('aria-expanded', 'true');
    this.closeButton.hidden = false;
    this.closeButton.setAttribute('aria-expanded', 'true');
    this.overlay.classList.add('is-open');
    document.body.classList.add('has-open-menu');
    window.addEventListener('keydown', this.handleKeydown);
    this.enableTab(this.overlay);
  }
  /**
   * Close the menu if open and vice-versa.
   * @return void
   */


  toggleMenu() {
    if (this.menuButton.getAttribute('aria-expanded') !== 'true') {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }
  /**
   * Handle clicks on menu button toggle.
   * @param {MouseEvent<HTMLButtonElement>} event - The click event.
   * @return void
   */


  handleButtonClick(event) {
    event.preventDefault();
    this.toggleMenu();
  }
  /**
   * Handle keydown events.
   * @param {KeyboardEvent} event - The keydown event
   * @return void
   */


  handleKeydown(event) {
    if (event.key === 'Escape') {
      this.closeMenu();
    } // Keep the user from tabbing out of the menu.


    const focusable = Array.from(this.overlay.querySelectorAll('button, [href], input, select, textarea')).filter(item => item.tabIndex !== -1);
    const numberFocusElements = focusable.length;
    const firstFocusableElement = focusable[0];
    const lastFocusableElement = focusable[numberFocusElements - 1];

    if (event.key === 'Tab') {
      if (event.shiftKey && document.activeElement === firstFocusableElement) {
        event.preventDefault();
        lastFocusableElement.focus();
      } else if (document.activeElement === lastFocusableElement && !event.shiftKey) {
        event.preventDefault();
        firstFocusableElement.focus();
      }
    }
  }
  /**
   * Disable tab on all menu links. This is to ensure hidden items
   * do not still receive tab focus.
   */


  disableTab(startingPoint) {
    const menuLinks = startingPoint.querySelectorAll('button, [href], input, select, textarea, [tabindex]');
    menuLinks.forEach(link => {
      link.setAttribute('tabindex', '-1');
    });
  }
  /**
   * Enable tabbing on all menu links.
   */


  enableTab(startingPoint) {
    const menuLinks = Array.from(startingPoint.querySelectorAll('button, [href], input, select, textarea, [tabindex]')).filter(elem => window.getComputedStyle(elem).display !== 'none');
    menuLinks.forEach(link => {
      link.setAttribute('tabindex', '0');
    });
  }
  /**
   * Initialize the overlay menu.
   * @return void
   */


  init() {
    if (!this.menuButton) {
      this.menuButton = this.createMenuButton();
    }

    this.menuButton.addEventListener('click', this.handleButtonClick.bind(this));

    if (!this.closeButton) {
      this.closeButton = this.createCloseButton();
    }

    this.closeButton.addEventListener('click', this.handleButtonClick.bind(this));
    this.disableTab(this.overlay);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (OverlayMenu);

/***/ }),

/***/ "drupal":
/*!*************************!*\
  !*** external "Drupal" ***!
  \*************************/
/***/ (function(module) {

module.exports = Drupal;

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
/*!***************************************************************!*\
  !*** ./source/03-components/overlay-menu/overlay-menu.es6.js ***!
  \***************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var drupal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drupal */ "drupal");
/* harmony import */ var drupal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(drupal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_OverlayMenu_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_OverlayMenu.es6 */ "./source/03-components/overlay-menu/modules/_OverlayMenu.es6.js");


(drupal__WEBPACK_IMPORTED_MODULE_0___default().behaviors.overlayMenu) = {
  attach(context) {
    const menus = context.querySelectorAll('.c-overlay-menu');

    if (menus.length) {
      menus.forEach(menu => {
        const overlayMenu = new _modules_OverlayMenu_es6__WEBPACK_IMPORTED_MODULE_1__["default"](menu);
        overlayMenu.init();
      });
    }
  }

};
}();
/******/ })()
;
//# sourceMappingURL=overlay-menu.es6.js.map