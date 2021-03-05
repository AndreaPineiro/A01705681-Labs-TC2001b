const express = require('express');
const router = express.Router();

const path = require('path');

const loginController = require('../controllers/login_controller');


router.get('/', loginController.getLogin);

router.post('/', loginController.postLogin);

router.get('/logout', loginController.logout)

module.exports = router;