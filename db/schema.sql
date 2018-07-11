-- if burgers_db already exists drop it --
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	item_id INTEGER PRIMARY KEY AUTO_INCREMENT,
    burger_name TEXT NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
    date_time TIMESTAMP NOT NULL
);