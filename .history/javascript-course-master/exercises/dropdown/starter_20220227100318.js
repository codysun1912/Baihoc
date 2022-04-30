const dropDownSelect = document.querySelector(".dropdown__select");
dropDownSelect.addEventListener("click" , function(event){
    const dropDownList = event.target.nextElementSibling;
    if(dropDownList){
        dropDownList.classList.toggle("show");
    }
    

})
