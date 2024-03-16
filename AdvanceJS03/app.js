// Map, reduce, and filter are higher-order functions in JavaScript that are commonly used when working with arrays

// 1. map() is used to transform each element of an array.

// const numbers = [2,3,10,20,5,6];

// const newNumbers = numbers.map((num)=> num * 2 );

// console.log(newNumbers)



// function double(){
//     let doubleTheNumber= [];

//     for (let i = 0; i < numbers.length; i++) {
//         // console.log(numbers[i]*2)
//         doubleTheNumber.push(numbers[i]*2)
        
//     }

//     return doubleTheNumber
// }

// console.log(numbers)
// const newArray = double();

// console.log(newArray)

// -----

// const newArray = numbers.map((num,key)=>{
//     return num*2
// });

// const newArray = numbers.map(item => item*3)
// console.log(numbers)
// console.log(newArray)

// let ages = [18, 20, 24, 14, 16, 30, 99, 100, 200, 10]

// Filter method is used to filter out the elements and it will return new array.
// or
// filter() is used to create a new array with elements that pass the test implemented 

// b/w 20 to 30

// const newAges = ages.filter((age)=>  age >= 20 && age <= 30 )

// console.log(ages);
// console.log(newAges);

//  compare map and filter

// const mapAges = ages.map((item)=> item>20);

// const filterAges = ages.filter((item)=> item>20);

// console.log(mapAges)
// console.log(filterAges)


// let ages = [18, 20, 24, 14, 16, 30, 99, 100, 200, 10]

// Mulity each age (element) by 2 and return only these elements which are greater than 30?

// const newAges = ages.map((item)=> item *2);
// const filterAges = newAges.filter(item=> item >= 30)

// console.log(ages)
// console.log(newAges)
// console.log(filterAges)

// chaining

// const finalOutput = ages
// .map(item=> item*2)
// .filter(item=> item>30)

// console.log(finalOutput)

// 3. reduce() is used to reduce the elements of array to a single value
let numbers = [10, 20, 30, 10, 20,30];

// let totalSum  = 0;

// for (let i = 0; i < numbers.length; i++) {
//    totalSum += numbers[i]  
// }

// console.log(totalSum)

// const total = numbers.reduce((acc, curr)=>{
//     return acc + curr
// }, 0)

const total = numbers.reduce((acc, curr)=> acc + curr, 0)

console.log(total)