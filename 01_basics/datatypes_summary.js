/* Primitive Datatypes
  7 types - String , Number , Boolean , null , undefined , Symbol , Bigint
*/
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null // typeof object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


/* Reference (Non Primitive) Datatypes
   Array , Objects , Functions
*/

 // Arrays written in square bracket , object are written curlybraces
const heros = ["shaktiman" , "naagraj" , "doga"]
let myObj = {
    name: "Manish",
    age: 23,
}

const myFunction = function(){
   console.log("Hello World");
}