window.addEventListener("load ", function(){
    const form = document.querySelector(".todo-form");
    const todoList = document.querySelector(".todo-list");
    function createTodoItem(title){
        const template = `<div class="todo-item">
        <span class="todo-text">${title}</span>
        <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
      </div>`;

      todoList.insertAdjacentHTML("beforeend" , template);
    }
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const todoValue = this.elements["todo"].value;
        createTodoItem(todoValue);
        this.elements["todo"].value = "";
    });
});