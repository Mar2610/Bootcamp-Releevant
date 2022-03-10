/* Ejercicio 52
Rellenar un array con 10 números aleatorios entre 1 y 15. Posteriormente, buscar un número
introducido por teclado y nos debe decir si está incluido en el array y el índice de su primera
coincidencia.*/

const prompt = require("prompt-sync")();

let N = [];
const max = 10;
const comprobacionN = Number(prompt("Número a comprobar: "));
let N2 = 0;
let posicion = 0;

for (let i = 0; i<max; i++) {
    N[i] = Math.floor(Math.random()*15)+1;
    if(comprobacion(comprobacionN, N[i]) && posicion<1) {
        N2 = N[i];
        posicion = i;
        console.log(`El número ${comprobacionN} está incluido en el array y su índice es ${posicion}`);
    }
}

function comprobacion (numero, posicion) {
    for(let i = 0; i<max; i++){
        if(numero === posicion) {
            return true;
        }
    }
}

console.log(N);
console.log(N2);