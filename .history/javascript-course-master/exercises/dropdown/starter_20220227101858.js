const dropDownSelect = document.querySelector(".dropdown__select");
const dropDownItem = document.querySelectorAll(".dropdown__item");
const dropDownSelected =document.querySelector(".dropdown__selected");
const dropDownList = document.querySelector(".dropdown__list")
dropDownSelect.addEventListener("click" , function(event){
   
    if(dropDownList){
        dropDownList.classList.toggle("show");
    }
});
dropDownItem.forEach(item => item.addEventListener("click", function(event){
    const text = event.target.querySelector(".dropdown__text").textContent;
    dropDownSelected.textContent = text;
}))
