/* Ejercicio 46
Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir
estos números de forma descendente.*/

const prompt = require("prompt-sync")();

const length = Number(prompt("Longitud del array: "));
let miArray = [];
const comparacion = (a,b) => (a<b) ? 1 : -1; /* Función flecha: la metes en una variable/constante, lo igualas a los
                                                parámetros de la función y después de la flecha pones la sentencia*/

for (let i = 0; i < length; i++) {
  miArray[i] = Math.floor(Math.random()*20);
}
console.log (miArray);

miArray.sort(); // Función que invierte los elementos del array

console.log(miArray);