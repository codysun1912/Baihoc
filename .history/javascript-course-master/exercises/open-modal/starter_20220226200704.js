{/* <div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div> */}


const button = document.querySelector(".button");

const template = `<div class="modal">
<div class="modal-content">
  <i class="fa fa-times modal-close"></i>
</div>
</div>`;

button.addEventListener('click', function(){
    document.body.insertAdjacentHTML("beforeend" , template);
});
document.body.addEventListener("click", function(event){
    if(event.target.matches(".modal-close")){
        // const modal = event.target.parentNode.parentNode;
        // modal.parentNode.removeChild(modal);
        // 
        const modal = document.querySelector(".modal");
        const modalClose = document.querySelector(".modal-close");
        modalClose.addEventListener("click", function(event){
            event.target.removeChild(modal);
        })
    }

});