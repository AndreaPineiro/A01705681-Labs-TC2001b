const express = require('express');

const router = express.Router();

const nombres = ["Andrea Piñeiro"];

router.get('/Usuarios', (request, response, next) => {
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

    write += '<br>Para volver a la página principal entra a </strong> <a href= "http://localhost:3000/"> http://localhost:3000/ </a> <br>';
    write += '<br>Para volver a la página sobre mí entra a </strong> <a href= "http://localhost:3000/main"> http://localhost:3000/main </a> <br><br>';

    response.send(write);
});


router.get('/', (request, response, next) => {
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
    write += '<form action="/main" method="POST"><input type="text" name="nombre"><input type="submit" value="Enviar nombre"></form>';
    write += '<br>Para acceder a los nombres entra a </strong> <a href= "/main/Usuarios"> http://localhost:3000/main/Usuarios </a> <br><br>';
    write += '¡Hola! Mi nombre es Andrea Piñeiro Cavazos, estudio el 4° Semestre de la carrera "Ingeniería en Tecnologías Computacionales". Tengo 19 años y esta es mi primer página web para la clase de Construcción de Software y Toma de Decisiones.';
    write += " Me apasiona mucho la programación; es algo que descubrí al entrar a Universidad, pues antes no había tenido acercamiento.";
    write += " En las otras páginas voy a compartir algo breve sobre mi, mis pasatiempos y actividades favoritas. <br> <br>";
    
    write += "<h2> Menú: </h2>";
    write += "<ul>";
    write += '<li><strong>Arte: </strong> <a href= "/sobre_mi/Arte"> http://localhost:3000/sobre_mi/Arte </a> </li>';
    write += '<li><strong>Aprender: </strong> <a href= "/sobre_mi/Aprender"> http://localhost:3000/sobre_mi/Aprender </a> </li>';
    write += '<li><strong>Pasatiempos: </strong> <a href= "/sobre_mi/Pasatiempos"> http://localhost:3000/sobre_mi/Pasatiempos </a> </li>';
    write += '<li><strong>Usuarios: </strong> <a href= "/main/Usuarios"> http://localhost:3000/main/Usuarios </a> </li>';
    write += '<li><strong>Package.json: </strong> <a href= "/"> http://localhost:3000/ </a> </li>';
    write += '</ul><br>';

    
    write += "</body>";
    write += "</html>";

    response.send(write);
});

router.post('/', (request, response, next) => {
    //console.log(request.body.nombre);
    nombres.push(request.body.nombre);
    response.redirect('/main/Usuarios');
});


module.exports = router;