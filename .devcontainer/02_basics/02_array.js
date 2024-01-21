const marvel_heros = ["Thor" , "Ironman" , "Spiderman"]
const dc_heros = ["Superman" , "Flash" , "Batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_Heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_Heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(real_another_array);

console.log(Array.isArray("Tezaswa"));
console.log(Array.from("Tezaswa")); // it will convert anything which we give in ipput into array

console.log(Array.from({name:"Tezaswa"})); // interesting case as if it does not know for which value we want to create an array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


