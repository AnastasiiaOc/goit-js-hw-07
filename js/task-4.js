'use strict'

const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const registerForm = event.target;

  const mail = registerForm.elements.email.value.trim();
  const pass = registerForm.elements.password.value.trim();
  const form = {
    email: mail,
    password: pass,
  }
  if (mail === "" || pass === "") {
    return alert("All form fields must be filled in");
  }
  else {
    // console.log((`Email: ${this.email.value} Password: ${this.password.value}`) )
    console.log(form)
  }
 registerForm.reset();
}



