var contact = {};

var form = document.getElementById("contact-form");

function handleForm(event) {
  event.preventDefault();
}

    form.addEventListener('submit', handleForm);


document.addEventListener("DOMContentLoaded", function () {
  contact.Fname = document.getElementById('fname');
  contact.Lname = document.getElementById('lname');
  contact.Email = document.getElementById('email');
  contact.Pronouns = document.getElementById('pronouns');
  contact.Message = document.getElementById('message');
});

function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined') return false;
  return (value.length > 0);
}

function isEmail(email) {
  let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return regex.test(String(email).toLowerCase());
}

function fieldValidation(contact, validationFunction) {
  if (contact == null) return false;

  let isContactValid = validationFunction(contact.value)
  if (!isContactValid) {
    contact.className = 'placeholderRed';
  } else {
    contact.className = '';
  }

  return isContactValid;
}

function isValid() {
  var valid = true;

  valid &= fieldValidation(contact.Fname, isNotEmpty);
  valid &= fieldValidation(contact.Lname, isNotEmpty);
  valid &= fieldValidation(contact.Pronouns, isNotEmpty);
  valid &= fieldValidation(contact.Email, isEmail);
  valid &= fieldValidation(contact.Message, isNotEmpty);

  return valid;
}

function sendContact() {
  if (isValid()) {
    console.log('yes')
    let message = new Message(Fname.value, Lname.value, Pronouns.value, Email.value, Message.value);
    Swal.fire({
      title: '🌈😄🌈',
      text: `${message.Fname} thanks for the message, I'll try and get back soon `,
    });
  } else {
    console.log('no')
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    });
  }
}