const express = require('express');
const router = express.Router();

const path = require('path');

const usuariosController = require('../controllers/usuarios_controller');

//router.use(express.static(path.join(__dirname,  '..', 'public')));

router.get('/agregar', usuariosController.getAgregarUsuarios);

router.post('/agregar', usuariosController.postAgregarUsuario);

router.get('/', usuariosController.get);

module.exports = router;