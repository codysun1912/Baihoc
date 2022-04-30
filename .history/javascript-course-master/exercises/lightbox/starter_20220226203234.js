const image = document.querySelectorAll(".content .image");
image.addEventListener("click",handlerZoomImage);
function handlerZoomImage(event){
    console.log(event.target);
}