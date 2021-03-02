// Función para obtener el promedio de los elementos de una lista
function promedio(arreglo) {
    let suma = 0;
    for (let item of arreglo) {
        suma += item;
    }
    return (suma/arreglo.length);    
}

// Función que recibe una string y la escribe en un archivo.
function writeInFile (string) {
    const filesystem = require('fs');
    filesystem.writeFileSync('newFile', string);
}

// Programa implementado en otro lenguaje de programación.
// Social Distance (Codeforces 1367C) 
// https://codeforces.com/problemset/problem/1367/C
function socialDistance(tables, minDistance, freeTables){
    let cont0 = 0;
    let cont1 = 0;
    let tablesAvailable = 0;

    for (let i = 0; i < freeTables.length; i++){
        if (freeTables[i] === '1') {
            cont1 += 1;
        }
        else if(freeTables[i] === '0') {
            cont0 += 1;
        }

        if (cont1 === 2) {
            if (cont0 > 2 * minDistance){
                tablesAvailable += Math.ceil((cont0 - 2 * minDistance) / (minDistance + 1)); 
                console.log('mesas' + tablesAvailable);
            }
            cont1 = 1;
            cont0 = 0;
        }
        else if (freeTables[i] === '1' && cont0 != 0 && cont1 === 1) {
            tablesAvailable += Math.ceil((cont0 - minDistance) / (minDistance + 1));
            cont1 = 1;
            cont0 = 0;
        }
    }
    if (cont1 === 0){
        tablesAvailable += Math.ceil(cont0 / (minDistance + 1));
    }
    else if (cont1 === 1) {
        tablesAvailable += Math.ceil((cont0 - minDistance) / (minDistance + 1));
    }

    return (tablesAvailable);
}

const arreglo = [60, 90, 100, 10, 20, 0, 12, 34, 100, 50, 200];
console.log(promedio(arreglo));
writeInFile('Andrea Piñeiro A01705681. Esto se escribirá en un nuevo archivo.');

console.log(socialDistance(6, 1, '100010'));
console.log(socialDistance(6, 2, '000000'));
console.log(socialDistance(5, 1, '10101'));
console.log(socialDistance(3, 1, '001'));
console.log(socialDistance(2, 2, '00'));
console.log(socialDistance(1, 1, '0'));


