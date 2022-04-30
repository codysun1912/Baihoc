window.addEventListener("load" , function(){
    const pwInput = document.querySelector(".input");
    pwInput.addEventListener("input" , function(e){
        const pwValue = e.target.value;
        const checkLength = e.target.parentNode.querySelector(".check-length");
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
        } else {
            checkLength.classList.remove("unactive");
            checkLength.classList.add("active");
        }

    });
});