const tabItems = document.querySelectorAll(".tab-item");
[...tabItems].forEach((item) => item.addEventListener("click",handlerTabClick));

function handlerTabClick(event){
    
    event.target.classList.add("active");
}