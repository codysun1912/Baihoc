const buttonMinus = document.querySelector(".counter-descrease");
const buttonPlus = document.querySelector(".counter-increase");
const counter = document.querySelector(".counter-number");

const counterValue = parseInt(counter.textContent);

buttonPlus.addEventListener("click",function(){
    counterValue++;

})
