window.addEventListener("load ", function(){
    const form = document.querySelector(".todo-form");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const todoValue = this.elements["todo"].value;
        console.log(todoValue);
    });
});