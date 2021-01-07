(() => {
  const sliders = document.querySelectorAll(".slide");
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");
  const body = document.querySelector("body");
  let activeSlider = 0;

  function setActiveSlider(num) {
    const maxIndex = sliders.length - 1;
    if (num === -1) {
      activeSlider = activeSlider === 0 ? maxIndex : activeSlider - 1;
    } else {
      activeSlider = activeSlider === maxIndex ? 0 : activeSlider + 1;
    }
    updateDom();
  }

  function updateDom() {
    sliders.forEach((slider) => slider.classList.remove("active"));
    sliders[activeSlider].classList.add("active");
    body.style.backgroundImage = `url('assets/image${activeSlider + 1}.jpg')`;
  }

  leftButton.addEventListener("click", () => setActiveSlider(-1));
  rightButton.addEventListener("click", () => setActiveSlider(1));
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      leftButton.click();
    } else if (e.key === "ArrowRight") {
      rightButton.click();
    }
  });
  window.addEventListener("DOMContentLoaded", () => updateDom());
})();
