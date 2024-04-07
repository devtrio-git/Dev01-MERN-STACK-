// OBJECT ORIENTED PROGRAMMING IN JAVASCRIPT

/* JavaScript introduced the class syntax in ECMAScript 2015 (ES6), which provides a more
   familiar way to implement object-oriented programming, especially for developers coming
   from class-based languages. Under the hood, JavaScript's classes are still based on
   prototypes, but the syntax resembles traditional class-based languages.. */

// Classes are syntactical sugar over the existing prototype-based inheritance model.

// Classes and object 
// classes consist of attributes/properties and behaviors/method
class Person {
    name;
    age;
    static depart = 'CS'
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }

    getPersonDetail() {
        console.log(`Person Name is ${this.name} and Person age is ${this.age}`);
    }
}

let person1 = new Person('mubarak', 22);
person1.getPersonDetail()



// Object Oriented programming fundamentals...
// Encapsulation, Abstraction, Inheritance and Polymorphism