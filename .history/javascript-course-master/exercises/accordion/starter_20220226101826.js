const accordionHeader = document.querySelectorAll(".accordion-header");
[...accordionHeader].forEach(item => item.addEventListener("click",handleClickAccordion));
function handleClickAccordion(event){
    event.target.nextElementSibling.classList.toggle("is-active");
    const icon = event.target.querySelector(".icon");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");


}