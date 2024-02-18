// DOCUMENTObejctModel 
//      getElementByID, getElemntByClassName, getElemntbytagname, getQuerySelector("class access dot(.) ClassName",
// "id access hash(#) Id",) 

// document.getElementById("para").innerText = "Welcome in DOM CLASS";
// id target
// document.querySelector("#para").innerText = "Welcome in QuerySelector";

// innerText & innerHTML
// document.getElementById("para").innerText = "<h1>HEllo world</h1>";
// document.getElementById("para").innerHTML = "<h1>HEllo world</h1>";

// let ourdiv = document.getElementById("ourDiv")
// console.log(ourdiv);

// getElementByClassName

// let greenItems = document.getElementsByClassName("green");

// console.log("Elemnts with greenCLASS", greenItems)
// Classname
// let greenItems = document.querySelector(".green");

// console.log("Elemnts with greenCLASS", greenItems)
// tagName
// let allPara = document.querySelectorAll('p');

// console.log("all para", allPara)

// DOM WITH FORM INPUT

// function register(){
//     let userEmail = document.querySelector("#useremail").value;
//     let userPass = document.querySelector("#userpass").value;

//     if(userEmail == "" && userPass == ""){
//         alert("please fill all the fields")
//     }else{
//         alert("Your email is " + userEmail + " your pass is " + userPass)
//     }

// }

// addEventListerner

function displayDate(){
    document.getElementById("currDateTime").innerHTML = Date();
}

let myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", displayDate)
















