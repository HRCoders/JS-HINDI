
/*  conversion into number result
   "33" => 33
   "33abc" and "Manish" => NaN  not a number
   true => 1; false => 0
*/

let score= "33abc"

// console.log(typeof score);
//    // OR we write also as below , both are same
// console.log(typeof(score));

let valueInNumber= Number(score);
// console.log(typeof valueInNumber);
// console.log(valueInNumber);


/* conversion into boolean  result
    1 => true ; 0 => false
    "" => false
    "Manish" => true
*/

let isLoggedIn = 1
let booleanIsLoggedIn= Boolean( isLoggedIn );
// console.log(typeof booleanIsLoggedIn);
// console.log(booleanIsLoggedIn);
  
  
/* conversion into string result
    33 => "33" => string
     
*/
let someNumber = 33
let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);


//****************Operations***************

let value = 3
let negValue = -value
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  //  for power 2 raise to power 3
// console.log(2/2);
// console.log(2%3);   // for reminder

let str1 = "Hello"
let str2 = " Manish"
let str3 = str1 + str2
//console.log(str3);

//console.log("1"+ 2);
//console.log(1+"2");
//console.log("1"+2+2);
//console.log(1+2+"2");

//console.log(3+4*5%3); // wrong way to writecode
//console.log((3+4)*5%3); // best way to write code , use paranthisis


/*      ****Prefix and Postfix****
 link to study
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
*/

let gameCounter = 100
++gameCounter
console.log(gameCounter);

let runCounter = 100
runCounter++
console.log(runCounter);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"








