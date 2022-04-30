window.addEventListener("load" , function(){
    const menuLink = [... document.querySelectorAll(".menu-item")];
    menuLink.forEach(item => item.addEventListener("mouseenter" , handleMouseEnter));
    const line = document.createElement("div");
    line.className = "line-effect";
    document.body.appendChild(line);

    function handleMouseEnter(event){
        const {left , top, width, height} = event.target.getBoundingClientRect();
        const offsetBottom = 5;
        line.style.width = `${width}px`;
        line.style.left = `${left}px`;
        line.style.top = `${top + height + offsetBottom}px`;
        
    }
    const menu = document.querySelector(".menu");
    menu.addEventListener("mouseleave" , function(){
        line.style.width = 0;
    });
})