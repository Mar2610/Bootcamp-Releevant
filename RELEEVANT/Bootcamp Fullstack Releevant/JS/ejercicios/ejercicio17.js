// Ejercicio 17
// Se pide representar un algoritmo que nos calcule la suma de los N primeros números naturales. N
// se leerá por teclado.

console.clear();

const prompt = require("prompt-sync")();
let N = Number(prompt("Introduce un número: "));

let sum = 0;
let count = 0;

for (let count = 0; count<N; count++) {
    sum = sum + count;
    console.log(`La suma es ${sum}`)
}