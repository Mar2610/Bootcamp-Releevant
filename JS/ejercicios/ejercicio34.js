/* Ejercicio 34
a) Generar un número aleatorio (del 1 al 10) que el usuario debe adivinar.
b) Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir si el número es mayor
o menor que la lectura.*/

console.clear();

const prompt = require("prompt-sync")();

const randomNumber = Math.floor(Math.random() * 100) + 1;

let number;

do {
    number = Number(prompt("Adivina el número: "));
    if (number < randomNumber){
        console.log("El número es mayor");
    } else {
        console.log("El número es menor")
    }
    
    
} while(number !== randomNumber);

console.log("Has acertado el número");