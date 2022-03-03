const prompt = require("prompt-sync")();
const alumnos = Number(prompt("Introduce el número de alumnos: "));
//let notas = [];
let suma = 0;
for (let i=0; i < alumnos; i = i + 1) {
    // notas[i] = Number(prompt (`Introduce nota del alumno ${i+1} :`));
    suma = suma + Number(prompt (`Introduce nota del alumno ${i+1} :`));
}
// let suma = 0;
// for (let i=0; i< alumnos; i++) {
//     suma = suma + notas[i];
//     console.log (`la suma es ${suma}`);
// }
console.log (`La media es ${suma/alumnos}`);