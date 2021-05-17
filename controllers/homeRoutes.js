require('dotenv').config();
const router = require('express').Router();
const { fetchTrendingMovies, fetchMoviesSearch, fetchTrendingTVshows, fetchTVSearch } = require('../public/js/movies');
const withAuth = require('../utils/auth');
const { User, Media } = require('../models');

const posterPath = (ArrIn) => {
    for (let i = 0; i < ArrIn.results.length; i++) {
        if (!ArrIn.results[i].poster_path) {
            ArrIn.results[i].poster_path = 'https://via.placeholder.com/129x182';
        } else {
            ArrIn.results[i].poster_path = `https://image.tmdb.org/t/p/w200${ArrIn.results[i].poster_path}`;
        }
    }
    return ArrIn.results;
};

router.get('/trending-movies', async (req, res) => {
    try {
        const movies = await fetchTrendingMovies();
        // res.json(movies);
        res.render('trending-movies', {
            movies: posterPath(movies),
            id: req.session.user_id,
            loggedIn: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/movie-results/:id', async (req, res) => {
    try {
        const movies = await fetchMoviesSearch(req.params.id);
        res.render('movie-results', {
            movies: posterPath(movies),
            id: req.session.user_id,
            loggedIn: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/tvshows-results/:id', async (req, res) => {
    try {
        const tv = await fetchTVSearch(req.params.id);
        res.render('tvshows-results', {
            tv: posterPath(tv),
            id: req.session.user_id,
            loggedIn: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/trending-tvshows', async (req, res) => {
    try {
        const tv = await fetchTrendingTVshows();
        res.render('trending-tvshows', {
            tv: posterPath(tv),
            id: req.session.user_id,
            loggedIn: req.session.logged_in,
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
            id: req.session.user_id,
            loggedIn: req.session.logged_in,
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
            id: req.session.user_id,
            loggedIn: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', (req, res) => {
    try {
        res.render('homepage', {
            id: req.session.user_id,
            loggedIn: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/user', withAuth, async (req, res) => {
    try {
        let user = await User.findByPk(req.session.user_id);
        let mediaArr = [];
        if (!user.todo) {
            // If media is emtpy prompt user to go select a movie In handlebar section
        } else {
            let bricks = JSON.parse(user.todo)
            

            for (let i = 0; i < bricks.length; i++) {
                todoArr = bricks[i]
                let almost = await Media.findByPk(todoArr[0]);
                
                let soClose = {}
                
                soClose[`todo${todoArr[1]}`] = true;
                mediaArr.push({
                    mediatype: almost.mediatype,
                    poster_path: almost.poster_path,
                    title: almost.title,
                    ...soClose
                });
            }
        }
        res.render('user', {
            id: req.session.user_id,
            loggedIn: req.session.logged_in,
            mediaArr
        });
    } catch (err) {
        console.log(err);
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
