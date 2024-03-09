let name = "Ashar";
let age = 12;


let studentName = ['AShar ', 'Zeeshan', '...'];
let studentAge = [12,23,34,34];

let student = {
    id: 1, 
    name: "Abdul Karim",
    age: 22,
    gender: "Male",
    devTrioMember: true,
    courses: ['HTML', 'CSS', 'JS'],
    greet: function(){
        return "Hellom my name is Abdul Karim"
    }
};

console.log(student);
student.dateOfBirth = "14-Aug-1947";
console.log(student);
// access the key of an object

console.log(student.age);

console.log(student['age']);

console.log(student.greet())


let studentData = [
    {
        id: 1,
        name: "Abdul Karim",
        age: 23,
    },
    {
        id: 2,
        name: "Luqman",
        age: 23,
    },
    {
        id: 3,
        name: "Ibrahim",
        age: 40,
    }
]

console.log(studentData);

