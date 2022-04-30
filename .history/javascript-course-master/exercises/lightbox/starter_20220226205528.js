const images = document.querySelectorAll(".content img");

images.forEach((item) => item.addEventListener("click",handlerZoomImage));
function handlerZoomImage(event){
    const image = event.target.getAttribute("src");
    const template = `<div class="lightbox">
    <div class="lightbox-content">
      <i class="fa fa-angle-left lightbox-prev"></i>
      <img
        src="${image}";
        alt=""
        class="lightbox-image"
      />
      <i class="fa fa-angle-right lightbox-next"></i>
    </div>
  </div>`;
document.body.insertAdjacentHTML("beforeend",template);
}

document.body.addEventListener("click",function(e){
    if(e.target.contains(".lightbox")){
        e.target.parentNode.removeChild(e.target);
    }

});