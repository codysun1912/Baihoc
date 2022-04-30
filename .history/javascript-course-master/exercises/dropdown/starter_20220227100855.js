const dropDownSelect = document.querySelector(".dropdown__select");
const dropDownItem = document.querySelectorAll(".dropdown__item");
dropDownSelect.addEventListener("click" , function(event){
    const dropDownList = event.target.nextElementSibling;
    if(dropDownList){
        dropDownList.classList.toggle("show");
    }
});
o
