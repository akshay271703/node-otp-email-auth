const router = require('express').Router();
const authController = require('../controllers/auth.controller');

router.post('/', authController.signUpUser);
router.post('/verify', authController.verifyEmail);

module.exports = router;
