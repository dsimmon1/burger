CREATE DATABASE g7xoezu92wypkiq0;

USE g7xoezu92wypkiq0;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(200) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date_devoured TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

