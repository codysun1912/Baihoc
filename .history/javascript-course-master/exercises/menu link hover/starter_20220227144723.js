window.addEventListener("load" , function(){
    const menuLink = [... document.querySelectorAll(".menu-item")];
    menuLink.forEach(item => item.addEventListener("mouseenter" , handleMouseEnter));
    const line = document.createElement("div");
    function handleMouseEnter(event){
        console.log(event.target);
    }
})