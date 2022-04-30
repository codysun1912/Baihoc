const header = document.querySelector(".header");
window.addEventListener("scroll" , function(){
    const scrollY = window.pageYOffset;
    if (pageY <= 67){
        header && header.classList.add("is-fixed");
    } else 
    {
        header && header.classList.remove("is-fixed");

    }

})