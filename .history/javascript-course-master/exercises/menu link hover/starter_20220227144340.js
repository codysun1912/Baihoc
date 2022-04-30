window.addEventListener("load" , function(){
    const menuItem = document.querySelectorAll(".menu-item");
    menuItem.addEventListener("mouseenter" , handleMouseEnter);

    function handleMouseEnter(event){
        console.log(event.target);
    }
})