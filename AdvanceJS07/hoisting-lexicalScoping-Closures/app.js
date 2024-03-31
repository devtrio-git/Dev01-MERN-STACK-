// 1. Hoisting in JavaScript
// Hoisting in JavaScript is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, regardless of where the actual declarations are placed in the code. This means that variables and functions can be used before they are declared in the code.

// However, it's important to understand that only the declarations themselves are hoisted, not the initializations or assignments. For variables, the declaration is hoisted, but the assignment remains in place.

// console.log("hello world")

// console.log(x); // undefined
// var x = 2;
// console.log(x); // 2

// hello(); // "hello world"

// console.log(hello) // print whole function

// function hello(){
//     console.log("hello world")
// }

// console.log(hello2)

// var hello2 = function(){
//     console.log("hello world")

// --------------------------------------------

// // 2. Lexical Environment: 
// A lexical environment in JavaScript is the context in which code is executed, defining the association between variables and their values within nested scopes. It consists of two main parts: the environment record, which stores variable bindings, and a reference to the outer lexical environment, enabling access to variables in enclosing scopes.


// In JavaScript, the scope chain is the mechanism that determines the accessibility of variables and functions within nested scopes. When you reference a variable or a function, JavaScript searches for it within the current scope and then looks up the chain of parent scopes until it finds the desired identifier or reaches the global scope.

// Here's how the scope chain works:

// Local Scope: JavaScript starts by looking for the variable or function in the current scope. If it finds the identifier there, it uses that value.

// Outer Scopes: If the identifier is not found in the current scope, JavaScript moves up the scope chain to the next outer scope and searches for the identifier there. This process continues until the identifier is found or until it reaches the global scope.

// Global Scope: If the identifier is not found in any of the nested scopes, JavaScript finally looks for it in the global scope. If the identifier is still not found there, an error is thrown.

// The scope chain allows inner functions to access variables and functions defined in their outer enclosing scopes, even after the outer functions have finished executing. This behavior is known as closure and is a powerful feature of JavaScript.

// function with its lexical scope forms a closure


    //globalScope

function outerFunction(){ //outerScope
    let outerVariable = 'I am an outer variable';

    function innerFunction(){
        console.log(outerVariable); // localScope
    }

   return innerFunction
}

var z = outerFunction();
// ----- 100 lines of code
console.log(z)
z()

