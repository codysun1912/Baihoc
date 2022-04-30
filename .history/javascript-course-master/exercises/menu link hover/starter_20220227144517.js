window.addEventListener("load" , function(){
    const menuLink = [... document.querySelectorAll(".menu-item")];
    menuLink.addEventListener("mouseenter" , handleMouseEnter);

    function handleMouseEnter(event){
        console.log(event.target);
    }
})