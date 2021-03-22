CREATE TABLE productos (
    id_producto INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    imagen VARCHAR(500) NULL,
    precio INT DEFAULT NULL,
    created_at TIMESTAMP NULL DEFAULT current_timestamp(),
    PRIMARY KEY(id_producto)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

INSERT INTO Productos(nombre, imagen, precio) VALUES ('Alexa Echo Dot', 'https://cdn1.coppel.com/images/catalog/pm/2959973-1.jpg', 1315.00);
INSERT INTO Productos(nombre, imagen, precio) VALUES ('Amazfit GTS Smartwatch', 'https://static.quickmobileshop.com/cs-photos/products/original/smartwatch-amazfit-gts-rose-pink-roz_10066404_3_1585123232.jpg', 3500.00);
INSERT INTO Productos(nombre, imagen, precio) VALUES ('Roomba', 'https://content.syndigo.com/asset/87b964f1-d9fb-4ff8-acb2-88049c71df99/1920.jpeg', 6500.00);
