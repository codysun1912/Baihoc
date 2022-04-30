window.addEventListener("load", function(){
    const input = document.querySelector(".input");
    input.addEventListener("input",function(event){
        let inputValue = event.target.value;
        const regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if (regexEmail.test(inputValue.trim())) {
            // event.target.classList.add("valid");
            // event.target.classList.remove("invalid");
        } 
        else {
            event.target.classList.remove("valid");
            event.target.classList.add("invalid");
        }

        if (!inputValue){
            event.target.classList.remove("invalid");
        }
    })
})