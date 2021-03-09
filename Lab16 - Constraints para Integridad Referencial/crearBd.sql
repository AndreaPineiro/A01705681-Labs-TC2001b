-- DROP TABLE Entregan, Materiales, Proyectos, Proveedores


-- Crear Tablas
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Materiales')
DROP TABLE Materiales

CREATE TABLE Materiales (
	Clave NUMERIC(5) NOT NULL, 
	Descripcion VARCHAR(50), 
	Costo NUMERIC(8, 2)
)


IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proveedores')
DROP TABLE Proveedores

CREATE TABLE Proveedores (
	RFC CHAR(13) NOT NULL, 
	RazonSocial VARCHAR(50)
)


IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Proyectos')
DROP TABLE Proyectos

CREATE TABLE Proyectos (
	Numero NUMERIC(5) NOT NULL, 
	Denominacion VARCHAR(50)
)


IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_NAME = 'Entregan')
DROP TABLE Entregan

CREATE TABLE Entregan (
	Clave NUMERIC(5) NOT NULL, 
	RFC CHAR(13) NOT NULL, 
	Numero NUMERIC(5) NOT NULL, 
	Fecha DateTime NOT NULL, 
	Cantidad NUMERIC(8, 2)
)


-- Carga de Datos
BULK INSERT A1705681.A1705681.[Materiales]
   FROM 'e:\wwwroot\A1705681\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )


BULK INSERT A1705681.A1705681.[Proyectos]
   FROM 'e:\wwwroot\A1705681\proyectos.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

BULK INSERT A1705681.A1705681.[Proveedores]
   FROM 'e:\wwwroot\A1705681\proveedores.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SET DATEFORMAT dmy

BULK INSERT A1705681.A1705681.[Entregan]
   FROM 'e:\wwwroot\A1705681\entregan.csv'
   WITH
   (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
   )



-- Ejercicio 2

INSERT INTO Materiales VALUES(1000, 'xxx', 1000)
-- La Clave 1000 esta repetida

DELETE FROM Materiales WHERE Clave = 1000 AND Costo = 1000

	-- Llave primaria : Clave
ALTER TABLE Materiales ADD CONSTRAINT llaveMateriales PRIMARY KEY (Clave)

INSERT INTO Materiales VALUES(1000, 'xxx', 1000)

sp_helpconstraint Materiales


ALTER TABLE Proveedores ADD CONSTRAINT llaveProveedores PRIMARY KEY (RFC)
ALTER TABLE Proyectos ADD CONSTRAINT llaveProyectos PRIMARY KEY (Numero)
ALTER TABLE Entregan ADD CONSTRAINT llaveEntregan PRIMARY KEY (Clave, RFC, Numero, Fecha)



-- Ejercicio 3

SELECT * FROM Materiales
SELECT * FROM Proveedores
SELECT * FROM Proyectos
SELECT * FROM Entregan

INSERT INTO entregan VALUES (0, 'xxx', 0, '1-jan-02', 0);

DELETE FROM Entregan WHERE Clave = 0

	-- Agregamos Constraint: FOREIGN KEY
ALTER TABLE Entregan ADD CONSTRAINT cfentreganclave
FOREIGN KEY (Clave) REFERENCES Materiales(Clave);

-- INSERT INTO entregan VALUES (0, 'xxx', 0, '1-jan-02', 0);

ALTER TABLE Entregan ADD CONSTRAINT cfentreganrfc
FOREIGN KEY (RFC) REFERENCES Proveedores(RFC);


ALTER TABLE Entregan ADD CONSTRAINT cfentregannumero
FOREIGN KEY (Numero) REFERENCES Proyectos(Numero);

sp_helpconstraint Materiales
sp_helpconstraint Proveedores
sp_helpconstraint Proyectos
sp_helpconstraint Entregan



-- Ejercicio 4

INSERT INTO entregan VALUES (1000, 'AAAA800101', 5000, GETDATE(), 0);

DELETE FROM Entregan WHERE Cantidad = 0

	-- Constraint : Cantidad > 0
ALTER TABLE Entregan ADD CONSTRAINT Cantidad CHECK (Cantidad > 0);

sp_helpconstraint Materiales
sp_helpconstraint Proveedores
sp_helpconstraint Proyectos
sp_helpconstraint Entregan