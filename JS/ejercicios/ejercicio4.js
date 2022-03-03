// Ejercicio 4
// Diseñar un algoritmo que pida por teclado tres números;
// si el primero es negativo, debe imprimir el producto de
// los tres y si no lo es, imprimirá la suma.

const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un número: "));
let number2 = Number(prompt("Introduce el segundo número: "));
let number3 = Number(prompt("Introduce el tercer número: "));


// is not a number
if (isNaN(number1) || isNaN(number2) || isNaN(number3)){
    console.log("No se permiten letras");
} else {
    if (number1 < 0){
        let product = number1 * number2 * number3;
        console.log(`El producto es: ${product}`);
    } else {
        let suma = number1 + number2 + number3;
        console.log(`La suma es: ${suma}`);
    }
}