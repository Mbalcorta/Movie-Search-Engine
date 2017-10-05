'use strict'
const router = require('express').Router()
const cheerio = require('cheerio');
const rp = require('request-promise');

router.get('/', (req, res) => {
  if(req.cookies.userid){
    res.redirect('/')
  } else {
    res.redirect('signup')
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
    console.log($('.findList')
    .first()
    .find('.result_text')
    .map((index, element) => {
      return $(element).text().trim()
    })
    .get()
  )
})
.catch(function (err) {
  console.log(err);
});
})





module.exports = router;
