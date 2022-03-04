// Ejercicio 9
// Construir un algoritmo que dado como datos 5 calificaciones de un alumno imprima el promedio y la
// palabra “aprobado” si el alumno tiene un promedio mayor o igual que 5, y la palabra “no aprobado”
// en caso contrario.

const prompt = require("prompt-sync")();

/*let qualification1 = Number(prompt("Nota Historia: "));
let qualification2 = Number(prompt("Nota Lengua: "));
let qualification3 = Number(prompt("Nota Matemáticas: "));
let qualification4 = Number(prompt("Nota Informática: "));
let qualification5 = Number(prompt("Nota Inglés: "));

let suma = qualification1 + qualification2 + qualification3 + qualification4 + qualification5;
let promedio = suma / 5;

if (promedio >= 5) {
    console.log (`${promedio} Aprobado`);
} else {
    console.log ("A tu casa");
}*/



let notas = Number(prompt("Número de notas a introducir: "));
let nota;
let sum = 0;
let promedio = 0;

for (i = 0; i < notas; i++) {
    nota = Number(prompt(`Introduce la nota ${i+1}: `));
    sum += nota;
}

promedio = sum / nota;
console.log("El promedio es: ", promedio);

if (promedio >= 5) {
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}