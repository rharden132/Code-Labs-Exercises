let firstName = "John";
let AGE = 22;
let favoriteIceCream = "Vanilla";

let person = {
    name: firstName,
    age: AGE,
    iceCream: favoriteIceCream
}

function printPersonAndKids(p){
    return function(kid){
        console.log(`${p.name} is ${p.age} and likes eating ${p.iceCream} ice cream with his son ${kid}!`)
    }
}
printPersonAndKids(person)("Riley");

let parent = printPersonAndKids(person);
parent("Cam");