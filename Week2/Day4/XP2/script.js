// -----Exercise 1 : Information

// function infoAboutMe() {
//     console.log("Hey ! My name is Natan, 30 years old,  I love programing and learning new stuff");
// }
// infoAboutMe();

// function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies ) {
//     console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor} `);
//     personHobbies.forEach(i => {
//         console.log(`your hobbies are ${i}`);
//     });
// }

// infoAboutPerson("David", 45, "blue", ["tennis", "painting"]);
// infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"]);

// ------Exercise 2 : Keyless Car

// let user = Number(prompt("What's your age?"));

// function checkDriverAge(age) {
//     if (age < 18) {
//         alert("Sorry, you are too young to drive this car. Powering off");
//     }
//     else if (age > 18) {
//         alert("You are old enough to drive, Powering On. Enjoy the ride!");
//     } 
//     else if (age === 18) {
//         alert("Congratulations on your first year of driving. Enjoy the ride!");
//     }
// }
// checkDriverAge(18)

// --------Exercise 3: Odd Or Even

// function checkNumber() {
//     for (let i = 0; i < 101; i++) {
//        if (i%2 == 0) {
//            console.log(`the number ${i} is even`);
//        } else {
//         console.log(`the number ${i} is odd`);
//        }
        
//     }
// }
// checkNumber()

// --------Exercise 4 : Tips

// let user = Number(prompt("how much to tip to restaurants"))

// if (user < 50) {
//     alert(`Final bill ${user + (user*0.2)}$
// Tip amount ${user*0.2}$`)
// } 
// else if (user >= 50 && user < 200) {
//     alert(`Final bill ${user + (user*0.15)}$
// Tip amount ${user*0.15}$`)
// } 
// else if (user >= 200) {
//     alert(`Final bill ${user + (user*0.1)}$
// Tip amount ${user*0.1}`)
// }

// -------Exercise 7 : Shopping List

let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"];
let total = 0;

function myBill() {
    for (fruits of shoppingList) {
        if ( stock[fruits] > 0) { 
            total = total + prices[fruits];
    }
}
console.log("The bill of my shopping list is", total);
}
myBill();