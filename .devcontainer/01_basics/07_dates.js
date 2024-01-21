// Dates

let myDate = new Date()
// console.log(myDate.toString()); // convert date into string
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // date is an object

// let myCreatedDate = new Date(2023,0,23) // in java script month will start from 0
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now() // this will till 1970 till now in millsec

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); 

// console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    
})





