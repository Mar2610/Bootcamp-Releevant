/*Ejercicio 24
Calcular las calificaciones de un grupo de alumnos. La nota final de cada alumno se calcula según
el siguiente criterio: la parte práctica vale el 10%; la parte de problemas vale el 50% y la parte
teórica el 40%. El algoritmo leerá el nombre del alumno, las tres notas, escribirá el resultado y
volverá a pedir los datos del siguiente alumno hasta que el nombre sea una cadena vacía. Las
notas deben estar entre 0 y 10, si no lo están, no imprimirá las notas, mostrará un mensaje de error
y volverá a pedir otro alumno.*/

const prompt = require("prompt-sync")();
let nombre;
do {
    nombre = prompt("Introduce el nombre: ");
    if (nombre !== "") {
      calcula_notas (nombre)
    }
} while (nombre !== "");

function calcula_notas (alumno) {
   let nota_practica = pedir_nota ("practica",10);
   let nota_teorica = pedir_nota ("teorica",40);
   let nota_problemas = pedir_nota ("problemas",50); 
   console.log (`La nota de ${alumno} es ${nota_practica+nota_teorica+nota_problemas}`);
}

function pedir_nota (nota,porcentaje) {
    let valor = Number(prompt(`Introduce la nota de ${nota}:`));
    return valor * porcentaje / 100;
}