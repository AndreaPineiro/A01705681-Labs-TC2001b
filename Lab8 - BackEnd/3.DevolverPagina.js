// Pequeña aplicación web que al enviar una petición web, 
// devuelva la página "Sobre mí Laboratorio 1"

const http = require('http');
const server = http.createServer( (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    // Inicia HTML
    response.write("<html>");
    
    // HEAD
    response.write('<head><title>Servidor node</title><meta charset="UTF-8">');
    response.write('<meta name="viewport" content="width=device-width, initial-scale=1.0"></head>');
    
    // BODY
    response.write("<body>");

    // Header
    response.write("<header><h1>Laboratorio 1</h1>");
    response.write("Nombre: Andrea Piñeiro Cavazos <br/>");
    response.write("Matrícula: A01705681 <br/>");
    response.write("Correo Institucional: A01705681@itesm.mx</header>");
    // End header

    response.write("<h1>Un poco sobre mí</h1>");
    response.write('¡Hola! Mi nombre es Andrea Piñeiro Cavazos, estudio el 4° Semestre de la carrera "Ingeniería en Tecnologías Computacionales". Tengo 19 años y esta es mi primer página web para la clase de Construcción de Software y Toma de Decisiones.');
    response.write(" Me apasiona mucho la programación; es algo que descubrí al entrar a Universidad, pues antes no había tenido acercamiento.");
    response.write("A continuación voy a compartir algo breve sobre mi, mis pasatiempos y actividades favoritas. <br> <br>");
    // Arte
    response.write("<div>");
    response.write("<h2>Arte:</h2>");
    response.write("Me gusta mucho el arte, tanto verlo como practicarlo. Desde chica estuve en actividades artísiticas, como baile, pintura, música, etc. Pero las actividades en las cuales me considero buena son las siguientes:");
    response.write("<ul>");
    response.write("<li><strong>Piano:</strong> toco piano desde hace 3 años, es algo que me gusta mucho. He participado en algunos recitales y presentaciones en lugares como el Museo de Arte de Querétaro.</li>");
    response.write("<li><strong>Guitarra y Ukelele:</strong> los toco desde hace 5 años, pero lo hago más como un Hobby. Estos instrumentos me ayudan a relajarme y a divertirme.</li>");
    response.write("<li><strong>Teatro:</strong> He participado en obras escolares, y este es mi segundo semestre en el Grupo Representativo de Teatro del Tec.</li>");
    response.write("</ul></div><hr>");
    // Aprender
    response.write("<div>");
    response.write("<h2>Aprender:</h2>");
    response.write("Me gusta mucho aprender acerca de temas de mi interés: relacionados con mi carrera e incluso otros como finanzas, psicología, etc.");
    response.write("<ul>");
    response.write("<li><strong>Tomar cursos: </strong>Me gusta mucho tomar cursos en Coursera, leer y aprender cosas nuevas. Los cursos que más me gustan son los relacionados con mi carrera.</li>");
    response.write("<li><strong>Leer: </strong>Uno de mis pasatiempos favoritos es leer, especialmente libros que hablen de psicología, finanzas y tecnología. Me gusta pues lo veo como una gran manera de aprender.</li>");
    response.write("</ul></div><hr>");
    // Otros Pasatiempos
    response.write("<div>");
    response.write("<h2> Otros Pasatiempos:</h2>");
    response.write("<ul>");
    response.write("<li><strong>Armar modelos de papel, legos o rompecabezas:</strong> Disfruto mucho construir estas cosas.</li>");
    response.write("<li><strong>Hacer deporte: </strong>Me gusta mucho y me relaja. </li>");
    response.write("</ul></div><hr><br>");

    // Footer
    response.write("<footer>");
    response.write("<strong>Editor de HTLM:</strong> VisualStudio Code <br/> ");
    response.write('<strong>URL: </strong> <a target = "_blank" href= "https://code.visualstudio.com/"> https://code.visualstudio.com/ </a>');
    response.write("</footer>");

    // Termina Body
    response.write("</body>");

    // Termina HTML
    response.write("</html>");
    
    response.end();

});
server.listen(3000);