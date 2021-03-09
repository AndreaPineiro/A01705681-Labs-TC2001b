exports.getLogin = (request, response, next) => {
    response.render('login', {
        title: "Laboratorio 13 -  Login",
        name: "Laboratorio 13 - Login",
        isLoggedIn: request.session.isLoggedIn
    });
};

exports.postLogin = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario;

    response.redirect('/');
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/'); //Este código se ejecuta cuando la sesión se elimina.
    });
};