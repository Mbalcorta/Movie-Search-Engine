'use strict'
const router = require('express').Router()
const cheerio = require('cheerio');
const rp = require('request-promise');

router.get('/', (req, res) => {
  if(!req.cookies.userid){
    res.redirect('/login')
  } else {
    res.render('index');
  }
})

router.post('/', (req, res) => {
  const search = req.body.search;
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
    console.log(titles);
    console.log(images);
})
.catch(function (err) {
  console.log(err);
});
})





module.exports = router;
