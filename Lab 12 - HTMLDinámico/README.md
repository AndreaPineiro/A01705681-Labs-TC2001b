# Laboratorio 12

Generar desde el back-end, interfaces dinámicas HTML5 para el cliente por medio de un motor de templates y que incorporen partials.
Utilizar EJS como motor de templates para generar html de manera dinámica. 

Elaborar una aplicación web con las siguientes características:
- La aplicación debe poder responder al menos a 5 rutas diferentes, distribuidas en al menos 2 módulos, y mandar una respuesta HTTP 404 cuando la ruta no existe.
- En alguna de las rutas, la aplicación debe contener al menos 1 forma que debe enviar datos al servidor por POST. El servidor debe reaccionar ante este envío y guardar los datos en un archivo de texto dentro del mismo servidor..

Para este laboratorio use las páginas que había creado antes con la información sobre mi, sobre html, css y js. Estos se encuentran dentro de un archivo de rutas "about.js"
En la página usuarios/agregar se encuentra un campo que te pide tu nombre y los nombres de quienes han ingresado se muestran en /usuarios

## Rutas:
PRINCIPAL: 
- TEMPLATING ENGINES: "/"

USUARIO:
- CONSULTAR USUARIOS: "/usuarios"
- AGREGAR USUARIO: "/usuarios/agregar"

ABOUT:
- SOBRE MÍ: "/about"
- SOBRE HTML: "/about/html"
- SOBRE CSS: "/about/css"
- SOBRE JS: "/about/js"
