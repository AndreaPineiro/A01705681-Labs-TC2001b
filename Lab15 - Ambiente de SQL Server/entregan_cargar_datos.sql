SET DATEFORMAT dmy

BULK INSERT A1705681.A1705681.[Entregan]
   FROM 'e:\wwwroot\A1705681\entregan.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )

SELECT * FROM Entregan
