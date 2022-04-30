window.addEventListener("load" , function(){
    const imageCover = document.querySelector(".image-cover");
    imageCover.addEventListener("mousemove", handleMouseMove);

    const imageWrapper = document.querySelector(".image-wrapper");
    const image = document.querySelector(".image");
    let imageWrapperWidth = imageWrapper.offsetWidth;
    let imageWrapperHeight = imageWrapper.offsetHeight;

    function handleMouseMove(event){
        const pX = event.pageX;
        const pY = event.pageY;

        image.style = "width:auto ; height : auto ; max-height : unset";

        let imageWidth = image.offsetWidth;
        let imageHeight = image.offsetHeight;
        let x = pX;
        let y = pY;


        image.style = `left: ${-x}px ;  top: ${0}px  ; width: auto ; height: auto ;max-height : unset`;
        
    }


}) 