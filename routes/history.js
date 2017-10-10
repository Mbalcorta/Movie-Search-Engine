const router = require('express').Router();
const getHistory = require('../db/db_utils.js').getHistory;

router.get('/history', (req, res) => {
  const userid = req.cookies.userid;
  if(!userid){
    res.redirect('/login')
  } else {
    getHistory(userid)
    .then((data) => {
      console.log(data);
      res.render('history', { data });
    })
  }
})

module.exports = router;
