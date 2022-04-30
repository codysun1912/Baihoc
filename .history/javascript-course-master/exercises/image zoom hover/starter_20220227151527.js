window.addEventListener("load" , function(){
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove", handleMouseMove);

    function handleMouseMove(event){
        console.log(event.pageX);
    }


})