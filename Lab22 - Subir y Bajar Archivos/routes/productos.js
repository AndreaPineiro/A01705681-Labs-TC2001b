const express = require('express');

const isAuth = require('../util/is-auth');

const router = express.Router();

const path = require('path');

const productosController = require('../controllers/productos_controller');

//router.use(express.static(path.join(__dirname,  '..', 'public')));

router.get('/agregar', isAuth, productosController.getAgregarProducto);

router.post('/agregar', isAuth, productosController.postAgregarProducto);

router.get('/:producto_id', isAuth, productosController.getProducto);

router.get('/', isAuth, productosController.get);

//router.post('/', isAuth, productosController.postAgregarCarrito);

module.exports = router;