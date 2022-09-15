/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/00-config/_GESSO.es6.js":
/*!****************************************!*\
  !*** ./source/00-config/_GESSO.es6.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOX_SHADOW": function() { return /* binding */ BOX_SHADOW; },
/* harmony export */   "BREAKPOINTS": function() { return /* binding */ BREAKPOINTS; },
/* harmony export */   "COLORS": function() { return /* binding */ COLORS; },
/* harmony export */   "CONSTRAINS": function() { return /* binding */ CONSTRAINS; },
/* harmony export */   "GUTTER_WIDTH": function() { return /* binding */ GUTTER_WIDTH; },
/* harmony export */   "PALETTE": function() { return /* binding */ PALETTE; },
/* harmony export */   "SITE_MARGINS": function() { return /* binding */ SITE_MARGINS; },
/* harmony export */   "SPACING": function() { return /* binding */ SPACING; },
/* harmony export */   "TRANSITIONS": function() { return /* binding */ TRANSITIONS; },
/* harmony export */   "TYPOGRAPHY": function() { return /* binding */ TYPOGRAPHY; },
/* harmony export */   "Z_INDEX": function() { return /* binding */ Z_INDEX; }
/* harmony export */ });
const PALETTE = {
  brand: {
    blue: {
      base: "#0071BC",
      light: "#4773aa",
      "light-1": "#8ba6ca",
      "light-2": "#dce4ef",
      dark: "#205493",
      "dark-1": "#112E51"
    },
    "ocean-blue": {
      base: "#1dc2ae",
      light: "#29e1cb",
      "light-1": "#7efbe1",
      dark: "#008480",
      "dark-1": "#0b4b3f"
    }
  },
  grayscale: {
    white: "#ffffff",
    "gray-1": "#f1f1f1",
    "gray-2": "#e6e6e6",
    "gray-3": "#adadad",
    "gray-4": "#757575",
    "gray-5": "#5c5c5c",
    "gray-6": "#454545",
    "gray-7": "#1b1b1b",
    black: "#000000"
  },
  other: {
    yellow: {
      base: "#fad980",
      light: "#fff1d2"
    },
    "yellow-neon": {
      base: "#ff0"
    },
    green: {
      base: "#94bfa2",
      light: "#e7f4e4"
    },
    red: {
      base: "#e31c3d",
      light: "#e59393",
      "light-1": "#f9dede",
      dark: "#cd2026",
      "dark-1": "#981b1e"
    }
  }
};
const BOX_SHADOW = {
  0: "none",
  1: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  2: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
  3: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
  4: "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
  5: "0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)"
};
const CONSTRAINS = {
  sm: "800px",
  md: "1440px",
  lg: "2200px"
};
const BREAKPOINTS = {
  mobile: "320px",
  "mobile-lg": "480px",
  tablet: "640px",
  "mobile-menu": "699px",
  "tablet-lg": "880px",
  desktop: "1024px",
  "desktop-lg": "1200px",
  widescreen: "1400px"
};
const COLORS = {
  zy: {
    light: "#fff",
    dark: "#000",
    "border-dark": "#010000",
    "border-gray": "#E8E8E8",
    "smoke-gray": "#7E889C",
    "smoke-gray-16": "#EAECEF",
    base: "#007AC7",
    "base-hover": "#005B94",
    "base-focus": "#005B94",
    secondary: "#E4E7EC",
    "gray-scale-60": "#475467",
    "gray-scale-80": "#1D2939",
    "secondary-hover": "#D0D5DD",
    "base-32": "#C7C5FF",
    "base-8": "#F1F0FF",
    "base-40": "#F5FBFE",
    success: "#1DD189",
    "success-hover": "#1CC782",
    "success-focus": "#1ABC7B",
    "success-32": "#B7F0D9",
    "success-8": "#EDFBF6",
    warning: "#F7B500",
    "warning-hover": "#F8C000",
    "warning-focus": "#F9CB00",
    "warning-32": "#FCE7AD",
    "warning-8": "#FEF9EB",
    danger: "#F42121",
    "danger-hover": "#DC1E1E",
    "danger-focus": "#C31A1A",
    "danger-32": "#FCB8B8",
    "danger-8": "#FEEDED",
    "section-border": "#E4E7EC",
    disabled: "#F3F4F6",
    "disabled-color": "#98A2B3"
  },
  text: {
    primary: "#010000",
    secondary: "#5c5c5c",
    "on-light": "#1b1b1b",
    "on-dark": "#ffffff",
    link: "#010000",
    "link-hover": "#5149FF",
    "link-active": "#5149FF",
    "link-visited": "#205493"
  },
  background: {
    site: "#ffffff"
  },
  button: {
    primary: {
      background: "#0071BC",
      "background-hover": "#205493",
      "background-active": "#112E51",
      border: "#0071BC",
      "border-hover": "#205493",
      text: "#ffffff",
      "text-hover": "#ffffff",
      "text-active": "#ffffff"
    },
    secondary: {
      background: "#7efbe1",
      "background-hover": "#29e1cb",
      "background-active": "#1dc2ae",
      border: "#7efbe1",
      "border-hover": "#29e1cb",
      text: "#0b4b3f",
      "text-hover": "#0b4b3f",
      "text-active": "#1b1b1b"
    },
    base: {
      background: "#757575",
      "background-hover": "#5c5c5c",
      "background-active": "#454545",
      border: "#757575",
      "border-hover": "#5c5c5c",
      text: "#ffffff",
      "text-hover": "#ffffff",
      "text-active": "#ffffff"
    },
    disabled: {
      background: "#f1f1f1",
      border: "#f1f1f1",
      text: "#adadad"
    },
    danger: {
      background: "#e31c3d",
      "background-hover": "#cd2026",
      "background-active": "#981b1e",
      border: "#e31c3d",
      "border-hover": "#cd2026",
      text: "#ffffff",
      "text-hover": "#ffffff",
      "text-active": "#ffffff"
    },
    "back-to-top": {
      background: "#adadad",
      "background-hover": "#5c5c5c",
      color: "#ffffff",
      "color-hover": "#ffffff"
    }
  },
  form: {
    background: "#f1f1f1",
    "background-active": "#ffffff",
    "background-checked": "#0071BC",
    "background-unchecked": "#ffffff",
    border: "#e6e6e6",
    "border-dark": "#5c5c5c",
    "border-light": "#f1f1f1",
    thumb: "#5c5c5c",
    track: "#adadad"
  },
  mark: {
    background: "#ff0",
    text: "#1b1b1b"
  },
  selection: {
    background: "#0071BC",
    text: "#ffffff"
  },
  table: {
    border: "#5c5c5c",
    background: "#ffffff",
    "background-head": "#f1f1f1",
    "background-foot": "#f1f1f1"
  },
  ui: {
    generic: {
      background: "#adadad",
      "background-darker": "#1b1b1b",
      "background-dark": "#454545",
      "background-light": "#f1f1f1",
      "background-lighter": "#f1f1f1",
      border: "#adadad",
      "border-dark": "#454545",
      "border-light": "#f1f1f1",
      "text-lighter": "#ffffff",
      "text-light": "#adadad",
      "text-dark": "#5c5c5c",
      "text-darker": "#1b1b1b",
      accent: "#0071BC",
      "accent-dark": "#112E51",
      "accent-light": "#4773aa",
      focus: "#4773aa"
    },
    error: {
      background: "#f9dede",
      border: "#e59393"
    },
    success: {
      background: "#e7f4e4",
      border: "#94bfa2"
    },
    warning: {
      background: "#fff1d2",
      border: "#fad980"
    }
  }
};
const TYPOGRAPHY = {
  "font-family": {
    primary: {
      name: "Primary",
      stack: '"DM Sans", sans-serif'
    },
    system: {
      name: "System",
      stack: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Oxygen-Sans", Ubuntu, Cantarell, "Fira Sans", Droid Sans, sans-serif'
    },
    monospace: {
      name: "Monospace",
      stack: 'Menlo, Consolas, "Lucida Console", "Liberation Mono", "Courier New", monospace, sans-serif'
    }
  },
  "base-font-size": "16px",
  "font-size": {
    1: "12px",
    2: "14px",
    3: "16px",
    4: "18px",
    5: "24px",
    6: "32px",
    7: "40px",
    8: "48.8281px",
    9: "61.0352px",
    10: "76.2939px",
    11: "28px"
  },
  "responsive-font-size-min-width": "360px",
  "responsive-font-size-max-width": "1600px",
  "responsive-font-size": {
    1: {
      min: "12px",
      val: "auto",
      max: "12px"
    },
    2: {
      min: "14px",
      val: "auto",
      max: "14px"
    },
    3: {
      min: "16px",
      val: "auto",
      max: "16px"
    },
    4: {
      min: "18px",
      val: "auto",
      max: "20px"
    },
    5: {
      min: "20.25px",
      val: "auto",
      max: "25px"
    },
    6: {
      min: "22.7813px",
      val: "auto",
      max: "31.25px"
    },
    7: {
      min: "25.6289px",
      val: "auto",
      max: "39.0625px"
    },
    8: {
      min: "28.8325px",
      val: "auto",
      max: "48.8281px"
    },
    9: {
      min: "32.4366px",
      val: "auto",
      max: "61.0352px"
    },
    10: {
      min: "36.4912px",
      val: "auto",
      max: "76.2939px"
    }
  },
  "font-weight": {
    light: 300,
    regular: 400,
    semibold: 500,
    medium: 600,
    bold: 700
  },
  "line-height": {
    tight: 1.1,
    base: 1.45,
    loose: 1.7,
    h1: "56px",
    h2: "46px",
    h3: "35px",
    "logo-title": "38px",
    "page-title": "31px",
    "body-large": "27px",
    "body-medium": "25px",
    "body-small": "14px",
    "body-extra-samll": "12px",
    normal: "18px",
    small: "16px"
  },
  display: {
    display: {
      color: "#010000",
      "font-family": '"DM Sans", sans-serif',
      "font-weight": 700,
      "line-height": 1.1,
      "responsive-font-size": 10
    },
    h1: {
      color: "#010000",
      "font-family": '"DM Sans", sans-serif',
      "font-weight": 700,
      "line-height": 1.1,
      "responsive-font-size": 8
    },
    h2: {
      color: "#010000",
      "font-family": '"DM Sans", sans-serif',
      "font-weight": 700,
      "line-height": 1.1,
      "responsive-font-size": 7
    },
    h3: {
      color: "#010000",
      "font-family": '"DM Sans", sans-serif',
      "font-weight": 700,
      "line-height": 1.1,
      "responsive-font-size": 6
    },
    h4: {
      color: "#010000",
      "font-family": '"DM Sans", sans-serif',
      "font-weight": 700,
      "line-height": 1.45,
      "responsive-font-size": 5
    },
    h5: {
      color: "#010000",
      "font-family": '"DM Sans", sans-serif',
      "font-weight": 700,
      "line-height": 1.45,
      "responsive-font-size": 3
    },
    h6: {
      color: "#010000",
      "font-family": '"DM Sans", sans-serif',
      "font-weight": 500,
      "letter-spacing": "-0.04em",
      "line-height": 1.7,
      "text-transform": "uppercase",
      "responsive-font-size": 2
    },
    blockquote: {
      color: "#010000",
      "font-family": '"DM Sans", sans-serif',
      "font-size": "24px",
      "font-weight": 400,
      "line-height": 1.45
    },
    body: {
      color: "#010000",
      "font-family": '"DM Sans", sans-serif',
      "font-size": "16px",
      "font-weight": 400,
      "line-height": 1.45
    },
    "body-large": {
      color: "#010000",
      "font-family": '"DM Sans", sans-serif',
      "font-size": "18px",
      "font-weight": 400,
      "line-height": 1.45
    },
    cite: {
      color: "#5c5c5c",
      "font-family": '"DM Sans", sans-serif',
      "font-size": "14px",
      "font-style": "normal",
      "font-weight": 500,
      "letter-spacing": ".02em",
      "line-height": 1.1
    }
  }
};
const TRANSITIONS = {
  ease: {
    "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    "ease-out": "cubic-bezier(0.0, 0, 0.2, 1)",
    "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
    sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
  },
  duration: {
    shortest: "150ms",
    short: "200ms",
    standard: "375ms",
    long: "400ms",
    intro: "270ms",
    outro: "195ms"
  }
};
const Z_INDEX = {
  nav: 1e3,
  drawer: 1200,
  modal: 1300
};
const SPACING = {
  0: 0,
  1: "8px",
  2: "16px",
  3: "24px",
  4: "32px",
  5: "40px",
  6: "48px",
  7: "56px",
  8: "64px",
  9: "72px",
  10: "80px",
  12: "96px",
  15: "120px",
  .5: "4px",
  1.5: "12px",
  2.5: "20px"
};
const GUTTER_WIDTH = "40px";
const SITE_MARGINS = {
  mobile: "16px",
  desktop: "32px"
};

