# Laboratorio 11

Usar npm, instalar nodemon, express y body-parser para el manejo de rutas.

Elaborar una aplicación web con las siguientes características:
- La aplicación debe poder responder al menos a 3 rutas diferentes, y mandar una respuesta HTTP 404 cuando la ruta no existe.
- En alguna de las rutas, la aplicación debe contener al menos 1 forma que debe enviar datos al servidor por POST. El servidor debe reaccionar ante este envío y guardar los datos en un archivo de texto dentro del mismo servidor.

Para este laboratorio use las páginas que había creado antes con la información sobre mi. 
En la página personal, se encuentra un campo que te pide tu nombre y los nombres de quienes han ingresado se muestran en Usuarios

## Rutas:
- PACKAGE.JSON: "/"
- PRINCIPAL: "/main"  (En esta página esta la forma que pide el nombre del usuario)
- ARTE: "/sobre_mi/Arte"
- APRENDER: "/sobre_mi/Aprender"
- PASATIEMPOS: "/sobre_mi/Pasatiempos"
- USUARIOS: "/main/Usuarios"