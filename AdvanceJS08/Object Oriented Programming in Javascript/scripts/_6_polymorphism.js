// Polymorphism in JavaScript refers to the ability of objects to be treated as instances
//  of their parent class or any of their subclasses interchangeably. This allows for the same
// interface (method or property) to be used for different types of objects. JavaScript achieves
//  polymorphism through inheritance and method overriding.

class Person {
    name;
    age;

    constructor(n, a) {

        this.name = n;
        this.age = a
    };

    getPersonName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    play() {
        console.log(`${this.name} is play Cricket`);
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

    play() {
        console.log(`student ${this.name} is play chess`);
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

    play() {
        console.log(`teacher ${this.name} is play football`);
    }
}




const student = new Student('owais', 22, 'cs', 11);
const teacher = new Teacher('ashar', 22, 1111111111111, 121);
const person = new Person('Malik', 22);

student.play();
teacher.play();
