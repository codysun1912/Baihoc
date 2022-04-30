window.addEventListener("load" , function(){
    const pwInput = document.querySelector(".input");
    pwInput.addEventListener("input" , function(e){
        const pwValue = e.target.value;
        if (pwValue.length < 8) {
            const checkLength = document.querySelector(".check-length");
            checkLength.classList.add("unactive");
        }
    })
})