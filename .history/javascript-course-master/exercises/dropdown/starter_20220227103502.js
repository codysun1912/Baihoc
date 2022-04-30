const dropDownSelect = document.querySelector(".dropdown__select");
const dropDownItem = document.querySelectorAll(".dropdown__item");
const dropDownSelected =document.querySelector(".dropdown__selected");
const dropDownList = document.querySelector(".dropdown__list");
const dropDown = document.querySelector(".dropdown");
const dropDownCaret = document.querySelector(".dropdown__caret");
dropDownSelect.addEventListener("click" , function(event){
        dropDownList.classList.toggle("show");
    
});
dropDownItem.forEach(item => item.addEventListener("click", function(event){
    const text = event.target.querySelector(".dropdown__text").textContent;
    const icon = event.target.querySelector(".dropdown__icon").textContent;
    dropDownCaret.textContent = icon;
    dropDownSelected.textContent = text;
    dropDownList.classList.remove("show");
}))

document.addEventListener("click" , function(e){
    if(!dropDown.contains(e.target)){
        dropDownList.classList.remove("show");
    }
})

