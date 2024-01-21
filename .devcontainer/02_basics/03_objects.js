// singleton  - whenever we declares object in literals then sigleton is not created

const { symbol } = require("prop-types");

const mySymbol = Symbol("key1")

// Object literals
// object.create // constructor method and this is how singleton is made
const JsUser = { // in objects we can define keys as well as values but if we talk about arrays then we need to give keys in seperate
    name : "Tezaswa", // by default it will tell that it is in strings 
    "full name" : "Tezaswa Awasthi" ,// we dont have a chance to access this using dot like we did using email below
    [mySymbol]: "myKey1" , // we cannot directly use symbol here
    age : 24 ,
    email : "Tezaswa.Awasthi@gmail.com" ,
    isloggedin : false,
    lastLoginDays : ["Monday" ,"Saturday"]

}

// console.log(JsUser.email); // this is not the correct way to access objects
// console.log(JsUser["email"]); // this is the correct way 

// console.log(JsUser["full name"]);
// console.log(JsUser[mySymbol]); 

JsUser.email = "tezaswa@chatgpt.com"
// Object.freeze(JsUser) // it freezes the value to be added again in the objects
JsUser.email = "Tezaswa@microsoft.com"
console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting);

JsUser.greeting2 = function(){
    console.log(`Hello JS User,${this.name}`);
}
console.log(JsUser.greeting);
console.log(JsUser.greeting2());




