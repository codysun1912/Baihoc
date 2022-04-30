window.addEventListener("load", function(){
    const input = document.querySelector(".input");
    input.addEventListener("input",function(event){
        let inputValue = event.target.value;
        const regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if (regexEmail.test(inputValue.trim())) {
            console.log("valid email");

        } 
        else {
            console.log("invalid email");
        }
    })
})