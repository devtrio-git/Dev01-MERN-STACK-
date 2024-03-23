// async and await are features introduced in ECMAScript 2017 (ES8) that provide a more concise and synchronous-looking way to work with asynchronous code in JavaScript.

// Here's a brief explanation of each:

// async: The async keyword is used to define asynchronous functions. When a function is declared with the async keyword, it always returns a promise, and any value returned from within the function is wrapped in a resolved promise automatically.

// await: The await keyword can only be used within an async function. It pauses the execution of the async function until the promise is settled (resolved or rejected), and then returns the resolved value. Using await allows you to write asynchronous code in a more synchronous style, making it easier to understand and maintain.


// function getName(){
//     // console.log("Ashar Ahmed")
//     return "Ashar Ahmed"
// }
// async function getName() {
//     return "Ashar"
// }
// console.log(getName().then(data => console.log(data)));

// function delay(){
//     return new Promise(resolve => setTimeout(resolve, 5000))
// }

// async function asyncFuntion(){
//     console.log("Sending Msg")
//     await delay()
//     console.log("Msg Send Successfull")
// }

// asyncFuntion();

let div = document.getElementById('userData')
async function getUser(){
   let response = await fetch("https://jsonplaceholder.typicode.com/users")
   let data = await response.json();

    // print names in html
    data.forEach(element => {
        console.log(element)
        div.innerHTML += `<p>Name: ${element.name}, Email: ${element.email}</p>`
    });
    // 

   return data
}

// console.log(getUser())

getUser().then((data)=> console.log(data))


