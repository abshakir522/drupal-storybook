/* eslint-disable */
import Drupal from 'drupal';

Drupal.behaviors.Tabs = {
  attach(context) {
    const tab = context.querySelectorAll(".tablinks");
    const panel = context.querySelectorAll(".tabcontent");
    tab.forEach(item=>{
        item.addEventListener('click',onTabClick,false);
    })
    // context.querySelector('.tablinks').click();
    function onTabClick(event) {
      // deactivate existing active tabs and panel
      for (let i = 0; i < tab.length; i++) {
        tab[i].classList.remove("active");
      }
    
      for (let i = 0; i < panel.length; i++) {
        panel[i].classList.remove("active");
      }
    
      // activate new tabs and panel
      event.target.classList.add('active');
      const panelId = event.target.getAttribute('data-target');
        context.getElementById(panelId).classList.add('active')
    }
    
  },
};
/* eslint-enable */







