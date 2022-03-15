//Algoritmo que lea dos números, calcule y escriba el valor de su suma, resta, producto y división.

// Necesitamos dos números que nos lo da el usuario, y después hacer operaciones con ellos. Luego mostrarlas en consola.

const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un número: "));
let number2 = Number(prompt("Introduce el segundo número: "));

let suma = number1 + number2;
let resta = number1 - number2;
let multiplicacion = number1 * number2;
let division = number1 / number2;

console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La multiplicacion es: " + multiplicacion);
console.log("La division es: " + division);





