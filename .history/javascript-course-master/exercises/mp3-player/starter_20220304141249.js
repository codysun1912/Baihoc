window.addEventListener("load", function(){
    const song = document.querySelector("#song");
    const prevButton = document.querySelector(".player-prev");
    const playButton = document.querySelector(".player-play");
    const nextButton = document.querySelector(".player-next");
    const duration = document.querySelector(".player-duration");
    const remaining = document.querySelector(".player-remaining");
    const progressBar = document.querySelector("#progress-bar");
    const playerImage = document.querySelector(".player-image");

    let playing = true;
    const listMusic = ["holo.mp3","home.mp3","spark.mp3","summer.mp3"];
    let songIndex ++;

    nextButton.addEventListener("click",function(){
        handleChangeMusic(1);
    });
    prevButton.addEventListener("click",function(){
        handleChangeMusic(-1);
    });
    function handleChangeMusic(direction){
        if(direction === 1 ){
            console.log("next music");
        } else if (direction === -1){
            console.log("prev music");
        }
    }

    playButton.addEventListener("click", handlePlayMusic);
    function handlePlayMusic(){
        if (playing){
            song.play();
            playerImage.classList.add("is-playing");
            playButton.classList.add("fa-pause");
            playing = false;
        } else {
            song.pause();
            playerImage.classList.remove("is-playing");
            playButton.classList.remove("fa-pause");
            playing = true;
        }
    }
})