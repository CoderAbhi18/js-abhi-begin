function sayMyname(){
    console.log("H");
    console.log("e");
    console.log("f");
    console.log("t");
    console.log("s");
    console.log("v");
}

// sayMyname()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result  = number1 + number2
    // return res
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("result: ", result);

function loginUserMessage(username = "Abhi"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Abhijit"))
// console.log(loginUserMessage("Abhijit"))

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000, 400))

const user = {
    username: "abhijit",
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "Sam",
    price: 399
})

const myNewArray = [200, 3000, 100, 900]

function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
console.log(returnSecondvalue(myNewArray));