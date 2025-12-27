function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("A");
}

// sayMyName()

// function addTwoNumbers(num1,num2){  //num1 and num2 are parameters
//     console.log(num1+num2);
    
// }

// addTwoNumbers(3,"4") // 34 (3 and 4 are arguments)
// addTwoNumbers(3,"a") // 3a
// addTwoNumbers(3,null) // 3

// const result = addTwoNumbers(3,5) // yaha result ki value undefined aayegi kyuki ans result mai strore ni ho rha hai


// console.log("Result: ",result);

function addTwoNumbers(num1,num2){  
    
    // let result = num1+num2
    // return result // ek baar function mai return hone ke baad function koi bhi kam ni krega
    // console.log("hello");  // ye print ni hoga

    return num1+num2
    
}

const result =  addTwoNumbers(3,5) // output will be 8
// console.log("Result: ",result);  //agr function return kr rha hai toh hi hum usse run krane ke liye kisi variable mai store krenge


function loginUserMessage(username){
    if(username == undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Mansha"))

console.log(loginUserMessage());  // agr koi bhi argument ni diya toh undefined print hoga
