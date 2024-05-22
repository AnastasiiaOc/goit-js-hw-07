'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const inputAmount = document.querySelector('#controls input');
const divElement = document.querySelector('#boxes');

createBtn.addEventListener('click', Btn);
destroyBtn.addEventListener('click', destroyBoxes);

function Btn(event) {
  if (inputAmount.value > 0 && inputAmount.value <= 100) {
    createBoxes(inputAmount.value);
  }
  else  {
    destroyBoxes();
  }  
}

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
   let boxesMarkup = "";

  for (let index = 0; index < amount; index++) {
    const color = getRandomHexColor();

     boxesMarkup +=`<div class="square" style="display: block; width: ${size}px; height:${size}px; background-color:${color};"></div>`
    ;
    size += 10;
  }
   
   divElement.insertAdjacentHTML(
      'beforeend',
      boxesMarkup
    );
    //  inputAmount.value = ''; 
}

function destroyBoxes(event) {
  divElement.innerHTML = '';
  inputAmount.value = ''; 
}











// Щоб це виправити, ви можете створити фрагмент документа та додати до нього всі елементи div перед тим, як вставити весь фрагмент до divElement за одну операцію.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// const controls =
//   document.getElementById('controls');
// const input =
//   controls.querySelector('input');
// const createBtn =
//   controls.querySelector('button[data-create]');

// const destroyBtn =
//   controls.querySelector('button[data-destroy]');

// const boxesContainer =
//   document.getElementById('boxes');

// createBtn.addEventListener('click', () => {
//   const amount = parseInt(input.value);

//   if (amount >= 1 &&  amount<= 100) {

//     createBoxes(amount);
//     input.value = '';
//   } else {
//     alert('Please enter a number between 1 amd 100.');
//   }
// });

// destroyBtn.addEventListener('click', destroyBoxes);

// function createBoxes(amount) {
//   destroyBoxes();

//   const fragment =
//     document.createDocumentFragment();
//   let size = 30;

//   for (let i = 0; i < amount; i++) {

//     const div =
//       document.createElement('div');
//     div.style.width = `${size}px`;
//     div.style.height = `${size}px`;
//     div.style.backgroundColor =
//       getRandomHexColor();
//     div.style.margin = '5px';
//     fragment.appendChild(div);
//     size += 10;
//   }
//   boxesContainer.appendChild(fragment);
// }
// function destroyBoxes() {
//   boxesContainer.innerHTML = '';
// }

// ++++++++++++++++++++++ someone's example+++++++++++++++++++++++++++++++++



// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, '0')}`;
// }

// const numberInput = document.querySelector("input[type='number']");
// const createBtn = document.querySelector('[data-create]');
// const destroyBtn = document.querySelector('[data-destroy]');
// const boxesEl = document.querySelector("#boxes");
// boxesEl.style.display = 'flex';
// boxesEl.style.flexWrap = 'wrap';
// boxesEl.style.alignItems = 'center';
// boxesEl.style.marginTop = '30px';
// createBtn.addEventListener("click", () => {
//   const amount = parseInt(numberInput.value);
//   if (amount >= 1 && amount <= 100) {
//     createBoxes(amount);
//     numberInput.value = '';
//   } else {
//     alert('Please enter a number between 1 and 100');
//   }
// });

// destroyBtn.addEventListener("click", destroyBoxes);

// function createBoxes(amount) {
//   let boxesMarkup = "";
//   let boxSize = 30;

//   for (let i = 1; i <= amount; i++) {
//     boxesMarkup += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()};"></div>`;
//     boxSize += 10;
//   }

//   boxesEl.innerHTML = boxesMarkup;
// }

// function destroyBoxes() {
//   numberInput.value = "";
//   boxesEl.innerHTML = "";
// }