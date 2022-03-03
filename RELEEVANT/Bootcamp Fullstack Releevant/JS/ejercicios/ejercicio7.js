// Ejercicio 7
// Construir un algoritmo que dado el coste de un artículo vendido y la cantidad de dinero entregado,
// calcule e imprima el cambio que se debe entregar al cliente.

const prompt = require("prompt-sync")();

let sold = Number(prompt("Coste del artículo: "));
let received = Number(prompt("Dinero entregado: ")); 

if (sold < received) {
    let change = received - sold; // Cuando declaras una variable dentro de un bloque no es accesible después desde bloques externos
    console.log("El cambio es: " + change);
} else if (sold === received) {
    console.log("Es justo");
} else {
    console.log("Es pobre");
}