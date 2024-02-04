function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');
const inputAmount = document.querySelector('#controls input');
const divElement = document.querySelector('#boxes');

createBtn.addEventListener("click", Btn);
destroyBtn.addEventListener("click", destroyBoxes);

function Btn(event) {

  if (inputAmount.value > 0 && inputAmount.value <= 100) {
    return (createBoxes(inputAmount.value));
  }
  return (destroyBoxes())
  }

function createBoxes(amount) {
  let size = 30;

  for (let index = 0; index < amount; index++){
    const color = getRandomHexColor;

    divElement.insertAdjacentHTML("beforeend", `<div> class = "square", style = "display: block;width:${size}px; height:${size}px; background-color:${color}; </div>`);
      size += 10;    
  } 
   inputAmount.value = "";
} 

function destroyBoxes(event) {
  divElement.innerHTML = "";
  
}







//let createDiv = document.createElement('div');
// Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
// Після кліку на кнопку Create в div#boxes додається така кількість різнокольорових квадратів, яка вказана в input. Значення input очищається
// Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові у кількості, що вказана в input. Значення input очищається
// Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
// Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
// Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися






// box.addEventListener("click", createBox);
// function createBox(event) {
//   console.log(event.currentTarget);
// }

// LLLLinput

// const userName = document.querySelector('.js-input');

// userName.addEventListener('change', onInput);
// //userName.addEventListener('input', onInput)

// function onInput(evt){
//     console.dir(evt.currentTarget.value);
// }

// LLLLLLLLL

   

          
      // const button = document.querySelector(".js-click");
// const container = document.querySelector(".js-container");
// container.addEventListener("click", onClick);

// let step = 0;

// function onClick(evt) {
//   step += 5;
//   container.style.marginLeft = `${step}px`;
//   container.style.marginTop = `${step}px`;
// //   console.log(evt.currentTarget);
// }










// let amount = 0;

// function createBoxes(amount) {
//   while (amount > 0 && amount < 100) {
    //   step += 10;
//   container.style.marginLeft = `${step}px`;
//   container.style.marginTop = `${step}px`;
// //   console.log(evt.currentTarget);
//   }
// }

// console.log(createBtn); //save
// console.log(destroyBtn); //close
// console.log(inputAmount); //close

// createBtn.addEventListener("create", buttonCreate);

// function buttonCreate(event) {
//   console.log(event.currentTarget);
// }


 

  //  <div id="controls">
  //       <input type="number" min="1" max="100" step="1" />
  //       <button type="button" data-create>Create</button>
  //       <button type="button" data-destroy>Destroy</button>
  //   </div>


// Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно.Тільки якщо воно задоволяє умову, мають додаватися нові < div > елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.



// Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.



// Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
// Після кліку на кнопку Create в div#boxes додається така кількість різнокольорових квадратів, яка вказана в input. Значення input очищається
// Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові у кількості, що вказана в input. Значення input очищається
// Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
// Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
// Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися
