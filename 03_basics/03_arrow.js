// THIS and arrow function

const user = {
    username: "mansha",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this); // current context (current variable ko btata hai)
        
    }
}

// this: refer current context

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);  // ye ek empty object ko refer kr rha hai kyuki global ke andar koi context hi ni hai


// function one(){
//     let username = "mansha"
//     console.log((this.username));  //o/p: undefined
    
// }

// one()

const two = function(){
    let username = "mansha"
    // console.log(this.username);
    
}

two()


// arrow function

// const three = () => {
//     let username = "mansha"
//     console.log(this.username);
    
// }

// three()


// arrow function basic syntax

// () => {}

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// implicit return (don't write return statement kyuki ek line k statement hai)

// const addTwo=(num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

// agr () isse wrap kiya toh return statement ni likhna pdega or agr {} isse kiya toh return likhna pdega

// parenthesis mai wrap krna jruri hai agr ni kiya toh value undefined ayegi (example neeche)

const addTwo = (num1,num2) => ({username: "mansha"})

console.log(addTwo(3,4));

