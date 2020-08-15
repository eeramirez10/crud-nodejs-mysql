
CREATE DATABASE crudnodejsmysql;

use crudnodejsmysql;;

CREATE TABLE customer (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
);

SHOW TABLES;

DESCRIBE customer;