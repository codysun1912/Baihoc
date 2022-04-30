window.addEventListener("load", function(){
    const forM = document.querySelector(".todo-form");
    const todoList = document.querySelector(".todo-list");
    let todoData = localStorage.length > 0 ? JSON.parse(localStorage.getItem("List")) : [];
    if(Array.isArray(todoData) && todoData.length > 0 ){
        [...todoData].forEach(item => createTodoItem(item));
    }
  
     
    function createTodoItem(title){
        const template = `<div class="todo-item">
        <span class="todo-text">${title}</span>
        <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
      </div>`;

      todoList.insertAdjacentHTML("beforeend" , template);
    }
    forM.addEventListener( "submit", function(event){
        event.preventDefault();
        const todoVal = this.elements["todo"].value;
        createTodoItem(todoVal);
        todoData.push(todoVal);
        localStorage && localStorage.setItem("List" , JSON.stringify(todoData));

        this.elements["todo"].value = "";
    });

    //remove item
    todoList.addEventListener("click" , function(e) {
        if(e.target.matches("todo-remove")){
            const todo = e.target.parentNode;
            todoItems.parentNode.removeChild(todo);
        }
    })
});