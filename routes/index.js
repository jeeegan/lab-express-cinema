const express = require('express');
const router = express.Router();

const Movie = require('../models/Movies');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(allTheMoviesFromDB => {
      res.render('movies', {movies: allTheMoviesFromDB})
    })
    .catch(error => {
      console.log('Error while getting the movies from the DB: ', error);
    })
});

router.get('/movie/:movieId', (req, res, next) => {
  Movie.findById(req.params.movieId)
    .then(movieResult => {
      res.render('movie', {movie: movieResult})
    })
    .catch(e => console.log(e))
});

module.exports = router;
