(() => {
  const API_KEY = "7f6d002c07aad067d77625f3b57d289f";
  const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
  const IMAGE_PATH = "https://image.tmdb.org/t/p/w500";
  const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
  const mainContainer = document.getElementById("main");
  const search = document.getElementById("search");
  const form = document.getElementById("form");

  async function getMovies(type = "default", query = "") {
    const URL = type === "default" ? API_URL : SEARCH_URL + query;
    const response = await fetch(URL, {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await response.json();
    return data;
  }

  function movieEntryBuilder(movieData) {
    const { poster_path, original_title, vote_average, overview } = movieData;
    return `<div class="movie">
    <img
      src="${
        poster_path
          ? IMAGE_PATH + poster_path
          : "https://skriber.tv/images/placeholders/poster.png"
      }"
      alt="${original_title}"
    />
    <div class="movie-info">
      <h3>${original_title}</h3>
      <span class="${ratingColor(vote_average)}">${vote_average}</span>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
  </div>`;
  }

  function ratingColor(rating) {
    if (rating > 8) {
      return "green";
    } else if (rating > 6) {
      return "orange";
    } else {
      return "red";
    }
  }

  window.addEventListener("DOMContentLoaded", async () => {
    const movieData = await getMovies();
    const movieMarkup = movieData.results
      .map((movie) => movieEntryBuilder(movie))
      .join("");
    mainContainer.innerHTML = movieMarkup;
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const movieData =
      search.value !== ""
        ? await getMovies("search", search.value)
        : await getMovies();
    const movieMarkup = movieData.results
      .map((movie) => movieEntryBuilder(movie))
      .join("");
    mainContainer.innerHTML = movieMarkup;
  });
})();
