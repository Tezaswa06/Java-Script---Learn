// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com" ,
    fullname: {
        userFullname: {
            firstname : "Tezaswa" ,
            lastname :"Awasthi"
        }
    }
}
// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj4 = {5: "a" , 6: "b"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({} ,obj1, obj2 ,obj4) // all the values will be conbined

const obj3 = {...obj1,...obj2} // this is the most easiest way to merge the object
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "t@gmail.com"
    },
    {

    },{

    }
]
users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // output value which we get here is array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); 

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    cousename: "JS",
    price: "999",
    courseInstructor: "Hitesh"
}
// course.courseInstructor

const{courseInstructor : instructor} = course
// console.log(courseInstructor);

console.log(instructor);

