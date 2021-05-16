require('dotenv').config();
const router = require('express').Router();
const {fetchTrendingMovies, fetchMoviesSearch, fetchTrendingTVshows, fetchTVSearch} = require('../public/js/movies');


// We'll use Auth later when we add users
//const withAuth = require('../utils/auth');
// This is what we'll use to get API data
// const fetch = require('node-fetch');


router.get('/trending-movies', async (req, res) => {
  try {
    const movies = await fetchTrendingMovies();
    // res.json(movies);
    res.render('trending-movies', {movies: movies.results});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/movie-results/:id', async (req, res) => {
  try {
    const movies = await fetchMoviesSearch(req.params.id);
    res.render('movie-results', {movies: movies.results});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/tvshows-results/:id', async (req, res) => {
  try {
    const tv = await fetchTVSearch(req.params.id);
    res.render('tvshows-results', {tv: tv.results});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/trending-tvshows', async (req, res) => {
  try {
    const tv = await fetchTrendingTVshows()
    res.render('trending-tvshows', {tv: tv.results});
  } catch (err) {
    res.status(500).json(err);
  }
});



router.get('/user', async (req, res) => {
  try {
    res.render('user');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/sanic', async (req, res) => {
  try {
    res.render('sanic');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('*', async (req, res) => {
  try {
    res.render('404');
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
