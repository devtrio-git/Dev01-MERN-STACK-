function darkMode(){
    let container =  document.getElementById("container");
    let lightimg =  document.getElementById("lightImg");
    let darkimg =  document.getElementById("darkImg");

    container.style.backgroundColor = "darkred";
    container.style.color = "white";

    lightimg.style.display = "inline";
    darkimg.style.display = "none";

}

function lightMode(){
    let container =  document.getElementById("container");
    let lightimg =  document.getElementById("lightImg");
    let darkimg =  document.getElementById("darkImg");

    container.style.backgroundColor = "white";
    container.style.color = "black";

    lightimg.style.display = "none";
    darkimg.style.display = "inline";
}