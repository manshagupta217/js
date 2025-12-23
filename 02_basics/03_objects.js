// singleton : iterator se kbhi singleton ni bnta or constructor se bnta hai -> Create.object()

// object literals


const mySym = Symbol("key1")

const JsUser = { // here name age location etc are defined as strings only
    name: "Mansha",
    "full name":"Mansha Gupta",
    mySym:"mykey1", //ye symbol ki tarah use ni ho raha hai, output still same hoga
    [mySym]:"mykey1", //correct way to use as a symbol 
    age: 20,
    location: "bhopal",
    email: "mansha@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Thursday"]
}

console.log(JsUser.email); //usually this way is use
console.log(JsUser["email"]); // more correct way
console.log(JsUser["full name"]);
console.log(JsUser.mySym);
console.log(JsUser[mySym]); // symbol o aisehi access krenge

JsUser.email="cloudyblue@abc.com"
// Object.freeze(JsUser) //isko use krna ke baad koi bhi changes propagate(change) ni honge
JsUser.email="blue@abc.com"
console.log(JsUser);


//function

JsUser.greetings=function(){
    console.log("Hello JS User");
    
}
JsUser.greetingsTwo=function(){
    console.log(`Hello JS User, ${this.name}`);
    
}

console.log(JsUser.greetings); //O/P: [Function (anonymous)]

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());









