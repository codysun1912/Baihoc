const tabItem = document.querySelector(".tab-item");
[...tabItem].forEach(item => item.addEventListener("click",handlerTabClick));
