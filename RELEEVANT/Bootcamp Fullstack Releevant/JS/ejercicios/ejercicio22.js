/*Ejercicio 22
Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y
100.*/

console.clear();

let number = 1;
let sum = 0;

for (let number = 1; number <= 100; number++){
    if (number % 2 === 0) {
        sum += number;
        console.log(number);
    } else if (number % 3 === 0){
    console.log(number);
    }
}

