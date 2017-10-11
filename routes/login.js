const router = require('express').Router()
const verifyUser = require('./../db/db_utils.js').verifyUser;
const bcrypt = require('bcrypt')

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
      bcrypt.compare(password, data.password)
      .then((result)=>{
        if(result){
          res.cookie('userid', data.userid);
          res.redirect('/');
        }  else {
          res.render('login', {text: 'Incorrect email or password'});
          }
      })
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router;
