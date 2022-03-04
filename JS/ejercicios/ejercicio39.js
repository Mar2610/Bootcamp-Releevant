/* Ejercicio 39
Dado dos arrays del mismo tamaño, determinar, elemento a elemento, si ambos son iguales. Con
que un elemento sea diferente, se considerarán los arrays como diferentes. Escribir al final del
algoritmo el resultado.*/

console.clear();

let miArray1 = [1,2,3,4,5];
let miArray2 = [5,2,8,4,7];

for (i=0; i<miArray1.length; i++) {
    if (miArray1[i] !== miArray2[i]) {
        console.log ("El elemento es diferente");
        break;
    }

}
