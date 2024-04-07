// 1. Prototypes in Javascript...
// JavaScript is often referred to as a prototype-based language. 
// This is because it uses prototypal inheritance as its main mechanism for object-oriented programming.


// 2. contructor function 
// Constructor functions in JavaScript are used to create objects based on a blueprint or template.

function Person(n, a) {
    this.name = n;
    this.age = a;
}

Person.prototype.getPersonDetail = function () {
    console.log(`Person Name is ${this.name} and Person age is ${this.age}`);
}

let person1 = new Person('karim', 14);
let person2 = new Person('Luqman', 14);
person1.getPersonDetail();
person2.getPersonDetail();

// const arr = [22, 323,32323];
// Array.prototype


