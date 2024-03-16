import { employees } from "./data.js";
// console.log(employees)
// { 
//     id: 1, 
//     firstName: "John", 
//     lastName: "Doe", 
//     age: 30, 
//     department: "Sales", 
//     position: "Sales Manager", 
//     salary: 60000 
// }

// 01) fullNames of Employees

// const fullName = employees.map((item)=>{
//     return { fullName: `${item.firstName} ${item.lastName}`, age: item.age, ...item };
// })

// console.log(fullName)


// 02) name and age whose age > 30

const filteredEmp = employees
.filter((item)=>  item.age > 30)
.map(item=>( {name: `${item.firstName} ${item.lastName}`, age: item.age}))

// b/w 50 to 60 and HR dep

const filterWithSalary = employees
.filter(item=> item.salary >50000 && item.salary < 60000 && item.department == "Human Resources")

console.log(filterWithSalary)

// total salary of particular departmnet
// const findTotalSalary = employees
// .filter(item=> item.department == "Sales")
// .map(item=> item.salary)
// .reduce((acc,curr)=> acc + curr ,0)

function getTotalSalaryOFDepartment (depart){
const findTotalSalary = employees
.filter(item=> item.department == depart)
.map(item=> item.salary)
.reduce((acc,curr)=> acc + curr ,0)

return findTotalSalary
}


console.log(getTotalSalaryOFDepartment("Marketing"))
console.log(getTotalSalaryOFDepartment("Sales"))
console.log(getTotalSalaryOFDepartment("Human Resources"))
console.log(getTotalSalaryOFDepartment("IT"))