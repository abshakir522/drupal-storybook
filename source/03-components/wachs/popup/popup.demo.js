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
            'confirm': 'button  button--primary',
            'cancel': 'button  button--secondary'
          }
        },
        {
          'type': 'popup-success',
          'classes':{
            'confirm': 'button  button--primary success',
            'cancel': 'button  button--secondary success'
          }
        },
        {
          'type': 'popup-warning',
          'classes':{
            'confirm': 'button  button--primary warning',
            'cancel': 'button  button--secondary warning'
          }
        },
        {
          'type': 'popup-danger',
          'classes':{
            'confirm': 'button  button--primary danger',
            'cancel': 'button  button--secondary danger'
          }
        }
      ];
      popupTypes.forEach(function(item){
        document.getElementById(item.type).addEventListener('click', function(){
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
      })

      
  },
};
/* eslint-enable */