// Ejercicio 14
// Construir un algoritmo que resuelva el problema que tienen unos surtidores de gasolina, que
// registran lo que surten en galones, pero el precio de la gasolina se fija en litros. El algoritmo debe
// calcular e imprimir el precio que hay que cobrarle al cliente.
// Precio gasolina = 1.333€/litro
// 1 galón = 3,78541 litros

console.clear();
const prompt = require("prompt-sync")();
const galons = Number(prompt("Introduce el número de galones: "));

const priceGalon = 3.78541 * 1.333;
let price = priceGalon * galons;

console.log(`El precio de la gasolina es ${price}`);