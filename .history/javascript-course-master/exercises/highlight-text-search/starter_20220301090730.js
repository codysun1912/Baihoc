window.addEventListener("load", function(){
    const inputSearch = document.querySelector(".input-search");
    const textItem = document.querySelectorAll(".text-search");
    inputSearch.addEventListener("keypress",handleKeypress);
    let filter ="";
    function handleKeypress(event){
        filter = filter + event.key;
        filter = filter.toLowerCase();
        console.log(filter);

    
    }
})