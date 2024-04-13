/*  Comparison of same Datatypes */

// console.log(2>1);
// console.log(2>=1);;
// console.log(2!=1);
// console.log(2<1);
// console.log(2==1)


/*  Comparison of Different Datatypes */

//  console.log("2" > 1); // true
//  console.log("02" > 1); // true

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true   

/* Reasone is the equality check(==) and comparison(<,>,>=,<=) work differently .
   comparison convert null to number , treating as 0 .
   thats why null >= 0 is true
    
   WE AVOID USE OF ABOVE & BELOW THREE COMPARISON
*/   

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false
  
// Strict comparision (===) , no conversion done in this comparison
 
console.log("2" === 2); // false










