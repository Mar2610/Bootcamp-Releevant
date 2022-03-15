/* Ejercicio 45
Teniendo un vector con los números naturales que queramos, meter en otro de la misma longitud,
aquellos que sean pares y mayores que 25.
Después, mostrar el vector de origen completo y el de destino solo los números introducidos.*/

const prompt = require("prompt-sync")();
let longitud = Number(prompt("Longitud del array: "));
let array1 = [];
let array2 = [];
for (let i = 0; i < longitud; i++) {
  array1[i] =
    Math.floor(Math.random() * 30)+1;
  if (array1[i] % 2 === 0 && array1[i] > 25) {
    array2[i] = array1[i];
  } else {
    array2[i] = null;
  }
}
console.log(array1);
console.log(array2);
