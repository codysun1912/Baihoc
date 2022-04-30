window.addEventListener("load" , function(){
    const days = document.querySelector(".days");
    const hours = document.querySelector(".hours");
    const minutes = document.querySelector(".minutes");
    const seconds = document.querySelector(".seconds");
    // Fri Mar 06 2022 08:54:11 GMT+0700 (Indochina Time)
    function countDown(date){
        const now = new Date();
        const startTime = now.getTime();
        const endTime = new Date(date).getTime();

        const timeRemaining = parseInt((endTime - startTime) / 1000);
        console.log(timeRemaining);
    }
    countDown("Fri Mar 06 2022 08:54:11 GMT+0700 (Indochina Time)")

})