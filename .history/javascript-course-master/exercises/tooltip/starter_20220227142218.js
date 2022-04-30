window.addEventListener("load", function(){
    const text = document.querySelector(".text");
    text.addEventListener("mouseenter", function(event){
        const title = event.target.dataset.tooltip;
        const toolTipText = document.createElement("div");
        toolTipText.className = "tooltip-text";
        toolTipText.textContent = title;
        document.body.appendChild(toolTipText);

        const cords = event.target.getBoundingClientRect();
        const {top, left, width,height} = cords;
        const tooltipHeight = toolTipText.offsetHeight;
        const triangleHeight = 20;
        toolTipText.style.left = `${left - width / 2}px`;
        toolTipText.style.top = `${top - tooltipHeight - triangleHeight}px`;


    });

    text.addEventListener("mouseleave" , function(event){
        const toolTip = document.querySelector(".tooltip-text");
        if(!tooltip) return;
        toolTip.parentNode.removeChild(toolTip);
    })



});