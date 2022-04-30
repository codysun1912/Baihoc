const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");


toggle.addEventListener("click",handleMenuClick);
function handleMenuClick(event){
    event.target.toggle("fa-times");
    event.target.toggle("fa-bars");
    menu.classList.toggle("is-show");
}