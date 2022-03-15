/* Ejercicio 47
Dados un array de 5 elementos con números aleatorios del 1 al 100. Imprimir el estado inicial del
array, ordenarlo de forma ascendente y volver a imprimir el nuevo estado.*/

const length = 5;
let miArray = [];
const comparacion = (a,b) => (a>b) ? 1 : -1;

for (let i = 0; i < length; i++) {
  miArray[i] = Math.floor(Math.random()*100);
}
console.log (miArray);

miArray.sort(comparacion);

console.log(miArray);