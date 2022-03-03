// Ejercicio
// Construir un algoritmo tal que dado los datos de la base y la altura de un rectángulo calcule el
// perímetro y la superficie del mismo.
// Superficie= base*altura
// Perímetro = 2*(base + altura)
// Comprobar los resultados con varios datos de entradas diferentes.

console.clear();
const prompt = require("prompt-sync")();

let base = Number(prompt("Base: "));
let altura = Number(prompt("Altura: "));

if (base > 0 && altura > 0) {
    console.log("La superficie es " + base * altura);
    console.log("El perímetro es " + 2*(base+altura));
}  else {
    console.log("No procede");
}