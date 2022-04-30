const dropDownSelect = document.querySelector(".dropdown__select");
const dropDownItem = document.querySelectorAll(".dropdown__item");
const dropDownSelected =document.querySelector(".dropdown__selected");
const dropDownList = document.querySelector(".dropdown__list");
const dropDown = document.querySelector(".dropdown");
dropDownSelect.addEventListener("click" , function(event){
        dropDownList.classList.toggle("show");
    
});
dropDownItem.forEach(item => item.addEventListener("click", function(event){
    const text = event.target.querySelector(".dropdown__text").textContent;
    dropDownSelected.textContent = text;
    dropDownList.classList.remove("show");
}))

document.body.addEventListener("click" , function(e){
    if(!dropDown.contains(e.target)){
        dropDownList.classList.remove("show");
    }
})

