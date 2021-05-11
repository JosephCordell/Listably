const router = require('express').Router();
// We'll use Auth later when we add users
//const withAuth = require('../utils/auth');
// This is what we'll use to get API data
// const fetch = require('node-fetch');
require('dotenv').config();

router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/results-movies', async (req, res) => {
  try {
    res.render('results-movies');
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
