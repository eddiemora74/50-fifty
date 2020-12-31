const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
window.addEventListener("DOMContentLoaded", checkBoxes);

function checkBoxes() {
  const triggerPoint = (window.innerHeight / 6) * 5;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerPoint) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
