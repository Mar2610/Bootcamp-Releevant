// Ejercicio 21
// Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media
// de todos ellos. Piensa como debemos inicializar las variables.

console.clear();
const prompt = require("prompt-sync")();

let miArray = [];

let media=0;
let min = Infinity;
let max = 0;
let number = 1;
let indice = 0;
while (number > 0) {
    number = Number(prompt("Introduce un número: "))
    if (number === 0) {
        break;
    }
    miArray [indice] = number;
    indice++;
    if(number > max) {
        max = number;
    }
    if(number < min) {
        min = number;
    }
}

for (let i=0; i<indice; i++) {
    media = miArray[i] + media;
}

media = media / (miArray.length);

console.log(`El número máximo es ${max} El mínimo es ${min} y la media es ${media}`);