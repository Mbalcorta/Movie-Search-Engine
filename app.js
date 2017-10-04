const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cheerio = require('cheerio')
const cookieParser = require('cookie-parser')
const request = require('request')
const rp = require('request-promise')

app.set('view engine', 'pug')
app.set('views', './views')

app.listen(3000, () => {
  console.log('port is running on 3000')
})


