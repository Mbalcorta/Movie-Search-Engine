const router = require('express').Router()

router.get('/login', (req, res) => {
  res.render('login.pug', {title: 'login'})
})

module.exports = router;
