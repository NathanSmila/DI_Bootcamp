// for (let n=0; n<11; n++) {
//     console.log(n)
// }


function infoAboutMe() {
    console.log("my name is Natan, i'm 30 years old")
}
infoAboutMe();

function infoAboutPerson(personName, personAge, personFavoriteColor, personHobbies=0) {
    console.log("You name is "+ personName +", you are "+ personAge+" years old, your favorite color is "+personFavoriteColor+"")
    if (personHobbies != 0) {
        console.log(personHobbies)
        /*for (let i = 0; i < personHobbies.length; i++) {
            console.log(personHobbies[i])           
        }
        personHobbies.forEach(element => {
            console.log(element)
        });*/
        for (const iterator of personHobbies) {
            console.log(iterator)
        }
    }
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")
infoAboutPerson("David", 45, "blue", ["tennis", "painting"])
infoAboutPerson("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])


let user = prompt("What's your age ?")
function checkDriverAge() {
    if (user < 18) {
        alert("Sorry, you are too young to drive this car. Powering off")
    }
 else if (user >= 18) {
     alert("You are old enough to drive, Powering On. Enjoy the ride!")
 }
 else if (user === 18) {
     alert("Congratulations on your first year of driving. Enjoy the ride!")
 }
 else 
    
}


// They must be at least 18 to drive.
// if the user is too young, alert “Sorry, you are too young to drive this car. Powering off”
// if the user is old enough, alert “You are old enough to drive, Powering On. Enjoy the ride!”
// if the user just turned 18, alert “Congratulations on your first year of driving. Enjoy the ride!”