// Create an array called colors where the value is a list of your favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

let colors = ["blue", "red", "yellow", "green", "black", "brown"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My choice number ${i}  is ` + colors[i]);
    
};

// Exercise 3 : Repeat The Question
// 1 Prompt the user for a number.
// 2 While the number is smaller than 10 continue asking the user for a new number.

let userPrompt = Number(prompt("Hello ! Choose a number"));

while (userPrompt < 10) {
    userPrompt = prompt("Give me another number")
};

// Exercise 5 : Family
// Create an object called family with a few key value pairs.
// Console.log the keys. (using a for loop).
// Console.log the values. (using a for loop).

let family = {
    father: 'John',
    mother: 'Isa',
    son: 'Bart',
    daughter: 'Monique',
}

for (member in family) {
    console.log(member);
}

for (member in family) {
    console.log(family[member]);
}
