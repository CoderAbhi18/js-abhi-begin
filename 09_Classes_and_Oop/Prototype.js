// let myName = "abhijit     "
// let mychannel = "abhi     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abhijit = function(){
    console.log(`abhijit is present in all objects`);
}

Array.prototype.heyAbhijit = function(){
    console.log(`Abhijit says hello`);
}

// heroPower.abhijit()
// myHeros.abhijit()
// myHeros.heyAbhijit()
// heroPower.heyAbhijit()

// inheritance

const User = {
    name: "abhi",
    email: "abhi@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "AbhiAurCode"

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Abhijit".trueLength()
"iceTea".trueLength()