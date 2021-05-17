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
      id: req.session.name,
      loggedIn: req.session.logged_in
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
      id: req.session.id,
      loggedIn: req.session.logged_in
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
      id: req.session.id,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/user');
      return;
    }
    res.render('login', {
      id: req.session.id,
      loggedIn: req.session.logged_in
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
      id: req.session.id,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', (req, res) => {
  try {
    res.render('homepage', {
      id: req.session.id,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/trending-tvshows', async (req, res) => {
  try {
    const tv = await fetchTrendingTVshows()
    res.render('trending-tvshows', {
      tv: tv.results,
      id: req.session.id,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/user', withAuth, (req, res) => {
  try {
    res.render('user', {
      id: req.session.id,
      loggedIn: req.session.logged_in
    });
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
