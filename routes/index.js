const router = require('express').Router()
const addMovie = require('../db/db_utils.js').addMovie;
const grabIMDB = require('./grabIMDB.js');

router.get('/', (req, res) => {
  if(!req.cookies.userid){
    res.redirect('/login')
  } else {
    res.render('index', {movieResult: [{title:"", image: ""}]})
  }
})

router.post('/', (req, res) => {
  const search = req.body.search;
  addMovie(req.cookies.userid, search, new Date());
  grabIMDB(search)
  .then((movieResult) => {
    res.send(movieResult)
  })
  .catch((err) => {
    console.log(err);
  });
})

module.exports = router;
