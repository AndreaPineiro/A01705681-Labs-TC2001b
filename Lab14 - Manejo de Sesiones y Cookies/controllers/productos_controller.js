const Producto = require('../models/producto');

exports.getAgregarProducto = (request, response, next) => {
    console.log('Alguien ingreso a la página agregar productos');
    response.render('agregarProducto', {
        title: "Laboratorio 13 -  AgregarProducto",
        name: "Laboratorio 13 - Agregar Producto",
        isLoggedIn: request.session.isLoggedIn
    });
};

exports.postAgregarProducto = (request, response, next) => {
    console.log(request.body.nombre_producto);
    const nuevo_producto = new Producto(request.body.nombre_producto, request.body.imagen_producto, request.body.precio_producto);
    nuevo_producto.save();

    response.setHeader('Set-Cookie', ['ultimo_producto=' +nuevo_producto.nombre +'; HttpOnly']);

    response.redirect('/productos');
};

exports.get = (request, response, next) => {
    const productos = Producto.fetchAll();
    console.log('Alguien ingreso a la página productos');
    
    // Con cookie Parser
    console.log(request.cookies);
    console.log(request.cookies.ultimo_producto);
    
    //console.log('Cookie: ' + request.get('Cookie'));
    //console.log('Cookie: ' + request.get('Cookie').split(':')[0].trim().split('=')[1]);
    
    response.render('productos', {
        lista_productos: productos,
        title: "Laboratorio 13 -  Productos",
        name: "Laboratorio 13 - Productos",
        isLoggedIn: request.session.isLoggedIn === true ? true : false
    });
};


