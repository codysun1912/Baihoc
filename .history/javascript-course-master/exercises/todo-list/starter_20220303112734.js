window.addEventListener("load", function(){
    const forM = document.querySelector(".todo-form");
    const todoList = document.querySelector(".todo-list");
    const todoDatas = [];
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
        todoDatas.push(todoVal);
        localStorage.setItem("List" , JSON.stringify(todoDatas));
        this.elements["todo"].value = "";
    });
});