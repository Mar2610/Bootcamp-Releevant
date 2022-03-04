/* Ejercicio 35
Crear un array de números donde le indicaremos el tamaño por teclado. Rellenará cada elemento
con números aleatorios entre 0 y 9. Posteriormente, mostrará por pantalla el valor de cada posición
junto con su índice y finalmente, la suma de todos los valores.*/

console.clear();

const prompt = require("prompt-sync")();

let miArray = [];

const longitud = Number(prompt("Longitud: ")); 
let sum = 0;

for (i=0; i<longitud; i++) {
    miArray[i] = Math.floor(Math.random() * 10) + 1;
    sum += miArray[i];
    console.log("La posición es ", i ,"y el valor es ", miArray[i]);
}

console.log("La suma es ", sum);

