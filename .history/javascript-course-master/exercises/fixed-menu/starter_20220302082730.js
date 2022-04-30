const header = document.querySelector(".header");
window.addEventListener("scroll" , function(){
    if (pageY <= 67){
        header && header.classList.add("is-fixed")
    }

})