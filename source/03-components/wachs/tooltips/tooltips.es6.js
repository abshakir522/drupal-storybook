/* eslint-disable */
import Drupal from 'drupal';
import tippy from 'tippy.js';
import once from 'once';

Drupal.behaviors.sideMenu = {
  attach(context) {
    const tippyInstance = tippy('[data-tippy-content]');
    tippyInstance.forEach(function(instance){
      const tipyPlacement = instance.reference.dataset.placement;
      if (tipyPlacement != undefined) {
          instance.setProps({
              placement: tipyPlacement,
              maxWidth: 200,
          });
      }
    });
    // if (document.getElementById('edit-field-start-date-0-value') != null) {
    //   const instance = tippy('#edit-field-start-date-0-value input', {
    //     content: 'Start by adding start date of the lease',
    //     placement: 'left',
    //     maxWidth: 200
    //   });
    //   setTimeout(function() {
    //     instance[0].show();
    //   }, 1000);
    // }
  },
};

/* eslint-enable */