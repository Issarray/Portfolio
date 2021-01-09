
    
    
    type="text/javascript"
      emailjs.init('user_miTNook2U1o3o6KzuaWNr')
    
      const btn = document.getElementById('contactSubmitButton');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_gwa9fro';

   emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
     btn.value = 'Send Email';
     Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your message has ben delivered.',
        showConfirmButton: false,
        timer: 2000
     });
   }, (err) => {
     btn.value = 'Send Email';
     Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        showConfirmButton: false,
        timer: 2000
      });
   });
});
    