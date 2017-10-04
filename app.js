const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cheerio = require('cheerio')
const cookieParser = require('cookie-parser')
const request = require('request')
const rp = require('request-promise')
// const router = require('./routes/index.js')

app.set('view engine', 'pug')
app.set('views', './views')
app.use(require('./routes/index'))
app.use(require('./routes/login'))
app.listen(3000, () => {
  console.log('port is running on 3000')
})


