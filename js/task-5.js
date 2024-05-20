'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const bodyColor = document.querySelector("body")
const spanColor = document.querySelector(".color")

  button.addEventListener("click", onClick);

function onClick(event) {
  const resultColor = getRandomHexColor()
  bodyColor.style.backgroundColor = resultColor;
  spanColor.textContent = resultColor;
  console.log(event.currentTarget);
}


