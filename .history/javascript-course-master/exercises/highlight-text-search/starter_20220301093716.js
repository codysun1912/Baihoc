window.addEventListener("load", function(){
    const inputSearch = document.querySelector(".input-search");
    const textItem = document.querySelectorAll(".dropdown-item");
    inputSearch.addEventListener("input",handleKeypress);
    function handleKeypress(event){
        let filter = event.target.value;
        filter = filter.toLowerCase();
        console.log(filter);
        [...textItem].forEach(item => {
            const text = item.textContent.toLowerCase();
            const index = text.indexOf(filter);
            console.log(index);
        })

    
    }
})