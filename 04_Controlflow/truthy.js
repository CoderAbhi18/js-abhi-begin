const userEmail = []

if(userEmail){
    console.log("Got user email");
} else{
    console.log("Don't have user email");
}

// falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy Values
// "0", "false", " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("array is empty");
// }

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Opertaor(??): Null Undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

// Terminary Operator
// Condition ? True : false

const IceTeaPrice = 100
IceTeaPrice <= 80 ? console.log("less than 80"): console.log("More than 80"); 