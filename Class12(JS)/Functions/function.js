
// A function is a reusable block of code that can be executed whenever it is called.
// 1. decalring and calling a function, reusability of functions
// 2. Function with parameters and arguments
//Function parameters allow you to write functions that are more flexible and reusable. By using parameters, you can write a single function that can be used with different inputs, without having to write separate functions for each case.



// we define a function
function getAge() {
    const age = +prompt("Enter your Age");
    console.log("Your Age is " + age);
}


// function with parameter

function add(num1, num2) {
    var sum = num1 + num2;
    // alert("add "+ sum);

    return sum;
}

// function call with its argument
// add(10,20);

// add(50, 100);

function subtract(num1, num2) {
    var subtraction = num1 - num2;
    alert("Subtraction: " + subtraction)
}

// subtract(10,20)

// subtract(100, 50)

// var sumOfNumbers = add(10, 20);

// console.log(sumOfNumbers)


// create a age calculator function
function ageCalculator() {
    const userBirthYear = +prompt("Enter your Birth Year");
    const currentYear = 2024;
    const age = currentYear - userBirthYear;
    console.log("here age is calculated "+ age)
    return age;
}

function vote() {
    const userAge = ageCalculator()
    

    if (userAge >= 18) {
        alert("you are eligible for voting.")
    } else {
        alert("not eligible")

    }
}

vote();