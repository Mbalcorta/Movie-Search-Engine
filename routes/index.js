const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index.pug', {title: 'home'})
})

module.exports = router;
