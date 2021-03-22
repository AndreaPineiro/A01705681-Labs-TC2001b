const Usuario = require('../models/user');
const bcrypt = require('bcryptjs');

exports.getLogin = (request, response, next) => {
    response.render('login', {
        title: "Laboratorio 13 -  Login",
        name: "Laboratorio 13 - Login",
        error: request.session.error,
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postLogin = (request, response, next) => {
    request.session.error = "";
    const username = request.body.usuario;
    Usuario.fetchOne(username)
        .then(([rows, fieldData]) => {
            if (rows.length < 1){
                request.session.error = "El usuario y/o contraseña son incorrectos";
                response.redirect('/users/');
            }
            else {
                bcrypt.compare(request.body.password, rows[0].password)
                    .then(doMatch => {
                        if (doMatch) {
                            request.session.isLoggedIn = true;
                            request.session.usuario = request.body.usuario;
                            return request.session.save(err => {
                                response.redirect('/productos');
                            });
                        }
                        request.session.error = "El usuario y/o contraseña son incorrectos";
                        response.redirect('/users/');
                    }).catch(err => {
                        request.session.error = "El usuario y/o contraseña son incorrectos"
                        response.redirect('/users/');
                });
            }
        })
        .catch(err => {
            console.log(err);
        }); 
    
};

exports.logout = (request, response, next) => {
    request.session.destroy((err) => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.getRegister = (request, response, next) => {
    response.render('registerUser', {
        title: "Laboratorio 13 -  Registra tus datos",
        name: "Laboratorio 13 - Registra tus Datos",
        csrfToken: request.csrfToken(),
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};

exports.postRegister = (request, response, next) => {
    const nuevo_usuario = new Usuario(request.body.usuario, request.body.nombre, request.body.password);
    nuevo_usuario.save()
        .then(() => {
            request.session.isLoggedIn = true;
            request.session.usuario = request.body.usuario;
            response.redirect('/productos');
        }).catch(err => console.log(err));
};
