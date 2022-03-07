/* Ejercicio 46
Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir
estos números de forma descendente.*/

const prompt = require("prompt-sync")();

const length = Number(prompt("Longitud del array: "));
let miArray = [];
const comparacion = (a,b) => (a<b) ? 1 : -1;

for (let i = 0; i < length; i++) {
  miArray[i] = Math.floor(Math.random()*20);
}
console.log (miArray);

miArray.sort();

console.log(miArray);

// Función flecha: (x,y) => {return x-y;}