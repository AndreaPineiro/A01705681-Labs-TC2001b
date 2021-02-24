// Crear un servidor web básico que se ejecute sobre node, recibe peticiones
// del cliente y responde.
const http = require('http');

const server = http.createServer( (request, response) => {
    console.log("Ingresa a http://localhost:3000");
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write("<html>");
    response.write('<head><title>Servidor node</title><meta charset="UTF-8"></head>');
    response.write("<body><h1>Hola desde el servidor</h1></body>");
    response.write("<body>Andrea Piñeiro A01705681</body>");
    response.write("</html>");
    response.end();
});

server.listen(3000);