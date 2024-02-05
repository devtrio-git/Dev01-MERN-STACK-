// const ahmedAge = 29;

// if(ahmedAge >= 18){
//         alert("Ahmed is eligible for vote!");
// }else{
//     alert("Ahmed is not eligible for vote!");
// }


// clerk 10%, manager 20%, lead 30%,,


// let designation = 'clerk';
// let salary = 40000;

// if (designation === 'lead') {
//     salary = salary + (salary * (30/100));
// }
// if (designation === 'manager') {
//     salary = salary + (salary * (20/100));
// }
// if (designation === 'clerk') {
//     salary = salary + (salary * (10/100));
// }

// console.log(salary, designation);



//  50%, C, 
//  60% B , 
//  70% A 
//  80% A+


// let student = 66;
// let grade = '';

// if (student >= 80 && student <=100) {
//     grade = 'A+';
// }
// if (student >= 70 && student <80) {
//     grade = 'A'
// }
// if (student >= 60 && student < 70) {
//     grade = 'B';
// }
// if (student >= 50 && student < 60) {
//     grade = 'C';
// }
// if (student < 50) {
//     grade = 'F'
// }


// if (student >= 80) {
//     grade = 'A+';
// }else
// if (student >= 70) {
//     grade = 'A'
// }else
// if (student >= 60 ) {
//     grade = 'B';
// }else
// if (student >= 50) {
//     grade = 'C';
// }else{
//     grade = "F"
// }

// console.log(grade);


// let student = 86;
// let grade = '';

// switch (true) {

//     case student >=80:
//         grade = 'A+';
//         break;

//     case student >=70:
//         grade = 'A';
//         break;

//     case student >=60:
//         grade = 'B';
//         break;

//     default:
//         grade = "F"
//         break;
// }

// console.log(grade);



// switch (grade) {

//     case "A+":
//         console.log("You win amount of prize: 10000")
//         break;

//     case "A":
//         console.log("You win amount of prize: 5000")
//         break;

//     default:
//         console.log("sorry!")
//         break;
// }



// sum of 1 se 10

// let n = 1;
// let sum = 0;
// let end = +prompt("Enter end value")


// while(n <= 10){
//     sum = sum + n;
//     n++;
// }


// console.log(sum);



// for loop;

// for(let i=1; i<=10; i++){
//     if (i == 5) {
//         continue;
//     }
//     console.log('hello world', i)
// }


// Do loop;
// let n =1;
// do {
//     console.log("2 x ", n , " = ", 2*n);
//     n++;
// } while (n <=10);



//////////////////////////////
//////////////////////////////
//////////////////////////////

let save = 'h';
let trail = 1;
let userValue = '';
do {
    let userGuess = prompt("Guess the character A t Z");
    userValue = userGuess
    if (userGuess == save) {
        console.log("You Win 💥");
        break;
    }
    trail++;
} while (trail <=5);


// if (userValue != save) {
//     console.log("Game Over");
// }

(userValue != save) ? console.log("Game OVer") : null;