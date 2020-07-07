DROP DATABASE IF EXISTS great_bay_DB;

CREATE DATABASE great_bay_DB;

USE great_bay_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(45) NULL,
  item VARCHAR(45) NULL,
  bid_price DECIMAL(10,2) NULL,
  available BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  user_name VARCHAR(45) NULL,
  pass_word VARCHAR(45) NULL,
  PRIMARY KEY (id)
);
-- Sample Queries - 

-- Selects all products and sorts by bid price descending in price. 
-- SELECT * FROM products
-- WHERE available=TRUE
-- ORDER BY bid_price DESC;

-- SELECT * FROM users
-- ORDER BY id ASC;




