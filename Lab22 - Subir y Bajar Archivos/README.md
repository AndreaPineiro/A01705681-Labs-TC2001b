# Laboratorio 22

Entender cómo funciona la subida de archivos a un servidor. Desarrollar aplicaciones web que le permitan a los usuarios subir archivos que se almacenen en el servidor.

Para este laboratorio, al agregar un nuevo producto, se permite la subida de archivos, estas imágenes se almacenan dentro del servidor para que la base de datos solo contenga la ruta del archivo.

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
