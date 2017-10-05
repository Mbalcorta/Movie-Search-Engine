'use strict'
const router = require('express').Router()

router.get('/', (req, res) => {
  if(req.cookies.userid){
    res.redirect('/')
  } else {
    res.redirect('signup')
  }
})

module.exports = router;
