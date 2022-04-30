window.addEventListener("load" , function(){
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const dotItems = document.querySelectorAll(".slider-dot-item");
    const sliderItem = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const sliderItemWidth = sliderItem[0].offsetWidth;
    const sliderLength = sliderItem.length;


    nextBtn.addEventListener("click", function(){

    })
    prevBtn.addEventListener("click", function(){
        
    })

    function handleChange(direction){
        if(direction === 1) {
            console.log("next slice");
        }
        if(direction === -1) {
            console.log("prev slice");
        }
    }



})