// For each of the questions, find 2 WAYS to access :
// 1. The div node

let item = document.getElementById("container");
let itemSecond = document.getElementsByTagName("div")[0];
let itemThird = document.querySelector("#container");

console.log(item, itemSecond, itemThird);

// 2. The ul nodes

let elementClass = document.getElementsByClassName("list");
let elementClassSecond = document.getElementsByTagName("ul");
let elementClassThird = document.querySelectorAll(".list")

console.log(elementClass, elementClassSecond);

// and render all of it's children one by one

for (let ul of elementClassSecond) {
    console.log(ul.children[0].textContent, ul.children[1].textContent)
}


// 3. The first li of each ul

for (let ul of elementClassSecond) {
    console.log(ul.children[0].textContent)
}



