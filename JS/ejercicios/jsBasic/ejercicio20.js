// Ejercicio 20
// Teniendo en cuenta que la clave es “eureka”, escribir un algoritmo que nos pida una clave. Solo
// tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrara un mensaje indicándonos
// que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa.

console.clear();
const prompt = require("prompt-sync")();

const clave = "eureka";
let enter;
let indice = 0;
while ((enter !== clave) && (indice < 3)) {
    enter = (prompt("Introducir la contraseña: "));
    indice++;
} 

(enter===clave) ? console.log(`Lo conseguiste!`) : console.log(`Has agotado los intentos`);

// if (enter===clave) {
//     console.log("OK")
// } else {
//     console.log("3 intentos out")
// }