window.addEventListener("load", function(){
    const inputSearch = document.querySelector(".input-search");
    const textItem = document.querySelectorAll(".dropdown-item");
    inputSearch.addEventListener("input",handleKeypress);
    function handleKeypress(event){
        let filter = event.target.value;
        filter = filter.toLowerCase();
        console.log(filter);
        [...textItem].forEach(item => {
            const text = item.textContent;
            const index = text.toLowerCase().indexOf(filter);
            if (index >= 0 && text.toLowerCase().startsWith(filter.charAt(0))){
                item.innerHTML = `${text.substring(0 , index)}<span class = "primary">${text.substring(index , index + filter.length)}</span>${text.substring(index + filter.length)}`

            }
        })

    
    }
})