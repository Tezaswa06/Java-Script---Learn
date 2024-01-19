let score = "33abc" // this is not a pure no but if we convert it into integer then it will get converted in the integer
let status = null
console.log(typeof score);
console.log(typeof(score)); 
let value = true

let valueinnumber = Number(score) // all the datatypes which we have learned is wrtten like Number/String 
let valueinno = Number(status) 
let valueininteger = Number(value)
console.log(typeof valueinnumber);
console.log(valueinnumber);
console.log(valueinno);
console.log(valueininteger);

// "33" = it gets easily converted into no = 33
// "33abc" = not a no
// true = 1
// false = 0
let isloggedin = "" // means if we convert 1 in boolean then it will return true but if we convert empty string then it will return false 

let booleanisloggedIn = Boolean(isloggedin)
console.log(booleanisloggedIn);

// 1=true , 0=false
//"" = false
// "tezaswa" = true 

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber); // means 33 which was int but after conversion it got converted into string
