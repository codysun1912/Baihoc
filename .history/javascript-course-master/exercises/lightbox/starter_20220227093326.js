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
    if(!lightBoxImage) return;
    let lightImage = "";
    lightImage = lightBoxImage.getAttribute("src");
    index = [...images].findIndex(item => item.getAttribute("src") === lightImage);
  
    if(e.target.matches(".lightbox")){
        e.target.parentNode.removeChild(e.target);
    } else if (e.target.matches(".lightbox-next")){

      index ++;
      if(index > images.length - 1){
        index = 0 ;
      }
     displayLightImage(index);

    }  else if (e.target.matches(".lightbox-prev")){

      index --;
      if(index < 0 ) {
        index = images.length - 1;
      }
      displayLightImage(index);

    }

});

function displayLightImage(index) {
      const newSrc = [...images][index].getAttribute("src");
      lightBoxImage.setAttribute("src" , newSrc);
}