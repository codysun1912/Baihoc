const dropDownSelect = document.querySelector(".dropdown__select");
const dropDownItem = document.querySelectorAll(".dropdown__item");
const dropDownText =document.querySelectorAll(".dropdown__text");
dropDownSelect.addEventListener("click" , function(event){
    const dropDownList = event.target.nextElementSibling;
    if(dropDownList){
        dropDownList.classList.toggle("show");
    }
});
dropDownItem.forEach(item => item.addEventListener("click", function(event){

}))
