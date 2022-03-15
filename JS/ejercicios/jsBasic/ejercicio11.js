// Ejercicio
// En una tienda efectúan un descuento a los clientes dependiendo de la cantidad de la compra. El
// descuento se basa en:
// Si el monto es menor que 500€ -> No hay descuento
// Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
// Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
// Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
// Más de 15.000€ -> 25% descuento
// Imprimir (Escribir) el precio final.

console.clear();
const prompt = require("prompt-sync")();

const price = Number(prompt("Cantidad de compra: "));

if (price > 0 && price < 500) {
    console.log("No hay descuento")
} else if (price > 500 && price <= 1000) {
    console.log ("Precio final: " + price * 0.95)
} else if (price > 1000 && price <= 7000) {
    console.log("Precio final: " + price * 0.90)
} else if (price > 7000 && price <= 15000) {
    console.log("Precio final: " + price * 0.80)
}else if (price > 15000) {
    console.log ("Precio final: " + price * 0.75)
} else {
    console.log("No procede")
}