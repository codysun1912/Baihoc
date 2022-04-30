window.addEventListener("load", function(){
    const song = document.querySelector("#song");
    const prevButton = document.querySelector(".player-prev");
    const playButton = document.querySelector(".player-play");
    const nextButton = document.querySelector(".player-next");
    const duration = document.querySelector(".player-duration");
    const remaining = document.querySelector(".player-remaining");
    const progressBar = document.querySelector("#progress-bar");
    const imagePlayer = document.querySelector(".is-playing");

    let playing = true;

    playButton.addEventListener("click", handlePlayMusic);
    function handlePlayMusic(){
        if (playing){
            song.play();
            playing = false;
        } else {
            song.pause();
            playing = true;
        }
    }
})