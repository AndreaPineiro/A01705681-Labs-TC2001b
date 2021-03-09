const express = require('express');
const router = express.Router();

const path = require('path');

const aboutController = require('../controllers/about_controller');
//router.use(express.static(path.join(__dirname,  '..', 'public')));

router.use('/html', aboutController.getHTML);

router.use('/css', aboutController.getCSS);

router.use('/js', aboutController.getJS);

router.get('/', aboutController.get);

module.exports = router;