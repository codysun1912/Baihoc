window.addEventListener("load", function(){
    const inputSearch = document.querySelector(".input-search");
    const textItem = document.querySelectorAll(".dropdown-item");
    inputSearch.addEventListener("keypress",handleKeypress);
    let filter ="";
    function handleKeypress(event){
        filter = filter + event.key;
        filter = filter.toLowerCase();
        console.log(filter);
        [...textItem].forEach(item => {
            const text = item.textContent.toLowerCase();
            const index = text.indexOf(filter);
            console.log(index);
        })

    
    }
})