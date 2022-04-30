const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");


toggle.addEventListener("click",handleMenuClick);
function handleMenuClick(){
    menu.classList.toggle("is-show");
}