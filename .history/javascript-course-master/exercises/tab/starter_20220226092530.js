const tabItem = document.querySelector(".tab-item");
[...tabItem].forEach((item )=> item.addEventListener("click",handlerTabClick));


function handlerTabClick(event){
    event.target.classList.add("active");
}