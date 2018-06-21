-- Create the database burger_db and specified it for use.
CREATE DATABASE burger_db;
USE burger_db;

-- Create the table burgers.
CREATE TABLE burgers(
id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
burger varchar(255) NOT NULL
);
