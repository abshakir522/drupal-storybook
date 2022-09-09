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

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

module.exports = jQuery;

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
/*!***********************************************************!*\
  !*** ./source/03-components/dropbutton/dropbutton.es6.js ***!
  \***********************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var drupal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! drupal */ "drupal");
/* harmony import */ var drupal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(drupal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var once__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! once */ "once");
/* harmony import */ var once__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(once__WEBPACK_IMPORTED_MODULE_2__);



/**
 * @file
 * Dropbutton feature.
 */

(function initDropbutton($) {
  /**
   * Delegated callback for opening and closing dropbutton secondary actions.
   *
   * @function Drupal.DropButton~dropbuttonClickHandler
   *
   * @param {jQuery.Event} e
   *   The event triggered.
   */
  function dropbuttonClickHandler(e) {
    e.preventDefault();
    $(e.target).closest('.js-dropbutton').toggleClass('is-open');
  }
  /**
   * A DropButton presents an HTML list as a button with a primary action.
   *
   * All secondary actions beyond the first in the list are presented in a
   * dropdown list accessible through a toggle arrow associated with the button.
   *
   * @constructor Drupal.DropButton
   *
   * @param {HTMLElement} dropbutton
   *   A DOM element.
   * @param {object} settings
   *   A list of options including:
   * @param {string} settings.title
   *   The text inside the toggle link element. This text is hidden
   *   from visual UAs.
   */


  function DropButton(dropbutton, settings) {
    if (settings === void 0) {
      settings = {};
    }

    // Merge defaults with settings.
    const options = $.extend({
      title: drupal__WEBPACK_IMPORTED_MODULE_1___default().t('List additional actions')
    }, settings);
    const $dropbutton = $(dropbutton);
    /**
     * @type {jQuery}
     */

    this.$dropbutton = $dropbutton;
    /**
     * @type {jQuery}
     */

    this.$list = $dropbutton.find('.js-dropbutton-list');
    /**
     * Find actions and mark them.
     *
     * @type {jQuery}
     */

    this.$actions = this.$list.find('li'); // Add the special dropdown only if there are hidden actions.

    if (this.$actions.length > 1) {
      // Identify the first element of the collection.
      const $primary = this.$actions.slice(0, 1);
      $primary.addClass('is-action'); // Identify the secondary actions.

      const $secondary = this.$actions.slice(1);
      $secondary.addClass('is-secondary-action'); // Add toggle link.

      $primary.after(drupal__WEBPACK_IMPORTED_MODULE_1___default().theme('dropbuttonToggle', options)); // Bind mouse events.

      this.$dropbutton.addClass('has-multiple').on({
        /**
         * Adds a timeout to close the dropdown on mouseleave.
         *
         * @ignore
         */
        'mouseleave.dropbutton': $.proxy(this.hoverOut, this),

        /**
         * Clears timeout when mouseout of the dropdown.
         *
         * @ignore
         */
        'mouseenter.dropbutton': $.proxy(this.hoverIn, this),

        /**
         * Similar to mouseleave/mouseenter, but for keyboard navigation.
         *
         * @ignore
         */
        'focusout.dropbutton': $.proxy(this.focusOut, this),

        /**
         * @ignore
         */
        'focusin.dropbutton': $.proxy(this.focusIn, this)
      });
    } else {
      this.$dropbutton.addClass('is-single');
    }
  }
  /**
   * Extend the DropButton constructor.
   */


  $.extend(DropButton,
  /** @lends Drupal.DropButton */
  {
    /**
     * Store all processed DropButtons.
     *
     * @type {Array.<Drupal.DropButton>}
     */
    dropbuttons: []
  });
  /**
   * Extend the DropButton prototype.
   */

  $.extend(DropButton.prototype,
  /** @lends Drupal.DropButton# */
  {
    /**
     * Toggle the dropbutton open and closed.
     *
     * @param {boolean} [show]
     *   Force the dropbutton to open by passing true or to close by
     *   passing false.
     */
    toggle(show) {
      const isBool = typeof show === 'boolean';
      const openButton = isBool ? show : !this.$dropbutton.hasClass('is-open');
      this.$dropbutton.toggleClass('is-open', openButton);
    },

    /**
     * @method
     */
    hoverIn() {
      // Clear any previous timer we were using.
      if (this.timerID) {
        window.clearTimeout(this.timerID);
      }
    },

    /**
     * @method
     */
    hoverOut() {
      // Wait half a second before closing.
      this.timerID = window.setTimeout($.proxy(this, 'close'), 500);
    },

    /**
     * @method
     */
    open() {
      this.toggle(true);
    },

    /**
     * @method
     */
    close() {
      this.toggle(false);
    },

    /**
     * @param {jQuery.Event} e
     *   The event triggered.
     */
    focusOut(e) {
      this.hoverOut.call(this, e);
    },

    /**
     * @param {jQuery.Event} e
     *   The event triggered.
     */
    focusIn(e) {
      this.hoverIn.call(this, e);
    }

  });
  $.extend((drupal__WEBPACK_IMPORTED_MODULE_1___default().theme),
  /** @lends Drupal.theme */
  {
    /**
     * A toggle is an interactive element often bound to a click handler.
     *
     * @param {object} options
     *   Options object.
     * @param {string} [options.title]
     *   The HTML anchor title attribute and text for the inner span element.
     *
     * @return {string}
     *   A string representing a DOM fragment.
     */
    dropbuttonToggle(options) {
      return `<li class="c-dropbutton__toggle"><button class="c-dropbutton__toggle-button" type="button"><span class="u-visually-hidden">${options.title}</span></button></li>`;
    }

  }); // Expose constructor in the public space.

  (drupal__WEBPACK_IMPORTED_MODULE_1___default().DropButton) = DropButton;
  /**
   * Process elements with the .dropbutton class on page load.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches dropButton behaviors.
   */

  (drupal__WEBPACK_IMPORTED_MODULE_1___default().behaviors.dropButton) = {
    attach(context, settings) {
      const options = $.extend({
        dropbutton: {}
      }, settings);
      const dropbuttons = once__WEBPACK_IMPORTED_MODULE_2___default()('dropbutton', '.js-dropbutton', context);

      if (dropbuttons.length) {
        // Adds the delegated handler that will toggle dropdowns on click.
        once__WEBPACK_IMPORTED_MODULE_2___default()('dropbuttonClick', 'body', context).forEach(bodyElem => {
          const $body = $(bodyElem);

          if ($body.length) {
            $body.on('click', '.c-dropbutton__toggle', dropbuttonClickHandler);
          } // Initialize all buttons.


          const il = dropbuttons.length;

          for (let i = 0; i < il; i += 1) {
            DropButton.dropbuttons.push(new DropButton(dropbuttons[i], options.dropbutton));
          }
        });
      }
    }

  };
})((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
}();
/******/ })()
;
//# sourceMappingURL=dropbutton.es6.js.map