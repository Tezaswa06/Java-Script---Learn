const score = 400

const balance = new Number(100)
// console.log(balance);
// console.log(score);
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // specially whenever we are creating ecommerece website so tofixed function is used as it will give ans in decimals 

const otherNumber = 123.8966

 //console.log(otherNumber.toPrecision(4)); 

const hundreds = 1000000

// console.log(hundreds.toLocaleString('en-IN')); // as we have taken input 1000000 but we don't know how to count then we can put comma by using tolocalstring function by default it is been set in US standards


// ++++++++++++++++ Maths +++++++++++

// java script contains predefined maths liabrary 

// console.log(Math); // math contains object and so many properties inside
// console.log(Math.abs(-4));
// console.log(Math.round(4.6)); // it will round off the decimal value
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,3,5,7));
// console.log(Math.max(4,5,2,9));

console.log(Math.random()); // math.random ki value 0 and 1 ke bich me ati hai
console.log((Math.random()*10)+1); // value can be 0 as well that is why we have added plus one into it
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min)
