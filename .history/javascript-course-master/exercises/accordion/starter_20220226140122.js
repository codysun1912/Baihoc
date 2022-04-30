const accordionHeader = document.querySelectorAll(".accordion-header");
[...accordionHeader].forEach(item => item.addEventListener("click",handleClickAccordion));
function handleClickAccordion(event){
    const content = event.target.nextElementSibling;
    content.style.hight = `${content.scrollHeight}px`;
    content.classList.toggle("is-active");

    if(!content.classList.contains("is-active")){
        content.style.hight = `0px`;
    }
    const icon = event.target.querySelector(".icon");
    icon.classList.toggle("fa-angle-down");
    icon.classList.toggle("fa-angle-up");
}

