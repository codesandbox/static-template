let navBehavior = document.querySelector(".nav"); // only for scrolling behavior
let page = 1; //default page
const btnPrevious = document.getElementById("btnPrevious");
const btnNext = document.getElementById("btnNext");

window.addEventListener("DOMContentLoaded", () => {
  movieLoader();
});

// setting css style at scroll behavior
window.addEventListener("scroll", (e) => {
  if (scrollY > 60) {
    navBehavior.classList.add("navScroll-behavior", "navLink-scroll");
  } else if (scrollY > 150) {
    navBehavior.classList.add("navScroll-behavior", "navLink-scroll");
    // btnTop.classList.add('toTop-scroll')
  } else {
    navBehavior.classList.remove("navScroll-behavior", "navLink-scroll");
    // btnTop.classList.remove('toTop-scroll')
  }
});

const movieLoader = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c92b493e6a9bec4b91227c6409439105&language=es-AR&page=${page}`
    );
    console.log(response);

    // status response validations
    if (response.status === 200) {
      const data = await response.json();
      console.log(data.results);

      let movies = "";
      data.results.forEach((movie) => {
        movies = movies += `
          <div class="movieCard animate__animated animate__fadeInLeft">
            <img class="movie-poster" src="https://image.tmdb.org/t/p/w400/${movie.poster_path}">
            <h3 class="movie-title">${movie.title}</h3>
            <span class="movie-average">${movie.vote_average} <span class="fas fa-star"></span></span>
            <span class="movie-date">fecha de lanzamiento: ${movie.release_date}</span>
            <button type="button" id="id${movie.id}" data-id="${movie.id}" class="btn btn-overview" data-bs-toggle="modal" data-bs-target="#modalOverview">
              Ver Resumen
            </button>
          </div>
          `;
      });
      document.getElementById("movie-container").innerHTML = movies;
    } else if (response.status === 401) {
      console.error(
        "La petición (request) no ha sido ejecutada porque carece de credenciales válidas de autenticación para el recurso solicitado."
      );
    } else if (response.status === 404) {
      console.error("la pelicula que buscas no existe!");
    } else {
      console.error("hubo un error inesperado!");
    }
  } catch (err) {
    console.log(err);
  } finally {
    console.log("API loaded succesfull");
  }
};

// pagination
btnNext.addEventListener("click", () => {
  if (page < 1000) {
    page += 1;
    movieLoader();
  }
});

btnPrevious.addEventListener("click", () => {
  if (page > 1) {
    page -= 1;
    movieLoader();
  }
});
