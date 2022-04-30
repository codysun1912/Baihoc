window.addEventListener("load ", function(){
    const form = document.querySelector(".todo-form");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const todoValue = this.elements["todo"].value;

        function createTodoItem(){
            const template = `<div class="todo-item">
            <span class="todo-text">${title}</span>
            <i class="fa fa-trash todo-remove" data-value="Learning english"></i>
          </div>`;

        }
        



        this.elements["todo"].value = "";
    });
});