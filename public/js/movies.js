const fetch = require('node-fetch');
const movieDbApiKey = process.env.MOVIE_DB_API_KEY;

// Get trending movies
const trendingMoviesApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=${movieDbApiKey}`;

// Get trending tv shows
const trendingTvApi = `https://api.themoviedb.org/3/trending/tv/day?api_key=${movieDbApiKey}`;



const search = '';

// Search tv show by title
let tvSearchApi = `https://api.themoviedb.org/3/search/movie?api_key=${movieDbApiKey}&query=`;


module.exports = {
  fetchTrendingMovies: async () => {
    const response = await fetch(trendingMoviesApi);
    const movies = await response.json();
    return movies;
  },

  fetchTrendingTVshows: async () => {
    const response = await fetch(trendingTvApi);
    const TV = await response.json();
    return TV;
  },

  fetchMoviesSearch: async (search) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${movieDbApiKey}&query=` + search
    const response = await fetch(url);
    const movies = await response.json();
    return movies;
  },

  fetchTVSearch: async (search) => {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${movieDbApiKey}&query=` + search
    const response = await fetch(url);
    const movies = await response.json();
    return movies;
  },


};
