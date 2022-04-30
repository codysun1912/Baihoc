const cardsArray = [
    {
      name: "fire",
      img: "img/fire.png",
    },
    {
      name: "youtube",
      img: "img/youtube.png",
    },
    {
      name: "flash",
      img: "img/flash.png",
    },
    {
      name: "gift",
      img: "img/gift.png",
    },
    {
      name: "tron",
      img: "img/tron.png",
    },
    {
      name: "ufo",
      img: "img/ufo.png",
    },
    {
      name: "plant",
      img: "img/plant.png",
    },
    {
      name: "burger",
      img: "img/burger.png",
    },
  ];

  const grid = document.querySelector(".grid");
  let count = 0;
  let previousClick;
  let firstGuess = "";
  let secondGuess = "";
  const delay = 1000;
  const cardArrayMerge = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());
  cardArrayMerge.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-name" , item.name);
      const front = document.createElement("div");
      front.classList.add("front");
      const back = document.createElement("div");
      back.classList.add("back");
      back.style.backgroundImage = `url(${item.img})`;
      card.appendChild(front);
      card.appendChild(back);
      grid.appendChild(card);
  });
  function matchCard(){
      const selected = document.querySelectorAll(".selected");
      [...selected].forEach(item => item.classList.add("matched"));

  }
  function resetGuess(){
      count = 0;
      firstGuess = "";
      secondGuess = "";
      const selected = document.querySelectorAll(".selected");
      [...selected].forEach(item => item.classList.remove("selected"));
  }

  grid.addEventListener("click", function(e){
      const clicked = e.target;
      if (clicked.nodeName === "SECTION" || previousClick === clicked){
          return;
      } 
      if (count < 2){
          count ++;
          if (count === 1 ){
              firstGuess = clicked.parentNode.dataset.name;
              clicked.classList.add("selected");
          } else {
              secondGuess = clicked.dataset.name;
              clicked.classList.add("selected");
          }
          if (firstGuess !== "" && secondGuess !== ""){
              if(firstGuess === secondGuess){
                 setTimeout(matchCard , delay);
                 setTimeout(resetGuess , delay);

              } else {
                setTimeout(resetGuess , delay);
              }
          }
      
      }
      previousClick = clicked;

  });