CREATE TABLE users (
	userid SERIAL PRIMARY KEY,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL
);

CREATE TABLE searches (
	searchid SERIAL PRIMARY KEY,
	userid INTEGER REFERENCES users NOT NULL,
	movie_title VARCHAR(255) NOT NULL,
	search_date DATE NOT NULL
);
