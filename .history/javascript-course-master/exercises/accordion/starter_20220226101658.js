const accordionHeader = document.querySelectorAll(".accordion-header");
[...accordionHeader].forEach(item => item.addEventListener("click",handleClickAccordion));
function handleClickAccordion(event){
    event.target.nextElementSibling.classList.toggle("is-active");
    const icon = event.target.document.querySelector(".icon");
    icon.classList.toggle("fa-angle-down");


}