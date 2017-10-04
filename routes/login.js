const router = require('express').Router()
const verifyUser = require('./../db/db_utils.js').verifyUser;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(cookieParser());

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  verifyUser(email)
  .then(data => {
    if(data.password === password) {
     res.cookie(data.userid, 'userid');
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
