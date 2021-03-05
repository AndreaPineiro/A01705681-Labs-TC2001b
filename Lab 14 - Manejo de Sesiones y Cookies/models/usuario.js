const usuarios = ["Andrea Piñeiro", "Felipe Yepez"];

module.exports = class Usuario {

    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(nombre) {
        this.nombre = nombre;
    }

    //Este método servirá para guardar de manera persistente el nuevo objeto. Guarda nuevo objeto en la base de datos.
    save() {
        usuarios.push(this.nombre);
    }

    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
        return usuarios;
    }

}