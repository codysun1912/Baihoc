window.addEventListener("load", function(){
    const input = document.querySelector(".input");
    input.addEventListener("input",function(event){
        let inputValue = event.target.value;
        const regexEmal =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    })
})