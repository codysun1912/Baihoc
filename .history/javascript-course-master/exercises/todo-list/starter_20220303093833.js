window.addEventListener("load ", function(){
    const form = document.querySelector(".todo-form");
    const toDo = document.querySelector(".todo");

    function createTodoItem(title){
        const template = `<div class="todo-item">
        <span class="todo-text">${title}</span>
        <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
      </div>`;

      toDo.insertAdjacentHTML("beforeend" , template);



    }
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const todoValue = this.elements["todo"].value;


        this.elements["todo"].value = "";
    });
});