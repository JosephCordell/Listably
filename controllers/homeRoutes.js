require('dotenv').config();
const router = require('express').Router();
const {fetchTrendingMovies} = require('./api/movies');

// We'll use Auth later when we add users
//const withAuth = require('../utils/auth');
// This is what we'll use to get API data
// const fetch = require('node-fetch');


router.get('/results-movies', async (req, res) => {
  try {
    const movies = await fetchTrendingMovies();
    // res.json(movies);
    res.render('results-movies', {movies: movies.results});
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

router.get('/results-tvshows', async (req, res) => {
  try {
    res.render('results-tvshows');
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
router.get('*', async (req, res) => {
  try {
    res.render('404');
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

module.exports = router;
