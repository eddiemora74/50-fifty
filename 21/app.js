(() => {
  const fillBox = document.querySelector(".fill");
  const boxes = document.querySelectorAll(".empty");
  let dragged;

  document.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  document.addEventListener("dragenter", (e) => {
    if (e.target.classList.contains("empty")) e.target.classList.add("hovered");
  });

  document.addEventListener("dragleave", (e) => {
    if (e.target.classList.contains("empty"))
      e.target.classList.remove("hovered");
  });

  document.addEventListener("dragstart", (e) => {
    dragged = e.target;
    e.target.classList.add("hold");
    setTimeout(() => e.target.classList.add("invisible"), 0);
  });

  document.addEventListener("dragend", (e) => {
    e.target.style.opacity = "";
  });

  document.addEventListener("drop", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("empty")) {
      e.target.appendChild(dragged);
      e.target.classList.remove("hovered");
    } else {
      draggedParent.appendChild(dragged);
    }
    dragged.classList.remove("hold");
    dragged.classList.remove("invisible");
  });

  window.addEventListener("DOMContentLoaded", async () => {
    const giphyResponse = await fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=lXW84n2wja9LV4SUQBGV19PNNXLabLrE&limit=1&rating=r",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const { data: giphyData } = await giphyResponse.json();
    fillBox.style.backgroundImage = `url('${giphyData[0].images.downsized.url}')`;
  });
})();
