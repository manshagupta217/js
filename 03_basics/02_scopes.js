// var c= 300

let a= 300

if(true){
    let a = 10
    const b = 20 //b is readable ONLY inside the if block, just like a.
    // var c = 30 // avoid declaring var

    console.log("INNER: ",a);
    // console.log(b);
    

}

console.log(a);
// console.log(b);
// console.log(c);

// inspect krke core scope is different and in coding environment global scope is different


