(() => {
  const sliders = document.querySelectorAll(".slide");
  const leftButton = document.getElementById("left");
  const rightButton = document.getElementById("right");
  const body = document.querySelector("body");
  let activeSlider = 0;

  function changeSlider(buttonId) {
    if (buttonId === "left") {
      setActiveSlider(1);
    } else {
      setActiveSlider(-1);
    }
    updateDom();
  }

  function setActiveSlider(num) {
    const maxIndex = sliders.length - 1;
    if (num === -1) {
      activeSlider = activeSlider === 0 ? maxIndex : activeSlider - 1;
    } else {
      activeSlider = activeSlider === maxIndex ? 0 : activeSlider + 1;
    }
  }

  function updateDom() {
    sliders.forEach((slider) => slider.classList.remove("active"));
    sliders[activeSlider].classList.add("active");
    body.style.backgroundImage = `url('assets/image${activeSlider + 1}.jpg')`;
  }

  leftButton.addEventListener("click", () => changeSlider("left"));
  rightButton.addEventListener("click", () => changeSlider("right"));
  window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      changeSlider("left");
    } else if (e.key === "ArrowRight") {
      changeSlider("right");
    }
  });
  window.addEventListener("DOMContentLoaded", () => updateDom());
})();
