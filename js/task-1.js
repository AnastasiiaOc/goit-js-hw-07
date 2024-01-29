
const item = document.querySelectorAll(".item");
console.log(`Number of categories : ${item.length}`);
//console.log(item)

// :const items = document.querySelector(".item");
// console.log(items.children);
//console.log(items.firstElementChild.textContent)
//console.log(items.nextElementSibling.textContent)
// const listDynamics = document.getElementsByTagName('h2')
// console.log(listDynamics)
// //console.log(listDynamics.innerHTML)
//console.log(`Category: ${item.firstElementChild}`)
//console.log([...items.children])

item.forEach((list) => {
    console.log(`Category: ${list.firstElementChild.textContent}`);
  
    // console.log(list.lastElementChild.textContent.split(',').length);
});




// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).



// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

//Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка елемента (тегу <h2>) і кількість елементів у категорії (усіх <li>, вкладених у нього).


//Дані за кожною категорією були отримані й виведені в консоль у тілі циклу або методу forEach()




