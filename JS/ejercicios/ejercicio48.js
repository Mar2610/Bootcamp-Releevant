/* Ejercicio 48
Almacenar una lista de nombres en un array y luego ordenarlos alfabéticamente. Para la entrada de
datos se utiliza una estructura Mientras, sin saber a priori la cantidad de datos que se ingresarán.
Pista: Los datos alfanuméricos (strings) también se pueden comparar con los operadores < y >.*/
const prompt = require("prompt-sync")();

let miArray = [];
//const comparacion = (a,b) => (a>b) ? 1 : -1; Esto solo si son números o arrays
let i = 0;
let item;
do {
    item = prompt("Nombre: ");
    if(item !== "") {
        miArray[i++] = item;
    }
} while (item !== "");

console.log (miArray);
console.log(miArray.sort((a,b) => (a<b) ? 1 : -1)); //Cuando son strings, con el .sort es suficiente