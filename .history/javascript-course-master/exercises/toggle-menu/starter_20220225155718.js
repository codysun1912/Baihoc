const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
toggle.addEventListener("click",handleMenuClick);
function handleMenuClick(event){
    event.target.classList.toggle("fa-times");
    event.target.classList.toggle("fa-bars");
    menu.classList.toggle("is-show");
}

document.addEventListener("click",handleMenuClickBackground);
function handleMenuClickBackground(event){
    if(menu.classList.contains(event.target))
}


