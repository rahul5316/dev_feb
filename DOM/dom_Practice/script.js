let addTodoSpace = document.querySelector(".todo-input");

let todoButton = document.querySelector(".add-todo");

let todolist = document.querySelector(".todos-list");


todoButton.addEventListener("click", function() {

  let todo = addTodoSpace.value;

  if(todo) {

    let liItem = document.createElement("li");
      liItem.classList.add("todo-item");

      let pTag = document.createElement("p");

      pTag.classList.add("todo");

      pTag.innerHTML = todo;

      let deleteButton = document.createElement("button");
      deleteButton.classList.add("delete-Task");

      deleteButton.innerHTML = "DELETE";

      deleteButton.addEventListener("click", function(event){
         
               event.target.parentNode.remove();

      })

      liItem.append(pTag);

      liItem.append(deleteButton);
      
      todolist.append(liItem);

      todolist.value = "";








  }

})


