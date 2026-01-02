// var c= 300

let a= 300

if(true){
    let a = 10
    const b = 20 //b is readable ONLY inside the if block, just like a.
    // var c = 30 // avoid declaring var

    // console.log("INNER: ",a);
    // console.log(b);
    

}

// console.log(a);
// console.log(b);
// console.log(c);

// inspect krke core scope is different and in coding environment global scope is different


// nested scope

function one(){
    const username= " mansha "

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);  //o/p: website is not defined

    // two() //o/p: mansha
    
}

// one() //o/p: nothing will print

// same concept with if and else

if (true) {
    const username = "mansha"
    if(username === "mansha"){
        const website = " youtube "
        console.log(username + website);
        
    }
}