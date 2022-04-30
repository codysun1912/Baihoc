class Model{
    constructor(){

    }
}

class View{
    constructor(){
        
    }

    createElement(tag , className){
        const elm = document.createElement(tag);
        if (className) elm.classList.add(className);
        return elm;
    }

    getElement(selector){
        const elm = document.createElement(selector);
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


