const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');

const about = require("./routes/about");
const usuarios = require("./routes/usuarios");

app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use('/about', about);
app.use('/usuarios', usuarios);

app.use((request, response, next) => {
    next();
});


app.use('/', (request, response, next) => {
    console.log('Alguien ingreso a la página de inicio');
    response.render('paginaInicio', {
        title: "Laboratorio 12",
        name: "Laboratorio 12"
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