// array

// Javascript arrays are resizable

// JavaScript array-copy operations create shallow copies.
// A shallow copy of an object is a copy whose properties share the same references
//A deep copy of an object is a copy whose properties do not share the same references

const myArr = [0 ,1 ,2 ,3 ,4 ,5]
const colors = ['blue', 'yellow', 'white']

const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// Array Methods

myArr.push(6)
myArr.pop()

myArr.unshift(9)  //add element at start of an array
myArr.shift() // remove element from start

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr = myArr.join()

console.log(myArr);
console.log(newArr);  

console.log(typeof newArr);  // join converted array into string


//slice , splice

console.log("A", myArr);

const myn1= myArr.slice(1,3)

console.log(myn1);

console.log("B", myArr);

const myn2= myArr.splice(1,3) // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.  (original array se element ko delete kr deta hai or deleted elements return krta hai)

console.log("B" , myArr);
console.log(myn2);

