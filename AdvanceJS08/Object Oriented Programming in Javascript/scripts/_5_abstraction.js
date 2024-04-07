
/*

// Abstraction //
Abstraction is a fundamental concept in object-oriented programming (OOP) that refers
to the practice of hiding the implementation details of an object and exposing only
the essential features to the user. In JavaScript, abstraction is achieved by using
abstract classes and interfaces.

An abstract class is a class that cannot be initialized and is meant to be used as a 
base class for other classes.

JavaScript does not support abstract classes natively, but you can achieve similar
functionality by using a combination of function constructors and prototypes.
*/


class Person {
    name;
    age;

    /* 
    Person is only supporting class for Student and Teacher Class. 
    Should not be access directly,
    */
    constructor(n, a) {
        if (new.target == Person) {
            throw new Error("Person is abstract class, shold not be access direclty")
        } else {
            this.name = n;
            this.age = a
        }
    };

    getPersonName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }
}

class Student extends Person {
    department;
    rollNo;
    constructor(n, a, d, r) {
        super(n, a);
        this.department = d;
        this.rollNo = r;
    }

    getStudentData() {
        console.log(this);
    }
}
class Teacher extends Person {
    salary;
    empId;
    constructor(n, a, s, id) {
        super(n, a);
        this.salary = s;
        this.empId = id;
    }

    getStudentData() {
        console.log(this);
    }
}

const student = new Student('ashar', 22, 'cs', 11);
const teacher = new Teacher('ashar', 22, 1111111111111, 121);
const person = new Person('owais', 22);
console.log(person);


