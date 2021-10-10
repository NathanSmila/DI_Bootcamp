let addressNumber = 4;
let addressStreet = "Yaakov Dori";
let country = "Israël";
console.log(addressNumber, addressStreet, country);

let global_adress = `I live in ${addressStreet} ${addressNumber} in ${country}`;
console.log(global_adress);
alert (global_adress);


let pets = ['cat','dog','fish','rabbit','cow'];
console.log (pets [1]);
pets.push("horse");
console.log(pets);
console.log(pets.length);

//Exercise: ask the user for a nex pet and add it

//1st step : prompt the user
let userPet = prompt("give me a new pet");

//2nd step : push the value of the variable
pets.push(userPet);

// 3rd display
console.log("the last pet is :", pets[pets.length-1]);
