const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const cookieParser = require('cookie-parser');

const session = require('express-session');

const multer = require('multer');

const csrf = require('csurf');
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const about = require("./routes/about");
const productos = require("./routes/productos");
const users = require("./routes/users");


//Acceder facilmente a los datos de las formas
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

// fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        // 'uploads': Es el directorio del servidor donde se subirán los archivos.
        callback(null, 'uploads');
    },
    filename: (request, file, callback) => {
        // Aquí configuramos el nombre que queremos que tenga el archivo en el servidor, para que no
        // haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp.
        callback(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
    },
});

// Para limitar el tipo de archivos
const fileFilter = (request, file, callback) => {
    if (file.mimetype == 'image/png' ||
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg') {
            callback (null, true);
        } else {
            callback (null, false);
        }
}

// Acceder a multer
//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('imagen_producto'));

//Para acceder a los recursos de la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

//Para acceder a los recursos de la carpeta upload
app.use(express.static(path.join(__dirname, 'uploads')));

// Para acceder a los valores de las cookies
app.use(cookieParser());
// Para trabajar con sesiones
app.use(session({
    secret: 'tb2005', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use(csrfProtection); 

app.use('/about', about);
app.use('/productos', productos);
app.use('/users', users);

app.use((request, response, next) => {
    next();
});



app.use('/', (request, response, next) => {
    //console.log('Alguien ingreso a la página de inicio');
    response.render('paginaInicio', {
        title: "Laboratorio 24",
        name: "Laboratorio 24",
        isLoggedIn: request.session.isLoggedIn
    });
});

app.use( (request, response, next) => {
    console.log(request.url);
    response.status(404);
    //response.statusCode = 404;
    //response.status(404).send('<h1>Page not found.</h1>');
    response.send('<h1>Page not found.</h1>'); 
});


app.listen(3000);