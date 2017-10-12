const cheerio = require('cheerio');
const rp = require('request-promise');

// challenge from Bonnie - figure out a way to reconfigure our request-promise function
// so that the parts it has in common are modularized into their own function.
// one suggestion was waiting to map the results until the end.

const grabIMDB = function (search) {
  const options = {
    uri: `http://www.imdb.com/find?ref_=nv_sr_fn&q=${search}&s=all`,
    transform: function (body) {
      return cheerio.load(body);
    }
  };

  return rp (options)
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
    return movieResult;
  })
}

module.exports = grabIMDB;
