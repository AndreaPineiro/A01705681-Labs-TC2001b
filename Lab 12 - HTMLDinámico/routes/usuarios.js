const express = require('express');
const router = express.Router();

const path = require('path');
const nombres = ["Andrea Piñeiro", "Felipe Yepez"];


router.use(express.static(path.join(__dirname,  '..', 'public')));

router.use('/agregar', (request, response, next) => {
    console.log('Alguien ingreso a la página agregar usuarios');
    response.render('agregarUsuario', {
        title: "Laboratorio 12 -  AgregarUsuarios",
        name: "Laboratorio 12 - Agregar Usuarios"
    });
});


router.get('/', (request, response, next) => {
    console.log('Alguien ingreso a la página usuarios');
    response.render('usuarios', {
        lista_nombres: nombres,
        title: "Laboratorio 12 -  Usuarios",
        name: "Laboratorio 12 - Usuarios"
    });
});

router.post('/', (request, response, next) => {
    //console.log(request.body.nombre);
    nombres.push(request.body.nombre);
    response.redirect('/usuarios/');
});


module.exports = router;