// Primitive data Type

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 2254653623n





// Reference Type (Non Primitive)

// Arrays, Objects, Functions, 

const heros = ["Shaktiman", "Naagraj", "Modi"]
let myObj = {
    name: "Abhijit",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);




// +++++++++++++++++++++++++

// Stack (Primitive),Heap (Non-primitive)


let myYoutubeName = "Abhiofficial"


let anothername = "chai aur code"

console.log(anothername);
console.log(myYoutubeName);

let UserOne = {
    email: "abhi@google.com",
    UPI: "user@ybl"
}

let UserTwo = UserOne

UserTwo.email = "dead@google.com"

console.log(UserOne.email);
console.log(UserTwo.email);