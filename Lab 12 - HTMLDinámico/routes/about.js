const express = require('express');
const router = express.Router();

const path = require('path');

router.use(express.static(path.join(__dirname,  '..', 'public')));

router.use('/html', (request, response, next) => {
    console.log('Alguien ingreso a la página sobre html');
    response.render('htmlQuestions', {
        title: "Laboratorio 1 -  Sobre HTML",
        name: "Laboratorio 1"
    });
});

router.use('/css', (request, response, next) => {
    console.log('Alguien ingreso a la página sobre css');
    response.render('cssQuestions', {
        title: "Laboratorio 12 -  Sobre CSS",
        name: "Laboratorio 3"
    });
});

router.use('/js', (request, response, next) => {
    console.log('Alguien ingreso a la página sobre js');
    response.render('jsQuestions', {
        title: "Laboratorio 4 -  Sobre JS",
        name: "Laboratorio 4"
    });
});

router.use('/', (request, response, next) => {
    console.log('Alguien ingreso a la página sobre mí');
    response.render('sobreMi');
});

module.exports = router;