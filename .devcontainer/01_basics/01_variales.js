const accountId = 144553
let accountEmail = "tezaswa.awasthi06@gmail.com"
var accountPassword = "12345"
accountcity = "Bangalore" // we can declare like this without using variable but this is a bad practice

let accountState 

//accountId = 2  // this is not allowed

accountEmail = "adityaawasthi@gmail.com"
accountPassword = "123456"
accountcity = "Patna"

console.log(accountId);

/*
Prefer no to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountcity,accountState])
