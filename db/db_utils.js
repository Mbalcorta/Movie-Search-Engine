const pgp = require('pg-promise')()

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'moviesearch'
}

const db = pgp(cn)

const addUser = (email, password) => {
  db.one('INSERT INTO users (email, password) VALUES($1, $2) RETURNING *', [email, password])
  .then(data => {
    return data
  })
  .catch(err => {
    console.log('Failed to add user')
  })
}



