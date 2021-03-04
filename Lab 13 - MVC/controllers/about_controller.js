exports.getHTML = (request, response, next) => {
    console.log('Alguien ingreso a la página sobre html');
    response.render('htmlQuestions', {
        title: "Laboratorio 1 -  Sobre HTML",
        name: "Laboratorio 1"
    });
};

exports.getCSS = (request, response, next) => {
    console.log('Alguien ingreso a la página sobre css');
    response.render('cssQuestions', {
        title: "Laboratorio 12 -  Sobre CSS",
        name: "Laboratorio 3"
    });
};

exports.getJS = (request, response, next) => {
    console.log('Alguien ingreso a la página sobre js');
    response.render('jsQuestions', {
        title: "Laboratorio 4 -  Sobre JS",
        name: "Laboratorio 4"
    });
};

exports.get = (request, response, next) => {
    console.log('Alguien ingreso a la página sobre mí');
    response.render('sobreMi');
};