const router = require('express').Router()
const addUser = require('./../db/db_utils.js').addUser;
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  addUser(email, password);
  res.redirect('/');
})

module.exports = router;
