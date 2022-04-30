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
let index = 0;
document.body.addEventListener("click",function(e){
  const lightBoxImage = document.querySelector(".lightbox-image");
  let lightImage = "";
    if(e.target.matches(".lightbox")){
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".lightbox-next")){
      lightImage = lightBoxImage.getAttribute("src");
      console.log(lightImage);
      index = [...images].findIndex(item => item.getAttribute("src") === lightImage);
      index ++;
      if(index > images.length - 1) return;
      const newSrc = [...images][index].getAttribute("src");
      lightBoxImage.setAttribute("src" , newSrc);

    }  else if (e.target.matches(".lightbox-prev")){

    }

});