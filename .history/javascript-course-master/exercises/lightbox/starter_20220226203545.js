const image = document.querySelectorAll(".content img");
image.forEach((item) => item.addEventListener("click",handlerZoomImage))
function handlerZoomImage(event){
    console.log(event.target);
}