//const productos = [{nombre: "Alexa Echo Dot", imagen: "https://cdn1.coppel.com/images/catalog/pm/2959973-1.jpg", precio: 1315.00}, {nombre: "Amazfit GTS Smartwatch", imagen: "https://static.quickmobileshop.com/cs-photos/products/original/smartwatch-amazfit-gts-rose-pink-roz_10066404_3_1585123232.jpg", precio: 3500.00}];
const db = require('../util/database'); 

module.exports = class Producto {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre, imagen, precio) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. Guarda nuevo objeto en la base de datos.
    save() {
        return db.execute('INSERT INTO productos (nombre, imagen, precio) VALUES (?, ?, ?)',
            [this.nombre, this.imagen, this.precio]
        );
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return db.execute('SELECT * FROM Productos');
    }


    static fetchOne(id) {
        return db.execute('SELECT * FROM Productos WHERE id_producto = ?', [id]);
    }

    static fetchByName(nombre) {
        return db.execute('SELECT * FROM Productos WHERE nombre LIKE ?', ['%'+nombre+'%']);
    }
}