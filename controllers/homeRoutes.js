require('dotenv').config();
const router = require('express').Router();
const {fetchTrendingMovies, fetchMoviesSearch, fetchTrendingTVshows, fetchTVSearch} = require('../public/js/movies');
const withAuth = require('../utils/auth');

router.get('/trending-movies', async (req, res) => {
  try {
    const movies = await fetchTrendingMovies();
    // res.json(movies);
    res.render('trending-movies', {
      movies: movies.results,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/movie-results/:id', async (req, res) => {
  try {
    const movies = await fetchMoviesSearch(req.params.id);
    res.render('movie-results', {
      movies: movies.results,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/tvshows-results/:id', async (req, res) => {
  try {
    const tv = await fetchTVSearch(req.params.id);
    res.render('tvshows-results', {
      tv: tv.results,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/user');
      return;
    }
    res.render('login', {
      loggedIn: req.user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/signup', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/user');
      return;
    }
    res.render('signup', {
      loggedIn: req.user,
      logged_in: req.session.logged_in
    });
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
    res.render('trending-tvshows', {
      tv: tv.results,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/user', withAuth, async (req, res) => {
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
