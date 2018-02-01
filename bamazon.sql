CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
  product_id INT NOT NULL
  AUTO_INCREMENT,
	product_name VARCHAR
  (50) NOT NULL,
	department_name VARCHAR
  (50) NULL,
	price DECIMAL
  (10,2) NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY
  (product_id)
);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Bud Light", "Beer", 10.50, 1500);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Shock Top", "Beer", 12.50, 1250);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Budweiser", "Beer", 12.50, 1000);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Sour Patch Kids", "Candy", 3, 3000);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Kit Kats", "Candy", 2, 2500);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Resee's Cup", "Candy", 2.50, 2250);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Tortilla", "Food", 5.50, 900);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Shredded Cheese", "Food", 6.50, 800);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Lettuce", "Food", 7.50, 700);

  INSERT INTO products
    (product_name, department_name, price, stock_quantity)
  VALUES
    ("Tomato", "Food", 4.50, 600);