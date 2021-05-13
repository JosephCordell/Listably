const fetch = require('node-fetch');
require('dotenv').config();
const movieDbApiKey = process.env.MOVIE_DB_API_KEY;

// Get trending movies
const trendingMoviesApi = `https://api.themoviedb.org/3/trending/movie/day?api_key=${movieDbApiKey}`;

module.exports = {fetchTrendingMovies: async() => {
  console.log(movieDbApiKey); 
  const response = await fetch(trendingMoviesApi);
  const movies = response.json();
  console.log(movies);
  return movies;
}};