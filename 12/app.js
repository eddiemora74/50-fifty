(() => {
  document.querySelectorAll(".faq").forEach((faq) => {
    faq
      .querySelector(".faq-toggle")
      .addEventListener("click", () => faq.classList.toggle("active"));
  });
})();
