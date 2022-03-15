/* Ejercicio 36
Crear dos arrays de números enteros de longitud 10 rellenos con números aleatorios del 1 al 20.
Imprimir índice y el resultado de la multiplicación de ambos elementos de los arrays del índice de
cada iteración. Cuidado con los elementos del array sin inicializar.*/

console.clear();

let miArray1 = [];
let miArray2 = [];

const arrayLength = 10;

for(let i = 0; i < arrayLength; i++) {
    miArray1[i] = Math.floor(Math.random() * 21) + 1;
    miArray2[i] = Math.floor(Math.random() * 21) + 1;
    console.log("En la iteración ", i , "la multiplicación de ", miArray1[i], "y de ", miArray2[i] ,"es", miArray1[i]*miArray2[i]);
}