const fetch = require('node-fetch');
const movieDbApiKey = process.env.MOVIE_DB_API_KEY;

// Get trending movies
const trendingMoviesApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=${movieDbApiKey}`;

// Get trending tv shows
const trendingTvApi = `https://api.themoviedb.org/3/trending/tv/day?api_key=${movieDbApiKey}`;

const search = '';

// Search movie by title
const movieSearchApi = `https://api.themoviedb.org/3/search/movie?api_key=${movieDbApiKey}&query=${search}`;

// Search tv show by title
const tvSearchApi = `https://api.themoviedb.org/3/search/movie?api_key=${movieDbApiKey}&query=${search}`;


module.exports = {
  fetchTrendingMovies: async () => {
    const response = await fetch(trendingMoviesApi);
    const movies = await response.json();
    console.log(movies);
    return movies;
  },
};
