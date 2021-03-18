const express = require('express');
const router = express.Router();

const path = require('path');

const productosController = require('../controllers/productos_controller');

//router.use(express.static(path.join(__dirname,  '..', 'public')));

router.get('/agregar', productosController.getAgregarProducto);

router.post('/agregar', productosController.postAgregarProducto);

router.get('/:producto_id', productosController.getProducto);

router.get('/', productosController.get);

module.exports = router;