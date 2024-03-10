// var, let, const
// var userName = "Ashar";
// let userAge = 20;
// block scope + nested block scope
// destructing of arrays and object 
// ...spread operators
// ...rest operators

{
    // var userName = "Owais" ;
    // let userAge = 15;
    // const c = 20;
    // console.log(userAge);
}

// console.log(userAge);
// console.log(b)
// console.log(c)

// let userName = "AShar"
// {
//     // let userName = "Ahmed"
//         {
//             // let userName = "Owais"
//             console.log(userName)
//         }

// }

// destructring arrays and Object

// const colorArray = ["red", "yellow", "green", "blue"];

// const [appleColor, mangoColor] = colorArray;

// const userNames = ["Ashar", 23, "Male"];
//     const [userName, age] = userName;

// function getNameaAndAge (data){
//     const [userName, age] = data;
//     return `User Name ${userName} and User Age ${age}`
// }

// console.log(getNameaAndAge(userNames))


// console.log(mangoColor)


// const person = {
//     name: "AShar",
//     age: 23,
//     course: ['HTML','CSS'],
//     location: {
//         lat: 123,
//         long:123,
//         address:{
//             city:"Karachi",
//             country: "Pakistan"
//         }
//     }
// }

// const {name, age, course , location:{address:{city}} } = person;

// const [firstCourse] = course

// console.log(city)
// console.log(person.location.address.city);


// ...spread (unpack elements from array & upack properties from object, and placed them into another array or  object)

// ...rest --> used for collecting infinite arguements

// const dev01 = ["Asim","Ibrahim","Rafay"];

// const dev02 = ["Aneeq","Daniyal","Sara"];

// const devtrio = [...dev01, ...dev02 ];

// const devtrio = [ "Ashar", ...dev01 , "Ahmed" ]

// console.log(devtrio);

// const obj1 = {name: "Ashar", age:24};

// const obj2 = {weight: 70, gender:"male"};


// const user = {...obj1, salary: "4000" };

// console.log(user)

// function add(num1, num2, ...num){
//     console.log(num)
//     return num1 + num2 ;
// }

// console.log(add(2,5,10,10,340))
// console.log(add(2,10))

function sum(...num){

    let total = 0;
    for (let i = 0; i < num.length; i++) {

        total = total + num[i]
        // total += num[i] 
    }   
    console.log(total)
}



sum(10,20,30)


