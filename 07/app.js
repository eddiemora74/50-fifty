const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
  left.querySelector(".hovered-content").classList.add("active");
  left.querySelector(".collapsed-content").classList.remove("active");
});

left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
  left.querySelector(".hovered-content").classList.remove("active");
  left.querySelector(".collapsed-content").classList.add("active");
});

right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
  right.querySelector(".hovered-content").classList.add("active");
  right.querySelector(".collapsed-content").classList.remove("active");
});

right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
  right.querySelector(".hovered-content").classList.remove("active");
  right.querySelector(".collapsed-content").classList.add("active");
});
