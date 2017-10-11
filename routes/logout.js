const router = require('express').Router()

router.post('/logout', (req, res) => {
  res.clearCookie('userid')
  res.redirect('/login')
})

module.exports = router;