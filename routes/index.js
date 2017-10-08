'use strict'
const router = require('express').Router()
const cheerio = require('cheerio');
const rp = require('request-promise');
const addMovie = require('../db/db_utils.js').addMovie;

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
  const options = {
    uri: `http://www.imdb.com/find?ref_=nv_sr_fn&q=${search}&s=all`,
    transform: function (body) {
      return cheerio.load(body);
    }
  };

  rp(options)
  .then(function ($) {
    $('small').remove()
    const titles = $('.findList')
    .first()
    .find('.result_text')
    .map((index, element) => {
      return $(element).text().trim()
    })
    .toArray()
    const images = $('.findList')
    .first()
    .find('.primary_photo a img')
    .map((index, element) => {
      return $(element).attr('src');
    })
    .toArray()
    const movieResult = []
    for (var i = 0; i < titles.length; i++) {
      movieResult.push({
        title: titles[i],
        image: images[i]
      })
    }
    return movieResult
}).then( function(movieResult){
  res.send(movieResult)
})
.catch(function (err) {
  console.log(err);
});
})

module.exports = router;
