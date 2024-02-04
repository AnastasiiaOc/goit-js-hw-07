
const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
const form = event.target;

    const email = registerForm.elements.email.value;
const password = registerForm.elements.password.value;
  
if (email === "" || password === "") {
    return ("All form fields must be filled in");
  }
    return (`Email: ${email.trim()} Password: ${password.trim()}`) 
    
 registerForm.reset();
}

