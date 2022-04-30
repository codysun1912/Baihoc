window.addEventListener("load" ,function(){
    const tab = document.querySelector(".tab");
    const tabOffSetLeft = tab.offsetLeft;
    const tabItems = document.querySelectorAll(".tab-item");
    const tabList = document.querySelector(".tab-list");
    const tabPrev = document.querySelector(".tab-prev");
    const tabNext = document.querySelector(".tab-next");
    let deltaScroll = 40;
    const tabScrollWidth = tab.offsetWidth;
    [...tabItems].forEach(item => item.addEventListener("click",handleTabClick))

    function handleTabClick(event){
        [...tabItems].forEach(item => item.classList.remove("active"))
        event.target.classList.add("active");
        let tabSpace = event.target.offsetLeft;
        if(event.target.offsetLeft >= tabOffSetLeft){
            tabSpace = event.target.offsetLeft - tabOffSetLeft;
        }
        tabList.scroll(tabSpace / 2 , 0);
    }

    tabList.addEventListener("wheel", function(e){
        let delta = e.deltaY;
        this.scrollLeft += delta;
    })

    tabNext.addEventListener("click" , function(e){
        tabList.scrollLeft += deltaScroll;
       if(tabList.scrollLeft >= tabScrollWidth){
           this.classList.remove("disabled");
       }

    })
})