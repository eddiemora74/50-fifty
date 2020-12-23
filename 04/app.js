const search = document.querySelector(".search");
const input = document.querySelector(".search .input");
const button = document.querySelector(".search .btn");

button.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

input.addEventListener("focusout", () => {
  input.value = "";
  search.classList.toggle("active");
});
