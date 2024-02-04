// new line break statements
// var a = 5 ;
// a *  5;

// // var a = 5 a * 4 
// i = 1; j = 2; k =3; 

// // var names

// // Legal or illegal names

// // Legal
// var number
// var std_age
// var $devtrio
// var dev_trio
// var dev$trio
// var _devtrio
// var devtrio
// var userResponse
// var UserResponse

// // illegals name
// // can't start var with number
// var users
// var dev#trio
// var dev-trio
// var dev?trio
// var dev*trio
// var dev trio


// js is case sensative language

// var student = "Ibrahim";
// var Student = "Salik";

// console.log(Student)

// Arthmetic Operators
// (
// = assig operator
// + add operator
// )
// var num1 = +prompt("Enter number 1");
// var num2 = +prompt("Enter number 2");

// console.log("Number 1 is: " + num1);
// console.log("Number 2 is: " + num2);

// var sum = num1 + num2;
// console.log("Add result is: " + sum);//8

// var sub = num1 - num2;
// console.log("Minus result is: " + sub);//2

// var mult = num1 * num2;
// console.log("Multiply result is: " + mult);//15

// var divide = num1 / num2;
// console.log("Divide result is: " + divide);//1.67

// var remainder = num1 % num2;
// console.log("Remainder result is: " + remainder);//2

// var exponent = num1 ** num2;
// console.log("Exponent result is: " + exponent);//2


// var a = 5
// shorthands
// a = a + 5
// a += 5
// a = a - 5
// a -= 5
// a = a * 5
// a *= 5
// a = a / 5
// a /= 5
// a = a % 5
// a %= 5
// a = a ** 5
// a **= 5
// console.log(a)

// var a = 5 + 2 * 3 - 3 / 3;
// //      7 * 3 - 3 / 3
// //      21 - 1
// //      20

// // using DMAS
// // 5 + 2 * 3 - 3 / 3
// // 5 + 2 * 3 - 1 divide
// // 5 + 6 - 1 multiply
// // 11 - 1 Add
// // 10 subs

// console.log(a)
// BODMAS
// var num = 7 + 2 * (5 - 4) / 2;
//        7 + 2 * 1 / 2 
//        7 + 2 * 0.5 
//        7 + 1 
//        8
// console.log(num) 

// Online Shopping Cart

// var totalPrice = 150;
// var discontPercentage = 10;

// console.log("Total price of product is: " + totalPrice)

// console.log("Discount avaible on product is: " + discontPercentage)

// var discountedPrice = totalPrice - (totalPrice * (discontPercentage /100));
// 150 - (150 * (10 / 100))
// 150 - (150 * 0.1)
// 150 - 15
// 135
// console.log("Discounted price: " + discountedPrice)

// Increment & decrement
// PRE/POST &  PRE/POST
// PRE
// ++num & --num
// POST
// num++ & num--


// x++ x me one add krdo
// var age = 18;
// // console.log(age);
// ++age;
// console.log("add one: " + age) //19

// --age;
// console.log("dec one: "+ age)//18

// var x = 3;

// var y = x + ++x + --x + x + x++ + x + ++x + --x;
// //      3 + 4  +  3  +  3  + 3  + 4 +  5 + 4; 
// // 


// console.log(x); //4
// console.log(y); //29

// var a = 5;

// var b = a + a++ + --a + a++ + ++a + a + a++ + a; 
// //      5 + 5  +   5 +  5  +    7 + 7  +7  +  8
 

// console.log(a)
// console.log(b)


// Inventory Management System

// var avaibleItems = 70;

// Dec oper --: (Selling item)
// avaibleItems--;
// avaibleItems--;
// avaibleItems--;
// avaibleItems--;
// avaibleItems--;
// console.log("Item after customer purchase " + avaibleItems)



// Added new item from company

// avaibleItems++;
// avaibleItems++;
// avaibleItems++;
// avaibleItems++;
// avaibleItems++;
// avaibleItems++;
// avaibleItems++;
// console.log("Item after receiving from new stock " + avaibleItems)



// Comparison Operators
// = assignmnet operator
// > greater than
// < less than
// >= greater than and equal to
// <= less than and equal to
// == equal to
// != not equal to
// === equal to data type equal 

// var a = 7;

// console.log(a == 6); //F
// console.log(a === 6); //F
// console.log(a != 6); //T
// console.log(a !== 6); //T
// console.log(a > 6); //T
// console.log(a < 6); //F
// console.log(a >= 6); //T
// console.log(a <= 6); //F


// var num1 = 7;//int
// var num2 = 7;

// // console.log(num1 == num2);//true
// console.log(num1 === num2);//false

// var a = 3;

// console.log( a == 3);//true
// console.log( a == "3");//true
// console.log( a == 6);//false

// console.log( a === 3);//true
// console.log( a === "3");//false
// console.log( a === 6);//false


// LOGICAL Operators

// AND &&
// koi ik chz bh false tou false retun krdega

// console.log("AND OPERATOR &&")
// console.log(true && true);//t
// console.log(false && true);//f
// console.log(true && false);//f
// console.log(false && false);//f

// OR ||
// koi ik chz bh true tou true retun krdega

// console.log("OR OPERATOR ||")
// console.log(true || true);//t
// console.log(false || true);//t
// console.log(true || false);//t
// console.log(false || false);//f




// var num = 60;

// var comp = num > 50 && num < 70;
// console.log(comp);//true


// var num = 80;

// var comp = num > 50 && num < 70;
// console.log(comp);//false


// var num = 60;

// var comp = num > 50 || num < 70;
// console.log(comp);//true


// var num = 80;

// var comp = num > 50 || num < 70;
// console.log(comp);//true


// evaluation stops at first
// var a = false && true && false;

// // evaluation stops at last
// var b = true && true && false;

// // evaluation stops at second
// var c = true && false && true;


// // evaluation stops at second
// var a = false || true || false;

// // evaluation stops at first
// var b = true || true || false;

// // evaluation stops at end
// var c = false || false || true;

// NOT OPERATOR !

console.log(!true);
console.log(!false);













































































































