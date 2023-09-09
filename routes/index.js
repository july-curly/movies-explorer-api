const express = require('express');

const router = express.Router();
const NotFoundError = require('../errors/NotFoundError');

const auth = require('../middlewares/auth');
const { login } = require('../controllers/userController');
const { createUser } = require('../controllers/userController');
const { validateSignup, validateSignin } = require('../middlewares/validation');

router.post('/signup', validateSignup, createUser);
router.post('/signin', validateSignin, login);

router.use(auth);

router.use('/users', require('./userRoutes'));
router.use('/movies', require('./movieRoutes'));

router.use('*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;
