/* Ejercicio 41
Dado un array de N números enteros que se generen aleatoriamente, hacer un algoritmo que:
a) Obtenga cuántos números son mayores que 0.
b) Calcule el promedio de los números positivos.
c) Obtenga el promedio de todos los números.*/

console.clear();
const prompt = require("prompt-sync")();

const N = Number(prompt("Tamaño del array: "));
let miArray = [];
let positive = 0;
let totalSum = 0;
let positiveSum = 0;

for (let i = 0; i < N; i++) {
  miArray[i] = randomValue(-100, 100);
  if (miArray[i] > 0) {
    positive++;
    positiveSum += miArray[i];
  }
  totalSum += miArray[i];
}

function randomValue(min, max) {
  if (min < 0) {
    return min + Math.floor(Math.random() * (Math.abs(min) + max));
  } else {
    return min + Math.floor(Math.random() * max);
  }
}

console.log(positive);
console.log("Array:", miArray);
console.log("Números positivos:", positive);
console.log(`El promedio de positivos es: ${(positive === 0) ? 0: positiveSum/positive}`);
console.log("Promedio de todos los números:", totalSum / miArray.length);

// El promedio de positivos es: ${(positive === 0) ? 0: positiveSum/positive};