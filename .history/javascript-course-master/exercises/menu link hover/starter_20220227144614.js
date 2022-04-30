window.addEventListener("load" , function(){
    const menuLink = [... document.querySelectorAll(".menu-item")];
    menuLink.forEach(item => item.addEventListener("mouseenter" , handleMouseEnter));

    function handleMouseEnter(event){
        console.log(event.target);
    }
})