/***/ }),

/***/ "./source/03-components/mega-menu/modules/MegaMenu.es6.js":
/*!****************************************************************!*\
  !*** ./source/03-components/mega-menu/modules/MegaMenu.es6.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/**
 * Megamenu using the W3C Disclosure Menu pattern.
 * @see https://w3c.github.io/aria-practices/examples/disclosure/js/disclosureMenu.js
 */
class MegaMenu {
  /**
   * @constructor
   * @param {HTMLElement} domNode - The menu DOM element
   * @param {boolean} useArrowKeys - Whether to enable navigating by arrow keys
   * @return {void}
   */
  constructor(domNode, _temp) {
    let {
      useArrowKeys = true
    } = _temp === void 0 ? {} : _temp;
    this.menu = domNode;
    this.menuSections = [];
    this.openIndex = null;
    this.useArrowKeys = useArrowKeys;
    this.topLevelItems = Array.from(this.menu.querySelectorAll('button[aria-expanded][aria-controls]'));

    if (this.useArrowKeys) {
      this.topLevelItems = [...this.topLevelItems, ...Array.from(this.menu.querySelectorAll('a.js-top-level'))];
    }

    this.handleClickAnywhere = this.handleClickAnywhere.bind(this);
    this.handleKeydownAnywhere = this.handleKeydownAnywhere.bind(this);
  }
  /**
   * Show/hide a section.
   * @param {HTMLElement} section - The menu section to toggle.
   * @param {boolean} hide - If true, the menu section will be hidden
   *  regardless of its current state
   * @return {void}
   */


