window.addEventListener("load" , function(){
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    let positionX = 0;
    let index = 0 ;

    nextBtn.addEventListener("click", function(){
        handleChangeSlice(1);
    });
    prevBtn.addEventListener("click", function(){
        handleChangeSlice(-1)
    });
    [...dotItems].forEach(item => item.addEventListener("click" , function(e){
        const dataIndex = parseInt(e.target.dataset.index);
        index = dataIndex;
        if(index === 0)
        sliderMain.style =`transform: translateX(${index * sliderItemWidth * -1}px)`;

    }));

    function handleChangeSlice(direction){
        if(direction === 1) {
            if(index >= sliderLength - 1) {
                index = sliderLength - 1 ;
                return;
            } 
            positionX = positionX - sliderItemWidth;
            sliderMain.style =`transform: translateX(${positionX}px)`;
            index ++;
        }
         else if(direction === -1) {
           if(index <= 0) {
               index = 0;
               return;
           }
           positionX = positionX + sliderItemWidth;
           sliderMain.style =`transform: translateX(${positionX}px)`;
           index --;
        }
    }
});