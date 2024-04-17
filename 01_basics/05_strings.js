const name = "manish"
const repoCount = 30

// console.log(name + repoCount + " value"); // NOT ACCEPTABLE
// console.log(`Hello mmy name is ${name} and my repocount is ${repoCount}`); // ACCEPTABLE


/****************** String Functions or Methods (prototype) *********************/
// length: .length
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iter

const gameName = new String("ladii-hc-sharma")

// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length); // to find length of string
// console.log(gameName.toUpperCase()); // change to uppercase
// console.log(gameName.charAt(4)); // to find char at 4 no.
// console.log(gameName.indexOf('d')); // to ]find position of char

const newString = gameName.substring(0,4) // to slice the string from start of string
//console.log(newString);
const anotherString = gameName.slice(-10,4) // to slice from end of string
//console.log(anotherString);

const newStringOne = "   Manish  "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // .trim remove space

const url = "https://manish.com/manish%20sharma"

console.log(url.replace('%20','-'));
console.log(url.includes('manish'));
console.log(url.includes('ladii'));

console.log(gameName.split('-')); // to split string on the basics of separator
