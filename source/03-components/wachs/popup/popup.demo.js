/* eslint-disable */
import Drupal from 'drupal';
// import Swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';
Drupal.behaviors.popup = {
  attach(context) {
      const popupTypes = [
        {
          'type': 'popup-info',
          'classes':{
            'confirm': 'button-zy  button--primary',
            'cancel': 'button-zy  button--secondary'
          }
        },
        {
          'type': 'popup-success',
          'classes':{
            'confirm': 'button-zy  button--primary success',
            'cancel': 'button-zy  button--secondary success'
          }
        },
        {
          'type': 'popup-warning',
          'classes':{
            'confirm': 'button-zy  button--primary warning',
            'cancel': 'button-zy  button--secondary warning'
          }
        },
        {
          'type': 'popup-danger',
          'classes':{
            'confirm': 'button-zy  button--primary danger',
            'cancel': 'button-zy  button--secondary danger'
          }
        }
      ];
      popupTypes.forEach(function(item){
        let swalTrigger = document.getElementById(item.type);
        if (swalTrigger) {
          swalTrigger.addEventListener('click', function(){
            Swal.fire({
                title: "Info Title",
                text: "Are you sure to remove this content? You can access this file for 7 days in your trash.",
                showCancelButton: true,
                focusConfirm: false,
                confirmButtonText: "Confirm",
                cancelButtonText: "Cancel",
                showCloseButton: true,
                buttonsStyling: false,
                customClass: {
                  popup: item.type,
                  closeButton: '',
                  confirmButton: item.classes.confirm,//'button-zy  button--primary',
                  cancelButton: item.classes.cancel,//'button-zy  button--secondary',
                }
            });
          });
        }
        
      })

      
  },
};
/* eslint-enable */