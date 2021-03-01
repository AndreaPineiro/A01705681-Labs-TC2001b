const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rutasSobreMi = require("./routes/sobre_mi");

const nombres = ["Andrea Piñeiro"];

app.use(bodyParser.urlencoded({extended: false}));
app.use('/sobre_mi', rutasSobreMi);

//Middleware
app.use((request, response, next) => {
    console.log('¡Ya no tengo que reiniciar el servidor!');
    next();
});


app.get('/Usuarios', (request, response, next) => {
    write = "";

    write += "<html>";
    write += '<head><title>Servidor node</title><meta charset="UTF-8">';
    write += '<meta name="viewport" content="width=device-width, initial-scale=1.0"></head>';
    write += "<body>";
    write += "<header>Nombre: Andrea Piñeiro Cavazos <br/>";
    write += "Matrícula: A01705681 <br/>";
    write += "Correo Institucional: A01705681@itesm.mx</header>";
    write += "<h1>Usuarios:</h1>";
    write += "<ul>";

    for (let nombre of nombres) {
        write += '<li>' + nombre + '</li>';
    }
    write += '</ul>';

    write += '<br>Para volver a la página principal entra a </strong> <a href= "http://localhost:3000/"> http://localhost:3000/ </a> <br><br>';

    response.send(write);
});


app.get('/', (request, response, next) => {
    write = "";

    write += "<html>";
    write += '<head><title>Servidor node</title><meta charset="UTF-8">';
    write += '<meta name="viewport" content="width=device-width, initial-scale=1.0"></head>';
    write += "<body>";
    write += "<header><h1>Laboratorio 11</h1>";
    write += "Nombre: Andrea Piñeiro Cavazos <br/>";
    write += "Matrícula: A01705681 <br/>";
    write += "Correo Institucional: A01705681@itesm.mx</header>";

    write += "<h2>Escribe tu nombre</h2>";
    write += '<form action="/" method="POST"><input type="text" name="nombre"><input type="submit" value="Enviar nombre"></form>';
    write += '<br>Para acceder a los nombres entra a </strong> <a href= "/Usuarios"> http://localhost:3000/Usuarios </a> <br><br>';
    write += '¡Hola! Mi nombre es Andrea Piñeiro Cavazos, estudio el 4° Semestre de la carrera "Ingeniería en Tecnologías Computacionales". Tengo 19 años y esta es mi primer página web para la clase de Construcción de Software y Toma de Decisiones.';
    write += " Me apasiona mucho la programación; es algo que descubrí al entrar a Universidad, pues antes no había tenido acercamiento.";
    write += " En las otras páginas voy a compartir algo breve sobre mi, mis pasatiempos y actividades favoritas. <br> <br>";
    
    write += "<h2> Menú: </h2>";
    write += "<ul>";
    write += '<li><strong>Arte: </strong> <a href= "/sobre_mi/Arte"> http://localhost:3000/sobre_mi/Arte </a> </li>';
    write += '<li><strong>Aprender: </strong> <a href= "/sobre_mi/Aprender"> http://localhost:3000/sobre_mi/Aprender </a> </li>';
    write += '<li><strong>Pasatiempos: </strong> <a href= "/sobre_mi/Pasatiempos"> http://localhost:3000/sobre_mi/Pasatiempos </a> </li>';
    write += '<li><strong>Usuarios: </strong> <a href= "/Usuarios"> http://localhost:3000/Usuarios </a> </li>';
    write += '</ul><br>';

    write += "<h1>Describe el archivo package.json.</h1>"
    write += "Los paquetes npm contienen un archivo llamado 'package.json', que contiene metadata (proveen información acerca de uno o más aspectos de datos). <br>";
    write += "Este documento provee información a npm que le permite identificar el proyecto, con datos como: <ul>";
    write += "<li>nombre</li>";
    write += "<li>versión</li>";
    write += "<li>descripción</li>";
    write += "<li>autor</li>";
    write += "<li>licencia</li></ul>";
    write += "Y también le permite manejar las dependencias del proyecto. Para este proyecto, usé las siguientes dependencias: <ul>";
    write += "<li><strong>express:</strong> framework diseñado para construir y organizar aplicaciones.</li>";
    write += "<li><strong>nodemon:</strong> herramienta que corre automáticamente la aplicación de node cuando cambia el archivo.</li>";
    write += "<li><strong>body-parser:</strong> crea middlewares con la propiedad de 'req.body' con el cuerpo de Content-Type analizado. </li><br>";
    write += "</ul>";


    write += "<br><footer>";
    write += "<strong>Bibliografía:</strong><br>";
    write += "<ul>";
    write += "<li>Node. (S,F). The package.json guide. NodeJS. Consultado de ";
    write += '<a target = "_blank" href= "https://nodejs.dev/learn/the-package-json-guide"> https://nodejs.dev/learn/the-package-json-guide </a>';
    write += "el 28 de febrero de 2021.</li></ul>";

    write += "<strong>Editor de HTLM:</strong> VisualStudio Code <br/>";
    write += '<strong>URL: </strong> <a target = "_blank" href= "https://code.visualstudio.com/"> https://code.visualstudio.com/ </a>';
    write += "</footer>";
    
    write += "</body>";
    write += "</html>";

    response.send(write);
});


app.post('/', (request, response, next) => {
    //console.log(request.body.nombre);
    nombres.push(request.body.nombre);
    response.redirect('/Usuarios');
});

app.use( (request, response, next) => {
    console.log(request.url);
    response.status(404);
    //response.statusCode = 404;
    //response.status(404).send('<h1>Page not found.</h1>');
    response.send('<h1>Page not found.</h1>'); 
});


app.listen(3000);