var contact = {};

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
  return regex.text(String(email).toLowerCase());
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
   if (isValid()){
     let message = new Message(Fname.value, Lname.value, Pronouns.value, Email.value, Message.value);

     alert(`🌈${message.Fname} thanks for the message, I'll try and get back soon 😄🌈`)
   }
 }