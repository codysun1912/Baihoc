document.addEventListener("DOMContentLoaded", function(){
    const images = document.querySelectorAll(".container img");
    window.addEventListener("scroll" , function(){
        const windowScrollTop = window.pageYOffset;
        [...images].forEach(item => {
            const imageOffTops = item.offsetTop;
            if (windowScrollTop > imageOffTops){
                item.classList.add("active");
            }

        })
    


    })
})