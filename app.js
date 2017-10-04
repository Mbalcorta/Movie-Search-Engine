const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cheerio = require('cheerio')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const upload = require('multer')
const request = require('request')
const rp = require('request-promise')

const index = require('./routes/index.js')
const login = require('./routes/login.js')

app.set('view engine', 'pug')
app.set('views', './views')
app.set('port', process.env.PORT || 3000)

app.use('/', index)
app.use('/', login)

let server = app.listen(app.get('port'), () => console.log('listening to port ' + app.get('port')))
