window.addEventListener("load", function(){
    const inputSearch = document.querySelector(".input-search");
    inputSearch.addEventListener("keypress",handleKeypress);
    let filter ="";
    function handleKeypress(event){
        filter = filter + event.key;
        filter = filter.toLowerCase();
        console.log(filter);
    }
})