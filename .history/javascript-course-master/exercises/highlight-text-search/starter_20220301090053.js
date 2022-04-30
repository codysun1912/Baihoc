window.addEventListener("load", function(){
    const inputSearch = document.querySelector(".input-search");
    inputSearch.addEventListener("keypress",handleKeypress);
    function handleKeypress(event){
        filter = filter + event.key;
    }
})