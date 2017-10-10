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

const addMovie = (userid, movie_title, search_date) => {
  db.one('INSERT INTO searches (userid, movie_title, search_date) VALUES($1, $2, $3) RETURNING *', [userid, movie_title, search_date])
  .then(data => {
    console.log(data);
    return data
  })
  .catch(err => {
    console.log('Failed to add movie', err)
  })
}

const verifyUser = (email) => {
  return db.one('SELECT * FROM users WHERE email=$1', email)
}

const getHistory = (userid) => {
  return db.any('SELECT movie_title, search_date FROM searches WHERE userid=$1', userid)
}

module.exports = { addUser, addMovie, verifyUser, getHistory };
