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

-- Sample Queries - Selects all products and sorts by bid price descending in price. 
SELECT * FROM products
WHERE available=TRUE
ORDER BY bid_price DESC;