  toggleSection(section, hide) {
    if (hide) {
      section.hidden = true;
    } else {
      section.hidden = !section.hidden;
    }

    const focusable = section.querySelectorAll('button, [href], input, select, textarea, [tabindex]');
    focusable.forEach(focusableItem => {
      focusableItem.tabIndex = section.hidden ? -1 : 0;
    });

    if (!section.hidden) {
      focusable[0].focus();
    }
  }
  /**
   * Expand/collapse a menu section.
   * @param {number} index - The index of the section to toggle.
   * @param {boolean} expanded - If TRUE, the section will be revealed.
   * @return {void}
   */


  toggleExpand(index, expanded) {
    if (this.openIndex !== index) {
      this.toggleExpand(this.openIndex, false);
    }

    if (this.topLevelItems[index]) {
      if (this.openIndex === null) {
        this.openMenu();
      }

      this.openIndex = expanded ? index : null;
      this.topLevelItems[index].setAttribute('aria-expanded', expanded ? 'true' : 'false');
      this.toggleSection(this.menuSections[index], !expanded);

      if (this.openIndex === null) {
        this.closeMenu();
      }
    }
  }
  /**
   * Handle navigation key events.
   * @param {KeyboardEvent} event - The keyboard event
   * @param {HTMLElement[]} menuLinks - Array of menu links to navigate through
   * @param {number} currentIndex - Array index of the currently focused menu link
   * @return {void}
   */


