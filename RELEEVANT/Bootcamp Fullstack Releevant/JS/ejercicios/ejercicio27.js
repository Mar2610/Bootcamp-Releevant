/*Ejercicio 27
Desarrollar un algoritmo que imprima la tabla de multiplicación del número N introducido por
teclado. Para N = 13, el output sería:
13 X 1 = 13
13 X 2 = 26
…
13 X 10 = 130*/

const prompt = require("prompt-sync")();

const N = prompt("Introduce número: ")
const max = 10;

for (let i=1; i<=max; i++) {
    console.log(N, "X", i, "=", N*i);
}
