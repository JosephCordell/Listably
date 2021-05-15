const fetch = require('node-fetch');
const movieDbApiKey = process.env.MOVIE_DB_API_KEY;

// Get trending movies
const trendingMoviesApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=${movieDbApiKey}`;

// Get trending tv shows
const trendingTvApi = `https://api.themoviedb.org/3/trending/tv/day?api_key=${movieDbApiKey}`;


/* const searchButtonEl = document.getElementById('search-button');
const dropdownEl = document.querySelector('.search-dropdown');
let movies = false;
let tvshows = false; */


/* function submitSearch(event) {
  event.preventDefault();
  let url;
  if (movies){
    url = `https://api.themoviedb.org/3/search/movie?api_key=${movieDbApiKey}&query=`;
  } else if (tvshows){
    url = `https://api.themoviedb.org/3/search/tv?api_key=${movieDbApiKey}&query=`;
  }
  const searchString = document.querySelector('.form-control').value;
  if (!searchString) {
    console.error('You need to input text!');
    return;
  }

  const movieSearchApi = (url + searchString);
  console.log(url + searchString);

} */
/* searchButtonEl.addEventListener('click', submitSearch);
dropdownEl.addEventListener('change', function () {
  if (this.value == 1) {
    movies = true;
    tvshows = false;
  } else {
    movies = false;
    tvshows = true;
  }
}) */

const search = '';

// Search movie by title
let movieSearchApi = `https://api.themoviedb.org/3/search/movie?api_key=${movieDbApiKey}&query=`;

// Search tv show by title
let tvSearchApi = `https://api.themoviedb.org/3/search/movie?api_key=${movieDbApiKey}&query=`;


module.exports = {
  fetchTrendingMovies: async () => {
    const response = await fetch(trendingMoviesApi);
    const movies = await response.json();
    /* console.log(movies); */
    return movies;
  },

  fetchMoviesSearch: async (search) => {
    movieSearchApi = movieSearchApi + search
    const response = await fetch(movieSearchApi);
    const movies = await response.json();
    console.log(movies);
    return movies;
  },

  
};
