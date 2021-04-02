-- 1. La suma de las cantidades e importe total de todas las 
-- entregas realizadas durante el 97

SELECT SUM(Cantidad) as 'Cantidad Total', SUM(Cantidad * (Costo + Costo *PorcentajeImpuesto)) as 'Importe Total'
FROM Materiales M INNER JOIN Entregan E ON E.Clave = M.Clave
WHERE YEAR(Fecha) = 1997



-- 2. Para cada proveedor, obtener la razón social del proveedor, 
-- número de entregas e importe total de las entregas realizadas.

SELECT P.RazonSocial as 'Proveedor', COUNT(E.RFC) AS 'Número Entregas', SUM(Cantidad * (Costo + Costo * PorcentajeImpuesto/100)) as 'Importe Total'
FROM Proveedores P, Materiales M, Entregan E
WHERE P.RFC = E.RFC AND M.Clave = E.Clave
GROUP BY P.RazonSocial
ORDER BY [Número Entregas] DESC, [Importe Total] DESC



-- 3. Por cada material obtener la clave y descripción del material, 
-- la cantidad total entregada, la mínima cantidad entregada, la máxima 
-- cantidad entregada, el importe total de las entregas de aquellos 
-- materiales en los que la cantidad promedio entregada sea mayor a 400.

SELECT E.Clave, Descripcion, SUM(Cantidad) as 'Cantidad Total Entregada', 
MIN(Cantidad) as 'Mínima Cantidad Entregada', MAX(Cantidad) as 'Máxima Cantidad Entregada', 
SUM(Cantidad * (Costo + Costo * PorcentajeImpuesto/100)) as 'Importe Total'
FROM Materiales M INNER JOIN Entregan E ON M.Clave = E.Clave
GROUP BY E.Clave, Descripcion
HAVING AVG(Cantidad) > 400



-- 4. Para cada proveedor, indicar su razón social y mostrar la cantidad 
-- promedio de cada material entregado, detallando la clave y descripción 
-- del material, excluyendo aquellos proveedores para los que la cantidad 
-- promedio sea menor a 500.

SELECT RazonSocial, AVG(Cantidad) as 'Cantidad Promedio', E.Clave, Descripcion
FROM Materiales M, Proveedores P, Entregan E
WHERE P.RFC = E.RFC AND M.Clave = E.Clave
GROUP BY RazonSocial, E.Clave, Descripcion
HAVING AVG(Cantidad) > 500



-- 5. Mostrar en una sola consulta los mismos datos que en la consulta 
-- anterior pero para dos grupos de proveedores: aquellos para los que 
-- la cantidad promedio entregada es menor a 370 y aquellos para los que 
-- la cantidad promedio entregada sea mayor a 450.

SELECT RazonSocial, AVG(Cantidad) as 'Cantidad Promedio', E.Clave, Descripcion
FROM Materiales M, Proveedores P, Entregan E
WHERE P.RFC = E.RFC AND M.Clave = E.Clave
GROUP BY RazonSocial, E.Clave, Descripcion
HAVING AVG(Cantidad) < 370 OR AVG(Cantidad) > 450
ORDER BY [Cantidad Promedio]



-- Inserta cinco nuevos materiales.

INSERT INTO Materiales VALUES(1440, 'Cemento Gris 50kg', 185)
INSERT INTO Materiales VALUES(1450, 'Calidra 25kg', 70)
INSERT INTO Materiales VALUES(1460, 'Yeso Blanco 30kg', 65)
INSERT INTO Materiales VALUES(1470, 'Granito', 45)
INSERT INTO Materiales VALUES(1480, 'Adoquín Rojo', 20)



-- 6. Clave y descripción de los materiales que nunca han sido entregados.

SELECT M.Clave, Descripcion
FROM Materiales M
LEFT JOIN Entregan E
ON M.Clave = E.Clave
WHERE E.Clave IS NULL



-- 7. Razón social de los proveedores que han realizado entregas tanto 
-- al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.

SELECT RazonSocial 
FROM Proveedores P 
WHERE RFC IN (SELECT RFC	
				FROM Proyectos P INNER JOIN Entregan E ON P.Numero = E.Numero
				WHERE Denominacion = 'Vamos Mexico')
		AND RFC IN (SELECT RFC	
				FROM Proyectos P INNER JOIN Entregan E ON P.Numero = E.Numero
				WHERE Denominacion = 'Queretaro Limpio')



-- 8. Descripción de los materiales que nunca han sido entregados al proyecto 
-- 'CIT Yucatán'.

SELECT Descripcion
FROM Materiales M INNER JOIN Entregan E ON M.Clave = E.Clave
WHERE NOT E.Numero = (SELECT Numero 
					FROM Proyectos	
					WHERE Denominacion = 'CIT Yucatan')
GROUP BY Descripcion



-- 9. Razón social y promedio de cantidad entregada de los proveedores 
-- cuyo promedio de cantidad entregada es mayor al promedio de la cantidad 
-- entregada por el proveedor con el RFC 'VAGO780901'.

SELECT RazonSocial, AVG(Cantidad) AS 'Promedio de Cantidad Entregada'
FROM Proveedores P INNER JOIN Entregan E
ON P.RFC = E.RFC
GROUP BY RazonSocial, P.RFC
HAVING AVG(Cantidad) > (SELECT AVG(Cantidad)
						FROM Entregan
						WHERE RFC = 'VAGO780901'
						GROUP BY RFC)
	



-- 10. RFC, razón social de los proveedores que participaron en el 
-- proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas 
-- en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.

CREATE VIEW VistaCant2000 (Cantidad2000, RFC) 
AS 
	SELECT SUM(Cantidad), RFC 
	FROM Entregan	
	WHERE YEAR(Fecha) = 2000
	GROUP BY RFC;


CREATE VIEW VistaCant2001 (Cantidad2001, RFC)
AS 
	SELECT SUM(Cantidad), RFC
	FROM Entregan	
	WHERE YEAR(Fecha) = 2001
	GROUP BY RFC;

SELECT Proveedores.RFC, RazonSocial
FROM Proveedores, Proyectos, Entregan
WHERE Proveedores.RFC = Entregan.RFC
AND Proyectos.Numero = Entregan.Numero 
AND Denominacion = 'Infonavit Durango'
AND Proveedores.RFC IN (SELECT VistaCant2000.RFC
				FROM VistaCant2000, VistaCant2001
				WHERE Cantidad2000 > Cantidad2001);
