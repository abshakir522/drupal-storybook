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

/***/ "./source/03-components/side-menu/modules/_SideMenu.es6.js":
/*!*****************************************************************!*\
  !*** ./source/03-components/side-menu/modules/_SideMenu.es6.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overlay_menu_modules_OverlayMenu_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../overlay-menu/modules/_OverlayMenu.es6 */ "./source/03-components/overlay-menu/modules/_OverlayMenu.es6.js");


class SideMenu extends _overlay_menu_modules_OverlayMenu_es6__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @override
   * @param {HTMLElement} domNode - The top-level menu node
   * @param {HTMLElement|null} menuButton - The open menu button
   * @param {HTMLElement|null} closeButton - The close button toggle
   * @param {boolean} useArrowKeys - Whether to enable navigation by arrow keys
   */
  constructor(domNode, _temp) {
    let {
      menuButton = null,
      closeButton = null,
      useArrowKeys = true
    } = _temp === void 0 ? {} : _temp;
    super(domNode, {
      menuButton,
      closeButton
    });
    this.options = {
      useArrowKeys
    };
    this.menuItems = [];
  }
  /**
   * Create a button to go back to the previous menu section.
   * @param {HTMLElement} submenu - The current menu section.
   *   This should be the section the back button will be added to.
   * @return {HTMLButtonElement}
   */


  createBackButton(submenu) {
    const submenuBack = document.createElement('button');
    submenuBack.classList.add('c-side-menu__back');
    submenuBack.innerText = 'Back';
    submenuBack.addEventListener('click', () => {
      this.closeSubmenu(submenu);
    });
    return submenuBack;
  }
  /**
   * Create an element to display the current menu section.
   * @param {string} title - The menu section title.
   * @return {HTMLDivElement}
   */


  createSubmenuTitle(title) {
    const submenuTitle = document.createElement('div');
    submenuTitle.classList.add('c-side-menu__section-title');
    submenuTitle.innerText = title;
    return submenuTitle;
  }
  /**
   * Create a button to reveal a submenu.
   * @param {HTMLElement} submenu - The submenu to reveal.
   * @return {HTMLButtonElement}
   */


  createSubmenuToggle(submenu) {
    const submenuToggle = document.createElement('button');
    submenuToggle.classList.add('c-side-menu__toggle');
    submenuToggle.innerHTML = '<span class="c-side-menu__toggle-icon">Toggle Submenu</span>';
    submenuToggle.addEventListener('click', () => {
      this.openSubmenu(submenu);
    });
    return submenuToggle;
  }
  /**
   * Close a menu section.
   * @param {HTMLElement} submenu - The menu section to close.
   */


  closeSubmenu(submenu) {
    submenu.classList.remove('is-open');
    const currentSection = submenu.closest('.is-open');

    if (currentSection) {
      this.enableTab(currentSection);
      currentSection.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').focus();
    }
  }

  openSubmenu(submenu) {
    const currentSection = submenu.closest('.is-open');

    if (currentSection) {
      const focusableItems = currentSection.querySelectorAll('button:not(.c-hamburger-button--close), [href], input, select, textarea');
      focusableItems.forEach(item => {
        item.setAttribute('tabindex', '-1');
      });
    }

    submenu.classList.add('is-open');
    this.enableTab(submenu);
    window.removeEventListener('keydown', this.handleKeydown);
    window.addEventListener('keydown', this.handleKeydown);
    submenu.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').focus();
  }
  /**
   * Prepare a submenu by adding back button, title, and event handlers.
   * @param {HTMLElement} topLevelItem - The button or link that controls the
   *   subsection.
   * @return {HTMLElement | null}
   */


  prepSubmenu(topLevelItem) {
    const submenu = topLevelItem.parentElement.querySelector('.c-menu__subnav');
    if (!submenu) return null;
    const submenuBack = this.createBackButton(submenu);
    submenu.insertAdjacentElement('afterbegin', submenuBack);
    const submenuTitle = this.createSubmenuTitle(topLevelItem.innerText);
    submenuBack.insertAdjacentElement('afterend', submenuTitle);
    return submenu;
  }
  /**
   * Prepare a button menu item.
   * @param {HTMLButtonElement} button - The button menu item.
   * @return {void}
   */


  prepButton(button) {
    this.menuItems.push(button);
    const submenu = this.prepSubmenu(button);
    button.addEventListener('click', () => {
      this.openSubmenu(submenu);
    });
  }
  /**
   * Prepare a link menu item.
   * @param {HTMLAnchorElement} link - The link menu item.
   * @return {void}
   */


  prepLink(link) {
    this.menuItems.push(link);

    if (link.classList.contains('has-subnav')) {
      const submenu = this.prepSubmenu(link);
      const submenuToggle = this.createSubmenuToggle(submenu);
      this.menuItems.push(submenuToggle);
      link.insertAdjacentElement('afterend', submenuToggle);
    }
  }
  /**
   * Initialize the side menu.
   * @return {void}
   */


  init() {
    super.init();
    const menuItems = document.querySelectorAll('.c-menu__link');
    menuItems.forEach(item => {
      if (item.tagName === 'BUTTON') {
        this.prepButton(item);
      } else if (item.tagName === 'A') {
        this.prepLink(item);
      } else {
        throw new Error("Side Menu has child elements that are not A or Button elements. If you need to create a non-linked menu item within your menu, use '<button>' instead of '<nolink>' in the link field.");
      }
    });
  }
  /**
   * @inheritdoc
   */


  enableTab(startingPoint) {
    super.enableTab(startingPoint);
    const subNavs = startingPoint.querySelectorAll('.c-menu__subnav');
    subNavs.forEach(subNav => {
      if (!subNav.classList.contains('is-open')) {
        const subnavItems = subNav.querySelectorAll('button, [href], input, select, textarea, [tabindex]');
        subnavItems.forEach(item => {
          item.setAttribute('tabindex', '-1');
        });
      }
    });
  }
  /**
   * @inheritdoc
   */


  handleKeydown(event) {
    const {
      key
    } = event;

    if (key === 'Tab' || key === 'Escape') {
      super.handleKeydown(event);
    } else {
      if (!this.options.useArrowKeys) return;
      const focusable = [...this.overlay.querySelectorAll('button, [href], input, select, textarea')].filter(item => item.tabIndex !== -1);
      const numberFocusElements = focusable.length;
      const firstFocusableElement = focusable[0];
      const lastFocusableElement = focusable[numberFocusElements - 1];

      switch (key) {
        case 'ArrowUp':
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
          } else {
            const currentIndex = focusable.indexOf(document.activeElement);

            if (currentIndex !== -1) {
              focusable[currentIndex - 1].focus();
            }
          }

          break;

        case 'ArrowDown':
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
          } else {
            const currentIndex = focusable.indexOf(document.activeElement);

            if (currentIndex !== -1) {
              focusable[currentIndex + 1].focus();
            }
          }

          break;

        case 'ArrowRight':
          if (document.activeElement.closest('.c-menu__item')) {
            const activeMenuItem = document.activeElement.closest('.c-menu__item');

            if (activeMenuItem.classList.contains('has-subnav')) {
              const submenu = activeMenuItem.querySelector('.c-menu__subnav');
              this.openSubmenu(submenu);
            }
          }

          break;

        case 'ArrowLeft':
          if (document.activeElement.closest('.c-menu__item')) {
            const activeMenuItem = document.activeElement.closest('.c-menu__item');

            if (activeMenuItem.classList.contains('has-subnav')) {
              const submenu = activeMenuItem.querySelector('.c-menu__subnav');
              this.closeSubmenu(submenu);
            }
          }

          break;

        case 'Home':
        case 'PageUp':
          firstFocusableElement.focus();
          break;

        case 'End':
        case 'PageDown':
          lastFocusableElement.focus();
          break;

        default:
          break;
      }
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

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
/*!*********************************************************!*\
  !*** ./source/03-components/side-menu/side-menu.es6.js ***!
  \*********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var drupal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drupal */ "drupal");
/* harmony import */ var drupal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(drupal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_SideMenu_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/_SideMenu.es6 */ "./source/03-components/side-menu/modules/_SideMenu.es6.js");


(drupal__WEBPACK_IMPORTED_MODULE_0___default().behaviors.sideMenu) = {
  attach(context) {
    const menus = context.querySelectorAll('.c-side-menu');

    if (menus.length) {
      menus.forEach(menu => {
        const sideMenu = new _modules_SideMenu_es6__WEBPACK_IMPORTED_MODULE_1__["default"](menu);
        sideMenu.init();
      });
    }
  }

};
}();
/******/ })()
;
//# sourceMappingURL=side-menu.es6.js.map