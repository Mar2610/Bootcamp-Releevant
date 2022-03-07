/* Ejercicio 46
Dados A, B y C que representan a números enteros diferentes construir un algoritmo para escribir
estos números de forma descendente.*/

const prompt = require("prompt-sync")();

const length = Number(prompt("Longitud del array: "));
let miArray = [];

for (let i = 0; i < length; i++) {
  miArray[i] = prompt("Introduce número: ");
}

miArray.sort(function (a, b) {
  return b - a;
});

console.log(miArray);
