-- Procedimiento que agrega un registro a la tabla Materiales 
-- con los parámetros recibidos.
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'creaMaterial' AND type = 'P')
    DROP PROCEDURE creaMaterial
GO

CREATE PROCEDURE creaMaterial
    @uclave NUMERIC(5,0),
    @udescripcion VARCHAR(50),
    @ucosto NUMERIC(8,2),
    @uimpuesto NUMERIC(6,2)
AS
    INSERT INTO Materiales VALUES(@uclave, @udescripcion, @ucosto, @uimpuesto)
GO

-- Para ejecutar el stored procedure
EXECUTE creaMaterial 5000,'Martillos Acme',250,15

-- Verificar el efecto de la ejecución
SELECT * FROM Materiales


-- Procedimineto para modificar un material que reciba como 
-- parámetros las columnas de la tabla materiales y actualice 
-- las columnas correspondientes con los valores recibidos, para 
-- el registro cuya llave sea la clave que se recibe como parámetro.
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'modificaMaterial' AND type = 'P')
    DROP PROCEDURE modificaMaterial
GO

CREATE PROCEDURE modificaMaterial
    @uclave NUMERIC(5,0),
    @udescripcion VARCHAR(50),
    @ucosto NUMERIC(8,2),
    @uimpuesto NUMERIC(6,2)
AS
    UPDATE Materiales 
    SET descripcion = @udescripcion, costo = @ucosto, impuesto = @uimpuesto
    WHERE clave = @uclave
GO


-- Procedimiento para eliminar un registro de la tabla materiales 
-- cuya llave sea la clave que se recibe como parámetro.
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'eliminaMaterial' AND type = 'P')
    DROP PROCEDURE eliminaMaterial
GO

CREATE PROCEDURE eliminaMaterial
    @uclave NUMERIC(5,0)
AS
    DELETE FROM Entregan WHERE clave = @uclave
    DELETE FROM Materiales WHERE clave = @uclave
GO


-- Crea Proyecto
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'creaProyecto' AND type = 'P')
    DROP PROCEDURE creaProyecto
GO

CREATE PROCEDURE creaProyecto
    @unumero NUMERIC(11),
    @udenominacion VARCHAR(40)
AS
    INSERT INTO Proyectos VALUES(@unumero, @udenominacion)
GO

-- Modifica Proyecto
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'modificaProyecto' AND type = 'P')
    DROP PROCEDURE modificaProyecto
GO

CREATE PROCEDURE modificaProyecto
    @unumero NUMERIC(11),
    @udenominacion VARCHAR(40)
AS
    UPDATE Proyectos 
    SET denominacion = @udenominacion
    WHERE numero = @unumero
GO

-- Elimina Proyecto
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'eliminaProyecto' AND type = 'P')
    DROP PROCEDURE eliminaProyecto
GO

CREATE PROCEDURE eliminaProyecto
    @unumero NUMERIC(11)
AS
    DELETE FROM Proyectos WHERE numero = @unumero
GO

-- Crea Proveedor
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'creaProveedor' AND type = 'P')
    DROP PROCEDURE creaProveedor
GO

CREATE PROCEDURE creaProveedor
    @urfc VARCHAR(15),
    @urazonsocial VARCHAR(40)
AS
    INSERT INTO Proveedores VALUES(@urfc, @urazonsocial)
GO

-- Modifica Proveedor
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'modificaProveedor' AND type = 'P')
    DROP PROCEDURE modificaProveedor
GO

CREATE PROCEDURE modificaProveedor
    @urfc VARCHAR(15),
    @urazonsocial VARCHAR(40)
AS
    UPDATE Proveedores 
    SET razonsocial = @urazonsocial
    WHERE rfc = @urfc
GO

-- Elimina Proveedor
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'eliminaProveedor' AND type = 'P')
    DROP PROCEDURE eliminaProveedor
GO

CREATE PROCEDURE eliminaProveedor
    @urfc VARCHAR(15)
AS
    DELETE FROM Proveedores WHERE rfc = @urfc
GO


-- Crea Entrega
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'creaEntrega' AND type = 'P')
    DROP PROCEDURE creaEntrega
GO

CREATE PROCEDURE creaEntrega
    @uclave NUMERIC(5,0),
    @urfc VARCHAR(15),
    @unumero NUMERIC(11),
    @ufecha DATE,
    @ucantidad NUMERIC(11)
AS
    INSERT INTO Entregan VALUES(@uclave, @urfc, @unumero, @ufecha, @ucantidad)
GO

-- Modifica Entrega
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'modificaEntrega' AND type = 'P')
    DROP PROCEDURE modificaEntrega
GO

CREATE PROCEDURE modificaEntrega
    @uclave NUMERIC(5,0),
    @urfc VARCHAR(15),
    @unumero NUMERIC(11),
    @ufecha DATE,
    @ucantidad NUMERIC(11)
AS
    UPDATE Entregan 
    SET fecha = @ufecha,
    SET cantidad = @ucantidad
    WHERE clave = @uclave AND rfc = @urfc AND numero = @unumero
GO

-- Elimina Entrega
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'eliminaEntrega' AND type = 'P')
    DROP PROCEDURE eliminaEntrega
GO

CREATE PROCEDURE eliminaEntrega
    @uclave NUMERIC(5,0),
    @urfc VARCHAR(15),
    @unumero NUMERIC(11)
AS
    DELETE FROM Entregan WHERE clave = @uclave AND rfc = @urfc AND numero = @unumero
GO

-- Define el sigueinte stored procedure en tu base de datos
IF EXISTS (SELECT name FROM sysobjects
            WHERE name = 'queryMaterial' AND type = 'P')
    DROP PROCEDURE queryMaterial
GO

CREATE PROCEDURE queryMaterial
    @udescripcion VARCHAR(50),
    @ucosto NUMERIC(8,2)

AS
    SELECT * FROM Materiales WHERE descripcion
    LIKE '%'+@udescripcion+'%' AND costo > @ucosto
GO

-- Ejecutar la instrucción
EXECUTE queryMaterial 'Lad',20