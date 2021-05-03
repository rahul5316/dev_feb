let todoInput = document.querySelector(".todo-input")//todo input

let addTodoButton = document.querySelector(".add-todo");//add todo button

let todosList  =document.querySelector(".todos-list")//emty ul


//events

function addTodo() {

  let todo = todoInput.value; // gives the value whatever was typed
  

  if(todo) {
    console.log(todo);

     let liItem = document.createElement("li") //creates an li tag
     liItem.classList.add("todo-item")// add class to i tag

      // <li class = todo-item></li>


      let pTag = document.createElement("p"); // creates a p tag
      pTag.classList.add("todo")//adds class to p tag

      //<p class "todo"></p>


      pTag.innerHTML = todo; // sets the content which is inside the ptag;
      

      let deleteButton = document.createElement("button");

      deleteButton.classList.add("delete-task");

      deleteButton.innerHTML= "DELETE";

      //<button class = "delete-task">DELETE</button>


      deleteButton.addEventListener("click", function(event) {

            //console.log(event);

            event.target.parentNode.remove();

      })

      liItem.append(pTag);
      liItem.append(deleteButton);

     todosList.append(liItem);

    todoInput.value = "";
  }

  else{
    alert("Nothing Typed");
  }

  
}

addTodoButton.addEventListener("click", function(){
  addTodo();
});


addTodoButton.addEventListener("keypress" , function(event){
       
  
  if(event.key == "Enter") {
    addTodo();
  }
});