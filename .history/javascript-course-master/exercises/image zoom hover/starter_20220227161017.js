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
        let spaceX = (imageWidth / 2 - imageWrapperWidth) * 2;
        let spaceY = (imageHeight / 2 - imageWrapperHeight) * 2;
        imageWidth = imageWidth + spaceX;
        imageHeight = imageHeight + spaceY;
        let ratioX = imageWidth / imageWrapperWidth /2;
        let ratioY = imageHeight / imageWrapperHeight /2;
        let x = (pX - imageWrapper.offsetWidth)* ratioX;
        let y = pY * ratioY;


        image.style = `left: ${-x}px ;  top: ${-y}px  ; width: auto ; height: auto ;max-height : unset ; transform: none`;
        
    }

    imageCover.addEventListener("mouseleave" , function(){
        image.style = "";
    })


}) 