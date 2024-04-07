//  Inheritance is a fundamental concept in object-oriented programming (OOP) 
//  that allows classes to inherit properties and behaviors from other classes.
//  Inheritance promotes code reuse and allows for the creation of hierarchical
//  relationships between classes.


// student contain => name, age, department, rollNo
// teacher containl => name, age, subject,emp_id, salary
// need to create parent class for both.. call Person...

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
teacher.getStudentData()