const tabItems = document.querySelectorAll(".tab-item");
const tabContent = document.querySelectorAll(".tab-content");
[...tabItems].forEach((item) => item.addEventListener("click",handlerTabClick));

function handlerTabClick(event){
    [...tabItems].forEach((item) => item.classList.remove("active"));
    event.target.classList.add("active");
    const tabNumber = parseInt(event.target.dataset.tab);
    [...tabContent].forEach((item) => {
        item.classList.remove("active");
        if(parseInt(item.getAttribute("data-tab")) === tabNumber){
            item.classList.add("active");
        }
    });
    
}


