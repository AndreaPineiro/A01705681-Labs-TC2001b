const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');

const path = require('path');

const usersController = require('../controllers/users_controller');


router.get('/', usersController.getLogin);

router.post('/', usersController.postLogin);

router.get('/logout', isAuth, usersController.logout);

router.get('/register', usersController.getRegister);

router.post('/register', usersController.postRegister);

module.exports = router;