function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const bodyColor = document.querySelector("body")
const spanColor = document.querySelector(".color")

bodyColor.addEventListener("click", onClick);

function onClick(event) {
  bodyColor.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
  console.log(event.currentTarget);
}



