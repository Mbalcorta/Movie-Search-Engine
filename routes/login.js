const router = require('express').Router()
const addUser = require('./../db/db_utils.js');

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  console.log('whhhyyyy???');
})

module.exports = router;
