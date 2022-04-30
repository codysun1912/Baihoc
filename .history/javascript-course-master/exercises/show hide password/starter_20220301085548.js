window.addEventListener("load" ,function(){
    const toggleAge = document.querySelector(".toggle");
    toggleAge.addEventListener("click",function(event){
        const password = this.previousElementSibling;
        const typePasssword = password.getAttribute("type");
        if(typePasssword === "password"){
            password.setAttribute("type","text");
        } else {
            password.setAttribute("type","password");
        }
    })

})