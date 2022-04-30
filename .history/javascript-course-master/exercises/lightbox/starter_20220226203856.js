const image = document.querySelectorAll(".content img");
image.forEach((item) => item.addEventListener("click",handlerZoomImage));
function handlerZoomImage(event){
    const template = `<div class="lightbox">
    <div class="lightbox-content">
      <i class="fa fa-angle-left lightbox-prev"></i>
      <img
        src=
        alt=""
        class="lightbox-image"
      />
      <i class="fa fa-angle-right lightbox-next"></i>
    </div>
  </div>`;`
}