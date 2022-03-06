/* Ejercicio 44
Partir del ejercicio 2 y añadir la siguiente funcionalidad:
El usuario tendrá un menú numérico en pantalla para poder elegir entre las operaciones a realizar.
Si da una opción incorrecta (no existe), el programa avisará al usuario y volverá a mostrar el menú.
Hará esto hasta que el usuario elija la opción de salir del programa. Ejemplo de menú impreso por
pantalla:
“Seleccione el número de una de las siguientes opciones:
1: Sumar
2: Restar
3: Multiplicar
4: Dividir
5: Salir del programa*/

const prompt = require("prompt-sync")();

let number1 = Number(prompt("Introduce un número: "));
let number2 = Number(prompt("Introduce el segundo número: "));

let suma = number1 + number2;
let resta = number1 - number2;
let multiplicacion = number1 * number2;
let division = number1 / number2;

console.log("La suma es: " + suma);
console.log("La resta es: " + resta);
console.log("La multiplicacion es: " + multiplicacion);
console.log("La division es: " + division);