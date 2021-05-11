const router = require('express').Router();
const listRoutes = require('./listRoutes');
const movieRoutes = require('./movieRoutes');
const userRoutes = require('./userRoutes');

router.use('/lists', listRoutes);
router.use('/movies', movieRoutes);
router.use('/users', userRoutes);

module.exports = router;
