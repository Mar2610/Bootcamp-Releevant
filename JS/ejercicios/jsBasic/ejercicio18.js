// Ejercicio 18
// Se pide representar el algoritmo que nos calcule la suma de los N primeros números pares a partir
//de N. Es decir, si insertamos un 5, nos haga la suma de 6+8+10+12+14.

console.clear();

const prompt = require("prompt-sync")();
let N = Number(prompt("Introduce un número: "));

let sum = 0;
let count = 0;
let initialNumber = N;

for (let i = 0; i<N; i++) {
    if (initialNumber % 2 === 0) {
        initialNumber = initialNumber + 2;
    } else {
        initialNumber = initialNumber +1;
    }
    sum = initialNumber + sum;
}

console.log(`La suma es ${sum}`);

