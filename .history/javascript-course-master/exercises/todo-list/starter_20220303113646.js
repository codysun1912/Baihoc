window.addEventListener("load", function(){
    const forM = document.querySelector(".todo-form");
    const todoList = document.querySelector(".todo-list");
    let todos = localStorage ? JSON.parse(localStorage.getItem("List")) : [];
     
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
        todos.push(todoVal);
        localStorage && localStorage.setItem("List" , JSON.stringify(todos));

        this.elements["todo"].value = "";
    });
});