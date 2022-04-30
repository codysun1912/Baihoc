window.addEventListener("load" ,function(){
   function renderSweet(){
    const template = `<div class = "sweet-alert">
    <i class = " fa fa-check"></i>
    <p class = "sweet-text">Hello javascript</p>
  </div>`

  document.body.insertAdjacentHTML("beforeend" , template);
   }
   const button = document.querySelector(".button");
   button.addEventListener("click", function(){
       renderSweet();
       const sweetItem = document.querySelector(".sweet-item");
       if (sweetItem) { setTimeout(function(){
           sweetItem.parentElement.removeChild(sweetItem);
       },1000);
       }
   })
   

})