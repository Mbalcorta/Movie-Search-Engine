const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cheerio = require('cheerio')
const cookieParser = require('cookie-parser')
const request = require('request')
const rp = require('request-promise')
const path = require('path')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

app.use(require('./routes/index'))
app.use(require('./routes/login'))
app.use(require('./routes/signup'))
app.use(require('./routes/history'))
app.use(require('./routes/logout'))

app.listen(3000, () => {
  console.log('port is running on 3000')
})