  controlFocusByKey(event, menuLinks, currentIndex) {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();

        if (currentIndex > -1) {
          const prevIndex = Math.max(0, currentIndex - 1);
          menuLinks[prevIndex].focus();
        }

        break;

      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();

        if (currentIndex > -1) {
          const nextIndex = Math.min(menuLinks.length - 1, currentIndex + 1);
          menuLinks[nextIndex].focus();
        }

        break;

      case 'Home':
        event.preventDefault();
        menuLinks[0].focus();
        break;

      case 'End':
        event.preventDefault();
        menuLinks[menuLinks.length - 1].focus();
        break;

      default:
        // Do nothing.
        break;
    }
  }
  /**
   * Handle keydown events on a menu section.
   * @param {KeyboardEvent} event - The keydown event
   * @return {void}
   */


  handleSectionKeydown(event) {
    if (this.openIndex === null || !this.useArrowKeys) return;
    const menuLinks = [...this.menuSections[this.openIndex].querySelectorAll('a, button')];
    const currentIndex = menuLinks.indexOf(document.activeElement);
    this.controlFocusByKey(event, menuLinks, currentIndex);
  }
  /**
   * Handle clicks on a top-level button.
   * @param {MouseEvent} event - The click event.
   * @return {void}
   */


  handleButtonClick(event) {
    const {
      currentTarget
    } = event;
    const buttonIndex = this.topLevelItems.indexOf(currentTarget);
    this.toggleExpand(buttonIndex, currentTarget.getAttribute('aria-expanded') !== 'true');
  }
  /**
   * Handle keydown events on a top-level button.
   * @param {KeyboardEvent} event - The keydown event
   * @return {void}
   */


  handleButtonKeydown(event) {
    if (!this.useArrowKeys) return;
    const targetButtonIndex = this.topLevelItems.indexOf(document.activeElement);

    if (this.openIndex === targetButtonIndex && event.key === 'ArrowDown') {
      event.preventDefault();
      this.menuSections[this.openIndex].querySelector('a, button').focus();
    } else {
      this.controlFocusByKey(event, this.topLevelItems, targetButtonIndex);
    }
  }
  /**
   * Handle keydown events on a top-level link.
   * @param {KeyboardEvent} event - The keydown event
   * @return {void}
   */


  handleLinkKeydown(event) {
    if (!this.useArrowKeys) return;
    const targetLinkIndex = this.topLevelItems.indexOf(document.activeElement);
    this.controlFocusByKey(event, this.topLevelItems, targetLinkIndex);
  }
  /**
   * Handle clicks on a close button.
   * @param {MouseEvent} event
   * @return {void}
   */


  handleCloseClick(event) {
    event.preventDefault();
    this.toggleExpand(this.openIndex, false);
  }
  /**
   * Prep a top-level button and menu subsection.
   * @param {HTMLButtonElement} button - The button that will toggle the menu section
   * @return {void}
   */


  prepSection(button) {
    const section = button.parentNode.querySelector('.c-mega-menu__section');
    if (!section) return;
    const closeButton = section.querySelector('.c-mega-menu__section-close');
    this.menuSections.push(section);
    button.setAttribute('aria-expanded', 'false');
    this.toggleSection(section, true);
    section.addEventListener('keydown', this.handleSectionKeydown.bind(this));
    button.addEventListener('click', this.handleButtonClick.bind(this));
    button.addEventListener('keydown', this.handleButtonKeydown.bind(this));
    closeButton.addEventListener('click', this.handleCloseClick.bind(this));
  }
  /**
   * Prep a top-level menu link, which will not have a subsection.
   * @param {HTMLAnchorElement} link - The menu link
   * @return {void}
   */


  prepLink(link) {
    this.menuSections.push(null);
    link.addEventListener('keydown', this.handleLinkKeydown.bind(this));
  }
  /**
   * Close the menu if the user clicks outside it.
   * @param {MouseEvent} event - The click event
   * @return {void}
   */


  handleClickAnywhere(event) {
    if (!event.target.closest('.c-mega-menu')) {
      this.toggleExpand(this.openIndex, false);
      this.closeMenu();
    }
  }
  /**
   * Close the menu if the user hits the ESC key.
   * @param {KeyboardEvent} event - The keydown event
   * @return {void}
   */


  handleKeydownAnywhere(event) {
    if (event.key === 'Escape' && this.openIndex !== null) {
      this.menuSections[this.openIndex].focus();
      this.toggleExpand(this.openIndex, false);
      this.closeMenu();
    } else if (event.key === 'Tab') {
      setTimeout(() => {
        if (document.activeElement.classList.contains('js-top-level')) {
          const openButton = this.menu.querySelector('button[aria-expanded="true"]');

          if (openButton) {
            const buttonIndex = this.topLevelItems.indexOf(openButton);
            this.toggleExpand(buttonIndex, false);
          }
        }
      }, 0);
    }
  }
  /**
   * Remove event listeners when all menu sections closed.
   * @return {void}
   */


  closeMenu() {
    window.removeEventListener('click', this.handleClickAnywhere);
    window.removeEventListener('keydown', this.handleKeydownAnywhere);
  }
  /**
   * Add event listeners when any menu section open.
   * @return {void}
   */


  openMenu() {
    window.addEventListener('click', this.handleClickAnywhere);
    window.addEventListener('keydown', this.handleKeydownAnywhere);
  }
  /**
   * Initialize the mega menu.
   * @return {void}
   */


  init() {
    this.topLevelItems.forEach(item => {
      if (item.tagName === 'BUTTON') {
        this.prepSection(item);
      } else {
        this.prepLink(item);
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MegaMenu);

/***/ }),

/***/ "./source/03-components/mobile-menu/modules/_MobileMenu.es6.js":
/*!*********************************************************************!*\
  !*** ./source/03-components/mobile-menu/modules/_MobileMenu.es6.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overlay_menu_modules_OverlayMenu_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../overlay-menu/modules/_OverlayMenu.es6 */ "./source/03-components/overlay-menu/modules/_OverlayMenu.es6.js");
