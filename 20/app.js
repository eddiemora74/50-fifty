(() => {
  const button = document.querySelector("button");
  //const circle = document.querySelector(".circle");
  button.addEventListener("click", (e) => {
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.left = `${e.clientX - e.target.offsetTop}px`;
    circle.style.top = `${e.clientY - e.target.offsetLeft}px`;
    button.insertAdjacentElement("beforeend", circle);
    setTimeout(() => circle.remove(), 500);
  });
})();
