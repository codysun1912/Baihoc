window.addEventListener("load" , function(){
    const pwInput = document.querySelector(".input");
    pwInput.addEventListener("input" , function(e){
        const pwValue = e.target.value;
        const checkLength = e.target.parentNode.querySelector(".check-length");
        const checkUpper = e.target.parentNode.querySelector(".check-upper");
        const checkNumber = e.target.parentNode.querySelector(".check-number");
        const checkSpecial = e.target.parentNode.querySelector(".check-special");
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
        checkPassword(checkUpper , pwValue , /[A-Z]/);

        // if (!/[A-Z]/.test(pwValue)){
        //     checkUpper.classList.add("unactive");
        //     checkUpper.classList.remove("active");
        // } else {
        //     checkUpper.classList.remove("unactive");
        //     checkUpper.classList.add("active");
        // }

        // if (!/[0-9]/.test(pwValue)){
        //     checkNumber.classList.add("unactive");
        //     checkNumber.classList.remove("active");
        // } else {
        //     checkNumber.classList.remove("unactive");
        //     checkNumber.classList.add("active");
        // }

        // if (!/[#@$%,&*(){}!]/.test(pwValue)){
        //     checkSpecial.classList.add("unactive");
        //     checkSpecial.classList.remove("active");
        // } else {
        //     checkSpecial.classList.remove("unactive");
        //     checkSpecial.classList.add("active");
        // }

        function checkPassword(selector , value , regex){
            if(!regex.test(value)){
                selector.classList.add("unactive");
                selector.classList.remove("active");
            } else {
                selector.classList.remove("unactive");
                selector.classList.add("active");
        }
    }
    });
});