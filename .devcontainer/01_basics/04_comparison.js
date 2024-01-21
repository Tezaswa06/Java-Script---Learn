// console.log(2>1); // these are some simple comparisons
// console.log(2>=1); 
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

const { log } = require("util");

// console.log("2">1); // automatically js converted it into same datatype but when ever we are comparing the data types must be of same datatype
// console.log("02">1);

// console.log(null > 0); // as == and > and < and <= works differently so output changes according to the operator we choose
// console.log(null == 0);
// console.log(null >=0 ); // here comparison converted null to a no and returned true

// console.log(undefined == 0); // undefined will always give false as an output if compared
// console.log(undefined > 0);
// console.log(undefined < 0);
 //  all the comparison above is avoided as much as possible


// strict check means (===) it not only check value but checks it more strictly

console.log( "2" === 2);