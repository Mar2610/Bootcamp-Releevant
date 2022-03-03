/*Ejercicio 25
Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese
tamaño. Los asteriscos sólo se verán en el borde del cuadrado, no en el interior.
Ejemplo, para lado = 4 escribiría:
* * * *
*     *
*     *
* * * *
Recuerda la estructura repetitiva For.*/

const prompt = require("prompt-sync")();
const max = Number(prompt("Introduce número: "));

for (let i = 0; i<max; i++) {
    console.log (imprimir_linea(i));
}

/*
    Función que imprime una línea rellena de asteriscos si es la primera
    o la última. Si son líneas centrales, el primer y último caracter son
    asteriscos y los del centro son en blanco.
*/

function imprimir_linea (num_linea) {
    if (num_linea === 0 || num_linea === max-1) {
        return rellenar_linea ("*", "*");
    } else {
        return rellenar_linea ("*", " ");
    }
}

function rellenar_linea (extremo,central) {
    let linea = "";
    let caracter;
    for (let i=0; i<max; i++) {
        if (i===0 || i===max-1) {
            caracter = extremo;
        } else {
            caracter = central;
        }
        linea = linea + caracter;
    }
    return linea;
}