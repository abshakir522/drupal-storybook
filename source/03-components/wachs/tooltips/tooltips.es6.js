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
  },
};
/* eslint-enable */