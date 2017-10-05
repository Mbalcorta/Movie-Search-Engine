const pgp = require('pg-promise')()

const cn = {
  host: 'localhost',
  port: 5432,
  database: 'moviesearch'
}

const db = pgp(cn)

const addUser = (email, password) => {
  return db.one('INSERT INTO users (email, password) VALUES($1, $2) RETURNING *', [email, password])
}

const addMovie = (movie_title) => {
  db.one('INSERT INTO searches (movie_title) VALUES($1) RETURNING *', movie_title)
  .then(data => {
    return data
  })
  .catch(err => {
    console.log('Failed to add movie')
  })
}

const verifyUser = (email) => {
  return db.one('SELECT * FROM users WHERE email=$1', email)
}

module.exports = { addUser, addMovie, verifyUser };
