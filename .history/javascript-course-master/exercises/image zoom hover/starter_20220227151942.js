window.addEventListener("load" , function(){
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove", handleMouseMove);

    const imageWrapper = document.querySelector(".image-wrapper");
    const image = imageCover.querySelector(".image");

    function handleMouseMove(event){
        console.log(event.pageX);
    }


})