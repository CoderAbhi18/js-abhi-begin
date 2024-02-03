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
console.log(loginUserMessage("Abhijit"))
