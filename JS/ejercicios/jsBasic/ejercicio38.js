/* Ejercicio 38
Dado un array de números de 5 posiciones con los siguiente valores [1, 2, 3, 4, 5], guardar los
valores de este array en otro array distinto pero con los valores invertidos, es decir, que el segundo
array deberá tener los valores [5,4,3,2,1].*/

let miArray = [1, 2, 3, 4, 5];
let miArray2 = [];

for (i=0; i<miArray.length; i++) {
    console.log(i, miArray.length-i-1);
    miArray2[miArray.length-i-1] = miArray[i];
}

console.log(miArray2);