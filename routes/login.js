const router = require('express').Router()

router.get('/login', (req, res) => {
  res.render('login.pug')
})

module.exports = router;
