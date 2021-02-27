const express = require('express');
const app = express();

//Middleware
app.use( (request, response, next) => {
    console.log('¡Ya no tengo que reiniciar el servidor!');
    console.send('Hola, Bienvenidos a mi página.');
    next();
});

app.use('/', (request, reponse, next) => {
    response.send("Lab 11 <br> Andrea Piñeiro Cavazos");
});


app.listen(3000);