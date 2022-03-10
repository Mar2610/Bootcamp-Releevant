/* Ejercicio 52
Rellenar un array con 10 números aleatorios entre 1 y 15. Posteriormente, buscar un número
introducido por teclado y nos debe decir si está incluido en el array y el índice de su primera
coincidencia.*/

const prompt = require("prompt-sync")();

let N = [];
const max = 10;
const numero = Number(prompt("Número a comprobar: "));
let posicion = -1;
const comprobacion = (numero, posicion) => (numero === posicion);

for (let i = 0; i<max; i++) {
    N[i] = Math.floor(Math.random()*15)+1;
    if(comprobacion(numero, N[i]) && posicion<0) {
        posicion = i;
        console.log(`El número ${numero} está incluido en el array y su índice es ${posicion}`);
    }
}

console.log(N);