/* harmony import */ var _06_utility_cleanString_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../06-utility/_cleanString.es6 */ "./source/06-utility/_cleanString.es6.js");
/* harmony import */ var _00_config_GESSO_es6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../00-config/_GESSO.es6 */ "./source/00-config/_GESSO.es6.js");




class MobileMenu extends _overlay_menu_modules_OverlayMenu_es6__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * @constructor
   * @param {HTMLElement} domNode - The menu to turn into a mobile menu
   * @param context
   * @param {string|null} searchBlockClass - Optional selector for the search block.
   *   If included, the search block will be cloned into the mobile menu. Set to
   *   null to omit the search block from the mobile menu.
   * @param {string|null} utilityNavClass - Optional selector for the utility nav.
   *   If included, the utility nav will be cloned into the mobile menu. Set to
   *   null to omit the utility nav in the mobile menu.
   * @param {boolean} toggleSubnav - Whether sub-menus should be hidden initially and toggleable.
   * @param {string} mobileMenuBreakpoint - Breakpoint at which to switch to the mobile menu.
   * @param {string} classPrefix - BEM prefix used for original menu classes, e.g. '.dropdown-menu'
   */
  constructor(domNode, context, _temp) {
    let {
      searchBlockClass = '.search',
      utilityNavClass = '.c-menu--utility',
      toggleSubnav = true,
      mobileMenuBreakpoint = `(max-width: ${_00_config_GESSO_es6__WEBPACK_IMPORTED_MODULE_2__.BREAKPOINTS["mobile-menu"]})`,
      classPrefix = ''
    } = _temp === void 0 ? {} : _temp;
    super(null);
    this.menu = domNode;
    this.searchBlock = searchBlockClass ? context.querySelector(searchBlockClass) : null;
    this.utilityNav = utilityNavClass ? context.querySelector(utilityNavClass) : null;
    this.options = {
      toggleSubnav,
      mobileMenuBreakpoint,
      classPrefix
    };
    this.toggleMenuDisplay = this.toggleMenuDisplay.bind(this);
  }
  /**
   * Create the outer overlay that will hold the mobile menu.
   * @return {HTMLElement}
   */


  createMenuOverlay() {
    const overlay = document.createElement('nav');
    overlay.setAttribute('aria-modal', 'true');
    overlay.classList.add('c-mobile-menu');
    return this.menu.insertAdjacentElement('afterend', overlay);
  }
  /**
   * Clone a Drupal block to include in the mobile menu.
   * @param {HTMLElement} block - The block to clone
   * @param {string} blockClass - Optional CSS class to add to the cloned block
   * @return {Node}
   */


  cloneBlock(block, blockClass) {
    if (blockClass === void 0) {
      blockClass = '';
    }

    const blockClone = block.cloneNode(true);

    if (blockClass) {
      blockClone.classList.add(blockClass);
    }

    if (blockClone.id) {
      blockClone.id = `${blockClone.id}-mobile`;
    }

    return blockClone;
  }
  /**
   * Create a toggle button to hide/show a subnav.
   * @param {HTMLElement} subnav - The submenu the toggle button will be used to display.
   * @return {Element}
   */


  createToggleButton(subnav) {
    const button = document.createElement('button');
    button.classList.add('c-mobile-menu__subnav-arrow');
    button.setAttribute('aria-controls', subnav.id);
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = '<span class="u-visually-hidden">Toggle Subnav</span>';
    return subnav.insertAdjacentElement('beforebegin', button);
  }
  /**
   * Set up a submenu by adding a toggle button if one does not exist already,
   * and using it to hide/show the subnav.
   * @param {HTMLElement} link - The top-level menu link or button.
   * @param {HTMLElement} subnav - The submenu to hide/show.
   */


  setupSubnav(link, subnav) {
    const toggleButton = link.tagName === 'BUTTON' ? link : this.createToggleButton(subnav);
    subnav.style.display = 'none';
    toggleButton.addEventListener('click', event => {
      event.preventDefault();

      if (toggleButton.getAttribute('aria-expanded') === 'true') {
        subnav.style.display = 'none';
        toggleButton.setAttribute('aria-expanded', 'false');
        subnav.classList.remove('is-open');
        this.enableTab(this.overlay);
      } else {
        subnav.style.display = 'block';
        toggleButton.setAttribute('aria-expanded', 'true');
        subnav.classList.add('is-open');
        subnav.hidden = false;
        subnav.querySelector('.c-mobile-menu__link').focus();
        this.enableTab(this.overlay);
      }
    });
  }
  /**
   * Clone a menu and its submenus to include in the mobile menu.
   * @param {HTMLElement} menu - The menu to clone.
   * @param {string} menuClass - Optional CSS class to add to the menu.
   * @return {Node}
   */


  cloneMenu(menu, menuClass) {
    if (menuClass === void 0) {
      menuClass = '';
    }

    const menuClone = menu.cloneNode(true);

    if (menuClass) {
      menuClone.classList.remove(`${this.options.classPrefix}`);
      menuClone.classList.add(menuClass);
    }

    const subNavTypeClass = this.options.toggleSubNav ? 'c-mobile-menu__menu--toggle-subnav' : 'c-mobile-menu__menu--show-subnav';
    menuClone.classList.add(subNavTypeClass); // Swap classes on the mobile menu items.

    const menuItems = menuClone.querySelectorAll(`.${this.options.classPrefix}__item`);

    if (menuItems.length) {
      menuItems.forEach(item => {
        item.classList.remove(`${this.options.classPrefix}__item`);
        item.classList.add('c-mobile-menu__item');
      });
    } // Swap classes on mobile menu links.


    const menuLinks = menuClone.querySelectorAll(`.${this.options.classPrefix}__link`);
    menuLinks.forEach(link => {
      link.classList.remove(`${this.options.classPrefix}__link`);
      link.classList.add('c-mobile-menu__link');
    }); // Swap classes on menu sections, if applicable.

    const menuSections = menuClone.querySelectorAll(`.${this.options.classPrefix}__section`);

    if (menuSections.length) {
      menuSections.forEach(section => {
        section.classList.remove(`${this.options.classPrefix}__section`);
        section.classList.add('c-mobile-menu__section');
        const sectionInner = section.querySelector(`.${this.options.classPrefix}__section-inner`);

        if (sectionInner) {
          sectionInner.classList.remove(`${this.options.classPrefix}__section-inner`);
          sectionInner.classList.add('c-mobile-menu__section-inner');
        }

        const sectionOverview = section.querySelector(`.${this.options.classPrefix}__overview`);

        if (sectionOverview) {
          sectionOverview.classList.remove(`${this.options.classPrefix}__overview`);
        }
      });
    } // Prep sub-menus, if applicable.


    const subMenus = menuClone.querySelectorAll(`.${this.options.classPrefix}__subnav`);

    if (subMenus.length) {
      subMenus.forEach((submenu, index) => {
        const link = submenu.closest('.c-mobile-menu__item').querySelector('.c-mobile-menu__link'); // Swap submenu classes and ID.

        submenu.classList.add('c-mobile-menu__subnav');
        submenu.classList.remove(`${this.options.classPrefix}__subnav`);
        submenu.id = (0,_06_utility_cleanString_es6__WEBPACK_IMPORTED_MODULE_1__["default"])(`mobile-menu-${link.innerText.trim()}${index || ''}`);

        if (this.options.toggleSubnav) {
          this.setupSubnav(link, link.nextElementSibling);
        }
      });
    }

    return menuClone;
  }
  /**
   * Hide the original or mobile menu, depending on screen size.
   * @return void
   */


  toggleMenuDisplay() {
    if (window.matchMedia(this.options.mobileMenuBreakpoint).matches) {
      this.menuButton.style.display = 'block';

      if (this.searchBlock) {
        this.searchBlock.style.display = 'none';
      }

      this.menu.style.display = 'none';

      if (this.utilityNav) {
        this.utilityNav.style.display = 'none';
      }

      this.closeMenu();
    } else {
      this.closeMenu();
      this.menuButton.style.display = 'none';

      if (this.searchBlock) {
        this.searchBlock.style.display = '';
      }

      this.menu.style.display = '';

      if (this.utilityNav) {
        this.utilityNav.style.display = '';
      }
    }
  }
  /**
   * @inheritdoc
   */


  enableTab(startingPoint) {
    super.enableTab(startingPoint);

    if (this.options.toggleSubnav) {
      let subSections = startingPoint.querySelectorAll('.c-mobile-menu__section');

      if (!subSections.length) {
        subSections = startingPoint.querySelectorAll('.c-mobile-menu__subnav');
      }

      subSections.forEach(subSection => {
        if (subSection.hidden || !subSection.classList.contains('is-open')) {
          const subSectionItems = subSection.querySelectorAll('button, [href], input, select, textarea, [tabindex]');
          subSectionItems.forEach(item => {
            item.setAttribute('tabindex', '-1');
          });
        }
      });
    }
  }
  /**
   * Initialize the mobile menu.
   * @return void
   */


  init() {
    if (!this.menu) return;
    this.overlay = this.overlay ?? this.createMenuOverlay();
    super.init();

    if (this.searchBlock) {
      this.overlay.appendChild(this.cloneBlock(this.searchBlock, 'c-mobile-menu__search'));
    }

    this.overlay.appendChild(this.cloneMenu(this.menu, 'c-mobile-menu__menu'));

    if (this.utilityNav) {
      this.overlay.appendChild(this.cloneMenu(this.utilityNav, 'c-mobile-menu__menu'));
    }

    this.toggleMenuDisplay();
    let resizeTimeout = false;
    let lastWindowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      const currWindowWidth = window.innerWidth;

      if (lastWindowWidth !== currWindowWidth) {
        if (resizeTimeout !== false) {
          clearTimeout(resizeTimeout);
        }

        resizeTimeout = setTimeout(this.toggleMenuDisplay, 200);
        lastWindowWidth = currWindowWidth;
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

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

/***/ "./source/06-utility/_cleanString.es6.js":
/*!***********************************************!*\
  !*** ./source/06-utility/_cleanString.es6.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function cleanString(stringToClean) {
  return stringToClean.toLowerCase().replace(' ', '-');
}

/* harmony default export */ __webpack_exports__["default"] = (cleanString);

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
  !*** ./source/03-components/mega-menu/mega-menu.es6.js ***!
  \*********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var drupal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! drupal */ "drupal");
/* harmony import */ var drupal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(drupal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_MegaMenu_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/MegaMenu.es6 */ "./source/03-components/mega-menu/modules/MegaMenu.es6.js");
/* harmony import */ var _mobile_menu_modules_MobileMenu_es6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mobile-menu/modules/_MobileMenu.es6 */ "./source/03-components/mobile-menu/modules/_MobileMenu.es6.js");



(drupal__WEBPACK_IMPORTED_MODULE_0___default().behaviors.megaMenu) = {
  attach(context) {
    const menus = context.querySelectorAll('.c-mega-menu');

    if (menus.length) {
      menus.forEach(menu => {
        const megaMenu = new _modules_MegaMenu_es6__WEBPACK_IMPORTED_MODULE_1__["default"](menu);
        megaMenu.init();
        const mobileMenu = new _mobile_menu_modules_MobileMenu_es6__WEBPACK_IMPORTED_MODULE_2__["default"](menu, context, {
          classPrefix: 'c-mega-menu'
        });
        mobileMenu.init();
      });
    }
  }

};
}();
/******/ })()
;
//# sourceMappingURL=mega-menu.es6.js.map