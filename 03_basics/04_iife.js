// Immediately Invoked Function Expressions (IIFE)

// function immediately execute hojae 
// IMP: global scope ke pollution hoti hai bht baar isliye global scope ke variable se pollution htane ke liye iife k use hota hai 

(function one(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // function ko explicitly end krna pdega semicolon lgake ni toh error aayega two IIFE likhne mai


// in therms of arrow function
( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('mansha')
