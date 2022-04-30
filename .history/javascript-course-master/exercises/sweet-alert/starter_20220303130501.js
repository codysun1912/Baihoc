window.addEventListener("load" ,function(){
   function rederSweet(){
    const template = `<div class = "sweet-alert">
    <i class = " fa fa-check"></i>
    <p class = "sweet-text">Hello javascript</p>
  </div>`

  document.body.insertAdjacentHTML("beforeend" , template);
   }
   const button = document.querySelector(".button");
   button.addEventListener("click", function(){
       rederSweet();
   })
   

})