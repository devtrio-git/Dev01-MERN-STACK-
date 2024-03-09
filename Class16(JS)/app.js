// create todo, deleteALl, deletPerticular, editperticular

let input = document.getElementById("input");
let ul = document.getElementById("ul");

function addTodo() {
    let inputValue = input.value;
    //<li>
    //     hava a meeting at 10pm
    //     <div> 
    //         <i class="fa-solid fa-trash"></i>
    //         <i class="fa-solid fa-pen-to-square"></i>
    //     </div>
    // </li>
    if(inputValue == ""){
        alert("Empty Value Not Allowed")
    }else{
        let li = document.createElement('li');
    let liValue = document.createTextNode(inputValue);
    li.appendChild(liValue);
    // creatign a div for icons

    let div = document.createElement('div');

    let deleteIcon = document.createElement('i');
    deleteIcon.setAttribute("class", "fa-solid fa-trash")
    deleteIcon.setAttribute("onClick", "deleteItem(this)")

    let editIcon = document.createElement('i');
    editIcon.setAttribute("class", "fa-solid fa-pen-to-square")
    editIcon.setAttribute("onClick", "editItem(this)")


    div.appendChild(deleteIcon);
    div.appendChild(editIcon);
    li.appendChild(div);
    ul.appendChild(li);

    input.value = "";
    console.log(li);
    }
    
}

function deleteAll() {
    let deleteConfirm = prompt("Are You Sure, type Yes","No")
    if(deleteConfirm == "Yes"){
        ul.innerHTML = ""
    }
}

function deleteItem(e) {
    // i--> div --> li
    console.log(e.parentNode.parentNode)
    e.parentNode.parentNode.remove()
}
function editItem(e){
    // console.log(e)
    console.log(e.parentNode.parentNode.firstChild)

    let updatedValue = prompt("Enter updated Value",e.parentNode.parentNode.firstChild.nodeValue);
    
    if(updatedValue == "" ){
        alert("Empty value not allowed")
    }else{
        e.parentNode.parentNode.firstChild.nodeValue = updatedValue
    }

}