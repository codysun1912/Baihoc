const accordionHeader = document.querySelectorAll(".accordion-header");
[...accordionHeader].forEach(item => item.addEventListener("click",handleClickAccordion));
function handleClickAccordion(event){
    event.target.nextElementSibling.classList.toggle("is-active");
}