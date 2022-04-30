const image = document.querySelectorAll(".content img");
image.forEach((item) => item.addEventListener("click",handlerZoomImage));
function handlerZoomImage(event){
    const template = `<div class="lightbox">
    <div class="lightbox-content">
      <i class="fa fa-angle-left lightbox-prev"></i>
      <img
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80"
        alt=""
        class="lightbox-image"
      />
      <i class="fa fa-angle-right lightbox-next"></i>
    </div>
  </div>`;
document.body.insertAdjacentHTML("beforeend",template);
if(document.body.contains(".lightbox")){
    document.body.parentNode.remove(event.target);
}
}