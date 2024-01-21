const name = "Tezaswa"
const repoCount = 50

console.log(name + repoCount + "value"); // don't use this syntax else use backtix as shown below

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // in now  a days we use like this it is known as string interpolation

const gameName = new String('Tezaswa-ta') // this is a key value pair

// console.log(gameName[0]); // prints first index of the string 
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4) // we can give negative values to slice it will not obey when passed in substring
console.log(anotherString);

const newStringone = "  Tezaswa  " // suppose unkwingly we add some spaces in our site and we don't want iot in our database
console.log(newStringone);
console.log(newStringone.trim()); // this will delete our spaces which we have added in the above string

const url = "https://tezaswa.com/tezaswa%20awasthi"

console.log(url.replace('%20','-'));

console.log(url.includes('tezaswa'))

console.log(gameName.split('-')); // splitting the string by defining from where to split the string