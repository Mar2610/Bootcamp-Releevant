/*Ejercicio 29
Desarrollar una calculadora de factoriales para números introducidos por teclado.
El factorial de un número N es la multiplicación de todos los números desde 1 hasta N. Es decir, para
N = 5, el factorial de 5 sería: 5! = 5*4*3*2*1 = 120*/

console.clear();
const prompt = require("prompt-sync")();

const N = prompt("Introduce número: "); 

/*let factorial = 1;
for (let i = N; i >= 1; i--) {
    factorial *= i;
}
*/

function factorial (N) {
    if (N===1) {
        return 1;
    } else {
        return N * factorial(N-1);
    }
}

console.log("El factorial de ", N, "es ", factorial(N));