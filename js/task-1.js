const item = document.querySelectorAll(".item");
console.log(`Number of categories : ${item.length}`);

item.forEach((list) => {
    console.log(`Category: ${list.firstElementChild.textContent}`);
    console.log(list.lastElementChild.childElementCount)
})

console.log(_.sum([4, 2, 8, 6]));





















