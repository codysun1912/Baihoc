window.addEventListener("load" , function(){
    function Slider(){
     this.sliderMain = document.querySelector(".slider-main");
     this.dotItems = document.querySelectorAll(".slider-dot-item");
     this.sliderItems = document.querySelectorAll(".slider-item");
     this.nextBtn = document.querySelector(".slider-next");
     this.prevBtn = document.querySelector(".slider-prev");
     this.sliderItemWidth = this.sliderItems[0].offsetWidth;
     this.sliderLength = this.sliderItems.length;
     this.positionX = 0;
     this.index = 0 ;

    this.nextBtn.addEventListener("click", function(){
        handleChangeSlice(1);
    });
    this.prevBtn.addEventListener("click", function(){
        handleChangeSlice(-1)
    });
    [...this.dotItems].forEach(item => item.addEventListener("click" , function(e){
        [...this.dotItems].forEach(el => el.classList.remove("active"));
        e.target.classList.add("active");
        const dataIndex = parseInt(e.target.dataset.index);
        this.index = dataIndex;
        this.positionX = this.index * this.sliderItemWidth * -1;
        this.sliderMain.style =`transform: translateX(${this.positionX}px)`;

    }));

    Slider.prototype.handleChangeSlice = function(direction){
            if(direction === 1) {
                if(this.index >= this.sliderLength - 1) {
                    this.index = this.sliderLength - 1 ;
                    return;
                } 
                this.positionX = this.positionX - this.sliderItemWidth;
                this.sliderMain.style =`transform: translateX(${this.positionX}px)`;
                this.index ++;
            }
             else if(direction === -1) {
               if(this.index <= 0) {
                   this.index = 0;
                   return;
               }
               this.positionX = this.positionX + this.sliderItemWidth;
               this.sliderMain.style =`transform: translateX(${this.positionX}px)`;
               this.index --;
            }
            [...this.dotItems].forEach(el => el.classList.remove("active"));
            this.dotItems[this.index].classList.add("active");
        }
    }
});
