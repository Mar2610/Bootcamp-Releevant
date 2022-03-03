/*Ejercicio 19
Dada una secuencia de longitud indefinida de números leídos por teclado, que acabe con un –1,
por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; Realizar el algoritmo que calcule la media aritmética.
Suponemos que el usuario no insertará número negativos.*/

console.clear();

const prompt = require("prompt-sync")();
let numeroIntroducido = Number(prompt("Introduce los números: "));

let sum = 0;
let count = 0;

while (numeroIntroducido >= 0) {
    sum = numeroIntroducido + sum;
    count++;
    numeroIntroducido = Number(prompt("Introduce un número: "));
}

console.log("La media aritmética es: " + sum / count);