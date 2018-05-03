DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers(

id INTEGER(11) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(20),
devoured BOOLEAN DEFAULT false,

PRIMARY KEY (id)

);


