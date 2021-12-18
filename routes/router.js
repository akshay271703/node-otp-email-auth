const router = require('express').Router();

router.use('/auth', require('./auth.route'));

module.exports = router;
