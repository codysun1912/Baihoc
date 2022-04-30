window.addEventListener("load" ,function(){
    const tab = document.querySelector(".tab");
    const tabOffSetLeft = tab.offsetLeft;
    const tabItems = document.querySelectorAll(".tab-item");
    const tabList = document.querySelector(".tab-list");
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
        console.log(this.scrollLeft);
    })
})