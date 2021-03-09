const Usuario = require('../models/usuario');

exports.getAgregarUsuarios = (request, response, next) => {
    console.log('Alguien ingreso a la página agregar usuarios');
    response.render('agregarUsuario', {
        title: "Laboratorio 13 -  AgregarUsuarios",
        name: "Laboratorio 13 - Agregar Usuarios",
        isLoggedIn: request.session.isLoggedIn
    });
};

exports.postAgregarUsuario = (request, response, next) => {
    console.log(request.body.nombre);
    const nuevo_usuario = new Usuario(request.body.nombre);
    nuevo_usuario.save();

    response.setHeader('Set-Cookie', ['ultimo_usuario=' +nuevo_usuario.nombre +'; HttpOnly']);

    response.redirect('/usuarios');
};

exports.get = (request, response, next) => {
    const usuarios = Usuario.fetchAll();
    console.log('Alguien ingreso a la página usuarios');
    
    // Con cookie Parser
    console.log(request.cookies);
    console.log(request.cookies.ultimo_usuario);
    
    //console.log('Cookie: ' + request.get('Cookie'));
    //console.log('Cookie: ' + request.get('Cookie').split(':')[0].trim().split('=')[1]);
    
    response.render('usuarios', {
        lista_nombres: usuarios,
        title: "Laboratorio 13 -  Usuarios",
        name: "Laboratorio 13 - Usuarios",
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};


