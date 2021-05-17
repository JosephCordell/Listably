const router = require('express').Router();
const mediaRoutes = require('./mediaRoutes');
const userRoutes = require('./userRoutes');

router.use('/media', mediaRoutes);
router.use('/users', userRoutes);

module.exports = router;
