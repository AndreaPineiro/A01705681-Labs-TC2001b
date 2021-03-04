const Usuario = require('../models/usuario');

exports.getAgregarUsuarios = (request, response, next) => {
    console.log('Alguien ingreso a la página agregar usuarios');
    response.render('agregarUsuario', {
        title: "Laboratorio 13 -  AgregarUsuarios",
        name: "Laboratorio 13 - Agregar Usuarios"
    });
};

exports.postAgregarUsuario = (request, response, next) => {
    console.log(request.body.nombre);
    const nuevo_usuario = new Usuario(request.body.nombre);
    nuevo_usuario.save();
    response.redirect('/usuarios');
};

exports.get = (request, response, next) => {
    console.log('Alguien ingreso a la página usuarios');
    response.render('usuarios', {
        lista_nombres: Usuario.fetchAll(),
        title: "Laboratorio 13 -  Usuarios",
        name: "Laboratorio 13 - Usuarios"
    });
};


