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

        const timeRemaining = parseInt((endTime - startTime) / 1000);
        
        days = parseInt(timeRemaining /86400);
    }
    countDown("Fri Mar 06 2022 08:54:11 GMT+0700 (Indochina Time)");

})