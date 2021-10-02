var express = require('express');
var router = express.Router();

const ctrlAbout = require('../controllers/about');
const ctrlMovie = require('../controllers/movie');

router.get('/', ctrlAbout.homePage);
router.get('/about', ctrlAbout.aboutPage);
router.get('/list', ctrlMovie.listMovies);
router.get('/display', ctrlMovie.displayMovie);

module.exports = router;
