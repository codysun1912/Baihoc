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
  const cardArrayMerge = cardsArray.concat(cardsArray).sort(() => 0.5 - Math.random());
  cardArrayMerge.forEach(item => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.setAttribute("data-name" , item.name);
      card.style.backgroundImage = `url(${item.img})`;
      grid.appendChild(card);
  });

  grid.addEventListener("click", function(e){
      const clicked = e.target;
      if (clicked.nodeName === "SECTION")

  });