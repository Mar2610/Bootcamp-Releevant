// Ejercicio 6
// Dado un número entero A, hacer un algoritmo que determine si es par, impar o nulo.
// Pista: para determinar el resto de una división, se usa la operación módulo %.

const prompt = require("prompt-sync")();

let numberA = Number(prompt("Introduce un número: "));


if (numberA === 0) {
    console.log ("El número es nulo");
} else if (numberA % 2 === 0) {
    console.log ("El número es par");
} else {
    console.log ("El número es impar");
}