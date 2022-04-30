window.addEventListener("load", function(){
    const song = document.querySelector("#song");
    const prevButton = document.querySelector(".player-prev");
    const playButton = document.querySelector(".player-play");
    const nextButton = document.querySelector(".player-next");
    const durationMusic = document.querySelector(".player-duration");
    const remaining = document.querySelector(".player-remaining");
    const progressBar = document.querySelector("#progress-bar");
    const playerImage = document.querySelector(".player-image");

    let playing = true;
    const listMusic = ["holo.mp3","home.mp3","spark.mp3","summer.mp3"];
    let songIndex = 0;

    nextButton.addEventListener("click",function(){
        handleChangeMusic(1);
    });
    prevButton.addEventListener("click",function(){
        handleChangeMusic(-1);
    });
    function handleChangeMusic(direction){
        if(direction === 1 ){
           songIndex ++;
           if (songIndex > listMusic.length -1){
               songIndex = 0;
           }
           song.setAttribute("src" , `./files/${listMusic[songIndex]}`);
           playing = true;
           handlePlayMusic();
        } else if (direction === -1){
            songIndex --;
            if (songIndex < 0 ){
                songIndex = listMusic.length - 1;
            }
            song.setAttribute("src" , `./files/${listMusic[songIndex]}`);
           playing = true;
           handlePlayMusic();
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

    function displayTime(){
        const {duration , currentTime} = song;
        progressBar.max = duration;
        progressBar.value = currentTime;
        remaining.textContent = formatTimer(currentTime);
        if(!duration){
            durationMusic.textContent = "0:00";
        }else {
        durationMusic.textContent = formatTimer(duration);
        }

    }
    function formatTimer(number){
        const minutes = Math.floor(number / 60);
        const seconds = Math.floor(number - minutes * 60);
        return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }

    progressBar.addEventListener("change" , changeProgress);
    function changeProgress(){
        song.currentTime = progressBar.value;
    }
   displayTime();
    const timer = setInterval(displayTime,500);
})