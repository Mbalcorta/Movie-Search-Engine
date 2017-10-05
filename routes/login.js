const router = require('express').Router()
const verifyUser = require('./../db/db_utils.js').verifyUser;

router.get('/login', (req, res) => {
  if(req.cookies.userid){
    res.redirect('/')
  } else {
    res.render('login')
  }
})

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  verifyUser(email)
  .then(data => {
    if(data.password === password) {
     res.cookie('userid', data.userid);
     res.redirect('/');
    }
    else {
      throw new Error('incorrect password');
    }
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router;
