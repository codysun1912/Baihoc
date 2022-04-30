const image = document.querySelectorAll(".content img");
image.addEventListener("click",handlerZoomImage);
function handlerZoomImage(event){
    console.log(event.target);
}