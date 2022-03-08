/* Ejercicio 50
Hacer un algoritmo que cuente las veces que aparece una determinada letra en una frase que
introduciremos por teclado.*/

const prompt = require("prompt-sync")();

const letter = prompt("Letra: ");
const frase = prompt("Frase: ");
let count = 0;

for (let i = 0; i<frase.length; i++) {
    if(frase[i] === letter) {
        count++;
    } 
}

console.log(`La letra ${letter} aparece ${count} veces`);