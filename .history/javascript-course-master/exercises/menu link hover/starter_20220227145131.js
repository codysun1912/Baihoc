window.addEventListener("load" , function(){
    const menuLink = [... document.querySelectorAll(".menu-item")];
    menuLink.forEach(item => item.addEventListener("mouseenter" , handleMouseEnter));
    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);

    function handleMouseEnter(event){
        const {left , top, width, height} = event.target.getBoundingClientRect();
        
        
    }
})