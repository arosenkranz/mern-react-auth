const router = require('express').Router();
const userRoutes = require('./users');

// API routes
router.use('/users', userRoutes);

module.exports = router;
