// create a variable for create an element list 
var list = document.getElementById("list");


//Create Function "1" for run ToDo app
function addTodo() {
    var todoItem = document.getElementById("todo-item");

    //  create li tag for making list
    var li = document.createElement('li');
    var liText = document.createTextNode(todoItem.value);
    li.style.fontSize = "3vw";
    li.style.color = "rgb(56, 3, 47)";
    li.style.fontFamily = "Arial, sans-serif";


      
    // create button for Delete
    var delBtn = document.createElement("button");
    var delText = document.createTextNode("Delete ");
    delBtn.setAttribute("class" , "btn");
    delBtn.setAttribute("onclick" , "deleteItem(this)");
    delBtn.appendChild(delText);

    // create button for Edit
    var editBtn = document.createElement("button");
    var editText = document.createTextNode(" EDIT");
    editBtn.setAttribute("class" , "btn");
    editBtn.setAttribute("onclick" , "editItem(this)");
    editBtn.appendChild(editText);

    

    // append all lists & Buttons
    li.appendChild(delBtn);
    li.appendChild(editBtn); 
    li.appendChild(liText);
    list.appendChild(li);

    todoItem.value =" " ;
    console.log(li);
}


// create Function "2" for delete Button
function deleteItem(e) {
   e.parentNode.remove()
}

// create Function "3" for Edit Button
function editItem(e) {
    var get_Uservalue = prompt( "Enter updated value" , e.parentNode)
    e.parentNode.firstChild.nodeValue = get_Uservalue;
}


// create Function "4" for Delete All Buttons
function deleteAll(){
    list.innerHTML = " "
}