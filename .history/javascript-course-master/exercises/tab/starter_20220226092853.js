const tabItems = document.querySelector(".tab-item");
[...tabItems].forEach((item) => item.addEventListener("click",handlerTabClick));

function handlerTabClick(event){
    console.log(event.target);
    event.target.classList.add("active");
}