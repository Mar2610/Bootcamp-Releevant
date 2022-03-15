/* Ejercicio 33
Crear un array de tamaño 10 y que guardará números enteros introducidos por teclado.
Tras introducirlos todos, imprimirá cada índice junto con el valor al que corresponda.*/

console.clear();
const prompt = require("prompt-sync")();

let miArray = [];

const number = 11;

for (let i = 1; i < number; i++) {
    miArray[i] = Number(prompt("Número de entrada: "));
    console.log("El valor ", i ,"es ", miArray[i]);
}