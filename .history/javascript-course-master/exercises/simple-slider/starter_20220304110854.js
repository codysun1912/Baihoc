window.addEventListener("load" , function(){
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItem = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const sliderLength = sliderItem.length;
    let postionX = 0;
    let index = 0 ;

    nextBtn.addEventListener("click", function(){
        handleChange(1);
    });
    prevBtn.addEventListener("click", function(){
        handleChange(-1)
    });
    function handleChange(direction){
        if(direction === 1) {
            index ++;
            if(index >= sliderLength) return ;
            postionX = postionX - sliderItemWidth;
            console.log("positionX" ,postionX);
            sliderMain.style = `transform: translateX(${postionX})`;
        }
         else   if(direction === -1) {
            console.log("prev slice");
        }
    }



})