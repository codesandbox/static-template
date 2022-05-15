// The backend url
const moviesBaseUrl = "https://mckinsey-movies.herokuapp.com";
// const moviesBaseUrl = "http://127.0.0.1:3000";

// TODO: Add your id (in the 'createdBy' field) into the empty quotes
// if you only want to list the movies you added.
//
// For Example:
// const userId = "6224ae0f68e4ca0016dc166a";
//
// const userId = "622624857de368001652ecec";

// elements
const result = document.getElementById("result");
const fetchButton = document.getElementById("fetch-button");

let movieList;
let loadingMessage = document.createElement("span");
loadingMessage.innerHTML = "...loading";

/**
 * Function to fetch movies
 */
const fetchMovies = async () => {
  // Clear the list of movies
  if (movieList !== undefined) {
    result.removeChild(movieList);
  }

  // Show the text ...loading
  result.innerHTML = "...loading";

  const response = await fetch(moviesBaseUrl + "/api" + "/movies");
  const data = await response.json();
  console.log({ data });

  movieList = document.createElement("div");

  if (Array.isArray(data)) {
    movieList.classList.add("movie-list");
    data.map((movie) => {
      // if (userId === "" || (userId !== "" && movie.createdBy == userId)) {
      let movieItem = document.createElement("div");
      movieItem.classList.add("movie-item");
      movieItem.innerHTML = movie.title + " 🎬";
      movieList.appendChild(movieItem);
      // }
    });
  }

  if (loadingMessage && loadingMessage.parentNode) {
    loadingMessage.parentNode.removeChild(loadingMessage);
  }
  result.innerHTML = "";

  result.appendChild(movieList);
};

/**
 * Waiting for a click
 */
fetchButton.addEventListener("click", () => {
  fetchMovies();
});
