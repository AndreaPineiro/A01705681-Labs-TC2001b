const express = require('express');

const router = express.Router();

console.log("ahh");



router.use('/Arte', (request, response, next) => {
    write = "";

    write += "<html>";
    write += '<head><title>Servidor node</title><meta charset="UTF-8">';
    write += '<meta name="viewport" content="width=device-width, initial-scale=1.0"></head>';
    write += "<body>";
    write += "<header><h1>Arte</h1>";
    write += "Nombre: Andrea Piñeiro Cavazos <br/>";
    write += "Matrícula: A01705681 <br/>";
    write += "Correo Institucional: A01705681@itesm.mx</header>";
    
    write += "Me gusta mucho el arte, tanto verlo como practicarlo. Desde chica estuve en actividades artísiticas, como baile, pintura, música, etc. Pero las actividades en las cuales me considero buena son las siguientes:";
    write += "<ul>";
    write += "<li><strong>Piano:</strong> toco piano desde hace 3 años, es algo que me gusta mucho. He participado en algunos recitales y presentaciones en lugares como el Museo de Arte de Querétaro.</li>";
    write += "<li><strong>Guitarra y Ukelele:</strong> los toco desde hace 5 años, pero lo hago más como un Hobby. Estos instrumentos me ayudan a relajarme y a divertirme.</li>";
    write += "<li><strong>Teatro:</strong> He participado en obras escolares, y este es mi segundo semestre en el Grupo Representativo de Teatro del Tec.</li><br>";
    write += "</ul></div><hr><br><br>";
    write += '<br>Para volver a la página principal entra a </strong> <a href= "/"> http://localhost:3000/ </a> <br><br>';
    write += "</body>";
    write += "</html>";

    response.send(write);
});

router.use('/Aprender', (request, response, next) => {
    write = "";

    write += "<html>";
    write += '<head><title>Servidor node</title><meta charset="UTF-8">';
    write += '<meta name="viewport" content="width=device-width, initial-scale=1.0"></head>';
    write += "<body>";
    write += "<header><h1>Aprender</h1>";
    write += "Nombre: Andrea Piñeiro Cavazos <br/>";
    write += "Matrícula: A01705681 <br/>";
    write += "Correo Institucional: A01705681@itesm.mx</header>";
    
    write += "Me gusta mucho aprender acerca de temas de mi interés: relacionados con mi carrera e incluso otros como finanzas, psicología, etc.";
    write += "<ul>";
    write += "<li><strong>Tomar cursos: </strong>Me gusta mucho tomar cursos en Coursera, leer y aprender cosas nuevas. Los cursos que más me gustan son los relacionados con mi carrera.</li>";
    write += "<li><strong>Leer: </strong>Uno de mis pasatiempos favoritos es leer, especialmente libros que hablen de psicología, finanzas y tecnología. Me gusta pues lo veo como una gran manera de aprender.</li><br>";
    write += "</ul></div><hr><br><br>";
    write += '<br>Para volver a la página principal entra a </strong> <a href= "/"> http://localhost:3000/ </a> <br><br>';
    write += "</body>";
    write += "</html>";

    response.send(write);
});

router.use('/Pasatiempos', (request, response, next) => {
    write = "";

    write += "<html>";
    write += '<head><title>Servidor node</title><meta charset="UTF-8">';
    write += '<meta name="viewport" content="width=device-width, initial-scale=1.0"></head>';
    write += "<body>";
    write += "<header><h1>Pasatiempos</h1>";
    write += "Nombre: Andrea Piñeiro Cavazos <br/>";
    write += "Matrícula: A01705681 <br/>";
    write += "Correo Institucional: A01705681@itesm.mx</header>";
    
    write += "<ul>";
    write += "<li><strong>Armar modelos de papel, legos o rompecabezas:</strong> Disfruto mucho construir estas cosas.</li>";
    write += "<li><strong>Hacer deporte: </strong>Me gusta mucho y me relaja. </li><br><br>";
    write += "</ul></div><hr><br><br>";
    write += '<br>Para volver a la página principal entra a </strong> <a href= "/"> http://localhost:3000/ </a> <br><br>';
    write += "</body>";
    
    write += "</html>";

    response.send(write);
});


module.exports = router;