const dropDownSelect = document.querySelector(".dropdown__select");
const dropDownItem = document.querySelectorAll(".dropdown__item");
const dropDownSelected =document.querySelector(".dropdown__selected");
dropDownSelect.addEventListener("click" , function(event){
    const dropDownList = event.target.nextElementSibling;
    if(dropDownList){
        dropDownList.classList.toggle("show");
    }
});
dropDownItem.forEach(item => item.addEventListener("click", function(event){
    const text = event.target.document.querySelectorAll(".dropdown__text").textContent;
    dropDownSelected.textContent = text;
}))
