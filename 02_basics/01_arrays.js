// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["hanuman" , "ram"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);


// Array Methods

// myArr.push(6) // to add value in string
// myArr.push(7)
// myArr.pop() // remove last value from array

myArr.unshift(9)  // it add value at the stating of string
myArr.shift()  // it remove first value from string

// console.log(myArr.includes(9));  // to know vaue is in string or not ad result is boolean (true / false)
// console.log(myArr.indexOf(3));  //  to find position of array element if value is not in string than result is -1

const newArr = myArr.join() // .join adds array in to string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // result is string


//  slice , splice

console.log("A  " , myArr);

const myn1 = myArr.slice(1 , 3) // slice does not change the original array 

console.log(myn1);
console.log("B  " , myArr);

const myn2 = myArr.splice(1 , 3)  // splice changes the original rray it remove the give splice value
console.log("C  " , myArr);
console.log(myn2);





