class Model{
    constructor(){

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

        this.form.append(this.input ,this.submit);

        
        
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
}

class Controller{
    constructor(model , view){
        this.model = model;
        this.view = view;
    }
}

const app = new Controller(new Model() , new View());


