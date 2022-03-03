// Ejercicio 31
// Algoritmo que lea un número entero (altura) y a partir de él cree una escalera invertida de
// asteriscos con esa altura. Deberá quedar así, si ponemos una altura de 5.
// *****
// ****
// ***
// **
// *

console.clear();
const prompt = require("prompt-sync")();

const N = prompt("Introduce número: ");

for (let N = 0; i=N; i++) {
    console.log(imprimir_linea(i));
}

function imprimir_linea (numLinea) {
    if (numLinea === N) {
       return rellenarLinea("*", "*");
    } else {
        return rellenarLinea(" ", "*");
    }
}

function rellenarLinea(inicio, fin) {
    let linea = "";
    let caracter;
    for (let i = 0; i=N; i++) {
        if (i===N) {
            caracter=inicio;
        } else {
            caracter = fin;
        }
        linea += caracter;
    }
    return linea;
}