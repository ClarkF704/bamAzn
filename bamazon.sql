DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;


CREATE TABLE products(
    -- item id is the unique item number
	item_id INT NOT NULL AUTO_INCREMENT, 
    -- product name is the name of the product
    product_name VARCHAR(400) NULL,
    -- department name id the department name
    department_name VARCHAR(30),
    -- price is the cost to custometer
    price DECIMAL(10,2) NULL,
    -- stock quantity is how much of the product is available in stores
    stock_quantity INT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("Black and White Vans", "Clothing", 49.99, 38);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("AK-47", "Hunting & Outdoors", 499.99, 14);

INSERT INTO products ( product_name, department_name, price, stock_quantity)
VALUES ("White Nike Shirt", "Clothing", 25.99, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sword", "Hunting & Outdoors", 89.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Xbox One", "Video Games", 299.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Pro", "Computers & Technology", 899.99, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Skateboard", "Sports & Outdoor", 126.99, 69);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chicken", "Food", 5.99, 89);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Soccer Ball", "Sports & Outdoors", 27.58, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Diamond", "Jewlery", 50000, 1);
