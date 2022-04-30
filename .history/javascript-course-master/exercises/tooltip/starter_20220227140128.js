window.addEventListener("load", function(){
    const text = document.querySelector(".text");
    text.addEventListener("mouseenter", function(event){
        const title = event.target.dataset.tooltip;
    })



})