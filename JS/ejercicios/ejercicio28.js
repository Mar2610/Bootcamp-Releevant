/*Ejercicio 28
Desarrollar un timer o temporizador. La cantidad de segundos con la que se quiere hacer la cuenta
atrás se introducirá por teclado. Cuando llegue al final, se imprimirá "¡¡Ring!!“ y el programa acabará.
• Investigar cómo hacer los intervalos en JS*/

const prompt = require("prompt-sync")();

const N = prompt("Introduce número: ");

let espera = setTimeout(tiempoEspera, N*1000);

function tiempoEspera () {
    console.log("RING");
    clearTimeout(espera); // Para limpiar el temporizador o acabar intervalos
}