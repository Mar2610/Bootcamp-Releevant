/* Ejercicio 48
Almacenar una lista de nombres en un array y luego ordenarlos alfabéticamente. Para la entrada de
datos se utiliza una estructura Mientras, sin saber a priori la cantidad de datos que se ingresarán.
Pista: Los datos alfanuméricos (strings) también se pueden comparar con los operadores < y >.*/
const prompt = require("prompt-sync")();

const length = Number(prompt("Tamaño del array: "));
let miArray = [];
const comparacion = (a,b) => (a>b) ? 1 : -1;
let i = 0;

do {
    miArray[i] = prompt("Nombre: ");
    i++;
} while (i<length)

console.log (miArray);

miArray.sort(comparacion);

console.log(miArray);