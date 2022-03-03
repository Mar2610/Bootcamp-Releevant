// Ejercicio 15
// Modificar el algoritmo del ejercicio 6, de forma que, si se teclea un cero, se vuelva a pedir el
// número por teclado, así hasta que se teclee un número mayor que cero, recuerda la estructura
// while.

console.clear();

const prompt = require("prompt-sync")();
let numberA = Number(prompt("Introduce un número: "));


while (numberA === 0) {
    numberA = Number(prompt("Vuelve a introducir un número: "));
}


if (numberA === 0) {
    console.log ("El número es nulo");
} else if (numberA % 2 === 0) {
    console.log ("El número es par");
} else {
    console.log ("El número es impar");
}