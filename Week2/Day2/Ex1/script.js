let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object
// userCart.lastname = "Smith";
userCart["lastName"] = "Smith";


// 2. Change the price of the pear, so it will contain the Taxes. 17%
// let total = 2;
// total = total + 5;
// total += 5;
// userCart["prices"]["pear"] = userCart["prices"]["pear"]*1.17
// SHORTCUT
userCart["prices"]["pear"] *= 1.17
console.log(userCart)

// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. 
// Make sure that your code accept all type of strings, 
// for example "Banana" or "banana" or "BaNaNA"
let userFruit = prompt("What do you want?").toLowerCase()
console.log("the fruit of the user is : ", userFruit)

// userFruit = "apple"
// userFruit = "pear"
// userFruit = "banana"

// 4. Console.log the price for the specific fruit the user wants
// console.log(userCart["prices"]["apple"])
// console.log(userCart["prices"]["banana"])
// console.log(userCart["prices"]["pear"])

console.log(`USING BRACKET NOTATION - 
	The price of the ${userFruit} is ${userCart["prices"][userFruit]}`)

// DOESN'T WORK
console.log(`USING DOT NOTATION - 
	The price of the ${userFruit} is ${userCart["prices"].userFruit}`)
