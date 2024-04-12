
/*  conversion into number result
   "33" => 33
   "33abc" and "Manish" => NaN  not a number
   true => 1; false => 0
*/

let score= "33abc"

console.log(typeof score);
   // OR we write also as below , both are same
console.log(typeof(score));

let valueInNumber= Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


/* conversion into boolean  result
    1 => true ; 0 => false
    "" => false
    "Manish" => true
*/

let isLoggedIn = 1
let booleanIsLoggedIn= Boolean( isLoggedIn );
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);
  
  
/* conversion into string result
    33 => "33" => string
     
*/
let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);