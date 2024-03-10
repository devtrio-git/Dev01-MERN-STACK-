// console.log("hello world!");

// const x = 7;

// if(x > 5){
//     console.log("x is greater than 5");
// }else{
//     console.log("x is less than 5");
// }

// ternary operators => short hand for conditonal statments
// syntax: (condition) ? true : false

// const messg = x > 5 ? 'x is greater than 5' : 'x is less than 5';

// console.log(messg);


// const temp = 45;

// const weather = temp > 40 ? 'Hot weather' : 'Moderate weather';
//                 // 25 > 40
// console.log(weather);


// const age = 15;
// console.log(`Your age is ${age}. You are ${age >= 18 ? 'an adult' : 'a minor'}`)

// const userInput = null;

// const res = userInput !== null ? userInput : 'default';

// console.log(res);

// normal functions vs arrow funcs
// regular funcs

// console.log(sayHello('Owais'));


// function sayHello(name){
//     return 'Hello ' + name
// }

// console.log(sayHello('Owais'));

// arrow func

// console.log(sayHello('Luqman'));

// const sayHello = (name) => {
//     return 'Hello ' + name
// }

// console.log(sayHello('Luqman'));


// const sayHello1 = (name) =>  'Hello ' + name;
// const sayHello2 = (name) =>  'Hello ' + name;


// console.log(sayHello1('Asim'));
// console.log(sayHello2('Aneeq'));

// const myName = (name) => (`My name is ${name}`)
//  const myName = (name) => {
//     return `My name is ${name}`
//  }
 
// console.log(myName('Owais Ahmed Khan'))

// const isEven = num => num % 2 === 0 ? 'Even' : 'Odd';

// console.log(isEven(5));


// const number = +prompt("Enter any num");
// '23' + '32'; // 2332 
// console.log(typeof(number));

// short-circuits
// &&
// const isLoggedIn = false;
// isLoggedIn && console.log('User is logged in.')

// const age = 25;
// age >= 18 && console.log("You are an adult");

//  ||

// const defaultVal = 'Default Value';
// const userInput = '';
// const value = userInput || defaultVal

// console.log(value);

// const username = null;
// const displayName = username || 'Guest';
// console.log(displayName); //Guest

// const fetchData = () => {

//     // Async data fetchinggg...
//     console.log('Fetching Data.....');
//     return 'Data fetched successfully'
// }

// const shouldFetchData = true;
// shouldFetchData && fetchData();

// optional chaning ?
// const user = {
//     name: 'Owais',
//     address: {
//         city: 'Karachi'
//     }
// };

// const city = user.address && user.address.city;
// console.log(city);

// user && console.log(user?.address?.city);



// if(user && user.address && user.city){}










































