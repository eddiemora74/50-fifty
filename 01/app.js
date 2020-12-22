const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    if (panel.classList.contains("active")) return;
    document.querySelector(".panel.active").classList.remove("active");
    panel.classList.add("active");
  });
});
