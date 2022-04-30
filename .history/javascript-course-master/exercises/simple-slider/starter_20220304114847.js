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
    function handleChangeSlice(direction){
        if(direction === 1) {
            index ++;
            if(index >= sliderLength) {
                index = sliderLength;
                return;
            } 
            positionX = positionX - sliderItemWidth;
            console.log(positionX);
            sliderMain.style =`transform: translateX(${positionX})`;
        }
         else if(direction === -1) {
           index --;
           if(index <= 0) {
               index = 0;
               return;
           }
           positionX = positionX + sliderItemWidth;
           console.log(positionX);
           sliderMain.style =`transform: translateX(${positionX})`;

        }
    }

  



})