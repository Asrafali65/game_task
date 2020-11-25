window.addEventListener("DOMContentLoaded", () => {
  const car = document.querySelector(".car");
  const petrolPumps = document.querySelector(".petrol__pumps");
  const result = document.querySelector(".result");
  const noFuel = document.querySelector(".no__fuel");
  const pumpGenerated = document.querySelector(".pump__generated");
  const retry = document.querySelector(".retry");
  const playAgain = document.querySelector(".play");
  const startBtn = document.querySelector(".start__btn");
  const start = document.querySelector(".start");
  const gameOver = document.querySelector(".game__over");

  const end = 100;
  let petrol = 30;
  let steps = 0;

  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" && steps < end) {
      const randomSteps = Math.floor(Math.random() * 6);
      steps += randomSteps;
      petrol -= randomSteps;
      if (petrol > 0) {
        car.style.transform = `translateX(${steps}vw)`;
        currentPumpPosition.forEach((pos) => {
          if (steps === pos) {
            petrol += 20;
          }
        });

        // result
        const resultList = document.createElement("li");
        pumpGenerated.innerHTML = `Pump Generated ${currentPumpPosition}`;
        resultList.innerText = `Car at ${steps} and remaining petrol ${petrol}`;
        result.appendChild(resultList);
      } else {
        noFuel.style.display = "flex";
      }
    } else if (e.key === "ArrowUp" && steps >= end) {
      gameOver.style.display = "block";
    }
  });

  //   retry
  retry.addEventListener("click", () => {
    petrol = 30;
    steps = 0;
    car.style.transform = `translateX(0vw)`;
    result.innerHTML = "";
    noFuel.style.display = "none";
  });

  //   start
  startBtn.addEventListener("click", () => {
    start.style.display = "none";
  });

  let tempPosition = 0;
  let currentPumpPosition = [];

  for (i = 0; i < 5; i++) {
    const position = 33;
    const randomPump = Math.floor(Math.random() * position + tempPosition);
    tempPosition = tempPosition + position;
    currentPumpPosition.push(randomPump);

    const image = document.createElement("img");
    image.setAttribute("src", "./images/petrol.png");
    image.setAttribute("class", "pump");
    image.setAttribute("width", "100");
    image.setAttribute("style", `transform:translateX(${randomPump}vw)`);
    petrolPumps.appendChild(image);
  }
});
