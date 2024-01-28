const accountId = 14453
let accountEmail ="abhi181745@gmail.com"
var accountPassword ="12345"
accountCity = "Thane"
let accountState;
// accountId = 2 //not allowed
accountEmail = "abhi@lm.com"
accountPassword = "212131"
accountCity = "Mumbai"


/*

prefer not to use var
because of issue in block scope and functional scope

*/

console.log(accountId);
console.table([accountEmail, accountId, accountPassword, accountCity,accountState])
