(() => {
  const smallCups = document.querySelectorAll(".cup-small");
  const bigCup = document.querySelector(".big-cup");
  const liters = document.getElementById("liters");
  const percentage = document.getElementById("percentage");
  const remained = document.getElementById("remained");

  function highlightCups(idx) {
    if (idx + 1 === document.querySelectorAll(".full").length) {
      smallCups[idx].classList.remove("full");

      const percentageNumber = (idx / 8) * 100;
      percentage.style.height = percentageNumber + "%";
      percentage.innerHTML = percentageNumber ? (idx / 8) * 100 + "%" : "";

      remained.style.visibility = "visible";
      liters.innerText = 2 - (idx * 250) / 1000 + "L";
      bigCup.style.boxShadow = "none";
    } else {
      smallCups.forEach((cup, index) =>
        index <= idx ? cup.classList.add("full") : cup.classList.remove("full")
      );

      const percentageNumber = ((idx + 1) / 8) * 100;
      percentage.style.height = percentageNumber + "%";
      percentage.innerHTML = percentageNumber + "%";

      if (idx === 7) {
        remained.style.visibility = "hidden";
        remained.style.height = 0;
        bigCup.style.boxShadow = "0 2px 15px gold";
      } else {
        remained.style.visibility = "visible";
        liters.innerText = 2 - ((idx + 1) * 250) / 1000 + "L";
        bigCup.style.boxShadow = "none";
      }
    }
  }

  smallCups.forEach((cup, idx) => {
    cup.addEventListener("click", () => highlightCups(idx));
  });

  window.addEventListener("DOMContentLoaded", () => {
    liters.innerText = "2L";
  });
})();
