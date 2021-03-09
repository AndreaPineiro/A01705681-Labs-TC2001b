BULK INSERT A1705681.A1705681.[Proveedores]
   FROM 'e:\wwwroot\A1705681\proveedores.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT * FROM Proveedores