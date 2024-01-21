// # Primitive Datatypes // all the primitive datatypes are call by value

// 7 types : String ,Number ,Boolean ,null ,undefined ,Symbol ,BigInt
// symbol is used to make a value unique

const score = 100
const scoreValue = 100.3 // decimal doesnot exist in java script 100.3 isalso treated as integer value

const isloggedin = false
const outsideTemp = null
let userEmail; // here as we have not specified the email so by default itis undedfined but we can manually set the value to undefined as well

const id = Symbol('123')
const anotherid = Symbol('123')

// console.log( id === anotherid); // will return false as noth the ids are different

const bigNumber = 345123456789012345n // the small n represents BigInt 

// # Non Primitive  Reference type

// Array ,Objects ,Functions

const heros = ["shaktiman","naagaraj" ,"bheem"]
let myObj = {
    name : "Tezaswa",
    age :24,
}

const myFunction = function(){
    console.log("Hello World");
}

// below is the method to determine the datatype
// console.log(typeof myFunction);



  //************Memory ********** */

  // There are two types of memory in the program
  // -> Stack - All the primitives data types are stored in it
  // -> Heap - All the non primitive data types are stored in Heap

  let myyoutubename = "TezaswaAwasthi.com"

  let anothername = myyoutubename // here copy is been created here it is not passed by reference
  anothername = "chaiaurcode"

  console.log(myyoutubename);
  console.log(anothername);

  let userone = {  // this userone which we have created will go in the heap memory
    email: "user@gmail.com" ,
    upi: "user@ybl" 
  }
  let userTwo = userone // here usertwo is created and it has called userone by reference

  console.log(userone.email);
  console.log(userTwo.email);

  // in stack whatever we are defining we are creating copy of it 
  // but in heap we are changing actual value as the data is paased by reference
  