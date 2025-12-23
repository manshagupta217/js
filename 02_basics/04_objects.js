// const tinderUser = new Object() // singleton object

const tinderUser={} // non-singleton object

tinderUser.id="123abc"
tinderUser.name="Riya"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

// nested object
const regularuser = {
    email: "some@mail.com",
    fullname:{
        userfullname: {
            firstname: "mansha",
            username: "gupta"
        }
    }
}

// console.log(regularuser.fullname);
// console.log(regularuser.fullname.userfullname.firstname);

//assigning object
const obj1={1:"a", 2: "b"}
const obj2={3: "a", 4:"b"}

// const obj3={obj1,obj2}
// const obj3= Object.assign({},obj1,obj2)
const obj3={...obj1, ...obj2}
// console.log(obj3);


const users=[
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    },
    {
        id: 1,
        email: "m@gmail.com"
    }
]

// users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //saari keys ek array mai aajaegi
// console.log(Object.values(tinderUser)); //saare values ek array mai aajaenge
// console.log(Object.entries(tinderUser)); //har ek key value ko array mai bna diya jaata hai

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//destructuring

const course={
    coursename:"js in hindi",
    price: "999",
    courseInstructor:"hitesh"
}

//course.courseInstructor

const {courseInstructor : instructor} = course
// console.log(courseInstructor);

console.log(instructor);



// json api (js object notation)
// {
//     "name":"hitesh",
//     "coursename":"js in hindi",
//     "price":"free"
// }




