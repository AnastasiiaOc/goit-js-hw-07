'use strict'

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", greeting);

function greeting(event) {
    if (event.currentTarget.value.trim() !== "") {
        output.textContent = `${event.currentTarget.value}`;
    }
    else {
        output.textContent = "Anonymous";
    }
}



// or this ( ++++++++++++++++++++++++++++++++++++++++++++++++++++)

// function greeting() {
//     if (input.value.trim() !== "") {
//         output.textContent = `${input.value}`;
//     }
//     else {
//         output.textContent = "Anonymous";
//     }
// }
  
    

//=======================================================================

// function greeting(event) {
//     let trimmedValue = event.currentTarget.value.trim();
//     output.textContent = trimmedValue !== "" ? trimmedValue : "Anonymous";
// }