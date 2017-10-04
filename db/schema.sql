CREATE TABLE users (
	userid SERIAL PRIMARY KEY,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL
);

CREATE TABLE searches (
	searchid SERIAL PRIMARY KEY,
	movie_title VARCHAR(255)
);

CREATE TABLE search_history (
	search_history_id SERIAL PRIMARY KEY,
	userid INTEGER REFERENCES users(userid),
	searchid INTEGER REFERENCES searches(searchid),
	search_date DATE
);

