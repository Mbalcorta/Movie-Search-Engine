CREATE TABLE users (
	uid SERIAL PRIMARY KEY,
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255) NOT NULL
);

CREATE TABLE searches (
	sid SERIAL PRIMARY KEY,
	movie_title VARCHAR(255)
);

CREATE TABLE us (
	usid SERIAL PRIMARY KEY,
	uid INTEGER REFERENCES users(uid),
	sid INTEGER REFERENCES searches(sid),
	search_date DATE
);
