
function table_1(){
    let numero = prompt("Escribe un número")

    document.write("<table><thead><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr></thead>");
    for (let i = 1; i <= numero; i++){
        document.write("<tr><th>" + i + "</th><th>" + Math.pow(i, 2) + "</th><th>" + Math.pow(i, 3) + "</th></tr>")
    }
    document.write("</table>")

    /*
    let boton = document.getElementById("regresarMenu");
    boton.innerHTML = ' <button class = "button" onclick = "location.href =';
    boton.innerHTML = '"Lab4.html" value = "Volver a menú"';
    */
}

function suma_2() {
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);
    sum = num1 + num2;

    let tiempoInicio = new Date();
    let operacion = prompt ("Resuelva la siguiente suma: " + num1 +" + " + num2);
    let tiempoFin = new Date();

    if (operacion == sum){
        document.write ("¡Correcto!");
    } else {
        document.write ("¡Incorrecto! La respuesta correcta es: " + sum);
    }

    let tiempo = (tiempoFin - tiempoInicio) / 1000;
    document.write("<br>Tu tiempo fue de: " + tiempo + " segundos");
}

function array_3() {
    let n = prompt("Ingrese el número de elementos: ");
    let arrayOrig = new Array; 
    let negativos = 0, ceros = 0, mayores = 0;

    for(let i=0; i<n; i++) {
        let num = Math.floor((Math.random() * (100 - (-100) + 1)) - 100); 
        arrayOrig.push(num); 
    }

    document.write("<strong>Array original: </strong>");
    for(let i=0; i<n-1; i++) {
        document.write(arrayOrig[i] + ", ");
    }
    document.write(arrayOrig[n-1]);

    for (let i = 0; i < arrayOrig.length; i++){
        if (arrayOrig[i] < 0){
            negativos ++;
        } 
        else if (arrayOrig[i] == 0){
            ceros ++;
        }
        else {
            mayores++;
        }
    }

    document.write("<br><br>");
    document.write("Negativos = " + negativos + "<br>");
    document.write("Ceros = " + ceros + "<br>");
    document.write("Mayores a 0 = " + mayores + "<br>");
}

function promedio_4() {
    let renglones = Math.floor(Math.random() * 20) + 1; 
    let numeros = [];
    for(let i=0; i < renglones; i++) {
        numeros[i] = [];
        for(let j=0; j < renglones; j++) {
            numeros[i][j] = Math.floor(Math.random() * 10);
        }
    }

    let promedios = [];
    for(let i=0; i < renglones; i++) {
        document.write("<br>")
        let sum = 0; 
        for(let j = 0; j < renglones; j++) {
            sum += numeros[i][j];
            document.write(numeros[i][j] + " ");
        }
        let promedio = Number(Math.round(sum/renglones + 'e2')+ 'e-2'); 
        document.write("&nbsp;&nbsp;&nbsp;&nbsp <strong>Promedio " + (i+1) + "</strong> = " + promedio)
    }
}


function inverso_5() {
    let numero = prompt ("Ingresa un número entero positivo ");
    do {
        if (numero < 0){
            numero = prompt ("Ingresa un número entero positivo ");
        } 
        if (numero - Math.floor(numero) != 0){
            numero = prompt ("Ingresa un número entero positivo ");
        }
    } while (numero < 0 || (numero - Math.floor(numero) != 0));
    
    if (numero > 0 || (numero - Math.floor(numero) == 0)) {
        const numeroOrig = numero;
        let respuesta = "";

        do {
            respuesta += (numero % 10);
            numero = Math.floor(numero / 10);
        } while (numero > 0);

        document.write("El inverso de " + numeroOrig + " es " + respuesta + "<br>");
    }
}

function foxDividingCheese_6(){
    let a = prompt("Ingresa el peso de la 1er pieza de queso");
    let b = prompt("Ingresa el peso de la 2a pieza de queso");
    let ans = 0;

    let factores_a = [0, 0, 0];
    let factores_b = [0, 0, 0];
    let divisores = [2, 3, 5];

    factores_a = encontrarFactores(factores_a, a, divisores);
    document.write("<br>");
    factores_b = encontrarFactores(factores_b, b, divisores);

    
    if ((factores_a[1] != 1 || factores_b[1] != 1) && factores_a[1] != factores_b[1]){
        ans = -1;
    } 

    else {
        ans = operacionesMinimas(ans, factores_a[0], factores_b[0]);
    }

    document.write(ans);
}

function encontrarFactores(factores, num, divisores) {
    let i = 0;
    do {
        if (num % divisores[i] === 0){
            factores[i] += 1;
            num /= divisores[i];
        } else {
            i++;
        }
    } while (i <= 2);
    return [factores, num];
}

function operacionesMinimas(ans, factores1, factores2){
    for (let i = 0; i <=2; i++){
        if (factores1[i] > factores2[i]){
            ans += factores1[i] - factores2[i];
        } else {
            ans += factores2[i] - factores1[i];
        }
    }
    return ans;
}

