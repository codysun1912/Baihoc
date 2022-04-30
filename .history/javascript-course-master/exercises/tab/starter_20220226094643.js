const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
[...tabItems].forEach((item) => item.addEventListener("click",handlerTabClick));

function handlerTabClick(event){
    [...tabItems].forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");

    const tabNumber = event.target.dataset.tab;
    [...tabContent].forEach((item) => item.classList.remove("active"));
    [...tabContent][tabNumber -1].classList.add("active");
}


