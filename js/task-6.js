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

  for (let index = 0; index < amount; index++) {
    const color = getRandomHexColor();
    divElement.insertAdjacentHTML(
      'beforeend',
      `<div class="square" style="display: block; width: ${size}px; height:${size}px; background-color:${color};"></div>`
    );
    size += 10;
  }
  inputAmount.value = ''; 
}

function destroyBoxes(event) {
  divElement.innerHTML = '';
  inputAmount.value = ''; 
}

