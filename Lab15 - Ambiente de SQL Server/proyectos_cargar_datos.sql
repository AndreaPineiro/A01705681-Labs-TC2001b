BULK INSERT A1705681.A1705681.[Proyectos]
   FROM 'e:\wwwroot\A1705681\proyectos.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT * FROM Proyectos