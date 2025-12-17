// Dates  (dates are object)

let myDate = new Date()
console.log(myDate.toString());

console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let Date1 = new Date(2023,0,23) //Month start from 0 in js
console.log(Date1.toDateString());

let Date2 = new Date(2023,0,23,5,3)
let Date3 = new Date("2023-01-14") // YY-MM-DD

let Date4 = new Date("01-14-2023")
console.log(Date4.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Date4.getTime());  

console.log(Math.floor(Date.now()/1000));   // conversion in millisecond

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMilliseconds());
console.log(newDate.getMinutes);
console.log(newDate.getMonth()+1);

// `${newDate.getDay()} and the time ${newDate.getHours}`

newDate.toLocaleString('default' , {
    weekday: "long",
})


