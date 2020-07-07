DROP DATABASE IF EXISTS great_bay_DB;

CREATE DATABASE great_bay_DB;

USE great_bay_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(45) NULL,
  bid_price DECIMAL(10,2) NULL,
  available BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);
