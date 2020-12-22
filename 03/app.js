document.getElementById("close").addEventListener("click", () => {
  document.querySelector(".container").classList.remove("show-nav");
  document.body.classList.remove("fixed");
});

document.getElementById("open").addEventListener("click", () => {
  document.querySelector(".container").classList.add("show-nav");
  document.body.classList.add("fixed");
});
