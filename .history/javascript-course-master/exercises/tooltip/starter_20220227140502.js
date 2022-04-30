window.addEventListener("load", function(){
    const text = document.querySelector(".text");
    text.addEventListener("mouseenter", function(event){
        const title = event.target.dataset.tooltip;
        const toolTipText = document.createElement("div");
        toolTipText.className = "Welcome to my tooltip";
        toolTipText.textContent = title;
        document.body.appendChild(toolTipText);

        const cords = event.target.getBoundingClientRect();
        const {top , left} = cords;


    })



})