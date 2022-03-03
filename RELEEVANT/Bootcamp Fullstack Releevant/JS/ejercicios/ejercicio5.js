// Ejercicio 5
// Construir algoritmo tal que con un número entero como entrada, determine e imprima si es positivo,
// negativo o nulo. (nulo es 0)

const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un número: "));

if(number1 < 0) {
    console.log ("El número es negativo");
} else if (number1 > 0) {
    console.log("El número es positivo");
} else {
    console.log ("El número es nulo");
}