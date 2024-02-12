var c = 300
let a = 300
if (true){
    let a = 10
    const b = 20
    // console.log("INNER: ", a)
}

// console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "Abhijit"

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "Salunkhe"
    if (username === "Salunkhe") {
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++++++ INTRESTING +++++++++++++++++++++++++ //

console.log(addOne(5))
function addOne(num){
    return num + 1
}
const addtwo = function(num){
    return num + 2
}

addtwo(5)
addtwo(5)
addtwo(5)