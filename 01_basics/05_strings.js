const name = "Mansha"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);  // use this way

const gameName = new String('hello-world')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   mansha    "
console.log(newStringOne);
console.log(newStringOne.trim());  // trim remove unneccesary space

//nTo return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

const url = "https://cloudy.com/blue%20ig"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

