class Model{
    constructor(){
        this.todos = [];

    }
    
    handlerChangeTodo(handler){
        this.todoListChange = handler;
    }

    _reload(){
        this.todoListChange(todos);
    }

    addTodo(){
        if (todoText.length > 0){
            this.todos.push(todoText);
        }
        this._reload(this.todos);
    }

    removeTodo(todoText){
      const index = this.todos.findIndex((item) => item === todoText);
      this.todos.splice(index, 1);
      this._reload(this.todos);
    }
}

class View{
    constructor(){
        this.app = this.getElement("body");

        this.todoWrapper = this.createElement("div" , "todo");
        this.form = this.createElement("form" , "todo-form");
        this.form.autocomplete = "off";

        this.input = this.createElement("input" , "todo-input");
        this.input.type = "text";
        this.input.name = "todo";
        this.input.placeholder = "Enter your task";

        this.button = this.createElement("button" , "todo-submit");
        this.button.type = "submit";
        this.button.textContent = "Add ";

        this.form.append(this.input ,this.button);

        this.todoList = this.createElement("div" , "todo-list");

        this.todoWrapper.append(this.form , this.todoList);

        this.app.append(this.todoWrapper);

        
        
    }

    createElement(tag , className){
        const elm = document.createElement(tag);
        if (className) elm.classList.add(className);
        return elm;
    }

    getElement(selector){
        const elm = document.querySelector(selector);
        return elm;

    }

    get _inputValue(){
        return this.input.value;
    }

    _resetValue(){
        this.input.value = "";
    }

    displayTodo(todos){
        if (todos.length > 0) {
            todos.forEach((todoText) => {
                const todoItem = this.createElement("div" , "todo-item");
                const span = this.createElement("span" ,"todo-text");
                span.textContent = todoText;
                const icon = this.createElement("i");
                icon.className = "fa fa-trash todo-remove";
                icon.setAttribute("data-value" , "todo-text");
                

                todoItem.append(span , icon);
                this.todoList.append(todoItem);

            });
        }
    }

    viewAddTodo(handler){
        this.form.addEventListener("submit", e => {
            if(this._inputValue){
                handler(this._inputValue);
                this._resetValue();
            }
        });
    }

    viewRemoveTodo(handler){
        this.todoList.addEventListener("click" , e => {
            if(e.target.matches("todo-remove")){
                const value = e.target.dataset.value;
                handler(value);
            }
        })
    }
}

class Controller{
    constructor(model , view){
        this.model = model;
        this.view = view;
        
        this.view.viewAddTodo(this.handleraddTodo);
        this.view.viewRemoveTodo(this.handlerremoveTodo);

        this.handlerChangeTodo(this.model.todos);

    }

    handlerChangeTodo = (todos) => {
        this.view.displayTodo(todos);
    }

    handleraddTodo = (todoText) => {
        this.model.addTodo(todoText);
    }

    handlerremoveTodo = (todoText) => {
        this.model.removeTodo(todoText);
    }

}

const app = new Controller(new Model() , new View());


