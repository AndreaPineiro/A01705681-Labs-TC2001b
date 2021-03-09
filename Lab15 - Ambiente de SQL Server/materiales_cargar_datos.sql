BULK INSERT A1705681.A1705681.[Materiales]
   FROM 'e:\wwwroot\A1705681\materiales.csv'
   WITH
      (
         CODEPAGE = 'ACP',
         FIELDTERMINATOR = ',',
         ROWTERMINATOR = '\n'
      )
	 
SELECT * FROM Materiales