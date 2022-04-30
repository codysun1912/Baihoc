window.addEventListener("load" , function(){
    const daysText = document.querySelector(".days");
    const hoursText = document.querySelector(".hours");
    const minutesText = document.querySelector(".minutes");
    const secondsText = document.querySelector(".seconds");
    // Fri Mar 06 2022 08:54:11 GMT+0700 (Indochina Time)
    function countDown(date){
        let days , hours , minutes , seconds;
        const now = new Date();
        const startTime = now.getTime();
        const endTime = new Date(date).getTime();

        let timeRemaining = parseInt((endTime - startTime) / 1000);

        days = parseInt(timeRemaining /86400);
        timeRemaining = timeRemaining % 86400;
        hours = parseInt(timeRemaining/3600);
        timeRemaining = timeRemaining % 3600;
        minutes = parseInt(timeRemaining / 60);
        daysText.textContent = days;
        hoursText.textContent = hours;

       

        days = parseInt(timeRemaining /86400);
        daysText.textContent = days;

        days = parseInt(timeRemaining /86400);
        daysText.textContent = days;

    }
    countDown("Fri Mar 10 2022 08:54:11 GMT+0700 (Indochina Time)");

});