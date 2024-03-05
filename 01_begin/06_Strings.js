const name = "Abhi"
const repoCount = 50

// console.log(name +  repoCount + " Value");

console.log(`Hello my Name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('Abhijit-SS')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "  Abhijit  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhi.com/abhi%20salunkhe"

console.log(url.includes('abhi'))

console.log(gameName.split('-'));

console.log("hello");