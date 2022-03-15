//Ejercicio 8
//Dado el sueldo de un trabajador, diseña un algoritmo que aplique un incremento de sueldo del 15%
//si el sueldo es inferior a 1000€. Imprimir el nuevo sueldo.

const prompt = require("prompt-sync")();

let salary = Number(prompt("Sueldo del trabajador: "));


if (salary < 1000) {
    let increment = salary * 0.15;
    let salary2 = salary + increment;
    console.log("El nuevo sueldo es: " + salary2); 
} else if (salary === 1000) {
    console.log ("El sueldo se queda igual");
} else {
    console.log ("Es rico");
}