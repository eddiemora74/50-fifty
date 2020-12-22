const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive =
    currentActive > circles.length ? circles.length : currentActive + 1;
  update();
});

prev.addEventListener("click", () => {
  currentActive = currentActive === 1 ? 1 : currentActive - 1;
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  if (currentActive === circles.length) {
    next.setAttribute("disabled", true);
  } else if (currentActive === 1) {
    prev.setAttribute("disabled", true);
  } else {
    next.removeAttribute("disabled");
    prev.removeAttribute("disabled");
  }

  const actives = document.querySelectorAll(".active");

  const percentage = ((actives.length - 1) / (circles.length - 1)) * 100;
  progress.style.width = percentage + "%";
}
