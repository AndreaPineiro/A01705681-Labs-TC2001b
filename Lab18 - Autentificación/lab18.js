const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const cookieParser = require('cookie-parser');

const session = require('express-session');

const csrf = require('csurf');
const csrfProtection = csrf();

app.set('view engine', 'ejs');
app.set('views', 'views');

const about = require("./routes/about");
const productos = require("./routes/productos");
const users = require("./routes/users");

app.use(express.static(path.join(__dirname, 'public')));

//Acceder facilmente a los datos de las formas
app.use(bodyParser.urlencoded({extended: false}));
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
        title: "Laboratorio 18",
        name: "Laboratorio 18",
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