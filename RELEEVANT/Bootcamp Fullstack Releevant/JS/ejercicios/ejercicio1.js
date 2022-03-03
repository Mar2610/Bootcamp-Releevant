// Ejercicio 1
// Dadas dos variables numéricas A y B, que el usuario debe teclear,
// se pide realizar un algoritmo que intercambie los valores de ambas
// variables y muestre cuánto valen al final cada una de ellas (recuerda la asignación).

const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un número: ")); //Al poner Number requerimos que solo se puedan poner números
let number2 = prompt("Introduce el segundo número: ");

let aux = number1 ; // Si no guardas el number1 en otro sitio, al igualarlo al number2 se va a perder el valor
number1 = number2;
number2 = aux;

console.log("El nuevo valor del número uno es:" + number1);
console.log("El nuevo valor del número dos es:" + number2);


