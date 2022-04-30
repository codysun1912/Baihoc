window.addEventListener("load" , function(){
    const daysText = document.querySelector(".days");
    const hoursText = document.querySelector(".hours");
    const minutesText = document.querySelector(".minutes");
    const secondsText = document.querySelector(".seconds");
    // Fri Mar 06 2022 08:54:11 GMT+0700 (Indochina Time)
    function countDown(date){
        const endTime = new Date(date).getTime();
        if(isNaN(endTime)) return;
        setInterval(calculate , 1000);
        function calculate(){
        let days , hours , minutes , seconds;
        const now = new Date();
        const startTime = now.getTime();
       

        let timeRemaining = parseInt((endTime - startTime) / 1000);
        if (timeRemaining >= 0){
        days = parseInt(timeRemaining /86400);
        timeRemaining = timeRemaining % 86400;
        hours = parseInt(timeRemaining/3600);
        timeRemaining = timeRemaining % 3600;
        minutes = parseInt(timeRemaining / 60);
        timeRemaining = timeRemaining % 60;
        seconds = parseInt(timeRemaining);
        daysText.textContent = `0${days}`.slice(-2);
        hoursText.textContent = `0${hours}`.slice(-2);
        minutesText.textContent = `0${minutes}`.slice(-2);
        secondsText.textContent = `0${seconds}`.slice(-2);

        } else {
            return;
        }
    }
    }
    countDown("Fri Mar 07 2022 09:25:59 GMT+0700 (Indochina Time)");
    // setInterval(function(){
    //     
    // },1000);
});