window.addEventListener("scroll" , function() {
    const scrollHeight = window.pageYOffset;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const width = (scrollHeight - height ) / 100;
})