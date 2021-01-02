(() => {
  const jokeContainer = document.getElementById("joke");
  const jokeBtn = document.getElementById("jokeBtn");
  const requestConfig = {
    method: "GET",
    headers: {
      "User-Agent": "My GH Profile (https://github.com/eddiemora74)",
      Accept: "application/json",
    },
  };

  async function fetchJoke() {
    const response = await fetch("https://icanhazdadjoke.com", requestConfig);
    const data = await response.json();
    jokeContainer.innerHTML = `<span id="${data.id}">${data.joke}</span>`;
  }

  jokeBtn.addEventListener("click", async () => await fetchJoke());
  window.addEventListener("DOMContentLoaded", async () => await fetchJoke());
})();
