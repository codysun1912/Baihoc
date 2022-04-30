window.addEventListener("load" , function(){
    const menuLink = [... document.querySelectorAll(".menu-item")];
    menuLinl.addEventListener("mouseenter" , handleMouseEnter);

    function handleMouseEnter(event){
        console.log(event.target);
    }
})