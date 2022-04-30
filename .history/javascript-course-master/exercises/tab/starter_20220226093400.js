const tabItems = document.querySelectorAll(".tab-item");
[...tabItems].forEach((item) => item.addEventListener("click",handlerTabClick));

function handlerTabClick(event){
    [...tabItems].forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");
}