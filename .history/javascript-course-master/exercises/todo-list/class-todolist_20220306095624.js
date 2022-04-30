class Model{
    constructor(){

    }
}

class View{
    constructor(){
        this.app = this.getElement("body");
        
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


