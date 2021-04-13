# Laboratorio 24

Comprender qué es AJAX y su mecánica básica de operación. Desarrollar aplicaciones que incorporen tecnologías AJAX.

Para este laboratorio, se agrego un buscador en la página de Consultar Productos; para la función del buscador se usó AJAX, lo que nos permite no tener que recargar la página cada que se introduce una tecla. "Onkeyup" manda llamar la función buscar() en JS, la cual llama a la ruta buscar, dónde se hace la búsqueda de las coincidencias con el nombre. 
al agregar un nuevo producto, se permite la subida de archivos, estas imágenes se almacenan dentro del servidor para que la base de datos solo contenga la ruta del archivo. Con el resultado de esa consulta, se modifica el DOM para mostrar solo esos productos que coinciden con la búsqueda. 

Use las páginas que había creado antes con la información sobre mi, sobre html, css y js. Estos se encuentran dentro de un archivo de rutas "about.js"

En la página productos/agregar se encuentra un campo que te pide nombre, imagen y precio del producto; y los productos que se han ingresado se muestran en /productos.

Se usa una Cookie para guardar el nombre del último productos. Y usé sesiones para crear una página de login; solamente cuando el usuario se loggea puede acceder a las paginas de productos.

## Rutas:
PRINCIPAL: 
- HOME: "/"

PRODUCTOS:
- CONSULTAR PRODUCTOS: "/productos"
- AGREGAR PRODUCTO: "/productos/agregar"
- CONSULTAR SOLO UN PRODUCTO "/productos/#"

ABOUT:
- SOBRE MÍ: "/about"
- SOBRE HTML: "/about/html"
- SOBRE CSS: "/about/css"
- SOBRE JS: "/about/js"

USERS 
- LOGIN: "/users/login"
- REGISTER: "/users/register"
