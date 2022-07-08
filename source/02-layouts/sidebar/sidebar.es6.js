/* eslint-disable */
import Drupal from 'drupal';
import once from 'once';

Drupal.behaviors.popup = {
  attach(context) {
    const sideBar = document.querySelector('.side-bar');
    const sidebarLinks = sideBar.querySelectorAll('.features-item');
    const collapseBtn = document.querySelector('#side-collapse-btn');

    changeTippy(false);
    collapseBtn.onclick = () => {
        sideBar.classList.toggle('collapse');
        if (sideBar.classList.contains('collapse')){
          changeTippy(true);
        }else {
          changeTippy(false);
        }
    };
    function changeTippy(status) {
      sidebarLinks.forEach(function(item){
        if (item._tippy) {
          if (status) {
            item._tippy.enable();
          }else {
            item._tippy.disable();
          }
        }
      });
    }
    
  },
};
/* eslint-enable */