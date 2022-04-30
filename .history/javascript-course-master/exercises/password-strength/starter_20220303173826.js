window.addEventListener("load" , function(){
    const pwInput = document.querySelector(".input");
    pwInput.addEventListener("input" , function(e){
        const pwValue = e.target.value;
        const checkLength = e.target.parentNode.querySelector(".check-length");
        const checkUpper = e.target.parentNode.querySelector(".check-upper");
        const checkItem = e.target.parentNode.querySelectorAll(".check-item");
        if(!pwValue) {
            [...checkItem].forEach(item => {
                item.classList.remove("active");
                item.classList.remove("unactive");
            })
            return;
        }
        if (pwValue.length < 8) {
            checkLength.classList.add("unactive");
            checkLength.classList.remove("active");
        } else {
            checkLength.classList.remove("unactive");
            checkLength.classList.add("active");
        }

        if (!/[A-Z]/.test(pwValue)){
            checkUpper.classList.add("unactive");
            checkUpper.classList.remove("active");
        } else {
            checkUpper.classList.remove("unactive");
            checkUpper.classList.add("active");
        }

        

        

    });
});