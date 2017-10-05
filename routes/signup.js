const router = require('express').Router()
const addUser = require('./../db/db_utils.js').addUser;

router.get('/signup', (req, res) => {
  if(req.cookies.userid){
    res.redirect('/')
  } else {
    res.render('signup')
  }
})

router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  addUser(email, password)
  .then(data => {
    res.cookie('userid', data.userid);
    res.redirect('/');
  })
  .catch(err => {
    console.log('Failed to add user')
    res.end()
  })

})

module.exports = router;
