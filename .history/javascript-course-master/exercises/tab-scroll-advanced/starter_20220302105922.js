window.addEventListener("load" ,function(){
    const tab = document.querySelector(".tab");
    const tabOffSetLeft = tab.offsetLeft;
    const tabItems = document.querySelectorAll(".tab-item");
    const tabList = document.querySelector(".tab-list");
    const tabPrev = document.querySelector(".tab-prev");
    const tabNext = document.querySelector(".tab-next");
    let deltaScroll = 40;
    const tabScrollWidth = tabList.scrollWidth - tabList.clientWidth;
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
    });
    tabNext.addEventListener("click" , function(e){
        tabPrev.classList.remove("disabled");
        tabList.scrollLeft += deltaScroll;
       if (tabList.scrollLeft >= tabScrollWidth){
           this.classList.add("disabled");
       }
    });
    tabPrev.addEventListener("click" , function(e){
        tabNext .classList.remove("disabled");
        tabList.scrollLeft -= deltaScroll;
       if (tabList.scrollLeft <= 0){
           this.classList.add("disabled");
       }
    });   
});