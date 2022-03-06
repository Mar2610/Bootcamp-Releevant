/* Ejercicio 43
Partir del ejercicio 28 pero esta vez realizar un reloj digital completo que nunca pare. Tendrá la
estructura horas:minutos:segundos. Ejemplo de salida: 23:15:39
Nota: deberás utilizar “Esperar” y “Limpiar pantalla”.*/

console.clear();
const prompt = require("prompt-sync")();

const hours = prompt("Hora: ");
const minutes = prompt("Minutos: ");
const seconds = prompt("Segundos: ");

let espera = setTimeout(tiempoEspera, );

function tiempoEspera () {
    console.log("RING");
    clearTimeout(espera); // Para limpiar el temporizador o acabar intervalos
}