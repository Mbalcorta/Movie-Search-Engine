const router = require('express').Router()
const addUser = require('./../db/db_utils.js').addUser;
const bcrypt = require('bcrypt')

router.get('/signup', (req, res) => {
  if(req.cookies.userid){
    res.redirect('/')
  } else {
    res.render('signup')
  }
})

router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  const saltRounds = 10
  bcrypt.hash(password, saltRounds)
  .then((hash) => {
    addUser(email, hash)
    .then((data) => {
      res.cookie('userid', data.userid);
      res.redirect('/');
    })
  })
  .catch(err => {
    console.log('Failed to add user')
    res.end()
  })
})

module.exports = router;
