// ES-7 2016

// const colors = ['blue', 'red', 'orange'];

// console.log(colors.includes('red')); //true ya false

// ** Operator (Exponential)
// console.log(5**2);

// ES-8 (2017)

// Padding in string 
// padStart
// let fname = 'Owais'.padStart(7);
// let fname = 'Owais';
// console.log(fname);

// const a1 = 5;

// console.log('5'.padStart(4, '0'));

// const fullNumber = '534687835131231';
// const last4Digits = fullNumber.slice(-4);
// console.log(last4Digits); 
// const astericMasked = last4Digits.padStart(fullNumber.length, '*');

// console.log(astericMasked);

// Object   .values  .entires    {Obj to Array}
// const user = {name: "Alex", age:25};

// console.log(Object.values(user));// Alex, 25
// console.log(Object.values(user)[1]);//Alex

// console.log(Object.entries(user));
// console.log(Object.entries(user)[1]);

// ES-9 (2018)
// Spread Operator in Objects

// ES-10 (2019)

// Flat array 

// const arr = [
//     [1,2],
//     [3,4],
//     [5, 6, [7, 8]]
// ]

// console.log(arr.flat());
// console.log(arr.flat(2));


// const arr1 = [
//     [11,12],
//     [13,14],
//     [15, [16, [17, 18]]  ]
// ];


// console.log(arr1.flat()) //11 to 15
// console.log(arr1.flat(2)) //11 to 16
// console.log(arr1.flat(3)) //11 to 18
// console.log(arr1.flat(Infinity)) //number dene ki need nhi hai


// const user = {name: "Alex", age:25};
// // {Obj to Arr}
// const x = Object.entries(user);
// console.log(x);
// // {Arr to Obj}
// console.log(Object.fromEntries(x));


// ES-11 (2020)

// BigINT
// let noRange = Number.MAX_SAFE_INTEGER;
// console.log(noRange);

// console.log(9007199254740991n + 4n); //95
// BigInt Feature so we use (n)
// const bigNum = 7878735735763876737373n;
// console.log(typeof(bigNum))
// console.log(bigNum + 10n);

// ES-Next (2020 - Latest)

// Promise.allSettled
// const P1 = new Promise ((resolve, reject) => setTimeout(resolve, 500));
// const P2 = new Promise ((resolve, reject) => setTimeout(reject, 500));

// Promise.allSettled([P1, P2]).then(data => console.log(data));
// // console.log(P1);
// // console.log(P2);

// Use strict

// x = 2.55;
// console.log(x);
// "use strict";
// function add(a, b, c){
//     console.log(a + b + c)
// }

// add(77, 55, 22)


























