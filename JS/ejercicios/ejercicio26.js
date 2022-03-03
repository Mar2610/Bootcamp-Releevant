/*Ejercicio 26
Desarrollar un algoritmo que lea 10 números por teclado y calcule el cubo de cada uno de ellos. En
cada lectura, tiene que indicar por pantalla el número que está pidiendo. Ejemplo de salida por
pantalla:
Introduce el número 1º.
➢ 8
El cubo de 8 es 512.
Introduce el número 2º.*/

const prompt = require("prompt-sync")();
const orden = ["1º", "2º", "3º", "4º", "5º", "6º", "7º", "8º", "9º", "10º"];

for (let i=0; i<10; i++) {
    let number = prompt("Introduce el número " + orden[i] + " ");
    console.log("El cubo de ",number , "es ", number ** 3);
}

