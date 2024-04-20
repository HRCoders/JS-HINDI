// Dates (date is an object in js)

const myDate = new Date() // Show current date
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,24)
// let myCreatedDate = new Date(2023,0,24,5,4)
// let myCreatedDate = new Date("2024-01-20")
let myCreatedDate = new Date("01-20-2024")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date() // show current date
console.log(newDate);
console.log(newDate.getMonth() + 1); // in js month start from 0 to get real value we add 1
console.log(newDate.getDay());
console.log(newDate.getDate());

let secondDate = newDate.toLocaleString('default' , {
    weekday : "long"
})
console.log(secondDate.toLocaleString());