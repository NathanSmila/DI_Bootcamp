let divElement = document.body.firstElementChild;
let divElementSecond = document.body.children[0];

let ulElement = divElement.nextElementSibling;
let ulElementSecond = document.body.children[1];

let liElement = ulElement.lastElementChild;
let liElementSecond = ulElement.children[1];

console.log(divElement, divElementSecond);
console.log(ulElement, ulElementSecond);
console.log(liElement, liElementSecond);