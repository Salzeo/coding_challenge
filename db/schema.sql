CREATE DATABASE code_challenge_db;

USE code_challenge_db;

CREATE TABLE code_challenge
(
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(500) NOT NULL,
  last_name varchar(500) NOT NULL,
  email varchar(500) NOT NULL,
  phone varchar(500) NOT NULL,
  date TIMESTAMP NOT NULL DEFAULT current_timestamp,
  PRIMARY KEY (id)
);
