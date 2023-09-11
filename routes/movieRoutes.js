const express = require('express');
const { validateСreateMovie, validateDeleteMovie } = require('../middlewares/validation');
const { getMovies, createMovie, deleteCard } = require('../controllers/movieController');

const router = express.Router();

router.get('/', getMovies);
router.post('/', validateСreateMovie, createMovie);
router.delete('/:movieId', validateDeleteMovie, deleteCard);

module.exports = router;
