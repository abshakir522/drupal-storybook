/* eslint-disable */
import Drupal from 'drupal';
import once from 'once';

Drupal.behaviors.popup = {
  attach(context) {
    const sideBar = document.querySelector('.side-bar');
    if (sideBar) {
      const sidebarLinks = sideBar.querySelectorAll('.features-item');
      const collapseBtn = document.querySelector('#side-collapse-btn');

      changeTippy(false, sidebarLinks);
      collapseBtn.onclick = () => {
          sideBar.classList.toggle('collapse');
          if (sideBar.classList.contains('collapse')){
            changeTippy(true, sidebarLinks);
          }else {
            changeTippy(false, sidebarLinks);
          }
      };
    }
    function changeTippy(status, sidebarLinks) {
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