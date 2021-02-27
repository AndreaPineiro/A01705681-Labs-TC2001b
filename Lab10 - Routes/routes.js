const nombres = ["Andrea Pineiro"];
const filesystem = require('fs');

const requestHandler = (request, response) => {
    console.log(request.url);

    // HTML
    if (request.url === '/HTML-questions') {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        // Head
        response.write('<head><meta charset = "UTF-8"><title>What is HTML</title></head>');

        // Body
        response.write("<header><h1>Introducción a HTML5</h1></header>");
        response.write("<ol>");

        response.write("<h3><li> ¿Cuál es la diferencia entre Internet y la World Wide Web? </li></h3>");
        response.write("<p> El <strong>internet</strong> es una red de computadoras conectadas entre sí alrededor de todo el mundo,");
        response.write("esta cuenta con muchos servicios que ofrecen conexión. <br/>");
        response.write("La <strong>World Wide Web (WEB)</strong> es una colección grande de páginas, esta funciona a través ");
        response.write("del internet; y se pueden transmitir diversos tipos de datos a través de Protocolos. ");
        response.write("<br/> <ins>La web no existe sin el Internet, pero en el Internet hay más que la web. </ins></p>");
        response.write("<hr>");

        response.write("<h3> <li> ¿Cuáles son las partes de un URL?</li></h3>");
        response.write("<ul>");
        response.write("<li> <strong>Protocolo HTTPS:</strong> sirve para transferir información dentro de la Web. </li>");
        response.write("<li> <strong>Subdominio:</strong> va después del protocolo y antes del punto. </li>");
        response.write("<li> <strong>Dominio:</strong> nombre único para identificar una página web y encontrarla con facilidad. </li>");
        response.write("<li> <strong>TLD:</strong> dominio de nivel superior, tipo de página (.gob, .com, etc).</li>");
        response.write("<li> <strong>Ruta:</strong> lo que va después de <q>/</q>, subpáginas y páginas de un sitio web. </li>");
        response.write("<li> <strong>Parámetro:</strong> después del signo de interrogación, a veces se relacionan con una búsqueda, parámetros de campañas publicitarias. </li>");
        response.write("<li> <strong>Etiqueta:</strong> nos permiten hacer scroll hacia un elemento o parte de una página web, aparece después del <q>#</q>.</li>");
        response.write("</ul>");
        response.write("<hr>");

        response.write("<h3> <li> ¿Cuál es el propósito de los métodos HTTP: GET, HEAD, POST, PUT, PATCH, DELETE? </li></h3>");
        response.write("<ul>");
        response.write("<li> <strong>GET:</strong> leer una representación de un recurso específico. Se usa para buscar y obtener datos en un formato concreto.</li>");
        response.write("<li> <strong>HEAD:</strong> similar a GET pero no devuelve el contenido en el HTTP, manda el encabezado de la petición. </li>");
        response.write("<li> <strong>POST:</strong> enviar datos al servidor. También se pueden usar con GET pero tiene limitaciones.</li>");
        response.write("<li> <strong>PUT:</strong> actualizar contenidos.</li>");
        response.write("<li> <strong>PATCH:</strong> actualizar contenidos, pero actualmente es más usado que PUT.</li>");
        response.write("<li> <strong>DELETE:</strong> elimina un recurso específico.</li>");
        response.write("</ul>");
        response.write("<hr>");

        response.write("<h3> <li> ¿Qué método HTTP se utiliza cuando a través de un navegador web se accede a una página a través de un URL?</li></h3>");
        response.write("<p><strong>GET</strong>, para recuperar los datos de la petición, obtener los datos de un recurso.</p>");
        response.write("<hr>");

        response.write("<h3><li> Un servidor web devuelve una respuesta HTTP con código 200. ¿Qué significa esto? ¿Ocurrió algún error?</li></h3>");
        response.write("<p>Significa que la operación fue <b>exitosa</b>, no hubo ningún error; la página cargo correctamente. ");
        response.write("Los códigos que tengan el formato <b>2XX</b> indican que la carga fue correcta.</p>");
        response.write("<hr>");

        response.write("<h3> <li> ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 404? ¿Por qué?</li></h3>");
        response.write("<p>No, a menos que sea un link roto. Normalmente cuando aparece este error es porque el usuario quiso acceder a un recurso <i>no disponible</i>.</p>");
        response.write("<hr>");

        response.write("<h3><li> ¿Es responsabilidad del desarrollador corregir un sitio web si un usuario reporta que intentó acceder al sitio y se encontró con un error 500? ¿Por qué?</li></h3>");
        response.write("<p>Si es su responsabilidad, ya que este error se presenta cuando hubo un error al intentar acceder al servidor. <b><i>500 Internal Server Error.</i></b>");
        response.write("<br> Este mensaje indica que se ha producido un error en la conexión con el servidor y, por lo tanto, no se puede acceder a la página solicitada.</p>");
        response.write("<hr>");

        response.write("<h3> <li> ¿Qué significa que un atributo HTML5 esté depreciado o desaprobado (deprecated)? Menciona algunos elementos de HTML 4 que en HTML5 estén desaprobados.</li></h3>");
        response.write("<p><strong><i>Deprecated</i></strong> significa que su uso ya no es recomendado; sucede porque el estándar es");
        response.write("actualizado y algunas tags del lenguaje son eliminadas, agregadas o desaprobadas.</p>");
        response.write("<br>");
        response.write("<b>Elementos desaprobados en HTML5:</b>");
        response.write("<ul>");
        response.write("<li>basefont</li>");
        response.write("<li>center</li>");
        response.write("<li>applet</li>");
        response.write("<li>acronym</li>");
        response.write("<li>rev</li>");
        response.write("<li>charset</li>");
        response.write("<li>shape</li>");
        response.write("<li>longdesc</li>");
        response.write("<li>target</li>");
        response.write("<li>nohref</li>");
        response.write("</ul>");
        response.write("<br><hr>");

        response.write("<h3><li> ¿Cuáles son las diferencias principales entre HTML 4 y HTML5?</li></h3>");
        response.write("<ul>");
        response.write("<li>HTML5 es compatible con HTML4 y XHTML 1.0</li>");
        response.write("<li>Sintaxis simplificada.</li>");
        response.write("<li>Se introdujo el atributo <strong><i>meta</i></strong> para definir los caracteres que se usan.</li>");
        response.write("li>Se simplificó el <i>DOCTYPE</i>.</li>");
        response.write("<li><strong>Nuevos elementos</strong> como section, article, header, footer.</li>");
        response.write("<li><strong>Nuevos atributos</strong> como media, charset, autofocus, placeholder.</li>");
        response.write("<li><strong>Algunos elementos cambiaron</strong> como a, b, i, menú.</li>");
        response.write("<li><strong>Algunos atributos cambiaron</strong> como type, name, summary.</li>");
        response.write("<li><strong>Algunos elementos desaparecieron</strong> como basefont, big, center.</li>");
        response.write("<li><strong>Algunos atributos desaparecieron</strong> como align, background, bgcolor.</li>");
        response.write("</ul>");
        response.write("<br><hr>");

        response.write("<h3> <li> ¿Qué componentes de estructura y estilo tiene una tabla? </li></h3>");
        response.write("<table>");
        response.write("<thead><tr><th>Componente</th><th>Significado</th></tr></thead>");
        response.write("<tbody>");
        response.write("<tr><td>< table > </td><td>Define un contenedor para datos en forma de tabla.</td></tr>");
        response.write("<tr><td>< thead ></td><td>Define un grupo de filas al inicio de una tabla. <i>Encabezados</i></td></tr>");
        response.write("<tr><td>< tbody ></td><td>Define un grupo de filas para la tabla. <i>Contenido.</i></td></tr>");
        response.write("<tr><td>< tfoot ></td><td>Define un grupo de filas al final de la tabla.</td></tr>");
        response.write("<tr><td>< tr ></td><td>Define una fila de la tabla.</td></tr>");
        response.write("<tr><td>< td ></td><td> Define una celda de la tabla, debe estar debajo de <i>< tr ></i></tr></td></tr>");
        response.write("<tr><td>< caption ></td><td>Define el título de la tabla.</td></tr>");
        response.write("</tbody>");
        response.write("</table>");
        response.write("<br><hr>");

        response.write("<h3> <li> ¿Cuáles son los principales controles de una forma HTML5?</li></h3>");
        response.write("<strong>Controles principales:</strong>");
        response.write("<ul>");
        response.write("<li>Button</li><li>Label</li><li>Legend</li><li>Input</li>");
        response.write("</ul>");
        response.write("<hr>");

        response.write("<h3><li> ¿Qué tanto soporte HTML5 tiene el navegador que utilizas? Puedes utilizar");
        response.write("la siguiente página para descubrirlo: http://html5test.com/ (Al responder la pregunta recuerda poner el navegador que utilizas) </li></h3>");
        response.write("<strong>Navegador:</strong> Google Chrome");
        response.write("<br><hr>");

        response.write("<h2> Sobre el ciclo de vida de los sistemas de información:</h2>");
        response.write("<h3> <li> ¿Cuál es el ciclo de vida de los sistemas de información?</li></h3>");
        response.write("<p>");
        response.write("Un sistema de información está formado por la infraestructura, organización, personal y los componentes");
        response.write("necesarios para la recopilación, procesamiento, almacenamiento, transmisión, visualización y organización de los datos. <br>");
        response.write("El <i>ciclo de vida de un sistema de información</i> propone fases de análisis y diseño que sostiene que los sistemas son mejor");
        response.write("desarrollados con el uso de un ciclo especifico de actividades.<br> <br>");
        
        response.write("<strong>Etapas del ciclo de vida:</strong>");
        response.write("<ul>");
        response.write("<li><strong>Planificación: </strong> etapas previas.</li>");
        response.write("<li><strong>Análisis: </strong>¿Qué es lo que se necesita?</li>");
        response.write("<li><strong>Diseño: </strong>Estructura general del sistema</li>");
        response.write("<li><strong>Implementación: </strong> Selecconar las herramientas y el entorno de nuestro sistema.</li>");
        response.write("<li><strong>Pruebas: </strong> Corroborar que el diseño cumple con los requisitos.</li>");
        response.write("<li><strong>Mantenimiento: </strong>Introducir los ajustes necesarios para mejorar el rendimiento y corregir los problemas que puedan surgir.</li>");
        response.write("</ul>");
        response.write("</p><hr>");

        response.write("<h3><li> ¿Cuál es el ciclo de desarrollo de sistemas de información?</li></h3>");
        response.write("<p>");
        response.write("Es un proceso lógico para desarrollar un sistema de información. <br>");
        response.write("Este ciclo incluye los requisitos, la validación, formación, así como los usuarios. <br>");
        response.write("Hay una gran serie de sistemas de <i>ciclo de vida de desarrollo</i>, incluso incluyendo metodologías ágiles. <br><br>");
        response.write("<strong>Etapas del ciclo de desarrollo:</strong>");
        response.write("<ul>");
        response.write("<li><strong>Planeación: </strong> etapas previas.</li>");
        response.write("<li><strong>Definición de requisitos: </strong>Lo que debe hacer el sistema.</li>");
        response.write("li><strong>Diseño y Prototipado: </strong>Estructura del sistema y prototipos.</li>");
        response.write("<li><strong>Fase de desarrollo y pruebas: </strong> Comprobar el funcionamiento.</li>");
        response.write("<li><strong>Despliegue: </strong> Actividades que hacen que un sistema de software.</li>");
        response.write("<li><strong>Soporte: </strong>Mantenimiento que se le da a un sistema.</li>");
        response.write("<li><strong>Disposición: </strong> Estructura del sistema de información</li>");
        response.write("</ul>");
        response.write("</p><hr>");
        
        response.write("</ol>");
        response.write("<html>");
        response.end();
    }

    // CSS style
    else if (request.url === "/CSS-questions") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        // Head
        response.write('<head><meta charset = "UTF-8"><title>What is CSS</title></head>');

        // Body
        response.write("<header><h1>Introducción a CSS</h1></header>");
        response.write("<ol>");

        response.write("<h3> <li> Como ingeniero de software ¿cuál es tu recomendación sobre el uso de !important en un CSS?  </li></h3>");
        response.write("<p>");
        response.write("La palabra clave <strong>!important</strong> se utiliza para dar mayor prioridad a cierto estilo, de manera que las instrucciones siguientes no puedan sobrescribirla.");
        response.write("Se le da prioridad frente a todas las demás especificaciones. <br> El <strong>problema</strong> con esto, es que si hiciéramos un trabajo limpio como ingenieros de software, no se necesitaría. ");
        response.write("Pues podría usarse aplicando clases, y priorizando de manera correcta para que tenga el estilo que queremos. <br>");
        response.write("Pues podría usarse aplicando clases, y priorizando de manera correcta para que tenga el estilo que queremos. <br>");
        response.write("Además, puede causar problemas para <strong>otros desarrolladores</strong> que quieran hacer cambios en el código, por lo que deben ser usados cuidadosamente.");
        response.write("<strong><em>Si se puede usar, pero debe usarse solo cuando sea necesario. </em></strong>");
        response.write("</p>");
        response.write("<hr>");

        response.write("<h3><li> Si se pone una imagen de fondo en una página HTML, ¿por qué debe escogerse con cuidado? </li></h3>");
        response.write("<p>");
        response.write("Yo considero que debe elegirse <strong>cuidadosamente</strong>, pues puede afectar la visibilidad del texto de nuestra página. Puede causar que las letras no se vean por el color, o incluso si se ven, que cueste mucho trabajo para el lector. ");
        response.write("Además, y algo muy importante, es que puede quitar el <strong>foco de atención</strong> al contenido de nuestra página; cuando creamos una página queremos que el lector se centre en la información, una imagen lo hace más amigable, bonito y sencillo de leer, ");
        response.write("pero ponerla de fondo puede causar ruido y afectar el impacto de la página.");
        response.write("</p>");
        response.write("<hr>");

        response.write("<h3> <li> Como ingeniero de software, ¿cuál es tu recomendación al elegir las unidades de un propiedad de estilo entre %, px y pt? </li></h3>");
        response.write("<p>");
        response.write("Existen unidades de medida relatvas y absolutas. Las medidas <strong>relativas</strong>  son aquellas que determinan un tamaño en función de otro tamaño. Las medidas <strong>absolutas</strong> son concretas, específicas y medibles. <br>");
        response.write("<ul>");
        response.write("<li> El <strong>porcentaje (%)</strong> es una unidad relativa, pues indica la escala de la imagen o el estilo con respecto al tamaño de la ventana. </li>");
        response.write("<li> Los <strong>píxeles (px)</strong> son de tamaño fijo (absolutas), determinan el tamaño de las unidades que se utilizan en la pantalla de los medios de comunicación, es decir en una computadora. </li>");
        response.write("<li> Los <strong>puntos (pt)</strong> también son absolutos, es igual a 1/72 de pulgada. Este tipo de unidad es la más usada para los medios impresos. </li>");
        response.write("</ul><br>");
        response.write("Yo recomiendo principalmente el uso de <strong><em>PÍXELES</em></strong>, pues es lo más preciso en el medio digital; así puedes indicar exactamente el tamaño en el que quieres que se muestre. En algunos casos, también consideraría usar %, especialmente en algunas imágenes; ");
        response.write("pues así al hacer la ventana más chica la imagen no abarcará gran parte de la ventana, sino que se ajustará.");
        response.write("</p><hr>");

        response.write("<h3> <li> ¿Por qué el uso de una versión minimizada del CSS mejora el rendimiento del sitio? </li></h3>");
        response.write("<p>");
        response.write("Una versisón minimizada tiene dos ventajas principales:");
        response.write("<ul>");
        response.write("<li> <strong>Reduce el tamaño del archivo:</strong> gracias a que elimina comentarios y espacios blancos innecesarios. Esto hace que el script cargue de manera más rapida.</li>");
        response.write("<li> <strong> Corre más rápido: </strong>esto debido a que los comentarios y los espacios en blanco no deben ser ignorados.</li>");
        response.write("</ul><br>");
        response.write("Las versiones minimizadas mejoran el tráfico en la red y son más eficientes, por lo que suelen usarse por compañías grandes como Google. ");
        response.write("</p>");

        response.write("</ol>");
        response.write("</html>");
        response.end();
    }

    // JS
    else if(request.url === "/JS-questions") {
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        // Head
        response.write('<head><meta charset = "UTF-8"><title>What is JS</title></head>');

        // Body
        response.write("<header><h1>Introducción a CSS</h1></header>");
        response.write("<ol>");

        response.write("<h3> <li> ¿Qué diferencias y semejanzas hay entre Java y JavaScript? </li></h3>");
        response.write("<strong><em>Diferencias:</em></strong>");
        response.write("<ul>");
        response.write("<li>Java es un lenguaje de programación y JavaScript no, aunque comparten la misma sintaxis.  </li>");
        response.write("<li>JavaScript está <strong>basado en objetos</strong> (usado para la interacción de sitios web), mientras que Java es un <strong>lenguaje de programación"); 
        response.write("orientada a objetos </strong>, además de ser multiplataforma. </li>");
        response.write("<li>Java es un lenguaje de tipos rigurosos <strong><em>(strongly typed language)</em></strong>, mientras que JavaScript es un lenguaje de tipos permisivos. </li>");
        response.write("<li> Java es un lenguaje <strong>compilado</strong> y JavaScript uno <strong>interpretado</strong> por el cliente (navegador).</li>");
        response.write("<li>JavaScript no necesita declaración de tipos de variables, además no puede escribir en el disco duro (excepto con cookies), por lo que es un lenguaje seguro en Internet.</li>");
        response.write("</ul>");
        response.write("<strong><em>Similitudes:</em></strong>");
        response.write("<ul>");
        response.write("<li>Ambos lenguajes utilizan una <strong>sintaxis similar</strong> para condicionales y ciclos (if, for, while).</li>");
        response.write("<li>Se utiliza <strong><q>;</q></strong> para terminar declaraciones y <strong><q>return</q></strong> para dedvolver valores.</li>");
        response.write("</ul><hr>");

        response.write("<h3> <li> ¿Qué métodos tiene el objeto Date? (Menciona al menos 5*) </li></h3>");
        response.write("<ul>");
        response.write("<li><strong><em>getDate() </em></strong> Devuelve el día del mes. Número entre el 1 y el 31.</li>");
        response.write("<li><strong><em>getDay() </em></strong> Devuelve el día de la semana de la semana. Número entre 0 (domingo) y 6(sábado).</li>");
        response.write("<li><strong><em>getFullYear() </em></strong> Devuleve el año con 4 dígitos.</li>");
        response.write("<li><strong><em>getMinutes() </em></strong> Devuelve los minutos. Número entre 0 y 59.</li>");
        response.write("<li><strong><em>getMilliseconds() </em></strong> Devuelve los milisegundos. Número entre 0 y 9999.</li>");
        response.write("<li><strong><em>getTime() </em></strong> Devuelve milisegundos transcurridos entre el día 1 de enero de 1970 y la fecha actual.</li>");
        response.write("<li><strong><em>getDate() </em></strong> Actualiza el día del mes. </li>");
        response.write("<br>");
        response.write("</ul><hr>");

        response.write("<h3> <li> ¿Qué métodos tienen los arreglos? (Menciona al menos 5*) </li></h3>");
        response.write("<ul>");
        response.write("<li><strong><em>toString() </em></strong> Convierte un arreglo en un string con los elementos separados por comas.</li>");
        response.write("<li><strong><em>join() </em></strong> Combina los elementos en una string, puedes especificar el separador.</li>");
        response.write("<li><strong><em>pop() </em></strong>Elimina el último elemento del arreglo.</li>");
        response.write("<li><strong><em>push() </em></strong> Agrega un elemento al final del arreglo.</li>");
        response.write("<li><strong><em>shift() </em></strong> Elimina el primer elemento del arreglo, y cambia los demás al índice anterior.</li>");
        response.write("<li><strong><em>splice() </em></strong> Se utiliza para insertar elementos en una posición del array y eliminar un cierto número de elementos a partir de esa posición. </li>");
        response.write("<ul>");
        response.write('<li><strong>Ejemlo:</strong> arreglo.splice(3, 4, "manzana", “pera”);</li>');
        response.write('<li>Se eliminan 4 elementos del arreglo a partir de la posición 3 y se agregan "manzana" y "pera" en las posiciones 3 y 4 del arreglo, respectivamente.</li>');
        response.write("</ul>");
        response.write("<li><strong><em>length() </em></strong> Devuelve el tamaño del arreglo.</li>");
        response.write("</ul><hr>");

        response.write("<h3> <li> ¿Cómo se declara una variable con alcance local dentro de una función?) </li></h3>");
        response.write("Las variables se declaran con la palabra reservada <em><strong>let</strong></em>. <br><strong>Ejemplo:</strong> <code>let x = 2;</code>");
        response.write("Antes solían declararse con <em><strong>var</strong></em>, pero ya no se usa tanto debido a que se declara como variable global.<br>");
        response.write("<hr>");

        response.write("<h3> <li> ¿Qué implicaciones tiene utilizar variables globales dentro de funciones? </li></h3>");
        response.write("Una <strong>función global </strong> esta definida en cualquier punto del programa, no solamente en la función en la que se declara. <strong><em>Existen diferentes implicaciones:</em></strong>");
        response.write("<ul>");
        response.write("<li>Una variable global puede afectar o producir cambios en otras funciones o partes del código. </li>");
        response.write("<li>Hace el código menos legible, pues necesitas recordar la función de las variables globales.</li>");
        response.write("<li>Se ocupa más espacio del necesario, pues está variable esta en todo el programa; en cambio cuando se declara como <strong>variable local</strong>, se elimina al salir de la función.</li>");
        response.write("</ul>");

        response.write("</ol>");
        response.write("</html>");
        response.end();
    }

    else if (request.url === "/" && request.method === "GET") {
        response.setHeader('Content-Type', 'text/html');
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

        // Submit 
        response.write("<h2>Escribe tu nombre</h2>");
+       response.write('<form action="/" method="POST"><input type="text" name="nombre"><input type="submit" value="Enviar nombre"></form>');
        response.write("<br>Para acceder a los nombres entra http://localhost:3000/nombres");

        response.write("<br><br><h1>Un poco sobre mí</h1>");
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
    }

    else if (request.url === "/" && request.method === "POST") {
        
        const datos = [];

        // Obtienes los datos y los colocas en tu arreglo
        request.on('data', (dato) => {
            datos.push(dato);
            console.log(dato + "ingresó a mi página");
        });

        // Obtener solo el nombre
        return request.on('end', () => {
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_nombre = datos_completos.split('=')[1];
            
            // Dividimos el nombre, para poder remplazar los '+' por espacios
            let nombre_split = nuevo_nombre.split('+');
            let nombre = "";
            for (nom of nombre_split) {
                nombre += nom + " ";
            }
            
            // Añadimos el nombre al arreglo
            nombres.push(nombre);

            // Escribimos todos los nombres de los usuarios en un archivo de texto
            nombres_txt = "";
            for (nom of nombres) {
                nombres_txt += nom + '\n';
            }
            
            response.statusCode = 302;
            response.setHeader('Location', '/'); 
            
            filesystem.writeFileSync('Usuarios.txt', nombres_txt);

            return response.end();
        });
    }

    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write("<html>");
        response.write('<head><meta charset="UTF-8"><title>Page not found</title></head>');
        response.write("<body><h1>Page not found.</h1></body>");
        response.write("</html>");
        return response.end();
    }

}

module.exports = requestHandler;