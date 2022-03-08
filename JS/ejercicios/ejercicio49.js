/* Ejercicio 49
Se tienen los costes de producción de tres departamentos (dulces, bebidas y conservas)
correspondientes a los 12 meses del año anterior. Construir algoritmo que proporcione:
a) ¿En qué mes se registró el mayor coste de producción de dulces?
b) Promedio anual de los costes de producción de bebidas
c) ¿En qué mes se registró el mayor coste de producción en bebidas, y en qué mes el menor
coste?
d) ¿Cuál fue el que tuvo menor coste de producción en diciembre?*/

const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const productCost = ["Dulces", "Bebidas", "Conservas"];
const max = months.length;
const maxProduct = productCost.length;

let costes = [];

for (let i = 0; i < maxProduct; i++) {
    const item = [];
    for (let j = 0; j < max; j++){
        item[j] = Math.floor(Math.random()*100000)+20000;
    }
    costes[i] = item;
}
console.log(costes);

let maxSweet = -1;
let maxPosicion = -1;
for(let i = 0; i < max; i++) {
    if (costes[0][i] > maxSweet) {
        maxSweet = costes[0][i];
        maxPosicion = i;
    }
}

console.log(costes[0]);

/*console.log(`El mayor coste de producción de dulces fue ${Math.max(...costes[0])} y fue en el mes de ${months[2]}`);*/
// Forma fácil de hacerlo